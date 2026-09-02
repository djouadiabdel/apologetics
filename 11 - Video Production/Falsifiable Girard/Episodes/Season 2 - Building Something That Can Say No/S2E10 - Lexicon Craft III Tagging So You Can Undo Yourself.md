---
season: 2
episode: 10
title: "Lexicon Craft III: Tagging So You Can Undo Yourself"
words: 1345
minutes: 10.0
character_anchor: "Leonard in *Memento"
clinical_anchor: "A protocol amendment log"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-2
---

> [!info] S2E10 · 1345 words · ~10.0 min · [[Season 2 - Building Something That Can Say No — Index|season index]]
> **Generated from `Research/Season 2 — Building Something That Can Say No.md`. Edits here are overwritten.**

# Lexicon Craft III: Tagging So You Can Undo Yourself

[[S2E09 - Lexicon Craft II Deleting 960 Hits from Your Own Instrument|← Lexicon Craft II: Deleting 960 Hits from Your Own Instrument]] · [[S2E11 - The First Number, and What it Throws Away|The First Number, and What it Throws Away →]]

---
## The stake

A small technical choice that buys the ability to undo yourself. **Tags are how
you make your own revisions visible instead of shameful**, and the habit costs
minutes and saves entire arguments.

## Collecting episode 9

Episode 9 revised the lexicon, and it revised it **after seeing a failure.**

State the problem precisely, because the loose version of it is wrong. The loose
version says that revising an instrument after seeing results is cheating. That
would forbid every bug fix ever made, and no instrument in any field would
survive contact with its first real data. Episode 9's changes were made for good
reasons and this episode does not take them back.

The precise version is that **two different kinds of change were made in the same
edit**, and afterwards nobody could tell them apart.

> Did the numbers improve because **bugs were fixed**, or because **new words
> were added that happened to help?**

Those are not two degrees of the same thing. **A bug fix says the instrument was
failing to do what it always claimed.** The theory is untouched. **Adding a
concept says the instrument now claims something different.** What is being
tested has changed, and any comparison to a result from before the edit is a
comparison between two instruments.

And a reader looking at the revised lexicon sees one file, one date, one list of
words, with nothing on the page indicating which line came from which motive.

**That is not a flaw in the results. It is a hole in the record**, and holes in
the record cannot be repaired by argument afterwards, because there is nothing
left to argue from.

## The device: three characters that make the edit reversible

Every entry in the repaired lexicon carries a tag.

| tag | means | is it a theory change? |
|---|---|---|
| `v1` | in the original pre-corpus lexicon, unchanged | no |
| `inf` | an inflection of a `v1` word. **A matching bug fix** | **no. Adds no concept** |
| `v2` | a genuinely **new concept** added in the revision | **yes** |

Take them one at a time, because the middle row is the one doing the work.

**`v1` is the frozen state.** Whatever was written in episode 2, before any text
had been scored, before anybody knew what would happen.

**`inf` is an inflection of something already in `v1`.** `murder` was in the
original list and the matcher was failing to catch `murdered` and `murdering`.
Adding those forms adds no concept whatsoever. **The instrument always intended to
catch that word and was simply failing to**, which is the definition of a bug
rather than a revision.

**`v2` is a concept that was not there.** Something the pre-corpus lexicon did not
contain and would never have caught however perfect the matching had been.

And then the part that turns a label into a check. **The scorer takes a flag,
`--no-new`, which drops everything tagged `v2`.**

## Why a tag is not a changelog

Most projects handle this with a note. We revised the lexicon on such a date, here
is what we changed and why. That note is prose, and a reader has to trust it, then
reconstruct the old instrument in their head, then take on faith that the
reconstruction matches what the code actually did.

**The tag is executable.** Any result in the project can be recomputed as if the
new concepts had never been added, by anybody, without asking permission and
without the author's cooperation.

> A changelog is a **claim** of separability. A flag **is** separability. The
> point is not that the author was honest about the revision. **The point is that
> his honesty stopped being load-bearing.**

And put it against the refrain. A promise not to have tuned the instrument is a
check that cannot fail, so it prints reassurance and nothing else. **`--no-new` can
fail.** Run it, and if the results collapse without the new concepts, the project
has been told something it did not want to hear, in public, by its own code.

## The clinical anchor

**A protocol amendment log.**

Amendments are not forbidden. Trials get amended constantly and for excellent
reasons. **The requirement is that each one is dated and separable**, so a reader
can reconstruct what the trial looked like before it.

Which is why the failure mode here is worse than it sounds. **A trial with
undocumented amendments is not a trial with a flaw. It is a trial you cannot
read.** A flaw you can weigh. An unreadable record leaves you with a number and no
way to find out what produced it.

## The character anchor

**Leonard in *Memento*.** He cannot form new memories, so he keeps his findings
on polaroids and tattoos, which is a perfectly sensible instrument for a man in
his situation.

**And it has no provenance tags.** Nothing on any note records who he was when he
wrote it, or what he had just been told, or which notes were written before which.
So he cannot distinguish a fact he established from a fact somebody fed him, and
the record he built to protect himself becomes the mechanism by which he is
steered. **He is not lying and he is not careless.** He is unauditable, including
to himself, and that turns out to be enough.

## And here is what the tags revealed, which is the reason they earn an episode

The v1 headline finding had been: **"each bucket is dominated by one generic
word."** It was the project's first real observation about its own instrument, and
it mattered, because a bucket that is mostly one word is not measuring a concept.
It is measuring a word, and reporting the result under the concept's name.

Then the matching bug was fixed, and the tags let somebody ask what that finding
looked like without it.

| bucket | top word's share, v1 | after the fix |
|---|---|---|
| crisis | 68% | 60% |
| marks | 54% | 44% |
| **violence** | **36%** | **21%** |
| **crimes** | **43%** | **12%** |

> **Two of the four buckets stopped being dominated by one word once the matching
> was fixed.** Crimes went from 43% to 12%.

The mechanism is worth spelling out, because it explains the direction of every
row. The old matcher caught `murder` **138 times out of 297 real occurrences.**
The forms it missed were the inflected ones. So the base form was the only form
being counted reliably, and of course it dominated the bucket. **The dominance was
a fact about the matcher, not a fact about the corpus.**

> **So half of the project's own first major finding was a bug in its own code**,
> and the tags are the only reason anyone could tell.

Then look at which half survived. **Crisis is still 60% `death` and `marks` is
still 44% `king`.** So "dominated by one generic word" is not a property of the
method and never was. It is a per-bucket fact, true of two buckets and false of
two, which is a worse outcome than a clean survival or a clean death because it
gives you no rule to carry forward.

**And the surviving 44% is the load-bearing one.** It is the number Season 1
episode 8 is built on, and the one Season 4 episode 17 tests by deleting the word and
re-running everything.

**Without the tags, none of that is detectable.** There would be no correction to
announce. You would simply have a better lexicon, and a claim that stopped being
repeated, and nobody would ever have said a false thing out loud.

## What would count against this

1. **`inf` not really being "no new concept."** Argue it: inflections smuggle in
   meaning. `murdering` is not `murder`, it is ongoing, and a bucket that gains
   the progressive forms may be catching a different aspect of the event. **A real
   objection and the project does not address it.**
2. **The tags being applied inconsistently.** Checkable by reading the file, which
   is the point of putting them there.
3. **The tags being assigned by the same person making the edit.** Nobody
   independent decided whether a given form was an inflection or a smuggled
   concept, so the separation is only as good as one author's judgement at one
   sitting. **The check is executable and the classification behind it is not.**

## Handing off

The instrument is built. **Episode 11 is the first number it produces**, and the
one property of that number causes every major failure in the next two seasons.

## Questions

1. **Without tags, how would you ever separate the two effects?**
2. Half the v1 finding was an artifact of the code. **What in your own work is a
   property of your tools rather than your subject?**
3. **Is `inf` really no new concept?** Argue that inflections smuggle meaning.
4. Two buckets kept their dominant word and two lost it. **What, if anything, are
   you entitled to conclude from a finding that holds in half your cases?**

---

[[S2E09 - Lexicon Craft II Deleting 960 Hits from Your Own Instrument|← Lexicon Craft II: Deleting 960 Hits from Your Own Instrument]] · [[S2E11 - The First Number, and What it Throws Away|The First Number, and What it Throws Away →]]
