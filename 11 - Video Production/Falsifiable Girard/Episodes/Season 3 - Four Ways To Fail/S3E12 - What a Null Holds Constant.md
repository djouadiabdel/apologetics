---
season: 3
episode: 12
title: "What a Null Holds Constant"
words: 1407
minutes: 10.4
character_anchor: "A boxing weight class"
clinical_anchor: "A control group"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-3
---

> [!info] S3E12 · 1407 words · ~10.4 min · [[Season 3 - Four Ways To Fail — Index|season index]]
> **Generated from `Research/Season 3 — Four Ways To Fail.md`. Edits here are overwritten.**

# What a Null Holds Constant

[[S3E11 - Asking About a Moment Instead of a Total|← Asking About a Moment Instead of a Total]] · [[S3E13 - Word Order Turns Out to Be Irrelevant|Word Order Turns Out to Be Irrelevant →]]

---
## The stake

The keystone of the series. Four separate failures in this project are the same
mistake about one idea, and every later season stands here. **A null is a world
you build to be innocent, and the skill is saying exactly what your world
destroys.** It runs long on purpose.

**This is the keystone of the series.** Four separate failures in this project
are the same mistake about this one idea, and every season after this one
depends on having it. It runs long deliberately.

## Collecting episode 11

Episode 11 built a statistic that asks about passages rather than totals, and froze
its window settings in advance so they could not be tuned.

**That is half of a test.** A peak of 2.4 means nothing on its own, because there
is no scale, and this episode builds the other half: **the thing you put next to a
number to find out whether it is large.**

## The question that forces a null into existence

You measured something. You got **6.10**.

Is that big?

You cannot answer. **Big compared to what?** There is no scale. 6.10 is not large
or small until something else is standing next to it, and a null is the thing you
build to stand next to it.

## The definition, stated once and then unpacked

> **A null is not a claim. It is a machine for manufacturing fake data that
> resembles your real data in every respect except the one you are testing.**

So building one is not a statistical act. It is a **modelling** act, and the only
question that matters is:

| | |
|---|---|
| **1** | what does my fake data **keep** from the real data? |
| **2** | what does it **destroy**? |

**Whatever it destroys is what you are testing. Nothing else.** If it destroys
two things, you are testing two things and you will not be able to say which. If
it destroys nothing that matters, you are testing nothing.

> And that last case is the series' refrain arriving in algebra. **A null that
> destroys nothing that matters is a check that cannot fail, and a check that
> cannot fail prints reassurance.** It will return a comfortable number every
> time, on any data, for any hypothesis.

## The clinical anchor, and it is not an analogy, it is the same thing

**A control group.**

Same age distribution, same sex ratio, same comorbidities, same hospital, same
season, same everything **except the drug.**

Now ask the two questions of it. It keeps: age, sex, comorbidity, setting. It
destroys: exposure to the drug. **So it tests the drug.**

And then the two ways it goes wrong, which are exactly the two ways every null in
this project went wrong.

**Match on too much.** If you also match on the drug, the groups are identical and
you learn nothing. Less obviously: if you match on something **downstream of the
drug**, you have controlled away the effect you were looking for. That is round
4's failure and round 7's, described in advance.

**Match on too little.** If the control group is younger, you are testing age, and
the write-up will say you were testing the drug. That is round 3's second null.

> **A badly built null does not weaken your study. It silently answers a
> different question than the one you asked, and the write-up will not know.**

## The character anchor

**A boxing weight class**, and you have met one already. Episode 3 used it for a
fighter who trains at one weight and competes at another, which was a point about
validation. **This is the same object doing a different job**, and it is worth
noticing that a weight class can do both, because a control and a reference
population are the same idea seen from two sides.

The entire point of a weight class is to hold constant everything that is not
skill, so that what remains is skill. Nobody thinks a heavyweight beating a
flyweight demonstrates technique.

And the failure mode is the interesting bit: **if you also matched on reach,
stance, age, camp, and record, the fight tells you nothing**, because you have
matched away the thing you were trying to see.

## Now build one, properly, for this project

The question in round 3 was: **do the four stereotypes converge on one passage?**

So the fake data has to be a text that has everything the real text has, except
that nothing is anywhere in particular.

**The shuffle null.** Take the text. Put every word in a hat. Draw them out in
random order. That is your fake text.

| it keeps | it destroys |
|---|---|
| every single word, exactly | the order they were in |
| every bucket's total count, exactly | which words are near which |
| the whole-text rate, **to the last decimal** | any passage, any scene, any moment |
| the text's length | |

> **So it isolates position and nothing else.** And notice what follows: a text
> can be absolutely drenched in all four stereotypes and still fail this null,
> because the shuffled version is drenched too. **The null is immune to the
> density confound that wrecked round 2.** That is not luck. It is what a
> well-chosen null buys you.

## The one implementation detail that decides the whole thing

The lexicon contains multi-word phrases: `limb from limb`, `cast out`, `with one
voice`.

If you shuffle the raw words, **every phrase dissolves**. `limb from limb` becomes
three words scattered across the book, and the fake text scores far lower than
the real one on phrases **for a reason that has nothing to do with position.**
Your null would be testing "do phrases exist" and you would report it as
localization.

**The fix:** mark each phrase hit at its **first word**, and shuffle the marks
rather than the words. A phrase moves as a single unit.

> One line of code, and without it the round measures the wrong thing and looks
> like a triumph.

## The arithmetic that comes out

Run the shuffle five hundred times per text. You now have five hundred fake
answers. Compare:

$$ z = ( observed − mean of the fakes ) / standard deviation of the fakes $$

**z is "how many typical wobbles away from nothing am I."** z = 0 means you look
exactly like nothing happening. z = 3 means you are three wobbles out.

$$ p = ( fakes at least as extreme + 1 ) / ( fakes + 1 ) $$

Same plus-one correction as episode 9, same reason.

## The four ways this project got it wrong, listed now and paid off later

Keep this table on screen for the rest of the series. **Every entry is the same
error**, and the error is answering question 2 wrongly.

| # | round | what the null destroyed | what it should have destroyed |
|---|---|---|---|
| 1 | 3, Null B | word identity **and** clumpiness together | word identity only |
| 2 | 4, D4 | only the unigram half, leaving the phrases untouched | the whole instrument |
| 3 | 5 | a rare phrase, replaced by a word 316 times commoner | a phrase of comparable rarity |
| 4 | 7 | position of the dissent **and** the clustering of the violence | position of the dissent only |

**Four separate occasions. Four different rounds. Four different people-hours of
care. The same question answered wrongly each time.**

> And that is why this episode is the keystone. Not because nulls are hard
> mathematically, they are not. **Because deciding what counts as nothing
> happening is a judgement about your subject, and it is made once, early, in a
> line of code nobody revisits.**

## The exercise, and do it before the next episode

For each of these, say what it keeps and what it destroys. Write both columns.

| null | keeps | destroys |
|---|---|---|
| shuffle the words in a text | | |
| shuffle the group labels between texts | | |
| draw random words matched on frequency | | |
| keep the violence, shuffle only the dissent | | |
| swap in a different translation of the same text | | |

**The fourth row is the one round 8 finally used, and it is the corrected version
of the fourth failure above.** The fifth row is a control this project ran twice
and it is the reason any of its comparisons mean anything.

## What would count against this episode

1. **Some nulls being safe by construction.** If a null design existed that could
   not mismatch its statistic, the whole "judgement about your subject" framing is
   overblown. **Question 3 below asks you to find one**, and this project's four
   failures are evidence rather than proof.
2. **The four failures having four unrelated causes.** Read them again and decide
   whether "the null destroyed the wrong thing" is a real common cause or a frame
   imposed afterwards on four separate mistakes. **It is imposed afterwards.** The
   question is whether it is also true.
3. **The shuffle null being wrong here too.** It destroys all narrative structure,
   not only the position of the buckets, so a text must beat its own coherence and
   not merely chance. **Episode 13 raises this and nobody has tested it.**

## Handing off

You have the two questions, and a null for round 3 built to answer them.

**Episode 13 is what came back**, and the answer is that word order turns out to
be irrelevant to the statistic, which is the cleanest way a well-built test can
tell you that you measured nothing.

## Questions

1. Design a null for "this author uses short sentences at emotional moments."
   State what it keeps and destroys before writing any procedure.
   ___
   ___
2. A null that destroys two things at once. Why can no amount of downstream
   statistics repair it?
   ___
   ___
3. Is there such a thing as a null that is safe by construction, or is every one
   a judgement about the subject?
   ___
   ___
4. The shuffle null keeps the whole-text rate exactly. Explain in one sentence why
   that makes it immune to round 2's density problem.
   ___
   ___

---

[[S3E11 - Asking About a Moment Instead of a Total|← Asking About a Moment Instead of a Total]] · [[S3E13 - Word Order Turns Out to Be Irrelevant|Word Order Turns Out to Be Irrelevant →]]
