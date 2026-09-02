---
season: 4
episode: 16
title: "The First Positive Result, and Where it Lives"
words: 1037
minutes: 7.7
character_anchor: "A smoke detector wired to the wrong circuit"
clinical_anchor: "An alarm limit set outside the physiological range"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-4
---

> [!info] S4E16 · 1037 words · ~7.7 min · [[Season 4 - The Repairs — Index|season index]]
> **Generated from `Research/Season 4 — The Repairs.md`. Edits here are overwritten.**

# The First Positive Result, and Where it Lives

[[S4E15 - The Power Falsifier Fires|← The Power Falsifier Fires]] · [[S4E17 - Deleting the Word|Deleting the Word →]]

---
## The stake

The first positive result of the entire project, and the first question asked of
it is where it lives. **Everything that works belongs to the compromised half**,
and the season refuses to hide that in the same episode that announces the win.

## Collecting episode 15

Round 7 was under-powered by its own pre-declared check, and its statistic was
not tier-specific. The measurement was right in spirit and wrong in construction,
because the null moved the violence as well as the dissent.

## The fix, and it is one sentence

**Hold the violence fixed. Move only the dissent.**

Round 8 asks, for every dissent hit, what fraction of the text's positions lie at
least as close to a violence hit. Call it **U**. Under random placement U is
**exactly 0.5**, whatever the text length and however clumped the violence is.

**Below 0.5 is Girard's prediction.**

That is a better statistic than round 7's because it cannot be fooled by texts
where violence is everywhere. The baseline is fixed by arithmetic rather than by
a simulation that has to be trusted.

Take that claim apart, because "0.5 by arithmetic" is doing a lot of work. Pick
any position in a text at random. Ask what fraction of all positions are at least
as close to a violence hit as that one is. **Averaged over random positions, that
fraction is 0.5, always**, for the same reason a randomly chosen person is above
the median height half the time.

> The clumping of the violence does not matter. The length does not matter. **A
> baseline that comes out of the definition cannot be got wrong by a
> simulation**, which is precisely how rounds 3, 4, 5 and 7 all got theirs
> wrong.

## The result

| tier | texts | hits | **U** | null mean | p |
|---|---|---|---|---|---|
| **GOSPEL** | 4 | 112 | **0.4171** | 0.5018 | **0.0015** |
| TRAGEDY | 23 | 235 | 0.4838 | 0.5025 | 0.161 |
| MYTH | 50 | 334 | 0.4832 | 0.5018 | 0.124 |

> **In the four Gospels, dissent vocabulary sits closer to violence vocabulary
> than chance places it, at p = 0.0015.** That is the first positive
> localization result in eight rounds, and it is the shape of the claim Girard
> actually makes rather than the frequency claim rounds 2 and 4 tested.

## And then the round takes most of it back

| | prediction | result |
|---|---|---|
| **U1** | GOSPEL U below 0.5 | **PASS**, p = 0.0015 |
| **U2** | U ordered GOSPEL < TRAGEDY < MYTH | **FAIL**, 0.4171 / 0.4838 / 0.4832 |
| **U3** | the *Bacchae* below 0.5 | **FAIL**, p = 0.414 |
| **U4** | gap ≥ 0.05 **and** p < 0.05 | **FAIL**, gap +0.0661 but p = 0.123 |

**U2 fails because tragedy is not intermediate.** Tragedy 0.4838 and myth 0.4832
are the same number to three decimals. There is no ordinal series. There is **a
Gospel effect and a flat background.**

**U4 is the instructive one.** The gap between myth and Gospel is +0.0661, which
clears the margin the pre-registration demanded. But permuting tier labels gives
p = 0.123, so **the gap is real in size and not distinguishable from chance.**
Four Gospel texts against fifty myth texts gives a between-text permutation very
little to work with, and that was foreseeable.

## The falsifier that fired, and it is the season's spine

**N3 FIRED.** Run the whole thing on the `core` half alone:

```
full lexicon:  GOSPEL 0.4171  <  MYTH 0.4832  <  TRAGEDY 0.4838
core lexicon:  TRAGEDY 0.4838 <  MYTH 0.5053  <  GOSPEL 0.5143
```

**The Gospels go from lowest to highest.** On the concepts that state Girard's
actual claim, the Gospels show no co-location at all, and if anything sit
slightly *farther* from violence than chance.

Read the two orderings again as a pair, because a reversal is a much stronger
signal than a weakening. If `core` carried a smaller version of the same effect,
the sensible conclusion would be that both halves measure dissent and one is
noisier. **It does not carry a smaller version. It carries the opposite.**

So the two halves of a single lexicon, built in one sitting from one pair of
sentences, are not measuring the same construct at all. **They were never one
instrument**, and every result in this season that pooled them was averaging two
different things.

> **In the headline, as the pre-registration demanded:** what is localized near
> violence in the Gospels is **crowd-speech vocabulary, not the vocabulary of
> questioning a victim's guilt.**

**This is the fourth consecutive round to find the same split.** Round 4's S1,
round 6's S1 on both translations, round 7's core sensitivity, and now round 8.
**The `core` half has never carried anything, on any measure, in any round.**

## The device: the season's real pattern, finally visible

| round | what passed | which half |
|---|---|---|
| 4 | D1, D2, D3 | `unan` |
| 6 | P1, P2, P3, P4 | `unan` |
| 8 | U1 | `unan` |
| 4, 6, 7, 8 | **nothing** | **`core`** |

**Everything this season succeeded at belongs to the contaminated half.** That is
the thing episode 1 said to watch for.

## And the coding error, reported by the author

`score8.py` printed "core order matches full lexicon? yes" and **did not flag the
falsifier.** The check as written did not implement the check as designed. It was
caught by reading the numbers, not by the script.

**A falsifier that cannot fire is a check that cannot fail**, and it happened
here, in the round that needed it most, to somebody who had spent seven rounds
writing about exactly this.

## The character anchor

**A smoke detector wired to the wrong circuit.**

It has a light, it beeps when tested, and it has been on the ceiling for a year.
The test button works because the test button is wired to the speaker.
**Nothing connects the sensor to anything**, and the annual test confirmed the
part that was never in doubt.

## The clinical anchor

**An alarm limit set outside the physiological range.**

The monitor will alarm at a systolic of 20. It is on, it is configured, it is
documented as configured. **It will never fire on a live patient**, and the chart
shows a night of unbroken normal observations.

## What would count against this

1. **U1 being the only pass out of four.** One prediction in four, and the three
   that failed include the ordinal series the whole construct was built on.
2. **Four Gospel texts.** Every Gospel number in this season rests on n = 4, and
   U4 failed specifically because of it. **The effect may be real and the design
   cannot show it**, which is round 7's lesson recurring.
3. **`unan` being Girardian after all.** "Some said, others said" *is* a crowd
   failing to be one voice. **That is exactly what Girard says breaks.** The
   objection to calling it contaminated is stronger than this season admits, and
   Season 7 has to settle it.

## Handing off

**Episode 17 goes back three seasons** to the word this project flagged in July,
called its most obvious repair, and never removed.

## Questions

1. `unan` is crowd-speech vocabulary. **Argue that this is precisely Girard's
   broken unanimity**, then argue it is a narrative convention. Which needs more
   assumptions?
2. U4: a gap that clears the margin and misses significance. What do you report?
3. The N3 coding error was caught by a human reading numbers. **Design the check
   that catches it mechanically.**

---

[[S4E15 - The Power Falsifier Fires|← The Power Falsifier Fires]] · [[S4E17 - Deleting the Word|Deleting the Word →]]
