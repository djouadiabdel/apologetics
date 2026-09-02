---
season: 4
episode: 9
title: "A Number with No Script Behind it"
words: 1001
minutes: 7.4
character_anchor: "A save file with no game disc"
clinical_anchor: "A result in the notes with no requesting clinician and no assay named"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-4
---

> [!info] S4E09 · 1001 words · ~7.4 min · [[Season 4 - The Repairs — Index|season index]]
> **Generated from `Research/Season 4 — The Repairs.md`. Edits here are overwritten.**

# A Number with No Script Behind it

[[S4E08 - Seven Counterexamples, Read Instead of Explained Away|← Seven Counterexamples, Read Instead of Explained Away]] · [[S4E10 - Writing the Rules for a Test You Already Know the Answer to|Writing the Rules for a Test You Already Know the Answer to →]]

---
## The stake

The strongest number in the project has no script behind it, which means nobody
can check how it was made. **This episode is about what provenance does to a
result**, and why a number without a process is only a claim.

## Collecting episode 8

The seven counterexamples were read and none of them is dissent, and the
conclusion drawn was that the instrument cannot test a universal negative in
either direction rather than that Girard survives.

## The number this whole project has been standing on

From `RESULTS-2.md`, July, and it has appeared in Season 2 and Season 3 and in
every summary of the project since:

```
Girard buckets:  +6.10 per 1000 words
random sets:     mean -0.16, sd 2.95
beat Girard:     8/2000     p = 0.0045
```

**p = 0.0045.** It is the strongest number the four-bucket track ever produced.
It is the one result that survived Season 3 intact, and Season 3 episode 10 is
built on it.

**The script that produced it is not in the repository.**

Not deleted in anger, not hidden. It was written, it was run, the numbers were
copied into a results file, and the file containing the code was never committed.
This is the single most common way a result becomes unreproducible and it almost
never involves anybody doing anything wrong.

> **The result outlived its method**, and it kept being cited the whole time,
> because a number in a results file looks exactly the same whether or not the
> thing that produced it still exists.

## What is actually missing, precisely

This matters because "not reproducible" is a phrase people use loosely.

| present | absent |
|---|---|
| the three numbers, committed in July | the script that computed them |
| the corpus they were computed on | the seed |
| the lexicon version | the matching procedure |
| a prose description of the method | how phrases were handled |

**Everything except the thing that turns the inputs into the output.** The result
is a claim with a method described in a sentence, which is the ordinary situation
in most published science and is exactly what nobody notices until they try.

And the prose description is genuinely good. "2000 random word-sets drawn from
the corpus and frequency-matched to the lexicon" is a real method, stated
clearly, and somebody competent could implement it.

**Two competent people implementing it will not get the same number.** They will
differ on whether the matching pool includes the target words, on whether
frequency is matched exactly or within a band, on how phrases are handled, and on
whether the corpus is the pre- or post-correction version.

> Four decisions, two ways each, is sixteen versions of "the method described in
> that sentence". **The sentence is not wrong. It is not a specification**, and
> nobody notices the difference until the code is gone.

## The device: three ways to respond, and only one of them is available

| response | what it means | why it is refused |
|---|---|---|
| keep citing it | the number is true because it was written down | **this is what "trust me" looks like from inside** |
| withdraw it | no script, no claim | throws away a result that is probably right |
| **rebuild it** | **write a spec, then re-run** | **the only one that can come out either way** |

> **And rebuilding has a trap in it that is worse than either alternative.**
> The reconstruction has free parameters the record does not fix, and **the
> target number is sitting there in view.** With four or five choices to make
> and a number to hit, a reconstruction can be tuned into agreement without
> anybody intending it.

Notice why the middle row is genuinely tempting rather than obviously wrong.
Withdrawing p = 0.0045 costs the project its best number on the strength of a
missing file, when the number is very probably correct. **Nobody wants to
retract something for a bookkeeping reason.**

And notice why the top row is what almost everybody does. The number has been
cited three times already. Continuing to cite it requires no decision at all,
which is the property that makes it the default.

## The clinical anchor

**A result in the notes with no requesting clinician and no assay named.**

"Ferritin 12" in the margin, undated, no lab, no reference range. It is probably
right. Somebody probably wrote it down off a screen. And you cannot use it,
because the number and the confidence in the number are two different objects,
and the notes preserved only one of them.

**The clinical instinct is to repeat the test.** That instinct is the whole of
round 5.

And notice the instinct is not scepticism about the number. Nobody thinks the
ferritin was invented. **Repeating it is cheaper than establishing whether the
first one can be trusted**, and the repeat produces something you can act on,
which the original never will however true it happens to be.

## The character anchor

**A save file with no game disc.**

The save is intact. It records a hundred hours, every item, the exact position on
the map. It is genuinely your progress, and it is a record of a world you can no
longer enter to check anything.

**And you can rebuild the game from the same version and load the save**, which
is the honest move, and which will tell you whether the save was ever consistent
with a real playthrough.

The failure mode is what makes the anchor exact. Reinstall a slightly different
patch and the save might load into a world where your position is inside a wall,
and you will not be able to tell whether the save was corrupt or the patch was
wrong. **Two unknowns, one observation**, which is the position round 5 is about
to be in with four free parameters and one target number.

## What would count against this

1. **This being pedantry.** The number is almost certainly fine. The method is
   described in prose. Reconstructing it costs days. **Make that argument
   properly**, then notice it is available for every unreproducible result ever
   published, including the wrong ones.
2. **The reconstruction being worse than the original.** A rebuilt script written
   by somebody who knows the target is a different object from a script written
   blind. Episode 10 is entirely about containing that.
3. **Nothing depending on it.** If p = 0.0045 vanished, the four-bucket track was
   already abandoned. **Except that Season 2 and Season 3 both cite it**, and so
   does this series.

## Handing off

**Episode 10 writes the specification**, and the interesting part is that it is
written and committed *before* the reconstruction, with the verdict rule fixed in
advance, precisely because the target number is known.

## Questions

1. You have a number, a prose method and no code. **Name the smallest addition to
   the record that would have made this episode unnecessary.**
2. Is "probably fine" ever good enough? Say what it depends on.
3. **Before episode 10:** if you had to reconstruct it, how would you stop
   yourself tuning toward 0.0045? Write your procedure down.

---

[[S4E08 - Seven Counterexamples, Read Instead of Explained Away|← Seven Counterexamples, Read Instead of Explained Away]] · [[S4E10 - Writing the Rules for a Test You Already Know the Answer to|Writing the Rules for a Test You Already Know the Answer to →]]
