---
season: 3
episode: 1
title: "The Control that Beat Every High Text"
words: 1303
minutes: 9.7
character_anchor: "A goalkeeper in a penalty shootout who dives the wrong way and the ball hits him"
clinical_anchor: "A trial whose primary endpoint fails and whose secondary endpoint is beautiful"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-3
---

> [!info] S3E01 · 1303 words · ~9.7 min · [[Season 3 - Four Ways To Fail — Index|season index]]
> **Generated from `Research/Season 3 — Four Ways To Fail.md`. Edits here are overwritten.**

# The Control that Beat Every High Text

— · [[S3E02 - The Arithmetic of Rare Things|The Arithmetic of Rare Things →]]

---
## The stake

Season 2 ended with a validated instrument. This episode is its first real test,
and the control beats every high text. **You are about to watch a good instrument
answer the wrong question**, which is the most common failure in data work and
the one nobody plans for. The season's promise: every failure here comes with an
exact mechanism, and by the end you will own the tools that explain all of them.

## Collecting Season 2

Thirteen episodes built an instrument and tested nothing. Written blind, frozen,
corpus audited, tokens fixed, lexicon de-noised, metric chosen for the right
reason and validated against a false positive it caught by itself.

**Every decision was defensible. Most of them were right.**

**This episode is what happened when it met the texts.**

## The setup

Ovid's *Metamorphoses*, cut into 31 individual myths. Seventeen sorted into tiers
**before anything was scored**, on Girardian grounds only.

Notice what that sorting commits you to. **It is a public list of which texts you
expect to win.** Not an interpretation offered after the fact, not a reading, but a
partition of the material written down while the answer is still unknown, by
somebody who then has to live with it.

**HIGH**, where the mechanism should be: Pentheus torn apart by his mother.
Actaeon torn apart by his hounds. Lycaon, cannibalism and expulsion. Cadmus, where
sown men slaughter each other.

**LOW**, the controls: Narcissus and Phaethon, **both declared controls in the
fetching script before the corpus existed**, plus the creation, the four ages,
Daphne, Ceres, Aglauros.

**And the falsification conditions, written down first:**

> Any LOW text scoring above any HIGH text. HIGH and LOW overlapping so much no
> threshold separates them. The null test matching the buckets' separation.

Read those as what they are, which is a list of ways to lose that the author wrote
for himself. **Season 2 episode 1 said the whole season was an attempt to build a
test that can come back negative.** This is the moment the test acquires the
ability, and the three conditions are the exact shape of the negative it is now
capable of returning.

## The result

| tier | n | mean MIN |
|---|---|---|
| HIGH | 3 | 0.22 |
| MID | 6 | 0.19 |
| **LOW** | 6 | **0.25** |

**No separation. And the controls are highest.**

Take the second half of that sentence slowly, because it is worse than a null
result. A null result is HIGH and LOW landing on top of each other, which says the
instrument cannot tell them apart. **This says the instrument can tell them apart
and has them the wrong way round.** The texts chosen because nothing Girardian
happens in them outscored the texts chosen because the mechanism is at its most
naked.

**Two falsification conditions fired at once:**

- **Aglauros**, a declared control, scores **MIN 1.27**, beating **every** HIGH
  text. She is a minor Athenian figure in Ovid who is turned to stone out of envy.
  **No crowd, no accusation, nobody killed by anybody**, which is exactly why it
  was put in the LOW pile before scoring.
- **Pentheus**, Girard's single most important persecution myth, scores **MIN
  0.00.**

And 0.00 is not a low score. **It is the instrument reporting that at least one
stereotype is entirely absent** from the text Girard uses to explain what all four
look like when they occur together.

## The device: two scoreboards, only one of which was written down

**Put them side by side on screen.**

| | HIGH | MID | LOW | verdict |
|---|---|---|---|---|
| **MIN**, the registered metric | 0.22 | 0.19 | **0.25** | **FAIL** |
| **SUM**, not registered | **9.08** | 6.06 | **3.52** | perfect |

> **Look at the second row.** HIGH above MID above LOW, in exactly the predicted
> order, cleanly separated, no overlap. **It is a beautiful result.**
> 
> **And it is not the metric that was written down.**

Both rows come from the same scoring run on the same texts with the same lexicon.
**Nothing separates them except which of two arithmetic operations was performed
on four numbers**, and one of those operations was named in a file committed
before any text was scored.

## What happens next is the episode

Everything in Season 2 was building toward a moment nobody plans for: **you have a
failed prediction and a beautiful unregistered result sitting next to it.**

The temptation is not to lie. Nobody in this story is contemplating a lie. **The
temptation is to notice that SUM is obviously the better metric**, which it might
genuinely be, and to lead with it, mentioning MIN somewhere lower down in a
paragraph about robustness.

And every sentence you would write while doing that is true. SUM does order the
tiers. The ordering is clean. MIN does have a known weakness, which the next
episode is about, and it is a real weakness discovered for real reasons. **You
would not have to write down a single false statement to publish this as a
success.**

> From the results file: **"Switching metrics after seeing the result is precisely
> the move pre-registration exists to prevent."**

**The sum was not claimed.** That is episode 1's real content, and it costs the
project its first result.

## The clinical anchor

**A trial whose primary endpoint fails and whose secondary endpoint is beautiful.**

Everyone knows what happens next in the literature. Everyone knows what should
happen. **The gap between those two sentences is the reason this series exists.**

And notice the specific thing that goes wrong when a secondary is promoted, because
it is not that the secondary is untrue. **It is that nobody can tell how many
secondaries there were.** One endpoint out of one is evidence. The same endpoint,
selected from twelve after the fact, is close to nothing, and the published paper
looks identical either way.

## The character anchor

**A goalkeeper in a penalty shootout who dives the wrong way and the ball hits
him.**

The save is completely real. It is in the record, it wins the match, and the
crowd's reaction is not misplaced. **What did not happen is the thing he was
being tested on**, which was reading the striker, and the only person in the
stadium who knows the difference is him.

Now give him a microphone afterwards. **Every honest description of the save is
also a description of his judgement**, because the save and the judgement are the
same event to everybody watching. He would have to interrupt his own good news to
separate them, and nobody in the room is asking him to.

**SUM is the ball hitting him.** The result is real and the project did not read
the play.

## What would count against this

1. **MIN being a bad metric.** It might be, and this is now the strongest item on
   the list. **The argument has to come from the theory rather than from the fact
   that it failed**, and Season 2 episode 12 made exactly that argument. **It also
   overstated it.** Girard's own rule, in *The Scapegoat* chapter 3, is "not all
   the stereotypes must be present: three are enough and often even two," which is
   **N-of-M and not a minimum.** So MIN is a deliberate strengthening of the source
   rather than a reading of it, and **the round you are watching fail is failing at
   a bar the theory never set.** That does not rescue the prediction, because the
   prediction was registered with MIN in it. **It does mean the failure is a fact
   about this instrument and not about Girard**, and the series should say so here
   rather than letting it look like a defeat for the theory.
2. **The tiers being wrong.** If Pentheus is not a persecution myth, the
   prediction was mis-specified rather than the instrument being blind. **Season 1 episode 15 read the play and found the accusation stereotype genuinely weak in
   it**, which is a real version of this objection.

## Handing off

**Episode 2 explains why MIN collapsed**, and the explanation is one line of
arithmetic with nothing Girardian in it at all.

## Questions

1. **The sum ordered the tiers perfectly.** Give the strongest argument for
   reporting it, then say why it loses.
2. **Aglauros is a control that scored highest.** Guess why, before you are told.
3. **Pentheus at zero.** Is that a problem with Girard, the lexicon, or the
   metric? Three very different answers.

---

— · [[S3E02 - The Arithmetic of Rare Things|The Arithmetic of Rare Things →]]
