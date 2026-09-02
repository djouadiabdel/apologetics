"""Split the season documents into one Obsidian note per episode.

    python3 obsidian-split.py

**One-way.** The season files under `Research/` are the source of truth. Anything
you type into an episode note is overwritten the next time this runs. Edit the
season file, then re-split.

What it does beyond splitting:
  - real YAML frontmatter, so Obsidian's properties panel is useful
  - `>>` becomes `>`, which is what Obsidian actually renders as a callout
  - prev / next / season wikilinks at the top and bottom
  - zero-padded filenames so they sort correctly in the file explorer
  - a season index note per folder
"""

import glob
import os
import re
import shutil

DIR = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(DIR, "Episodes")
WPM = 135


def slug(s):
    """A filename Obsidian is happy with. Wikilinks break on : / \\ | # ^ [ ]"""
    s = s.replace("—", "-")
    s = re.sub(r"[:/\\|#^\[\]]", "", s)
    return re.sub(r"\s+", " ", s).strip()


ACRONYMS = {"SUM", "MIN", "KJV", "ASV", "HTML", "NT", "P-VALUE",
            "I", "II", "III", "IV"}
SMALL = {"a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "into",
         "is", "it", "of", "on", "or", "the", "to", "with", "that", "than"}


def titlecase(s):
    """Season files store titles in caps. Title case reads better as a note name.

    Acronyms are a whitelist, not a length rule: the length heuristic turned
    "YOU WANT IT" into "YOU Want it".
    """
    words = s.split()
    out = []
    for i, w in enumerate(words):
        stripped = w.strip(",.:;'\"")
        if stripped.upper() in ACRONYMS:
            out.append(w)
            continue
        lw = w.lower()
        after_colon = i and words[i - 1].rstrip().endswith(":")
        if i and not after_colon and lw.strip(",.:;") in SMALL:
            out.append(lw)
        else:
            # capitalise each hyphenated part, keep the rest lowercase
            out.append("-".join(p[:1].upper() + p[1:] for p in lw.split("-")))
    return " ".join(out)


def speakable(body):
    b = re.sub(r"^\|.*$", "", body, flags=re.M)
    b = re.sub(r"```.*?```", "", b, flags=re.S)
    b = re.sub(r"^\s*_{3,}\s*$", "", b, flags=re.M)
    b = re.sub(r"^## Questions.*", "", b, flags=re.S | re.M)
    return len(b.split())


def anchor(body, kind):
    m = re.search(rf"^## The {kind}[^\n]*$", body, re.M)
    if m:
        sec = body[m.end():]
        nxt = re.search(r"^## ", sec, re.M)
        if nxt:
            sec = sec[:nxt.start()]
        b = re.search(r"\*\*(.+?)\*\*", sec, re.S)
        if b:
            return re.sub(r"\s+", " ", b.group(1)).strip(" .:*")
    return ""


def to_obsidian(body):
    """`>>` is this project's blockquote marker. Obsidian wants `>`."""
    body = re.sub(r"^>> ?", "> ", body, flags=re.M)
    body = re.sub(r"^---pagebreak---\s*$", "", body, flags=re.M)
    return re.sub(r"\n{3,}", "\n\n", body).strip()


def main():
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)          # regenerate cleanly, no orphans left behind
    os.makedirs(OUT)

    total = 0
    for f in sorted(glob.glob(os.path.join(DIR, "Research", "*.md"))):
        base = os.path.basename(f)
        s = int(re.search(r"Season (\d)", base).group(1))
        stitle = re.search(r"Season \d — (.+)\.md", base).group(1)
        folder = os.path.join(OUT, slug(f"Season {s} - {stitle}"))
        os.makedirs(folder, exist_ok=True)
        text = open(f, encoding="utf-8").read()

        eps = []
        for b in re.split(r"^@@ ", text, flags=re.M)[1:]:
            head = b.split("\n")[0]
            if not head.startswith("EPISODE"):
                continue
            n = int(re.match(r"EPISODE (\d+)", head).group(1))
            raw = re.sub(r"^EPISODE \d+ — ", "", head).strip()
            eps.append((n, titlecase(raw), b[len(head):]))

        names = {n: slug(f"S{s}E{n:02d} - {t}") for n, t, _ in eps}

        for i, (n, title, body) in enumerate(eps):
            prev = f"[[{names[eps[i-1][0]]}|← {eps[i-1][1]}]]" if i else "—"
            nxt = f"[[{names[eps[i+1][0]]}|{eps[i+1][1]} →]]" if i < len(eps)-1 else "—"
            w = speakable(body)
            fm = [
                "---",
                f"season: {s}",
                f"episode: {n}",
                f'title: "{title}"',
                f"words: {w}",
                f"minutes: {round(w / WPM, 1)}",
                f'character_anchor: "{anchor(body, "character")}"',
                f'clinical_anchor: "{anchor(body, "clinical")}"',
                "status: draft",
                "filmed: false",
                "generated: true",
                "tags:",
                "  - falsifiable-girard",
                f"  - season-{s}",
                "---",
                "",
                f"> [!info] S{s}E{n:02d} · {w} words · ~{round(w / WPM, 1)} min"
                f" · [[{slug(f'Season {s} - {stitle}')} — Index|season index]]",
                f"> **Generated from `Research/{base}`. Edits here are overwritten.**",
                "",
                f"# {title}",
                "",
                f"{prev} · {nxt}",
                "",
                "---",
                "",
            ]
            note = "\n".join(fm) + to_obsidian(body) + \
                f"\n\n---\n\n{prev} · {nxt}\n"
            open(os.path.join(folder, names[n] + ".md"), "w",
                 encoding="utf-8").write(note)
            total += 1

        idx = [
            "---", f"season: {s}", "generated: true",
            "tags:", "  - falsifiable-girard", f"  - season-{s}", "---", "",
            f"# Season {s} — {stitle}", "",
            f"**{len(eps)} episodes · {sum(speakable(b) for _, _, b in eps):,} "
            f"speakable words · ~{round(sum(speakable(b) for _, _, b in eps)/WPM)} min**",
            "", "| # | episode | words | min |", "|---|---|---|---|",
        ]
        for n, title, body in eps:
            w = speakable(body)
            idx.append(f"| {n} | [[{names[n]}\\|{title}]] | {w} | {round(w/WPM,1)} |")
        idx += ["", "---", "", "Source of truth: `Research/" + base + "`.",
                "Re-run `obsidian-split.py` after editing it."]
        open(os.path.join(folder, slug(f"Season {s} - {stitle}") + " — Index.md"),
             "w", encoding="utf-8").write("\n".join(idx) + "\n")

    print(f"wrote {total} episode notes into {OUT}")


if __name__ == "__main__":
    main()
