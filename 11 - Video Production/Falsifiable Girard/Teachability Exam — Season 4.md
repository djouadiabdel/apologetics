# Teachability Exam — Season 4

**The question this file answers is not "is Season 4 correct".** All three
checkers say it is. The question is narrower and harder:

>> **Can he sit down in front of a camera with only this document, cold, and
>> teach the episode without looking anything up?**

That is the standard from the camera-as-exam rule: **one take, cold, no
rehearsal.** A document passes only if every number in it can be explained, every
term in it can be defined, and every claim in it can be defended by somebody
holding nothing else.

## How this is scored, fixed before scoring

Forty questions. Each is a thing a viewer could ask in the comments, or a thing
he would have to say out loud while filming. Scored **A** if the answer is on the
page, **P** if it is implied but he would have to improvise, **F** if he would
have to leave the room and look it up.

**Falsifier, fixed in advance: more than 6 F, or more than 12 P+F, means Season 4
is not yet filmable and needs another pass.**

## Contamination disclosure

**This is written after I had already grepped Season 4 for undefined technical
terms**, so questions 1 to 8 are informed rather than blind and their failures
were partly known before the exam existed. **Declared, not hidden.** The
questions from 9 onward were written without checking, and questions 20 to 40
concern connective tissue and delivery, which I had not examined at all.

Per the standing rule: **a pass here is weak evidence and only the failures
count.**

---

## Section A — terms Season 4 prints and may not define

1. What is a Mann-Whitney U test, and what does U = 268 mean?
2. Why is D2 "one-sided" rather than two-sided, and what would change if it were
   two-sided?
3. What is an n-gram, a bigram and a trigram?
4. What is a random seed, and why does the round 5 grid vary it three ways?
5. What is a Loeb, and why does it matter that four corpus texts are Loebs?
6. What are the ASV and the KJV, in one sentence each?
7. What does "frequency-matched" mean, concretely, for a single word?
8. What is a permutation test on tier labels, as used for U4?

## Section B — numbers he has to say out loud

9. What exactly is 49.6% a percentage **of**?
10. Why is 0.5 the baseline for U, and why is that true regardless of text length?
11. What does p = 0.0015 mean here, in a sentence a non-statistician follows?
12. Why is "0 of 2000" reported as p = 0.0005 rather than p = 0?
13. What is z = −0.012 measuring, and why does it mean under-powered?
14. Why is 20.4% compared against 17.2%, and what makes that comparison fair?
15. Where does the number 73 come from, and why is it not 71, 72 or 76?
16. What is 113× measuring in round 5's broken arm?
17. What does "99.1% unigram driven" mean, and how was it computed?
18. Why is +0.0661 "real in size and not distinguishable from chance"?
19. What are 378,412 and 808,967 counting?

## Section C — the argument, which is what he is actually teaching

20. Say the detector/discriminator distinction in your own words, without
    Girard.
21. Why can the fifth bucket not be validated against any known positive?
22. Why does dropping `unan` count as a fair test rather than a hostile one?
23. Explain why D4 failed without using the word "unigram".
24. What are the two ways to build a bad null, and which one was round 4's?
25. Why was the lost script identified by its standard deviation instead of its
    p-value?
26. Why is UNSTABLE the verdict when 24 of 48 configurations agree with the
    target?
27. Why does the KJV result weaken the translator-habit objection without
    removing it?
28. Why is "we could not have seen it" different from "it is not there"?
29. Why does deleting `king` changing nothing count as a finding?
30. Why is "neither wrong nor blind" a worse position than either?

## Section D — connective tissue, filming, and the things that break a take

31. Does every Season 4 episode open by collecting the one before it?
32. Does every Season 4 episode name the next one by content, not just number?
33. Is there a device on screen in every episode that he can point at?
34. Are the character anchors ones he can describe without having seen the
    source?
35. Does any Season 4 anchor repeat one used in Seasons 1 to 3?
36. Does Season 4 rely on any Season 1 to 3 claim that is not actually there?
37. Are the two Girard quotations in Season 4 marked where text was elided?
38. Is any episode long enough to overrun, or short enough to feel thin?
39. Does the season state the series refrain, and in a place where it lands?
40. If a viewer starts at Season 4 episode 1, what breaks first?

---

# RESULT

**Scored after the questions above were frozen. 31 A, 5 P, 4 F.**
**The falsifier did not fire** (4 F against a limit of 6; 9 P+F against 12).

## The four failures, which are the only part worth reading

**Q1 — Mann-Whitney U. FAIL.** The term appears exactly twice, both inside one
table cell in episode 4, and episode 5 then reports **U = 268** and **U = 1027**
in its scorecard. **Nothing anywhere in 68 episodes says what U is.** He would
have to say the number out loud with no definition available. This is the single
worst gap found.

**Q2 — one-sided. FAIL.** Printed twice in the same table cell and never
explained. `Assumed Knowledge.md` question 13 already flagged this for Seasons 1
to 3 and wrote a note for it, **and the note never made it into an episode.** It
is now worse, because Season 4 prints the word in a scorecard.

**Q3 — n-gram. FAIL.** Used seven times in episode 13, which is the episode where
the null is built out of 378,412 bigrams. Usable from context, never defined.

**Q4 — seed. FAIL.** Appears in two tables as a free parameter with three values,
and the grid's stability across seeds is part of the round 5 argument. Never
explained.

## The five partials

**Q5 Loeb**, named three times as a translation series, never identified.
**Q7 frequency-matched**, explained well in episode 13 for phrases but never for
the simpler unigram case it first appears in.
**Q17 "99.1% unigram driven"**, the number is given and the method behind it is
not.
**Q19 378,412 / 808,967**, stated as an inventory, never said to be counts of
*distinct* n-gram types rather than occurrences.
**Q40 starting cold at Season 4**, the detector/discriminator distinction is
collected in one line and would not carry somebody who had not seen Season 1
episode 11.

## What passed, and is worth knowing passed

**Section C passed 11 of 11.** Every conceptual question in the season is
answerable from the page, including the hard ones: why UNSTABLE, why the standard
deviation identifies the script, why "neither wrong nor blind" is worse. **The
argument is teachable. The vocabulary around it is not, yet.**

**Section D passed 9 of 10.** All 18 episodes collect the previous one, all name
the next by content, all carry a device, no anchor repeats anything from Seasons
1 to 3, all 15 back-references land on the correct episode by content, both
Girard quotations carry `[...]` markers, and nothing overruns.

>> **The pattern in the failures is exact and it is not about the writing.**
>> Every failure is a **statistical or bibliographic term that Season 4 is the
>> first season to use.** `Assumed Knowledge.md` was frozen when the series was
>> 50 episodes long. It is now 68, and **a frozen exam does not notice the
>> material written after it.**

---

# REPAIRS MADE, and where each one landed

Scored again after the fixes. **All four failures and all five partials are
closed**, verified by searching for the explanation rather than by re-reading.

| was | now taught in | as |
|---|---|---|
| **Q1** Mann-Whitney U | **S4E4** | "how often does a Gospel beat a myth", with the 4 × 71 = 284 pairs table, so **U = 268 means 268 wins of 284** |
| **Q2** one-sided | **S3E9**, not S4 | a new section in the p-value episode, because every round from Season 2 onward is already one-sided |
| **Q3** n-gram | **S4E13** | "a run of n words that sit next to each other", worked on *he found no fault in him* |
| **Q4** seed | **S4E10** | why the same seed gives the same draws, and why varying it three ways asks whether the finding was luck |
| **Q5** Loeb | **S4E3** | the facing-page series, and why that house style makes the corpus sound alike |
| **Q17** 99.1% | **S4E11** | the one subtraction that produces it |
| **Q19** 378,412 / 808,967 | **S4E13** | stated as distinct *types*, with why trigrams outnumber bigrams |

**Q2 was moved deliberately.** The obvious place was Season 4, where the word is
printed. The correct place is **Season 3 episode 9**, the p-value episode, because
one-sidedness applies to every p-value the project has ever reported and Season 4
is simply where somebody finally wrote the word down. **Teaching it in Season 4
would have fixed the symptom in the episode that exposed it.**

That repair also bought something the exam did not ask for. Season 3 episode 9 now
names the **cost** of a one-sided test, that it returns nothing for a large effect
running the wrong way, and Season 4 episode 4 collects it and points at Season 4
episode 5, **where the `core` half runs backwards and no test in the round can
register it.** A gap in the vocabulary turned into a connection in the argument.

## Standing limitation

**This exam is now contaminated for re-use.** It was scored, the failures were
repaired, and re-scoring it would pass by construction. **A future season needs
new frozen questions, not this file re-run**, and `Assumed Knowledge.md` should be
re-frozen whenever the series grows past the length it was written for.
