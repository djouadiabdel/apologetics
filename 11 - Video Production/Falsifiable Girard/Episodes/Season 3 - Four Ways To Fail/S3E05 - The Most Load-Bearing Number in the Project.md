---
season: 3
episode: 5
title: "The Most Load-Bearing Number in the Project"
words: 1119
minutes: 8.3
character_anchor: "Two subs of the same episode"
clinical_anchor: ""
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-3
---

> [!info] S3E05 · 1119 words · ~8.3 min · [[Season 3 - Four Ways To Fail — Index|season index]]
> **Generated from `Research/Season 3 — Four Ways To Fail.md`. Edits here are overwritten.**

# The Most Load-Bearing Number in the Project

[[S3E04 - The Clean Corpus Rule|← The Clean Corpus Rule]] · [[S3E06 - One Lynching in Seventeen Thousand Words|One Lynching in Seventeen Thousand Words →]]

---
## The stake

The most load-bearing number in six seasons has nothing to do with Girard. **It
is the measurement of how much the instrument wobbles when nothing changed**, and
after this episode you will ask for a noise floor before believing any striking
difference anyone shows you.

## Collecting episode 4

Round 2 has six predictions. Five are about Girard.

**This episode is about the sixth, which has nothing to do with Girard at all**,
and on which every result in six seasons depends.

## The prediction nobody thinks about

> **P5.** Two different translations of the **same play**, by different
> translators, should land within **25%** of each other on total rate.

Aeschylus' *Agamemnon*. Murray's translation, and a different one.

## The device, and the clinical anchor is the same object: two labs, one sample

**This is not an analogy, it is the same procedure.**

You send one blood sample to two laboratories. **If they disagree, nothing either
of them has ever reported about any patient means anything**, and no amount of
clever analysis downstream repairs it.

Notice that this is a different kind of check from everything else in the season.
Every other test asks whether a hypothesis about the texts is right. **This one
asks whether the instrument is measuring the object it is pointed at**, and it has
to pass before any of the others are worth running, because a failure here does
not weaken the other results. It deletes them.

> The instrument is supposed to be measuring **the text.** If it is measuring
> **the translator**, then every comparison in this project is a comparison of two
> Edwardian Englishmen's word choices.

## The character anchor

**Two subs of the same episode.**

Anybody who has watched anime with one group's subtitles and then rewatched with
another's knows the experience. Same scene, same performance, same original
script, **and two English lines that carry a noticeably different weight.** One
renders a threat as flat and clipped, the other makes it florid. Fan arguments
about which is correct run for years.

Now imagine building a tool that counts aggressive vocabulary and running it over
one group's subtitles across a whole season. **You would learn a great deal about
that translation team.** Whether you had learned anything about the show is a
completely separate question, and the tool cannot tell you which one you got.

**This project is that tool**, pointed at Greek, and this episode is the only
place it checks.

## The result

| | total |
|---|---|
| translation A | 14.82 |
| translation B | 12.64 |
| | **17.2% apart** |

**Pass.**

## Why this is the most important number in the project

> "Had this failed, **every cross-text comparison in the entire project would have
> been void**, because the instrument would have been measuring translators' word
> choices rather than texts."

**Every single result in six seasons rests on this one control.** Not the p-values.
**This.**

And it earns that status by position rather than by cleverness. Every other test
sits downstream of it. **A p-value tells you how surprising a number is, given that
the number measures what you think it measures**, and that clause is not something
statistics can supply. It has to be established separately, by a control like this
one, or assumed silently by everybody.

## And now the weakness, in the same episode

**It has been run on exactly one paired play. n = 1.**

The results file itself says it "should be repeated on more paired translations."
**It has not been.**

> **The most load-bearing number in the project has a sample size of one**, and
> saying so is the episode.

Put those two facts next to each other and hold them there. Every result in the
project depends on this control. This control is one comparison between two
translations of one play. **Nothing else in six seasons rests on a single
observation, and the thing that does is the thing everything else rests on.**

**And there is a second thing to notice, which is worth more than the first.**
17.2% is a **pass** against a 25% bound. But is 17.2% *small*?

Ask what the number actually is before answering. It is the disagreement between
two careful people rendering the identical Greek. **Neither translator is wrong.
Neither text has been corrupted. Nothing has gone wrong at any point**, and the
instrument still reports two values a fifth apart.

> So 17.2% is not a pass mark. **It is the instrument's own wobble**, measured, and
> any comparison between two texts that differ by less than about 17% is inside
> it. **The project never states that anywhere.**

That is the useful way to hold a control result, and almost nobody does it. A
control is normally read as a gate: it passed, proceed. **Read it instead as a
ruler.** It tells you the smallest difference this instrument is entitled to have
an opinion about, and every later result should be compared against that figure
before it is compared against a threshold.

**Go back to episode 8 when you get there.** It puts this number next to the
mythography-versus-tragedy gap, and that gap is **0.5%.**

## What raising n would actually cost, since the episode keeps saying nobody did

Price it, because "should be repeated" is the cheapest sentence in science and it
is worth knowing what it was buying out of.

You need a play with **two independent public-domain English translations** of the
whole text, both clean enough to score. That is the binding constraint, and it is
not rare: Aeschylus, Sophocles and Euripides were all translated repeatedly in the
window this corpus draws from.

Then you fetch, clean and score them exactly as before. **The scorer already
exists. The pipeline already exists. Nothing new has to be built.**

> Realistically: **an afternoon per pair**, and five pairs would take the most
> load-bearing number in the project from n = 1 to n = 6.

Say that on camera, because it changes what the omission means. **This was not
blocked by difficulty, cost, or access.** It was not done because the check had
already passed once, and a check that has passed stops feeling like a check.

## What would count against this

1. **The two translators being unusually similar.** Both are early-twentieth
   century, both scholarly, both British. **A modern free translation would
   probably blow the bound**, and nobody has tried.
2. **17.2% being large.** It is. **The pass is a pass against a bound that was
   set generously**, and the bound was set by the same person who wanted the pass.

## Handing off

The instrument measures texts rather than translators, **within about a fifth.**

**Episode 6 is the prediction that failed**, and it failed on Girard's single
most important example.

## Questions

1. **17.2% apart is a pass against a 25% bound. Is 17.2% actually small?**
2. **What would you do to raise n**, and what would it cost?
3. If translations differ by 17%, **what does that imply about a genre gap of
   0.5%?**

---

[[S3E04 - The Clean Corpus Rule|← The Clean Corpus Rule]] · [[S3E06 - One Lynching in Seventeen Thousand Words|One Lynching in Seventeen Thousand Words →]]
