---
season: 3
episode: 4
title: "The Clean Corpus Rule"
words: 1242
minutes: 9.2
character_anchor: "The sharpshooter who fires at the side of a barn and then paints the target around the tightest cluster of holes"
clinical_anchor: "A diagnostic threshold derived and validated in the same cohort"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-3
---

> [!info] S3E04 · 1242 words · ~9.2 min · [[Season 3 - Four Ways To Fail — Index|season index]]
> **Generated from `Research/Season 3 — Four Ways To Fail.md`. Edits here are overwritten.**

# The Clean Corpus Rule

[[S3E03 - Validated on One Thing, Used on Another|← Validated on One Thing, Used on Another]] · [[S3E05 - The Most Load-Bearing Number in the Project|The Most Load-Bearing Number in the Project →]]

---
## The stake

The lexicon was revised after seeing round 1 fail. This episode shows why that is
a logical problem before it is a moral one, **and gives you the rule that keeps a
repair from quietly becoming tuning.

## Collecting episode 3

The lexicon was revised **after** seeing round 1 fail. Which creates a problem
that has nothing to do with honesty and everything to do with logic.

## The problem, stated as a question

**The texts that caused you to change the instrument cannot test the change.**

You looked at Pentheus. You saw `crimes 0.00`. You worked out the tearing
vocabulary was missing. You added it.

> **Now score Pentheus again. Of course it improves. You built the improvement out
> of Pentheus.**

That is not cheating and nobody is lying. **It is circular**, and the circularity
is invisible because every individual step was reasonable.

And notice how little the improvement tells you, which is the part worth being
exact about. **It is not weak evidence that the lexicon got better. It is no
evidence at all.** The same edit would produce the same improvement if the tearing
vocabulary were a superstition, because the words were selected by reading the
text they are now being scored against. The result was fixed at the moment the
edit was made and the scoring run is a formality.

## The clinical anchor

**A diagnostic threshold derived and validated in the same cohort.**

Everyone knows it is wrong. **It is published constantly**, because the cohort is
expensive and you already have it and the numbers come out beautifully. The
sentence in the paper is usually "the threshold was validated in an independent
subset," and the subset is independent in the sense that those particular patients
were held aside, in a cohort assembled at one hospital by one team.

**The machine-learning version everyone knows: training set and test set.** Same
idea, and the reason it is drilled into every beginner is that the error is
seductive rather than obscure. **A model that has seen the answers gets everything
right, and it feels like competence from the inside**, which is why the discipline
has to be procedural rather than attitudinal.

## The character anchor

**The sharpshooter who fires at the side of a barn and then paints the target
around the tightest cluster of holes.**

Everybody understands why the bullseye proves nothing. Now add the step that makes
it this episode. **He invites you to check his accuracy by measuring the distance
from each hole to the centre of the ring.**

Those measurements are real. They are careful, they are reproducible, anybody with
a tape measure gets the same numbers, and **a genuinely rigorous procedure is now
running on top of a target that was chosen to make it come out well.** The rigour
is not fake. It is simply downstream of the thing that decided the answer.

**Rescoring Pentheus is the tape measure.**

## The rule

> "**No result on the old corpus can be cited as confirmation of the revision.**
> Those are the texts that motivated the change."

So round 2 was run on **71 texts that had never been scored with any lexicon.**

That is an expensive rule and it is worth pricing. The old corpus is right there,
already fetched, already cleaned, already debugged, with two known bugs found and
fixed in it. **The 71 new texts are unfamiliar, unchecked, and will contain
whatever the fetcher does badly this time.** Choosing them means trading a corpus
you understand for a corpus that can tell you something.

## The device: the disclosure nobody would have missed

**This is the part worth the episode.**

Written into the pre-registration itself, before anything ran:

> "Disclosure: the v2 lexicon **was smoke-tested on the old corpus to verify the
> code runs. That output was seen before this file was written.** No new corpus
> file was scored."

**Stop and consider what that is.**

Nobody would have known. It is a technical check, on the old corpus, which is
already contaminated anyway. It changes nothing about the result. **Omitting it
would have cost nothing and no reader could ever have detected it.**

> **It is a confession of a minor contamination, volunteered, in the one document
> that had every incentive to leave it out.**

And there is no mechanism by which it could have been caught. This is not a case
of somebody disclosing early because the truth would surface later. **Running a
script to see whether it crashes leaves no trace anybody would recognise as
evidence**, and the person who ran it is the only witness that it happened.

That is the actual test of whether a pre-registration culture is real. Not whether
the big rules are followed, because the big rules are enforced by other people
looking. **Whether the small, undetectable, harmless ones are declared anyway**,
because the habit is what protects you when the stakes are high.

And be precise about why the habit matters rather than the individual disclosure.
The smoke test genuinely changed nothing. **What it establishes is a threshold**:
this project treats "I saw output before freezing the prediction" as reportable at
all, at the level where it obviously does not matter, which is the only level
where you can set a threshold honestly.

**Put the ladder on screen, because the argument is about which rung you set the
threshold on.**

| rung | what it is | who could catch you | disclosed here |
|---|---|---|---|
| 5 | scoring the corpus, then writing the prediction | anybody, from the git log | n/a |
| 4 | seeing a partial result before freezing | a co-author | n/a |
| 3 | reading the texts closely while drafting the lexicon | **nobody** | yes, in round 2 |
| **2** | **running the code on the old corpus to see if it crashes** | **nobody, ever** | **yes, this one** |
| 1 | knowing the literature before you start | nobody, and unavoidable | stated as a limit |

Read up the right-hand column. **Enforcement stops at rung 4.** Everything below it
is on the honour of one person, and rung 2 is the lowest rung that could even be
described as contamination.

> **A threshold set at rung 2 is only meaningful because it was set before
> anybody knew which rung would matter.** You cannot decide what counts as
> contamination once you know which way the contamination cuts.

## The thing this rule does not fix, and it should be said here

The clean corpus rule protects the **instrument**. It says nothing about the
**hypothesis**.

Round 2's predictions were written by somebody who had already watched round 1
fail, and who therefore knew a great deal about how these buckets behave on Greek
texts. **He had seen which genres scored high. He had seen that `crimes` was
thin.** None of that knowledge was erased by fetching 71 new files.

So the honest statement of what round 2 establishes is narrower than it looks.
**The lexicon had not seen these texts. The person writing the predictions had
seen texts like them**, and the predictions are shaped by that experience in ways
nobody can quantify.

> **A held-out corpus makes the instrument honest. It cannot make the
> experimenter naive**, and there is no procedure that can, which is why
> pre-registration records what you expected rather than pretending you expected
> nothing.

## What would count against this

1. **A smoke test being genuine contamination.** Argue it: seeing the code run on
   old texts tells you nothing about new ones. **The counter is that "nothing"
   is doing a lot of work in that sentence** and the honest move is to let the
   reader price it.
2. **71 texts not being enough.** A real question nobody asks. **What decides how
   many you need?**

## Handing off

The corpus is clean and the predictions are frozen. **Episode 5 is one of the six
predictions**, and it is the one nobody thinks about and everything depends on.

## Questions

1. **Is a smoke test contamination?** Argue both ways.
2. **Why volunteer it at all**, when nobody would have known?
3. **How many texts do you need for a clean test?** What decides it?

---

[[S3E03 - Validated on One Thing, Used on Another|← Validated on One Thing, Used on Another]] · [[S3E05 - The Most Load-Bearing Number in the Project|The Most Load-Bearing Number in the Project →]]
