---
title: A Check That Cannot Fail Prints Reassurance
series: Falsifiable Girard
post: 10
tier: peak
status: drafted, unreviewed
drafted: 2026-08-17
sources: RESULTS-10.md, RESULTS-2.md P5/P6, RESULTS-8.md N3, RESULTS-6.md, CORRECTION-1.md, audit.py
---

This is the sentence the whole project turns on, and it has to fire on the project itself or it is a slogan.

>> **A check that cannot fail prints reassurance.**

Four instances follow. Three are mine and one is in the toolchain that checks the writing about the other three.

## 1. The check that certifies the headline metric

Round 2 needed to establish that MIN, the minimum across the four buckets, actually carries information rather than sitting at zero everywhere. So it wrote a validation check, called P6, and P6 asked this:

**What share of texts have MIN above zero?**

Answer: 90.3%. Nine texts in ten produce a non-zero minimum, so the metric is alive. P6 passed, MIN was certified, and every later round quoted it.

Now round 10, fourteen months of project time later. Delete the word `death`, which is 61.9% of the `crisis` bucket, and watch what happens to the metric P6 certified.

| what happened to MIN | |
|---|---|
| mean | 0.876 → **0.566**, a fall of **35.4%** |
| median | 0.818 → 0.515 |
| texts with MIN exactly zero | 7 → **7** |
| **share non-zero, which is what P6 measures** | **90.4% → 90.4%** |

**A third of the metric is gone and P6 reports zero movement.** Not a small movement. Zero. To one decimal place, in the direction of nothing at all.

> [FIGURE 1. A fuel gauge with only two positions, EMPTY and NOT EMPTY, beside a continuous gauge showing the tank at two thirds and then at one third. Both are the same tank at the same two moments. The binary gauge reads identically in both. Caption: P6 is the left-hand gauge.]

The reason is structural and it is not subtle once you see it. P6 asks a yes-or-no question. Is the minimum above zero. Deleting `death` did not push any bucket to exactly zero. It made `crisis` much smaller on forty-four texts.

>> **P6 watches the cliff. Everything that matters happens on the slope.**

So P6 is a check that certifies MIN and is structurally incapable of detecting the largest change ever made to MIN. It has never failed. It cannot fail in the way that matters. It passed at 90.3% in July and it will pass at 90-something for as long as anybody runs it.

Two consequences, both against me.

**Every "MIN non-zero" figure in the record is weaker than it reads**, including round 2's 90.3% and round 9's 89.0%. Anyone citing those numbers, including me in five earlier documents, was citing a quantity that moves only in the extreme.

**And my own predictions inherited the defect.** Round 10's D2 and D5 were written using the same non-zero share, because that was the established measure. So the falsifier F1 fired, correctly, on a prediction I had built out of the exact flaw the round went on to discover.

The round failed by inheriting the defect it found. That is reported rather than tidied, and the corrected comparison sits next to the failed one rather than replacing it. On a measure that can see magnitude, deleting `death` does roughly **a hundred times** the damage that deleting `king` did.

## 2. The falsifier that compared two booleans

Round 8 produced the project's first positive localization result. It also carried a falsifier called N3, written in advance. **If the `core` half reverses the tier ordering, the result belongs in the headline rather than a footnote.**

N3 was the correct falsifier. It was pointed at the right thing. And here is how it was coded.

```python
corder == u2        # comparing two booleans
```

Both orderings failed their own strict test. So both variables were `False`. So `False == False` returned `True`. So the script printed:

```
core order matches full lexicon? yes
```

The reversal was total. On the full lexicon the Gospels are lowest of three tiers, which is Girard's prediction. On `core` they are highest. The script looked at that and reported a match.

>> **A falsifier stated correctly and coded incorrectly is worse than no falsifier at all.** No falsifier leaves you knowing you are unprotected. A broken one prints reassurance, in the same font, in the same place, at the same time.

It fired anyway, because the numbers were printed in a table directly underneath, and somebody read the table.

## 3. The audit that could not report the defect it detected

The series built from this project has a script, `audit.py`, that checks every episode for mechanical problems. Too short. Too long. Missing sections.

It printed this, on screen, correctly:

```
<-- OVERLONG, split it
```

And then the summary line said:

```
NO MECHANICAL DEFECTS FOUND
```

Both, at once, with an 1,855-word episode named on the screen between them. The overlong branch printed a warning and never called the function that registers a defect. Only the too-short branch did.

> [FIGURE 2. A dashboard with a warning lamp lit and a status readout beneath it saying ALL SYSTEMS NORMAL. The lamp is wired to a bulb and not to the readout, drawn as a broken wire. That is the whole bug.]

And there was a second one in the same file. The check verifying that each episode carries all six required structural elements looked for the word *anchor* and a Questions heading, and nothing else. Sixteen episodes were missing a falsifier section or a hand-off, and the audit reported no defects on all sixteen.

That is this series' own refrain firing on the toolchain built to enforce it. The script whose job is to say no had two branches where it could only say yes.

## 4. The floor nobody computed

This one is different from the other three. Nothing is broken. Every number is correct. And it may be the most expensive of the four.

Round 2 ran a translation control. Two English translations of the same play, *Agamemnon*, scored on the same four buckets. The question was how much of a score is the text and how much is the translator.

**They came out 17.2% apart.** That passed, and it was reported as a pass, and it should have been.

Round 6 repeated it on a different construct with the ASV and KJV Gospels, two translations 290 years apart. **20.4%.**

So the instrument's own wobble, measured twice, is somewhere around 17 to 20 percent. Below that, a difference between two texts is not distinguishable from a difference between two translators.

Now go and look at what the project spent three rounds arguing about.

The comparison it kept returning to was mythography against tragedy. Does the bare catalogue of myth score differently from the plays?

| | |
|---|---|
| MYTHOGRAPHY | **13.95** |
| TRAGEDY | **13.88** |
| the gap | **0.5%** |

> [FIGURE 3. A ruler with 17.2% marked as its smallest gradation, and the 0.5% gap drawn to scale inside the first tick, essentially invisible. Both numbers labelled. Nothing else on the figure.]

**A 0.5% gap, inside a 17% noise floor.**

Nobody put those two numbers next to each other. The translation control was filed as a gate, something the instrument had to pass in order to proceed. It is not a gate. It is a **ruler**, and it tells you the smallest difference this instrument is entitled to have an opinion about.

Both numbers were in the repository. Both were correct. They were four files apart and nobody walked between them. So a difference the instrument cannot resolve got argued about across three rounds and two seasons of writing.

And the ruler itself rests on **one pair of translations of one play**. Nothing else in the entire project rests on a sample of one, except the thing everything else rests on.

## Why none of these look like mistakes from inside

Each of the four was written by somebody who could have explained, correctly, what the check was for. None is a slip. That is the part worth sitting with, because the obvious lesson from this post is *be more careful*, and being more careful would have prevented none of them.

Take P6 as the clean case.

The question it asks is a **good** question. Does the minimum carry information, or is it pinned at the floor? That is exactly the right worry about a minimum, it is the worry post 7 spends a whole section on, and P6 was written to answer it.

The defect is not in the question. It is in the answer being **binary** when the quantity is **continuous.** Somebody converted *does the metric carry information* into *is it above zero*, which is a reasonable thing to do at the moment you do it, because at that moment you are worried about the floor and the floor is exactly where zero is.

Then the worry changed and the check did not.

>> **A check is written to answer the worry you had on the day you wrote it.** It goes on answering that one long after the project has moved to a different worry, and nothing about the output tells you which question is being answered.

The same shape holds for the other three. N3's author knew what a reversal was and wrote a correct description of one. The audit's author knew that overlong episodes matter, and printed a message saying so. The translation control's author knew that a 17.2% wobble was worth measuring, which is why it got measured at all.

In every case the thinking was done. What failed was the step after the thinking, where a correct idea becomes a line of code or a number in a file and quietly loses a property on the way.

That step has no ceremony attached to it. Nobody reviews it. It is the least interesting part of the work and it is where all four of these live.

## What the four have in common

None of them crashed. That is the property.

A broken hypothesis test gives you a number you can argue with. A broken check gives you a green light, and a green light is not an argument, it is a permission to stop looking.

| | what it was supposed to catch | what it could actually see |
|---|---|---|
| **P6** | MIN failing to carry information | only MIN hitting exactly zero |
| **N3** | the core half reversing the tiers | whether two booleans were equal |
| **audit.py** | episodes that are too long | nothing, the branch never registered |
| **the 17.2%** | translation artefacts | it saw them, and nobody read it as a limit |

And notice where all four live. Not in the hypothesis, which was doubted constantly, pre-registered, falsified, and reported when it failed. They live in the **apparatus built to do the doubting.**

>> **The part of your method that exists to catch you is the part nobody audits**, and an error there is invisible, because its output is reassurance.

## How all four were actually caught

This is the practical part and it is the only advice in this post.

Not one of these was caught by a check. Every single one was caught by a human being reading a number printed next to a verdict, and noticing they disagreed.

P6 was caught because round 10 printed MIN's mean beside MIN's non-zero share. N3 was caught because the tier table sat directly under the line saying *matches*. The audit bug was caught because the warning text and the summary were on the same screen. The noise floor was caught because somebody put two files side by side.

So the rule is unglamorous and it is the one thing I would take from this whole project into any other:

>> **Never print a verdict without printing the quantity it was computed from, directly beside it.**

A verdict alone is unfalsifiable by the reader. A verdict with its numbers underneath can be contradicted by its own evidence, on the same line, by somebody who is only half paying attention.

That is the entire mechanism by which this project caught itself four times. It is not rigour and it is not cleverness. It is refusing to summarise.

## And the demand

Go and find the check in your own work that has never failed.

Not the hypothesis. You already doubt that, and the doubt is why it is safe. The control. The baseline. The validation step. The green light you have never once seen go red.

Then ask the only question that matters about it: **what would have to be true for this to fail?**

If you cannot answer, it has not been passing. It has been printing.
