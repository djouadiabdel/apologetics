---
title: The Arithmetic, All of It
series: Falsifiable Girard
post: 7
tier: standard
status: drafted, unreviewed
drafted: 2026-08-17
sources: S3E2, S3E9, S3E15, S4E4, RESULTS-2.md, RESULTS-3.md, RESULTS-7.md
---

Everything statistical in this project fits in one post. There are six ideas and none of them is hard.

That is worth saying plainly, because the failures ahead are not failures of sophistication. Nobody needed a better technique. Every one of them is a misuse of something on this list, made by somebody who could have explained the thing correctly if asked.

## 1. The median, not the mean

Every tier comparison here reports medians.

The reason is a single text.

`orphic_hymns_2` is a set of hymns. It is stuffed with the words *blameless* and *defend*, used as epithets in prayers. And it scores the corpus maximum on a lexicon built to find dissenting voices at a lynching. A false positive of the purest kind.

A mean lets that one text pull a whole tier. A median does not notice it exists.

The cost is that a median throws away magnitude. Two tiers can differ by a lot and be reported as differing by a little. You buy robustness with resolution, every time, and it is never free.

## 2. What a p-value actually is

Most people carry the wrong definition, so start by discarding it. A p-value is not the probability that your hypothesis is true. It is not the probability that the result is a fluke.

It is one thing only: **how surprised a world with nothing going on should be to have produced what you saw.**

Build one with no formula, using round 2.

| step | what you do | round 2's number |
|---|---|---|
| 1 | measure the real thing | separation of **6.10** |
| 2 | build one fake world where nothing is going on | 66 random frequency-matched words |
| 3 | do that two thousand times | fakes centre on **−0.16**, spread **2.95** |
| 4 | count how many fakes beat the real one | **8 of 2000** |

$$ p = \frac{\text{fakes at least as extreme} + 1}{\text{fakes} + 1} $$

Eight of two thousand is p = 0.0045. That is the whole apparatus.

> [FIGURE 1. The null distribution as a histogram centred near zero with spread 2.95, and the observed 6.10 marked as a line far out in the right tail. The eight draws beyond it shaded. One picture, and it is the only picture a p-value ever needs.]

The plus-one in the formula is not decoration. Without it, a result that no fake beat would report p = 0, which claims a certainty two thousand draws cannot support.

Your friend says he can tell Coke from Pepsi. You pour ten unmarked glasses and he gets nine right. The p-value asks how often a guesser gets nine of ten, and the answer is about one time in a hundred.

Notice what the test cannot do. It cannot tell you he is a supertaster rather than lucky, or that he peeked, or that your glasses were different shapes. It answers one narrow question about coin flips and says nothing about him.

**z** is the same information in different clothes. How many typical wobbles from nothing you are sitting. Zero means you look exactly like nothing happening.

$$ z = \frac{\text{observed} - \text{mean of the fakes}}{\text{sd of the fakes}} $$

## 3. Where 0.05 comes from, and it is not from mathematics

Every prediction in this project is judged against p < 0.05, and the number appears so often it starts to feel like a law.

**Ronald Fisher**, in a textbook in 1925, remarked that one in twenty was a convenient line for deciding whether a result was worth a second look. He was describing a rule of thumb for his own work. He later wrote against using any fixed level at all.

>> **There is nothing behind 0.05 except that it is a round fraction and somebody influential said it out loud.**

Two things follow.

**p = 0.049 and p = 0.051 are the same result.** They differ by nothing. Treating one as a finding and the other as a failure is an artifact of a line drawn in 1925. Which is why this project prints the actual p-value everywhere instead of the word *significant*.

**And a threshold only means anything if you fix it before you look.** Arbitrary is fine. Arbitrary and chosen afterwards is not, because at that point you are picking the line that puts your result on the correct side of it.

## 4. One-sided, everywhere, and the bill it comes with

There is a fork in every p-value almost nobody says out loud, and it changes every number in this series by a factor of two.

| | the question | a huge effect the wrong way |
|---|---|---|
| two-sided | is there a difference | **counts** |
| **one-sided** | is it bigger, in the direction I named in advance | **returns nothing** |

Every prediction here is directional. Tragedy above control. Gospel above myth. Dissent nearer the violence. So every p-value in every round is one-sided.

>> **A one-sided p-value is exactly half its two-sided equivalent on the same data.** Anybody who recomputes these the ordinary way gets figures twice as large, and the pre-registrations do not say which they used.

Say that before a commenter does. These particular results survive doubling, which is the only reason it is safe to state plainly, and that is a fact about these numbers rather than a defence of the practice.

> [FIGURE 2. The same null histogram from Figure 1 twice. The two-sided version shades both tails, the one-sided version shades only the right. Beneath each, the p-value it yields. The doubling should be visible rather than asserted.]

And the cost is real, which is why the direction has to be fixed in advance. **You buy sensitivity by agreeing not to notice being wrong backwards.**

Post 9 contains a result that runs backwards. In one half of the instrument, tragedy climbs above the Gospels. No test in that round is capable of registering it as a result, because every test was pointed the other way.

## 5. Mann-Whitney U, which is simpler than its name

Four Gospel scores. Seventy-one myth scores. Line all seventy-five up and ask one question: how often does a Gospel text beat a myth text?

Compare every Gospel against every myth, one pair at a time, and count the wins. That count is U.

| | |
|---|---|
| every possible pair | 4 × 71 = **284** |
| Gospels win all of them | U = 284 |
| evenly matched | U = **142** |
| **observed** | **U = 268** |

>> **U = 268 means the Gospels won 268 of 284 head-to-head comparisons.** No formula, no assumption about the shape of the data, just counting who beat whom.

It is used instead of comparing averages because **it does not care how big the wins are.** One wild text cannot drag the result. Which matters in a corpus where `orphic_hymns_2` exists.

## 6. Rare things clump, and this is where the instrument broke

Do this before any formula.

A cake cut into a hundred slices with a hundred raisins mixed through it. How many raisins in the average slice? One.

How many slices have no raisin at all?

**Thirty-seven.**

Raisins do not queue up politely. Some slices get three, some get two, and more than a third get zero even though the average is one.

> [FIGURE 3. The hundred-slice cake drawn as a 10×10 grid, each cell showing its raisin count, the 37 empty cells shaded. Under it, e^(−1) = 0.37. The picture comes first and the formula only names it.]

Everyone already knows this from somewhere else. A hundred gacha pulls at 1% and nothing, which is not a lie and not rigged. Coming away empty is the ordinary outcome, and the pity counter exists because of this arithmetic.

For a bucket firing at rate λ per thousand words, over N words, the expected count is λN/1000. The chance of seeing none at all is e raised to minus that.

The formula is the cake.

Now the corpus numbers, measured across 76 texts.

| bucket | rate per 1000 |
|---|---|
| violence | 4.76 |
| marks | 2.90 |
| crisis | 2.07 |
| **crimes** | **0.95** |

`crimes` is the rare one, and it is rare for a reason rather than by accident. The crime stereotype is the one Girard names with **nouns**, parricide and regicide and sacrilege, and Greek literature describes those events with verbs. The thin bucket is thin because it was built out of the vocabulary of verdicts.

Put it through the cake.

| text length | expected `crimes` hits | P(zero) |
|---|---|---|
| **1,500 words**, one Ovid myth | 1.42 | **0.24** |
| 10,000 words, a tragedy | 9.49 | ~0.000 |
| 17,180 words, the *Bacchae* | 16.31 | ~0.000 |

Read the gap between the first row and the second, because it is the whole thing. At tragedy length the bucket essentially never comes up empty. At Ovid length it is empty a quarter of the time.

Same instrument, same lexicon, same corpus. **Only the length changed, and the instrument silently became a different instrument.**

And those are the optimistic numbers. They are computed on the repaired lexicon. The original caught `murder` 138 times out of 297 real occurrences, so its effective rate was lower and its zero probability higher.

## What that does to MIN

Post 4 planted this and here is the detonation.

**MIN takes the weakest bucket.** If the weakest bucket is zero for a quarter of your texts, MIN is zero for a quarter of your texts.

A statistic that is zero a quarter of the time carries almost no information.

A quarter of the corpus sits pinned at the same value regardless of anything else in it. So a high-scoring text and a low-scoring text that both hit an empty `crimes` bucket are indistinguishable. Not because they resemble each other. Because the statistic ran out of room underneath them.

>> **The minimum did not fail because Girard is wrong. It failed because you cannot take the minimum of something that is usually absent.**

Post 4 chose MIN for entirely correct theoretical reasons. The reasoning was right. The arithmetic was never checked.

Those are two separate competences and I had one of them. Which is the ordinary condition of anybody building an instrument out of a theory they understand better than they understand the statistic.

## 7. Power, and the falsifier that exists because of round 3

Round 3's statistic was the minimum of four counts inside a 1,000-word window.

| | |
|---|---|
| observed range | **0 to 5** |
| median | **2** |
| texts where the weakest bucket contributes 3 or fewer | **64 of 71** |

>> **This is a statistic built on counting to two.**

Five predictions, seventy-one texts, two nulls and two thousand permutations all rest on whether a number that is usually two is bigger than another number that is usually two.

**Power is the probability that your test finds an effect that is really there.** When power is low, a null result cannot distinguish between two completely different situations. There is no effect. Or there is one, and your instrument could never have seen it.

Weighing a letter on a bathroom scale. The letter has a weight. The scale is not broken. You still learn nothing, and the reading tells you about the scale rather than about the letter.

> [FIGURE 4. A bathroom scale with a letter on it reading zero, beside a set of kitchen scales reading 24g. Same object, two instruments. Caption: the zero is a fact about the scale.]

Round 3's own results file says it plainly, and this is the sentence the project should be judged on rather than its p-values:

>> "The honest position is that the test as specified had little power, and that **this was foreseeable before running it and was not foreseen.**"

The fix was structural rather than clever.

Every round from that point carries a **power falsifier**. A number fixed in advance, saying *if the statistic comes out this flat, report the round as under-powered rather than as an absence*.

In round 7 it fired. Median z across 66 texts came out at **−0.012**, inside a band declared before anything ran, and the round was reported as unable to see rather than as having found nothing.

Round 3 could not make that distinction. Every round after it can, and the only reason is that somebody wrote a number down in advance instead of arguing about it afterwards.

## And one thing against myself

Make one prediction at a threshold of 0.05 and you accept a one in twenty chance of a false pass. Make thirty and you should expect about one and a half false passes **even if nothing is true anywhere.**

This project made roughly fifty committed predictions. It applied no correction for that, anywhere, in any round.

It matters less than it sounds, and it is worth working out why before post 9 says it. The hint is to think about what multiplicity inflates, and then to go and look at how many of this project's predictions actually passed.

Post 8 is about the machinery that was supposed to make all of this trustworthy, and what it does and does not prove.
