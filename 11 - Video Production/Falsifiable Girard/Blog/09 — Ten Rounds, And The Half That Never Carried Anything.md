---
title: Ten Rounds, and the Half That Never Carried Anything
series: Falsifiable Girard
post: 9
tier: peak
status: drafted, unreviewed
drafted: 2026-08-17
sources: DIAGNOSTIC-CORE.md, RESULTS-2/3/4/6/7/8/9/10.md, RESULTS-NULL2.md, dissent.py
---

Ten pre-registered rounds between 21 July and 16 August. Here is all of it on one page.

| round | what it tested | outcome |
|---|---|---|
| 1 | the four buckets at episode scale | **fail.** MIN collapsed |
| 2 | lexicon v2 on 71 unscored texts | 4 of 6. **The only surviving positive**, p = 0.0045 |
| 3 | do the four converge on one passage | **1 of 5**, and the pass was vacuous. *Bacchae* p = 0.66 |
| 4 | a fifth bucket for dissenting voices | nominally 3 of 4. **Nothing survives its own two sensitivity analyses** |
| 5 | rebuild round 2's lost null | **UNSTABLE.** 24 of 48 configurations under 0.05 |
| 6 | a real phrase-aware null, plus a translation control | **4 passes, no falsifier fired.** First clean round since 2 |
| 7 | does dissent sit near violence | **fail.** Two falsifiers fired |
| 8 | the same question, corrected null | **U1 passed at p = 0.0015.** Then N3 fired |
| 9 | delete `king` from `marks` | 4 of 6, and **nothing load-bearing moved** |
| 10 | delete `death` from `crisis` | 2 of 5. A falsifier fired **on my measuring instrument** |

> [FIGURE 1. The ten rounds as a horizontal strip, each round a block subdivided into its predictions, passes in one colour, failures and fired falsifiers in others. The eye should register how little colour there is.]

Read down the outcome column.

In ten rounds this project produced exactly two positive results that were not later withdrawn. One of them cannot be reproduced, because its script was never saved.

That is the honest headline. It is not the interesting part.

## The thing that showed up four times

Round 4 added a fifth bucket, for the dissenting voice, because post 3 established that this is where Girard actually puts the difference between myth and Gospel.

The bucket was built in two halves, tagged at the moment of writing, before anything was scored.

**`core`** holds the concepts that state Girard's claim directly. Innocent, guiltless, no fault, false witness, done nothing, without cause, unjust, protest, object, denounce, defend, plead, speak for.

**`unan`** holds crowd speech. Division, some said, others said, not all, spare him.

`unan` was disclosed in the pre-registration, in July, as at higher risk of being motivated. It was written knowing what the Gospels sound like.

Then this happened, four times, on four different measures.

| round | measure | what `core` did |
|---|---|---|
| 4 | whole-text rate, ASV | dropping `unan` took Gospel over myth from p = 0.0003 to **0.293** |
| 6 | whole-text rate, KJV | **p = 0.254** |
| 7 | distance to nearest violence | every tier positive, **Gospels worst** |
| 8 | co-location, violence held fixed | Gospel **0.5143**, the **highest** of three tiers |

Read the last row against round 8's headline. On the full lexicon the Gospels come out lowest, which is Girard's prediction, at p = 0.0015. On `core` alone they come out highest.

>> **The half disclosed as contaminated carries everything. The half that states Girard's actual claim has never carried anything, on any measure, in any round.**

Each time this was reported, the explanation offered was *the effect lives in `unan`*.

That is true. It is not an explanation. It restates the observation in different words and stops.

## The explanation, and it is arithmetic

`core` is not one thing. It is three, and they cancel.

Per-concept rates per thousand words, pooled by tier:

| sub-family | concepts | GOSPEL | TRAGEDY | MYTH | Gospel/myth |
|---|---|---|---|---|---|
| **A. the accusation is EMPTY** | no fault, false witness, done nothing, without cause, wrongly, unjust | **0.373** | 0.162 | 0.101 | **3.68×** |
| **B. someone ADVOCATES** | protest, object, denounce, defend, plead, speak for | **0.012** | 0.212 | 0.201 | **0.06×** |
| C. the victim is INNOCENT | innocent, guiltless, not guilty | 0.060 | 0.165 | 0.106 | 0.57× |
| | **all `core`, as scored in rounds 4-8** | 0.445 | 0.542 | 0.413 | **1.08×** |

Sub-family A runs **3.68 times toward the Gospels**. Sub-family B runs **17 times the other way**. Put them in one bucket and they cancel to 1.08, which is the number four rounds of null results were reporting.

> [FIGURE 2. Two arrows of proportional length pointing in opposite directions from a centre line, A rightward at 3.68 and B leftward at 17. Beneath them, the single stubby arrow at 1.08 that the bucket actually produced. The cancellation drawn rather than described.]

**Six of the sixteen `core` concepts fire zero times in the Gospels.** Not guilty, slander, protest, denounce, defend, plead, speak for.

And the two that dominate the myth tier, `defend` at 0.109 and `plead` at 0.052, are exactly the forms that fired on hymnic epithets in `orphic_hymns_2`. They produced round 4's false counterexamples.

The bucket's worst behaviour and its backwards half are the same words.

>> **`core` was never measuring nothing. It was measuring two opposite things at once and reporting their difference.**

## And the file said so before any of it was scored

Check this part first. It takes thirty seconds and it is against me.

`dissent.py` has a header, written when the bucket was built, before scoring:

> "So the construct is **not innocence**. It is a voice that **questions the verdict** and **breaks the unanimity**. Two different things, and the second is the one Girard says is absent from myth."

And Girard, quoted in that same header:

> "**not merely the innocence of the victims versus their guilt**, but the fact that, in mythology, no one ever questions this guilt."

Now open the bucket. It leads with `innocent`, `guiltless`, `not_guilty`. It fills out with `defend`, `plead`, `protest`, `denounce`, `speak_for`.

Sub-families B and C are **ten of the sixteen concepts**, and neither is what the header says the construct is.

>> **The bucket contradicts its own docstring.** Not as a matter of interpretation. In the file, in the same file, four lines apart.

> [FIGURE 3. The docstring text on the left, the concept list on the right, with lines drawn from each concept to whether the docstring endorses it. Ten lines land on "the header says this is not the construct". Nothing else needed.]

Somebody wrote down the correct construct. Then built a bucket for a different one. Then scored it four times. Then explained the null results four times without opening the file.

That somebody was me. The header is in my own handwriting.

## What the surviving evidence actually points at

Put sub-family A beside the `unan` results and the picture reorganises.

| what separates the Gospels | what does not |
|---|---|
| the accusation is empty (no fault, false witness, done nothing, without cause) | the victim is innocent (innocent, guiltless) |
| the crowd is divided (division, some said, others said, not all) | someone advocates for him (defend, plead, protest) |
| the crowd is asked to release him (spare him, let him go) | |

Both surviving columns are about **the collective's verdict.**

Both failing columns are about **the victim's character, or his supporters.**

> [FIGURE 4. Two boxes. One labelled "the crowd" holding the surviving items, one labelled "the victim" holding the failing ones. A dotted line between them labelled with Girard's own sentence, "not merely the innocence of the victims versus their guilt".]

That is a sharper construct than the one this project spent five rounds testing, and it is closer to the source passage than the lexicon built from it.

It also lines up exactly with post 3. Girard rules out innocence as the differentia **in the sentence the lexicon was built from**, and the lexicon led with innocence anyway.

## Why none of this can be claimed

Here is where I stop, and stopping is the point.

**This split was found by looking at the corpus after eight rounds of scoring it.**

Re-score the same texts with `core` split three ways, report the result, and that is post 5's excluded Diodorus page moved from the sample into the lexicon.

It is the most tempting move available in this project right now. It would produce a headline. It is forbidden by the project's own rule, and the rule is worth more than the headline.

And there is no held-out sample to escape to. Counted: exactly **one** text in the corpus directories that was never scored, and it is a second translation of a text already in. Six apocrypha, which are Jesus-narratives and cannot serve as the myth tier of a tier contrast.

So what this diagnostic produces is not a result. It produces three things, and they are worth having.

An **explanation** for four rounds of nulls that had been reported as a brute fact. A **falsifiable hypothesis** whose concept membership is fixed by a source passage rather than by the numbers, predicting that A separates Gospel from myth and B does not. And a **statement of what corpus would test it**, together with the admission that nothing on disk will.

The next round, if it happens, needs new texts, fetched against a list frozen before anything is scored. And it has to report B running backwards. That is the part that makes it a test rather than a fishing expedition.

## The shape of the ten rounds, read as a sequence

Step back from the individual outcomes and the table at the top has a story in it that no single round contains.

**Rounds 1 to 3 built a detector and tested it as a discriminator.** Post 3 explains why that was always going to fail. The four stereotypes tell you a persecution is being described. They cannot tell you who is describing it, and Girard says so himself.

**Round 4 built the right instrument** and immediately found that the half stating the claim carried nothing.

**Rounds 5 to 8 are all repair work on the machinery**, not on the theory. A lost null rebuilt. A phrase null built properly for the first time. A localization null built wrong and then built right. Four rounds in which the object under examination is the apparatus rather than Girard.

**Rounds 9 and 10 are amputations**, asking what the instrument is standing on.

So the honest description of ten rounds is that three tested the wrong claim, one tested the right claim and got a null, four repaired equipment, and two took the equipment apart to see what held it up.

>> **One round out of ten was a clean test of the thing the project exists to test**, and it came back null on the half that matters.

That is not a complaint about the project. It is what building a real instrument looks like, and anybody presenting a smoother version of the same work is leaving out the four repair rounds.

## What two amputations proved

Rounds 9 and 10 asked a different question. Post 2 showed each bucket is dominated by one word. `marks` is 44% `king`. `crisis` is 61.9% `death`. So: delete the dominant word and see what survives.

Round 9 deleted `king`. **Almost nothing moved.** Tier separation went +1.69 to +1.56. The obvious conclusion is that bucket domination does not matter.

That conclusion is wrong, and it took round 10 to show it.

Round 10 deleted `death`, and crisis went from binding the minimum on 9 texts to binding it on **44**, exactly as predicted in advance. MIN's mean fell **35.4%**. A third of the metric evaporated.

>> **`king` was inert because `marks` was the binding bucket on only two texts.** Nothing to do with the word. The lesson people would have drawn from round 9 was wrong, and it took a second deletion to find out.

And the thing that survived both amputations is the strongest evidence in the four-bucket track.

```
tier separation, intact              +1.69
after deleting king                  +1.56
after deleting death                 +1.41
```

**A 9.4% loss** after removing half of one bucket and nearly two thirds of another, independently. Round 2's cleanest prediction survives having its instrument taken apart twice.

There is a transferable finding in round 9 that has nothing to do with Girard, and I want it stated plainly because it cost real work to learn.

>> **A number can be alarming, correctly identified, printed in the record, named as the most obvious repair, and be completely inert.** There is no way to know which without running it.

The `king` figure had been flagged as a worry since July. It was the top item on the repair list. Running it changed nothing that mattered, and the round that looked like a waste is the round that made round 10 interpretable.

Post 10 is about round 10's other finding. The check this project uses to validate its own headline metric cannot notice the largest change ever made to it.
