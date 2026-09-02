"""Mechanical audit of the season research docs.

    python3 audit.py

Checks only things that can be decided without judgement, because the
judgement-based half of an audit returns a positive whenever it looks and
cannot report its own false-negative rate.

Every check either passes or names the exact line. Nothing here has an opinion.
"""

import glob
import os
import re
import sys
from collections import Counter, defaultdict

DIR = os.path.dirname(os.path.abspath(__file__))
FILES = sorted(glob.glob(os.path.join(DIR, "Research", "*.md")))
INDEX = os.path.join(DIR, "Series Index.md")

DECLARED = re.compile(r"Research document\.\s+([\w-]+)\s+episodes", re.I)
WORDNUM = {"eight": 8, "nine": 9, "ten": 10, "eleven": 11, "twelve": 12,
           "thirteen": 13, "fourteen": 14, "fifteen": 15, "sixteen": 16,
           "seventeen": 17, "eighteen": 18, "nineteen": 19, "twenty": 20,
           "twentyone": 21, "twentytwo": 22}

problems = []


def flag(fname, kind, msg):
    problems.append((os.path.basename(fname), kind, msg))


def episodes(text):
    return re.findall(r"^@@ EPISODE (\d+) — (.+)$", text, re.M)


def season_no(fname):
    m = re.search(r"Season (\d+)", os.path.basename(fname))
    return int(m.group(1)) if m else None


def main():
    docs = {f: open(f, encoding="utf-8").read() for f in FILES}

    print("=" * 78)
    print("MECHANICAL AUDIT — checks with no opinion in them")
    print("=" * 78)

    # ---------------------------------------------------------- 1 counts
    print("\n[1] declared episode count against actual blocks")
    counts = {}
    for f, t in docs.items():
        eps = episodes(t)
        counts[season_no(f)] = [int(n) for n, _ in eps]
        m = DECLARED.search(t)
        # "Twenty-two episodes" must survive: the word-boundary regex stops at
        # the hyphen and returns "two", which is not in the table, so the count
        # silently read None and the check could not fail.
        dec = WORDNUM.get(m.group(1).lower().replace("-", "")) if m else None
        ok = dec == len(eps)
        print(f"    S{season_no(f)}  declared {dec}  actual {len(eps)}  "
              f"{'ok' if ok else 'MISMATCH'}")
        if not ok:
            flag(f, "count", f"declares {dec}, has {len(eps)}")

    # ---------------------------------------------------------- 2 numbering
    print("\n[2] episode numbers contiguous from 1")
    for f, t in docs.items():
        ns = [int(n) for n, _ in episodes(t)]
        expect = list(range(1, len(ns) + 1))
        if ns != expect:
            print(f"    S{season_no(f)}  {ns}  NOT CONTIGUOUS")
            flag(f, "numbering", f"{ns}")
        else:
            print(f"    S{season_no(f)}  1..{len(ns)}  ok")

    # ---------------------------------------------------------- 3 crossrefs
    print("\n[3] every cross-reference resolves to an episode that exists")
    ref = re.compile(r"Season (\d+),? episodes? (\d+)(?:\s*(?:to|-|and)\s*(\d+))?",
                     re.I)
    bad = 0
    for f, t in docs.items():
        for m in ref.finditer(t):
            s = int(m.group(1))
            targets = [int(m.group(2))]
            if m.group(3):
                targets.append(int(m.group(3)))
            if s not in counts:
                continue           # forward reference to an unwritten season
            for tg in targets:
                if tg not in counts[s]:
                    line = t[:m.start()].count("\n") + 1
                    print(f"    {os.path.basename(f)}:{line}  -> S{s} ep {tg} "
                          f"DOES NOT EXIST (S{s} has 1..{max(counts[s])})")
                    flag(f, "crossref", f"line {line}: S{s} ep {tg}")
                    bad += 1
    if not bad:
        print("    all resolve  ok")

    # ---------------------------------------------------------- 4 structure
    print("\n[4] every episode has all seven register rules")
    # The six rules the project set for itself. Until 15 Aug this check looked
    # only for "## Questions" and the word "anchor", so 16 episodes were missing
    # a falsifier section or a hand-off and the audit reported no defects. A
    # check that cannot fail prints reassurance, including this one.
    need = {
        "collecting": re.compile(
            r"^## (Collecting|Where we are|Why this episode is here"
            r"|Start by collecting)", re.M),
        "character anchor": re.compile(
            r"^## The character|character version|Second anchor"
            r"|character anchor", re.M | re.I),
        "clinical anchor": re.compile(
            r"^## The clinical|clinical version|clinical anchor"
            r"|it is clinical", re.M | re.I),
        "what would count against": re.compile(
            r"^## What would count against|^## What this round can and cannot"
            r"|^## Do not resolve", re.M),
        "handing off": re.compile(
            r"^## Handing off|^## How to end|^## Closing the season"
            r"|^## What comes next|^## What to do with your face", re.M),
        "questions": re.compile(r"^## Questions", re.M),
        # Rule 7, added 28 Aug 2026. He films off the research PDF itself, so
        # the first thirty seconds have to be ON the page, word for word, or
        # they get improvised and re-shot. Marked >% so nothing else can be
        # mistaken for it.
        "hook": re.compile(r"^## The first thirty seconds\s*\n\s*\n>% ", re.M),
    }
    for f, t in docs.items():
        blocks = re.split(r"^@@ ", t, flags=re.M)[1:]
        for b in blocks:
            title = b.split("\n")[0]
            if not title.startswith("EPISODE"):
                continue
            # episode 1 of a season has no previous episode to collect
            first = title.startswith("EPISODE 1 —")
            miss = [k for k, rx in need.items()
                    if not rx.search(b) and not (first and k == "collecting")]
            if miss:
                print(f"    S{season_no(f)} {title[:44]:44} missing: "
                      f"{', '.join(miss)}")
                flag(f, "structure", f"{title[:40]}: {miss}")

    print("\n[4b] hook runtime (target 25-33s at 135 wpm)")
    # Presence is not the check that matters. A hook nobody timed is a hook that
    # runs fifty seconds, and the whole point of writing it down is that the
    # opening is the one part he cannot afford to discover on camera.
    nohook = short = long_ = ok = 0
    for f, t in docs.items():
        for b in re.split(r"^@@ ", t, flags=re.M)[1:]:
            title = b.split("\n")[0]
            if not title.startswith("EPISODE"):
                continue
            m = re.search(r"^## The first thirty seconds[^\n]*$", b, re.M)
            body = ""
            if m:
                sec = b[m.end():]
                nxt = re.search(r"^## ", sec, re.M)
                body = sec[:nxt.start()] if nxt else sec
            words = len(" ".join(
                l.strip()[2:] for l in body.split("\n")
                if l.strip().startswith(">%")).replace("*", "").split())
            if not words:
                nohook += 1
                continue
            secs = round(words / 135 * 60)
            if secs > 33:
                print(f"    S{season_no(f)} {title[:44]:44} {secs:3d}s  TOO LONG")
                flag(f, "hook", f"{title[:40]}: {secs}s")
                long_ += 1
            elif secs < 20:
                print(f"    S{season_no(f)} {title[:44]:44} {secs:3d}s  too short")
                flag(f, "hook", f"{title[:40]}: {secs}s")
                short += 1
            else:
                ok += 1
    print(f"    {ok} in range, {long_} too long, {short} too short, "
          f"{nohook} with no hook at all")

    # ---------------------------------------------------------- 5 length
    print("\n[5] speakable length per episode (target 1,350 = 10 min at 135 wpm)")
    print("    stripped of tables, code, rule-lines and question blanks")
    for f, t in docs.items():
        blocks = re.split(r"^@@ ", t, flags=re.M)[1:]
        for b in blocks:
            title = b.split("\n")[0]
            if not title.startswith("EPISODE"):
                continue
            # Drop the "EPISODE N — TITLE" line before counting. It was left in
            # until now, so every episode read ~8 words longer than it speaks and
            # the 900 floor was that much looser than it claimed. content-check
            # and deep-check both excluded it, so the three tools disagreed.
            body = re.sub(r"^\|.*$", "", b[len(title):], flags=re.M)
            body = re.sub(r"```.*?```", "", body, flags=re.S)
            body = re.sub(r"^\s*_{3,}\s*$", "", body, flags=re.M)
            body = re.sub(r"^## Questions.*", "", body, flags=re.S | re.M)
            n = len(body.split())
            # target is 1,350 (a 10-minute episode at 135 wpm). The earlier
            # thresholds of 450/1100 were set when every episode was a stub and
            # they flagged a correct-length episode as "long".
            mark = ""
            if n < 900:
                mark = "  <-- THIN"
            elif n > 1800:
                mark = "  <-- OVERLONG, split it"
            print(f"    S{season_no(f)} {title[:46]:46} {n:5d}{mark}")
            if n < 900:
                flag(f, "thin", f"{title[:40]}: {n} words")
            # An overlong episode used to print a warning that did not count as a
            # defect, so the summary could report "NO MECHANICAL DEFECTS FOUND"
            # with a 1,855-word episode on screen. A check that cannot fail
            # prints reassurance, which is the one thing this series is about.
            elif n > 1800:
                flag(f, "overlong", f"{title[:40]}: {n} words")

    # ---------------------------------------------------------- 6 glossary
    print("\n[6] bolded technical terms that are not in the glossary")
    idx = open(INDEX, encoding="utf-8").read()
    gl = set()
    for m in re.finditer(r"^\|\s*\*\*(.+?)\*\*\s*\|", idx, re.M):
        for part in re.split(r"\s*/\s*", m.group(1)):
            gl.add(part.strip().lower())
    TECH = ["null", "p-value", "permutation", "sensitivity analysis", "power",
            "denominator", "falsifier", "pre-registration", "sampling frame",
            "corpus", "lexicon", "surface form", "rate per thousand",
            "contamination disclosure", "z", "sum", "min"]
    missing = [t for t in TECH if t.lower() not in gl]
    if missing:
        print(f"    NOT IN GLOSSARY: {missing}")
        flag(INDEX, "glossary", str(missing))
    else:
        print("    all core terms present  ok")

    # ---------------------------------------------------------- 7 planted
    print("\n[7] planted numbers with a named detonation point")
    for f, t in docs.items():
        for m in re.finditer(r"(?:detonat|Plant it here|plant(?:ed)? (?:that|it|this))",
                             t, re.I):
            line = t[:m.start()].count("\n") + 1
            ctx = t[m.start():m.start() + 160].replace("\n", " ")
            has_target = bool(re.search(r"Season \d|episode \d", ctx, re.I))
            if not has_target:
                print(f"    {os.path.basename(f)}:{line}  plant with no named "
                      f"target: {ctx[:70]}")
                flag(f, "plant", f"line {line}")

    # ---------------------------------------------------------- summary
    print("\n" + "=" * 78)
    if not problems:
        print("NO MECHANICAL DEFECTS FOUND")
    else:
        by = Counter(k for _, k, _ in problems)
        print(f"{len(problems)} DEFECTS: " +
              "  ".join(f"{k}={v}" for k, v in by.most_common()))
        for fn, k, m in problems:
            print(f"  [{k:10}] {fn}: {m}")
    print("=" * 78)
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
