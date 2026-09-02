---
title: Turning Four Sentences Into Code
series: Falsifiable Girard
post: 4
tier: standard
status: drafted, unreviewed
drafted: 2026-08-17
sources: S2E8-E13, lexicon.py, RESULTS-2.md, PREREGISTRATION-2.md
---

Girard names four marks the persecution mechanism leaves in a text. To measure them you need word lists, a way to count, and a way to turn four numbers into one.

Every one of those three steps is a decision about the theory disguised as a technical detail. This post is the three decisions.

## Why there is no stemming

Every tutorial tells you to stem. Reduce words to their roots so `murder`, `murders` and `murdered` all count once. One line of code, standard practice, obviously correct.

This project refused it entirely. No prefix matching anywhere.

Here is why, from the actual corpus.

| you stem | you also catch | how many times |
|---|---|---|
| `rend-` | render, rendered, rendering | 28 |
| `stone-` | stone the material, a stone wall, a stone tomb | 211 |
| `torn-` | tornado | |
| **`tear-`** | **tears, which is weeping** | **441** |

Read the last row slowly. The bucket exists to catch a body being torn apart by a crowd. Stemming hands it four hundred and forty-one instances of people crying.

> [FIGURE 1. Four stems as funnels. Each funnel has the intended catch drawn small and the accidental catch drawn to scale. The `tear-` funnel's accidental catch should be visually overwhelming. Scale is the argument.]

And the deep problem is not the size of the error. It is the direction.

Weeping clusters in exactly the passages where a violence bucket is supposed to fire. Grief and killing occur in the same scenes. So the error is not noise scattered evenly across the corpus, it is a signal shaped like the thing being hunted.

>> **A big random error is a problem you can see. A correlated error of any size is a result you cannot tell from a discovery.**

The clinical name for what a stemmer has is excellent sensitivity and terrible specificity. The character version is Drax, taking every phrase at its surface and processing it perfectly. Letters go in, the suffix rule applies, and the meaning was never involved.

So every concept lists its surface forms explicitly. `tear_apart` is exactly the strings that mean tearing apart, written out by hand.

| | explicit lists | stemming |
|---|---|---|
| false positives | few, each one traceable | many, and invisible |
| false negatives | **many.** Any form you forgot is silently missed | few |
| auditable | **yes.** Open the file and read it | no |
| effort | high | one line |

That is a trade and it should be presented as one. Explicit lists are not more accurate. They swap a loud checkable error for a quiet uncheckable one, and in a project whose entire defence is *go and check*, that is the right swap.

## Deleting 960 hits from your own instrument

Then I went through the lexicon deleting.

| removed | hits it was contributing | why |
|---|---|---|
| bare `cast`, `drive`, `driven` | **749 combined** | "cast a glance", "driven by the wind" |
| `tears`, `tearful` | **462** | weeping |
| bare `stone`, `stones` | **211** | a stone wall, a stone tomb |
| `render`, `rendered` | 28 | not rending |
| `ravishing` | | almost always "ravishing beauty" here |

Roughly 960 hits deleted from an instrument whose author wanted the numbers to come out a particular way.

That is the strongest evidence in the whole project that the lexicon was not tuned, and it is a kind that cannot be faked. You can claim you were careful. You cannot claim you deleted 960 hits from your own case unless the file shows it.

The rule that came out of it is a claim about English rather than about Girard. **The bare verb is noise. The verb plus its particle is the concept.** Claims like that decide results far more often than anybody admits.

And one honest hole, flagged rather than closed. Whether those 960 hits fell evenly across the corpus or disproportionately onto the control texts was never measured. If they fell on controls, deleting them is tuning wearing the costume of restraint.

## The refusal

Then the *Bacchae* failed.

Girard's own central example, the play where a crowd tears Pentheus apart, came back mid-table. The obvious repair was sitting in the project's own next-steps file: add dismemberment vocabulary to the `crimes` bucket so it catches him.

It was refused, and the reason is not statistical.

>> In Girard the crime stereotype is **what the victim is accused of.** The tearing is **what the mob does.** Tearing belongs in violence. Putting it in crimes would have corrupted the bucket to pass a test.

The instrument was one line of reasoning away from being repaired to make its own failing example pass. What stopped it was a definitional distinction. Not a number.

The two fake rules in *Death Note* are the exact shape of what was avoided. A rule added to the notebook, in the same hand, on the same page, indistinguishable from the real ones once written. A lexicon is a rulebook, and it carries no record of when a line was added.

## The first number, and what it throws away

$$ r = 1000 \times \text{hits} / \text{total words} $$

Hits per thousand words. Prevalence, which is cases over population, and everybody already knows why the denominator matters. A bigger hospital has more infections and is not dirtier. A batting average divides by opportunity and nobody has ever needed that explained.

So the rate is the correct instinct correctly applied. This section is about what the correct instinct costs.

Take the *Bacchae*. Seventeen thousand words. Cut it into individual words, put them in a bag, shake it, pour them out in whatever order they come.

Now score it.

>> **The number is identical. To the last decimal place.**

Not close. Identical, and not as a limitation of the implementation. It follows from the arithmetic with no room for anything else. The numerator counts hits and shuffling creates no hits. The denominator counts words and shuffling creates no words. Both terms depend on which words are present and on nothing else.

The rate cannot tell Euripides from a bag of the same words.

>> **A rate treats a text as a bag of words.** So it can never test a claim about **where** something happens, **when**, or **what it happens near.**

Sit with what is inside the word *order*, because it sounds small. Order is adjacency, sequence, scene, episode. What happens next, and to whom, and what one passage does to the one after it. Order is the whole of narrative, and a rate discards all of it in a single division.

And Girard's claim, from post 2, is that four stereotypes converge on **one passage**.

His claim is about a moment. A rate cannot represent a moment.

That mismatch causes every major failure in this project. Not a bug, not a bad word list, not too small a corpus. The instrument and the claim are about different kinds of thing, and no amount of extra data repairs it. A hundred more texts improve the precision of a quantity that does not contain the claim.

There is a second cost, subtler. A rate rewards density of event. Mythography runs **28.65 neutral event-words per thousand** against 21 to 23 for everything else, because Apollodorus is a handbook. He records what happened and drops everything a poet puts around it. Strip the lyric out of a text and its rate rises without a single new event being described.

None of which makes the rate worthless. It is the correct instrument for any question about **how much**. It has no free parameters. Two people scoring the same text get the same number to the last decimal, and that transparency is worth a great deal.

>> The problem is not that the rate is a bad measurement. **It is a good measurement of the wrong quantity**, and those two failures look identical from inside the spreadsheet.

## Adding up against all four at once

Four numbers per text. You have to get to one, because you cannot rank texts or test a prediction against a quadruple.

$$ SUM = r_{crisis} + r_{crimes} + r_{marks} + r_{violence} $$
$$ MIN = \text{the smallest of the four} $$

SUM is accumulation. A text scores high by having a lot of any of it, and one enormous bucket carries the other three. Call that property by its name: **SUM is compensatory.** Strength in one place pays for absence in another and the total does not record which happened.

MIN is conjunction. A text scores only as high as its weakest stereotype. Drench a text in violence with no accusation anywhere and it scores zero.

| | crisis | crimes | marks | violence | **SUM** | **MIN** |
|---|---|---|---|---|---|---|
| Text A | 2.0 | 2.0 | 2.0 | 2.0 | **8.0** | **2.0** |
| Text B | 0.0 | 0.0 | 0.0 | 8.0 | **8.0** | **0.0** |

> [FIGURE 2. The two texts as four-segment bars. Identical total length, wildly different shape. The SUM readout identical under both, the MIN readout different. One glance should carry it.]

Identical on SUM, as different as two texts can be on MIN. Text A has all four stereotypes at once. Text B is a battle scene with no victim, no accusation and no crisis in it anywhere.

The table contains no information beyond the four columns. Both metrics see identical inputs, and everything separating the two verdicts happens in the choice of operation.

The clinical version is criteria requiring N of M against criteria requiring all of them. SIRS needs two of four and catches everything that walks through the door. A definition requiring all four is specific and misses cases. Neither is wrong. The question is never which is better, it is what the label is for.

MIN was chosen on theory alone, before any data recommended it.

If four stereotypes are four traces of one mechanism, then a text with three and not the fourth is evidence **against** the mechanism. Not weak evidence for it.

>> **MIN is the algebraic form of "they appear together."** SUM is the algebraic form of "there is a lot of this stuff around."

## And the attribution was wrong

That reasoning is good. The sentence the project attached to it was not, and nobody checked for eight rounds.

Girard's own rule, from post 3, is *three are enough and often even two*. That is N-of-M. MIN demands four of four and returns zero on three.

| | |
|---|---|
| the reasoning | **still good.** Conjunction, not accumulation, is what makes it a theory |
| the attribution | **wrong.** Girard requires two, and nobody had read the sentence |
| what MIN is | **a deliberate strengthening**, which is legitimate to do and a different thing to claim |

Choosing a harder test than your source requires is defensible and often admirable. Presenting it as what the source requires is not.

## The dinner party that beat every tragedy

MIN was chosen on theory. Here is the case that vindicates it, from a text that was in the corpus to be boring.

| book | scene | crisis | crimes | marks | violence | **SUM** | **MIN** |
|---|---|---|---|---|---|---|---|
| **7** | Odysseus welcomed at the palace | 0.30 | 0.00 | **6.21** | **0.00** | **6.51** | **0.00** |
| 18 | Irus the beggar | 0.00 | 0.00 | 5.49 | 2.15 | 7.64 | **0.00** |
| 22 | the slaughter of the suitors | 1.09 | 0.22 | 0.22 | 4.14 | 5.67 | **0.22** |

> [FIGURE 3. The three Odyssey books as stacked bars with SUM and MIN read out beneath each. Book 7's single tall segment against book 22's four short ones. Label book 7 "a dinner party" and book 22 "a massacre".]

Book 7 is a dinner party. Odysseus arrives at the palace of Alcinous, is bathed, given clean clothes, fed and questioned politely. Nobody is accused, expelled or harmed. Zero on crimes, zero on violence, and both zeros are correct.

Book 22 is Odysseus killing every suitor in the hall.

**On SUM the dinner party outscores the massacre**, 6.51 against 5.67. And on victim-marks it outscores every tragedy in the corpus. It beats *Oedipus*. It beats the *Bacchae*. The slaughter comes seventh.

Nothing went wrong with the code, and that is the part worth slowing down for. `marks` is 44% the word `king`, which was not a lazy choice, because in Girard the king is a victim whose execution has been deferred. Put that word list in front of book 7 and everyone in the room is a king, addressing a king, or describing one. The word saturates the passage for reasons of setting.

>> **The false positive is not the lexicon misfiring. It is the lexicon working exactly as written**, on a text where one stereotype is present at maximum density and the other three are absent.

Which decides what repairs exist. A misfire you fix by editing words. This you cannot, because deleting `king` would delete a real victim mark and break the instrument the other way. The problem is not in the word list, so it cannot be solved in the word list.

Look at the MIN column. Book 7 scores **0.00**, correctly, on the only metric that encodes the claim.

## The trap, planted and not sprung

MIN has a property nobody considered, and it is arithmetic rather than literary. No amount of thinking harder about Girard would have surfaced it.

Two facts, side by side.

**MIN takes the smallest of four buckets.** And **`crimes` fires at 0.95 per thousand words, five times rarer than violence.**

You now have everything you need to see what is coming.

Post 7 takes it apart in one line of arithmetic that has nothing to do with Girard at all.
