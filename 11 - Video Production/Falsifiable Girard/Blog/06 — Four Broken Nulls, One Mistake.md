---
title: Four Broken Nulls, One Mistake
series: Falsifiable Girard
post: 6
tier: peak
status: drafted, unreviewed
drafted: 2026-08-17
words: 2830
reading: 12.3 min
figures: 5 specced, 0 drawn
sources: RESULTS-3.md, RESULTS-4.md, RESULTS-NULL2.md, RESULTS-7.md, RESULTS-8.md, S3E12, S4E12
---

I measured something and got 6.10.

Is that big?

You cannot answer that. Nothing about the number tells you. 6.10 per thousand words is not large or small until something is standing next to it. The thing you build to stand next to it is called a null.

This post is about the four times I built one wrong.

Not four different mistakes. The same mistake, four times, across four rounds, over three weeks, by somebody who was writing pre-registrations and declaring falsifiers the entire time. It is the most useful thing this project produced, and it has nothing to do with Girard.

## What the thing actually is

A null is not a claim about the world. It is a machine for manufacturing fake data that resembles your real data in every respect except the one you are testing.

So building one is not a statistical act. It is a modelling act. Only two questions.

| | |
|---|---|
| **1** | what does my fake data **keep** from the real data? |
| **2** | what does it **destroy**? |

Whatever it destroys is what you are testing. Nothing else.

If it destroys two things, you are testing two things and you will not be able to say which one moved. If it destroys nothing that matters, you are testing nothing, and the test will still print a number, and the number will look like a result.

> [FIGURE 1. The keeps/destroys pair as a single object. Two columns under one heading, with an arrow from the "destroys" column to a label reading "this, and only this, is your hypothesis". Deliberately plain. It is a definition, not an illustration.]

## You already know one

A control group.

Same age distribution, same sex ratio, same comorbidities, same hospital, same season, same everything except the drug. Ask the two questions of it. It keeps age, sex, comorbidity, setting. It destroys exposure to the drug. So it tests the drug.

This is not an analogy for a null. It is a null. Same object, different room.

And the ways a control group goes wrong are the ways every null in my project went wrong.

Match on too much and you learn nothing. Match the control group on the drug itself and the two arms are identical. Less obviously, match on something downstream of the drug and you have controlled away the effect you came to find.

Match on too little and you are testing the wrong thing. If the control group is younger, you are testing age. The write-up will say you were testing the drug, and the write-up will not know.

That last sentence is the whole post. A badly built null does not weaken a study. It silently answers a different question, at full confidence, under the heading you wrote before you knew.

## Building one, properly, once

The question in round 3 was whether the four stereotypes converge on a single passage. Girard's claim is about an event. A text that scores high on totals has not shown you an event, it has shown you a vocabulary.

So the fake data has to be a text with everything the real text has, except that nothing is anywhere in particular.

Take the text. Put every word in a hat. Draw them out in random order.

| it keeps | it destroys |
|---|---|
| every single word, exactly | the order they were in |
| every bucket's total count, exactly | which words are near which |
| the whole-text rate, to the last decimal | any passage, any scene, any moment |
| the text's length | |

It isolates position and nothing else. And notice what falls out of that. A text can be drenched in all four stereotypes and still fail this null, because the shuffled version is drenched too. The null is immune to the density problem that wrecked the round before it.

That is not luck. That is what a well-chosen null buys.

Then one implementation detail decides everything. The lexicon contains multi-word forms. `limb from limb`, `cast out`, `with one voice`. Shuffle the raw words and every phrase dissolves. `limb from limb` becomes three words scattered across the book, and the fake text scores lower than the real one on phrases for a reason that has nothing to do with position.

The null would be testing whether phrases exist. You would report it as localization.

The fix is to mark each phrase hit at its first word and shuffle the marks rather than the words, so a phrase travels as one unit. One line. Without it the round measures the wrong thing and looks like a triumph.

Run it five hundred times per text and you have five hundred fake answers to put beside the real one.

$$ z = ( \text{observed} - \text{mean of the fakes} ) / \text{sd of the fakes} $$

z is how many typical wobbles away from nothing you are. Zero means you look exactly like nothing happening.

## Now the four

Every one of these ran correctly. None of them is a coding bug. That is the property that makes this class of error dangerous. A broken null does not crash. It reports.

> [FIGURE 2. Four panels in a row, one per failure. Each panel: a small schematic of the real text on the left, the null's version on the right, with the mismatched property circled in red. Panels share a caption strip along the bottom reading "what the statistic depended on / what the null randomised". The reader should be able to see the four are the same picture before reading a word.]

### Round 3, Null B, and it favoured the wrong texts by construction

Alongside the shuffle I ran a second null. Build random lexicons matched on word frequency, score those, see whether Girard's four buckets beat them.

They did not. Random word sets scored higher. On the *Bacchae*, the play Girard uses as his central example, the observed value was 2.0 against a null mean of 4.41.

That is not evidence about Girard.

The statistic was a minimum across four buckets. Random words matched on individual frequency spread out across topics, so they appear at more uniform rates, and a uniform rate raises a minimum. Any thematically coherent word set clumps. Any clumpy set loses this comparison.

Null B would fail identically for any four topical word sets, on any corpus, about anything. It tests nothing.

My error. And it was in the pre-registration, so it was frozen before anyone could notice it.

### Round 4, D4, and the effect was never in the null's way

Round 4 tested a fifth bucket for dissenting voices. The frequency-matched null came back at 591 of 2000 draws beating the observed value, p = 0.296.

Read alone that says the instrument is weak. Split the instrument in half and it says something else entirely.

| half | GOSPEL | TRAGEDY | MYTH |
|---|---|---|---|
| unigrams | 0.367 | **0.639** | 0.486 |
| phrases | **0.982** | 0.156 | 0.108 |

The unigram half runs backwards. On single words the Gospels score lowest of the three tiers, and the observed Gospel-minus-myth separation on unigrams is −0.075 per thousand. It is negative. Of course 591 random word sets beat it.

The null matched unigrams only. Fifty-three phrases sat untouched in every one of the 2000 draws, contributing their full separation to the observed value and to the null alike, cancelling out, leaving the comparison to be decided entirely by the half running the wrong way.

This is the sneakiest of the four. It did not destroy too much or too little. It operated on the wrong object.

A null that leaves the effect in place is not a weak test of your hypothesis. It is a confident test of something else.

### Round 5, and a rare phrase became a very common word

The round 2 null script was lost, so I rebuilt it as a grid of 48 configurations across five free parameters and let the grid tell me which one the original had been.

The grid did not scatter. It split, cleanly, on one parameter.

| arm | n | p range | null sd |
|---|---|---|---|
| unigrams-only | 24 | 0.00050 to 0.00700 | 2.46 to 3.58 |
| phrase-aware | 24 | 0.15892 to 0.54123 | 10.48 to 13.09 |

The phrase-aware arm inherited its procedure from round 3. It matched a multi-word form on the corpus frequency of its **first token**.

`with one voice` occurs 3 times in the corpus. `with` occurs 8,294 times. So the null replaced a phrase appearing three times with a word appearing eight thousand times, and called that frequency-matched.

Median inflation across all 68 phrases: 113 times. In aggregate the arm swapped 206 phrase-occurrences for words totalling 65,137 occurrences, a 316-fold inflation.

You can see it in the output without any argument about it. The null's standard deviation goes from about 3 to about 11 the moment the arm is switched on. A null whose spread is four times the instrument's cannot reject anything.

Third instance. And I want to name what makes round 5 worse than the two before it. Round 3's Null B was a bad idea. Round 4's D4 was a bad match. Round 5 was neither. Round 5 inherited round 3's code.

### Round 7, Null A, and every tier came out repelling

Round 7 measured how far dissent vocabulary sits from violence vocabulary, against a null that permuted token positions uniformly. Same shuffle as round 3, reused.

Mean z came out positive in every tier. Gospel +0.276, tragedy +0.665, myth +0.326. Positive means dissent sits *farther* from violence than chance would put it.

Every tier repels. That is not a Girardian result, not an anti-Girardian result, and not plausible as a fact about narrative.

Here is what happened, and it is measurable without any null at all. Uniform permutation destroys the locality of the violence hits too. And violence hits are not uniformly located.

Index of dispersion of the gaps between consecutive violence hits. It is 1.00 for a uniform scatter.

| tier | n | median dispersion |
|---|---|---|
| GOSPEL | 4 | 466.9 |
| TRAGEDY | 23 | 263.3 |
| MYTH | 61 | 350.9 |

All 88 measurable texts sit above 1.0. The median is 323. Violence vocabulary is concentrated in battle scenes, executions and lynchings, by a factor of a few hundred over uniform, which anyone who has read a poem could have told me.

So the null spread the violence evenly, which shortened the nearest-violence distance in the fake data, which pushed the observed z positive regardless of where the dissent actually sat.

The statistic was sensitive to the arrangement of the comparison set. The null destroyed that arrangement.

## The check that would have caught all four, and it takes ten seconds

| ask | round 3 | round 4 | round 5 | round 7 |
|---|---|---|---|---|
| what does my statistic depend on? | clumping | phrases | phrase rarity | violence clustering |
| what does my null randomise? | order | unigrams | first tokens | all positions |
| **do those match?** | **no** | **no** | **no** | **no** |

Four rounds. Four no's. The table is three rows long and I never filled it in.

> [FIGURE 3. The three-row table drawn as a fill-in-the-blank form, blank, with a pen line. Presented as an object the reader is meant to copy rather than admire. Small enough to sit in a margin.]

The obvious question is why. Not why I got a null wrong once, which is ordinary. Why I got it wrong four times while running a pre-registration discipline built specifically to catch me.

The answer is that the null felt like the check rather than the thing being checked.

Every one of those rounds had a careful pre-registration protecting the prediction. Predictions were frozen, committed, timestamped, judged against thresholds fixed in advance. All of that machinery pointed at the hypothesis. The null sat outside it, in the part of the work labelled *controls*, which is the part everybody trusts.

Test a lock by pulling on the door. The door does not open. The lock goes in the log as working.

The test was real. The door was genuinely pulled. It exercised a property the lock does not fail on, and the result was filed as reassurance, and the log now reads as the history of a secure building. The way that lock actually opens is a bump key, and no amount of pulling will ever find it.

The apparatus you build to catch yourself is the part nobody audits. An error there is invisible, because its output is reassurance.

## The one-line fix, and what it actually bought

Round 8 changed one thing. Hold the violence positions fixed. Permute only the dissent.

That null asks the question the statistic was built for. Given where the violence actually is in this text, is the dissent nearer to it than chance? It preserves the comparison set's real arrangement and randomises only the thing under test.

The new statistic pools across texts. For each dissent hit, take the fraction of that text's positions lying at least as close to a violence hit. Average it. Call it U.

U is exactly 0.5 under random placement. Whatever the text length. However clustered the violence is. Below 0.5 is Girard's prediction.

| tier | texts | hits | U | null mean | p |
|---|---|---|---|---|---|
| **GOSPEL** | 4 | 112 | **0.4171** | 0.5018 | **0.0015** |
| TRAGEDY | 23 | 235 | 0.4838 | 0.5025 | 0.161 |
| MYTH | 50 | 334 | 0.4832 | 0.5018 | 0.124 |

First positive localization result in eight rounds. In the four Gospels, dissent vocabulary sits closer to violence vocabulary than chance places it.

> [FIGURE 4. A single number line from 0 to 1 with 0.5 marked as "chance". Three points plotted with their null bands. The Gospel point clearly left of its band, tragedy and myth sitting inside theirs. One picture, one claim.]

And then the round takes most of it back, and this is why the post does not end at the table.

The dissent lexicon was built in two halves, and one of them was disclosed in July as at higher risk of being motivated. Score the *core* half alone, the concepts that state Girard's actual claim, innocence and false witness and protest and plead:

```
full lexicon :  GOSPEL 0.4171  <  MYTH 0.4832  <  TRAGEDY 0.4838
core lexicon :  TRAGEDY 0.4838 <  MYTH 0.5053  <  GOSPEL 0.5143
```

The Gospels go from lowest to highest. On the concepts that carry Girard's claim they show no co-location at all, and sit fractionally farther from violence than chance. The entire effect belongs to the other half. Crowd speech. Division, some said, others said, not all.

So the surviving sentence is smaller than the one I set out to test. The Gospels put crowd-division language near violence language more than chance does. Myth and tragedy do not, and the concepts that state Girard's claim do not, in any tier.

I had written a falsifier for exactly that reversal. It was called N3.

It did not fire. I coded it as a comparison of two booleans rather than two orderings. Both orderings failed their own strict test, both booleans came out `False`, `False == False` returned `True`, and the script printed *core order matches full lexicon: yes*.

N3 fires in this post because I read the table underneath it.

A falsifier stated correctly and coded incorrectly is worse than no falsifier at all. No falsifier leaves you knowing you have no protection. A broken one prints reassurance, in the same font, in the same place, at the same time.

> [FIGURE 5. The refrain, set as a full-width band. "A check that cannot fail prints reassurance." Nothing else on the line. This is the fifth of five figures on purpose, and it is not a diagram.]

## What to take

Fill in the three-row table before you write the null, not after you read the result.

Then go and look at the part of your method you did not think was under test. Not the hypothesis, which you already doubt. The control. The baseline. The sanity check that has passed every time you have ever run it.

Mine had. Every time.

---

*Next: the rest of the arithmetic, all of it. Medians, one-sided p, where 0.05 came from, the Mann-Whitney U, and the power falsifier that fired at a median z of −0.012 and stopped a round from claiming an absence it could not have seen.*
