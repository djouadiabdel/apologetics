---
season: 4
episode: 11
title: "Forty-Eight Reconstructions"
words: 1232
minutes: 9.1
character_anchor: "Forty-eight people baking from the same half-written recipe"
clinical_anchor: "Identifying which analyser produced an old result, from its reference range"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-4
---

> [!info] S4E11 · 1232 words · ~9.1 min · [[Season 4 - The Repairs — Index|season index]]
> **Generated from `Research/Season 4 — The Repairs.md`. Edits here are overwritten.**

# Forty-Eight Reconstructions

[[S4E10 - Writing the Rules for a Test You Already Know the Answer to|← Writing the Rules for a Test You Already Know the Answer to]] · [[S4E12 - Three Broken Nulls, One Mistake|Three Broken Nulls, One Mistake →]]

---
## The stake

A grid of 48 configurations, 2,000 draws each, the verdict rule fixed in
advance, and a sentence forbidding picking the winner afterwards. **This is what
rigour looks like when you already know the answer you want**, and it is the
season's centrepiece.

## Collecting episode 10

A grid of 48 configurations, each of 2000 draws, with the verdict rule fixed in
advance and a sentence forbidding after-the-fact selection of the right one.

## The verdict, first

> **UNSTABLE.** 24 of 48 configurations give p < 0.05 and 24 give p ≥ 0.05.

```
48 configurations.  p range 0.00050 to 0.54123   median 0.08296
observed separation 6.0518 to 6.1407      (committed +6.10)
null mean          -5.275 to +7.138       (committed -0.16)
null sd             2.461 to 13.089       (committed  2.95)
```

By the rule written in advance, **p = 0.0045 cannot be cited.** An exact split,
twenty-four each way, is the worst outcome the grid could have produced.

Look at the range on that p-value before going further. **0.0005 to 0.541.** The
same claim, the same corpus, the same lexicon, reconstructed forty-eight
defensible ways, and the answer runs from "one in two thousand" to "a coin flip".

> That range is the honest measure of how much the missing script was carrying.
> **The prose description of the method left room for a thousand-fold
> difference in the result**, and nobody could have known that without building
> all forty-eight.

## And then the grid does something it was not built to do

**It does not scatter. It splits, cleanly, on one parameter.**

| arm | n | p range | null sd range |
|---|---|---|---|
| **`unigrams-only`** | 24 | **0.00050 to 0.00700** | **2.46 to 3.58** |
| **`phrase-aware`** | 24 | **0.15892 to 0.54123** | 10.48 to 13.09 |

Nothing depends on the corpus state, the matching procedure, the frequency pool
or the seed. **Everything depends on phrase handling.**

Read the shape of that before the numbers. A grid that straddles a threshold
could straddle it in two very different ways. It could **scatter**, with results
smeared across the range and no pattern in which settings produced what, and that
would mean the reconstruction is hopeless because the answer depends on
everything at once.

Or it could **split**, cleanly, on one axis, with every configuration on one side
of that axis agreeing with every other. That is a completely different situation.
**A split says the record was ambiguous about exactly one thing**, and it names
the thing.

Within the unigrams-only arm, twelve other combinations of corpus state, matching
procedure, pool and seed move p between 0.0005 and 0.0070 and nothing else, which
is remarkable stability across four free parameters.

## The device: identifying the lost script without using its p-value

This is the best single move in the project and it deserves the full walk.

The committed record contains **three** numbers, not one. Two of them are
independent of the p-value:

| committed, July | unigrams-only arm | phrase-aware arm | inside? |
|---|---|---|---|
| null mean **−0.16** | −1.93 to +0.40 | −5.28 to +7.14 | **unigrams** |
| null sd **2.95** | 2.46 to 3.58 | 10.48 to 13.09 | **unigrams** |
| p **0.0045** | 0.0005 to 0.0070 | 0.159 to 0.541 | unigrams |

> **The null mean and the null standard deviation were committed in July and
> could not have been fitted**, because nobody was reconstructing anything then.
> Both land inside the unigrams-only range and nowhere near the phrase-aware
> range, whose standard deviation is four times larger.

**So the original matched unigrams only, and under that procedure the committed
result reproduces.** The identification does not use the number under dispute.
It uses two bystander numbers that were never the point.

And that is why the after-the-fact-selection rule did not have to be broken. The
arm was not chosen because it agrees on p. **It was chosen by two other
quantities**, and its agreement on p is then a genuine reproduction.

The general principle is worth extracting, because it is one of the few genuinely
reusable techniques in the whole series.

> **A record that commits several numbers can be identified by the ones nobody
> is arguing about.** The disputed number is the one under pressure, the one
> somebody might have massaged, the one selection acts on. The bystander numbers
> are safe precisely because they were never the point.

A null mean of −0.16 is a boring intermediate quantity that got printed because
the script printed it. **Nobody in July had any reason to care what it was**, and
that carelessness is exactly what makes it evidence in August.

## The thing that makes it more than a rescue

**The phrase-aware arm is not a valid null.** It matches a phrase on its *first
token's* frequency, so `with one voice`, which occurs 3 times, gets replaced by
a word as common as `with`, which occurs 8,294 times. Median inflation **113×**.
206 phrase-occurrences replaced by 65,137.

So the arm that disagrees is broken, and it is broken in a way that makes it
easier to beat, which is why it produces the high p-values. Replace a rare phrase
with a common word and the random sets suddenly have far more material to work
with, so more of them clear the bar.

And there is a second reason the unigrams-only arm is the right one for *this*
particular reconstruction. **Round 2's lexicon is 99.1% unigram driven**: the
phrases contribute 0.0526 of a 6.104 separation.

That figure is checkable rather than asserted, and the check is one subtraction.
Score the corpus with the whole round-2 lexicon and note the separation. Score it
again with the phrases switched off. **The difference is what the phrases were
contributing**, and here it is 0.0526 out of 6.104, which is 0.9%.

> So the phrases were nearly irrelevant to round 2's result, and matching them
> badly could not have mattered much either way. **Unigram matching was the right
> procedure there, and it was catastrophically the wrong procedure in round 4**,
> where the phrases carry everything.

Same technique, correct in one round and disqualifying in the next, and **the
thing that changed is not the technique but the instrument it was pointed at.**

## The character anchor

**Forty-eight people baking from the same half-written recipe.**

The note says flour, butter, sugar, hot oven. It does not say how much butter.
Twenty-four bakers read it as a shortcrust and twenty-four as a sponge, and the
two groups produce two completely different things, cleanly split, with no
in-between.

**Now you find the original baker's note about the tin she used and how long it
took to cool.** Nothing about taste, nothing about the argument. And only one of
the two groups' cakes could have needed that tin and that cooling time.

## The clinical anchor

**Identifying which analyser produced an old result, from its reference range.**

The value is disputed. But the report also carries a range and a unit, and only
one of the two machines in use that year used those. **The disputed number is not
what identifies the source. The boring metadata around it is**, and metadata is
harder to fake because nobody is arguing about it.

## What would count against this

1. **This being a rescue with extra steps.** The verdict is UNSTABLE and the
   section after it argues for what survives. **The results file says so itself**,
   and states plainly that §4 is the exact move the rule was written to prevent.
   The defence is that the identification uses quantities the rule was not
   protecting.
2. **The phrase-aware arm being fixable rather than invalid.** If it is fixed
   properly, it becomes round 6's null, and **round 6 is where that argument goes
   from theory to result.**
3. **99.1% being convenient.** It is measured, not asserted, and it is checkable.
   But it is also exactly the number needed to make the reproduction admissible.

## Handing off

**Episode 12 collects three broken nulls**, because the phrase-aware inflation is
the third instance of the same design failure and the pattern is now impossible
to miss.

## Questions

1. Two bystander numbers identified the script. **What other bystander numbers
   should every result in this project be committing?**
2. If the phrase-aware arm had been the valid one, what would the verdict be?
3. UNSTABLE, then reproduced by another route. **What should a reader cite?**
   Write the sentence you would put in a paper.

---

[[S4E10 - Writing the Rules for a Test You Already Know the Answer to|← Writing the Rules for a Test You Already Know the Answer to]] · [[S4E12 - Three Broken Nulls, One Mistake|Three Broken Nulls, One Mistake →]]
