---
title: Falsifiable Girard — Blog Series Plan
series: Falsifiable Girard
type: plan
status: in progress
---

The written companion to the video series. Eleven posts, destined for
**Mimesis & the Cross** (`~/quartz`, published as himself, not the Hank Ayamura
pen name).

**Read this file before drafting any post in this folder.**

---

## Why a blog at all, given everything else exists

This is the **fourth artifact** off the same material, after the research docs,
the forensic record and the filming boards. It earns its place on one property
and only one:

>> **A reader can stop and check a table. A viewer cannot.**

So the blog carries the numbers the video has to skip. Written to be
**consulted**, it is not redundant. Written as a transcript of the videos, it is.

## The material it is compressed from

| source | words |
|---|---|
| 5 season research docs (91 episodes) | 124,757 |
| `~/Myths` preregistrations, results, corrections | 30,279 |
| `~/Myths/interlock` incl. REGISTRY, VERDICT, patristic | 60,089 |
| **total** | **~215,000** |

At ~29,000 words the series is a **7:1 compression**. The writing is mostly
selection. **The figures are the genuinely new work**, because all 30-odd devices
in the season docs are *board* devices, designed to be drawn live while he talks.
None of them exist as static figures.

## The shape

**Eleven posts, ~28,800 words, 9 to 13 minutes each.** Depth is deliberately
uneven. Five posts go all the way down, six carry the connective argument.

The length target follows his own density finding: **high density means
under-explained, not rich.** The peak posts get *more explanation of the facts
they already have*, never more facts. S3E12 is the best episode in the series at
981 words and 11 numbers.

**ALL ELEVEN DRAFTED 17 Aug, ALL ELEVEN PUBLISHED 18 Aug 2026**, live on
Mimesis & the Cross with **all 37 figures drawn** as inline SVG. Measured, not
planned:

| # | post | words | min | figs |
|---|---|---|---|---|
| 1 | The Accusation, and the Wager | 1,920 | 8.3 | 2 **drawn** — **PUBLISHED 17 Aug** |
| 2 | Girard in the Minimum | 2,220 | 9.7 | 4 |
| 3 | **PEAK** The Rule Girard Actually Wrote | 2,215 | 9.6 | 3 |
| 4 | Turning Four Sentences Into Code | 2,372 | 10.3 | 3 |
| 5 | The Sample Is Part of the Claim | 1,975 | 8.6 | 3 |
| 6 | **PEAK** Four Broken Nulls, One Mistake | 2,851 | 12.4 | 5 |
| 7 | The Arithmetic, All of It | 2,278 | 9.9 | 4 |
| 8 | What a Timestamp Actually Proves | 2,051 | 8.9 | 2 |
| 9 | **PEAK** Ten Rounds, and the Half That Never Carried Anything | 2,205 | 9.6 | 4 |
| 10 | **PEAK** A Check That Cannot Fail Prints Reassurance | 2,156 | 9.4 | 3 |
| 11 | The Other Two Instruments, and What It All Cost | 2,168 | 9.4 | 4 |
| | **total** | **24,411** | **106** | **37** |

**Posts 1, 5 and 8 sit at 8.3 to 8.9 minutes, just under the 9-minute floor.**
Left there rather than padded. Each is a connective post and the honest fix is
more explanation, not more facts.

Voice-checked, all eleven: mean sentence 12.0 to 16.2 against a Bukowski target
of 11.8 and his essay default of 15.2. Zero em-dashes and zero ellipses in prose
(the one ellipsis in post 3 is an elision marker inside a Girard quotation, which
the benchmark permits). **`under 5 words` is the metric still short**, running 8
to 17% against a 23.6% target; posts 6 and 10 are the closest and are the model
for the rest.

The announcement material is **not its own post** at this length. It is folded
into 1 and 11.

## Why those five are the peaks

Each is something the project has that nobody else does, and each is checkable by
a reader who does not trust him.

- **3.** *The Scapegoat* ch. 3 states Girard's own decision rule, **"three are
  enough and often even two"**, and it is *weaker* than the version the project
  measured. The project's own 90% figure refutes it. Ten rounds were failing at a
  strengthened claim while the stated claim falls the other way. The honest
  defence goes in the same post.
- **6.** The only finding that generalises past Girard entirely. Four rounds built
  a null that held constant the wrong thing. Round 8 fixed it in one line. **A
  reader leaves able to catch the mistake in someone else's paper.**
- **9.** `core` never carried anything, on any measure, in any round, four
  consecutive times, and the reason is arithmetic anybody can follow. Empty
  accusation runs 3.68× toward the Gospels, advocacy runs 17× backwards, they
  cancel to 1.08×. **The bucket contradicts its own docstring, in the file.**
- **10.** The refrain, firing on the project itself. P6 certifies MIN by asking a
  yes/no question about zero and is blind to the largest change ever made to the
  metric. `audit.py` printed OVERLONG and reported NO MECHANICAL DEFECTS. N3
  compared two booleans and printed "matches". **Three instances, all in-house.**
  The noise floor folds in here: the mythography-vs-tragedy gap the project
  agonised over is **0.5%, inside a 17.2% translation control.**

## What "peak" means, as a bar rather than a mood

1. **One idea carried all the way down.** Not five stated.
2. **A worked example the reader can run** on their own numbers.
3. **A figure that does the argument**, not one that decorates it.
4. **The reader finishes able to catch the error themselves**, rather than
   trusting that he caught it.

## Standing build rules for every post

- **Voice.** Bukowski *Tales of Ordinary Madness* targets. Run
  `python3 ~/Documents/reference/voicecheck.py <draft>` before calling one done.
  Targets: mean sentence ~11.8, median 8, **18-20% under five words**, paragraphs
  ~27, colons under 24 per 10k. Zero em-dashes, zero ellipses.
- **The tool is blind to the two rules that matter most.** After the metrics,
  do a manual pass hunting **the general-man sentence** (category subject teaching
  a rule, especially as a closing line, because a generalisation is the cheapest
  available ending), **balanced antithesis** (apply the inversion test), and
  **stacked disavowals**.
- **Every number traceable** to a file in `~/Myths` or a season doc. No figure
  reconstructed from memory. The project caught itself misremembering twice.
- **Tier V / tier K** applies here exactly as on camera. Never attribute a precise
  claim to a named scholar from memory.
- **Report failures as failures**, at the top, before what survives. Same rule the
  repository runs on.

## Open decisions

1. **Figures are specced, not drawn.** Post 6 carries five bracketed
   `[FIGURE n. ...]` slots with enough detail to build. Decide whether they become
   inline SVG (theme-aware, works in Quartz) or Rnote-drawn plates.
2. **Anchor reuse across mediums.** Post 6 reuses the **control group** (S3E12)
   and **testing a lock by pulling the door** (S4E12). The no-duplicate rule
   governs episodes; whether it governs blog-against-episode is his call. Current
   working answer: **reuse is fine, a reader is not a viewer.**
3. **Post 6 spoils part of post 9.** The `core` half carrying nothing is post 9's
   spine, and post 6 needs it to make round 8 honest. Working answer: **keep it in
   6**, and let post 9 be the fourth consecutive instance rather than the reveal.
4. **Publication order and cadence** unset. Note the series' own sequencing
   decision for video is *do not open with Season 1*; the blog may want the
   opposite, since a reader arriving cold has no 162-minute problem.

## Converting a post for Quartz — verified 17 Aug by test-building

Four things must change. Everything else passes through.

| in the vault | on the site | why |
|---|---|---|
| `>>` emphasis lines | **`>`** | `>>` is the Rnote board convention. Quartz renders it as a **blockquote inside a blockquote**, doubly indented. Confirmed by build |
| `> [FIGURE n. ...]` | **inline `<svg>`** or delete | otherwise the placeholder text prints on the page as a note to self |
| full frontmatter | **`title:` only** | `status`, `sources`, `tier`, `post` are vault bookkeeping |
| "post 6" in prose | `[[wikilink]]`, or reword | only works once the target is published |

**What already works, tested:** `$$...$$` renders, because `quartz.config.yaml`
loads `github:quartz-community/latex` with `renderEngine: katex`. Tables render.
Callouts are enabled (`callouts: true`) if we ever want `> [!note]`. **Inline SVG
passes through the pipeline intact.**

**Draw figures with `stroke="currentColor"` and `fill="currentColor"`**, plus
`width="100%"` and `style="max-width:760px;height:auto"`. That makes them
theme-aware for free, in light and dark, with no media queries. Post 1's two
figures are built this way and are the reference.

Note Quartz emits **two** files per note, `Title-Cased.html` (a stub) and the real
page at the lowercase slug. Verify against the **lowercase** one.

**Commas survive into the slug.** `Four Broken Nulls, One Mistake.md` became the
URL `four-broken-nulls,-one-mistake`. **Keep commas out of the filename** and put
them in the `title:` field, which is where they render anyway. Two files were
renamed for this on 18 Aug.

**Verifying a broken link:** grepping the built HTML for the word *broken* is
useless here, because the prose says it constantly. Check instead that every
`href="./x"` resolves to a real file in `public/`.

## The figure house style, now fixed by 37 examples

- `viewBox="0 0 760 H"`, `width="100%"`, `style="max-width:760px;height:auto;display:block;margin:2rem auto"`
- **`currentColor` for every stroke and fill**, with `fill-opacity` for weight.
  That is the whole theme-awareness mechanism and it needs no media query.
- `#e03131` **only** for the thing that is wrong. Nothing else is ever coloured.
- font-size 13 for labels, 12.5 for captions, `font-family="inherit"`
- Every `<marker>` needs a **unique id per figure**, since several SVGs share a page.
- `role="img"` plus a real `aria-label` describing the finding, not the shapes.

## Getting one onto the site

Per the Quartz flow: put the file in `~/quartz/content/` with `title:`
frontmatter and no body H1, add a line to `index.md` under the right section,
`npx quartz build`, then commit and push `v5`.

**Deciding which of these goes public is his call, always.** The push itself is
pre-authorised; the selection is not.
