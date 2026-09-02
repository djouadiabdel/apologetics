"""Checks about the WRITING that audit.py and coherence.py cannot make.

    python3 content-check.py

audit.py counts structure. coherence.py compares numbers between seasons. Neither
can tell whether an episode is over-dense, whether two episodes reuse the same
character anchor, or whether a sentence got copy-pasted across a split.

Every check here was tested against a deliberately broken copy first. A check that
has never failed is not a check.
"""

import glob
import os
import re
import sys
from collections import Counter, defaultdict

DIR = os.path.dirname(os.path.abspath(__file__))
WPM = 135
DENSITY_CEILING = 3.0        # distinct numbers per spoken minute
REFRAIN = "cannot fail"      # the series' own spine

defects = []


def flag(where, kind, msg):
    defects.append((where, kind, msg))
    print(f"    !! {where}  {kind}: {msg}")


def speakable(body):
    """Words actually said aloud. Tables and code are consulted, not narrated."""
    b = re.sub(r"^\|.*$", "", body, flags=re.M)
    b = re.sub(r"```.*?```", "", b, flags=re.S)
    b = re.sub(r"^\s*_{3,}\s*$", "", b, flags=re.M)
    b = re.sub(r"^## Questions.*", "", b, flags=re.S | re.M)
    return b


def section_of(body, kind):
    """The whole anchor section, used to spot a deliberate callback."""
    m = re.search(rf"^## The {kind}[^\n]*$", body, re.M)
    if not m:
        return ""
    sec = body[m.end():]
    nxt = re.search(r"^## ", sec, re.M)
    return sec[:nxt.start()] if nxt else sec


def anchor(body, kind):
    sec = section_of(body, kind)
    b = re.search(r"\*\*(.+?)\*\*", sec, re.S)
    return re.sub(r"\s+", " ", b.group(1)).strip(" .:*") if b else ""


def load():
    eps = []
    for f in sorted(glob.glob(os.path.join(DIR, "Research", "*.md"))):
        s = int(re.search(r"Season (\d)", f).group(1))
        text = open(f, encoding="utf-8").read()
        for x in re.split(r"^@@ ", text, flags=re.M)[1:]:
            head = x.split("\n")[0]
            if not head.startswith("EPISODE"):
                continue
            n = int(re.match(r"EPISODE (\d+)", head).group(1))
            title = re.sub(r"^EPISODE \d+ — ", "", head).strip()
            eps.append({"s": s, "n": n, "title": title,
                        "body": x[len(head):], "file": os.path.basename(f)})
    return eps


def check_density(eps):
    """THE DENSITY LAW. High facts-per-minute means under-explained, not rich.

    The fix for a flagged episode is more explanation of the numbers it already
    has, never more numbers.
    """
    print("\n[1] number density (distinct numbers per spoken minute)")
    for e in eps:
        spoken = speakable(e["body"])
        words = len(spoken.split())
        mins = words / WPM
        nums = set(re.findall(r"(?<![\w.])\d[\d,]*(?:\.\d+)?(?![\w])", spoken))
        d = len(nums) / mins if mins else 0
        e["density"] = d
        if d > DENSITY_CEILING:
            flag(f"S{e['s']}E{e['n']}", "over-dense",
                 f"{d:.1f} numbers/min in {e['title'][:40]}")
    worst = sorted(eps, key=lambda e: -e["density"])[:5]
    print("    densest five, for context:")
    for e in worst:
        print(f"      S{e['s']}E{e['n']:<2} {e['density']:4.1f}/min  {e['title'][:44]}")


def check_anchor_reuse(eps):
    """Two episodes leaning on the same character wastes the strongest device."""
    print("\n[2] anchors used more than once")
    for kind in ("character", "clinical"):
        seen = defaultdict(list)
        obj = defaultdict(list)
        for e in eps:
            a = anchor(e["body"], kind)
            if not a:
                continue
            key = re.sub(r"[^a-z ]", "", a.lower())
            seen[key].append(f"S{e['s']}E{e['n']}")
            # The OBJECT, not the whole phrase. "a discharge summary against the
            # full notes" and "a discharge summary that says doing well" are the
            # same anchor wearing different clothes, and comparing full strings
            # missed exactly that across S1E17 and S5E19.
            # A repeat that NAMES the earlier episode is a callback, not a
            # duplicate. S1E13 reuses The Usual Suspects on purpose and says so;
            # S3E7 reuses the Wikipedia plot summary and cites S1E17. Flagging
            # those trains you to ignore the check.
            sec = section_of(e["body"], kind)
            if re.search(r"episode \d+", sec, re.I):
                continue
            m = re.match(r"(?:an?|the) ([a-z-]+(?: [a-z-]+)?)", key)
            if m:
                obj[m.group(1)].append(f"S{e['s']}E{e['n']}")
        for a, where in seen.items():
            if len(where) > 1:
                flag(", ".join(where), f"duplicate {kind} anchor", a[:60])
        for o, where in obj.items():
            if len(where) > 1 and len(o.split()) > 1:
                flag(", ".join(where), f"same {kind} object", o)
    print("    checked both anchor slots, by phrase and by object")


def check_reused_sentences(eps):
    """A split copies a paragraph into both halves and nobody notices on camera.

    A re-quoted source is not a repeat. Girard's page 3 sentence is deliberately
    read in two episodes, and the second one says so. Only unquoted prose counts.
    """
    print("\n[3] long sentences appearing in more than one episode")
    seen = defaultdict(set)
    for e in eps:
        prose = "\n".join(l for l in speakable(e["body"]).split("\n")
                          if not l.lstrip().startswith(">"))
        # Strip emphasis BEFORE splitting. A sentence ending in "**" has no
        # ". " boundary after it, so the next sentence silently glues on and the
        # same sentence hashes differently in two episodes. That defeated this
        # check entirely until a planted duplicate proved it.
        prose = re.sub(r"[*_`#]", "", prose)
        for para in re.split(r"\n\s*\n", prose):
            for sent in re.split(r"(?<=[.!?])\s+", re.sub(r"\s+", " ", para)):
                s = re.sub(r"[>|]", "", sent).strip().lower()
                if len(s.split()) >= 12:
                    seen[s].add(f"S{e['s']}E{e['n']}")
    for s, where in seen.items():
        if len(where) > 1:
            flag(", ".join(sorted(where)), "repeated sentence", s[:80])
    print(f"    compared {len(seen):,} distinct unquoted sentences of 12+ words")


def check_refrain(eps):
    """The spine has to be audible in every season, not just declared in the index."""
    print(f"\n[4] the series refrain ({REFRAIN!r}) reaches every season")
    per = Counter()
    for e in eps:
        if REFRAIN in e["body"].lower():
            per[e["s"]] += 1
    for s in sorted({e["s"] for e in eps}):
        if not per[s]:
            flag(f"S{s}", "refrain missing", "the season never states the spine")
        else:
            print(f"    S{s}  {per[s]} episodes state it  ok")


def check_prose_punctuation(eps):
    """No em-dashes or ellipses in HIS prose. Headers use — as a separator.

    Quoted material is exempt and must stay exempt. Inside a quotation an ellipsis
    is an elision marker, and "tidying" one silently misrepresents a source. Those
    lines are listed separately as notices, never as defects to go and fix.
    """
    print("\n[5] em-dashes and ellipses in spoken prose")
    notices = []
    for e in eps:
        for line in speakable(e["body"]).split("\n"):
            if line.startswith("#") or line.strip().startswith("@@"):
                continue
            if not ("—" in line or "..." in line or "…" in line):
                continue
            where = f"S{e['s']}E{e['n']}"
            text = re.sub(r"\s+", " ", line).strip()[:90]
            if line.lstrip().startswith(">"):
                notices.append((where, text))
            else:
                flag(where, "punctuation", text)
    if notices:
        print(f"    {len(notices)} inside quotations, left alone by design:")
        for w, t in notices:
            print(f"      {w:8} {t[:70]}")


def check_question_count(eps):
    """Hand-off questions are the homework. One is not a set."""
    print("\n[6] every episode ends with at least two questions")
    for e in eps:
        m = re.search(r"^## Questions.*", e["body"], re.S | re.M)
        n = len(re.findall(r"^\d+\. ", m.group(0), re.M)) if m else 0
        if n < 2:
            flag(f"S{e['s']}E{e['n']}", "thin hand-off", f"{n} questions")
    print("    checked all episodes")


def main():
    eps = load()
    print("=" * 78)
    print("CONTENT AUDIT — checks about the writing, not the structure")
    print("=" * 78)
    print(f"\n{len(eps)} episodes across "
          f"{len({e['s'] for e in eps})} seasons")

    check_density(eps)
    check_anchor_reuse(eps)
    check_reused_sentences(eps)
    check_refrain(eps)
    check_prose_punctuation(eps)
    check_question_count(eps)

    print("\n" + "=" * 78)
    if defects:
        print(f"{len(defects)} CONTENT DEFECTS")
        for w, k, m in defects:
            print(f"  {w:16} {k:26} {m[:60]}")
    else:
        print("NO CONTENT DEFECTS FOUND")
    print("=" * 78)
    return 1 if defects else 0


if __name__ == "__main__":
    sys.exit(main())
