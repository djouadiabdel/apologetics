---
season: 2
episode: 11
title: "The First Number, and What it Throws Away"
words: 1241
minutes: 9.2
character_anchor: ""
clinical_anchor: "Prevalence"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-2
---

> [!info] S2E11 · 1241 words · ~9.2 min · [[Season 2 - Building Something That Can Say No — Index|season index]]
> **Generated from `Research/Season 2 — Building Something That Can Say No.md`. Edits here are overwritten.**

# The First Number, and What it Throws Away

[[S2E10 - Lexicon Craft III Tagging So You Can Undo Yourself|← Lexicon Craft III: Tagging So You Can Undo Yourself]] · [[S2E12 - Adding Up Versus All Four at Once|Adding Up Versus All Four at Once →]]

---
## The stake

The first real number of the project arrives, and with it the first honest loss:
**counting words throws away their order**, and what that costs is not an
abstraction. You will feel what a measurement gives up in the moment it is made.

## Collecting episode 10

The corpus is right, the tokens are right, the lexicon is written, debugged,
de-noised and tagged.

**Now you count. And the counting has one property that costs the project two
entire seasons.**

## The metric

$$ r(text) = 1000 × hits / total words $$

Hits per thousand words. That is the whole thing.

And the denominator is not decoration. A raw count is worthless across texts of
different lengths, because a long text contains more of everything, including
whatever you are looking for. Dividing by length is the minimum required to make
two texts comparable at all, and every field that counts things arrived at the
same fix independently.

## The clinical anchor, exact

**Prevalence.** Cases divided by population.

You already know why the denominator matters and why raw counts mislead: **a
bigger hospital has more infections and is not dirtier.** Same idea, no
translation needed.

**And the character version: a batting average.** Everybody accepts instantly that
you divide by opportunity, and nobody has ever needed the concept explained.

So the rate is the right instinct, correctly applied, and this episode is not
about a mistake. **It is about what the correct instinct costs.**

## The device: shuffle the book

**Do this on camera and make it physical.**

Take the *Bacchae*. Seventeen thousand words. Cut it into individual words. Put
them in a bag. Shake the bag. Pour them out in whatever order they come.

**Now score it.**

> **The number is identical. To the last decimal place.**

Not close. Not approximately. **Identical**, and it is worth being clear that this
is not a limitation of the implementation, because it follows from the arithmetic
with no room for anything else. The numerator counts hits, and shuffling does not
create or destroy a word. The denominator counts words, and shuffling does not
create or destroy those either. **Both terms are functions of which words are
present and of nothing else.**

The rate cannot tell the difference between Euripides and a bag of the same words.

## Why that single fact matters more than anything else in this season

**Write it on the board and leave it there for two seasons:**

> **A rate treats a text as a bag of words.** So it can never test any claim about
> **where** something happens, **when** it happens, or **what it happens near.**

Take a moment on what is inside "order," because it is easy to hear as a small
thing. Order is adjacency, sequence, scene, and episode. It is what happens next,
and what happens to whom, and what one passage does to the passage after it.
**Order is the whole of narrative**, and a rate discards all of it in a single
division.

And now recall what the theory actually claims. **Season 1 episode 10**: the four
stereotypes converge **on one passage**, because one event produced all four.

> **Girard's claim is about a moment. A rate cannot represent a moment.** It
> cannot represent anything happening anywhere.

**That mismatch is the cause of every major failure in Seasons 3 and 4.** Not a
bug, not a bad word-list, not too small a corpus. **The instrument and the claim
are about different kinds of thing**, and it takes eight rounds and four
instruments to fully absorb it.

Say the consequence out loud, because it is the part people resist. **No amount of
additional data repairs this.** A hundred more texts, a cleaner corpus, a better
lexicon, a more sophisticated test: every one of those improves the precision of a
quantity that does not contain the claim. **You can measure a bag of words as
accurately as you like and still never have measured a moment.**

## The second thing it discards, which is subtler

**A rate rewards density of event.** A text where every word is plot carries more
hits per word than a text with description and lyric in it, and the difference has
nothing to do with persecution. It is a fact about how the text was written.

Measured later: mythography runs **28.65 neutral event-words per thousand** against
21 to 23 for everything else. **The densest narrative prose in the corpus**, and
the reason is structural rather than accidental. Apollodorus is a handbook. He
records what happened and drops everything a poet would put around it, so a far
higher proportion of his words are doing narrative work.

The problem is that the denominator counts all words equally while the numerator
only ever fires on event vocabulary. **Strip the lyric out of a text and its rate
rises without a single new event being described.**

And in Season 3 episode 7 mythography **ties tragedy**, which nobody predicted, and
which Season 1 episode 17 offered two readings of.

## And what a rate is genuinely good for, because this episode is not an attack

Say this before the objections, or the audience will conclude the metric is
worthless and that is not the finding.

**A rate is the correct instrument for any claim about how much.** How much
persecution vocabulary does this genre carry. Does mythography carry more than
tragedy. Is this text unusual for its kind. **Every one of those is answerable and
worth answering**, and the rate answers them with a precision no reading of the
texts could match.

It also has a property nothing else in this project has: **it is completely
transparent.** Anybody can recompute it with a word-list and a calculator, there
are no free parameters to tune, and two people scoring the same text will get the
same number to the last decimal.

> **The problem is not that the rate is a bad measurement. It is that it is a good
> measurement of the wrong quantity**, and those two failures look identical from
> inside the spreadsheet.

Which is why the fix in Season 3 is not a better rate. It is a different question,
asked with a window and a peak, and it takes two failed rounds to get there.

## What would count against this

1. **Position not mattering.** If the stereotypes really are diffuse properties of
   whole texts rather than features of episodes, the rate is the correct
   instrument and Seasons 3 and 4 are chasing something that was never there.
   **That is a live possibility and nobody in the project entertains it**, which
   is a bad sign in itself. The reading that would make eight rounds of work
   unnecessary is the one nobody argued for.
2. **A better denominator existing.** Divide by event-words instead of total
   words? Season 3 episode 8 computes exactly that and **it flips a result**,
   which is why it cannot be claimed.
3. **This episode overstating the loss.** A rate is blind to order, and it does
   not follow that order carries the signal. **A text drenched in all four
   stereotypes at every point would be found by a rate and found correctly.** The
   argument here is that the rate cannot test the conjunction claim, not that it
   tests nothing.

## Handing off

You have four numbers per text. **Episode 12 asks how to combine them**, and the
two options encode two different theories.

## Questions

1. **Name three things a rate per thousand throws away.** You have two.
2. Shuffling the book does not change the number. **What class of claim can that
   number never test?** State it precisely.
3. **What would you divide by instead of total words?** What breaks?
4. Is it possible the stereotypes really are diffuse? **What would show that?**

---

[[S2E10 - Lexicon Craft III Tagging So You Can Undo Yourself|← Lexicon Craft III: Tagging So You Can Undo Yourself]] · [[S2E12 - Adding Up Versus All Four at Once|Adding Up Versus All Four at Once →]]
