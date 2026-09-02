---
season: 1
episode: 18
title: "Reading the Odyssey, the Control"
words: 1795
minutes: 13.3
character_anchor: "A smoke alarm going off because of toast"
clinical_anchor: "A tumour marker that is also raised in pregnancy"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-1
---

> [!info] S1E18 · 1795 words · ~13.3 min · [[Season 1 - Girard From Zero — Index|season index]]
> **Generated from `Research/Season 1 — Girard From Zero.md`. Edits here are overwritten.**

# Reading the Odyssey, the Control

[[S1E17 - Reading Apollodorus|← Reading Apollodorus]] · —

---
## The stake

The promise from episode 1 comes due: **the least persecution-shaped story in
Greek literature produces the most persecution-shaped score in the corpus.**
Stay for what saves it.

## Collecting episode 17, and closing the season

Episode 17 read myth with the telling stripped out. **This episode reads the text
that is supposed to score low**, and it produces the most instructive false
positive in the entire project.

**A control is a text you expect to fail.** If your instrument cannot fail
anywhere, you learned that in Season 2 episode 1: it is not measuring.

> **A check that cannot fail prints reassurance.** That sentence is the spine of
> this whole series, and a control group is the cheapest way anybody has found to
> buy a check that can.

And the *Odyssey* is the right choice for one, which is worth a sentence before the
numbers arrive. It is long, it is canonical, it is full of violence and kings and
crisis, **and nothing in it is a persecution in Girard's sense.** Nobody is
selected arbitrarily by a community and killed to end a crisis. So it is a text
that ought to be rich in every surface feature the instrument looks at and poor in
the thing the instrument is for, which is exactly what you want a control to be.

## The finding, and the re-run that changed half of it

**Two different Odysseys appear in this episode and they are not the same file.**

- The **24-book** table is **Samuel Butler**, Gutenberg #1727, 127,165 words.
- The whole-corpus figures at the end are **A. T. Murray**, and the 76-text corpus
  holds **only books 1 to 5** of the poem.

> **The Butler run was round 1, on lexicon v1**, which `FINDINGS.md` marks as
> superseded: an inflection bug plus a homograph bug where `cast`, `stone` and
> `drive` contributed roughly **950 junk hits**. That table sat in the write-up
> for a year and **nobody ever re-ran it on the fixed lexicon.**

**It has now been re-run** (`score.py odyssey`, v2 lexicon, `results_odyssey_v2.csv`),
and this is the part to do slowly on camera, because **the payoff survived and both
of the sentences around it did not.**

| the claim as written | v1 | v2 | |
|---|---|---|---|
| book 7 `marks` | 6.21 | **6.51** | holds |
| book 7 `crimes`, and so its MIN | 0.00 | **0.00** | **holds** |
| book 18 MIN | 0.00 | **0.00** | **holds** |
| **book 7 outscores every tragedy on `marks`** | true | **false** | **broken** |
| **the massacre in book 22 ranks 7th** | 7th | **2nd** | **broken** |

Three texts in the 76 beat it: *Oedipus the King* at **9.58**, Diodorus 4c at
**7.35**, Hyginus 3 at **7.26**. **Two of those three are prose compendia, so the
accurate sentence is the sharper one: book 7 outscores every tragedy in the corpus
except *Oedipus the King*** — the play this season already called the cleanest fit
in existence. The old sentence was a year old and wrong.

> **Note what did not move.** The false positive is still there, its `crimes`
> bucket is still empty, and the minimum still kills it. **The argument was never
> resting on the two sentences that broke**, and the episode is better without
> them.

**And say the confound out loud**, because it is this season's own subject: that
comparison puts **Butler's** English next to Storr's and Frazer's and Murray's.
Episode 9 said two translators differ by 17.2%. **A cross-translation ranking is
exactly the thing this project keeps warning about**, and the fix is to score a
single translation or to stop ranking across them.

The *Odyssey*, split into its 24 books and scored separately. **These are the v2
numbers**, the ones that are still true:

| book | scene | crisis | crimes | marks | violence | total | **MIN** |
|---|---|---|---|---|---|---|---|
| **7** | **Odysseus welcomed at Alcinous' palace** | 0.30 | **0.00** | **6.51** | 0.59 | 7.40 | **0.00** |
| 18 | Irus the beggar | 0.00 | **0.00** | 5.73 | 2.15 | 7.88 | **0.00** |
| **22** | **the slaughter of the suitors** | 1.31 | 0.22 | **0.22** | 7.62 | 9.37 | 0.22 |

> **Read the `marks` column and then the `violence` column.** The dinner party
> scores **6.51** on the bucket built to detect marked victims. The massacre
> scores **0.22** on it, thirty times lower, while topping the corpus on violence.
> **The bucket that is supposed to find the victim cannot see a hall of corpses
> and lights up in a dining room.**

**The v1 figures, for anyone checking the old write-up:** book 7 `marks` 6.21,
book 18 5.49, book 22 total 5.67, and book 22 ranked 7th rather than 2nd.

## Read book 7 aloud, because nobody will believe it otherwise

**It is a dinner party.**

A shipwrecked stranger arrives at a palace. He is received. He is bathed and given
clean clothes. He is seated, fed, and asked politely who he is. The king and
queen treat him with perfect courtesy. He tells them about his voyage.

**Zero violence. Nothing bad happens to anybody at all.**

**And on the victim-marks bucket it outscores every tragedy in the corpus except
*Oedipus the King***, which scores 9.58. Only two other texts beat it, and both
are prose compendia.

Meanwhile book 22, in which one man kills a hall full of a hundred people and then
hangs the serving women, is **beaten by a dinner party on the bucket that is
supposed to detect victims.**

## Why

"King" and "queen" saturate a palace scene, because everyone in it either is one or
is addressing one. And `marks` is 44% the word `king`.

> **The least persecution-shaped narrative in Greek literature contains the most
> persecution-shaped-looking passage in the corpus.** That sentence is the episode.

## The character anchor

**A smoke alarm going off because of toast.**

Nothing is broken. The alarm is not faulty, it has not been miswired, and it is not
being oversensitive in any way its manufacturer would apologise for. **It detects
smoke, and toast makes smoke.** Every step of its reasoning is correct.

And notice which repairs are on offer. **You cannot fix it by making it ignore
smoke**, because smoke is the thing it is for. You cannot fix it by adding a rule
about toast, because the next false alarm will be a shower or a candle or a hot
pan, and there is no finite list.

**`king` is the toast.** It genuinely is a victim mark, for the reasons episode 8
established, and a palace genuinely is full of kings, and the detector is working
exactly as designed while telling you something absurd.

## The clinical anchor

**A tumour marker that is also raised in pregnancy.**

The assay is specific to the molecule it names. It is not cross-reacting, it is not
contaminated, and the elevated result is a true measurement of a substance that is
genuinely present at that level. **Every step is correct and the patient does not
have cancer.**

Notice which repairs that rules out. You cannot lower the threshold, because the
value really is high. You cannot recalibrate, because nothing is miscalibrated.
**The molecule is a real marker that is not exclusive to the disease**, and the
only fix available is to stop reading it on its own and require it alongside
something pregnancy does not produce.

**That is the minimum**, arriving one season early.

## And the instrument gets the whole poem exactly right

This is what makes it interesting rather than merely embarrassing.

Across the 76-text corpus, the *Odyssey* holds **three of the four lowest
scores**, with book 5 at **2.35** against a corpus top of 23.18. **These are the
Murray books 1 to 5 on the fixed lexicon**, so they are the solid half of the
episode, and they are also only a fifth of the poem. **"The Odyssey scores low" is
a claim about five books**, and the honest sentence says five.

> So the instrument reads the poem correctly and one chapter of it
> catastrophically wrongly, **and the same word causes both.** `king` is why the
> poem scores low overall, because most of it happens at sea. And `king` is why
> book 7 scores absurdly high, because that part happens in a palace.

## What saves it, and this is where Season 2 is going

Score book 7 by the **minimum** of the four buckets instead of the sum, and it
scores **0.00** and vanishes, because its `crimes` bucket is empty.

**The conjunction requirement from episode 10 kills the false positive
automatically**, without anyone noticing it or patching anything.

> **And this is the cell the re-run was really about.** `FINDINGS.md` says §2's
> co-occurrence thresholds "no longer apply" after the lexicon fix, and the fix
> took `crimes` from 43% to 12% `murder`, meaning words that never fired started
> firing. **So the whole argument for the minimum turned on whether one cell was
> still empty**, and for a year nobody looked. **It is still 0.00.** Both false
> positives still have an empty `crimes` bucket and the minimum still kills both.

> **Say what that is worth and what it is not.** A prediction that survives a
> check it could have failed is worth more than one that was never checked.
> **And it nearly did fail**, because the same re-run broke the two sentences
> that were sitting next to it.

> **That is the strongest argument for the minimum in the whole project**, and it
> is genuinely good reasoning. **Season 3 episode 2 is where the minimum falls
> apart for a completely different reason** that has nothing to do with this.

## What would count against this episode

1. **Book 7 being a fluke worth no attention.** One passage out of twenty-four, in
   one poem. **The counter is that the fix it motivates is the one Season 2 adopts
   as its primary metric**, so a fluke would mean the metric was chosen on the
   strength of an accident.
2. **The false positive being the lexicon's fault after all.** If `king` is a genre
   signal rather than a victim mark, this episode is not a lesson about metrics at
   all, it is a lesson about a broken word-list, and no clever combination rule
   repairs it. **Episode 8 left that question open on purpose and Season 4 settles
   it.**
3. **The whole-poem result being an artifact of length.** The *Odyssey* holds three
   of the four lowest scores in the corpus and it is also one of the longest texts
   in it. **Nobody has checked whether long texts score low generally**, which
   would explain the poem's position without any of the reasoning above.

## Closing the season

Eighteen episodes. A theory, its objections, and four texts.

**And not one number has been tested.** Everything quoted in this season is a
measurement that a later season will either defend or destroy, and the instrument
that produced them has not been built yet.

That is worth stating flatly rather than as a modest disclaimer. **Every figure in
these eighteen episodes came out of a program whose construction the audience has
not seen**, written by somebody with a preferred answer, on a corpus assembled by a
script. A viewer who has been persuaded of anything by this season has been
persuaded too early.

> **Season 2 builds it.** And Season 2's first episode is about the only accusation
> that matters: that none of this can be wrong.

## Questions

1. Read book 7 and **count `king` and `queen` yourself.** Is the instrument wrong,
   or is the word list wrong? Those are not the same answer.
   ___
   ___
2. Book 22 is a massacre and ranks seventh. **What is it missing that the theory
   requires?** Be specific.
   ___
   ___
3. A control is a text you expect to fail. **Name three more you would put in**,
   and say what each one controls for.
   ___
   ___
4. The minimum fixes this. Season 3 breaks the minimum. **Is there a fix that
   survives both?** Try before you are shown one.
   ___
   ___

---

[[S1E17 - Reading Apollodorus|← Reading Apollodorus]] · —
