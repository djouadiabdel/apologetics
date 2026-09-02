---
season: 3
episode: 2
title: "The Arithmetic of Rare Things"
words: 1117
minutes: 8.3
character_anchor: "Gacha pulls"
clinical_anchor: "A biopsy that was too small"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-3
---

> [!info] S3E02 · 1117 words · ~8.3 min · [[Season 3 - Four Ways To Fail — Index|season index]]
> **Generated from `Research/Season 3 — Four Ways To Fail.md`. Edits here are overwritten.**

# The Arithmetic of Rare Things

[[S3E01 - The Control that Beat Every High Text|← The Control that Beat Every High Text]] · [[S3E03 - Validated on One Thing, Used on Another|Validated on One Thing, Used on Another →]]

---
## The stake

The first maths episode, one tool built from zero. **By the end you can do the
arithmetic that explains the collapse**, and the tool is behind every "how rare
is this by chance" claim you have ever met, including gacha pulls.

**This is the first maths episode and it teaches one tool from zero.**

## Collecting episode 1

MIN collapsed. **Not because Girard is wrong, and not because the texts were
wrong.** Because of a property of minimums that nobody thought about, and it
takes one idea to see it.

## The device: raisins in a cake

**Do this before any formula.**

A baker puts **100 raisins** into a cake and cuts it into **100 slices.**

**How many raisins in the average slice? One.**

Now the question that matters: **how many slices have NO raisin at all?**

Most people say none, or a handful. **The answer is about 37.**

Ask why the wrong answer feels right, because that is the useful part. An average
of one invites you to picture one raisin per slice, tidily. **But nothing is
arranging them.** Each raisin lands wherever the batter carries it, with no memory
of where the others went, and a slice that already has two is exactly as likely to
receive the next one as a slice that has none.

> Raisins do not queue up politely. Some slices get three, some get two, and
> **more than a third get zero, even though the average is one.**

**That is the entire idea.** Rare things clump, and the chance of getting none is
much higher than the average suggests.

## The character anchor

**Gacha pulls.**

A banner advertises a 1% rate. You save up a hundred pulls, which is exactly the
expected number for one copy, and you get nothing, and the comment section fills
with people certain the rate is a lie.

**It is not a lie.** At 1% over a hundred pulls, coming away empty is the ordinary
outcome, and it happens to roughly a third of everybody who tries.

And here is the detail worth putting on screen. **Every one of those games ships a
pity counter**, a guarantee after so many failures. That mechanism exists because
studios discovered that honest arithmetic at the advertised rate makes players
quit in disgust. **An entire industry pays money to patch over this exact fact**,
which is a decent sign that the intuition it violates is universal.

## Now the formula, which just names what you already saw

If something occurs on average **λ** times per thousand words, then in a text of
**N** words the expected count is λN/1000, and the chance of seeing **none at all**
is

$$ P(zero) = e^(−λN/1000) $$

**Check it against the cake.** Average 1 raisin per slice, so P(zero) = e^(−1) =
**0.37.** Thirty-seven slices. **The formula is the cake.**

Nothing was assumed there beyond what you already watched happen. The formula
takes one input, which is how many you expect, and returns how often you get none,
and **every other feature of the situation is irrelevant to it.** That is why it
transfers straight from baking to a corpus without anybody having to argue that
texts resemble cakes.

## The clinical anchor, exact

**A biopsy that was too small.**

You cannot conclude absence from a sample that did not contain enough tissue for
the finding to appear in. **Everyone who has signed out a report knows this**, and
it is the same arithmetic.

And notice what the report says in that situation, because it is the model for
what this episode is asking the project to say. It does not report absence.
**It reports that the specimen was inadequate**, which is a statement about the
instrument rather than about the patient, and refusing to make that statement is
how a negative gets manufactured out of nothing.

## Now the corpus numbers

Measured across 76 Greek and Roman texts:

| bucket | rate per 1000 |
|---|---|
| violence | 4.76 |
| marks | 2.90 |
| crisis | 2.07 |
| **crimes** | **0.95** |

**`crimes` is the rare one**, planted all the way back in Season 1 episode 7. And
Season 2 episode 2 already explained why it is rare rather than merely reporting
that it is: **the crime stereotype is the one Girard names with nouns**, with
parricide and regicide and sacrilege, and the literature describes those events
with verbs. The thin bucket is thin because it was built out of the vocabulary of
verdicts.

Put it through the cake:

| text length | expected `crimes` hits | P(zero) |
|---|---|---|
| **1,500 words**, one Ovid myth | 1.42 | **0.24** |
| 10,000 words, a tragedy | 9.49 | ~0.000 |
| 17,180 words, the *Bacchae* | 16.31 | ~0.000 |

**Read the gap between the first row and the second**, because the whole season is
in it. At tragedy length the bucket essentially never comes up empty and the
problem does not exist. At Ovid length it comes up empty a quarter of the time.
**Same instrument, same lexicon, same corpus. Only the length changed**, and the
instrument silently became a different instrument.

**And that is the REPAIRED lexicon.** The original caught `murder` 138 times out of
297 real occurrences, so its effective rate was far lower **and the zero
probability far higher.** The numbers above are the optimistic version.

## The mechanism, stated once

**MIN takes the weakest bucket.** If the weakest bucket is zero for a quarter of
your texts, **MIN is zero for a quarter of your texts**, and a statistic that is
zero a quarter of the time carries almost no information.

Work through what that does to a comparison. A quarter of your texts are pinned at
exactly the same value regardless of anything else in them. **A HIGH text and a
LOW text that both hit an empty `crimes` bucket are indistinguishable**, not
because they resemble each other but because the statistic ran out of room
underneath them. Averages over a column like that are averages over a floor.

> **The minimum did not fail because Girard is wrong. It failed because you cannot
> take the minimum of something that is usually absent.**

**And notice: Season 2 episode 12 chose MIN for entirely correct theoretical
reasons.** The reasoning was right. **The arithmetic was never checked.** Those are
two separate competences and the project had one of them, which is the ordinary
condition of anybody building an instrument out of a theory they understand
better than they understand the statistic.

## What would count against this

1. **The Poisson assumption.** Words in a text are **not** independent; they
   clump by topic. **That makes the true P(zero) higher, not lower**, so the
   estimate is conservative and the problem is worse than stated.
2. **The lexicon being at fault rather than the metric.** Both are true at once,
   and episode 3 separates them.

## Handing off

**Episode 3 asks why nobody caught this**, and the answer is a mistake so common
it has a name in every measurement field.

## Questions

1. **Compute P(zero) for `violence` at 1,500 words.** Why does this only bite one
   bucket?
2. Poisson assumes independence and words are not independent. **Does that make
   the estimate too high or too low?** Work it out.
3. **Where else does taking a minimum of something rare appear** in real
   measurement?

---

[[S3E01 - The Control that Beat Every High Text|← The Control that Beat Every High Text]] · [[S3E03 - Validated on One Thing, Used on Another|Validated on One Thing, Used on Another →]]
