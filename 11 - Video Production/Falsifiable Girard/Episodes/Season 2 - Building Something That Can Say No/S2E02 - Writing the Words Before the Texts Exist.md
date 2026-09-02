---
season: 2
episode: 2
title: "Writing the Words Before the Texts Exist"
words: 1090
minutes: 8.1
character_anchor: "Ippo announcing the Dempsey Roll"
clinical_anchor: "A pre-specified primary endpoint"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-2
---

> [!info] S2E02 · 1090 words · ~8.1 min · [[Season 2 - Building Something That Can Say No — Index|season index]]
> **Generated from `Research/Season 2 — Building Something That Can Say No.md`. Edits here are overwritten.**

# Writing the Words Before the Texts Exist

[[S2E01 - The Accusation that Actually Matters|← The Accusation that Actually Matters]] · [[S2E03 - What a Timestamp Actually Proves|What a Timestamp Actually Proves →]]

---
## The stake

One skill, stealable for anything: decide what you expect *before* you look.
**Nine words in the lexicon fire zero times, and that is the proof it was written
blind**, stronger than any timestamp. You will want this move the next time
someone shows you a perfect prediction.

## Collecting episode 1

Episode 1's confirmation table had no losing row. The only escape was to **write
down what you expect before you look.**

**This episode is that moment.**

## The character

**Ippo announcing the Dempsey Roll.** He tells you what is coming. Then it lands
or it does not, in front of everybody, and **there is no version where he
explains afterwards that something else was the plan.**

**The famous one: Babe Ruth's called shot.** People still argue about it a
century later for one reason: **calling the shot is the only thing that converts
a home run from an outcome into a claim.**

## The clinical anchor

**A pre-specified primary endpoint.** A trial that decides after unblinding which
outcome it was measuring has not measured anything. Everybody in medicine knows
this. **It is the same idea exactly.**

And notice what the rule is actually protecting against, because it is not fraud.
A trial with twenty outcomes and no primary will find something significant by
chance, and the investigator who reports it is not lying. **He is remembering,
sincerely, that this was the one he cared about**, and there is no way for him to
check that memory against anything. The endpoint is fixed in advance because
nobody's recollection of their own expectations survives seeing the answer.

## What was actually built

`make_scorers.py`. **Four word-buckets, 66 words total, written before a single
text had been downloaded.**

One bucket per stereotype from Season 1 episodes 6 to 9, which is the whole design.
**The theory says persecution leaves four kinds of trace, so the instrument has
four containers**, and each one holds the English words that would carry that
trace into a text.

The ordering is checkable in the repository: the corpus arrives in a later commit
than the lexicon.

| bucket | first draft |
|---|---|
| crisis | plague, pestilence, famine, drought, blight, barren, sterile, sickness, disease, death, twin, twins, double, doubles, likeness |
| crimes | incest, parricide, patricide, regicide, murder, betrayal, poison, poisoning, sacrilege, blasphemy, defilement, pollution, abomination, unclean, monstrous |
| marks | stranger, foreigner, alien, cripple, lame, blind, deformed, beggar, orphan, king, queen, tyrant, monster, scapegoat, accursed, marked |
| violence | crowd, mob, unanimous, stone, stoned, cast, expel, banish, exile, drive, driven, slay, slain, kill, blood, hunt, hound |

## The device: the dead words are the receipt

Here is the thing nobody notices, and it is the strongest evidence in the whole
project that the ordering was genuine.

**Nine of those 66 words never fire at all**, in roughly two hundred thousand
words of Greek and Roman literature:

`sterile` · `patricide` · `regicide` · `blasphemy` · `poisoning` · `cripple` ·
`orphan` · **`scapegoat`** · `stoned`

Now ask the question that turns this from a technical footnote into evidence:

> **What would this list look like if the lexicon had been written AFTER reading
> the texts?**

**It would have no dead words in it.** Nobody sits down with the corpus open,
notices that `regicide` never appears, and puts it in anyway. You would have
removed them, silently, without a moment's guilt, because removing a word that
does nothing is housekeeping. **The bucket would look tidier and better**, and
nothing anywhere would record that it had been tidied.

> **A lexicon with nine dead words in it is a lexicon that was written blind. The
> failures are the fingerprint.**

Understand what kind of argument that is, because it is not the usual kind. It is
not a claim about the author's character and it does not ask anybody to believe
him. **It points at a property of the artifact that would have been destroyed by
the behaviour being suspected.** Tidying leaves no trace; the absence of tidying
does. The nine words are evidence in the way an unpicked lock is evidence.

**And it survives the obvious counter-move**, which is worth stating rather than
hoping nobody thinks of it. Somebody could plant dead words deliberately, to
manufacture exactly this receipt. True, and to do it he would have to have
anticipated this argument before writing the lexicon, and then commit to carrying
useless words through every later analysis where they cost him coverage. **The
forgery is possible and it is not free**, which is the most any evidence of this
kind ever offers.

That is a much better argument than a commit timestamp, and it is available to
anyone who reads the file. **Season 2 episode 3 is about why the timestamp on its
own is weaker than people think.**

## And the fourth dead word is a finding, not a footnote

**Read the list again and stop on `scapegoat`.**

The word does not appear anywhere in the corpus. **The instrument built to detect
scapegoating cannot find the word "scapegoat,"** because that is not how these
texts talk.

And it goes further. `parricide`, `patricide` and `regicide` are the Latinate
labels for exactly the crimes Girard's theory is about, and **all three fire
zero times.**

> **The theory names its objects with nouns. The literature describes them with
> verbs.** "He slew his father." Not "he committed parricide."

And that is a difference in what the language is doing, not a difference in
spelling. **A noun is a category with the event already classified inside it.**
Parricide is a verdict; somebody has decided what the killing was and filed it.
The verb reports the killing and leaves the classification to the reader, which is
precisely what a narrative does and precisely what a theory does not.

So the instrument was built out of the vocabulary of judgement and pointed at
texts written in the vocabulary of event.

That gap is not a technicality about word choice. **It is a gap between the
vocabulary of a twentieth-century theorist and the vocabulary of the material he
is theorising about**, and repairing it is most of episode 9.

## What would count against this

1. **A dead word that is actually a coding error.** If `stoned` fails to fire
   because of a tokenisation bug rather than because the texts do not use it, the
   receipt is worthless. **This is a real risk and episode 6 is about exactly that
   class of bug.**
2. **The lexicon having been quietly edited after the fact.** The defence is not
   trust, it is the file history, and episode 3 examines how good that defence
   actually is.
3. **Sixty-six words being too few to measure anything.** A real objection. The
   repaired version has several hundred surface forms and episode 9 explains why
   that is not simply an improvement.

## Handing off

The lexicon was written first. **Episode 3 asks what "first" is worth**, and the
answer is less than you would like and more than it looks.

## Questions

1. Writing the lexicon before the corpus protects against **one specific
   failure.** Name it precisely.
   ___
   ___
2. **The dead words are the receipt.** Is that argument sound? What would make it
   unsound?
   ___
   ___
3. Nine dead words out of 66. **Bad lexicon, or an interesting finding about how
   texts talk?**
   ___
   ___
4. **What would you have put in the buckets?** Write your list now, before episode
   9 shows you the repaired one.
   ___
   ___

---

[[S2E01 - The Accusation that Actually Matters|← The Accusation that Actually Matters]] · [[S2E03 - What a Timestamp Actually Proves|What a Timestamp Actually Proves →]]
