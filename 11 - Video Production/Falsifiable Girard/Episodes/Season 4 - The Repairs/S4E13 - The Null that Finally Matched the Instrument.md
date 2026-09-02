---
season: 4
episode: 13
title: "The Null that Finally Matched the Instrument"
words: 1122
minutes: 8.3
character_anchor: "A control group for a card trick"
clinical_anchor: "Matching controls on the variable your outcome actually depends on"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-4
---

> [!info] S4E13 · 1122 words · ~8.3 min · [[Season 4 - The Repairs — Index|season index]]
> **Generated from `Research/Season 4 — The Repairs.md`. Edits here are overwritten.**

# The Null that Finally Matched the Instrument

[[S4E12 - Three Broken Nulls, One Mistake|← Three Broken Nulls, One Mistake]] · [[S4E14 - Two Translations, 290 Years Apart|Two Translations, 290 Years Apart →]]

---
## The stake

The first null built by filling in the three-row table. **When the null matches
the instrument phrase for phrase, the result finally means what it says**, and
you get to watch the difference matching makes.

## Collecting episode 12

Three broken nulls, one mistake, and a three-row table that would have caught all
of them. Round 6 is the first null in the project built by filling that table in
first.

## What the statistic depends on

The effect lives in **53 phrases**. So the null must destroy the phrases and keep
everything else, and "destroy" here means one thing precisely: **replace each
phrase with a phrase of the same shape and the same rarity that has no
dissent meaning.**

Not a word. Not a phrase matched on its first token. **A real n-gram, of the same
word length, at the same corpus frequency.**

Work through why each of those three conditions is there, because each one blocks
a specific way of cheating yourself.

**Same word length**, because a three-word phrase has fewer chances to match than
a one-word token, purely as arithmetic. Swap `let him go` for a single word and
the null gets easier to beat for reasons that have nothing to do with dissent.

**Same frequency**, because rare things cluster. A phrase occurring three times
in a corpus will, by chance, sometimes land twice in the same book. Replace it
with something common and that clustering disappears, which is round 5's 113×
failure exactly.

**A real n-gram**, rather than a random string of words, because the replacement
has to be the kind of thing that actually occurs in this English. **Otherwise you
have destroyed the effect and the grammar at the same time.**

**An n-gram is just a run of n words that actually sit next to each other in a
text.** Two words is a **bigram**, three is a **trigram**. In "he found no fault
in him", `no fault` and `found no` are bigrams, and `found no fault` is a
trigram. Nothing more technical than that.

So the inventory is built by sliding a two-word window and then a three-word
window across the whole corpus and writing down what you see. **378,412 distinct
bigrams and 808,967 distinct trigrams**, counted as *types* rather than
occurrences, which is why the trigram number is larger: there are more ways to
arrange three words than two.

> That inventory is the thing that makes the round-6 null possible at all. **You
> cannot swap `let him go` for a comparable phrase unless you have a list of
> every comparable phrase in the language you are working in**, and the corpus
> is the only place that list can honestly come from.

## The device: how the null is actually built

| | round 4's D4 | round 5's broken arm | **round 6's N1** |
|---|---|---|---|
| what is replaced | 45 unigrams | phrases, by first token | **all 53 phrases** |
| replaced with | random unigrams | a single common word | **a real n-gram of equal length** |
| matched on | frequency | first token's frequency | **the phrase's own frequency, ±1.5×** |
| drawn from | word list | word list | **378,412 bigrams, 808,967 trigrams** |

That last row is the part that takes work. The corpus's own inventory of every
two-word and three-word sequence, built so that `let him go` can be swapped for
something that occurs about as often and means nothing.

## The result

| | prediction | result | |
|---|---|---|---|
| **P1** | full lexicon beats the phrase-aware null | 14 of 2000, **p = 0.0075** | **PASS** |
| **P2** | **phrases alone** beat it | **0 of 2000**, p = 0.0005 | **PASS, primary** |
| **P3** | KJV phrase rate within 25% of ASV | 20.4% | **PASS** |
| **P4** | GOSPEL > MYTH survives the swap | p = 0.00064 | **PASS** |

**Not one of 2000 draws beat the observed phrase separation.**

And the falsifier that mattered most did not fire: **F3, more than 30% of phrases
unmatchable, came out at 0 of 53.** Every phrase found a partner of the same
length and rarity, so the null is not under-powered the way round 3's was.

F3 is worth a sentence on its own because it is the falsifier nobody would think
to write. If a phrase is so rare that no comparable n-gram exists, the null
quietly skips it, and **the skipped phrases are exactly the rare ones carrying
the most signal.** A null that silently drops the hardest cases will pass
everything.

> So F3 is a check on the check. It fired at 0.0%, which means the comparison
> was made across the whole instrument rather than the convenient part of it,
> and that is the difference between round 6 and round 3.

> **All four predictions passed. That had not happened since round 2.**

## The number that says the unigrams really do run backwards

```
full lexicon   +0.8396
phrases only   +0.9184
```

**Phrases alone separate the tiers better than the whole instrument does**,
because the unigram half is dragging it down. That is the round 4 diagnosis
confirmed by an independent route.

And it puts the project in an awkward position it never quite names. **The
correct move, on the evidence, is to delete half the lexicon.** The unigrams
contribute nothing, they run backwards, and removing them improves every number.

Nobody does it, and the reason is good: a lexicon edited to improve its own
result is not the lexicon that was registered, whatever the justification. **So
the instrument keeps carrying a half that is known to be dead weight**, and every
result in the season is reported with it in, which is the price of the rule.

## The character anchor

**A control group for a card trick.**

You claim you can find someone's card. The obvious control is a second deck
shuffled at random, which tests whether *any* deck would work. But if your trick
depends on the card being a face card, a control that swaps in number cards is
testing something else entirely.

**The right control swaps in a different face card**, of the same rank, from a
deck of the same wear. **Same shape, same rarity, no meaning.** And then finding
your card is a fact about you rather than about face cards.

## The clinical anchor

**Matching controls on the variable your outcome actually depends on.**

A case-control study matched on age and sex, where the outcome depends on renal
function, has produced beautifully matched groups and answered nothing. **The
matching was real work**, and it was done on the variables that were easy to
extract rather than the ones the disease runs on.

## What would count against this

1. **The n-gram inventory containing dissent phrases by accident.** 378,412
   bigrams drawn from a corpus that includes the Gospels. **Some replacements
   will mean something**, and nobody has checked how many.
2. **The 1.5× frequency band being a free parameter.** Widen it and the null gets
   easier; narrow it and matches fail. It was fixed in advance, which is what
   makes it a parameter rather than a dial.
3. **P2 passing at 0 of 2000 being suspiciously clean.** A p of 0.0005 is the
   floor of a 2000-draw test. It means "we ran out of resolution", not "the
   effect is enormous", and it should be quoted that way.

## Handing off

**Episode 14 runs the whole thing again on a different translation**, which is
the test round 4 could not run and the one the project's own notes called the
largest threat to the entire construct.

## Questions

1. Why is a phrase's own frequency the right matching variable, and its first
   token's the wrong one? Say it in one sentence.
2. **P2 hit the resolution floor.** How would you find out whether the effect is
   large or merely non-zero?
3. Some random n-grams will carry meaning. Does that make the test
   conservative or anti-conservative? Think before answering.

---

[[S4E12 - Three Broken Nulls, One Mistake|← Three Broken Nulls, One Mistake]] · [[S4E14 - Two Translations, 290 Years Apart|Two Translations, 290 Years Apart →]]
