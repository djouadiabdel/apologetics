"""Coherence audit across seasons. Complements audit.py, which only checks form.

    python3 coherence.py

Three checks that can be decided mechanically:

  A. every PLANTED number has a detonation target, and the number actually
     appears in that target episode
  B. the same quantity is quoted with the same value everywhere it appears
  C. a forward reference points at a season that exists, or is flagged as a
     promise still owed
"""

import glob
import os
import re
from collections import defaultdict

DIR = os.path.dirname(os.path.abspath(__file__))
FILES = sorted(glob.glob(os.path.join(DIR, "Research", "*.md")))
WRITTEN = {1, 2, 3, 4, 5}

problems = []


def season_no(f):
    return int(re.search(r"Season (\d+)", os.path.basename(f)).group(1))


def blocks(text):
    """{(season, ep): body} for episode blocks."""
    out = {}
    for b in re.split(r"^@@ ", text, flags=re.M)[1:]:
        m = re.match(r"EPISODE (\d+) — (.+)", b.split("\n")[0])
        if m:
            out[int(m.group(1))] = (m.group(2), b)
    return out


def main():
    docs = {season_no(f): open(f, encoding="utf-8").read() for f in FILES}
    eps = {s: blocks(t) for s, t in docs.items()}

    print("=" * 78)
    print("COHERENCE AUDIT — do the seasons agree with each other")
    print("=" * 78)

    # ------------------------------------------------------------------ A
    print("\n[A] planted numbers reach the episode they promise")
    plant = re.compile(
        r"(?:detonates? in|goes off in|Plant(?:ed)? (?:it|that|this) here[^.]*?)"
        r"\s*\*{0,2}Season (\d+)(?:[^.\n]*?episode (\d+))?", re.I)
    found = 0
    for s, t in docs.items():
        for m in plant.finditer(t):
            found += 1
            tgt_s = int(m.group(1))
            tgt_e = int(m.group(2)) if m.group(2) else None
            line = t[:m.start()].count("\n") + 1
            # the sentence around it, to pull the number being planted
            ctx = t[max(0, m.start() - 400):m.end() + 60]
            nums = re.findall(r"\*\*([\d.,]+%?)\*\*", ctx)
            label = f"S{s}:{line} -> S{tgt_s}" + (f" ep{tgt_e}" if tgt_e else "")
            if tgt_s not in WRITTEN:
                print(f"    {label:28} PROMISE OWED (season not written)")
                continue
            if tgt_e is None:
                print(f"    {label:28} no episode named")
                problems.append((label, "plant has no episode"))
                continue
            if tgt_e not in eps[tgt_s]:
                print(f"    {label:28} TARGET EPISODE DOES NOT EXIST")
                problems.append((label, "target missing"))
                continue
            title, body = eps[tgt_s][tgt_e]
            hit = [n for n in nums if n.rstrip("%") in body]
            if nums and not hit:
                print(f"    {label:28} MISMATCH: planted {nums[:3]} but none "
                      f"appear in '{title[:34]}'")
                problems.append((label, f"planted {nums[:3]} absent from target"))
            else:
                print(f"    {label:28} ok -> {title[:38]}")
    if not found:
        print("    no plant statements found")

    # ------------------------------------------------------------------ B
    print("\n[B] the same quantity quoted with the same value everywhere")
    QUANT = {
        "marks share of king": r"`?marks`?[^.\n]{0,40}?(\d\d)%[^.\n]{0,30}?king|"
                               r"king[^.\n]{0,30}?(\d\d)%[^.\n]{0,40}?`?marks`?",
        "crisis share of death": r"(\d\d)%[^.\n]{0,30}?(?:the word )?.?death",
        "crimes rate": r"`?crimes`?[^.\n]{0,60}?(0\.9\d)",
        # corpus-wide bucket rate only. 4.71 elsewhere is the Bacchae's own
# violence score in round 2 P4, a different quantity. An earlier version
# of this regex conflated them and reported a defect that was not one.
        "violence rate": r"violence[ |]+\|?\s*(4\.76)|violence at \*{0,2}(4\.76)",
        "bacchae words": r"\*\*(17,180)\*\* words|(17,180)[- ]word",
        "bacchae rank": r"rank\s+\*{0,2}(35 of 72)",
        "p 0.0045": r"p\s*=\s*(0\.0045)",
        "translation gap": r"(17\.2)%",
    }
    for name, rx in QUANT.items():
        vals = defaultdict(list)
        for s, t in docs.items():
            for m in re.finditer(rx, t, re.I):
                v = next((g for g in m.groups() if g), None)
                if v:
                    vals[v].append(s)
        if len(vals) > 1:
            print(f"    {name:24} INCONSISTENT: " +
                  ", ".join(f"{v} in S{sorted(set(ss))}" for v, ss in vals.items()))
            problems.append((name, "inconsistent value"))
        elif vals:
            v, ss = next(iter(vals.items()))
            print(f"    {name:24} {v:12} consistent across S{sorted(set(ss))}")

    # ------------------------------------------------------------------ C
    print("\n[C] forward references into unwritten seasons (promises owed)")
    owed = defaultdict(list)
    for s, t in docs.items():
        for m in re.finditer(r"Season (\d+)(?:[^.\n]{0,40}?episode (\d+))?", t):
            tgt = int(m.group(1))
            if tgt not in WRITTEN:
                line = t[:m.start()].count("\n") + 1
                ctx = re.sub(r"\s+", " ", t[m.start():m.start() + 90])
                owed[tgt].append(f"S{s}:{line}  {ctx[:74]}")
    for tgt in sorted(owed):
        print(f"    Season {tgt}: {len(owed[tgt])} promises")
        for o in owed[tgt][:6]:
            print(f"        {o}")
        if len(owed[tgt]) > 6:
            print(f"        ... and {len(owed[tgt])-6} more")

    # ------------------------------------------------------------------ D
    # A promise into a season that now EXISTS is not owed, it is either paid or
    # broken, and [C] cannot tell those apart because it only looks at WRITTEN.
    # This checks the promise was actually kept: every number quoted in the
    # promise has to turn up in the season it points at.
    print("\n[D] promises into seasons that now exist, and whether they were paid")
    for s, t in sorted(docs.items()):
        # NOT [^.\n]: a promise quoting "p = 0.888" contains a period, so a
        # sentence-bounded window can never capture a decimal and the check
        # silently passes on everything. It did exactly that until this line
        # was fixed.
        for m in re.finditer(r"Season (\d+)[^\n]{0,150}", t):
            tgt = int(m.group(1))
            if tgt not in WRITTEN or tgt == s or tgt not in docs:
                continue
            promise = re.sub(r"\s+", " ", m.group(0))
            nums = set(re.findall(r"\d+\.\d+", promise))
            if not nums:
                continue                      # nothing checkable in this one
            missing = [n for n in nums if n not in docs[tgt]]
            line = t[:m.start()].count("\n") + 1
            if missing:
                print(f"    !! S{s}:{line} -> S{tgt}  promised {missing}, "
                      f"not in that season")
                problems.append((f"S{s}->S{tgt}", f"unpaid promise {missing}"))
            else:
                print(f"    S{s}:{line} -> S{tgt}  {sorted(nums)}  paid")

    # ------------------------------------------------------------------ E
    # Every split rewrites how many episodes a season has, and the sentences
    # that COUNT episodes live in other seasons' prose where no renumber
    # touches them. Four of these were stale for weeks: S2E1 opened "Fifteen
    # episodes gave you a theory" about a season that had grown to eighteen.
    print("\n[E] spelled-out episode counts against the season they describe")
    WORDS = {w: i for i, w in enumerate(
        "zero one two three four five six seven eight nine ten eleven twelve "
        "thirteen fourteen fifteen sixteen seventeen eighteen nineteen "
        "twenty".split())}
    WORDS.update({"twenty-one": 21, "twenty-two": 22, "twenty-three": 23,
                  "twenty-four": 24})
    # (?<![\w-]) so "Twenty-two episodes" is not read as "two episodes".
    RX = re.compile(r"(?<![\w-])(" + "|".join(WORDS) + r")\s+episodes\b", re.I)
    sizes = {n: len(eps[n]) for n in sorted(eps)}
    # ONLY two places state a WHOLE-season count, and both are unambiguous:
    #   the header, "Research document. N episodes."
    #   a season-opening collect that names the season it is counting
    # Everything else is a PARTIAL count ("four episodes, one each"), which is
    # legitimate, common, and not checkable. The first version of this check
    # flagged all of them: 22 flags, 4 true. A check with that ratio is one
    # nobody reads twice, which makes it worse than no check.
    checked = 0
    for s, t in sorted(docs.items()):
        for m in RX.finditer(t):
            said = WORDS[m.group(1).lower()]
            line = t[:m.start()].count("\n") + 1
            window = t[max(0, m.start() - 300):m.start() + 120]
            header = line < 12
            # "Collecting Season N" only. "## Collecting thirteen episodes" in
            # S1E14 is a PARTIAL count, 13 of that season's own 18, and reading
            # it as a whole-season claim is how this check produced its last
            # false positive.
            opener = re.search(r"Collecting Season \d", window)
            if not (header or opener):
                continue
            checked += 1
            ctx = re.sub(r"\s+", " ", t[m.start():m.start() + 60])
            want = sizes.get(s) if header else sizes.get(s - 1)
            ok = said == want
            print(f"    {'ok ' if ok else '!! '}S{s}:{line:<5} \"{ctx[:42]}\"  "
                  f"{'own' if header else 'prev'} season has {want}")
            if not ok:
                problems.append((f"S{s}:{line}",
                                 f"counts {said} episodes, that season has {want}"))
    print(f"    {checked} whole-season counts checked; partial counts skipped "
          f"by design")

    print("\n" + "=" * 78)
    if problems:
        print(f"{len(problems)} COHERENCE DEFECTS")
        for a, b in problems:
            print(f"  {a}: {b}")
    else:
        print("NO COHERENCE DEFECTS FOUND")
    print("=" * 78)


if __name__ == "__main__":
    main()
