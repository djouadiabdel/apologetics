---
season: 4
episode: 12
title: "Three Broken Nulls, One Mistake"
words: 976
minutes: 7.2
character_anchor: "Testing a lock by pulling on the door"
clinical_anchor: "Three near-misses with one root cause"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-4
---

> [!info] S4E12 · 976 words · ~7.2 min · [[Season 4 - The Repairs — Index|season index]]
> **Generated from `Research/Season 4 — The Repairs.md`. Edits here are overwritten.**

# Three Broken Nulls, One Mistake

[[S4E11 - Forty-Eight Reconstructions|← Forty-Eight Reconstructions]] · [[S4E13 - The Null that Finally Matched the Instrument|The Null that Finally Matched the Instrument →]]

---
## The stake

Three broken nulls turn out to be one mistake, found by identifying a lost script
by its null's mean and spread rather than its p-value. **The best single move in
the project**, and a lesson in reading a number's shape instead of its headline.

## Collecting episode 11

The grid split on phrase handling, the lost script was identified by its null
mean and standard deviation rather than by its p-value, and the arm that
disagreed turned out to be invalid because it inflated phrase frequencies 113×.

## The pattern, laid out

Season 3 episode 14 asked you to predict what the other null failures would look
like. Here they are, and they are the same mistake three times.

| round | the null | what it did wrong | direction of the error |
|---|---|---|---|
| **3** | Null B, word shuffle | favoured evenly spread sets over clumpy ones **by construction** | made passing easier for the wrong texts |
| **4** | D4, frequency-matched | matched **unigrams only**, ignored 53 phrases | tested the half with no signal |
| **5** | phrase-aware grid arm | matched a phrase on its **first token** | inflated rarity 113×, destroyed the comparison |

> **Every one is a mismatch between what the statistic depends on and what the
> null holds constant.** That is the whole diagnosis, and it is one sentence.

Before working the definition, notice that all three were written by somebody who
knew what a null test is for, and that none of the three is a coding bug. **Every
one of them ran correctly and produced a number.** That is the property that makes
this class of error dangerous: a broken null does not crash, it reports.

## Working the definition, because this is the transferable part

A null answers one question: **what would this number look like if the effect
were not there?** To build one you must destroy the effect and keep everything
else.

Say that second sentence again slowly, because both halves are load-bearing and
people only ever remember the first. **Destroy the effect** is the obvious part.
**Keep everything else** is where all three failures live.

Everything else means: the length of the texts, the frequency profile of the
vocabulary, the clumpiness of the words, the number of items being counted. If
your null changes any of those while it is busy destroying the effect, you are no
longer comparing your result against a world without the effect. **You are
comparing it against a different world**, and the comparison means whatever that
difference happens to mean.

So there are exactly two ways to fail.

| failure | what happens | example |
|---|---|---|
| **destroys too little** | the effect survives into the null | round 3's Null B kept the clumping |
| **destroys too much** | the null is easier to beat than reality | round 5's arm made rare phrases common |

**Round 4's D4 is a third thing and it is the sneakiest.** It did not destroy too
much or too little. It operated on **the wrong object entirely**, leaving the
phrases untouched and randomising only the unigrams.

Which means the effect was never in the null's way. The phrases sat there,
identical, in every one of the 2000 draws, **contributing their full separation to
both the observed value and the null**, so they cancelled out and the comparison
was decided entirely by the unigrams that run backwards.

> **A null that leaves the effect in place is not a weak test. It is a test of
> something else**, and it will return a confident number about that something
> else, and the number goes in the results file under the heading you wrote
> before you knew.

## The device: the question to ask before writing any null

| ask | round 3 | round 4 | round 5 |
|---|---|---|---|
| what does my statistic depend on? | clumping | phrases | phrase rarity |
| what does my null randomise? | order | unigrams | first tokens |
| **do those match?** | **no** | **no** | **no** |

**Three rounds, three no's, and the table takes ten seconds to fill in.** Nobody
filled it in, three times, and each time the failure was only visible afterwards.

Which raises the question the rest of this series keeps circling. If the check is
that cheap and that effective, why did somebody who writes pre-registrations and
declares falsifiers and discloses contamination not run it?

> **Because the null felt like the check rather than the thing being checked.**
> Every one of those rounds had a careful pre-registration protecting the
> *prediction*, and the null test sat outside that scrutiny, in the part of the
> work labelled "controls", which is the part everybody trusts.

That is worth carrying forward past this project entirely. **The apparatus you
built to catch yourself is the part nobody audits**, and it is the part where an
error is invisible, because its output is reassurance.

## The character anchor

**Testing a lock by pulling on the door.**

The door does not open. The lock is reported as working. And the way that lock
actually fails is a bump key, which never involves pulling the door at all.

The test was real. The door was genuinely pulled. **It exercised a property the
lock does not fail on**, and the result was recorded as reassurance in a log
that now reads as a history of a secure building.

> **A check that cannot fail prints reassurance**, and this is the refrain
> arriving in a place nobody looks for it: not in the measurement, in the
> control.

## The clinical anchor

**Three near-misses with one root cause.**

Three separate incident forms, three different wards, three different drugs.
Filed separately, each one gets a local fix and a tick. Read together, all three
are the same pharmacy label that puts the dose where the frequency should be.

**The system that files them separately cannot see it**, and every individual
investigation was competent.

## What would count against this

1. **Hindsight.** Each null looked reasonable when written, and the pattern is
   only obvious with three instances. **Say that honestly**, then notice that the
   three-row table above could have been written before any of them.
2. **The pattern being a coincidence of one author.** Three nulls by the same
   person may share a blind spot rather than reveal a general law. That is a real
   limit on how far this generalises.
3. **Round 6 not being a fourth instance.** It is the first null built by asking
   the question in the device table first. **Whether that is a repair or luck is
   testable**, and episode 13 is the test.

## Handing off

**Episode 13 builds a null that matches the instrument**, and for the first time
in the project every prediction in a round passes.

## Questions

1. Fill the device table in for a null you would design to test whether dissent
   sits **near** violence. What must it destroy, and what must it keep?
2. Is there a null design that is safe by construction, or is this permanently a
   matter of judgement?
3. **Three failures by one author.** How much should that reduce your confidence
   in the fourth attempt, honestly?

---

[[S4E11 - Forty-Eight Reconstructions|← Forty-Eight Reconstructions]] · [[S4E13 - The Null that Finally Matched the Instrument|The Null that Finally Matched the Instrument →]]
