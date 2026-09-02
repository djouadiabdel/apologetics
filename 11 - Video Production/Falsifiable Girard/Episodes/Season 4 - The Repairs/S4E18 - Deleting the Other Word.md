---
season: 4
episode: 18
title: "Deleting the Other Word"
words: 1130
minutes: 8.4
character_anchor: "A fuel gauge that only has a warning light"
clinical_anchor: "A pass-fail threshold on a test that reports a value"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-4
---

> [!info] S4E18 · 1130 words · ~8.4 min · [[Season 4 - The Repairs — Index|season index]]
> **Generated from `Research/Season 4 — The Repairs.md`. Edits here are overwritten.**

# Deleting the Other Word

[[S4E17 - Deleting the Word|← Deleting the Word]] · [[S4E19 - What Six Repairs Bought|What Six Repairs Bought →]]

---
## The stake

The `death` deletion, with the mechanism predicted exactly: the metric binds on
the smallest bucket. **The falsifier fires while everything else works as
predicted**, which is the most instructive shape a result can have.

## Collecting episode 17

`king` is 49.6% of the `marks` bucket. Deleting it moved nothing the project rests
on, and the prediction that failed was the informative one: the word is
proportionally **more** load-bearing in bare mythography than in tragedy.

So the lesson looks settled. **A dominant word is an alarming number and not a
problem.** This episode is that lesson being wrong.

## The other dominated bucket, flagged in July and never touched

`crisis` is **60% the single word `death`.** Season 1 episode 4 said out loud that
nothing in the project ever ran the equivalent test on it, across eight rounds.

Same shape as `king`. Same kind of edit. And there is a reason, written down
before scoring, to expect the opposite outcome.

## The device: which bucket is MIN actually standing on

**MIN takes the smallest of the four bucket rates.** So a bucket can only affect
MIN when it is the smallest one. Put the means next to the count of texts each
bucket binds on:

| bucket | mean rate | texts where it IS the minimum |
|---|---|---|
| crisis | 2.07 | **9** |
| **crimes** | **0.95** | **62** |
| marks | 2.90 | **2** |
| violence | 4.76 | **0** |

**Read the `marks` row and round 9 stops being mysterious.** `marks` was the
binding bucket on two texts out of seventy-three. Deleting half of it was
guaranteed to be nearly inert, and **that was a fact about arithmetic rather than
about the word.**

Now do the projection. `crisis` at 2.07 loses 60% and lands near **0.83**, which
is **below `crimes` at 0.95.**

> So `crisis` should stop being the second-smallest bucket and start being the
> smallest one, across a large part of the corpus. **The pre-registration
> predicted it would bind on more than thirty texts.**

## What came back

**It binds on forty-four.**

| bucket MIN binds on | before | after |
|---|---|---|
| **crisis** | **9** | **44** |
| crimes | 62 | 29 |
| marks | 2 | 0 |

The mechanism is confirmed exactly. And then the round fails.

## The falsifier fired, and it fired on the measurement

The registered prediction was that MIN would fall. The check used was **the share
of texts with non-zero MIN**, which is the check round 2 used, and it came back:

```
MIN non-zero:   90.4%  ->  90.4%
```

**Not a tenth of a point.** By the letter of the falsifier the whole structural
argument is dead.

**It is not dead. The measure cannot see the damage.**

| MIN, measured properly | before | after |
|---|---|---|
| **mean** | **0.876** | **0.566** |
| median | 0.818 | 0.515 |
| texts at exactly zero | 7 | **7** |

**A third of the metric is gone.** 35.4% of its mean value, and the check that
certifies the metric reports nothing.

Work out why, because it is the transferable part and it takes one sentence to
see once you have it. **MIN non-zero asks whether the smallest bucket is above
zero.** That is a yes-or-no question about a boundary. A text scores zero only if
some bucket has **no hits at all**, and deleting `death` did not empty any bucket
on any text. Crisis still fires 594 times across the corpus.

So every text that was above zero before is still above zero. **The seven that
were at zero are the same seven.** Nothing crossed the line the check watches,
and the check has no opinion about anything that does not cross it.

Crisis did not vanish. **It got small**, on forty-four texts, and small is
invisible to a test for empty.

> **This is round 2's P6 being a check that cannot fail.** It exists to confirm
> MIN carries information, it passed at 90.3%, and it is **structurally unable to
> detect the largest change ever made to the metric it validates.** It moves only
> at a cliff, and everything that matters happens on the slope.

## The comparison the season was built for

| deletion | share of its bucket | MIN mean before | after | fall |
|---|---|---|---|---|
| `king`, round 9 | 49.6% | 0.876 | 0.873 | **0.3%** |
| **`death`, round 10** | **61.9%** | 0.876 | **0.566** | **35.4%** |

Two words, comparable shares of their buckets, roughly a hundredfold difference in
what removing them does. **Not because one word matters more.** Because of where
its bucket sits relative to the other three.

That is worth stating as a rule, because it generalises past this instrument.

> **A component's importance is not its size. It is whether it is the one your
> metric is currently standing on.** `marks` was 2.90 per thousand and mattered
> almost not at all. `crisis` was 2.07 and mattered enormously. The larger
> bucket was the irrelevant one.

And notice what that does to the audit you would have run. Ranking the four
buckets by how dominated they are by a single word puts `crisis` at 60% and
`marks` at 49.6%, which makes them look like two instances of one problem.
**They are not the same problem and the ranking cannot tell.** You have to know
which bucket the metric binds on, and nothing in the record recorded that until
this round computed it.

## And the thing that survived both

| | tier separation |
|---|---|
| before any deletion | **+1.69** |
| after deleting `king` | +1.56 |
| after deleting `death` | **+1.41** |

The named tier separation, round 2's only cleanly passing prediction, loses **9.4%**
across a deletion that removed a third of MIN. **Two independent amputations and it
holds**, which is the strongest thing anyone has said for that result.

## The clinical anchor

**A pass-fail threshold on a test that reports a value.**

The lab flags potassium as abnormal outside a range. A patient drifting from 4.0
to 3.6 is flagged as normal at both ends, and the flag has told you the truth
twice while the thing you cared about moved.

**The flag is not wrong. It is answering the question it was given**, and the
question was a boundary rather than a trend.

## The character anchor

**A fuel gauge that only has a warning light.**

The light is honest. It comes on when the tank is nearly empty, and it has never
lied to anybody. Drive from full to a quarter and it stays off the entire way,
correctly.

**You have lost three quarters of your fuel and the instrument's report is
unchanged**, and nobody would call the light broken, because the light was never
a gauge.

## What would count against this

1. **The 35.4% not mattering.** MIN falling by a third changes no verdict in the
   record, because nothing in rounds 1 to 3 was near a threshold. **True, and it
   is the reason this is a finding about the check rather than about a result.**
2. **P6 being fit for its stated purpose.** It was written to show MIN is not
   saturated at zero on short texts, and it does that. **The objection is that it
   is quoted as though it validates MIN generally**, including in this series.
3. **My prediction being the actual failure.** It was. D2 and D5 both used the
   non-zero share, so **the round failed by inheriting exactly the defect it
   found**, and that is reported rather than tidied.

## Handing off

**Episode 19 closes the season** and adds up six repairs, of which two were
inert, one was mis-measured by its own author, and one worked.

## Questions

1. **Before episode 19:** `violence` binds MIN on **zero** texts. Predict what
   deleting `blood` from it would do, and say why you are now confident.
2. Design the replacement for P6. What would it measure, and what would make it
   fail?
3. Every "MIN non-zero" figure in the record is weaker than it reads. **Go and
   find the ones this series has quoted**, and decide which need a caveat.

---

[[S4E17 - Deleting the Word|← Deleting the Word]] · [[S4E19 - What Six Repairs Bought|What Six Repairs Bought →]]
