---
season: 4
episode: 5
title: "Three of Four, and the Round Still Fails"
words: 951
minutes: 7.0
character_anchor: "A speedrun with the timer still running through the load screens"
clinical_anchor: "A subgroup analysis that was registered rather than discovered"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-4
---

> [!info] S4E05 · 951 words · ~7.0 min · [[Season 4 - The Repairs — Index|season index]]
> **Generated from `Research/Season 4 — The Repairs.md`. Edits here are overwritten.**

# Three of Four, and the Round Still Fails

[[S4E04 - Registering a Prediction You Expect to Fail|← Registering a Prediction You Expect to Fail]] · [[S4E06 - The Null that Tested the Wrong Half|The Null that Tested the Wrong Half →]]

---
## The stake

Three of four primary predictions pass, and the round still fails. **This is the
episode that teaches you why passing is not surviving**, and it will change how
you read every result you ever see, including your own.

## Collecting episode 4

Six predictions, four primary, one registered as expected-to-fail, one cashing a
July note about *Prometheus Bound*. All fixed before scoring.

## The numbers

| tier | n | median rate /1000 | mean | hits | words |
|---|---|---|---|---|---|
| **GOSPEL** | 4 | **1.387** | 1.349 | 112 | 83,180 |
| TRAGEDY | 23 | 0.667 | 0.795 | 236 | 320,887 |
| MYTH | 71 | 0.547 | 0.594 | 365 | 612,835 |

| | result | |
|---|---|---|
| **D1** ordinal medians | 0.547 < 0.667 < 1.387 | **PASS** |
| **D2** GOSPEL > MYTH | U=268, **p = 0.00034** | **PASS** |
| **D3** TRAGEDY > MYTH | U=1027, p = 0.032 | **PASS** |
| **D4** frequency-matched null | 591/2000 beat it, p = 0.296 | **FAIL** |
| **D5** *Prometheus Bound* top 3 | **rank 13** of 23 | **FAIL** |
| **D6** no myth above lowest Gospel | **7 of 71** exceed it | **FAIL** |

## Read the top row before anything else

**The ordinal series came out exactly as Girard predicts.** Myth below tragedy
below Gospel, in that order, on a construct sourced to two sentences of his, with
the words fixed in advance and five frequent Gospel words deliberately excluded.

And the Gospel-versus-myth separation is at **p = 0.00034**, which is not a
marginal number.

**This is the best-looking result in the project so far**, and it arrives in a
file whose title says the round fails.

Take a second on p = 0.00034 so the rest of the episode lands. It means: if the
Gospels were drawn from the same population as the myths, a separation this large
would turn up about **three times in ten thousand**. That is not a marginal
finding, it is not a borderline call, and nothing about the arithmetic is in
dispute.

> **Every number in that scorecard is correct.** The round does not fail because
> somebody made a mistake in it. It fails because of two paragraphs written
> weeks earlier, by the same person, in the document that set it up.

## Why 3 of 4 is not 3 of 4

Because the same document that registered the predictions also registered two
sensitivity analyses, in advance, and **both of them break a passing
prediction.**

**S1, core only.** Drop the `unan` tag, the half disclosed as higher-risk:

```
core only:   GOSPEL 0.402   TRAGEDY 0.503   MYTH 0.325
             ordinal BREAKS, tragedy now above Gospel
             GOSPEL > MYTH  p = 0.293      <- D2 gone
             TRAGEDY > MYTH p = 0.005      <- survives
```

**The concepts that state Girard's actual claim carry none of the effect.**
Innocent, guiltless, no fault, unjust, false witness, protest, denounce, defend,
plead. All of it, nothing. The contaminated half carries the entire result.

And look at what the ordinal series does when `unan` is removed. It does not
weaken. **It inverts.** Tragedy climbs above the Gospels, which is the opposite of
the prediction, on the words that state the prediction most directly.

That deserves naming rather than passing over. p = 0.293 is not "a smaller
effect". It is **no effect**, and the tier ordering has gone backwards, and this
is the half of the instrument built from the sentence the whole round was
sourced to.

**S2, epic excluded.** Restrict MYTH to mythography:

```
MYTHOGRAPHY 0.674    EPIC 0.382    TRAGEDY 0.667
TRAGEDY > MYTHOGRAPHY  p = 0.388   <- D3 gone
```

**Mythography scores above tragedy.** D3 passed only because 37 epic texts drag
the myth tier down. There is no myth-below-tragedy series. There is
**epic below everything**, which is a fact about Homer's register.

This is the same lesson as S1 in a different costume, so state it once in general
terms. **A tier is not a natural object.** MYTH here is 34 mythography texts plus
37 epic texts, and those two groups behave completely differently. A median taken
across them describes neither, and it moves depending on how many of each you
happen to have collected.

> So D3 was never really testing tragedy against myth. **It was testing tragedy
> against a mixture whose composition nobody chose deliberately**, and the
> mixture was 52% epic by accident of what was on Perseus.

## The device: the same round, scored twice

| | headline reading | with its own registered controls |
|---|---|---|
| D1 ordinal | PASS | breaks under S1 |
| D2 Gospel > myth | PASS, p = 0.00034 | p = 0.293 under S1 |
| D3 tragedy > myth | PASS, p = 0.032 | p = 0.388 under S2 |
| D4 null | FAIL | FAIL |
| **count** | **3 of 4** | **nothing survives** |

**Both columns are honest descriptions of the same run.** The left one is what
a paper would print.

And notice there is no dishonest step available to point at. Publishing the left
column requires no false sentence. You would report D1, D2 and D3 accurately,
mention the sensitivity analyses in a limitations paragraph, and every word would
be true. **Season 3 episode 1 called this the temptation that is not a lie**, and
here it is again with better numbers behind it.

The difference between the columns is not honesty. **It is whether the controls
were binding**, and a control is only binding if it was written before you knew
you would need to survive it.

## The clinical anchor

**A subgroup analysis that was registered rather than discovered.**

The usual scandal is a subgroup found afterwards. This is the opposite and it is
worth naming as a distinct thing: **a subgroup declared in advance, which then
destroys your main result.** Nobody makes you run it. The protocol does, and the
protocol was written by you.

## The character anchor

**A speedrun with the timer still running through the load screens.**

The run is genuinely fast. The player is genuinely good. And the category rules,
written by the community in advance, say load times count, so the record is not
a record. **Everybody can see the run was excellent. It still does not go on the
board**, and the reason it does not is a rule nobody applied specially to this
person.

## What would count against this

1. **The sensitivity analyses being too harsh.** Dropping `unan` removes half a
   construct sourced to Girard's own page 121. **Make that argument at full
   strength.** Then notice that the pre-registration wrote S1 *because* it
   suspected that half, and it was right.
2. **Epic not being myth.** If epic is excluded on principle, D3 was
   mis-specified rather than failed, and mythography above tragedy is the real
   finding.
3. **p = 0.00034 being real.** It is. **The question is what it is a p-value
   about**, and episodes 6 and 7 are the two different answers.

## Handing off

**Episode 6 asks why D4 failed**, and the answer is not that the instrument is
weak. It is that the null tested the half of the instrument with no signal in it.

## Questions

1. Which column of the device table would you have published? Answer honestly
   before episode 6.
2. **The `core` half carries nothing.** Give the innocent explanation, then the
   damaging one, and say what would distinguish them.
3. If epic drags the myth tier down, what does that say about every myth-tier
   number in Seasons 2 and 3?

---

[[S4E04 - Registering a Prediction You Expect to Fail|← Registering a Prediction You Expect to Fail]] · [[S4E06 - The Null that Tested the Wrong Half|The Null that Tested the Wrong Half →]]
