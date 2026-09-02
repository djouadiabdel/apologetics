---
season: 3
episode: 15
title: "A Statistic Built on Counting to Two"
words: 1223
minutes: 9.1
character_anchor: "Weighing a letter on a bathroom scale"
clinical_anchor: "the abstract never tells you which one you are reading"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-3
---

> [!info] S3E15 · 1223 words · ~9.1 min · [[Season 3 - Four Ways To Fail — Index|season index]]
> **Generated from `Research/Season 3 — Four Ways To Fail.md`. Edits here are overwritten.**

# A Statistic Built on Counting to Two

[[S3E14 - A Null that Tests Nothing, by Construction|← A Null that Tests Nothing, by Construction]] · [[S3E16 - The Universal Negative, and Confessing First|The Universal Negative, and Confessing First →]]

---
## The stake

Does "we found nothing" mean "there is nothing"? This episode builds the tool for
telling those apart, and the tool is a habit: **ask what the statistic was
physically able to say.

## Collecting episodes 13 and 14

Round 3 found nothing. One null was well built and returned a flat result, and
the other could never have returned anything.

So the obvious question: **does "we found nothing" mean "there is nothing", or
does it mean "we could not have seen it"?**

Those are completely different conclusions and they look identical in the output.

## The number

The statistic is a minimum over four counts inside a thousand-word window.

Across the corpus, its observed values run from zero to five. **The median is
two.**

For sixty-four of seventy-one texts, the weakest bucket contributes **three hits
or fewer** in the best window in the entire text.

> **This is a statistic built on counting to two.**

Say the sentence and then sit in it. The entire round, five predictions, seventy-
one texts, two nulls and two thousand permutations, rests on whether a number that
is usually two is bigger than another number that is usually two.

## What that means for the result

It means round 3 cannot distinguish between two situations.

**Situation one:** there is no localisation. The four stereotypes genuinely do not
converge on passages, and the flat result is the truth.

**Situation two:** there is localisation, and an instrument whose values run from
zero to five is far too coarse to detect it.

Both produce the same output. Both produce a median z of zero. And nothing in the
round separates them.

## The device: the resolution of the instrument

| | |
|---|---|
| the statistic | minimum of four counts in a 1,000-word window |
| its observed range | **0 to 5** |
| its median | **2** |
| texts where the weakest bucket contributes ≤3 | **64 of 71** |

> **A statistic built on counting to two.** Five predictions, seventy-one texts,
> two nulls and two thousand permutations rest on whether a number that is usually
> two is bigger than another number that is usually two.

## The confession, which is the reason this episode exists

From the project's own results file:

> "The honest position is that the test as specified had little power, and that
> **this was foreseeable before running it and was not foreseen.**"

Read the second half again. Not "we could not have known." **We could have known,
by arithmetic, in advance, and we did not check.**

That is a harder sentence to write than "the test failed", and it is the correct
one.

## The tool: power, in one idea

**Power is the probability that your test finds an effect that is really there.**

A test with low power that comes back negative has told you almost nothing. And
the negative looks **exactly** like a real negative, on the page, in the abstract,
in the summary table. There is no visual difference between "we looked carefully
and it is not there" and "we looked with a blunt instrument."

And notice that power is a property you can compute **before** collecting
anything. It depends on how big an effect you are hunting, how much noise there
is, and how much resolution your instrument has. **All three are knowable in
advance**, which is what makes the confession above the right confession: this was
not bad luck, it was an unrun calculation.

## The character anchor

**Weighing a letter on a bathroom scale.**

You want to know whether it is over fifty grams. You put it on, and the display
says **zero**.

The letter is not weightless. Nothing has malfunctioned, the scale is accurate,
and the reading is what that instrument reports for every letter that will ever be
placed on it. **The zero is not a measurement of the letter. It is a measurement
of the scale**, and there is nothing on the display that says so.

Now imagine weighing four hundred letters this way and reporting that letters have
no meaningful weight. **Every individual reading is honest**, the sample is large,
the procedure is consistent, and the conclusion is manufactured entirely by
choosing an instrument whose smallest step is bigger than the thing being
measured.

**A statistic whose values run from zero to five, with a median of two, is a
bathroom scale.**

## The clinical anchor

An underpowered trial reporting no difference between arms.

It is the commonest error in the medical literature. Absence of evidence presented
as evidence of absence, and **the abstract never tells you which one you are
reading.** You have to go and compute it yourself from the sample size, and almost
nobody does.

And there is a second-order effect worth knowing, because it inverts the usual
intuition that a weak study is merely a harmless one. **In an underpowered study,
the results that do reach significance are the ones that got lucky**, so they are
systematically larger than the truth. A field full of small studies does not
produce a blurry picture of reality. It produces a confident picture of an effect
bigger than the real one.

## The rule that follows, and it costs something

The temptation after a null result on a coarse statistic is obvious. Widen the
window. More words per window means more hits per bucket, the minimum stops
saturating, and eventually something reaches significance.

> **That is forbidden**, and the project forbade it in advance: no re-running
> with a wider window until something passes. A different operationalization is a
> new pre-registration with its own commit, judged on its own predictions.

Which means round 3's failure has to be lived with rather than fixed, and the
next attempt starts from scratch with its own written predictions.

## And the fix that eventually came

Later rounds carry a **power falsifier**: a number fixed in advance which, if
crossed, declares the round **under-powered rather than negative.**

That is a genuinely good invention and it exists because of this episode. Season
4 is the first time it fires, and when it does, the round is reported as "we could
not have seen it" instead of "it is not there."

> **Round 3 could not make that distinction. Every round after it can**, and the
> reason is that somebody wrote down a number in advance instead of arguing about
> it afterwards.

## What would count against this episode

1. **The power problem being unfixable rather than unnoticed.** If no
   operationalization of this claim could have had power on texts this size, then
   "foreseeable and not foreseen" is too harsh and the honest verdict is that the
   corpus was never big enough. **Nobody has worked out which it is.**
2. **The median of two being the wrong diagnostic.** Power depends on the effect
   size you are hunting as well as the instrument's resolution, and **no effect
   size was ever specified**, so strictly the power calculation could not have been
   done as described. That is a worse finding than the one in the episode.
3. **The power falsifier being gameable.** A number fixed in advance can still be
   fixed generously. **Season 4 is where it fires**, and whether it was set at an
   honest level is checkable there rather than here.

## Handing off

Round 3 is finished and its verdict is that nobody knows.

**Episode 16 is the round that finally asks about dissent**, which is the thing
Girard actually claims, and it opens with a confession written before any data
existed.

## Questions

1. How would you have computed the power of this statistic before running it? You
   have everything you need.
2. Write the sentence distinguishing "no effect" from "no power" for a general
   audience, in one line.
3. Why is re-running with a wider window forbidden, when a wider window is
   obviously better?

---

[[S3E14 - A Null that Tests Nothing, by Construction|← A Null that Tests Nothing, by Construction]] · [[S3E16 - The Universal Negative, and Confessing First|The Universal Negative, and Confessing First →]]
