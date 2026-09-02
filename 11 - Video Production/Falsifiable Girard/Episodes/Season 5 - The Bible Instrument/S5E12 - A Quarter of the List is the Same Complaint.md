---
season: 5
episode: 12
title: "A Quarter of the List is the Same Complaint"
words: 1056
minutes: 7.8
character_anchor: "A Steam review bombing"
clinical_anchor: "The same patient counted three times in an audit"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-5
---

> [!info] S5E12 · 1056 words · ~7.8 min · [[Season 5 - The Bible Instrument — Index|season index]]
> **Generated from `Research/Season 5 — The Bible Instrument.md`. Edits here are overwritten.**

# A Quarter of the List is the Same Complaint

[[S5E11 - Nine Gates|← Nine Gates]] · [[S5E13 - What a Rescue Costs|What a Rescue Costs →]]

---
## The stake

A quarter of the accusers' list is the same complaint recounted. **Deduplication
is where judgement enters**, and this episode shows the price list being built
before the judgements are made.

## Collecting episode 11

Nine gates, ordered, with the two most judgement-heavy flagged in advance and a
falsifier set on their share. Before any of them are applied there is arithmetic
to do, and it is the most checkable finding in the layer.

## The funnel

671 raw allegations arrive from the three compilations. Then:

**671 to 210.** Most entries allege a conflict between a New Testament text and
something else, usually the Old Testament, or a fact about the world, or a
doctrine. Only **210** allege a contradiction between two New Testament texts,
which is the question this study asked. The rest are a different study and are set
aside rather than dismissed.

**210 to 198.** Exact duplicates removed, where the same entry appears in two
compilations word for word.

**198 to 153.** Near-duplicates removed, where the same underlying
proposition-pair is alleged in different words. This is the step requiring
judgement, and every merge is logged.

## The finding, and it is about the accusers rather than the texts

**57 of 210, which is 27%, are the same complaint counted again.**

More than a quarter of the objections in the aggregated hostile literature are
restatements. Not weak objections, not wrong ones. **The same objection, arriving
repeatedly, counted each time as though it were new.**

> That is a fact about how these lists are built, and it is checkable by anybody
> who downloads the same data. It does not require trusting the coder, the gates,
> or anything else in this season.

## Why it matters more than it looks

Because the impressive thing about these lists is their **length**. The rhetorical
force of "671 contradictions" is entirely in the number, and nobody quoting it has
ever divided it by anything.

The funnel shows what the number is made of. Two thirds are not NT-internal at
all. A quarter of what remains is repetition. **And none of that involves deciding
whether a single allegation is any good**, which has not started yet.

That last sentence is the one to hold, because it is what makes this episode
different from everything after it.

Nothing so far requires you to trust the coder about anything. The category test
is close to mechanical. The exact dedupe is string matching. **A hostile reader can
download the same three lists and reproduce 671 to 210 to 198 without agreeing
with a single opinion in this season.**

> Which is why the funnel is reported before the gates, in that order, in the
> results file. **The arithmetic that survives distrust goes first**, and the
> judgement that does not goes after, so a reader who stops halfway has still
> been told something true.

## Granularity, and the honest problem inside it

The merge from 198 to 153 requires deciding when two allegations are the same
allegation, and that decision has a direction.

**Merge aggressively and the list shrinks**, which flatters the defence. **Merge
conservatively and it stays long**, which flatters the accusers. There is no
neutral setting, and the coder benefits from one of them.

The study's response is to log every merge in a separate file, so the decisions
are inspectable individually rather than presented as a total. That is the right
response and it is not a solution: **a reader who does not open the log is
trusting the coder**, and almost no reader opens the log.

It is worth being honest about what a log actually accomplishes, because
"everything is documented" is a phrase that gets used as though it settled
something.

A log does not make a decision correct. **It makes it attackable**, which is a
smaller thing and the only thing available. Somebody who thinks the merges were
too aggressive can now point at merge number 31 and argue about that specific
pair, rather than making a general complaint that cannot be answered.

> **The value of transparency is not that it prevents error. It is that it
> converts a dispute about character into a dispute about item 31**, and disputes
> about item 31 can terminate.

## The device: the funnel, and where judgement enters

| step | from | to | judgement |
|---|---|---|---|
| NT-internal only | 671 | 210 | **almost none**, a category test |
| exact dedupe | 210 | 198 | **none**, string matching |
| near dedupe | 198 | **153** | **real, and logged item by item** |
| the nine gates | 153 | 51 | **maximal, and a falsifier fires here** |

**Read the judgement column downward.** The study becomes less trustworthy as you
go down it, and it reports the numbers in that order so a reader can stop wherever
they lose confidence. **Everything above the last row is close to arithmetic.**

## The clinical anchor

**The same patient counted three times in an audit.**

One admission, three specialty referrals, three entries in the dataset. The audit
reports three cases of delayed review, and the board hears a number three times
larger than the event.

**Nobody falsified anything.** Each entry is a real referral with a real delay. The
unit of counting was never defined, and a number without a defined unit is not a
measurement, however carefully it was collected.

## The character anchor

**A Steam review bombing.**

Ten thousand negative reviews arrive in a day. Some are from people who played the
game. Many are copies of the same sentence, posted by people repeating a
complaint they read somewhere else.

**The complaint underneath may be entirely fair.** The count is not evidence about
the game, it is evidence about how many people repeated one thing, and the two get
conflated because a big number feels like a lot of independent judgements.

## What would count against this

1. **Repetition being legitimate.** If three compilers independently noticed the
   same problem, that is convergence rather than padding, and merging them hides
   it. **A fair point**, and it argues for reporting both numbers, which the study
   does.
2. **The near-dedupe being self-serving.** It shortens the accusers' list by a
   step the defender controls. The log exists precisely because this objection is
   correct in principle.
3. **671 to 210 discarding the strongest items.** The NT-versus-OT stratum is 190
   items and is **unscored.** That is not a small omission and the study says so.

## Handing off

**Episode 13 is the cost scale**, which is what happens to the 51 items that
survive the gates, and it is the instrument that eventually costs this project a
doctrine.

## Questions

1. 27% duplication. **Does that make the list weaker, or does it show three
   compilers converging?** Both readings are available.
2. Design a dedupe rule that a hostile reader would accept in advance.
3. **Before episode 13:** an allegation survives the gates. What are the possible
   verdicts, and how many do you need?

---

[[S5E11 - Nine Gates|← Nine Gates]] · [[S5E13 - What a Rescue Costs|What a Rescue Costs →]]
