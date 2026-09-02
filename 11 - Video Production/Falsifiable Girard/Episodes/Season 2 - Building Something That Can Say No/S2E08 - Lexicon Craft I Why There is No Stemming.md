---
season: 2
episode: 8
title: "Lexicon Craft I: Why There is No Stemming"
words: 1199
minutes: 8.9
character_anchor: "Drax"
clinical_anchor: "Specificity"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-2
---

> [!info] S2E08 · 1199 words · ~8.9 min · [[Season 2 - Building Something That Can Say No — Index|season index]]
> **Generated from `Research/Season 2 — Building Something That Can Say No.md`. Edits here are overwritten.**

# Lexicon Craft I: Why There is No Stemming

[[S2E07 - Corpus Craft IV The Sample is Part of the Claim|← Corpus Craft IV: The Sample is Part of the Claim]] · [[S2E09 - Lexicon Craft II Deleting 960 Hits from Your Own Instrument|Lexicon Craft II: Deleting 960 Hits from Your Own Instrument →]]

---
## The stake

Every text-analysis tutorial stems its words. This project refused, on purpose,
and the refusal is a lesson in **paying a cost you can name instead of borrowing
one you cannot**. You will recognise this trade everywhere once it is named.

## Collecting episode 7

The corpus is settled and its rules are written down. **Now the other half of the
instrument: the word-lists**, and the first decision is one every text-analysis
tutorial gets wrong.

## The temptation

Every tutorial says the same thing. **Reduce words to their stems**, so `murder`,
`murdered` and `murdering` all count as one concept.

And the reason it is recommended is a real reason. Without it you are counting
strings rather than ideas, and a text that says `murdering` three times looks
identical to a text that never mentions killing at all. Stemming is one line of
library code, it costs nothing, and it fixes that.

So understand what a stemmer actually does before deciding against it. **It chops
suffixes according to rules about letters.** It does not know what any word means.
It knows that a word ending in `-ing` is probably a form of the word without the
`-ing`, and it applies that everywhere, at speed, without hesitating.

**This project refused it entirely.** No prefix matching anywhere.

## The device: four stems, and what each one drags in

**Put the counts on screen.** These are from the actual corpus.

| you stem | you also catch | how many times |
|---|---|---|
| `tear-` | **"tears"**, which is weeping, not rending | **441** |
| `rend-` | "render", "rendered", "rendering" | 28 |
| `torn-` | **"tornado"** | |
| `stone-` | "stone" the material, against "stoned" the punishment | 211 |

Go down the rows, because each one fails differently.

**`rend-` catching "render"** is the innocent case. 28 hits, spread across the
corpus, meaning nothing in particular. That is noise, and noise you can live with.

**`torn-` catching "tornado"** is the funny case, and it is the one that gets used
in talks, and it is the least dangerous of the four. Nobody will ever be misled
by it, because the moment you look at a hit you can see it is absurd.

**`stone-` at 211** is where it stops being funny. The bucket wants stoning, the
execution. The corpus is full of stone the material, stone walls, stone steps,
stone thrown in anger with nobody dying. **The false hits are in the same semantic
neighbourhood as the true ones**, which means you cannot spot them by scanning a
list. You have to read every occurrence in context, which is the labour the
stemmer was supposed to save.

> **And then read the first row slowly.** The bucket exists to catch a body being
> torn apart by a crowd. **Stemming hands it four hundred and forty-one instances
> of people crying.**

`tear` and `tears` are the same letters and opposite events. No rule about
suffixes can separate them, because there is nothing in the letters to separate.

## Why the first row is not just the biggest number

Those 441 hits do not scatter randomly. **They concentrate in exactly the texts
you are most interested in**, because tragedies are full of weeping.

**The error correlates with the hypothesis**, and that is the worst property an
error can have. Spell out why, because most people rank errors by size and size
is the wrong axis.

**A random error adds noise.** Noise makes a true effect harder to find, so it
works against you, and a result that survives it is stronger than it looks. **A
correlated error adds signal shaped like your hypothesis.** It works for you, it
grows as your effect grows, and it survives every check that asks how large the
effect is, because the effect really is large. It is simply not yours.

> **A big random error is a problem you can see. A correlated error of any size
> is a result you cannot tell from a discovery.**

## The clinical anchor

**Specificity.**

A screening test that flags everybody has perfect sensitivity and catches every
case in the population, and it is useless, because a positive result carries no
information. Nothing was learned that you did not know before running it.

**Stemming is a screening rule with excellent sensitivity and terrible
specificity**, applied to a question where the false positives cluster in the
signal. It is the version of the useless screen where the extra positives are not
even distributed evenly.

## The character anchor

**Drax.**

He hears every word correctly and takes it entirely on the surface. Nothing goes
over his head; his reflexes are too fast, he would catch it. The failure is not
inattention and it is not stupidity, because **his processing of the form is
perfect.** He has no model of what the form is for.

**A stemmer is Drax.** Letters go in, the suffix rule applies, and the meaning was
never consulted at any point. It will do this a hundred thousand times without
tiring, without doubting, and without once producing the hesitation that would
tell you it had gone wrong.

## What was done instead

**Every concept lists its surface forms explicitly.** So `tear_apart` is exactly
`tore`, `torn`, `tear`, `tearing`, and nothing else. Written out by hand.

The cost is that adding a concept means enumerating it, and the project's own
code comment says:

> "Explicit lists mean **every match is auditable.** The cost is that adding a
> concept means writing out its forms; **that cost is the point.**"

**Read the last clause again**, because it is the sentence the episode exists for.
The effort is not a regrettable side effect that a better tool would remove. **The
effort is what forces every form to pass through a decision**, and a decision
leaves a record that somebody else can disagree with.

## The trade, stated honestly, because explicit lists are not simply better

| | explicit lists | stemming |
|---|---|---|
| false positives | **few**, and each one traceable | many, and invisible |
| false negatives | **many.** Any form you forgot is silently missed | few |
| auditable | **yes.** Open the file and read it | no |
| effort | high | one line |

Look at the second row before congratulating anybody. **Explicit lists are worse
on false negatives, and not slightly.** Every form nobody thought of is missed in
silence, and the misses do not announce themselves the way a "tornado" hit does.
The instrument is under-counting all the time and nothing on the screen says so.

So the honest comparison is not accuracy against accuracy.

> **Explicit lists trade a loud, checkable error for a quiet, uncheckable one.**
> They are not more accurate. **They are more inspectable**, and in a project
> whose entire defence is "go and check," that is the right trade **and it should
> be presented as a trade rather than as a virtue.**

And notice which way that cuts against the project's own interests. The choice
that makes the instrument inspectable is the choice that makes it **miss more**,
so the discipline here is paid for in results, not in praise.

## What would count against this

1. **A form the lists miss that carries real signal.** Certain. **The question is
   whether the misses correlate with the hypothesis**, and nobody has checked.
2. **Stemming giving the same answer.** Testable in an afternoon: rerun with a
   stemmer and compare. **Never done.**
3. **A modern language model solving it.** It would fix the coverage problem and
   **introduce an unauditable one**, which is a different trade, not a free win.

## Handing off

The lists are explicit. **Episode 9 is the day somebody went through them
deleting things**, and the day a reasonable fix was refused.

## Questions

1. **Which error would you rather have**, the loud checkable one or the quiet
   uncheckable one? Does it depend on the claim?
2. `tears` and `tearing` are one string family and opposite meanings. **How many
   other pairs like that are in English?**
3. The 441 false hits concentrate in tragedies. **Why is a correlated error worse
   than a random one?**
4. **Would a language model solve this?** What new problem does it introduce?

---

[[S2E07 - Corpus Craft IV The Sample is Part of the Claim|← Corpus Craft IV: The Sample is Part of the Claim]] · [[S2E09 - Lexicon Craft II Deleting 960 Hits from Your Own Instrument|Lexicon Craft II: Deleting 960 Hits from Your Own Instrument →]]
