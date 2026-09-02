---
season: 5
episode: 4
title: "Blinding Somebody Who Cannot Be Blinded"
words: 1125
minutes: 8.3
character_anchor: "A blind audition with the chairs turned around"
clinical_anchor: "Reporting imaging blind to the clinical details, and why nobody actually does it"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-5
---

> [!info] S5E04 · 1125 words · ~8.3 min · [[Season 5 - The Bible Instrument — Index|season index]]
> **Generated from `Research/Season 5 — The Bible Instrument.md`. Edits here are overwritten.**

# Blinding Somebody Who Cannot Be Blinded

[[S5E03 - Four Categories, and the One that Stops You Helping|← Four Categories, and the One that Stops You Helping]] · [[S5E05 - The Control, and Why it is the Whole Study|The Control, and Why it is the Whole Study →]]

---
## The stake

The coder knows the material and cannot un-know it. **This episode is about
blinding somebody who cannot be blinded**, a problem far beyond this project, and
the tooling answer to it.

## Collecting episode 3

Four labels, a rule that a fit must be supplied by a text, and a guard that binds
the defender and the sceptic identically. All of it still runs through one mind
that knows every text on sight.

## The problem, stated without flinching

The coder is going to read a passage and know immediately whether it is Mark or
the Gospel of Peter. Not by an act of scholarship, by recognition. The canonical
texts are among the most familiar documents in the language.

**And the hypothesis under test is that the canonical texts behave better.** So
the person applying the labels knows, for every item, which way the label needs to
fall for the prediction to pass.

That is the textbook setup for bias, and no amount of good intention touches it,
because the bias does not operate through intention. It operates through **how
long you look before you accept an answer**, which is the mechanism Season 4
episode 10 named and which is invisible from the inside.

## What gets built anyway

Two mechanisms, both enforced by tooling rather than by resolve.

**Order blinding.** A script emits every item in shuffled order, so the coder does
not work through Mark and then work through Peter. The identities of the sources
are written to a separate file, `key.json`, and that file is sealed until scoring.

The sealed key deserves a sentence on why it is a file rather than a promise.

A coder who keeps the mapping in his head is not doing anything dishonest, and he
is also carrying the tally as he goes. He knows the canon is at four fits and
the apocrypha at none, and the next borderline item arrives into a mind that
knows what it would do to the running total. **The bias is not in wanting a
result. It is in knowing the score while you play.**

Putting the mapping in a file the coder does not open removes the scoreboard. It
does not remove recognition, which is the next section, and it removes something
real, which is why it is worth the ten lines of code.

**Label blinding.** The coder does not see which witness is which gospel while
coding. The items arrive as anonymous witness codes.

The value of this is real and it is narrow. It removes the **run effect**, where
your standards drift across a block of items from one source and you calibrate to
that source without noticing. It does nothing about recognition.

## What the tooling cannot hide, and the study says so

> The texts carry their own content, so the run **cannot be truly blinded to
> canon against apocrypha the way a naive coder could be.**

Read that as the honest sentence it is. A witness code hides the label. It does
not hide that this passage has a talking cross walking out of the tomb, which
occurs in exactly one document in the corpus and which the coder will recognise
in four words.

So the blinding is partial by construction, and the study's response is not to
claim otherwise. It is to state the ceiling on every headline and to separate the
findings by how much they depend on judgement, which is episode 7 and is the most
useful thing in the layer.

**That separation is the real answer to unblindable coding**, and it generalises
past this study, so it is worth stating as a rule.

When you cannot remove a bias, **sort your findings by how much of them the bias
could touch.** Some results depend on a judgement call and some are facts on the
page. A study that reports both at one confidence has hidden its weakest number
inside its strongest, and a study that sorts them lets a hostile reader keep the
half that survives.

> The alternative, which is what usually happens, is a limitations paragraph at
> the end saying the coding was not blinded. **That is true, unusable, and costs
> the author nothing**, because it does not tell a reader which specific number
> to discount.

## The device: what each mechanism actually buys

| mechanism | removes | does not remove |
|---|---|---|
| shuffled order | drift across a block, calibrating to one source | recognition of any individual item |
| sealed key | scoring while watching the tally move | knowing which way the prediction needs it to fall |
| witness codes | the label | **the content** |
| **nothing available** | | **that the coder knows the hypothesis** |

**The bottom-left cell is empty and the study leaves it empty.** That is what an
honest limitations section looks like: not a paragraph of hedging, a row with
nothing in it.

## The clinical anchor

**Reporting imaging blind to the clinical details, and why nobody actually does
it.**

A radiologist given no history reports what is on the film. A radiologist told
"query pneumonia, day three post-op" finds the consolidation faster and misses the
thing nobody asked about. The literature on this is not subtle: **context improves
sensitivity for the suspected diagnosis and reduces it for everything else.**

And you cannot run a service on blind reporting, because the context genuinely
helps. So the compromise is the same one here: **you do not pretend the reporter
is blind. You record what they were told.**

## The character anchor

**A blind audition with the chairs turned around.**

It works, and it demonstrably changes who gets picked. And it does not survive
somebody walking out and singing a song they released last year, because the
mechanism hides the face and not the voice.

**Nobody concludes from that failure that the chairs are pointless.** They
conclude that the chairs handle one specific bias and that a famous contestant is
a different problem needing a different answer, and that the show should stop
claiming the audition was blind when it was not.

## What would count against this

1. **Partial blinding being worse than none.** A defensible position: it produces
   the *appearance* of rigour while the main bias runs free, and a reader may
   discount less than they should. **The counter is that the ceiling is printed
   on every headline**, which is a real answer only if readers read headlines.
2. **The run effect being the smaller problem.** Almost certainly true.
   The mechanisms address the bias that could be addressed, which is not the same
   as addressing the bias that matters.
3. **A second coder being available and not used.** The project decided in July
   that one coder is the design and the runs are pilots. **That is a resource
   decision recorded as such**, not a methodological argument, and it should not
   be dressed as one.

## Handing off

**Episode 5 builds the control**, which is the part Seasons 2 to 4 never had, and
the objection to it is strong enough that the episode spends most of its time
there.

## Questions

1. Design a blinding scheme that would hide the *content*. Is the result still
   the same study?
2. Is partial blinding worse than none? Argue it properly, then decide.
3. **The empty cell.** Name one thing that would fill it, and say what it costs.

---

[[S5E03 - Four Categories, and the One that Stops You Helping|← Four Categories, and the One that Stops You Helping]] · [[S5E05 - The Control, and Why it is the Whole Study|The Control, and Why it is the Whole Study →]]
