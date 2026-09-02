---
tags: [method, failed-test, reading]
date: 2026-08-23
---

# Failed tests — reading detectors

Kept so nobody retries these. See [[Reading for the Argument]].

## A claim that was tested and failed (2026-08-23)

**The original version of this file said connectives are the skeleton of an argument, so marking them reveals its structure.** That was asserted, not checked. It got checked the same day, on six books in `~/library/theology`, measuring connectives per 1000 words:

| Text | all connectives | inferential only |
|---|---|---|
| Damascene, *De Fide* (argument) | 19.4 | 3.1 |
| Ishak, *Chalcedon* (argument) | 12.0 | 2.3 |
| Grillmeier (scholarly exposition) | **10.4** | **1.6** |
| Irenaeus (polemic) | 19.2 | 4.6 |
| **Life of St Antony (pure narrative)** | **22.3** | **4.9** |
| Agpeya (prayer) | 6.8 | 1.1 |

**Narrative came out densest, on both measures. Careful argument came out sparsest.** The claim is false as stated.

**Why it failed:** stories have causal structure too. *He fled because they came, therefore he hid.* Connectives mark a relation between two clauses of any kind. In argument they join **claims you are asked to accept**; in narrative they join **events**. The word is identical, the cargo is not, and no amount of marking tells you which you have.

**What this costs:** Pass 1 is demoted from a detector to a discipline. It does not find the argument. Keep it only for the thing it can actually do, which is force you to slow down and notice that a text has joints at all. That is worth something to you specifically, but it is a training wheel, not an instrument. **Do not trust it to tell you where the argument is.**

### Test 2, also failed

Replacement candidate: **move markers**, sentences where the author announces what he is doing (*we will reason, someone will object, let us resume, we have shown*). Reasoning: the Damascene proof's real turn is "But with those that do not believe in the Holy Scriptures **we will reason**", which no connective marks.

Result per 1000 words: Damascene 1.51, Irenaeus 1.10, Ishak 1.08, Grillmeier 1.00, **Life of Antony 1.61**. Narrative on top again.

### The flaw in both tests

*Life of St Antony* is **not a clean narrative control.** It contains Antony's long discourse to the monks and his disputes with demons, which are sustained argument inside a narrative frame. The control was contaminated and three tests were run against it before that was noticed. Any future version of this test needs a genuinely non-argumentative control.

### The conclusion, which is the real finding

**There is no lexical shortcut. Stop looking for one.**

Three surface-feature detectors were tried and all three failed. That is not bad luck with regexes. It is because whether a sentence is part of an argument depends on whether it is **asking for your assent**, and that is a fact about meaning, not about vocabulary. The same sentence, word for word, is a premise in one text and a plot point in another.

So the reason you cannot find argument structure is **not** that you are missing a marker set that other people have. Nobody has one. Highlighting cannot be made to do this job, and any study method that promises otherwise is selling you Pass 1 forever.

**What survives, and it is the whole method anyway:** Pass 2. It is a semantic operation, so it never needed a detector. See below.

---

