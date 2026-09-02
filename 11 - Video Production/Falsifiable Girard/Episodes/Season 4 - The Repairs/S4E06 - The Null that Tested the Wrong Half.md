---
season: 4
episode: 6
title: "The Null that Tested the Wrong Half"
words: 955
minutes: 7.1
character_anchor: "A metal detector swept over a beach, with the sensitivity set for coins"
clinical_anchor: "A troponin drawn once"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-4
---

> [!info] S4E06 · 955 words · ~7.1 min · [[Season 4 - The Repairs — Index|season index]]
> **Generated from `Research/Season 4 — The Repairs.md`. Edits here are overwritten.**

# The Null that Tested the Wrong Half

[[S4E05 - Three of Four, and the Round Still Fails|← Three of Four, and the Round Still Fails]] · [[S4E07 - Position is the Information a Rate Throws Away|Position is the Information a Rate Throws Away →]]

---
## The stake

Everything that worked belongs to the half disclosed as compromised before it was
built. **The season's spine is stated here**, and it is a harder story than
failure: the instrument works, and nobody knows what it measures.

## Collecting episode 5

Three primary predictions passed and none survived its own registered controls.
The `core` half carries nothing, the `unan` half carries everything, and D4, the
null test, failed outright at p = 0.296.

## Splitting the instrument in half explains everything

The lexicon has two kinds of entry: **unigrams** (single words like `unjust`) and
**phrases** (`others said`, `let him go`). That distinction has been sitting in
the instrument since it was built and nobody had any reason to care about it,
because a hit is a hit and the metric adds them all up.

**It turns out to be the most important fact about the lexicon.** Score the tiers
on each half separately:

| half | GOSPEL mean | TRAGEDY mean | MYTH mean |
|---|---|---|---|
| unigrams | 0.367 | **0.639** | 0.486 |
| phrases | **0.982** | 0.156 | 0.108 |

**The unigram half runs backwards.** On single words the Gospels score *lowest*
of the three tiers. The observed Gospel-minus-myth separation on unigrams is
**−0.075 per 1000**, a negative number.

The phrase half separates the tiers by roughly **nine times**.

Sit with how strange that is before moving on. The same lexicon, built in one
sitting from one pair of sentences, contains two halves that **point in opposite
directions**. One says myths contain more dissent language than the Gospels. The
other says the Gospels contain nine times more.

> Added together they gave the ordinal series that passed D1, D2 and D3. **The
> headline result of round 4 is a sum of two numbers that disagree**, and the sum
> came out positive because one of them is much larger.

## And now look at what the null actually did

The null matched **unigrams only**. 45 of the 64 unigrams present in the corpus.
**All 53 phrases were ignored.**

> So D4 built 2000 random word-sets, compared them against **the half of the
> instrument whose separation is negative**, and found that 591 of them did
> better. **Of course they did.** They were beating a number below zero.

**D4 did not fail because the instrument is weak. It failed because the null
tested the half that carries no signal**, and the entire effect lives in the
phrase half, which has never been tested against a null at all.

## The device: what each half was asked and answered

| | tested by D4 | carries the effect | verdict available |
|---|---|---|---|
| 45 unigrams | **yes** | no, runs backwards | tested, and it fails |
| 53 phrases | **no** | **yes, all of it** | **untested** |

**The two ticks are in different rows.** That is the whole episode.

## Why this is a defect and not a disaster

The results file says it plainly: *that is a defect in my test design and it is
recorded as one.* And then it does the thing that matters.

> The corrected version, a phrase-aware null, is **round 6 with its own
> commit**, not a rerun folded into this one. **Re-running until something
> passes is the move the project exists to refuse.**

Notice the specific discipline. The fix is known, it is cheap, and it would very
likely turn a failed round into a passing one. **And it goes in a different file
with a different date**, because a round that gets fixed until it passes is not a
round.

Why the date matters, stated plainly: if the corrected null were folded back into
round 4, the published record would show **a round that passed**, and the fact
that it took two attempts would exist nowhere. Anybody reading it later would see
one pre-registration, one result, one pass.

> **The number of attempts is part of the result.** A prediction that passes on
> the second null is a different object from one that passes on the first, and
> the only thing preserving that difference is somebody's willingness to open a
> new file instead of editing an old one.

## The character anchor

**A metal detector swept over a beach, with the sensitivity set for coins.**

It finds coins. It reports the beach as coin-rich. Somebody asks whether the
readings could be random noise, so you run the obvious control: sweep a hundred
random patches of sand and compare.

**And the whole time, the thing actually buried there is a car door.** The
detector found it, the reading is in the log, and the control you designed never
looked at that channel because you built the control around coins.

## The clinical anchor

**A troponin drawn once.**

The single most informative thing about troponin is not the value. It is the
**rise and fall** across serial draws. Draw it once and you have measured the
half of the test that carries the least information, then treated a normal
result as reassurance.

**And the assay was fine.** The blood was fine. The sampling design threw away
the signal, and the printout looks exactly like a printout that means what you
want it to mean.

## What would count against this

1. **The phrase half being a translation idiom.** "Some said, others said" is how
   the ASV renders divided crowd speech. Whether that is Girard's broken
   unanimity or a reporting convention **is exactly what a whole-text rate cannot
   distinguish**, and episode 13 is the test.
2. **Unigrams running backwards being the real finding.** The Gospels score
   *lowest* on single dissent words. Nobody has explained that, and it is at least
   as interesting as the phrase result.
3. **Splitting after seeing the failure.** The unigram-phrase split was not
   pre-registered. It is a diagnosis of a failure, not a result, and it is
   reported as one.

## Handing off

**Episode 7 steps back**, because this is the third time a null test has broken
in this project, and the three breakages are the same mistake wearing three
different costumes.

## Questions

1. Season 3 episode 14 asked you to predict the other null failures. **Go and
   look at what you wrote.**
2. Is "the fix goes in the next round" a real discipline or a delay tactic? What
   would tell you which?
3. The unigram half runs backwards. Construct the explanation, then say what
   text you would go and read to check it.

---

[[S4E05 - Three of Four, and the Round Still Fails|← Three of Four, and the Round Still Fails]] · [[S4E07 - Position is the Information a Rate Throws Away|Position is the Information a Rate Throws Away →]]
