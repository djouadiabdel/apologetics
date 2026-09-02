---
season: 4
episode: 3
title: "A Different English"
words: 1231
minutes: 9.1
character_anchor: "Dubs against subs, for the same episode"
clinical_anchor: "The same hormone measured on two different analysers"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-4
---

> [!info] S4E03 · 1231 words · ~9.1 min · [[Season 4 - The Repairs — Index|season index]]
> **Generated from `Research/Season 4 — The Repairs.md`. Edits here are overwritten.**

# A Different English

[[S4E02 - The Words Left Out on Purpose|← The Words Left Out on Purpose]] · [[S4E04 - Registering a Prediction You Expect to Fail|Registering a Prediction You Expect to Fail →]]

---
## The stake

The control translation is chosen for its date, not its quality. **A 290-year-old
English Bible becomes the ruler**, and the lesson is that controls do not need to
be good. They need to be independent.

## Collecting episode 2

The fifth bucket is built, tagged `core` and `unan`, with five frequent Gospel
words deliberately excluded. The tags exist because the pre-registration
disclosed that one half was at higher risk of being motivated than the other.

## The problem, and it is the biggest threat to the round

The corpus is almost entirely **1900 to 1921 English**. Murray's Euripides,
Butler's Homer, Miller's Loeb Seneca, Frazer's Loeb Apollodorus. Edwardian
translators, working in a shared register, on Greek and Latin verse.

**The Loeb Classical Library** is worth naming, since it supplies a good part of
the corpus.

It is a series begun in 1911. Each volume prints the Greek or Latin on the left
page and an English translation facing it on the right, so the translation is
meant to be read *against* the original rather than instead of it. **Loeb English
is therefore literal and a little formal**, closer to a gloss than to literature.

**That house style is a property of the corpus**, and one of the reasons its texts
sound alike.

The Gospels are not.

**So any difference you measure between the tiers might be a difference between
two kinds of English**, and Season 3 episode 5 already put a number on how large
that effect can be. Two translations of the *same play* differed by **17.2%**.

Understand what that 17.2% is, because the rest of the season leans on it. It is
**the same text, the same events, the same characters**, measured twice through
two translators, and the instrument disagreed with itself by a sixth. Nothing
about Greek tragedy changed between those two runs. Only the English did.

> So 17.2% is the size of the wobble in the ruler. **Any difference smaller than
> that is not a fact about the texts**, and any comparison across two different
> Englishes inherits it before it starts.

And the Gospel comparison is worse than the *Agamemnon* one, because those two
translators were contemporaries. Here one side of the comparison is Edwardian
Loeb prose and the other is a Bible.

## The device: the choice, and the alternative that was rejected

| candidate | date | why |
|---|---|---|
| **ASV** | **1901** | **chosen.** Literal, public domain, inside the corpus's own window |
| KJV | 1611 | rejected: three centuries off register |

Read that table as a **control**, not a preference. The ASV is not chosen for
being better. It is chosen for being **the same age as the rest of the corpus**,
so that if a difference survives, the difference is not a date.

This is worth pausing on because it inverts the usual instinct. If you were
choosing a Bible to read, the KJV is the obvious answer on almost every
literary ground, and most people would reach for it without thinking. **Here it
is the wrong choice precisely because it is the famous one.**

The question is not "which English is best" but "which English removes a variable
I cannot otherwise control". 1901 against 1900-to-1921 removes the date. 1611
against 1900-to-1921 adds three centuries of drift on top of everything else you
are trying to measure, **and any difference you found would have two explanations
with no way to separate them.**

> **And the choice is made before scoring and not revisited.** That sentence is
> doing more work than it looks. The KJV is also on disk. Round 6 runs the
> entire test again on it, and the only reason that is a control rather than a
> rescue is that the ASV was named first.

## What a checksum is for

The pre-registration records the source and a `sha256` hash of the text file, and
states: **if a future download has a different checksum, that is a changed sample
and needs saying out loud.**

This is worth explaining properly because it is not obvious.

A hash is a short fingerprint of a file. Change one character anywhere in the
four Gospels and the fingerprint changes completely. It is not encryption and it
hides nothing. **It exists so that "I used the ASV" becomes a checkable claim
rather than a memory.**

| what you write down | what it proves |
|---|---|
| "ASV, from openbible.com" | you intended a particular text |
| "Matthew 23,427 words" | roughly the right book arrived |
| **`sha256 aecff150...`** | **the exact bytes, forever, by anyone** |

**Read the middle row again, because it is the one people think is enough.** A
word count catches a truncated download, which is a real failure and one this
project has already had: Season 2 found a text cut off at 46% by a fetcher bug.
It does not catch a different edition, a different versification, or a file where
somebody's script stripped the verse numbers.

The hash catches all of those, and it catches them **without anybody having to
anticipate them**, which is the property that makes it worth the trouble. You do
not have to guess how the sample might change. Any change at all shows up.

## The character anchor

**Dubs against subs, for the same episode.**

Two people watch the same anime and argue about whether a character is rude. One
watched the dub, one read the subs. Neither is lying and neither watched the same
script, because a dub is written to fit mouth flaps and a sub is written to fit a
line of text.

**Now count rude words in each and publish the difference as a fact about the
character.** That is the register confound, and this is a genuinely different
instance from Season 3 episode 5's two subtitle tracks, because here the two
versions are separated by **290 years** rather than by two translators in the
same decade.

## The clinical anchor

**The same hormone measured on two different analysers.**

One sample, split in half, run on two manufacturers' platforms. The numbers come
back different, sometimes by a fifth, and **neither machine is faulty.** They use
different antibodies, which bind slightly different parts of the molecule, so they
are answering slightly different questions about the same blood.

Which is why a result from one platform cannot be read against a cut-off derived
on the other, and why a patient followed across a lab change gets a trend line
with a step in it that is not in the patient.

> **That is the translation problem exactly.** Murray and the ASV are two
> instruments measuring the same construct, and the difference between them is
> real, systematic, and nobody's error. Season 3 episode 5 measured the size of
> that step at **17.2%**, and this episode is about choosing the second
> instrument so the step does not land inside the comparison.

## What would count against this

1. **The ASV being closer to the Greek than any myth translation is to its
   original.** A literal translation preserves source idiom. If the Greek New
   Testament repeats a division formula, a literal English version repeats it,
   and **that is a fact about Greek, not about dissent.** Nothing in this project
   tests it.
2. **One translation not being a control at all.** A control needs two. Round 6
   supplies the second and the answer is not clean.
3. **The 800-word rule and the corpus count.** Season 2 episode 4 showed the
   corpus size has four different values in the record. That is unresolved here
   too, and episode 17 finally counts it.

## Handing off

**Episode 4 writes the predictions**, six of them, and one is registered by
somebody who says in advance that he expects it to fail.

## Questions

1. The ASV was chosen for its **date** rather than its quality. **Name a case
   where choosing on date would be the wrong call**, and say what you would
   choose on instead.
2. A hash proves the bytes. **Name something about a corpus that a hash cannot
   prove**, and that this project would need.
3. If the ASV's phrasing comes from the Greek rather than from 1901 English, is
   the confound smaller or larger? Answer before episode 13.

---

[[S4E02 - The Words Left Out on Purpose|← The Words Left Out on Purpose]] · [[S4E04 - Registering a Prediction You Expect to Fail|Registering a Prediction You Expect to Fail →]]
