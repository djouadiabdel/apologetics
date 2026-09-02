---
season: 4
episode: 10
title: "Writing the Rules for a Test You Already Know the Answer to"
words: 1100
minutes: 8.1
character_anchor: "Rebuilding a lost level from speedrun footage"
clinical_anchor: "Back-calculating a dose from a drug level"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-4
---

> [!info] S4E10 · 1100 words · ~8.1 min · [[Season 4 - The Repairs — Index|season index]]
> **Generated from `Research/Season 4 — The Repairs.md`. Edits here are overwritten.**

# Writing the Rules for a Test You Already Know the Answer to

[[S4E09 - A Number with No Script Behind it|← A Number with No Script Behind it]] · [[S4E11 - Forty-Eight Reconstructions|Forty-Eight Reconstructions →]]

---
## The stake

Rebuilding toward a known answer, with the rules written first. **The mechanics
and the ethics of a test that cannot come out either way**, and why you run it
anyway.

## Collecting episode 9

The strongest number in the four-bucket track has no script behind it. Rebuilding
is the only response that can come out either way, and rebuilding toward a known
target is how you get agreement without earning it.

## The problem, stated exactly

You are going to write a script. You know it must produce **p = 0.0045**. You
have four or five decisions to make that the record does not fix, and every one
of them has a defensible answer in both directions.

**Nobody has to cheat for this to go wrong.** You make a choice, the number comes
out at 0.31, you think "that cannot be right", you look again at your phrase
handling, you find something arguable, you change it, and the number moves. Every
step was a real thought about a real ambiguity.

And the asymmetry is the whole mechanism, so name it. **When the number comes out
near 0.0045 you stop looking.** When it comes out at 0.31 you keep looking, and
looking longer finds more, because there genuinely are more ambiguities to find.

> **The bias is not in any decision. It is in how long you search before
> accepting an answer**, and search effort is invisible in the final write-up.
> Nobody records how many times they re-read their own code, and a script that
> was checked once looks identical to one that was checked eleven times.

> **This is Season 2 episode 7 again in a new setting.** Five true statements,
> a defensible chain, and a result at the end of it that nobody would call
> cheating.

## The device: the grid, and why it is the answer

Instead of choosing, **enumerate.** Every free parameter gets every plausible
value, and the script runs all combinations.

| free parameter | values |
|---|---|
| corpus state | 2 |
| matching procedure | 2 |
| frequency pool | 2 |
| **phrase handling** | **2** |
| seed | 3 |
| | **48 configurations**, 2000 draws each |

**The seed needs a sentence, because it is the row that looks like padding and is
not.** A computer's random numbers are not random. They come from a formula
started off by one number, the **seed**, and the same seed always produces the
same sequence. That is what makes a study with randomness in it reproducible at
all: quote your seed and anybody re-running your script gets your exact draws
back.

> So varying the seed three ways asks a specific question. **Would this result
> have looked different if the dice had fallen differently?** If p moves when
> only the seed changes, the finding was luck. Across all twenty-four
> unigrams-only configurations it does not move, and that is a real part of
> why the reconstruction is trusted.

**You cannot tune a grid toward a target.** There is no single answer to nudge.
Either the configurations agree or they do not, and their disagreement is itself
the finding.

That is the move worth stealing, and it generalises well beyond this project.
**When you cannot justify a choice, do not make it.** Run every version and
report the spread, and the ambiguity stops being a threat to the result and
becomes a measured property of it.

It also changes what a failure means. A single reconstruction that disagrees with
the target tells you almost nothing, because it might be your one bad choice.
**Forty-eight reconstructions that disagree tell you the target is wrong**, and
forty-eight that agree tell you the choices never mattered.

## The verdict rule, fixed before the run

This is the part that makes it a test rather than an exercise.

| outcome | verdict |
|---|---|
| all 48 give p < 0.05 **and** the observed separation matches | **REPRODUCED** |
| the grid straddles 0.05 | **UNSTABLE**, and **p = 0.0045 cannot be cited** |

Plus one more sentence, which is the one doing the real work:

> **No configuration may be selected as the correct reconstruction after the
> fact.**

Without that, UNSTABLE is worthless. Twenty-four configurations agreeing with
your target is an invitation, and the sentence closes it before anybody sees the
grid.

Picture the version where it is missing. The grid comes back split. You look at
the twenty-four that agree and notice they share a parameter setting. You then
write a paragraph explaining why that setting is the principled one, **and the
paragraph is good**, because there is always a principled-sounding case for a
technical choice.

> **The rule does not stop you making that argument. It stops the argument
> counting as a reproduction**, which is a different and much narrower
> restriction, and it is the only one that can be enforced from outside.

## The character anchor

**Rebuilding a lost level from speedrun footage.**

The video shows what the level did. It does not show the code. So you rebuild it,
and you keep comparing your version against the tape, and every time it diverges
you adjust.

**Eventually your level matches the tape perfectly, and you have learned
nothing**, because you fitted it. The only version of this that teaches you
anything is building fifty variants by rule and asking how many of them could
have produced that tape.

And the fitted version feels like success the entire time. Every adjustment is a
genuine improvement in the match, every session ends closer than it began, and
the finished level is **indistinguishable from a correct reconstruction** by
anybody who was not in the room. Including you, a month later.

## The clinical anchor

**Back-calculating a dose from a drug level.**

The patient has a level. You know the drug, roughly the timing, not the exact
dose or the exact time given. You can produce a dose that fits, and you can
produce several, and the honest output is not a dose. **It is a range, plus a
statement of which unknowns the range is most sensitive to.**

Reporting a single number here is not more precise. It is less honest.

## What would count against this

1. **48 not being enough.** The grid covers the parameters somebody thought of.
   **A free parameter nobody listed is invisible to this method**, and there is
   no way to know how many there were.
2. **The plausible ranges being chosen by the same person.** Every value in that
   table is a judgement. A grid built from generous ranges is a grid that will
   straddle anything.
3. **UNSTABLE being unfalsifiable in practice.** If a straddle means "cannot be
   cited", and a straddle is likely for any complex reconstruction, **the rule
   may simply forbid all reconstruction.** Episode 11 is where that gets tested.

## Handing off

**Episode 11 runs the grid.** The verdict is UNSTABLE, and then the grid does
something nobody designed it to do.

## Questions

1. Write the fourth row of the verdict table: what if 47 of 48 agree?
2. **The grid cannot see unlisted parameters.** Suggest a procedure that could
   detect one, even roughly.
3. Is a range with its sensitivities a weaker claim than a point estimate, or a
   stronger one? Answer before episode 11.

---

[[S4E09 - A Number with No Script Behind it|← A Number with No Script Behind it]] · [[S4E11 - Forty-Eight Reconstructions|Forty-Eight Reconstructions →]]
