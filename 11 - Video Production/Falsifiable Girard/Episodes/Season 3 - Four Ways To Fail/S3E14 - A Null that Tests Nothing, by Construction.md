---
season: 3
episode: 14
title: "A Null that Tests Nothing, by Construction"
words: 1301
minutes: 9.6
character_anchor: "A pub quiz scored on your worst round"
clinical_anchor: "The failure is in the design, and no amount of downstream statistics repairs it"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-3
---

> [!info] S3E14 · 1301 words · ~9.6 min · [[Season 3 - Four Ways To Fail — Index|season index]]
> **Generated from `Research/Season 3 — Four Ways To Fail.md`. Edits here are overwritten.**

# A Null that Tests Nothing, by Construction

[[S3E13 - Word Order Turns Out to Be Irrelevant|← Word Order Turns Out to Be Irrelevant]] · [[S3E15 - A Statistic Built on Counting to Two|A Statistic Built on Counting to Two →]]

---
## The stake

The first of four times this project answered "what does my null destroy"
wrongly. **A check that cannot fail prints reassurance**, and here you watch one
being taken apart by its own design.

## Collecting episode 12

Episode 12 gave you the two questions you ask of any null. What does it hold
constant, and what does it destroy. This episode is the first of four times this
project answered the second question wrongly.

## What the second null was for

Round 3 had two nulls, and they were asking different things.

The first, the shuffle, destroyed **position** and held the words constant. That
one was well built and episode 13 reported what it found.

The second was supposed to test **word identity**. The question is fair: maybe
any four word-lists of roughly the right commonness would converge on passages
the same way. Maybe there is nothing special about Girard's particular words.

So: build four random lexicons, matched to the Girard buckets on how many forms
they have and how common those forms are, and score them the same way.

## What came back

The random lexicons scored **higher** than Girard's.

For the *Bacchae*: the real instrument scored 2.0. The random lexicons averaged
**4.41.**

Not marginally higher. More than twice as high.

## Why, and it has nothing to do with Girard

Here is the mechanism, and it is worth going slowly because it is entirely
structural and it recurs.

The statistic is a **minimum** over four buckets inside a window. So a window
scores only as high as its weakest bucket.

Now think about what kind of word-set has a high minimum.

A set of words that is **spread evenly through a text** will have some presence
in nearly every window. Its minimum across the four is decent everywhere, because
nothing ever drops to zero.

A set of words that is **clumped** will be dense in a few places and absent
everywhere else. So in most windows at least one of the four is at zero, and the
minimum collapses.

Now: what does a random frequency-matched lexicon look like? You have drawn words
from all over the language. They are about a boat, a hillside, a colour, a
grandmother. **They have nothing to do with each other**, which means they appear
at fairly uniform rates throughout any text.

And what does Girard's lexicon look like? Four thematically coherent sets, which
by definition cluster where the theme is.

> **So the random sets win by construction.** A minimum rewards evenness, random
> frequency-matched words are even, and any thematically coherent lexicon is
> clumpy and loses.

## The device: keeps and destroys, for the null that failed

**Run episode 12's two questions on Null B** and the failure is visible before any
data arrives.

| | Null B |
|---|---|
| **keeps** | the number of word-forms, their corpus frequency |
| **destroys** | thematic coherence, and therefore clumpiness |
| **so it tests** | whether your lexicon is spread out |
| **what you wanted to test** | whether **these particular words** matter |

## And that is what makes it worthless rather than merely wrong

This is the point to say hard on camera.

Null B would produce this result for **any** four topical word-sets. A lexicon of
sailing terms. A lexicon of colours. A lexicon of legal vocabulary. Every single
one would lose to random words on a minimum statistic, for reasons that have
nothing to do with whether the topic is present in the text.

> **A test that returns the same answer regardless of the truth is not measuring
> anything.** It is Season 2 episode 1's confirmation table with the sign
> flipped: instead of never returning a negative, it can never return a positive.

**Which is the refrain, and this is the clearest instance in the project.** A
check that cannot fail prints reassurance, and the sign does not matter: an
instrument that always says yes and an instrument that always says no are the same
instrument, and neither of them is looking at anything.

The project's own results file records it in four words: **"my error, in the
pre-registration."**

## The clinical anchor

A control group matched on a variable that lies on the causal pathway.

Nobody sabotaged anything. The matching was careful and well intentioned. And by
matching on the thing the exposure works through, you have guaranteed no
difference will appear, and the study will report a null that means nothing at all.

**The failure is in the design, and no amount of downstream statistics repairs
it**, because the data that would answer the question was never generated.

## The character anchor

**A pub quiz scored on your worst round.**

Four rounds: history, sport, music, film. The rule is that your team's score is
whatever you got in the round you did worst in.

Now enter two teams. **Four historians**, who are magnificent on history and score
zero on the other three. **And four strangers pulled off the street**, none of whom
knows much about anything, who each pick up two or three in every round.

The strangers win, and they win by a distance, and they will win **every single
time you run it.**

Nothing about that result is a discovery about history. **It is a discovery about
the scoring rule**, which rewards knowing a little about everything and punishes
knowing a lot about one thing. The answer was fixed the moment somebody decided to
score the worst round.

**Girard's lexicon is the historians.** Four thematically coherent sets, each
brilliant where its theme is and absent everywhere else. **The random
frequency-matched lexicon is the strangers**, drawn from all over the language,
never absent anywhere, never zero in any window.

## The pattern, and start counting on screen

This is the **first of four**, and keeping a tally across the series is worth
doing because the pattern is the most transferable thing here.

Round 3's Null B favours evenly spread sets over clumpy ones by construction.

The other three arrive in Season 4, and each one is the same mistake in a new
costume: a null that destroys something the statistic depends on, or preserves
something it should have destroyed.

> **Every one is a mismatch between what the null holds constant and what the
> statistic is sensitive to.** Four separate rounds, four separate designs, four
> separate people-hours of care, and the same question answered wrongly each
> time.

## Could it have been caught in advance

Yes, and that is the uncomfortable part. You do not need any data to see this.

You need only to ask: what does a minimum reward, and are my random draws going
to have more of that than my real lexicon does. Both halves are answerable at the
whiteboard, before a single line of code runs.

> **Nothing about this failure required the experiment**, and the experiment was
> run anyway, and it produced a number that was then reported and had to be
> retracted.

## What would count against this episode

1. **Null B being salvageable.** If the minimum were replaced with something that
   does not reward evenness, the same random-lexicon comparison would be a fair
   test of word identity. **That is a real repair and nobody made it**, so the
   question round 3 asked about word identity is still unanswered rather than
   answered negatively.
2. **The reasoning here being hindsight.** It is not, and that is the
   uncomfortable part: **the argument needs no data at all**, only the question of
   what a minimum rewards, and it was available at the whiteboard.
3. **Thematic lexicons not actually being clumpier than random ones.** It is
   asserted here and it is measurable. **Nobody measured it**, so the mechanism is
   argued rather than demonstrated.

## Handing off

Round 3 produced one flat result from a good null and one worthless result from a
bad one.

**Episode 15 asks the question that decides what the flat result means**, which is
whether the round could have detected an effect that was really there.

## Questions

1. Before Season 4: predict what the other three null failures look like.
2. Could Null B have been caught before running? By what specific check?
3. Is there such a thing as a null design that is safe by construction, or is
   every one a judgement about the subject?

---

[[S3E13 - Word Order Turns Out to Be Irrelevant|← Word Order Turns Out to Be Irrelevant]] · [[S3E15 - A Statistic Built on Counting to Two|A Statistic Built on Counting to Two →]]
