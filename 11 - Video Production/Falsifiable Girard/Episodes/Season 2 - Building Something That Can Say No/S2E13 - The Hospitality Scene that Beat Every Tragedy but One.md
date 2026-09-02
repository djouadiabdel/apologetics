---
season: 2
episode: 13
title: "The Hospitality Scene that Beat Every Tragedy but One"
words: 2065
minutes: 15.3
character_anchor: "A heist crew"
clinical_anchor: "Book 7 is what the trade looks like when a real case arrives"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-2
---

> [!info] S2E13 · 2065 words · ~15.3 min · [[Season 2 - Building Something That Can Say No — Index|season index]]
> **Generated from `Research/Season 2 — Building Something That Can Say No.md`. Edits here are overwritten.**

# The Hospitality Scene that Beat Every Tragedy but One

[[S2E12 - Adding Up Versus All Four at Once|← Adding Up Versus All Four at Once]] · —

---
## The stake

The promise from episode 1 comes due: a dinner party that outscores every
tragedy, and the instrument catching its own false positive. **Stay for what the
catch proves.

## Collecting episode 12

Episode 12 chose MIN over SUM on theory alone. Nothing in the data recommended
it. The argument was that Girard's claim is about four things occurring together,
so the metric has to be one that four together can satisfy and three cannot.

**That is the weakest kind of justification available at the moment you make
it.** You are asserting that a piece of arithmetic matches a piece of theory, and
there is no way to check the match from inside the argument. Every bad instrument
in the world was also chosen for reasons its author found convincing.

**This episode is the check**, and it comes from a text that was in the corpus to
be boring. It is the only kind of evidence that can vindicate a choice made on
theory: a case the choice handles correctly that nobody had in mind when they
made it.

**Season 1 episode 18 read this passage as literature.** This episode reads it as
a test of the metric.

## The finding

| book | scene | crisis | crimes | marks | violence | **SUM** | **MIN** |
|---|---|---|---|---|---|---|---|
| **7** | Odysseus welcomed at the palace | 0.30 | **0.00** | **6.51** | 0.59 | 7.40 | **0.00** |
| 18 | Irus the beggar | 0.00 | **0.00** | 5.73 | 2.15 | 7.88 | **0.00** |
| 22 | the slaughter of the suitors | 1.31 | 0.22 | **0.22** | 7.62 | 9.37 | 0.22 |

> **These are the v2 numbers.** The old table was round 1 on lexicon v1, never
> re-run until Season 1 episode 18 forced it. **That episode carries the full
> before-and-after**; this one carries what the numbers mean.

Read it one column at a time, because the **`marks` column** is the finding.

**Book 7 is a dinner party.** Odysseus arrives at the palace of Alcinous, is
bathed, given clean clothes, fed, and questioned politely by his host. Nobody is
accused, expelled or harmed. **Zero on `crimes`, and that zero is correct**,
because there is nothing in the scene for that bucket to find.

**And `violence` is not zero, which is better than if it were.** It is 0.59, two
hits in 3,379 words: **`killed`** and **`to pieces`**, both inside Odysseus telling
his hosts about the shipwreck.

> The bucket did not find violence in the room. It found a man **describing**
> violence, and a word-list cannot tell a wound from an anecdote about one.
> `crisis` does the same: its one hit is **`likeness`**, meaning somebody
> resembling somebody.

**Book 22 is the massacre.** Odysseus kills every suitor in the hall, and it is
one of the most violent scenes in Greek literature.

**On the victim-marks bucket the dinner party scores 6.51 and the massacre scores
0.22.** Thirty times lower, on the bucket built to detect marked victims, in the
scene where the bodies are. **That is the finding and it is untouched by the
re-run.**

> **And say what the re-run took away.** Under v1 the dinner party beat the
> massacre on SUM too, 6.51 against 5.67, with the massacre seventh. **Under v2
> it does not**, and book 22 ranks second. **The most quotable sentence this
> episode ever had was an artifact of a bug.**

What survives: a scene with an empty bucket still ranks **fifth of twenty-four**,
and on `marks` it still beats **every tragedy in the corpus except *Oedipus the
King*** at 9.58. The only other texts above it are two prose compendia.

## Why a hospitality scene scores as victim-marking

Nothing has gone wrong with the code here, and that is the part worth slowing
down for.

**Collect Season 1 episode 8.** `marks` is **44% the word `king`**, and the king
passed both tests there: outside the group, and killable without anybody obliged
to avenge him. **In Girard the king is a victim whose execution has been
deferred**, tier K there and still tier K here. `king` belongs in `marks`.

Now put that word-list in front of book 7. Everyone in the room is a king, is
addressing a king, or is describing one. The word saturates the passage for
reasons of **setting**.

> **The false positive is not the lexicon misfiring. It is the lexicon working
> exactly as written, on a text where one stereotype is present at maximum
> density and the other three are absent.**

That decides which repairs are available. A misfire you fix by editing words. This
you cannot, because deleting `king` would delete a real victim mark and break the
instrument in the other direction. **The problem is not in the word-list, so it
cannot be solved in the word-list.**

## What SUM does with a text like that

SUM adds the four buckets. 0.30 plus 0.00 plus 6.51 plus 0.59 is **7.40**.

Look at what that arithmetic permits. **A single bucket can carry the entire
score.** `marks` alone is **88% of book 7's total**, and the bucket that is empty
contributes nothing to the ranking and costs nothing either. **SUM cannot tell the
difference between a text that is missing a stereotype and a text that has a
little of it.**

**Episode 12 called that property compensatory**, and book 7 is what it looks like
outside an invented example. Strength anywhere buys weakness anywhere else, so
four moderate stereotypes and one extreme one produce the same total, and **no
later step can pull them apart.** The number threw the difference away when it was
computed.

Book 22 is the demonstration. All four of its buckets are non-zero. **On the claim
being tested it is the better text**, because the claim is that the four occur
together and in book 22 they do. **Under v1 SUM ranked it below the dinner party;
under v2 SUM gets this pair right**, and the fix repaired one instance of a defect
it did not repair in general.

## The payoff

**Look at the MIN column.**

MIN takes the smallest of the four. For book 7 the smallest of 0.30, 0.00, 6.51
and 0.59 is **0.00**. For book 18, **0.00**. **Both were 0.00 under v1 too, and this
is the number the re-run could most easily have destroyed.**

Notice how the 6.51 gets treated. It is not penalised, not down-weighted, not
corrected. **It is never consulted**, because MIN stops at the weakest bucket. An
empty bucket anywhere sets the score to zero no matter what the rest of the text
is doing.

Book 22 scores 0.22. Small, above both, and the ordering is now the right way
round.

> **The conjunction requirement kills the false positive automatically**, with no
> patch, no exception, and nobody having to notice.

**The load-bearing clause is the last one.** Nobody wrote a rule about kings or
about hospitality scenes, and nobody read book 7 in advance. The metric was chosen
because of the shape of the claim, and the shape of the claim is what rejected the
text.

Then consider the alternative. An instrument that has to be told about book 7 will
also have to be told about the next book 7, **and no list exists anywhere of every
text that will fool you.** A special case only ever covers the failure you have
already met.

## The clinical anchor, and it is episode 12's, now with a patient in front of it

Episode 12 put N-of-M criteria against all-of criteria and left it as a trade.
**Book 7 is what the trade looks like when a real case arrives.**

Any-five-of-nine admits this patient. One florid feature at an extreme level, four
soft ones, threshold met, diagnosis recorded, **and the chart does not preserve
which route it took.** Everything downstream now treats that patient as equivalent
to somebody who met the criteria the ordinary way.

All-of refuses the same patient on one absent feature, and refuses without anybody
reviewing the case.

> That is the property worth having. **A rule that has to be applied by a person
> protects you only when the person is paying attention**, and book 7 arrived in a
> batch of twenty-four with nobody reading it.

## The character anchor

**A heist crew.** The job needs a safecracker, a driver, an inside man and a
lookout.

SUM is the producer counting talent. Three world-class safecrackers and no driver
looks like an outstanding crew on paper, and the total really is high. MIN is the
person who has run a job. It asks who is weakest on the team, and if there is
nobody in the car the score is zero and the rest of the crew is irrelevant.

**Nobody has to add a rule saying the driver matters.** It falls out of asking for
the minimum.

## And it is not a one-off

One rescued false positive is an anecdote, so this episode used to point at what
MIN did across the corpus. **Every Greek tragedy MIN ≥ 0.48, every control MIN ≤
0.32. A gap with nothing inside it.**

> **That partition does not exist on the fixed lexicon.** Re-scored, the 19-text
> corpus gives lowest tragedy **Prometheus 0.47** and four controls above it, Ovid
> *Metamorphoses* 5 at **1.57**. On the 76-text corpus tragedies span 0.44 to 3.29
> and non-tragedies 0.00 to **2.09**. **The ranges overlap.**

**The clean separation was lexicon v1**, the same superseded run as the old book 7
table, and `FINDINGS.md` said so in a line nobody acted on: §2's thresholds "no
longer apply."

> **Do not round this up.** MIN still rejected book 7 automatically. **What is
> gone is the evidence that it does the right thing in general**, which is what
> made it look like a validated metric rather than one lucky catch.

The older discount still stands. **Nothing was predicted.** Every text was labelled
before the metric ran, which is what episode 1's confirmation table warned about,
and **MIN was validated on 10,000-word tragedies only**. **Season 3 episode 3 is
where that does its damage.**

## The device: what a good instrument looks like when it works

**This is worth naming, because the series is mostly failures and the audience
should see what success looks like.**

| | |
|---|---|
| a metric chosen for **theoretical** reasons, before the data | episode 12 |
| a false positive appearing that would have wrecked the results | book 7 |
| the metric **rejecting it automatically**, with no special case | MIN = 0.00 |
| **nobody having to notice** | the correction needed no author |

The fourth row separates this from luck. The first three describe a narrow escape,
where somebody made a defensible choice, a trap appeared, and the choice happened
to cover it. **The fourth row is what makes it evidence about the method**,
because the correction did not require an author. It would have worked in a text
nobody read, on a run nobody watched, in a corpus a hundred times this size.

> **That is what it looks like when the reasoning was right.** Not a number that
> confirms you. **A number that catches an error you had not spotted yet.**

## What would count against this

1. **MIN being right here for the wrong reason.** Book 7 was rejected because its
   `crimes` bucket is empty, and `crimes` is the rarest bucket in the instrument
   at **0.95 hits per thousand words**, five times rarer than `violence`. A metric
   that zeroes out whenever the rarest bucket is empty will zero out **almost
   everything**, including the texts it is supposed to catch. On that reading MIN
   detected no false positive at all. It reflected a scarce word-list and got the
   right answer here by accident. **Season 3 episode 2 settles this, and not in
   MIN's favour.**
2. **The 0.48 / 0.32 separation being driven by length rather than genre.** The
   tragedies are of comparable length to each other and the controls are not.
   **Nobody has run MIN on texts matched for length**, which would separate the
   two explanations in an afternoon.
3. **One rescued case not being a validation, and it is not.** It is a single
   text, and it shows the metric can reject something, not that it rejects the
   right things in general.

## How to end the season

The instrument is finished. Written blind, frozen, order checkable, corpus
audited, tokens fixed, lexicon de-noised and tagged, metric chosen for the right
reason and validated against a false positive it caught by itself.

> **And nothing has been tested. Not one prediction has been run.**
> 
> **The reasoning that got here is correct.** Every decision in thirteen episodes
> was defensible and most of them were right.

Say that and let it sit, because the whole weight of the next season lands on it.
Thirteen episodes have produced an instrument nobody watching has been given a
reason to distrust.

**Then say the first line of Season 3:**

> **The pre-registered prediction failed, and the controls beat the persecution
> texts.**

## Questions

1. Book 7 is the best argument for MIN. **What is the best argument against MIN,
   and do you have it yet?**
2. MIN was validated on 10,000-word tragedies. **What has not been checked about
   it?**
3. Book 7 was rejected because a bucket was empty. **Name a second reason a bucket
   could be empty** that has nothing to do with the scene being peaceful.
4. **Write your prediction for Season 3 now.** Which texts score high, which low,
   and what fails first?
5. Name a time your own method caught an error **you had not noticed.** If you
   cannot, what does that tell you about the method?

---

[[S2E12 - Adding Up Versus All Four at Once|← Adding Up Versus All Four at Once]] · —
