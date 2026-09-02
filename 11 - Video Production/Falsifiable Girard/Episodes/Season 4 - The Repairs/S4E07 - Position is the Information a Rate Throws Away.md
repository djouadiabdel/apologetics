---
season: 4
episode: 7
title: "Position is the Information a Rate Throws Away"
words: 962
minutes: 7.1
character_anchor: "A security camera that logs how many times the door opened, and not when"
clinical_anchor: "An Apgar score without the timestamp"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-4
---

> [!info] S4E07 · 962 words · ~7.1 min · [[Season 4 - The Repairs — Index|season index]]
> **Generated from `Research/Season 4 — The Repairs.md`. Edits here are overwritten.**

# Position is the Information a Rate Throws Away

[[S4E06 - The Null that Tested the Wrong Half|← The Null that Tested the Wrong Half]] · [[S4E08 - Seven Counterexamples, Read Instead of Explained Away|Seven Counterexamples, Read Instead of Explained Away →]]

---
## The stake

The effect lives entirely in phrases, and a rate cannot see phrases. **Position
is information, and averaging is where it goes to die.** You will not read an
average the same way after this.

## Collecting episode 6

D4 failed because the null tested the 45 unigrams and ignored all 53 phrases,
and the unigram half runs backwards. The effect lives entirely in the phrases,
which have never been tested against anything.

That is the *proximate* cause. This episode is the other one, and it is the same
sentence Season 3 ended on.

## What Girard actually claims, stated as a location

Read the claim again with an eye on where things are, not how many there are.

> At the moment of collective violence, a voice separates from the crowd.

**At the moment.** Not somewhere in the document. The dissent has to be *near
the killing*, because a dissent that arrives in a different chapter about a
different subject is not breaking anybody's unanimity.

## The device: John's three division hits, with their addresses

| hit | chapter and verse | what is being disputed |
|---|---|---|
| `division` | 7:43 | who Jesus is |
| `division` | 9:16 | whether he keeps the sabbath |
| `division` | 10:19 | whether he is mad |

**Not one of them is near a killing.** They are theological arguments in the
middle of the book, and they are the highest-scoring hits in the highest-scoring
text in the whole corpus.

Read what those three verses actually are. A crowd arguing about a man's
identity. A crowd arguing about sabbath observance. A crowd arguing about whether
he is out of his mind. **All three are disagreements, all three genuinely break a
unanimity, and none of them is anybody objecting to a killing.**

So the instrument is not malfunctioning. It found division, and division is what
it was told to find. **The claim it was built to test was about division at a
particular moment**, and the word "moment" never made it into the code.

A whole-text rate counts three. It cannot count *where*, because **position is
precisely the information a rate discards.** That is not a bug in this
implementation. It is what a rate is.

Work the definition, because this is the transferable idea. A rate is hits
divided by words. **Both of those numbers survive any rearrangement of the
text.** Cut John into sentences, shuffle them into a random order, glue them back
together, and the dissent rate is identical to four decimal places.

> **Any statistic that survives shuffling cannot be measuring structure**, and
> narrative structure is the only thing Girard's claim is about. That is a test
> you can run on a proposed metric in your head, before writing any code, and it
> takes about five seconds.

## The same failure, one level up from round 3

| round | what it measured | why it could not test the claim |
|---|---|---|
| 3 | `peak_min`, invariant to word order | shuffle the text, same number |
| **4** | **dissent rate per 1000 words** | **shuffle the text, same number** |

> **Two failed rounds, one cause.** Whole-text rates cannot test claims about
> narrative structure. Round 3 found it for the four buckets. Round 4 finds it
> for the fifth, having built an entirely new construct in between and not
> noticed that the metric was the thing that failed last time.

**That is the finding of round 4 and it is worth more than a pass would have
been**, and it is also slightly embarrassing, which is why it is worth saying
out loud rather than in a footnote.

The embarrassment is specific and worth naming exactly. Round 3 did not fail
mysteriously. It failed for a documented reason, written up in `RESULTS-3.md`, in
July, in a file the same person wrote. **The diagnosis was correct, recorded, and
then not carried forward into the design of the next round.**

> That is a different failure from getting something wrong. **It is knowing
> something and not applying it**, which no amount of rigour inside a round can
> catch, because the round is internally impeccable. Rounds 7 and 8 are what it
> looks like when the lesson finally crosses the gap.

## The character anchor

**A security camera that logs how many times the door opened, and not when.**

Forty-three openings on Tuesday. That is a real measurement, taken by a real
device, and it is the same number whether the openings were spread across the
working day or all forty-three happened in the ninety seconds after the safe was
emptied.

**And the only question anybody has is which of those two Tuesdays it was.**

> Nobody would call that camera broken. It counts correctly. It was **installed
> to answer a question it structurally cannot answer**, and every improvement to
> its counting accuracy leaves the question exactly where it was.

## The clinical anchor

**An Apgar score without the timestamp.**

Seven is reassuring at one minute and frightening at five. It is the same seven.
The number carries almost no information until you know **when it was taken**,
and a chart recording a bare seven has recorded something that looks like data
and cannot be acted on.

## What would count against this

1. **Position being measurable and this being fixable.** It is, and rounds 7 and
   8 do it. **The objection is that they should have been round 4.** The
   information that a rate cannot locate an episode was already in
   `RESULTS-3.md`, in writing, in July.
2. **The three division hits being cherry-picked.** They are the three in the
   highest-scoring text. **Nobody has read the other 109 Gospel hits by
   location**, and the argument would be much stronger if somebody had.
3. **Girard not requiring co-location.** Season 1 episode 11 showed that his
   written rule is looser than the project's. **If dissent anywhere in the
   document counts, round 4 passed and this episode is wrong.** That reading is
   available and it is not obviously worse.

## Handing off

**Episode 8 reads the seven myth texts that beat the Gospels**, by name, because
the pre-registration committed to reading them rather than explaining them away.

## Questions

1. Rewrite Girard's claim as a sentence about **distance**. How would you measure
   the thing you just wrote?
2. If position matters, what is the right unit? Words, sentences, scenes, or
   something else? Each gives a different answer.
3. **The objection in item 3 is serious.** Which reading of Girard makes the
   project's whole approach right, and which makes it an invention? Commit.

---

[[S4E06 - The Null that Tested the Wrong Half|← The Null that Tested the Wrong Half]] · [[S4E08 - Seven Counterexamples, Read Instead of Explained Away|Seven Counterexamples, Read Instead of Explained Away →]]
