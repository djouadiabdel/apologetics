---
season: 3
episode: 3
title: "Validated on One Thing, Used on Another"
words: 1365
minutes: 10.1
character_anchor: ""
clinical_anchor: "A reference range from the wrong population"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-3
---

> [!info] S3E03 · 1365 words · ~10.1 min · [[Season 3 - Four Ways To Fail — Index|season index]]
> **Generated from `Research/Season 3 — Four Ways To Fail.md`. Edits here are overwritten.**

# Validated on One Thing, Used on Another

[[S3E02 - The Arithmetic of Rare Things|← The Arithmetic of Rare Things]] · [[S3E04 - The Clean Corpus Rule|The Clean Corpus Rule →]]

---
## The stake

Why did nobody see the collapse coming? Because of a mistake with a name in every
measurement field, **and it is invisible while you are making it**. This episode
is the closest the series comes to a vaccination.

## Collecting episode 2

The arithmetic explains the collapse. **This episode asks why nobody saw it
coming**, because the answer is a mistake with a name in every measurement field
and it is invisible while you are making it.

## The single sentence

**MIN was validated on 10,000-word tragedies and applied to 1,500-word episodes.**

Texts **six times shorter.**

And nothing announced the transition. Nobody switched instruments, nobody edited
the scorer, nobody wrote a line acknowledging a change of any kind. **The same
code ran on a different pile of files**, which is a thing that happens in every
project on every day, and the validation quietly stopped applying at the moment
the files changed.

## The clinical anchor, and it is the same error exactly

**A reference range from the wrong population.**

The assay is fine. The machine is calibrated. **The cut-off was established in
adults and you are applying it to a neonate.** Nobody did anything careless and
the result is meaningless.

Follow what that does to the paperwork, because it is the part that makes it
dangerous rather than merely wrong. **The number comes back flagged or not
flagged**, and the flag looks exactly like every other flag in the system. There
is no field on the report that says "this threshold was established in a different
population." The information that would rescue you is not absent because somebody
hid it. **It was never part of the object being passed around.**

**The character version: a boxer who trains for one weight class and fights in
another.** Everything he built is real. **None of it transfers.** His conditioning
is genuine, his timing was drilled against genuine opponents, and the drills were
calibrated to a body that will not be in front of him.

## The device: the two populations, side by side

**This is the whole episode in four cells**, and writing them next to each other is
the fix as well as the diagnosis.

| | validated on | applied to |
|---|---|---|
| text type | Greek tragedy | one Ovid myth |
| length | ~10,000 words | ~1,500 words |
| P(`crimes` empty) | **~0.000** | **0.24** |
| MIN behaves | cleanly, separates genres | **saturates at zero** |

**Nothing in the middle column is wrong.** The evidence was real. It was evidence
about the left-hand column.

## Why it is not an obvious mistake, which is the point of the episode

**The evidence for MIN was genuine.**

Season 2 episode 13 showed it: on the tragedy corpus, MIN killed the *Odyssey*
book 7 false positive automatically, with no special case and nobody noticing.
Every Greek tragedy at MIN ≥ 0.48, every control at MIN ≤ 0.32. **Clean
separation.**

That is not weak evidence. **It is exactly the kind of evidence that should justify
a choice.** If somebody had asked whether MIN was validated, the honest answer was
yes, and the honest answer was accompanied by a demonstration.

> **And there is now a second, worse answer, which Season 2 episode 13 carries in
> full.** The clean separation was computed on lexicon v1. Re-scored on the fixed
> lexicon the tragedy and control ranges **overlap**, so part of the evidence that
> justified the choice **was an artifact of a bug nobody re-ran after fixing.**
> The book 7 rescue survives; the partition does not.

**That does not replace this episode's diagnosis, it stacks under it.** Even had
the separation been real, it would still have been a fact about the metric AND the
texts together. **The lexicon finding says the demonstration was also weaker than
it looked**, which is a second way to be wrong about the same choice, and the two
are independent.

So identify precisely what went wrong, because "he should have been more careful"
names nothing. **The evidence was about the metric's behaviour, and behaviour is
not a property a metric has on its own.**

> **The mistake was assuming a metric's behaviour is a property of the METRIC.** It
> is a property of the metric **and the texts it runs on**, together, and those can
> change without anybody noticing that anything changed.

That is why the failure survives an intelligent author. A property of the metric
travels with the metric, and you carry it in your head as a settled fact, correctly
learned from real evidence. **A joint property of the metric and the corpus has to
be re-established every time the corpus moves**, and nothing in the world reminds
you, because the corpus moving is not an event.

**The rule, and it generalises to every measurement you will ever build:**

> **Validate a metric at the scale you intend to use it.**

## And a second, separate failure hiding in the same number

Pentheus scored `crimes 0.00`, and it is worth separating the two causes because
they got tangled into one result.

**Cause one, arithmetic:** MIN saturates at zero on short texts. Episode 2.

**Cause two, coverage:** Ovid describes the killing as **tearing and rending.** The
bucket contained `murder`, `parricide`, `pollution`. **None of the words Ovid
actually uses.**

> **That is a lexicon coverage failure, not a failure of Girard's theory**, and the
> two were tangled inside a single number until somebody pulled them apart.

And they cannot be untangled from the output, which is the general lesson worth
carrying. **A zero is a zero.** Nothing on the face of it records whether the
bucket was empty because the text lacks the thing, or because the text has the
thing under a different name, or because the text was too short for a rare thing to
appear. Three completely different diagnoses, one printed value, **and the value is
the only object that travels downstream.**

**And notice:** the fix for cause two is exactly the fix that Season 2 episode 9
**refused**, because putting the tearing vocabulary into `crimes` would have been
tuning the instrument to pass. **The right fix and the cheating fix were the same
edit**, distinguished only by which bucket it went into.

Which puts the project in a genuinely uncomfortable position and it should be said
plainly. **There is a real coverage defect here and it is still not repaired**,
because the only repair available was unavailable for reasons of discipline. The
honest description is not that the instrument was defended. It is that a known
fault was left in place, deliberately, and the reason it was left is better than
the reason for removing it.

## How you would have caught it, and it costs nothing

The general fix is one line in a pre-registration, and it is worth writing down
because it applies to every metric anybody ever borrows.

> **State the population the validation came from, next to the population you are
> about to use it on.** Not as prose. As two entries in a table, side by side, so
> the mismatch is visible rather than deducible.

Round 1's registration would have read: **validated on tragedies of roughly 10,000
words; applied to Ovid episodes of roughly 1,500 words.** Nobody who wrote those
two lines together would have proceeded without a sentence explaining why the
transfer was safe.

**The reason it was not caught is that the two facts never appeared in the same
document.** The validation lived in Season 2's reasoning; the application lived in
round 1's corpus. Both were correct. Neither was next to the other.

> That is the same shape as Season 3 episode 8's finding, where two numbers from
> the same round refute each other and were never printed on one page. **This
> project's characteristic failure is not error. It is adjacency.**

## What would count against this

1. **The tragedy-scale evidence being worthless.** It is not. It is real evidence
   about a different population, which is precisely the diagnosis.
2. **MIN failing for a third reason nobody has named.** Possible. **Nobody has
   run MIN on texts of matched length to isolate it**, which would settle it in
   an afternoon.

## Handing off

The lexicon has been revised after seeing a failure. **Episode 4 is about the one
rule that makes that survivable**, and about a disclosure nobody would have
noticed was missing.

## Questions

1. **Two failures in one number**, one statistical and one lexical. **How would
   you tell them apart if you only had the number?**
2. Name a metric in your own field **used outside the population it was validated
   on.** There will be one.
3. **Was the tragedy-scale evidence for MIN worthless, or just narrower than it
   looked?**

---

[[S3E02 - The Arithmetic of Rare Things|← The Arithmetic of Rare Things]] · [[S3E04 - The Clean Corpus Rule|The Clean Corpus Rule →]]
