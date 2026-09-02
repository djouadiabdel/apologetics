"""Scaffold a filming board from an episode's research doc.

    python3 board-scaffold.py 3 9        # season 3, episode 9

Fills the parts that ARE derivable and leaves the parts that are not as marked
blanks. It does not write a board. It removes the clerical half of writing one.

  DERIVED   pos (six-move spine) · cold (tables, numbers, quotes already in the
            research doc) · foot (citations) · must (from Comprehension Exam.md)
            · ref (page numbers computed from the rendered research PDF)

  BLANK     verbatim hook · ladder rungs · hot lines · refrain · zone cues · loop

The blanks are the teaching sequence and the spoken phrases, and they cannot be
derived from an essay, because an essay states a conclusion and a ladder climbs
to one. That distinction is why a board is a rewrite rather than a conversion.
"""

import glob
import os
import re
import subprocess
import sys

DIR = os.path.dirname(os.path.abspath(__file__))
RNOTE = "/home/djouad/Rnote/Falsifiable Girard"
SPINE = ["the text", "the difficulty", "the turn",
         "test one", "test two", "test three", "the landing"]


def episode(season, num):
    f = glob.glob(os.path.join(DIR, "Research", f"Season {season} —*.md"))[0]
    for b in re.split(r"^@@ ", open(f, encoding="utf-8").read(), flags=re.M)[1:]:
        head = b.split("\n")[0]
        if head.startswith(f"EPISODE {num} —"):
            return re.sub(r"^EPISODE \d+ — ", "", head).strip(), b
    sys.exit(f"S{season}E{num} not found")


def research_pages(season, num):
    """Which page of the rendered research PDF holds which section."""
    pat = os.path.join(RNOTE, f"Season {season} *", f"S{season}E{num:02d} *.pdf")
    hits = glob.glob(pat)
    if not hits:
        return []
    pdf = hits[0]
    info = subprocess.run(["pdfinfo", pdf], capture_output=True, text=True).stdout
    m = re.search(r"Pages:\s+(\d+)", info)
    out = []
    for p in range(1, int(m.group(1)) + 1 if m else 1):
        txt = subprocess.run(["pdftotext", "-f", str(p), "-l", str(p), pdf, "-"],
                             capture_output=True, text=True).stdout
        # section headings render as a short line on its own
        heads = [l.strip() for l in txt.split("\n")
                 if 8 < len(l.strip()) < 58 and l.strip()[0].isupper()
                 and not l.strip().isupper() and not re.match(r"^[\d.]+$", l.strip())]
        out.append((p, heads[:2]))
    return out


def exam_questions(season, num):
    """The three questions for THIS season's episode.

    Scope to the season's section first. Every season has an episode 9, so a
    bare "**E9" search returns Season 1's, and the first run of this scaffolder
    put Season 1's violence-bucket questions on a Season 3 p-value board. Wrong
    questions on a filming board is worse than no questions.
    """
    f = os.path.join(DIR, "Comprehension Exam.md")
    if not os.path.exists(f):
        return []
    t = open(f, encoding="utf-8").read()
    sec = re.search(rf"^## Season {season} —.*?(?=^## Season |\Z)", t, re.M | re.S)
    if not sec:
        return []
    m = re.search(rf"^\*\*E{num}\b[^\n]*\*\*\n((?:\d+\..*\n)+)", sec.group(0), re.M)
    if not m:
        return []
    return [re.sub(r"^\d+\.\s*", "", l).strip()
            for l in m.group(1).strip().split("\n")]


def cold_from(body):
    """Tables, bare numbers and quoted lines: the things worth pointing at."""
    out = []
    for tbl in re.findall(r"((?:^\|.*\n)+)", body, re.M):
        rows = [r for r in tbl.strip().split("\n") if not re.match(r"^\|[-\s|:]+\|$", r)]
        for r in rows:
            cells = [c.strip().strip("*`") for c in r.strip("|").split("|")]
            if any(cells):
                out.append(" | ".join(cells))
        out.append("")
    for q in re.findall(r"^>> (.+)$", body, re.M)[:4]:
        s = re.sub(r"[*]", "", q).strip()
        if len(s) > 24:
            out.append(s)
    return out


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    s, n = int(sys.argv[1]), int(sys.argv[2])
    title, body = episode(s, n)
    pages = research_pages(s, n)
    qs = exam_questions(s, n)
    cold = cold_from(body)

    L = []
    L.append("@@ HOOK")
    L.append(":: verbatim")
    L.append("TODO 30 seconds, word for word. 60-68 words. Concrete, no jargon,")
    L.append("no theory. End on a reason to keep watching.")
    L.append(":: then")
    L.append("TODO title, channel, one line on why this needs no background")
    L.append(":: must")
    for q in (qs or ["TODO no exam questions found for this episode"]):
        L.append(q)
    L.append(":: ref")
    for p, heads in pages:
        L.append(f"research  S{s}E{n:02d} p.{p}   " + (" / ".join(heads) if heads else ""))
    L.append("")

    for i, beat in enumerate(SPINE):
        L.append(f"@@ PAGE {i+1} — {beat.upper()}")
        L.append(f":: pos  {beat}")
        L.append(":: head TODO")
        L.append(":: ladder")
        L.append("1. SAY | TODO")
        L.append("2. ASK | TODO")
        L.append("3. THEY | TODO the answer they will give")
        L.append("4. NO | TODO why it is not that")
        L.append("5. LAND | TODO the rung this beat exists for")
        L.append(":: cold")
        chunk = cold[i * 6:(i + 1) * 6]
        L += chunk if chunk else ["TODO"]
        L.append(":: hot")
        L.append('"TODO a line that fires delivery"')
        L.append(":: zone TODO what to draw")
        L.append(f":: ref research S{s}E{n:02d} p.TODO")
        L.append(":: foot TODO citations")
        L.append(":: loop TODO hand to the next beat")
        L.append("")

    out = os.path.join(DIR, "Filming", f"S{s}E{n:02d} — {title.title()}.board")
    open(out, "w", encoding="utf-8").write("\n".join(L))
    todo = "\n".join(L).count("TODO")
    print(f"scaffolded {out}")
    print(f"  {len(pages)} research pages mapped, {len(qs)} exam questions, "
          f"{len(cold)} cold lines lifted")
    print(f"  {todo} TODOs left, and they are the ladder, the hook and the hot lines")


if __name__ == "__main__":
    main()
