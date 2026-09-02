---
season: 2
episode: 3
title: "What a Timestamp Actually Proves"
words: 1215
minutes: 9.0
character_anchor: "A sealed envelope handed to a lawyer"
clinical_anchor: "A trial registration number"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-2
---

> [!info] S2E03 · 1215 words · ~9.0 min · [[Season 2 - Building Something That Can Say No — Index|season index]]
> **Generated from `Research/Season 2 — Building Something That Can Say No.md`. Edits here are overwritten.**

# What a Timestamp Actually Proves

[[S2E02 - Writing the Words Before the Texts Exist|← Writing the Words Before the Texts Exist]] · [[S2E04 - Which Texts, and Why Those|Which Texts, and Why Those →]]

---
## The stake

Everyone trusts timestamps. This episode shows what one actually certifies and
what it cannot, **and why the contents of a file can outrank its history**. After
this you will never look at a proof of date the same way, including your own.

## Collecting episode 2

Episode 2 found evidence the lexicon was written blind: **nine dead words that
nobody would have left in.**

But that is an argument from the *contents* of a file. The project's own claim is
about **order**, that the predictions were written before the scoring, and it
offers a different kind of proof for that. **This episode is about how good that
proof is, and the answer is uncomfortable.**

## The character

**A sealed envelope handed to a lawyer.**

The trope exists in a hundred films for one reason: **it converts a claim made
afterwards into a claim made before**, and every audience understands instantly
why that matters. Nobody needs the concept explained. The whole of pre-registration
is in a piece of stationery.

**And then the version that shows the crack, which is Borden's diary in *The
Prestige*.** A rival steals it, reads it, and reasons carefully from it, because a
diary is a dated record and a dated record is evidence. **It was written to be
stolen.** The dates are real, the entries are in order, the object is exactly what
it appears to be, and the reader is still being played, because the one thing the
artifact cannot record is the intention of the man holding the pen.

Hold both. **The envelope is why the procedure works. The diary is why this
episode exists.**

## The clinical anchor

**A trial registration number.** Not the protocol, the **registration**, which is
the thing whose entire value is that it was filed on a date and cannot be edited.

And notice what a registry is really doing, because it is not storage. The
protocol could sit in a drawer. **The registry's function is that it is held by
somebody with no stake in the result**, so the record is outside the reach of the
person the record is about.

## The rule the project follows

1. Write the predictions in a file.
2. **Commit it to git.**
3. Then run the scorer.
4. Report what happened, failures at the top.

**And the reason, in the project's own words**, which is the sentence to read
aloud:

> "If the rule is written afterward, it gets shaped by what was found, and **the
> shaping is invisible from the inside**. I would have written a definition that
> produced the answer I already liked **and experienced that as being careful**."

That is the claim. Not that people lie. That **a mind adjusting a rule to fit a
result cannot feel itself doing it**, so the only defence is a record somebody
else can check.

## And now go and check it

**This is where the episode turns.**

| round | pre-registration | results | gap |
|---|---|---|---|
| 1 | 21 Jul 01:37 | 21 Jul 01:39 | **2 minutes** |
| 2 | 21 Jul 03:00 | 21 Jul 03:14 | **14 minutes** |
| 3 | 22 Jul 00:55 | 22 Jul 03:22 | 2 h 27 |
| NT count | 24 Jul 22:53 | 24 Jul 23:09 | **16 minutes** |
| Layer 2 | 25 Jul 00:56 | 25 Jul 00:58 | **2 minutes** |
| 4 | 11 Aug 02:07 | 11 Aug 02:17 | **10 minutes** |

**Median gap: fourteen minutes.** Every prediction and its result were committed
inside one continuous working session, often minutes apart.

Two minutes, twice. Sit with that number before defending it.

The defensive reading is available and it is genuinely true. The work was done in
long uninterrupted sittings. The scorer runs in seconds. And there is no reason a
careful person would pause between freezing a prediction and executing it.
**Everything about the gap is consistent with the procedure having been followed
exactly.**

It is also consistent with the opposite.

> **The hostile reading, stated at full strength:** you had the numbers on screen
> and committed the prediction file first. **Git proves which of two files hit the
> disk first. It does not prove that no scoring happened before either.**

That is the whole weakness in one line. A commit records **when a file was
written down**, and the claim being made is about **when something was known**.
Those come apart, and nothing in a timestamp closes the distance. This is Borden's
diary again: an accurate, dated, unfalsified record that answers a question
adjacent to the one being asked.

**That objection is real and it is not answered anywhere in the project.** Say so
out loud, before anybody else gets to.

## The device: stop looking at WHEN and look at WHAT IS INSIDE

Here is the fix, and it is better than the thing it replaces.

Do not ask when the commit was made. **Ask what files it contains.** A commit is
not a timestamp with a note attached. It is a complete snapshot of the project at
a moment, so it records not only what was said but **what existed**.

| commit | contains | did the scorer exist yet? |
|---|---|---|
| pre-registration 3 | the prediction file, **and nothing else** | **no** |
| results 3 | results, **and `nulltest.py`**, and the output | **it arrives here** |
| pre-registration 4 | predictions, lexicon, tiers | **no scorer** |
| results 4 | results, **and `score_dissent.py`** | **it arrives here** |

> For those rounds, git proves something **much stronger than the order of two
> prose files**: the **program that produced the number did not exist** when the
> prediction was frozen.
> 
> You cannot fit a result to a prediction using software you have not written
> yet.

Notice why that argument is stronger, and it is not because it is more rigorous
in style. **The timestamp defence asks you to accept a claim about a person's
behaviour**, which is unverifiable in principle. The manifest defence rests on an
absence in the artifact: the file is not there, and its absence is checkable by
anybody, forever, with no cooperation from the author. **A defence that depends on
what somebody did is replaced by a defence that depends on what a repository
contains.**

**That is the argument to make on camera. Not the timestamp. The manifest.**

## And the exception, which is the part that costs something

**Round 2's pre-registration commit contains the scorer and two files of
already-scored results.**

They are scores on a *different* corpus, which the pre-registration itself
discloses as a smoke test, and that disclosure is real and should be reported.
But apply the manifest test as stated and it fails: **the machinery was fully
operational and committed at the moment the predictions were frozen.** The gap to
results is fourteen minutes. Every protection this episode just built is
unavailable for that round.

> **And round 2 is the round that produced the project's only surviving positive
> number.** The least protected round is the one carrying the result.

Say that plainly. It is the single most damaging fact about the project's evidence
and it is better said by you. **And say it in this position**, in the middle of
the episode that constructs the defence, rather than in a footnote after the
audience has been persuaded.

## What would count against this

1. **A round where the scorer appears in the pre-registration commit and the
   result is claimed anyway.** That is round 2 and it is disclosed above.
2. **Files edited after commit without a record.** Git makes that visible; the
   defence is that anyone can check.
3. **The whole file-manifest argument failing** if someone wrote the scorer,
   deleted it, committed the prediction, and restored it. **Possible. Undetectable.
   And at that point you are not doing science, you are doing fraud**, which no
   procedure defends against.

## Handing off

Predictions are frozen and the order is as good as it is going to get.

**Episode 4 asks the question that comes before all of it and almost nobody
asks: which texts, and why those?**

## Questions

1. **Is the file-manifest defence enough?** What procedure would satisfy a reader
   who trusts nothing at all?
2. Two minutes. **Does that bother you more or less than you expected** before you
   saw the manifests?
3. Design a pre-registration procedure that **does not depend on trusting commit
   order.**
4. The least protected round carries the only result. **How much should that
   discount it?** Put a number on it.

---

[[S2E02 - Writing the Words Before the Texts Exist|← Writing the Words Before the Texts Exist]] · [[S2E04 - Which Texts, and Why Those|Which Texts, and Why Those →]]
