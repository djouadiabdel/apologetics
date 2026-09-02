---
season: 4
episode: 2
title: "The Words Left Out on Purpose"
words: 1137
minutes: 8.4
character_anchor: "Ace Attorney, and the objection that gets overruled"
clinical_anchor: "Deciding your inclusion criteria before you see who walks through the door"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-4
---

> [!info] S4E02 · 1137 words · ~8.4 min · [[Season 4 - The Repairs — Index|season index]]
> **Generated from `Research/Season 4 — The Repairs.md`. Edits here are overwritten.**

# The Words Left Out on Purpose

[[S4E01 - The One Test that Could Separate Them|← The One Test that Could Separate Them]] · [[S4E03 - A Different English|A Different English →]]

---
## The stake

The fix starts with a fifth bucket and words left out on purpose. **Deliberate
omission as instrument design**, and why what you exclude is a claim you are
making.

## Collecting episode 1

The four buckets detect persecution and cannot discriminate, because Girard
predicts the Passion scores high on all four. The differentia he actually names
is **dissent**, and a fifth bucket is the first instrument in the project with a
chance of telling the two apart.

## The architecture, which is deliberately boring

`dissent.py`. Same shape as the four buckets in `lexicon.py`: explicit surface
forms, no stemming, phrases matched against the joined token stream. Metric is
**hits per 1000 words**, identical to everything before it.

**Nothing new is invented here**, and that is a decision. A new construct
measured with a new method gives you two things to blame when it fails.

Spell that out, because it is a rule worth taking away from the whole series.

Suppose the round fails and you changed both the construct and the metric. Two
explanations are now available, and **both of them are true statements about your
own design**, so you can pick. Suppose instead you changed only the construct. A
failure is now attributable, because the metric has a track record across three
previous rounds on the same corpus.

> **Hold one thing constant so a failure has somewhere to land.** That is the
> entire reason a boring architecture is the right architecture here, and it is
> why round 4 does not also switch to a smarter statistic while it has the
> file open.

## The split that turns out to matter more than the words

Two provenance tags, and this is the load-bearing choice in the whole round.

| tag | sourced to | concepts |
|---|---|---|
| `core` | page 3, the questioning of guilt | innocent, guiltless, no fault, done nothing, unjust, false witness, protest, object, denounce, defend, plead |
| `unan` | page 121, the broken unanimity | division, dissent, some said, others said, withheld consent, spare him, minority |

Every result is reported twice, with and without `unan`.

**Read the two lists again and notice they are not the same kind of thing.**
`core` is the vocabulary of *saying the victim did not do it*. `unan` is the
vocabulary of *the crowd not being one thing*. Girard's sentence contains both,
which is why both are here.

> **Fix this in your mind now, because it decides the season.** `core` states
> Girard's actual claim. `unan` states a structural fact about crowd speech.
> **If they come apart, everything depends on which half is doing the work.**

Here is the difference in one pair of sentences, both of which could appear in a
text.

| | a sentence that fires it | what it commits the speaker to |
|---|---|---|
| `core` | "this man has done nothing wrong" | **a claim about the victim** |
| `unan` | "and there was a division among them" | **a fact about the crowd** |

The first is somebody taking a side. The second is a narrator reporting that the
room was not of one mind, **and it can be true of a crowd arguing about anything
at all.**

Girard's page 3 sentence contains both because for him they are the same event
seen from two angles: the dissenting few *are* the broken unanimity. **The
question this season answers, without ever meaning to, is whether they stay
together when you measure them.**

## The device: five words that were kept out, and what each one cost

| excluded | why | what including it would have bought |
|---|---|---|
| `have mercy` | a healing petition in the Gospels, not dissent | a large Gospel-only boost |
| `rebuke` | used of demons and wind, not a collective verdict | frequent in all four Gospels |
| bare `witness` | Johannine testimony, not objection | John's single most repeated word |
| `condemn` | the crowd's act, not the objection to it | common across the tier |
| bare `refuse` | too generic to mean anything | scattered everywhere |

**Every one of those exclusions makes the hypothesis harder to confirm.** Three
of them are frequent Gospel words that would have inflated exactly the tier the
prediction needs to win.

That is the shape you want and it is rare. A lexicon written to pass would keep
`have mercy` and write a justification for it afterwards, and **the
justification would not be false.** "Mercy is a plea on behalf of the afflicted"
is a defensible sentence. It is also how you would build an instrument that
cannot fail.

**And there is no way to tell the two apart by reading the justification.** That
is the uncomfortable part. Both versions of this lexicon come with reasons, both
sets of reasons are literate, and the only difference is the order in which the
word and the reason were written.

> Which is why the exclusions are the evidence rather than the inclusions.
> **Anybody can justify what they kept. The question is what they threw away
> while it was still expensive to throw away**, and `have mercy` in the Gospels
> was expensive.

Season 2 episode 2 made the same argument from the other side, with the nine dead
words that fire zero times. **Dead words prove the list was written before the
texts. Costly exclusions prove it was written before the result.** Two different
receipts for two different kinds of honesty.

## The clinical anchor

**Deciding your inclusion criteria before you see who walks through the door.**

Every exclusion in a trial protocol narrows your population and costs you power.
You write them anyway, in advance, because a criterion added after recruitment is
not a criterion. It is a description of who you wanted to keep.

**And the tell is always the same.** Criteria written in advance tend to hurt
you. Criteria written afterwards tend to help.

## The character anchor

**Ace Attorney, and the objection that gets overruled.**

The game is built on one verb. You object, and most of the time the judge
overrules you and the trial carries on, and the objection is still the thing that
happened. It is in the record. Somebody said no out loud in a room organised
around agreement.

**Now picture a courtroom game with no objection button.** Same evidence, same
witnesses, same verdict, and nothing to press. That is the myth tier as Girard
describes it, and the fifth bucket is a button-press counter.

And a button-press counter is a genuinely good instrument for this, because it
does not require you to decide who was right. **It does not read the case. It
counts interruptions**, which is exactly the level of ambition Girard's sentence
licenses. He does not say the Gospel crowd was correct. He says somebody spoke.

> **And here is the flaw in the anchor, which is the flaw in the round.**
> Counting button presses tells you an objection was raised. **It does not tell
> you what was being objected to**, and episode 16 is that sentence collecting
> its debt.

## What would count against this

1. **The tags being motivated rather than derived.** The pre-registration says
   so itself, in advance, and episode 4 reads the disclosure.
2. **Exclusions being easy to praise and impossible to audit.** You are shown
   five words that were kept out. **You are not shown the words that were never
   considered**, and there is no procedure anywhere in this project for finding
   those.
3. **"No stemming" cutting both ways.** It keeps the matching honest and it means
   `protested` and `protesting` are separate decisions, each one a chance to
   include the form that helps.

## Handing off

**Episode 3 picks the texts**, and the problem is one this project has hit
before in a smaller form: the Gospels are in a different English from everything
they are being compared against.

## Questions

1. Compare your three words from episode 1 against the two tag lists. Which tag
   did you write from, and did you notice you were choosing?
2. `have mercy` was excluded for a good reason. **Construct the good reason for
   including it**, then say how you would tell the two apart in advance.
3. Is there any way to audit words that were never considered? If there is not,
   what does that do to every lexicon in this project?

---

[[S4E01 - The One Test that Could Separate Them|← The One Test that Could Separate Them]] · [[S4E03 - A Different English|A Different English →]]
