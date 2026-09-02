"""Per-episode deep scan across every season. Surfaces CANDIDATES, not verdicts.

    python3 deep-check.py            # all
    python3 deep-check.py 3          # one season

audit.py checks form, coherence.py checks agreement between seasons,
content-check.py checks the writing. This checks the things that need a human to
look at afterwards, so everything here prints as a candidate to inspect rather
than as a defect. **Nothing in this file should be "fixed" without reading the
episode.**

Measured noise, from the first full pass over 90 episodes. Trust them in this
order and do not treat a flag as a defect:

  [4] anchor families   HIGH signal, found a real unmarked repeat
  [5] shape             HIGH signal, found an episode whose device was prose only
  [6] title collisions  MEDIUM, most are deliberate season-wide naming
  [1] orphan numbers    MEDIUM, dense episodes legitimately carry one-off figures
  [3] answerable Qs     LOW, roughly 2 real hits in 15 flags
  [2] weak collects     LOWEST, it punishes a SHORT collect, and a short collect
                        that carries the previous conclusion is correct

[2] and [3] are kept because their few true positives are things no other check
can see, not because their output can be read straight.
"""

import glob
import os
import re
import sys
from collections import defaultdict

DIR = os.path.dirname(os.path.abspath(__file__))
WPM = 135
ONLY = int(sys.argv[1]) if len(sys.argv) > 1 else None


def load():
    eps = []
    for f in sorted(glob.glob(os.path.join(DIR, "Research", "*.md"))):
        s = int(re.search(r"Season (\d)", f).group(1))
        if ONLY and s != ONLY:
            continue
        text = open(f, encoding="utf-8").read()
        for b in re.split(r"^@@ ", text, flags=re.M)[1:]:
            head = b.split("\n")[0]
            if not head.startswith("EPISODE"):
                continue
            n = int(re.match(r"EPISODE (\d+)", head).group(1))
            eps.append({"s": s, "n": n,
                        "title": re.sub(r"^EPISODE \d+ — ", "", head).strip(),
                        "body": b[len(head):]})
    return eps


def spoken(body):
    b = re.sub(r"^\|.*$", "", body, flags=re.M)
    b = re.sub(r"```.*?```", "", b, flags=re.S)
    b = re.sub(r"^\s*_{3,}\s*$", "", b, flags=re.M)
    return re.sub(r"^## Questions.*", "", b, flags=re.S | re.M)


def section(body, name):
    m = re.search(rf"^## {name}[^\n]*$", body, re.M | re.I)
    if not m:
        return ""
    sec = body[m.end():]
    nxt = re.search(r"^## ", sec, re.M)
    return sec[:nxt.start()] if nxt else sec


def tag(label, msg):
    print(f"    {label:9} {msg}")


# --------------------------------------------------------------------------
def check_orphan_numbers(eps):
    """A distinctive number said once in 90 episodes and never again.

    Either it is load-bearing and under-used, or it is decoration the viewer
    cannot do anything with. Both are worth a look.
    """
    print("\n[1] distinctive numbers that appear exactly once in the series")
    seen = defaultdict(list)
    for e in eps:
        for m in re.finditer(r"(?<![\w.])(\d[\d,]*\.\d+|\d{3,}[\d,]*)(?![\w])",
                             spoken(e["body"])):
            seen[m.group(1)].append(f"S{e['s']}E{e['n']}")
    once = {v: w[0] for v, w in seen.items() if len(w) == 1}
    print(f"    {len(once)} of {len(seen)} distinct numbers occur once")
    by_ep = defaultdict(list)
    for v, w in once.items():
        by_ep[w].append(v)
    for w, vs in sorted(by_ep.items(), key=lambda kv: -len(kv[1]))[:6]:
        tag(w, f"{len(vs)} one-off numbers: {', '.join(sorted(vs)[:7])}")


def check_collecting(eps):
    """Rule 1 says COLLECT the previous episode's conclusion, not mention it.

    A collect that names no content from the previous episode is a transition,
    not a collection, and the difference is visible on camera.
    """
    print("\n[2] opening collects that may not carry content forward")
    prev = {}
    for e in eps:
        key = (e["s"], e["n"] - 1)
        if key in prev:
            col = section(e["body"], "Collecting")
            if not col:
                continue
            # does the collect share any distinctive long word with the prior ep?
            pw = set(re.findall(r"\b[a-z]{7,}\b", spoken(prev[key]).lower()))
            cw = set(re.findall(r"\b[a-z]{7,}\b", col.lower()))
            shared = pw & cw
            if len(shared) < 4:
                tag(f"S{e['s']}E{e['n']}",
                    f"collect shares only {len(shared)} content words with "
                    f"E{e['n']-1}: {sorted(shared)}")
        prev[(e["s"], e["n"])] = e["body"]


def check_questions_answerable(eps):
    """Rule 6: questions whose answers are NOT in the doc.

    A question quoting a phrase that already appears in its own episode is
    probably answerable by rereading, which defeats the point.
    """
    print("\n[3] hand-off questions that may be answerable from the episode")
    for e in eps:
        q = re.search(r"^## Questions.*", e["body"], re.S | re.M)
        if not q:
            continue
        body_l = spoken(e["body"]).lower()
        for line in re.findall(r"^\d+\. (.+)$", q.group(0), re.M):
            core = re.sub(r"[*_`]", "", line).lower()
            frag = [w for w in re.findall(r"\b[a-z]{8,}\b", core)]
            if len(frag) >= 3 and all(w in body_l for w in frag):
                tag(f"S{e['s']}E{e['n']}", f"Q: {line[:78]}")
                break


def check_anchor_families(eps):
    """Two anchors from the same family is a repeat the string check misses."""
    print("\n[4] anchors drawn from the same family")
    FAM = {
        "medical-imaging": r"radiolog|scan\b|imaging|x-ray|ct\b|mri",
        "trial-design": r"\btrial\b|endpoint|placebo|randomis",
        "audit-notes": r"incident report|discharge summary|\bnotes\b|audit",
        "sport": r"referee|goalkeeper|penalt|boxer|match|striker|jenga|pool",
        "detective": r"detective|courtroom|jury|juror|trial by|witness|police",
        "film-continuity": r"continuity|plot summary|remake|highlight reel|mockbuster",
        "gambling": r"gacha|dice|coin flip|lottery|shuffle",
    }
    fam = defaultdict(list)
    for e in eps:
        for kind in ("character", "clinical"):
            sec = section(e["body"], f"The {kind}")
            b = re.search(r"\*\*(.+?)\*\*", sec, re.S)
            if not b:
                continue
            txt = re.sub(r"\s+", " ", b.group(1)).lower()
            for name, rx in FAM.items():
                if re.search(rx, txt):
                    fam[name].append((f"S{e['s']}E{e['n']}", txt[:44]))
    for name, items in sorted(fam.items()):
        if len(items) > 2:
            print(f"    {name} ({len(items)}):")
            for w, t in items:
                print(f"        {w:8} {t}")


def check_shape(eps):
    """Length, density and section count together, so outliers are visible."""
    print("\n[5] per-episode shape, flagged where any dimension is extreme")
    for e in eps:
        sp = spoken(e["body"])
        w = len(sp.split())
        mins = w / WPM
        nums = len(set(re.findall(r"(?<![\w.])\d[\d,]*(?:\.\d+)?(?![\w])", sp)))
        secs = len(re.findall(r"^## ", e["body"], re.M))
        tables = e["body"].count("\n|---")
        flags = []
        if w < 950:
            flags.append("near floor")
        if w > 1700:
            flags.append("near ceiling")
        if secs < 6:
            flags.append(f"only {secs} sections")
        if tables == 0:
            flags.append("NO TABLE")
        if tables > 5:
            flags.append(f"{tables} tables")
        if mins and nums / mins > 2.6:
            flags.append(f"{nums/mins:.1f} num/min")
        if flags:
            tag(f"S{e['s']}E{e['n']}", f"{w:>5}w  {e['title'][:38]:40} "
                                       f"{', '.join(flags)}")


def check_prose(eps):
    """How the sentences are BUILT, which decides whether an explanation lands.

    Two measured faults, both mine rather than his:

    **Long subordinated sentences.** Over ~38 words a sentence stops being
    followable when read aloud. The worst offenders in this project were added
    while FIXING comprehension gaps: a definition got stuffed into a subordinate
    clause and traded one comprehension problem for another.

    **Clustered stamp openings.** "That is X" / "It is Y" converts what just
    happened into a labelled conclusion. One is a signpost and helps. Two inside
    three sentences is a tic, and the commonest form is the balanced antithesis
    "That is not X. It is Y." Per the standing note on my prose: where that
    construction appears, admit X and show what sense of X was doing the damage,
    rather than negating it and restating.

    Neither is a defect on its own. Both are places to look.
    """
    print("\n[7] prose construction")
    STAMP = re.compile(r"^(That is|It is|This is)\b", re.I)
    longs, clusters = [], []
    openings = defaultdict(int)
    for e in eps:
        body = re.sub(r"^#+ .*$", "", spoken(e["body"]), flags=re.M)
        for para in re.split(r"\n\s*\n", body):
            p = re.sub(r"[*_`>]", "", re.sub(r"\s+", " ", para)).strip()
            sents = [x for x in re.split(r"(?<=[.!?])\s+", p) if x]
            for x in sents:
                openings[" ".join(x.split()[:2]).lower().strip(",")] += 1
                if len(x.split()) >= 38:
                    longs.append((len(x.split()), f"S{e['s']}E{e['n']}", x))
            hits = [i for i, x in enumerate(sents) if STAMP.match(x)]
            for i in range(len(hits) - 1):
                if hits[i + 1] - hits[i] <= 2:
                    clusters.append((f"S{e['s']}E{e['n']}", sents[hits[i]]))
                    break
    longs.sort(reverse=True)
    print(f"    {len(longs)} sentences of 38+ words (hard to follow aloud)")
    for w, where, x in longs[:5]:
        tag(where, f"{w}w  {x[:66]}")
    print(f"    {len(clusters)} paragraphs with clustered stamp-openings")
    for where, x in clusters[:4]:
        tag(where, x[:70])
    top = sorted(openings.items(), key=lambda kv: -kv[1])[:3]
    print("    most repeated openings: " +
          ", ".join(f"{w!r} x{c}" for w, c in top))


def check_title_collisions(eps):
    print("\n[6] titles sharing distinctive words")
    words = defaultdict(list)
    STOP = {"that", "this", "what", "when", "with", "from", "your", "the",
            "and", "for", "it", "is", "a", "of", "to", "in", "on", "one", "not"}
    for e in eps:
        for w in re.findall(r"[A-Z']{4,}", e["title"]):
            if w.lower() not in STOP:
                words[w].append(f"S{e['s']}E{e['n']}")
    for w, where in sorted(words.items()):
        if len(where) > 2:
            tag(w, ", ".join(where))


def main():
    eps = load()
    print("=" * 78)
    print(f"DEEP SCAN — {len(eps)} episodes. Everything here is a CANDIDATE.")
    print("=" * 78)
    check_orphan_numbers(eps)
    check_collecting(eps)
    check_questions_answerable(eps)
    check_anchor_families(eps)
    check_shape(eps)
    check_prose(eps)
    check_title_collisions(eps)
    print("\n" + "=" * 78)
    print("Read the episode before changing anything.")
    print("=" * 78)


if __name__ == "__main__":
    main()
