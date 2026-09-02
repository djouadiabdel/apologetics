---
season: 2
episode: 7
title: "Corpus Craft IV: The Sample is Part of the Claim"
words: 1519
minutes: 11.3
character_anchor: "Walter White, and specifically the early decisions rather than the late ones"
clinical_anchor: "Post-hoc exclusion criteria"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-2
---

> [!info] S2E07 · 1519 words · ~11.3 min · [[Season 2 - Building Something That Can Say No — Index|season index]]
> **Generated from `Research/Season 2 — Building Something That Can Say No.md`. Edits here are overwritten.**

# Corpus Craft IV: The Sample is Part of the Claim

[[S2E06 - Corpus Craft III What Counts as One Word|← Corpus Craft III: What Counts as One Word]] · [[S2E08 - Lexicon Craft I Why There is No Stemming|Lexicon Craft I: Why There is No Stemming →]]

---
## The stake

This is the episode to send to a friend who likes detective stories, because it
needs no theory at all. A bug is found that would have turned a failed prediction
into a passing one, and every single step that hid it was defensible. **None of
it felt like cheating, which is exactly what makes it dangerous.

**This is the strongest episode in the season and probably in the series.** It is
also the one to open the whole channel on, because it needs no theory at all.

## Collecting episodes 5 and 6

The file is the whole file and the tokens are right. **Two bugs found, both of the
quiet kind**, both producing plausible output rather than an error.

This episode is a third thing of the same shape, and it is the worst one, because
**nothing about it is a bug at all.** Every step is correct.

## The situation, told as a story

**July.** A prediction has already failed and the failure is published. The
prediction was that mythography would score **lower** than tragedy, because the
theory says myth conceals the mechanism and tragedy half-exposes it. **It lost by
0.04**, which is nothing at all, and a loss by nothing is still a loss and was
reported as one.

Weeks later, while fixing the truncated-play bug from episode 5, the audit turns
up something else. **A page of a text that the fetcher had missed entirely.**
Real, legitimate, part of the corpus, simply never downloaded. Nobody left it out.
A script did not follow a link.

**And the missing page belongs to the genre that won.**

## The device: five true statements

**Put these on screen one at a time and ask the audience to reject one.**

1. The page really is part of that text.
2. The fetcher really did have a bug, and the bug is now fixed.
3. Fixing bugs in your data pipeline is **what you are supposed to do.**
4. The corrected corpus is **more accurate** than the one you scored.
5. Therefore rescore with the corrected corpus.

> **Every single statement is true. Every one is what a careful person does.**
> **Which one do you reject?**

Now go along the row and try each rejection out loud, because the audience needs
to feel the trap close rather than be told about it.

**Reject 1** and you are claiming a page of Diodorus is not part of Diodorus.
**Reject 2** and you are pretending a bug you found and fixed was not a bug.
**Reject 3** and you have adopted the position that data pipelines should be left
broken, which nobody holds. **Reject 4** and you are saying the corpus missing a
page is the more accurate one, which is simply false.

Four of the five are unrejectable. **And here is what happens when you follow all
five:**

```
MYTHOGRAPHY  13.95  ->  13.67        vs   TRAGEDY 13.88

prediction:    FAIL  ->  PASS
```

**A failed prediction becomes a passing one.**

## And the sentence that is the whole episode

From the correction file, written by the person it happened to:

> "It would have been **entirely defensible as a bug fix**, and it is exactly the
> move pre-registration exists to make impossible."

And then:

> **"None of it felt like cheating."**

**Sit on that.** Not "I was tempted and resisted." Not "I noticed what I was about
to do." **The step did not register as a temptation at all**, because every link
in the chain is a link you are supposed to follow, and the person following them
was doing maintenance rather than analysis.

That is why the usual defences are worthless here. Integrity does not help,
because nothing presented itself as a choice about integrity. Care does not help,
because the whole sequence **is** care. **Being the kind of person who fixes bugs
is precisely what walks you into it.**

> **That is what Season 2 episode 3 meant by "the shaping is invisible from the
> inside."** This is what it looks like when it happens.

## The character anchor

**Walter White, and specifically the early decisions rather than the late ones.**

There is no scene in which he chooses to become a criminal. **Every individual
step is a reasonable response to the situation the previous step created**, and
each one is the sensible move for a man in that position at that moment. Ask
somebody to point at the decision that did it and they cannot, because there
isn't one. There is a chain, and every link is locally defensible.

**The five statements are that chain, compressed into one afternoon.** The
difference is that in the show the audience can see where it goes, and in a
research project nobody can, because the destination is just a number that came
out slightly different.

## What was actually done

The page was fetched. **It is on the disk. It is excluded from the analysis.**

And it stays excluded, permanently, from this round. It is available **only to a
future round whose predictions are committed before it is scored.**

So the resolution is to reject statement 5, and only statement 5, and only for
this round. **Notice how strange that is.** You knowingly compute your headline
number on a corpus you have already established is missing a page, while holding
the corrected corpus on the same disk. **The instrument is deliberately kept less
accurate than it could be**, and it is the right call, and nothing about it feels
right while doing it.

**And a rule was written that had not existed before:**

> **The sample is part of the registration, not just the instrument.**

Everyone knows you cannot change your hypothesis after seeing the data. **Far
fewer people know you cannot change your data either**, and this is why. The
lexicon was frozen, the metric was frozen, the predictions were frozen, and the
corpus was left as the one live variable in a system built entirely out of frozen
ones.

## The clinical anchor

**Post-hoc exclusion criteria.**

A trial where the eligibility rule is refined after the interim look. **Every
individual refinement is medically reasonable.** Each one has a paper behind it,
each was proposed by somebody competent for a stated clinical reason, and the
refined population is genuinely the one the drug is for.

And the trial is dead anyway, and everybody in the field knows it is dead, and
**nobody can point at the specific decision that killed it.** That is the
signature. A trial killed by one bad decision can be discussed. This kind is
killed by a sequence in which every element is defensible, so the argument about
it never reaches a conclusion and the result simply stops being cited.

## And now the uncomfortable follow-up, which belongs here and not in a later season

That rule was written in July. **Two weeks later the same project broke it.**

A minimum text length of 800 words had been declared, and had explicitly excluded
three short texts by name. The round-4 sample file **contains no length rule at
all**, and those three texts are back in.

| text | words | round 2 | round 4 |
|---|---|---|---|
| `hyginus_fabulae_2` | 613 | **excluded** | in |
| `hyginus_fabulae_3` | 689 | **excluded** | in |
| `hyginus_fabulae_4` | 777 | **excluded** | in |

Recomputed effect: the myth median moves 0.547 to 0.561, one counterexample count
goes 7 to 6. **No verdict changes.**

> **And that is exactly the point.** The discipline is not "did it matter." It is
> **"was it declared."** A rule that only binds when somebody is watching is not a
> rule, it is a habit, and habits lapse in fourteen days.

Put the two halves of the episode next to each other, because together they say
something neither says alone. **In July the project refused a change that would
have helped it, at real cost, on principle.** In August the same project silently
dropped a rule it had written itself, in a way that happened to be harmless, and
nobody noticed for weeks.

The same person, the same repo, two weeks apart. **So the July refusal was not a
character trait**, and treating it as one is the mistake. It held because it
arrived as a visible decision with a written rule attached. The August lapse
happened because nothing arrived at all.

**Which is the refrain, in its most concrete form.** A rule that depends on your
remembering it is a check that cannot fail, and a check that cannot fail prints
reassurance. The length rule was in a document. It was not in the code.

## What would count against this

1. **The Diodorus exclusion being superstition.** A real argument exists: the page
   belongs, excluding it makes the corpus knowingly wrong, and pre-registration
   should not force you to publish a number you know is inaccurate. **Make that
   argument at full strength before rejecting it.**
2. **The length-rule lapse being harmless because nothing moved.** Also arguable.
   **Argue it, then notice that you can only say it moved nothing because somebody
   checked afterwards**, which is not available in advance.

## Handing off

The corpus is fixed, frozen, and its rules are written down.

**Episodes 8 to 10 turn to the other half: the word-lists**, and to the day
somebody nearly repaired one to make a failing prediction pass.

## Questions

1. **Which of the five statements do you reject?** You must reject one. Say which
   and why.
2. Is the Diodorus exclusion the right call, or superstition? **Argue both sides
   before answering.**
3. The length rule lapsed and changed nothing. **Better, worse, or neither?**
4. **Name a mechanism that would catch a lapsed rule.** Not "be more careful."

---

[[S2E06 - Corpus Craft III What Counts as One Word|← Corpus Craft III: What Counts as One Word]] · [[S2E08 - Lexicon Craft I Why There is No Stemming|Lexicon Craft I: Why There is No Stemming →]]
