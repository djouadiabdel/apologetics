---
season: 2
episode: 4
title: "Which Texts, and Why Those"
words: 1533
minutes: 11.4
character_anchor: "Truman"
clinical_anchor: "Eligibility criteria against the patients who actually walk through your door"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-2
---

> [!info] S2E04 · 1533 words · ~11.4 min · [[Season 2 - Building Something That Can Say No — Index|season index]]
> **Generated from `Research/Season 2 — Building Something That Can Say No.md`. Edits here are overwritten.**

# Which Texts, and Why Those

[[S2E03 - What a Timestamp Actually Proves|← What a Timestamp Actually Proves]] · [[S2E05 - Corpus Craft II Is the Text the Text|Corpus Craft II: Is the Text the Text →]]

---
## The stake

Before you count anything, somebody chose what counts. **Almost nobody who
analyses text ever states their selection rule out loud**, and this episode is
the stating of it. You will leave with the questions to ask of any corpus,
including ones you build yourself.

## Collecting episode 3

Episodes 2 and 3 secured **the instrument**: written blind, frozen, order
checkable.

**None of that helps if you point it at the wrong texts**, and almost nobody
asks how the texts were chosen. This episode is that question.

## The device: three circles, and the gap between them

Draw these on camera and keep them up.

```
   POPULATION      everything you want your claim to be about
   ┌──────────────────────────────────────────────┐
   │   SAMPLING FRAME    the list you could        │
   │   ┌──────────────────────────┐  actually      │
   │   │   SAMPLE                 │  draw from     │
   │   │   what you scored        │                │
   │   └──────────────────────────┘                │
   └──────────────────────────────────────────────┘
```

| | in this project |
|---|---|
| **population** | all Greek and Roman narrative literature |
| **sampling frame** | what two websites and Project Gutenberg happen to hold, in English translation |
| **sample** | 76 texts, later 98 |

> **Every claim you make is about the population. Every number you have is about
> the sample.** The frame is the gap between them, **and it is almost never
> examined.**

Sampling gets discussed constantly and it is nearly always the inner boundary
being discussed: was the sample big enough, was it drawn at random, is it
representative of the frame. **All of that concerns the smaller circle.** The
outer boundary, between the frame and the population, is the one that decides
whether the question was ever answerable, and it does not appear in the
statistics at all, because **no procedure inside the frame can detect the shape of
the frame.**

## The clinical anchor, exact

**Eligibility criteria against the patients who actually walk through your door.**

The paper says "adults with heart failure." **The population** is adults with
heart failure. **The frame** is adults with heart failure who attend a tertiary
centre, speak the language, and consent. **The sample** is who enrolled.

Everyone knows the drug behaves differently outside the frame. **The abstract says
none of this.** And the reason it does not is worth naming without cynicism: the
frame is not a decision anybody made. It is the accumulated residue of where the
building is, who can get to it, who was referred, and who said yes. **Nobody chose
it, so nobody feels responsible for reporting it.**

## The character anchor

**Truman.**

Everything he believes about the world is correct about Seahaven. He is not
foolish, he is not incurious, and his reasoning from evidence is sound. **The
frame was built around him and it has no visible edge**, so every generalisation
he forms is confirmed by everything he can reach.

**Notice what would not have helped him.** More observations, better records, a
larger notebook, more rigour. All of it takes place inside the frame and all of it
comes back confirming. The only move that works is the one that ends the show,
which is sailing at the wall to find out where it is.

**A corpus is Seahaven.** Every statistic computed on it is honest, and it
describes what somebody digitised.

## What this project's frame actually was, biases stated out loud

| the frame is biased toward | consequence |
|---|---|
| texts old enough to be out of copyright | translations are 1900 to 1921, not modern |
| texts somebody bothered to digitise | the canonical and the famous |
| texts with an English translation at all | fragments and minor works vanish |
| **whatever one website's page structure let a script fetch** | **this produced two silent bugs** |

> **Dwell on the last row.** The sampling frame was partly determined by
> **HTML.** Not by scholarship. Not by a research design. **By how a website laid
> out its pages, and by whether a script followed a link.**

## Who is actually in this corpus, since the names run through six seasons

Before the numbers, put the cast on screen once. **These names recur in every
season from here** and nothing later stops to say who they are.

| name | when | what it is |
|---|---|---|
| **Homer** | c. 8th c. BC | the *Iliad* and the *Odyssey*. Greek epic verse |
| **Euripides**, Sophocles, Aeschylus | 5th c. BC | Athenian tragedy, written for the stage |
| **Seneca** | c. AD 50 | Roman tragedy in Latin, on the same Greek stories |
| **Ovid** | AD 8 | the *Metamorphoses*, a Latin verse poem retelling myth as a chain of transformations |
| **Apollodorus** | 1st-2nd c. AD | the *Bibliotheca*, a bare prose catalogue of the whole of Greek myth |
| **Hyginus** | c. 2nd c. AD | the *Fabulae*, the same idea as Apollodorus and even more compressed |
| **Diodorus Siculus** | 1st c. BC | a universal history whose early books retell myth as history |
| **Statius**, Quintus Smyrnaeus, Apollonius | 1st-4th c. AD | later epic, filling gaps the earlier poems left |

Two distinctions inside that list matter for everything downstream.

**Verse against prose.** Homer, Euripides and Ovid are poets writing to be
performed or read for pleasure, with description, speeches and imagery. Apollodorus
and Hyginus are writing reference works, with none of that.

**That split is the one the project calls epic against mythography**, and it is
about to become one of the most load-bearing facts in the study.

Here is why. The instrument counts hits per thousand words. So it treats a page of
Hyginus and a page of Homer as the same kind of object. **They are not remotely
the same kind of object.** One is a summary with the description stripped out. The
other is a poem, and most of its words are description.

## The number that proves the frame is not neutral

The corpus contains **36 epic texts** and **8 mythography texts.**

That is not a statement about Greek literature. **It is a statement about how the
*Iliad* and the *Odyssey* were split into books by whoever digitised them, and how
Apollodorus was not.**

Follow the mechanism, because it is duller and worse than a bias. Two epics
arrived as one file per book, so two works became dozens of rows. One mythographer
arrived as a handful of files, so a comparably large body of material became a
handful of rows. **Nobody weighted anything. Nobody decided epic deserved more
say.** A genre's influence over every average in the project was set by an
upload convention.

> **A genre's weight in the corpus is an artifact of file-splitting**, and every
> genre mean in Season 3 inherits it. When mythography ties tragedy in Season 3
> episode 7, remember that mythography is eight files and epic is thirty-six for
> reasons that have nothing to do with antiquity.

And note which direction the exposure runs. **The instrument's precision is
unaffected**, so nothing about this shows up as noise or as a wide interval. The
numbers stay just as tight and are computed over a differently shaped world.

## The number that has four values, and this one is checkable live

Here is something the project never printed, and it is the best exercise in this
episode because the audience can verify it while watching.

**Ask how many texts are in the corpus.** The repository answers four different
ways, and three of the four are in the same results file.

| figure | where it appears |
|---|---|
| **76** | every file in `corpus2/`, and every row in the results table |
| **73** | never stated, and it is the one that is derivable |
| 71 | the pre-registration and the results file, called "scoreable" |
| 72 | the same results file, for the *Bacchae*'s rank and the saturation count |

**Now derive the 73.** The pre-registration declared a minimum text length of 800
words. Three texts in the table fall under it, at 613, 689 and 777 words. Take
them out of the 76 and you get **73**, exactly, and that is the number of texts
that the project's own declared rule permits.

> **So the figure the rule produces is the one figure nobody ever wrote down**,
> and two other numbers are used instead, in the same document, without either
> being reconciled to it.

Be careful about what that does and does not show. **Nothing here is a
falsified result.** Nobody has been caught. The gap between 71 and 73 is two
texts and nobody knows which two, and the effect of any of this on the published
findings is almost certainly nothing.

**What it shows is that the sample was never counted.** The corpus was assembled,
a rule was written about it, and the rule and the pile were never once put next to
each other. Which is the identical failure to the missing integrity check from
episode 5, at the level of the sample instead of the file, and it is why the rule
in episode 7 has to be mechanical rather than remembered.

## The one thing done right, and it is worth the episode

The control group for one study was taken from **Project Gutenberg's own "Top 100
last 30 days" list**, applied mechanically **in the order the list gives them.**

The rule was fixed in advance: single-author prose fiction over 40,000 words,
nothing by an author already in the test set, no anthologies, no plays, no poetry.

> **"The ordering is not mine."** That sentence is the whole design. A list
> generated by strangers downloading books, applied in its own order, **cannot be
> shaped by what I wanted to find.**

Both halves of that are load-bearing and the second is the one people drop.
Choosing an external list is easy. **Taking it in its own order is what removes
the discretion**, because a list you are allowed to walk down and pick from is
your list again, with a citation attached. The rule fixed in advance does the same
job for the exclusions: it decides what counts as eligible before anybody knows
which books are affected.

Compare that with choosing forty myths yourself, which is Season 1 episode 14's
objection 1, and which is the charge this entire project exists to answer.

## What would count against this

1. **The genre imbalance changing the results.** If reweighting epic to eight
   files moved the genre means, every Season 3 conclusion is about file-splitting.
   **Nobody has ever run that check.**
2. **The four corpus sizes having an innocent explanation each.** Likely, and it
   would not help. **A figure that needs an explanation per usage is not a figure
   the reader can check**, and the point of the episode is checkability rather than
   correctness.
2. **The translation window mattering.** Everything is 1900 to 1921 English.
   Season 3 episode 5 tests this once, on one paired play, and never again.
3. **The frame excluding the texts that would falsify.** If the mechanism shows up
   mainly in material nobody digitised, the corpus cannot see it, and no amount of
   statistics repairs that.

## Handing off

You have chosen the texts. **Episode 5 asks whether the text on your disk is the
text you think it is**, and the answer, twice, was no.

## Questions

1. **Write your own frame for "Greek literature."** What does it exclude, and does
   the exclusion favour any conclusion?
2. Epic is 36 of 76 texts because of file-splitting. **How would you fix that
   without choosing an answer?**
3. An externally generated list applied in its own order. **What is the strongest
   objection to that as a control?**
4. Which of the three circles do you think is doing the most damage here?

---

[[S2E03 - What a Timestamp Actually Proves|← What a Timestamp Actually Proves]] · [[S2E05 - Corpus Craft II Is the Text the Text|Corpus Craft II: Is the Text the Text →]]
