# The Myths Repo, Forensic Record

Every instrument built in `~/Myths`, every prediction made, every result, every
piece of the mathematics, and every error the project caught itself committing.

Compiled 14 August 2026 from the repository at commit `930d8e3`. Nothing in this
document is remembered. Every number was read off a file on disk or recomputed
from the data. Where a claim comes from a file, the file is named.

>! Where the conclusion went: [[01 - The Whole Argument]], sections 2 and 3.
>!
>! This is a record, not an argument. It does not tell you what the work means,
>! whether it was worth doing, or what to say about it on camera. Parts VII, VIII
>! and IX are where you take over. The conclusion is deliberately absent.

---pagebreak---

@@ PART 0 — THE MAP

## 0.1 What is actually in the repository

**Four** instruments were pre-registered. **Three** were run.

| # | instrument | location | what it tests | rounds run |
|---|---|---|---|---|
| 1 | Four-bucket scapegoat detector | `~/Myths` root | Girard's four stereotypes of persecution, as a lexical measure over Greek and Roman texts | 4 |
| 2 | Conversion instrument | `~/Myths/conversion` | Girard's three-part novelistic conversion, as a rubric over novel endings | 1, partial |
| 3 | Interlock instrument | `~/Myths/interlock` | Gospel transmission reliability, in three layers | 3 |
| 4 | **Restraint control** | `interlock/resurrection` | whether the canonical resurrection narratives show the features critics' own models of legendary growth predict | **0. Never run.** See Part IV |

279 tracked files. 28 commits. **Seven** pre-registrations in total: four on the
myth detector, one on conversion, and in the interlock tree one for the
instrument itself, one for the contradiction count, one for Layer 2, and one for
the restraint control.

>! Instrument 4 is the one nobody has mentioned in any summary of this project,
>! including mine. It is arguably the best-designed file in the repository, and
>! nothing was ever coded against it. Part IV is about that.

The rule shared by all three, quoted from `interlock/DESIGN-RATIONALE.md`:

>> **The one rule under all of them**
>> Never tune the instrument, and never tune the sample, to pass. Everything
>> above is machinery for making that rule enforceable by someone who does not
>> trust the person who wrote it, including when that person is me.

## 0.2 The seven days

The whole repository was built on **seven calendar days**. Not months. This is
the true figure and it is checkable with `git log`.

| date | what was built | commits |
|---|---|---|
| 21 July 2026 | corpus, v1 scorer, round 1, lexicon v2, round 2 | 6 |
| 22 July 2026 | Correction 1, round 3 (localization), NEXT | 4 |
| 24 July 2026 | interlock run 1, NT contradiction count, F4 fires | 4 |
| 25 July 2026 | verdict, registry, Greek checks, Layer 2, design rationale | 8 |
| 5 August 2026 | pre-registration C (restraint control) | 1 |
| 11 August 2026 | round 4, the dissent test | 2 |
| 12 August 2026 | conversion instrument, and own novella as Set D | 3 |

Elapsed 21 July to 12 August is 22 days. Working days, seven. Most sessions ran
between midnight and 03:30.

**The full commit record, which is the only part of this a stranger can check.**

| # | date, time | hash | what landed |
|---|---|---|---|
| 1 | 07-21 01:37 | `6a252e4` | corpus, scorers, findings before myth-level scoring |
| 2 | 07-21 01:37 | `dd32cd0` | **PRE-REGISTRATION 1**, Ovid tier assignments |
| 3 | 07-21 01:39 | `8986df5` | RESULTS 1, the MIN prediction failed |
| 4 | 07-21 03:00 | `00a9556` | **PRE-REGISTRATION 2**, lexicon v2 and six predictions |
| 5 | 07-21 03:14 | `e1f5253` | RESULTS 2, 4 of 6, density confound identified |
| 6 | 07-21 03:24 | `4d4afa6` | NEXT.md handoff, session transcripts archived |
| 7 | 07-22 00:55 | `ab8fcc6` | **CORRECTION 1**, truncated text, speaker diagnostic |
| 8 | 07-22 00:55 | `fc094bb` | **PRE-REGISTRATION 3**, localization |
| 9 | 07-22 03:22 | `4188308` | RESULTS 3, 1 of 5, the one vacuous |
| 10 | 07-22 03:25 | `1dc15d7` | NEXT.md, the locator reframe falsified |
| 11 | 07-24 22:53 | `83f5f55` | **PRE-REGISTRATION NT**, definition, gates, falsifiers |
| 12 | 07-24 23:09 | `c148944` | RESULTS NT, **F4 fires** |
| 13 | 07-24 23:42 | `3248616` | rescue-source pass, no licensed cost changes |
| 14 | 07-24 23:57 | `0724875` | round 2b, Shamoun sites, primary harmony scored |
| 15 | 07-25 00:06 | `188696b` | VERDICT.md, all 153 items with reasons |
| 16 | 07-25 00:26 | `4457b48` | REGISTRY, README, **Judas 4 → 3**, cost-3 Bayes case |
| 17 | 07-25 00:37 | `ac2f784` | all 51 accepted items get a defender audit, two tiers |
| 18 | 07-25 00:49 | `772664c` | five rows K → V against MorphGNT, one own note corrected |
| 19 | 07-25 00:56 | `0fda18f` | **PRE-REGISTRATION R**, Layer 2 |
| 20 | 07-25 00:58 | `9cfc1fa` | Layer 2 round 1, **G1 fires at two levels** |
| 21 | 07-25 01:04 | `ce95dd1` | Layer 2 handoff, README restructured for three layers |
| 22 | 07-25 01:30 | `96b435c` | DESIGN-RATIONALE, 20 decisions |
| 23 | 08-05 03:17 | `4c614fc` | **PRE-REGISTRATION C**, the restraint control. **Nothing follows it.** |
| 24 | 08-11 02:07 | `9310c30` | **PRE-REGISTRATION 4**, the dissent test |
| 25 | 08-11 02:17 | `0c765d0` | RESULTS 4, nothing survives its own controls |
| 26 | 08-12 16:50 | `d671056` | **PRE-REGISTRATION**, the conversion instrument |
| 27 | 08-12 17:12 | `cf4bfa0` | RESULTS 1, conversion fails P1 and P4 |
| 28 | 08-12 17:25 | `930d8e3` | addendum, own novella scored as Set D |

Two things are visible in that table before any content is read. **Fourteen of
the 28 commits fall on 24 and 25 July**, one continuous stretch, which is where
the entire interlock instrument was built. And **commit 23 is an orphan**: a
pre-registration with no run behind it, and two further studies begun after it.

## 0.3 The scoreboard

Every named prediction ever committed in this repository, with its outcome.

| round | prediction | outcome |
|---|---|---|
| **R1** | MIN separates HIGH from LOW on Ovid myths | **FAIL** |
| R2 | P1 genre ordering TRAGEDY > OVID ≈ EPIC ≈ MYTHOGRAPHY > CONTROL | **partial FAIL** |
| R2 | P2/P3 no named LOW outscores any named HIGH | PASS |
| R2 | P4 Bacchae crimes > 0.5 and violence in top quartile | **FAIL** |
| R2 | P5 two Agamemnon translations within 25% | PASS (17.2%) |
| R2 | P6 MIN non-zero for at least 75% of texts | PASS (90.3%) |
| R2 | null test, buckets beat frequency-matched random | PASS, p = 0.0045 |
| **R8** | U1 GOSPEL dissent co-locates with violence | **PASS**, U = 0.4171, p = 0.0015 |
| R8 | U2 ordinal series GOSPEL < TRAGEDY < MYTH | **FAIL**, tragedy not intermediate |
| R8 | U3 the *Bacchae*, fourth test | **FAIL**, p = 0.414 |
| R8 | U4 gap ≥ 0.05 and significant | **FAIL**, gap +0.066 but p = 0.123 |
| R8 | N3 core reverses the tier order | **FIRED** |
| **R7** | L1 at least 3 of 4 Gospels co-locate | **FAIL, 0 of 4** |
| R7 | L2 ordinal series on z | **FAIL** |
| R7 | L3 the *Bacchae*, third test | **FAIL**, p = 0.888 |
| R7 | L4 above chance overall | pass, **vacuously**, 4 of 66 vs 3.3 |
| R7 | M1 myth pass rate not below gospel | **FIRED** |
| R7 | M3 under-powered, median z within 0.2 of 0 | **FIRED** |
| **R6** | P2 phrases beat a same-length frequency-matched n-gram null | **PASS**, 0 of 2000 |
| R6 | P1 full lexicon beats the same null | **PASS**, p = 0.0075 |
| R6 | P3 KJV phrase rate within 25% of ASV | **PASS**, 20.4% |
| R6 | P4 GOSPEL > MYTH survives the translation swap | **PASS**, p = 0.00064 |
| **R5** | reconstruct the round-2 null across all 48 defensible configurations | **UNSTABLE**, 24 of 48 under p=0.05; original procedure identified |
| **R3** | P1 at least 7 of 9 named HIGH localize | **FAIL, 0 of 9** |
| R3 | P2 Bacchae at p < 0.01, peak in second half | **FAIL, p = 0.66** |
| R3 | P3 at most 1 of 6 named LOW localizes | pass, **vacuously** |
| R3 | P4 TRAGEDY z exceeds EPIC z by at least 1.0 | **FAIL, gap 0.30** |
| R3 | P5 at least 6 of 9 HIGH beat Null B | **FAIL, 0 of 9** |
| **R4** | D1 ordinal medians MYTH < TRAGEDY < GOSPEL | PASS nominally |
| R4 | D2 GOSPEL > MYTH | PASS nominally, p = 0.00034 |
| R4 | D3 TRAGEDY > MYTH | PASS nominally, p = 0.032 |
| R4 | D4 frequency-matched null | **FAIL, p = 0.296** |
| R4 | D5 Prometheus Bound top 3 of 23 tragedies | **FAIL, rank 13** |
| R4 | D6 no myth text above the lowest Gospel | **FAIL, 7 of 71** |
| R4 | S1 sensitivity, core only | **destroys D2** (p 0.00034 → 0.293) |
| R4 | S2 sensitivity, epic excluded | **destroys D3** (p 0.032 → 0.388) |
| **Conv** | P1 Set A T = 1 in ≥70%, sum ≥2 in ≥70% | **FAIL, 50% and 50%** |
| Conv | P2 the three bits co-occur above independence | **NOT RUN** |
| Conv | P3 Set A mean bit-sum exceeds Set B | **NOT RUN** |
| Conv | P4 The Bell Jar scores (1, 0, 0) | **FAIL, observed (0, 0, 0)** |
| **Int** | P1 canon interlock ratio beats apocrypha | PASS |
| Int | P2 apocrypha hard-collide more | PASS |
| Int | P3 apocrypha embellish at least 3× more | PASS, ~11× |
| Int | P4 the advantage does not depend on Synoptic copying | PASS |
| Int | P5 canon interlock ratio ≥ 0.60 | **FAIL, 0.50** |
| **NT** | F1 any cost 4 on the core | did not fire |
| NT | F2 cost ≥3 exceeds 10% of admitted | did not fire |
| NT | F3 apocryphal control discriminates | **NOT RUN, untested** |
| NT | F4 A2 + A5 exceed 40% of rejections | **FIRED at 67.6%** |
| **L2** | G1 empty-tomb consensus verifiable | **FIRED, at two levels** |
| L2 | G2 any alternative dismissed at cost 4 | not yet scored |
| L2 | G3 case circular at some premise | not yet scored |
| L2 | G4 Layer 2 depends on Layer 1 detail accuracy | **signalled, not fired** |
| **C** | H1 canonical restraint ratio above 0.40 | did not fire, 0.352 |
| C | H2 control set below 0.50, instrument invalid | did not fire, **0.577** |
| C | H3 gap under 0.25 | **FIRED, 0.225** |
| C | H4 over 30% unstatable judgement calls | did not fire, 9.8% |
| C | H5 result depends on any single unit | **FIRED, 4 of 22 units** |

**Count, as of 14 August.** Of 51 committed predictions and falsifiers: **14
clean passes, 22 failures, 3 never run, 7 falsifiers fired, 2 vacuous passes**,
and 2 nominal passes destroyed by their own registered sensitivity analyses.

That count changed today. It used to read *eight never run*, five of them
belonging to a study that was designed and abandoned. **The restraint control was
run on 14 August and two of its five falsifiers fired.** What remains untested is
the conversion instrument's missing control set (P2, P3) and the apocryphal
control the NT count still needs (F3).

**One surviving positive result in the entire repository.** Round 2's null test,
p = 0.0045. Part VII shows why that one is also the weakest-protected number in
the project.

---pagebreak---

@@ PART I — INSTRUMENT 1: THE FOUR-BUCKET DETECTOR

## 1.1 The claim under test

Girard, *The Scapegoat*, ch. 2. Persecution texts carry four stereotypes:

1. **Crisis** — the sacrificial crisis, loss of distinctions. Plague, famine,
   sterility, the doubling of antagonists into indistinguishable rivals.
2. **Crimes** — what the victim is *accused of*. Crimes that erase difference:
   parricide and regicide, incest, sacrilege, poisoning and sorcery.
3. **Marks** — the victim's marks of selection. Stranger, cripple, king, monster.
4. **Violence** — the collective violence itself.

The standard objection to Girardian reading is that it is unfalsifiable: any
text can be read as confirming it after the fact. The project's entire design
answers that objection by stating what the theory predicts **before looking**.

>! Note the load-bearing distinction, because a later error turns on it.
>! `crimes` is what the victim is **accused of**. The *sparagmos*, the tearing
>! apart, is what the **mob does**. They are different buckets.

## 1.2 What was built before the corpus existed

`make_scorers.py`. Four word-buckets, **66 words total**, written before any
text was downloaded. Corpus: 19 Greek and Roman texts from Theoi, plus Homer's
*Odyssey* in Butler's translation split into 24 books.

## 1.3 The mathematics of the whole instrument

Everything in rounds 1 to 3 is built from one quantity.

$$ r_b(T) = 1000 · h_b(T) / N(T) $$

where `h_b(T)` is the number of hits of bucket *b* in text *T*, and `N(T)` is
the number of tokens. Hits per thousand words. Tokens come from
`re.findall(r"[a-z]+", text.lower())`, so punctuation is stripped and case is
flattened. Phrases are matched against the token stream re-joined by spaces, so
that "father's murder" becomes "father s murder" and punctuation can never block
a match the word-level pass would have made.

Two ways to combine four buckets into one score:

$$ SUM(T) = Σ_b r_b(T)          MIN(T) = min_b r_b(T) $$

**SUM is accumulation. MIN is conjunction.** This is the whole argument. Girard
does not claim persecution texts are *saturated* with these four vocabularies.
He claims the four appear **together**. MIN is the algebraic form of "together":
a text scores only as high as its weakest stereotype, so a text drenched in
violence with no accusation scores zero.

## 1.4 The Odyssey book 7 false positive

This is why MIN was chosen, and it is the cleanest demonstration in the project.

| book | scene | crisis | crimes | marks | violence | SUM |
|---|---|---|---|---|---|---|
| 7 | Odysseus welcomed at Alcinous's palace | 0.30 | 0.00 | **6.21** | **0.00** | 6.51 |
| 18 | Irus the beggar | 0.00 | 0.00 | 5.49 | 2.15 | 7.64 |
| 22 | **the slaughter of the suitors** | 1.09 | 0.22 | 0.22 | 4.14 | 5.67 |

Book 7 is a peaceful hospitality scene with **zero violence**, and it outscores
every tragedy in the corpus on `marks`, because "king" and "queen" saturate the
passage. The actual massacre ranks 7th.

Under MIN, book 7 and book 18 both score **0.00** and disappear. On the tragedy
corpus MIN separated cleanly: every Greek tragedy at MIN ≥ 0.48, every control,
epic and didactic text at MIN ≤ 0.32.

So MIN was fixed as the primary metric in `PREREGISTRATION.md`.

## 1.5 Round 1: the pre-registration, and the failure

`PREREGISTRATION.md`, committed `dd32cd0`, 21 July 01:37.

Ovid's *Metamorphoses* was re-cut into 31 myth-level episode files. 17 were
tiered in advance on Girardian grounds only, never on any score. 12 excluded on
a stated rule (minimum 800 words). Narcissus and Phaethon were declared controls
in `get_myths.py` **before the corpus existed**.

HIGH: Pentheus, Actaeon, Lycaon, Cadmus and the dragon.
LOW (controls): Narcissus, Phaethon, the creation, the four ages, Daphne,
Ceres, Aglauros.

The falsification conditions, written in advance:

- any LOW text scoring above any HIGH text on MIN
- HIGH and LOW overlapping so much that no threshold separates them
- the null test matching the Girard buckets' separation

**Result, on the pre-registered metric:**

| tier | n | mean MIN |
|---|---|---|
| HIGH | 3 | 0.22 |
| MID | 6 | 0.19 |
| LOW | 6 | **0.25** |

No separation, and LOW is the highest. Two falsification conditions fired at
once:

- `ovid2_aglauros_and_mercury`, a **declared control**, scores MIN **1.27**,
  beating every HIGH text.
- `ovid3_pentheus_and_bacchus`, **Girard's single most important persecution
  myth**, scores MIN **0.00**.

The unregistered metric, SUM, ordered the tiers exactly as predicted (HIGH 9.08,
MID 6.06, LOW 3.52). `RESULTS.md` refuses to claim it, in its own words:

>> "Switching metrics after seeing the result is precisely the move
>> pre-registration exists to prevent."

## 1.6 The diagnosis, and it is arithmetic

MIN failed for a reason that can be written down exactly.

Model bucket hits as approximately Poisson with rate λ_b per thousand words.
In a text of N tokens the expected count is λ_b·N/1000, and

$$ P(zero hits in T) = exp( − λ_b · N / 1000 ) $$

Recomputed from `results_corpus2_v2.csv`, 76 texts, lexicon v2:

| bucket | mean rate per 1000 |
|---|---|
| violence | 4.757 |
| marks | 2.896 |
| crisis | 2.069 |
| **crimes** | **0.949** |

`crimes` is the rare bucket. Under this model:

| text length | expected `crimes` hits | P(zero) |
|---|---|---|
| 1,500 words (an Ovid episode) | 1.42 | **0.24** |
| 10,000 words (a tragedy) | 9.49 | ~0.000 |
| 17,180 words (the *Bacchae*) | 16.31 | ~0.000 |

And this is the **repaired** lexicon. Under v1, `crimes` caught "murder" 138
times out of 297 real occurrences, so its effective rate was far lower and the
zero probability far higher.

MIN takes the weakest bucket. If the weakest bucket is zero with high
probability at episode length, **MIN saturates at 0.00 and carries no
information at all.**

>> **The finding, stated as a rule**
>> The metric is scale-dependent. It was validated on texts six times longer
>> than the ones it was then applied to. Any metric must be validated at the
>> length it will actually be used on.

Pentheus is the sharp case, and it is a second, separate defect: `crimes 0.00`
because Ovid describes the *sparagmos* as tearing and rending, and the bucket
contained `murder`, `parricide`, `pollution`. **None of the words Ovid uses.**
That is a lexicon coverage failure, not a failure of Girard's theory.

## 1.7 The repair, and the category error that was refused

Three defects were found in lexicon v1.

**Defect 1, undercount.** Exact matching missed inflections. `murder` caught 138
of 297; `kill` 105 of 393; `defilement` 4 of 54. The miss rate was **uneven**:
common base forms (blood, king, death) caught at ~85%, rare Latinate nouns under
10%. So the v1 headline finding "each bucket is dominated by one generic word"
was **partly an artifact of this bug**.

**Defect 2, overcount.** `cast` (422 hits) is mostly "cast a glance". `stone`
(211) is mostly the material. `drive` and `driven` (327) are mostly wind and
desire. Girard's stereotype is *expulsion*, which English builds phrasally, so
these now require a particle.

**Defect 3, the category error, and this is the one that matters.**

`RESULTS.md`'s own next-action list said: fix the crimes lexicon, add the
dismemberment vocabulary so it catches Pentheus.

That was refused, and the reason is quoted from `lexicon.py`:

>> In Girard the crime stereotype is what the victim is ACCUSED OF; the
>> sparagmos is what the MOB DOES. Tearing belongs in `violence`. Putting it in
>> `crimes` would have corrupted the bucket to pass a test.

The tearing vocabulary went into `violence`. **The instrument was one line of
reasoning away from being repaired to make its own failing example pass, and the
thing that stopped it was a definitional distinction, not a statistical one.**

**How the repair was made auditable.** Defects 1 and 2 are corrections to
*matching* and add no concepts. Genuinely new concepts are tagged `v2` in
`lexicon.py` and can be excluded with `score.py --no-new`, so the effect of the
revision stays separable from the effect of the bug fixes. Three tags: `v1`
(original), `inf` (an inflection of a v1 word, no new concept), `v2` (new
concept).

**No stemming anywhere.** Every concept lists its surface forms explicitly,
because prefix matching is a disaster here:

| prefix | what it catches by mistake |
|---|---|
| `tear-` | "tears" (441), which is weeping, not rending |
| `rend-` | "render, rendered, rendering" (28) |
| `torn-` | "tornado" |
| `stone-` | the material, not the punishment |

The cost is that adding a concept means writing out its forms. `lexicon.py` says
that cost **is the point**: every match is auditable.

## 1.7b The anatomy of the repaired lexicon

Worth having in front of you, because every result in rounds 1 to 3 is a
function of these word lists and nothing else. Sourced to *The Scapegoat* ch. 2.

**Bucket 1, CRISIS.** Loss of distinctions. Three sub-groups, and the third is
the one people miss.

| sub-group | forms |
|---|---|
| epidemic and sterility | plague, pestilence, contagion, famine, dearth, starvation, drought, blight, barren, sterile, sickness, disease, malady, death |
| **undifferentiation proper** | twin, double, likeness, semblance, indistinguishable, undistinguished |
| collapse of order | discord, strife, faction, lawless, civil war, civil strife |

**Bucket 2, CRIMES.** What the victim is **accused of**, following Girard's four
named categories.

| category | forms |
|---|---|
| (a) violence against those most criminal to attack | parricide, patricide, regicide, infanticide, murder, homicide, manslayer, bloodguilt |
| (b) sexual transgression | incest, rape, ravish, adultery, bestiality |
| (c) religious crime | sacrilege, blasphemy, profane, desecrate, impiety, godless |
| (d) contagion and "scalable" crime | poison, sorcery, witchcraft, treason, traitor, perfidy, betrayal |
| difference-erasing quality | pollution, defilement, abomination, unclean, taint, monstrous |

>> **The v1 failure in this bucket is instructive on its own.** It held
>> criminological **labels**, and `parricide`, `patricide` and `regicide` fired
>> **zero times in 200,000 words**. Narrative texts do not say "he committed
>> parricide". They say "slew his father". So v2 adds bigrams: `slew his father`,
>> `killed the king`, `slew her children`, `devoured his children`, `blood of his
>> father`. And per `RESULTS-2.md`, **38 of 112 crime forms still never fire**,
>> mostly those bigrams. They were written to catch what narrative actually says
>> instead of the Latinate label, and they mostly did not.

**Bucket 3, MARKS.** Signs that select the victim, including the paradox that
being too **high** is a mark as much as being too low: stranger, foreigner,
alien, barbarian, outlander; cripple, lame, blind, maimed, deformed, misshapen;
beggar, orphan, outcast; **king, queen, tyrant**; monster, scapegoat, accursed,
cursed, marked, branded, stigma.

**Bucket 4, VIOLENCE.** All-against-one, and what the crowd does.

| sub-group | forms |
|---|---|
| the crowd | crowd, mob, throng, multitude, rabble, populace |
| **its unanimity** | unanimous, unanimity, with one voice, one accord, as one man, all together, one and all, whole city, all the people |
| stoning | stoned, stoning, cast stones, hurled stones, pelted |
| expulsion, phrasal | expel, banish, exile, cast out, cast forth, cast down, drive out, drove out, driven from, thrust out, hunted out |
| killing | slay, slew, kill, slaughter, butcher, massacre |
| blood | blood, bloody, bloodshed, bloodstained, gore |
| the hunt | hunt, hunted, hunter, huntress, hound, hounded |
| **sparagmos**, the v2 Pentheus fix | tore, torn, tear, tearing, rend, rent, rending, dismember, asunder, sunder, mangle, limb from limb, in pieces, to pieces, piecemeal, torn apart |

### The exclusions, with their hit counts, which are the real design work

Each of these was **removed** or made phrasal, and each removal makes the
instrument score **lower**, not higher.

| excluded | hits it was contributing | why |
|---|---|---|
| bare `stone`, `stones` | **211** | nearly all the material. A stone wall, a stone tomb |
| bare `cast`, `drive`, `driven` | **749 combined** | "cast a glance", "driven by the wind". Girard's stereotype is expulsion, which English builds phrasally |
| `tears`, `tearful` | **462** | weeping, not rending |
| `render`, `rendered`, `rendering` | 28 | not rending |
| `ravishing` | n/a | almost always "ravishing beauty" in this corpus, not the act |

>> **This is the part of the instrument that is actual craft**, and it runs
>> against the maker's interest every time. Nine hundred and sixty junk hits were
>> deleted from a lexicon whose author wanted it to score high. The comment in
>> `lexicon.py` on why there is no stemming anywhere ends: "Explicit lists mean
>> every match is auditable. **The cost is that adding a concept means writing
>> out its forms; that cost is the point.**"

## 1.8 Round 2: six predictions on 71 unscored texts

`PREREGISTRATION-2.md`, committed `00a9556`, 21 July 03:00.

The clean-test logic: the v2 lexicon was revised **after** seeing round 1 fail,
so no result on `corpus/` or `myths_ovid/` can confirm it. Those are the texts
that motivated the change. `corpus2/`, 71 scoreable texts never scored with any
lexicon, is the clean test.

**Disclosure written into the pre-registration itself:** the v2 lexicon was
smoke-tested on `corpus/` to check the code runs, and that output was seen
before the file was written. No `corpus2/` file was scored.

Primary metric switched to **SUM**, stated in advance this time, because round 1
established MIN is scale-dependent and `corpus2` is length-heterogeneous
(4,800 to 20,800 words).

**Results:**

| | prediction | result |
|---|---|---|
| P1 | genre ordering | **partial fail** |
| P2/P3 | no named LOW outscores any named HIGH | pass |
| P4 | Bacchae crimes > 0.5 and violence in top quartile | **fail** |
| P5 | two Agamemnon translations within 25% | pass (17.2%) |
| P6 | MIN non-zero for ≥75% of texts | pass (90.3%) |
| null | buckets beat frequency-matched random | pass, p = 0.0045 |

**P1, the partial fail, and the confound it exposed.**

| genre | n | mean | median | sd |
|---|---|---|---|---|
| MYTHOGRAPHY | 8 | **13.95** | 13.91 | 4.70 |
| TRAGEDY | 12 | **13.88** | 14.97 | 4.31 |
| OVID | 11 | 9.85 | 9.47 | 2.28 |
| EPIC | 36 | 9.48 | 8.62 | 3.54 |
| CONTROL | 5 | 7.77 | 8.25 | 1.47 |

The floor held. Tragedy clears epic, Ovid and control. But **mythography ties
tragedy**, and it was predicted to sit in the middle group.

The diagnosis: Apollodorus and Diodorus are bare plot summaries. No description,
no lyric, no filler. Every word is event. **A rate per thousand words rewards
narrative density, not persecution structure.** `hyginus_fabulae_1` ranks 1st of
71 at 1,208 words, the most compressed text in the corpus, and is treated as an
artifact rather than a finding.

This is the same confound as the v1 "measures tragic register" result, in a new
dress. **It is still unresolved.**

**P4, the Bacchae test, and the failure that reframed the project.**

`euripides_bacchae`: crimes **0.52** against a 0.5 threshold, a pass by 0.02,
which is noise. violence **4.71** against a top-quartile cut of **6.43**, a
clear fail. Overall rank **35 of 72**. Dead centre.

But **the lexicon fix worked.** The sparagmos vocabulary fires exactly as
designed: `tore` 7, `torn` 7, `tear` 3, `rent` 2, `rending` 2, `asunder` 2, plus
`limb from limb` and `in pieces`. Roughly 24 sparagmos hits, none of which v1
could see.

**The failure is dilution.** The *Bacchae* is 17,180 words and the lynching is
one messenger speech. A whole-text rate spreads one collective murder across
seventeen thousand words. Meanwhile `quintus_smyrnaeus_2` scores violence 8.32
because it is continuous battle narrative, with diffuse violence everywhere, no
victim, no crowd and no mechanism.

>> **The instrument prefers a uniformly violent text to a text containing one
>> lynching. That is precisely backwards from Girard**, whose mechanism is a
>> localized *event*. Rate per thousand cannot represent an event.

**P5, the translation control, and why it is the most load-bearing number in
the project.**

Same play, two translators. `aeschylus_agamemnon_murray` (Gutenberg, Murray)
scores 14.82. `corpus/aeschylus_agamemnon` (Theoi, a different translator)
scores 12.64. **17.2% apart**, inside the 25% bound.

Had this failed, every cross-text comparison in the entire project would have
been void, because the instrument would have been measuring translators' word
choices rather than texts. It has been run on **exactly one paired play**.

**Bucket composition, re-derived after the bug fix:**

| bucket | top word | share, v2 | was, v1 | dead forms |
|---|---|---|---|---|
| crisis | `death` | 60% | 68% | 9 of 50 |
| marks | `king` | 44% | 54% | 10 of 45 |
| violence | `blood` | 21% | 36% | 6 of 83 |
| crimes | `murder` | 12% | 43% | 38 of 112 |

Fixing the matching materially reduced single-word dominance in every bucket.
But `crisis` is still 60% the word "death" and `marks` is still 44% the word
"king". **`marks` largely detects whether a text is about royalty.** Sophocles'
*Oedipus the King* scores marks 9.58, the highest in the corpus, and the title
character is addressed as "king" throughout.

## 1.9 The null test, and the only surviving positive result

TRAGEDY versus CONTROL, groups fixed in the pre-registration before scoring,
2000 frequency-matched random word-sets:

```
Girard buckets:  +6.10 per 1000 words
random sets:     mean -0.16,  sd 2.95
beat Girard:     8 / 2000        p = 0.0045
```

**What makes this one citable and the two earlier ones not.** The first null
test chose its "persecution texts" list *after* seeing the grid. The second used
total rate, not the pre-registered MIN, switching metrics after seeing the
result. This one had **both the groups and the metric committed in advance.**

What it means, in the pre-registration's own words, and this framing was written
before the result:

>> A confirmation here means only that the four stereotypes co-occur more in
>> persecution-shaped texts than in others, **the first half of Girard's claim,
>> and the uncontroversial half.**

## 1.10 Correction 1: the truncated play, and the page that was excluded

Found 22 July, by accident, while running a speaker diagnostic for something
else.

**The defect.** `get_corpus2.py` fetched Theoi pages but never followed their
pagination. Theoi splits long pages and links the remainder as `CONTINUED`. One
text hit that split:

| text | as scored | actual | missing |
|---|---|---|---|
| `seneca_hercules_oetaeus` | 11,119 words | 20,621 | **46%** |

The missing half is not arbitrary. The file broke off after Hyllus' speech, so
Deianira's death, Hercules on the pyre and the apotheosis were all absent.
Hercules spoke exactly one line. Alcmena and Philoctetes never appeared.
**The scorer was reading a play with its sacrifice removed.**

>! Why this is worse than a missing text: a missing text is visible. A half-play
>! still scores, and the score looks unremarkable. It sat mid-table in
>! `RESULTS-2.md` and nothing flagged it.

**How it was nearly missed.** The speaker diagnostic classified the string
`CONTINUED` as a phantom one-off speaker and dropped it into a list of ignored
singletons. The pagination marker was in the very first diagnostic output and
**was read past twice** before anyone noticed what it meant.

**A first pass claimed five truncated files. That was wrong**: the search was
case-insensitive and matched the ordinary word "continued" in prose. Only one
text was affected. `CORRECTION-1.md` records the overstatement, on the ground
that a correction which overstates its own scope is not a correction.

**Effect on the result.** Rescored, the text moves from 15.12 to **14.67**. The
full text scores *lower* than the truncated one. The expectation going in was
the opposite. The restored half is largely lament and apotheosis, which dilutes
the rate. TRAGEDY mean 13.91 → 13.88. P1 was already a partial fail on a 0.04
margin and remains a fail on a 0.07 margin. **No verdict changed.**

### And then the part that matters

The same audit found `DiodorusSiculus4D`, a real Theoi page absent from the
fetcher's page list. It was fetched, and it is on disk, and it is **excluded**.

Because Diodorus is MYTHOGRAPHY, the group P1 loses to. Folding it in:

```
MYTHOGRAPHY  13.95  →  13.67       vs  TRAGEDY  13.88
P1               FAIL  →  PASS
```

>> A text discovered after seeing the results, added to the comparison group,
>> flips a failed pre-registered prediction into a passing one. **It would have
>> been entirely defensible as a bug fix**, and it is exactly the move
>> pre-registration exists to make impossible.

The rule this produced, and it is the second discipline rule of the project:

>> **The sample is part of the registration, not just the lexicon.**

`diodorus_siculus_4d` is available to any future round whose predictions are
committed before it is scored. It has no bearing on that one.

>! Hold onto this. Part VII shows that this rule was broken two weeks later, by
>! the same project, without anyone noticing.

## 1.11 Round 3: the localization test

`PREREGISTRATION-3.md`, committed `fc094bb`, 22 July 00:55.

The reasoning. Rounds 1 and 2 measured **saturation**. Girard does not claim
saturation. He claims the mechanism is an **event**: a single episode where the
crisis, the accusation, the marks and the collective violence all converge.

### The statistic

Slide a window over the token stream, score the four buckets inside it, take the
**min** of the four (co-occurrence), then take the **max** over all windows
(does such a passage exist anywhere).

$$ peak_min(T) = max_i [ min_b c_b(W_i) ] $$

with W_i the window starting at token *i*, window length 1000, stride 250. The
window is exactly 1000 tokens, so a raw count *is* a rate per thousand.

Implemented in `nulltest.py` with a cumulative sum so the cost is linear in text
length rather than quadratic:

$$ c[b, j] = Σ_{k<j} ind[b, k] ;   counts = c[:, ends] − c[:, starts] $$

### The null, which is the actual contribution

A high `peak_min` on its own is uninterpretable. A text with dense persecution
vocabulary throughout will produce one by chance. So:

**Null A, localization, primary.** Take a uniform random permutation π of the
token positions and recompute the statistic on the permuted indicator array.
500 shuffles per text, seed `20260722`.

$$ z = ( obs − mean(null) ) / sd(null) $$
$$ p = ( #{ s : peak_min^(s) ≥ obs } + 1 ) / ( 500 + 1 ) $$

The plus one in both numerator and denominator is the standard correction that
keeps an empirical p from ever being exactly zero.

>> **What Null A holds constant and what it destroys.** It preserves the text's
>> entire vocabulary exactly, so every bucket's total count and whole-text rate
>> are unchanged. It destroys position and nothing else. So it isolates
>> **locality**, which is precisely the thing round 2's density confound could
>> not be separated from. A text can be drenched in all four stereotypes and
>> still fail it.

**One implementation detail that is load-bearing.** Multi-word forms are marked
at the position of their **first token**, so a permutation moves each phrase hit
as a unit. Shuffling raw words instead would dissolve every phrase and make the
null trivially easy to beat.

**Null B, word identity, secondary.** Four random lexicons matched to the Girard
buckets on surface-form count and corpus frequency, scored on the unshuffled
text.

### The rule attached to the round

`window.py` was written after seeing round 2 fail, so its settings (window 1000,
stride 250, min then max) are **post-hoc**. They were frozen in the
pre-registration and the file says:

>> If 1000/250 gives a null result, that is the result. A window size chosen
>> because it made the *Bacchae* pass would void this round exactly as tuning
>> the lexicon would.

## 1.12 Round 3 result: total failure, and a bad null design

`RESULTS-3.md`, run `4188308`, 22 July 03:22.

| | prediction | result |
|---|---|---|
| P1 | ≥7 of 9 named HIGH localize | **fail, 0 of 9** |
| P2 | Bacchae at p < 0.01, peak in second half | **fail, p = 0.66** |
| P3 | ≤1 of 6 named LOW localizes | pass, 0 of 6, **vacuously** |
| P4 | TRAGEDY z exceeds EPIC z by ≥1.0 | **fail, gap 0.30** |
| P5 | ≥6 of 9 HIGH beat Null B | **fail, 0 of 9** |

Across all 71 texts:

```
z          mean +0.07    sd 1.33    median 0.00
p ≤ 0.05   4 of 71 (5.6%)      expected by chance  3.6
```

The distribution is centred on zero. The four texts that clear the threshold are
exactly the number chance predicts, and **not one of them is a named HIGH text.**

>> `peak_min` is therefore not detecting episodes. **It is reporting how much
>> bucket vocabulary a text contains. Word order is irrelevant to it.**

**P3 is not a success and the file says so.** The named LOW texts fail to
localize, but so does everything. A prediction that "these texts show no effect"
is worthless in a corpus where no text shows the effect.

**The Bacchae, twice.** Round 2 ranked it 35 of 72 on whole-text rate. The
diagnosis was that the metric was wrong. Asked at episode scale with a null, it
comes out at **p = 0.66**. Its peak window sits at **54% of the text**, which is
where the sparagmos is, so the locator is pointing at the right passage. That
passage simply does not contain a convergence beyond what the play's vocabulary
produces by chance.

>> Girard's central example has now failed two pre-registered tests on two
>> different operationalizations. The objection this project exists to answer is
>> that the exemplars are selected by interpretation rather than by any property
>> the text carries, and **after two rounds that objection is stronger, not
>> weaker.**

### The power problem, stated as a limitation and not an excuse

`peak_min` is a minimum over four counts in a 1000-word window. Observed values
run 0 to 5, **median 2**. For 64 of 71 texts the weakest bucket contributes
three hits or fewer in the best window.

**This is a statistic built on counting to two.** Whether the null reflects an
absence of localization or a statistic too coarse to detect it is not settled by
this round. The file's own words: the test as specified had little power, and
**this was foreseeable before running it and was not foreseen.**

The rule that follows: no re-running with a larger window until something passes.
A different operationalization is a new pre-registration with its own commit.

### Null B was a bad design, and the reason is structural

Frequency-matched random lexicons scored **higher** than Girard's buckets.
For the *Bacchae*: observed 2.0, null mean **4.41**.

That is not evidence about Girard, and the mechanism is worth understanding
because it generalises:

>> A **minimum** over four sets is raised by sets that are uniformly spread and
>> lowered by sets that are clumpy. Random words matched on individual frequency
>> spread across topics and so appear at more uniform rates, which raises a
>> minimum. **Any thematically coherent lexicon is clumpier and will lose this
>> comparison.** Null B would fail identically for any four topical word sets.
>> It tests nothing and its result should not be cited.

Recorded in `RESULTS-3.md` as "my error, in the pre-registration."

## 1.13 Round 4: the dissent test

`PREREGISTRATION-4.md`, committed `9310c30`, 11 August 02:07. Outstanding since
July, called by `FINDINGS.md` §6 "the most important unbuilt piece of the
project."

### Why the four buckets could never do this

`FINDINGS.md` §5, and this was known from the beginning:

>> Girard **predicts** the Passion scores high on all four. The Gospels are built
>> from the same persecution material as myth. So a high score there confirms the
>> first half of his claim and discriminates nothing. **The four buckets are
>> structurally incapable of separating Gospel from myth. This is the design, not
>> a limitation to patch later.**

### The discriminating claim, in Girard's own words

*I See Satan Fall Like Lightning*, Introduction, p. 3:

>> "not merely the innocence of the victims versus their guilt, but the fact
>> that, in mythology, **no one ever questions this guilt**. In the Gospels, the
>> revealing account of scapegoating emanates not from the unanimous crowd but
>> from a dissenting few. In mythology no dissenting voice is ever heard."

Same book, p. 121:

>> "a rebellious minority, a small group of dissidents that separates from the
>> collective violence of the crowd and **destroys its unanimity**. This
>> dissident minority has no equivalent in the myths."

**The differentia is not innocence versus guilt. It is whether the text contains
a voice that breaks the unanimity.** And "no dissenting voice is ever heard" is
a **universal negative**, so a single genuine counterexample falsifies it. That
is the falsifiable shape the project had wanted since round 1, and it is
Girard's own formulation rather than one imposed on him.

Predicted ordinal series:

$$ myth  <  tragedy  <  Gospel        (in dissent / broken unanimity) $$

### The instrument, and the tag that carries the round

A fifth bucket, `dissent.py`, same architecture. Two provenance tags:

| tag | sourced to | concepts |
|---|---|---|
| `core` | p. 3, questioning of guilt | innocent, guiltless, no_fault, done_nothing, unjust, wrongly, without_cause, false_witness, slander, protest, object, denounce, defend, plead, speak_for |
| `unan` | p. 121, broken unanimity | division, dissent, some_others, not_all, withheld, spare, minority |

**Exclusions, each of which makes the hypothesis harder to confirm:**

| excluded | why |
|---|---|
| `have mercy` | frequent in the Gospels and almost always a healing petition, not dissent |
| `rebuke` | dominant sense here is rebuking demons, wind, disciples |
| bare `witness` | "bear witness" is Johannine testimony, not objection. Only `false witness` kept |
| `condemn` | that is the crowd's act, not the dissenter's |
| bare `refuse` | too generic. Only explicit "consented not" forms kept |

### The sample

`tiers.py`, committed with the pre-registration.

| tier | n | what it is |
|---|---|---|
| GOSPEL | 4 | Matthew, Mark, Luke, John, ASV 1901 |
| TRAGEDY | 23 | Greek and Senecan verse drama |
| MYTH | 71 | mythography 34, epic 37 |

**Translation matching, decided in advance.** The corpus is almost entirely
1900 to 1921 English. The ASV is 1901, literal, public domain. The KJV was
rejected as three centuries off register. The pre-registration states this choice
"is made now and is not revisited after seeing results."

Corpus checksum recorded: `asv.txt` sha256 `aecff150eb9c…`. Word counts extracted:
Matthew 23,427, Mark 14,855, Luke 25,655, John 19,005. The file states that a
different checksum in future is a changed sample and needs saying out loud.

### The contamination disclosure, written before scoring

>> I knew before writing `dissent.py` that John repeats a division formula
>> ("there was a division among them") and that the Passion contains "I find no
>> fault in this man." Those are the two most obvious surface forms for the
>> sourced construct, so `no_fault` and `division` are at risk of being motivated
>> rather than derived.

Mitigations declared: `unan` is tagged separately, every result is reported
core-only, and D4's frequency-matched null absorbs a lexicon that only works
because its words happen to be frequent in one tier.

## 1.14 The mathematics of round 4

**Mann-Whitney U with midranks.** Pool the two groups, rank them, average the
ranks of tied values, then

$$ U_a = R_a − n_a(n_a + 1) / 2 $$

where R_a is the sum of group a's ranks in the pooled sample.

**Significance by label permutation, not by normal approximation.**

$$ p = ( #{ perm : R_a^perm ≥ R_a^obs } + 1 ) / ( NPERM + 1 ),  NPERM = 200,000 $$

`score_dissent.py` states the reason, and it is not a workaround:

>> scipy is not installed in .venv, so Mann-Whitney significance is obtained by
>> label permutation rather than a normal approximation. **At n=4 for GOSPEL a
>> normal approximation would be wrong anyway, so this is the better test.**

**The vectorisation, which is exact and not an approximation.** Ranks are
computed once on the pooled sample, then labels are permuted **over the ranks**.
Since the rank vector does not depend on which labels are assigned, this is
algebraically identical to re-ranking every permutation, and about three orders
of magnitude faster.

**The D4 null.** Bin the corpus vocabulary by ⌊log₂(count)⌋. For each dissent
unigram, draw a replacement from the same frequency bin, excluding real lexicon
words. 2000 draws. The statistic being nulled:

$$ separation = median(GOSPEL rates) − median(MYTH rates) $$

## 1.15 Round 4 result: nominally 3 of 4, actually nothing

`RESULTS-4.md`, run `0c765d0`, 11 August 02:17.

| tier | n | median rate /1000 | mean | hits | words |
|---|---|---|---|---|---|
| GOSPEL | 4 | **1.387** | 1.349 | 112 | 83,180 |
| TRAGEDY | 23 | 0.667 | 0.795 | 236 | 320,887 |
| MYTH | 71 | 0.547 | 0.594 | 365 | 612,835 |

| | result | |
|---|---|---|
| D1 ordinal medians | 0.547 < 0.667 < 1.387 | **PASS** |
| D2 GOSPEL > MYTH | U = 268, p = 0.00034 | **PASS** |
| D3 TRAGEDY > MYTH | U = 1027, p = 0.032 | **PASS** |
| D4 frequency-matched null | 591/2000 beat it, p = 0.296 | **FAIL** |
| D5 Prometheus top 3 of 23 | rank **13**, rate 0.656 | **FAIL** |
| D6 no myth above lowest Gospel | 7 of 71 exceed it | **FAIL** |

**That table read alone says 3 of 4 on the primary. It is not 3 of 4**, because
two sensitivity analyses were registered in advance and both break a passing
prediction.

**S1, core only.** Dropping the `unan` tag, the half disclosed in advance as at
higher risk of being motivated:

```
core only:   GOSPEL median 0.402   TRAGEDY 0.503   MYTH 0.325
             ordinal BREAKS (tragedy now above Gospel)
             GOSPEL > MYTH  p = 0.293      ← D2 gone
             TRAGEDY > MYTH p = 0.005      ← survives
```

>> The concepts that state Girard's actual claim, innocence, protest, denounce,
>> defence, plead, **carry none of the Gospel effect. The contaminated half
>> carries all of it. This is the disclosure coming true.**

**S2, epic excluded.** Restricting MYTH to mythography, n = 34:

```
MYTHOGRAPHY median 0.674    EPIC median 0.382    TRAGEDY median 0.667
GOSPEL  > MYTHOGRAPHY  p = 0.005
TRAGEDY > MYTHOGRAPHY  p = 0.388      ← D3 gone
```

**Mythography scores above tragedy.** D3 passed only because 37 epic texts drag
the myth tier down. The myth < tragedy half of the ordinal series does not
exist. What exists is **epic < everything**.

### Why D4 failed, and it is not what it looks like

The null matched **unigrams only**, 45 of the 64 lexicon unigrams present in the
corpus. Splitting the instrument in half explains everything:

| half | GOSPEL mean | TRAGEDY mean | MYTH mean |
|---|---|---|---|
| unigrams | 0.367 | **0.639** | 0.486 |
| phrases | **0.982** | 0.156 | 0.108 |

**The unigram half runs backwards.** On unigrams the Gospels score *lowest* of
the three tiers. The observed unigram separation is **−0.075 per 1000**, which
is why 591 random word-sets beat it.

>> D4 did not fail because the instrument is weak. It failed because **the null
>> tested the half of the instrument that carries no signal**, and the entire
>> effect lives in the phrase half, which **has never been tested against a null
>> at all.**

Recorded as a defect in the test design. The corrected version, a phrase-aware
frequency-matched null, is **round 5 with its own commit**, not a rerun folded
into this one.

### What is actually firing

Top six discriminators by GOSPEL-minus-MYTH mean rate:

| concept | tag | forms doing the work | G−M |
|---|---|---|---|
| some_others | `unan` | "others said", "some said", "some of them" | +0.328 |
| spare | `unan` | "let him go", "release him", "loose him" | +0.229 |
| false_witness | `core` | | +0.130 |
| division | `unan` | | +0.118 |
| not_all | `unan` | | +0.082 |
| no_fault | `core` | "no crime" | +0.076 |

**Four of the top five are `unan`.** And `defend` runs the wrong way: myth 0.084,
Gospel 0.000.

John, the highest-scoring Gospel: `others said` ×7, `division` ×3, `some of
them` ×3, `not all` ×3, `no crime` ×3, plus one each of `let him go`, `loose
him`, `release him`, `without a cause`. **Sixteen of its 26 hits are the "some
said / others said" narrative formula.**

Whether that formula is Girard's broken unanimity or **a translator's reporting
convention** is exactly what a whole-text rate cannot distinguish.

## 1.16 The D6 counterexamples, and the escape hatch that was refused

The pre-registration committed that any myth outranking the Gospels gets read
and named. Seven do.

**`orphic_hymns_2`**, 5,812 words, rate 2.24, the corpus maximum. Firing:
`defend` ×5, `blameless` ×4, `unjust` ×3, `spare the` ×1. **Every one is a
hymnic epithet or a petition addressed to a god.** "Blameless" is a standard
Orphic epithet. "Defend" is a prayer. None of it is a voice questioning a
victim's guilt. Same class of error as `king` inflating `marks` in round 1.

**`ovid_metamorphoses_9`**, 9,633 words, rate 1.76. `plead` ×3, `object` ×3,
`unjust` ×2, `divided` ×2. Ordinary rhetorical verbs inside speeches, and
`divided` in its physical sense.

**`hyginus_fabulae_2`**, 613 words with **one hit**. A rate artifact on a short
text and nothing else.

### The trap, named in the file so it would not be walked into

>> The obvious next sentence is "so these are false positives, therefore
>> Girard's universal negative survives." **That is the escape hatch and it is
>> refused.** What the inspection shows is that the instrument produces
>> counterexamples that are not counterexamples, which means **it cannot test a
>> universal negative at all, in either direction.** It could not have found a
>> real counterexample and distinguished it from an Orphic epithet. Girard's
>> claim is neither supported nor falsified here. **It is untested.**

## 1.17 One root cause for two rounds

Round 3 failed because `peak_min` is invariant to word order, so it could not
locate episodes.

Round 4 fails the same way one level up. Girard's claim is not "Gospels contain
more division-language than myths." It is that **at the moment of collective
violence**, a voice separates from the crowd. John's three `division` hits are
at 7:43, 9:16 and 10:19, and they are disputes about **who Jesus is**, not
dissent from a killing. A whole-text rate cannot tell those apart, because
position in the narrative is exactly the information a rate discards.

>> **Two failed rounds, one cause: whole-text rates cannot test claims about
>> narrative structure.** That is the finding of round 4 and it is worth more
>> than a pass would have been.

Also settled by D5: **`Prometheus Bound` does not replicate.** `FINDINGS.md` §2
had flagged it as the one tragedy scoring 0.00 on the four-bucket MIN and "the
one tragedy that unambiguously sides with its victim", and forbade the claim
until tested. Tested, rank 13 of 23. The anomaly was four-bucket vocabulary, not
dissent. That note is closed.

## 1.18 Round 5: the lost null test, reconstructed

Run **14 August 2026**, after this document's first draft named the missing
script as the project's highest-value outstanding item. Spec `6d11a56`, results
`4e81d36`.

### The discipline, applied to the reconstruction itself

The hazard is specific. The reconstruction has free parameters the committed
record does not fix, and there is a target number in view. **With several free
parameters and a known answer, a reconstruction can be walked anywhere, one
defensible choice at a time.** That is Correction 1 again, moved from the sample
to the procedure.

So `NULLTEST-2-SPEC.md` enumerates every free parameter and every defensible
resolution of each, fixes the verdict rule in advance, and commits to running the
**whole grid** rather than choosing afterwards. Committed before `nulltest2.py`
existed on disk, and the manifest proves it:

| commit | contains |
|---|---|
| `6d11a56` spec | `NULLTEST-2-SPEC.md` **only** |
| `4e81d36` results | `RESULTS-NULL2.md`, **`nulltest2.py`**, `results_nulltest2.csv` |

### Finding zero, recorded before any null ran

The **deterministic** half should have been trivially reproducible. It is not.
Eight candidate definitions of "separation" were computed against the committed
CSV, and the search is declared in the spec rather than reported as a lucky hit.
Mean of per-text rates, TRAGEDY minus CONTROL, is the only near candidate at
**+6.1067**. Restoring the pre-correction truncated text gives **+6.1442**.

>! **The committed +6.10 matches neither.** And `CORRECTION-1.md` states the
>! correction moves the effect size "6.10 → ~6.07", where the CSV says the
>! movement is **6.144 → 6.107**. Direction right, both endpoints displaced by
>! about 0.037. Small, checkable, and still unexplained.

### The five free parameters

| | parameter | resolutions run |
|---|---|---|
| F1 | corpus state | `corrected` / `truncated` (pre-Correction-1) |
| F2 | matching procedure | `band` (round 3's) / `log2` (round 4's) |
| F3 | phrase handling | `phrase-aware` / `unigrams-only` |
| F4 | frequency pool | `full` 76 texts / `groups` 17 texts |
| F5 | seed | three |

**2 × 2 × 2 × 2 × 3 = 48 configurations**, each of 2000 draws.

### The verdict, by the rule fixed in advance

>! **UNSTABLE.** 24 of 48 give p < 0.05, 24 give p ≥ 0.05. The spec says that
>! when the grid straddles, "p = 0.0045 cannot be cited, whatever the majority of
>! configurations say," and no configuration may be selected afterwards.

### But the grid does not scatter. It splits, on one parameter

| arm | n | p range | null mean | null sd |
|---|---|---|---|---|
| **`unigrams-only`** | 24 | **0.00050 to 0.00700** | −1.93 to +0.40 | **2.46 to 3.58** |
| **`phrase-aware`** | 24 | **0.15892 to 0.54123** | −5.28 to +7.14 | 10.48 to 13.09 |

Corpus state, matching procedure, pool and seed move p between 0.0005 and 0.0070
and do nothing else. That is striking stability across four free parameters.

### The lost script is identified, and not by its p-value

This is the part that matters. `RESULTS-2.md` committed **three** numbers in July
and two of them have nothing to do with the p-value:

| committed | reconstructed, unigrams-only | inside? |
|---|---|---|
| null mean **−0.16** | −1.93 to +0.40 | **yes** |
| null sd **2.95** | 2.46 to 3.58 | **yes** |
| beat count **8 of 2000** | 0 to 13 | **yes** |
| p **0.0045** | 0.0005 to 0.0070 | **yes** |

Against the phrase-aware arm the committed sd of 2.95 is not merely outside the
range, it is **four times smaller than anything that arm produces.**

>> **So the original matched unigrams only, and under that procedure the committed
>> result reproduces.** The identification rests on a mean and a standard
>> deviation committed three weeks earlier, which could not have been fitted here.

**The truncation account also checks out.** The sanity reconstruction gives 15.11
against `CORRECTION-1.md`'s committed 15.12 truncated, and 14.67 against its
14.67 corrected.

### Why the phrase-aware arm does not count against round 2

Two measurements, **neither of which involves a null distribution or a p-value.**

**Phrases carry 0.86% of round 2's effect.** Observed separation is +6.1043 with
phrases and +6.0518 without. The four-bucket lexicon is **99.1%
unigram-driven**, so a unigram-matched null tests essentially the whole
instrument.

>> **This is the precise inverse of round 4**, where the phrase half scored
>> GOSPEL 0.982 against a unigram half at 0.367 that ran **backwards**. There a
>> unigram-only null tested the half with no signal, and `RESULTS-4.md` correctly
>> called that a defect. **The same procedure is appropriate in one round and
>> defective in the other, and what decides it is a property of the lexicon, not
>> of the null.**

**And the phrase-aware arm is not a frequency-matched null.** Inherited from
round 3's `build_pseudo`, it matches a multi-word form on the corpus frequency of
its **first token**:

| phrase | occurrences | first-token occurrences | inflation |
|---|---|---|---|
| `as one man` | 0 | 4,397 | 4397× |
| `with one voice` | 3 | 8,294 | **2765×** |
| `to pieces` | 16 | 16,734 | 1046× |
| `in pieces` | 13 | 11,199 | 861× |
| `one accord` | 5 | 1,924 | 385× |

**Median inflation across all 68 phrases: 113×.** In aggregate a draw replaces
**206 phrase-occurrences with words totalling 65,137**, a 316-fold inflation.
Which is visible directly in the output: the null sd jumps from about 3 to about
11 the moment the arm is switched on.

>! **Third instance of the same null-design failure in this repository.** Round
>! 3's Null B favoured uniformly-spread sets over clumpy ones by construction.
>! Round 4's D4 nulled the half of the instrument with no signal. Round 5's
>! phrase-aware arm matches a 3-occurrence phrase to an 8,294-occurrence word.
>! **Every one is a mismatch between what the null holds constant and what the
>! statistic is sensitive to.** Three times now.

### The part where the discipline gets tested, and reported rather than dodged

The verdict rule was written before running. The literal answer is UNSTABLE. And
the argument above discounts half the grid, produced **after** seeing which half
was which. On its face that is the excluded Diodorus page one level up.

`RESULTS-NULL2.md` §4 states the three things that make it admissible, so a
reader can check rather than trust:

1. **Both measurements are independent of every p-value.** The 0.86% and the
   316× come from the observed corpus. Neither uses a null draw. **Both would
   read identically if the p-values had come out reversed.**
2. **The argument is directional, not selective.** It does not say the
   unigrams-only arm is right because it passed. It says the phrase-aware arm is
   an invalid null **whatever it produces**.
3. **It does not restore the claim.**

>> **And the honest concession, recorded in the results rather than patched into
>> the spec: the verdict rule was written badly.** It anticipated that the arms
>> would be *different valid choices* and provided for a scatter. It did not
>> anticipate that one arm would be an **invalid instrument**, and gave no way to
>> say so. That is a defect in my own pre-registration, discovered by running it.

### What round 5 establishes, and what it does not

**Established.** The lost script is identified. Under that procedure the
committed result reproduces at p between 0.0005 and 0.0070 across twelve
combinations of the remaining parameters, against a committed 0.0045. Round 2's
unigram matching was appropriate for round 2's lexicon. Correction 1's truncation
account is faithful to two decimals.

**Not established.** **A genuinely phrase-aware null has still never been built,
for any round of this project.** The correct construction matches each phrase
against *other phrases* of comparable corpus frequency, which no script here
does. Until it exists, the 0.9% of round 2 that lives in phrases is untested and
the **100% of round 4** that lives in phrases is untested. The spec's own verdict
rule returns UNSTABLE. And the committed effect size is still not exactly
reproducible.

**Round 6 is that null**, and it goes to **round 4 first**, because that is where
the phrase half carries the entire effect and where the answer could still go
either way.

>> **Built and run the same day. See §1.19.** The phrase half passed at **0 of
>> 2000**, and a translation control that had never been applied to this construct
>> passed at 20.4%. So round 5's diagnosis was right and the thing it said was
>> untested is now tested. **What it did not change: S1 still destroys the tier
>> result, so the effect remains entirely inside the contaminated half.**

>> And what none of it touches. `PREREGISTRATION-2.md` said it before the result
>> existed: a confirmation here means only that the four stereotypes co-occur more
>> in persecution-shaped texts than in others, **the first half of Girard's claim,
>> and the uncontroversial half.** Rounds 3 and 4 tested the systematic half and
>> both failed. **Restoring one number does not move that.**

## 1.19 Round 6: the phrase-aware null, and the translation control

Run **14 August 2026**, immediately after round 5 identified the omission and
sent it here. Pre-registration `4d9f8cf`, containing that file and nothing else.
Results `d364559`, where `score6.py` arrives.

**Four passes, no falsifier fired. The first clean round since round 2.** And the
reason it changes less than that sounds is fixed in the pre-registration, before
anything ran.

### What round 4 left open, exactly

| half of the instrument | GOSPEL | TRAGEDY | MYTH |
|---|---|---|---|
| unigrams | 0.367 | **0.639** | 0.486 |
| phrases | **0.982** | 0.156 | 0.108 |

D4 matched **unigrams only**, so it nulled the half that runs backwards, and 591
of 2000 random sets beat an observed separation of **−0.075**. Round 4's actual
finding, the roughly ninefold phrase separation, had **never faced a null**.

### N1, the null that should have been built three rounds ago

Every one of the 53 lexicon phrases (34 bigrams, 19 trigrams) replaced by a real
n-gram **of the same word length**, matched on corpus frequency within a 1.5×
band, drawn from `corpus3`'s own inventory of **378,412 distinct bigrams and
808,967 distinct trigrams**. 2000 draws.

| | observed | null mean | null sd | beat | p |
|---|---|---|---|---|---|
| **P1** full lexicon | +0.8396 | −0.1203 | 0.2836 | 14 / 2000 | **0.0075** |
| **P2** phrases only | **+0.9184** | +0.0722 | 0.1330 | **0 / 2000** | **0.0005** |

**F3 did not fire at 0.0%.** All 53 phrases found a match, so this null is not
under-powered in the way round 3's `peak_min` was, where the statistic was a
minimum over four counts with median 2.

**Not one draw of two thousand beat it.** Random phrases of the same shape and
the same rarity do not concentrate in the Gospel tier. These do.

### N2, the control that answers the question round 4 could not

`NEXT.md` had named register as "the largest threat to this test," and
`RESULTS-4.md` ended on it: is "some said / others said" Girard's broken
unanimity, or **a translator's reporting convention?**

A second translation of the same four gospels has been in this repository since
Layer 1. `interlock/corpus/canonical/` holds the KJV, 84,025 words against the
ASV's 83,180. Same text, different translator, **290 years apart**.

| gospel | ASV /1000 | KJV /1000 | delta |
|---|---|---|---|
| Matthew | 0.724 | 0.674 | −6.9% |
| **Mark** | 1.141 | 0.856 | **−25.0%** |
| Luke | 0.854 | 0.731 | −14.4% |
| John | 1.207 | 1.255 | +3.9% |
| **median** | **0.998** | **0.794** | **−20.4%** |

Inside the 25% bound, well inside the 40% falsifier. For scale, round 2's paired
*Agamemnon* translations differed by **17.2%**, and `RESULTS-2.md` calls that
control "the most load-bearing" in the project. And GOSPEL > MYTH survives the
whole substitution at **p = 0.00064**.

>> **So the phrase family is not the ASV's private habit.** Translators working
>> independently, in a different English, three centuries apart, put comparable
>> amounts of it into the same four texts. That was a live and serious explanation
>> of round 4's entire result and it is now substantially weakened.

**Though it is translation-sensitive, and Mark says so.** Mark alone drops 25.0%,
exactly at the bound, and the median moves 20.4% in one direction. A pass, not a
clean bill of health.

### What has not changed, which is the section that matters

The round-4 sensitivity analyses were rerun on the KJV substitution:

```
S1  core only,      KJV GOSPEL > MYTH ............ p = 0.254
S2  epic excluded,  KJV GOSPEL > MYTHOGRAPHY ..... p = 0.011
```

Round 4's S1 took GOSPEL > MYTH from p = 0.0003 to p = 0.293. On the KJV it goes
to **0.254. The finding is unchanged.**

>! **Everything round 6 established is about the `unan` half**, the half
>! `PREREGISTRATION-4.md` §7 disclosed in advance as at higher risk of being
>! motivated, because I already knew John repeats a division formula before the
>! lexicon was written.
>!
>! The `core` concepts are the ones that state Girard's actual claim: innocent,
>! guiltless, no fault, done nothing, unjust, false witness, protest, object,
>! denounce, defend, plead. **They carry none of the effect, in either
>! translation.** What survives two nulls and a translation swap is division,
>! some-said, not-all, spare-him and withheld consent.

**And the ceiling fixed before running holds.** `PREREGISTRATION-6.md` §5 stated
that N1 cannot distinguish Girardian dissent from a translation convention,
because a convention is also a set of rare n-grams concentrated in one tier; that
N2 removes one translator's habit and not the class; and that neither test
touches round 4's root cause, since a whole-text rate discards position and both
tests here are whole-text rates.

>> There was a clean sweep of P1 to P4. **That finding stands. Round 4's verdict
>> is unchanged**, because S1 and S2 were its controls and S1 still breaks it.

### The exact amendment round 4 now earns

`RESULTS-4.md` §6 said of the phrase half: "**Untested against a null and
confounded with translation idiom. Not a result. A thread.**"

- **Tested against a null.** 0 of 2000.
- **Not confounded with translation idiom**, on the one alternative translation
  available, at 20.4%.
- **Still not a result about dissent.** It is a result about a phrase family that
  lives entirely in the tag disclosed as contaminated, and that a whole-text rate
  cannot locate at the moment of collective violence.

### One deviation, declared rather than absorbed

2000 rescorings of 98 texts is unrunnable if every text is rejoined into a string
on each draw, so `score6.py` pre-counts unigrams, bigrams and trigrams per text.

The two counters disagree on **exactly one text of 98**. `euripides_alcestis`
contains "not all" twice in succession; `str.count` is non-overlapping and
consumes the trailing space, so it counts one where the n-gram counter counts
two. Reference 0.6040 against 0.6589, a gap of 0.055 per 1000.

**The n-gram counter is the more correct count. The reference is what round 4
committed.** Decision applied throughout: **observed values use the reference
scorer**, so they stay exactly comparable with round 4, and **null draws use the
fast path**, where random n-grams cannot produce that adjacency. The script
verifies the tier medians against `RESULTS-4.md`'s committed **1.387 / 0.667 /
0.547** and reproduces them exactly before drawing anything. No tier median moves
either way.

## 1.20 Rounds 7 and 8: localization, tested twice because the first null was wrong

The bottleneck since round 3, and the thing rounds 3 and 4 both died for lack of.
Run **14 August 2026**, in two rounds, because the first one used a null that
could not work.

### Round 7: the statistic, and why it has no window

For each dissent hit, the distance in tokens to the nearest **violence** hit; the
text's value is the median of those. Girard's claim predicts it is **small**: the
dissenting voice speaks at the lynching, not three chapters away.

**No window anywhere.** A windowed version has round 3's disease. At a
1000-token window the median text holds **0.63** dissent hits, which is worse
than counting to two. A hit-level distance uses every hit and needs no binning.
That calculation was run **before** the pre-registration was written, which is
the thing `RESULTS-3.md` says was not done in round 3.

### Round 7 failed, and two falsifiers fired

| | prediction | result |
|---|---|---|
| L1 | ≥3 of 4 Gospels co-locate | **FAIL, 0 of 4** |
| L2 | ordinal series on z | **FAIL** |
| L3 | the *Bacchae* | **FAIL**, p = 0.888 |
| L4 | above chance overall | pass, **vacuously**, 4 of 66 against 3.3, none a Gospel |

**M3 fired**, a power falsifier that exists precisely because round 3 had none.
Median z **−0.012**, inside the ±0.2 band fixed in advance, so the round is
reported **under-powered** rather than as an absence. **M1 fired**: myth passed at
7.5% against the Gospels' 0.0%.

**And the disclosed expectation came true.** `PREREGISTRATION-7.md` §8 stated
before scoring that I expected L1 to fail, because `RESULTS-4.md` had already
placed John's three `division` hits at 7:43, 9:16 and 10:19, chapters from the
passion. **John came out at p = 0.876.** Written down first.

### The reason it failed was the null, and the reason is measurable

Mean z was **positive in every tier**: GOSPEL +0.276, TRAGEDY +0.665, MYTH
+0.326. Positive means dissent sits *farther* from violence than chance. Every
tier repelling is not a Girardian result, not an anti-Girardian result, and not
plausible as a fact about narrative.

Round 7's null permuted **all** tokens, which destroys the arrangement of the
**violence** hits as well as the dissent hits. So:

| tier | n | median index of dispersion of violence-hit gaps |
|---|---|---|
| GOSPEL | 4 | **466.9** |
| TRAGEDY | 23 | **263.3** |
| MYTH | 61 | **350.9** |

Uniform scatter is 1.00. **All 88 measurable texts are above it, median 323.**
Violence vocabulary is concentrated in battle scenes and executions by a factor
of a few hundred. A uniform-shuffle null spreads it evenly, shrinks the
nearest-violence distance under the null, and pushes z positive regardless of
where dissent sits.

>! **Fourth instance of the same null-design failure in this repository.**
>!
>! | round | null | the mismatch |
>! |---|---|---|
>! | 3 | Null B | a **minimum** favours uniformly-spread sets over clumpy ones by construction |
>! | 4 | D4 | nulled the **unigram half** when the whole effect lived in phrases |
>! | 5 | phrase-aware arm | matched a phrase to its **first token's** frequency, inflating occurrences 316-fold |
>! | 7 | Null A | **destroyed the violence clustering the statistic depends on** |
>!
>! Every one is a mismatch between what the null holds constant and what the
>! statistic is sensitive to. **This is the most transferable thing in the
>! repository and it is worth more than any of the p-values.**

### Round 8: one line changed, and the power problem solved

**Hold the violence positions exactly as they are. Permute only the dissent
positions.**

And the statistic was rebuilt to pool. For each dissent hit, *u* = the fraction
of that text's token positions lying at least as close to a violence hit. **Under
random placement *u* is exactly uniform on [0,1]**, for any text length and
however clustered the violence is, so the clustering that broke round 7 is
absorbed into the definition instead of being destroyed by the null. The tier
statistic is the mean of *u* over every hit in the tier: **0.5 under the null,
below 0.5 under Girard.**

Pooling gives **112 / 235 / 334 hits** instead of round 7's per-text median over
five. Power solved rather than declared.

| tier | texts | hits | **U** | null mean | null sd | p |
|---|---|---|---|---|---|---|
| **GOSPEL** | 4 | 112 | **0.4171** | 0.5018 | 0.0263 | **0.0015** |
| TRAGEDY | 23 | 235 | 0.4838 | 0.5025 | 0.0184 | 0.161 |
| MYTH | 50 | 334 | 0.4832 | 0.5018 | 0.0159 | 0.124 |

>> **U1 passed. In the four Gospels, dissent vocabulary sits closer to violence
>> vocabulary than chance places it, at p = 0.0015.** That is the first positive
>> localization result in eight rounds, and it is the shape of the claim Girard
>> actually makes rather than the frequency claim rounds 2 and 4 tested.

### And then N3 fired

| tier | full lexicon | **core only** | core p |
|---|---|---|---|
| GOSPEL | **0.4171** | **0.5143** | 0.602 |
| TRAGEDY | 0.4838 | 0.4838 | 0.196 |
| MYTH | 0.4832 | 0.5053 | 0.568 |

**The Gospels go from lowest to highest.** On the concepts that state Girard's
actual claim — innocent, guiltless, no fault, protest, denounce, defend, plead —
the Gospels show no co-location at all, and sit slightly *farther* from violence
than chance.

>! **The entire U1 effect belongs to `unan`**: division, some said, others said,
>! not all, spare him, withheld consent.
>!
>! **This is the fourth consecutive round to find the same split.** Round 4's S1,
>! round 6's S1 on both translations, round 7's core sensitivity, and now round 8.
>! **The `core` half has never carried anything, on any measure, in any round.**

**U2 failed**: tragedy 0.4838 and myth 0.4832 are the same number to three
decimals, so there is no ordinal series, only a Gospel effect and a flat
background. **U4 failed instructively**: the gap is **+0.0661**, which *clears*
the 0.05 margin the pre-registration demanded, but tier-label permutation gives
p = 0.123. **Magnitude without significance**, the mirror image of the restraint
control's H3 and of interlock P5.

### The Bacchae, a fourth time

| round | operationalization | result |
|---|---|---|
| 2 | whole-text rate, four buckets | rank **35 of 72** |
| 3 | `peak_min` against a word-shuffle null | **p = 0.66** |
| 7 | distance to nearest violence, uniform null | **p = 0.888** |
| 8 | co-location, violence held fixed | **p = 0.414** |

Four pre-registered tests, four operationalizations, four failures.

### And a falsifier I wrote correctly and coded wrongly

`score8.py` printed "core order matches full lexicon? yes" and did not flag N3.
The check was `corder == u2`, comparing **two booleans rather than two
orderings**. Both orderings failed their own strict test, both booleans were
`False`, so the comparison returned `True` and printed reassurance.

>! **N3 fires because I read the table, not because the script caught it.** A
>! falsifier stated correctly and coded incorrectly is worse than no falsifier,
>! because it prints reassurance. It was caught only because the numbers are
>! printed alongside. Recorded in the same class as round 3's Null B and round 5's
>! badly written verdict rule.

### What survives, in one sentence

>> **The Gospels put crowd-division language near violence language more than
>> chance does. Myth and tragedy do not, and the concepts that state Girard's
>> claim do not, in any tier.**

And the ceiling a pass does not lift: this measures co-location of two
vocabularies. It does not show the dissenting words belong to a person separating
from a crowd, that the violence is collective, or that the Gospel effect is
Girard's mechanism rather than passion narratives putting speech and killing in
the same chapters for ordinary narrative reasons.

**No round 9 on this construct.** `PREREGISTRATION-8.md` §8 committed that a
third null would be the move the rules forbid.

## 1.21 The diagnostic: why `core` never carried anything, and what does

**Not a round. Exploratory, post-hoc, computed on already-scored texts, and §4
below is why it cannot be claimed.**

### The standing puzzle

Four rounds, four different measures, the same result:

| round | measure | what `core` did |
|---|---|---|
| 4 | whole-text rate, ASV | S1 took GOSPEL > MYTH from p = 0.0003 to **0.293** |
| 6 | whole-text rate, KJV | S1 gave **p = 0.254** |
| 7 | distance to nearest violence | every tier positive, **Gospels worst** |
| 8 | co-location, violence fixed | GOSPEL **0.5143**, highest of three tiers |

"The effect lives in `unan`" was reported four times. It is true and it is not an
explanation.

### `core` is three different things, and they cancel

| sub-family | concepts | GOSPEL | TRAGEDY | MYTH | G/M |
|---|---|---|---|---|---|
| **A. the accusation is EMPTY** | no_fault, false_witness, done_nothing, without_cause, wrongly, unjust | **0.373** | 0.162 | 0.101 | **3.68×** |
| **B. someone ADVOCATES** | protest, object, denounce, defend, plead, speak_for | **0.012** | 0.212 | 0.201 | **0.06×** |
| **C. the victim is INNOCENT** | innocent, guiltless, not_guilty | 0.060 | 0.165 | 0.106 | 0.57× |
| | **all `core`, as scored in rounds 4-8** | 0.445 | 0.542 | 0.413 | **1.08×** |

>! **A runs 3.68× toward the Gospels. B runs 17× away. They cancel to 1.08×.**
>!
>! **Six of sixteen `core` concepts fire zero times in the Gospels**:
>! `not_guilty`, `slander`, `protest`, `denounce`, `defend`, `plead`,
>! `speak_for`. And the two dominating the myth tier, `defend` at 0.109 and
>! `plead` at 0.052, are exactly the forms that fired on hymnic epithets in
>! `orphic_hymns_2` and produced round 4's false counterexamples.
>!
>! `core` has not been measuring nothing. **It has been measuring two opposite
>! things at once and reporting their difference.**

### And the split is not arbitrary. The file said so itself.

`dissent.py`'s header, written before any of this was scored:

>> "So the construct is **not innocence**. It is a voice that **questions the
>> verdict** and **breaks the unanimity**. Two different things, and the second is
>> the one Girard says is absent from myth."

And Girard, quoted in the same header:

>> "**not merely the innocence of the victims versus their guilt**, but the fact
>> that, in mythology, no one ever questions this guilt."

>> **The header states that innocence is not the differentia. The bucket then
>> leads with `innocent`, `guiltless`, `not_guilty` and fills out with `defend`,
>> `plead`, `protest`, `denounce`, `speak_for`.** Sub-families B and C together
>> are ten of the sixteen concepts, and neither is what the sourcing note says the
>> construct is. **The bucket contradicts its own docstring**, and that is
>> checkable in the file rather than a matter of interpretation.

### What every surviving result in this project has in common

| what separates the Gospels | what does not |
|---|---|
| the accusation is empty (no fault, false witness, done nothing) | the victim is innocent (innocent, guiltless) |
| the crowd is divided (division, some said, others said, not all) | someone advocates for him (defend, plead, protest) |
| the crowd is asked to release him (spare him, let him go) | |

**Both surviving columns are about the collective's verdict. Both failing columns
are about the victim's character or his supporters.** That is a sharper construct
than the project has been testing, and it is closer to the source passage than
the lexicon built from it.

### Why it cannot be claimed, and what would test it

This split was found by looking at corpus3 **after eight rounds of scoring it**.
Re-scoring corpus3 with `core` split three ways would be Correction 1's excluded
Diodorus page, moved from the sample to the lexicon. It is the most tempting move
available and it is forbidden.

**And there is no held-out sample on disk.** One text in `corpus/` or `corpus2/`
but not in the scored tier set, and it is a second translation of a text already
scored. Six apocrypha never scored on this lexicon, but they are Jesus-narratives
and cannot be the myth tier of a tier contrast.

**Round 9 needs new texts**, with the fetch list frozen before anything is
scored, the three-way split fixed by the sourcing note rather than by the
numbers, and B's backwards run reported as part of the test.

### The other structural idea, and why this corpus cannot carry it

Girard's claim is about **a voice**, and no instrument here has ever
distinguished a character's speech from the narrator's. `orphic_hymns_2` firing
on hymnic epithets is exactly that confusion.

| sample | quote marks | speech verbs | usable |
|---|---|---|---|
| `gospel_john` | **0** | 454 | speech verbs only |
| `euripides_bacchae` | 94 | 17 | quote marks |
| `homer_iliad_1` | 70 | 42 | quote marks |
| `apollodorus_2` | 1 | 30 | **neither** |
| `orphic_hymns_2` | **0** | **0** | **neither** |

>! A speech-versus-narration instrument on this corpus would measure
>! **typographic convention across four source sites and a dozen translators**,
>! and the tier contrast would track the convention rather than the texts. That is
>! the same mismatch that produced all four null-design failures. **Building it
>! anyway would be the fifth.**

---pagebreak---

@@ PART II — INSTRUMENT 2: THE CONVERSION INSTRUMENT

## 2.1 The claim under test

`conversion/PREREGISTRATION.md`, frozen `d671056`, 12 August 16:50.

Girard, *Deceit, Desire and the Novel*, p. 294. Novelistic conversion is a
**complete inversion of the experiential register**, given as three pairs:

1. **deception becomes truth** — the subject can name the mediation
2. **agitation becomes repose** — the perpetual motion of the triangle stops
3. **hatred becomes love** — the rival can be looked at without measuring

Girard treats these three as **one event with three faces**, and uses the
presence of that event to separate *novelistic* works from *romantic* ones.

That is two separable empirical claims:

- **(i)** the three components co-occur; they are a system, not a list
- **(ii)** they are concentrated in the canon Girard names

**(i) is the primary test**, because it is what makes "conversion" a natural kind
rather than a word covering three unrelated properties.

## 2.2 The unit, and the rule attached to it

**The ending window: the last 1,500 words of the novel**, after Gutenberg
boilerplate, afterwords and translator's notes are stripped.

Fixed in advance, not adjustable per text. The rule, quoted:

>> If a text's conversion is famously outside its last 1,500 words, that text
>> scores 0 on the affected bit and the mismatch is reported as a limitation of
>> the window, **never fixed by widening it for that text. Widening the window is
>> a new pre-registration with its own commit.**

## 2.3 The rubric: three bits, and the evidence rule

**A bit scores 1 only if a quoted span from inside the window is recorded in the
results file. No quote, no point.** Same rule as the interlock instrument's FIT
criterion: the text supplies the evidence, not the coder.

**T, deception becomes truth.** Scores 1 if the protagonist refers to their own
former wanting as derived, borrowed, illusory, or belonging to another, or names
a specific person or model as its source. Does **not** score for general regret,
moral repentance, shame about conduct, or the narrator explaining the
protagonist from outside in a third-person text.

**R, agitation becomes repose.** Scores 1 if **both**: (a) a quoted span shows
the protagonist stopping, renouncing, releasing or coming to rest, **and** (b) no
new object of desire is introduced after that span, inside the window. Death
alone does not score R. Dying is termination, not repose.

>! Disclosure written into the rubric: clause (b) was suggested by the Plath case
>! that motivated the study. It is retained because it is independently derivable
>! from Girard's own definition of repose as the stopping of the triangle's
>! motion, which requires that no new triangle start. Flagged so the effect stays
>! visible.

**L, hatred becomes love.** Scores 1 if a former rival or model is present or
named and the protagonist's attitude shows no comparison or measurement.
**Score NA if the novel has no rival or model figure at all. NA is not 0.**

## 2.4 The sample design

**Set A, Girard's canon.** Cervantes, Stendhal, Flaubert, Proust, Dostoevsky.
Every novel by these five retrievable in English from Gutenberg. **No selection
by me among them.**

**Set B, control.** Taken from Gutenberg's "Top 100 EBooks last 30 days", an
externally generated ranking, applied mechanically in list order: single-author
prose fiction of at least 40,000 words, nothing by a Set A author, no
anthologies or plays or poetry or non-fiction.

**Set C, the target.** *The Bell Jar*. **Scored last, after Sets A and B are
scored and committed.** It motivated the instrument, so it cannot calibrate it.

## 2.5 The mathematics

**P2, the primary test.** Let M be the n×3 matrix of bits. Define

$$ E(M) = #{ rows at (0,0,0) or (1,1,1) } $$

Null hypothesis: the three bits are independent with the observed marginals.
Generate it by **permuting each column independently**, 10,000 times. This
preserves each bit's marginal rate exactly and destroys any association between
them.

$$ p = ( #{ null ≥ obs } + 1 ) / ( NPERM + 1 ) $$

>> **Why this is the right test for "one event with three faces."** If T, R and L
>> are three faces of one thing, endings pile up at the extreme cells. If they are
>> three unrelated properties, the cells fill at the independence rate.

**P3.** Permutation test on the group labels, difference of mean bit-sums,
10,000 shuffles.

**Pairwise association.** Phi coefficient for each pair, with a permutation null
on the second variable, two-sided.

## 2.6 What ran, and what did not

`conversion/RESULTS.md`, `cf4bfa0`, 12 August 17:12.

>> **The fetch was killed partway through, so Set B does not exist and P2 and P3
>> were never run.**

Not retrieved, therefore not scored: **all Dostoevsky, all Proust.** Their
absence is a hole in Set A, not a result about them. Dostoevsky is where
Girard's strongest conversion claims live.

All five scored windows are **tier V**: the last 1,500 words were cut from a text
on disk and read. No score comes from memory.

| # | text | T | R | L | sum |
|---|---|---|---|---|---|
| 1 | *Don Quixote* (Ormsby, PG 996) | 1 | 1 | 1 | **3** |
| 2 | *The Charterhouse of Parma* (PG 57638) | 1 | 1 | 0 | **2** |
| 3 | *The Red and the Black* (PG 44747) | 0 | 1 | 0 | **1** |
| 4 | *Madame Bovary* (PG 2413) | 0 | 0 | 0 | **0** |
| 5 | *The Bell Jar* (Set C, scored last) | 0 | 0 | 0 | **0** |

## 2.7 The quoted spans

**Quixote T.** *"I was mad, now I am in my senses; I was Don Quixote of La
Mancha, I am now, as I said, Alonso Quixano the Good."* And the mediation named
as transmitted: *"Forgive me, my friend, that I led thee to seem as mad as
myself, making thee fall into the same error I myself fell into."*

**Quixote R.** Sancho offers a **new** project, the shepherd's life, and Quixote
refuses it: *"in last year's nests there are no birds this year."* Clause (b)
satisfied in the text's own words.

**Quixote L.** The rival is Avellaneda, the false author: *"they beg of him on my
behalf as earnestly as they can to forgive me."*

**Charterhouse T.** *"ever since the moment when I had the happiness of being
locked up by Barbone, ambition has been to me an empty word."*

**Charterhouse L = 0.** Fabrizio has his rival, the Marchese Crescenzi,
kidnapped **inside the window**. Rivalry is operative, not dissolved.

**Red and Black T = 0.** Julien names a mediator, but somebody else's: *"This
idea of going to Paris is not your own. Tell me the name of the intriguing woman
who suggested it to you."* The rubric requires the protagonist to name the source
of **their own** wanting. His does not appear in the window; the prison
conversion sits just outside it.

**Red and Black L = 0.** The measuring is still running: *"the Maslons, the
Valenods, and the thousand other people who are worth more than they."*

**Bovary, all three = 0.** The protagonist is not in her own ending window.
Charles refuses to name any mechanism (*"It is the fault of fatality!"*, which
Flaubert marks as *"a fine phrase, the only one he ever made"*), and metaphysical
desire is still arriving rather than departing: *"He would have liked to have
been this man."* The last sentence is a triangle paying out: *"He has just
received the cross of the Legion of Honour."*

## 2.8 P1 and P4 both failed

**P1.** Predicted T = 1 in ≥70% of Set A and sum ≥2 in ≥70%. Observed **2 of 4
(50%)** on both. F4 also fired (Set A under 6 texts), so this is descriptive and
carries no p-value. But the direction is not marginal. **Girard's canon does not
pass Girard's own definition when the definition is applied to a fixed window.**

**P4.** Predicted, in advance and in conversation before the rubric existed:
*The Bell Jar* scores T = 1, R = 0, L = 0. Observed **(0, 0, 0)**.

R and L came out as predicted, with the quotes the prediction was built on.
R = 0 because the renunciation is there (*"'Never,' I said, and hung up with a
resolute click. I was perfectly free."*) but clause (b) breaks: *"my red wool
suit flamboyant as my plans"*, the unanswered *"I wonder who you'll marry now"*,
and the last line is an entrance.

**T failed for the same reason Red and Black failed.** Esther's naming of the
mechanism is real and quotable, *"for the price of their care and influence, have
me resemble them"*, but it is in **chapter XVIII**, roughly **nine thousand words
before the end**. The window cannot see it.

**Not fixed.** Widening the window to reach it would be tuning the instrument to
make a text pass.

**One operationalization disclosed during scoring.** The L rubric as written
scores 1 when the attitude "shows no comparison or measurement", which lets
silence score. Applied literally, Plath's funeral scene would score L = 1 on an
absence. The stricter reading was applied throughout: **L requires positive
regard toward the rival, not merely the absence of measuring.** Quixote scores
under it, Plath does not. Recorded because it changed a score, and it was applied
to every text, not to the one that needed it.

## 2.9 What survived, and neither part was predicted

**5.1 The canon spreads across the whole range: 3, 2, 1, 0.**
If conversion were one event with three faces, Girard's own novels should pile up
near 3. Across the four retrieved they occupy **four different scores.** Even
granting that the window mislocates two of them, *Don Quixote* at 3 and *Madame
Bovary* at 0 are both correctly scored and both are core cases. P2 was designed
to test exactly this and never ran, but the qualitative pattern is already
pointing **away from the bundle.**

**5.2 Bovary scores 0 because the conversion in Flaubert is not in Emma.**

Girard classes *Madame Bovary* as **novelistic**, the highest category he has,
and its ending scores the same as a novel he would call romantic. The reason is
visible in the text: **the lucidity in Flaubert belongs to the narration, not to
any character.** Nobody in that book ever sees the triangle. The author does,
continuously, and hands it to the reader over the characters' heads.

>> So the three pairs describe **what happens to a character**, while *novelistic*
>> names **where the author is standing**. The instrument, applied honestly,
>> measures the wrong object, and **it took a failing score on Flaubert to show
>> it.**

## 2.10 Set D: your own novella, scored after the results were committed

`930d8e3`, 12 August 17:25.

| text | T | R | L | sum |
|---|---|---|---|---|
| *The Crowning* (19,146 words) | 1 | 0 | NA | 1 of 2 applicable |

**T = 1**, and it lands on the last page: *"It was warm because I did."*
Supported by *"I carried it down seven floors, held it toward a gate that did not
want it, put it back on my own head, and called the act restraint."*

**R = 0, and the results file calls it the least defensible score in the run.**
The cessation is explicit (*"I stopped walking"*, *"I do not close the
distance."*) and then the final sentence is *"I am going to open my mouth now."*
Clause (b) breaks: a want opens after the stop. The contrary argument, that
asking plainly in a way that can be refused is the dissolution of the triangle
rather than a new one, **is real and is not answered.** Recorded as contested.

**L = NA, the first NA in the corpus.** No rival figure appears in the window at
all. Structural consequence: the novella runs mediation without rivalry.

**Cross-text observation.** *The Crowning* and *The Bell Jar* both score R = 0
for the same reason. Both end **one beat before an ask, on forward motion.** They
differ on T placement: last page versus nine thousand words upstream.

---pagebreak---

@@ PART III — INSTRUMENT 3: INTERLOCK

## 3.1 Three questions, kept strictly apart

| layer | question | where |
|---|---|---|
| **1a** | Do the NT texts interlock the way independent reports do, or collide the way legends do? | `RESULTS.md` |
| **1b** | When someone alleges a contradiction, is it one, and what does the rescue cost? | `ntcount/`, `rescue/` |
| **2** | Is the historical case for the resurrection **honestly built**? | `resurrection/` |

**Status on every headline in every file: strong structured pilot, not a
confirmatory result.** One coder, not blinded, who recognises every text on
sight. No amount of process moves it past that.

**Boundary stated once.** Nothing here reaches whether the resurrection happened.
Nothing here argues for God. A clean result is compatible with an independent
record of a shared legend; only dating constrains that, and dating is not in
these files.

## 3.2 Layer 1a: the interlock run

### The claim, and the blinding tooling that almost nobody knows is there

`interlock/PREREGISTRATION-2.md`, written after two pilots. The claim: the
canonical gospels **interlock** (one account's dangling detail is incidentally
completed by another) more than the legendary apocrypha, and contradict and
free-invent less.

**This run has real blinding machinery, and it is stronger than I have been
giving it credit for.** `build_run.py` emits each pericope as a packet of
witnesses under **opaque codes** W1, W2, W3 in a fixed shuffled order, with the
source identities sealed in `run/key.json`. Gaps are logged and committed **per
witness, before the key is opened**. Confirmed on disk: `key.json` maps
crucifixion W1 to gospel-of-peter, W2 to mark, W3 to luke, W4 to matthew.

>> **And §7 states the limit in the same breath, which is why the file is
>> trustworthy.** "An LLM coder recognises the canonical text by content, so it
>> cannot be truly blinded to canon-vs-apocrypha the way a naive reader could,
>> and one coder yields no inter-coder agreement statistic. So the subjectivity of
>> the classes goes **unquantified**."

### The two scans, and the fact that one of them barely worked

Two independent passes per pericope. The **gap scan** logs every instance of a
closed typology before any other account is opened: **G1** unintroduced
referent, **G2** unexplained motive, **G3** abrupt statement, **G4** missing
place or time, **G5** uncaused emotion, **G6** raised-then-dropped detail. Then
the **flat-collision scan** lists every concrete detail asserted by two or more
accounts, because Pilot 1 found the gap scan alone under-counts collisions about
fivefold.

**Recomputed from `run/coding_sheet.csv`, 39 items:**

| gap type | items tagged |
|---|---|
| G2 unexplained motive | 3 |
| G6 raised-then-dropped | 2 |
| G1 unintroduced referent | 1 |
| G3 abrupt statement | 1 |
| **untagged (came from the flat scan)** | **32** |

>! **The elaborate six-type gap typology produced seven items out of 39.** Four
>! fifths of the run came from the flat-collision scan the pilots added as a
>! patch. The typology was the theoretically motivated half and it did almost no
>! work. This is not recorded anywhere in the repository.

**Class and pair distribution, recomputed:**

| class | n | | pair | n |
|---|---|---|---|---|
| AGREEMENT | 11 | | IND (independent) | 30 |
| COLLISION-SOFT | 10 | | DEP (Matt/Luke on Mark) | 9 |
| NULL-SILENCE | 9 | | | |
| **FIT** | **5** | | pericopes | 5 |
| COLLISION-HARD | 4 | | | |

>! **The headline statistic rests on a numerator of five.** The interlock ratio
>! is FIT over FIT plus collisions, and there are five FITs in the whole run.

39 coded items, 5 pericopes. **A difference is a FIT only if a text supplies the
reconciling fact, not the coder.**

Aggregate over independent-pair items: canon 5 fits / 1 hard / 4 soft, ratio
**0.50**. Apocrypha 0 fits / 3 hard / 1 soft, ratio **0.00**. Embellishment
items: canon 1 in 4,555 words = 0.22 per 1000; apocrypha 8 in 3,152 words = 2.54
per 1000. About **11 times**.

| | prediction | result |
|---|---|---|
| P1 | canon ratio beats apocrypha | holds, both matched comparisons |
| P2 | apocrypha hard-collide more | holds, 0.95 vs 0.22 per 1000 |
| P3 | apocrypha embellish ≥3× more | holds, ~11× |
| P4 | advantage does not depend on Synoptic copying | holds, all five canon fits are independent-pair |
| P5 | canon ratio ≥ 0.60 | **FAILS at 0.50** |

### The part of this the file tells you not to trust, and it is its own

>> **The fit-ratio half (P1, P5) is the least trustworthy thing here, and I
>> produced it.** The fits I logged for the canon are the *famous* undesigned
>> coincidences I already knew to look for: Bethsaida/Philip, Passover/green
>> grass, John's "we". **That is textbook selection.** A blind coder scanning
>> every gap without knowing the apologetic literature would very likely log
>> fewer, and the canon ratio would fall. The numerator is exactly where a
>> knowing coder's thumb rests, and there was only my thumb.

The objective half (P2, P3) is trustworthy because it does not depend on charity
or on knowing the hypothesis: a schoolmaster dies in one infancy gospel and
merely blushes in the other, a walking cross speaks in the Gospel of Peter and
nowhere else. Those are facts on the page.

## 3.3 Layer 1b: the contradiction count

`ntcount/PREREGISTRATION-NT.md`, frozen `83f5f55`, 24 July 22:53.

### Why every existing count is worthless, on two grounds

>> **No definition.** None of them states what makes something a contradiction.
>> A count nobody can reproduce cannot be checked, and a claim that cannot be
>> wrong is not a measurement.
>>
>> **No denominator.** 439 out of *what*? A corpus with four accounts of one life
>> has vastly more contradiction opportunities than a corpus with one.
>> **Counting raw hits punishes multiple attestation.** That is backwards, and
>> correcting it is the whole point of this study.

### The definition, frozen

>> Two texts contradict when they assert P and not-P about the **same subject, in
>> the same respect, at the same time**, such that no reading licensed on the
>> channels in `RUBRIC.md` makes both true.

The three qualifiers are Aristotelian, which matters, because the obvious
objection is "you defined contradiction so that nothing counts." They are what
the law of non-contradiction has always required. Dropping them is what lets a
list reach 439.

Note what the definition does **not** say. It does not say "no reading I can
imagine makes both true." The licensing requirement binds both ways.

### The nine gates

Applied first, to every docket item. Rejections record **which** gate failed,
because the histogram of failure reasons is a primary result.

| code | name | test |
|---|---|---|
| **A0** | not an assertion | one side is a question, command, wish, curse, hypothetical, or the speech of a character the text does not endorse |
| **A1** | not the same subject | different events, persons, places or occasions |
| **A2** | not the same respect | different sense of a shared word; rhetorical quantifier read as strict; figurative against literal; legal against biological; role against person |
| **A3** | not the same time | different period or dispensation; before against after |
| **A4** | omission only | silence is not denial. Naming one of two is not asserting only one |
| **A5** | tension, not negation | two emphases in tension without P and not-P |
| **A6** | text against doctrine | the clash is with a later dogma, not between two texts |
| **A7** | designed juxtaposition | an intentional literary pairing (Prov 26:4-5) |
| **A8** | reference failure | the cited verses do not say what the entry claims |
| **ADM** | admitted | survives all gates |

**The first failing gate is recorded, in fixed order.** Many items fail several.
If the coder may choose among applicable gates, the histogram becomes a record of
preference rather than of the texts.

### The gates with real items attached, so you can judge them yourself

Abstract gates are unfalsifiable. Here is what each actually did.

**A0, not an assertion (4).** All four are worth knowing because they are the
cleanest wins on the whole docket.

| item | the allegation | why it is not a claim |
|---|---|---|
| C0104 | Did Jesus ask God to save him from crucifixion? | John 12:27 is a rhetorical question **Jesus immediately rejects**: "And what shall I say? Father, save me from this hour? No, it was for this that I came" |
| C0209 | Did Herod think Jesus was John the Baptist? | Luke 9:9 is perplexity: "John I beheaded, but who is this?" |
| C0406 | Was Jesus the son of David? | Matt 22:45 is a riddle Jesus poses |
| C0454 | Is God's will always done in heaven? | Matt 6:10 is a **petition**, "your will be done", read as an assertion that it always is |

**A1, not the same subject (7), and the abuse risk stated in the file itself.**

>> "**The abuse risk is real**: a harmoniser can manufacture this gate by
>> multiplying events ('there were two temple cleansings'). So it fires only where
>> the texts themselves mark different occasions, never where I would need them
>> to. Where the texts do not mark it, the item was admitted instead: see C0421,
>> the temple cleansing, **admitted at cost 2**."

That last clause is the check working. The single most famous
multiply-the-events move available was refused, and the item was let through.

**A2, not the same respect (62).** The gate F4 fired on. A representative sample,
chosen to show both the strong and the weak end:

| item | the sense distinction claimed | how strong it looks |
|---|---|---|
| C0051 | Did Jesus baptize anyone? | **Strong.** The author corrects his own phrasing in the same book: John 4:2, "although in fact it was not Jesus who baptized, but his disciples" |
| C0075 | Should we bear each other's burdens? | **Strong.** Different Greek words three verses apart: *barē* (v2, crushing burdens borne together) against *phortion* (v5, one's own proper load) |
| C0250 | Was Joseph the father of Jesus? | **Strong.** Luke 3:23 marks the distinction itself with *hōs enomizeto*, "as was supposed" |
| C0318 | Are those who believe Jesus is the Christ of God? | **Strong.** James 2:19 draws the distinction the entry ignores: "even the demons believe, and shudder" |
| C0433 | Was it ok to touch the risen Jesus? | **Strong.** *mē mou haptou* is a present imperative, "stop clinging", and he invites touch nine verses later at 20:27 |
| C0099 | What colour was Jesus' robe? | **Weaker.** *porphyra* covers a range of red-purple and *kokkinē* a crimson, "a faded military cloak falls in the overlap" |
| C0140 | Does Luke contain everything Jesus did? | **Weaker.** "All that Jesus began to do and teach" called a rhetorical quantifier |
| C0353 | Ransom for many or for all? | **Weaker.** "Many" as the Semitic inclusive idiom from Isa 53 |
| C0517 | How long was Jesus in the tomb? | **Weaker.** Inclusive reckoning, where a part-day counts as a day |

>! Look at that spread and you can see F4's problem without any statistics. The
>! top five cite a lexeme or a verse in the same passage. The bottom four cite a
>! convention. **The gate is one gate and it is doing two different jobs**, and
>! nothing in the coding separates them. That is a defect the repository does not
>! name, and it is the concrete form of what F4 detected as a number.

**A4, omission only (12), and this is the gate that quietly does the most work.**

>> "Silence is not denial. Naming one figure at the tomb does not assert that
>> there was exactly one; to convert an omission into a contradiction you need a
>> text that says *only*, and none does. **This single gate dissolves the whole
>> one-angel-against-two class that appears on every popular list, and it requires
>> no reconstruction at all, which is why it is stronger than the harmonisers'
>> answer to the same items.**"

Items it takes: the donkey at the entry, the blind men at Jericho, who buried
Jesus, Annas before Caiaphas, the centurion's words, the demons' request, the
kiss of Judas, the last words from the cross, the possessed men, the rich young
man's commandments, how many women came, how many beatitudes.

**A8, reference failure (5), fully checkable by anyone with a Bible.** The
compilers cited Luke 8:5 and 8:7 for a claim about prayer; those verses are the
parable of the sower. They set 1 Cor 9:1 against Acts 9:8 to claim Paul did not
see Jesus, when Acts 9:8 says he saw nothing **after opening his eyes, having
been blinded**. Matt 3:7 says the Pharisees came to the baptism and were
rebuked; it never says they were baptised.

**A7, designed juxtaposition, fired zero times**, and `VERDICT.md` records why
that is worth printing: "a gate that never fires is evidence it was not used as a
free pass."

### The cost scale, inherited unchanged

| cost | name | meaning |
|---|---|---|
| 0 | dissolved | the plain text shows no contradiction at all |
| 1 | licensed | a rescue on some channel is directly cited and uncontested |
| 2 | contested | a real rescue exists but rests on a debated reading |
| 3 | ad hoc | reconciliation needs an event no text states, or a text emendation |
| 4 | hard | no non-ad-hoc rescue on any channel. A genuine contradiction |

**The five rescue channels**, each requiring a citation: GREEK (must cite the
lexeme), ACCOUNT (must cite the verse), HISTORY (must cite the fact), HISTORIAN
(must cite the source), GENRE (must name the convention, not merely assert it).

**The Ehrman guard**, and its symmetry is the whole point:

>> A rescue rates cost 1 only if it cites a lexeme, a verse, an attested custom,
>> a named source, or a named convention. **It stops the apologist's invented
>> harmony and it stops me dissolving an item because it feels obviously fine.
>> Both are the same move**: supplying from outside the text what the text does
>> not supply.

Consequence accepted: some real reconciliations get priced at 2 or 3 because
nobody wrote them down. That is the correct cost of a rule that binds both ways.

### Deduplication and granularity, frozen before scoring

>> Granularity is a **free variable in every published count**, and it is worth
>> more than any argument. Resurrection morning can be one contradiction or eight
>> depending on whether you split time, participants, angels, posture and
>> sequence. **A compiler can multiply or divide a total by five without touching
>> a word of the text, and no published list declares its rule.**

Rule fixed: **one item equals one pair of incompatible propositions.** Merges and
splits logged individually, before Tier A, before any cost is assigned.

## 3.4 The funnel

Docket is hostile-sourced and complete: BibViz aggregation of the Skeptic's
Annotated Bible (474), Infidels.org (56) and EvilBible.com (141). Raw total 671.

| stage | count |
|---|---|
| raw entries claimed, NT-internal | 210 |
| after exact-match deduplication | 198 |
| after granularity merge | **153** |
| admitted as genuine contradictions | 51 (33.3%) |
| cost ≥3 | **2** (3.9% of admitted) |
| cost 4 | **0** |
| cost 4 on the core | **0** |

**The entire hard residue, both items:**

- **C0264, cost 3** — how Judas died. The hanged-then-fell reconstruction needs
  a rope or branch failure and an interval **no text states**.
- **C0120, cost 3** — to whom Peter denied Jesus. Mark's servant girl against
  Luke's "a man" at the second denial. Harmonising requires positing more
  challengers than any text states.

Both peripheral. Neither touches crucified-under-Pilate, buried, or
tomb-found-empty.

### The 51 accepted items, by cost

| cost | name | n |
|---|---|---|
| 1 | Licensed | **11** |
| 2 | Contested | **38** |
| 3 | Ad hoc | **2** |
| 4 | Hard | **0** |

>! **Read that distribution before reading anything else about this study.**
>! Three quarters of what survived the gates landed at **contested**, which the
>! rubric defines as "banked for neither side." The study's real output is not
>! "the contradictions dissolve." It is "**most of them are live difficulties
>! with real but disputed answers**", which is a much duller and much more
>! defensible sentence.

**The eleven at cost 1 are the ones with a citable licence**, and they are the
ones worth being able to say out loud:

| item | the licence, cited |
|---|---|
| C0165 potter's field | Acts uses *ektēsato* (*ktaomai*, "acquire"), the verb Luke uses of Paul acquiring citizenship at Acts 22:28, **not** *agorazō*, "buy" |
| C0041 ascension timing | The same author supplies the interval. Acts 1:3 states forty days. An author who writes forty days in volume two is not asserting same-day in volume one |
| C0095 answer to the high priest | *su eipas* is an affirmative Semitic idiom, used the same way to Judas at Matt 26:25 |
| C0109 who carried the cross | The condemned carried the *patibulum* out, and Mark 15:21 has Simon pressed in "on his way in from the country". Roman *angareia*, the same verb as Matt 5:41 |
| C0117 arrival at the tomb | One journey, not rival claims. Matt 28:1 "toward the dawn" and Luke 24:1 "early dawn" supply the gradient between John's dark and Mark's sunrise |
| C0169 first appearance | Mark 16:9 alone asserts "first" (*prōton*) and **sits in the longer ending, absent from Sinaiticus and Vaticanus** |
| C0392 the sign over the cross | The four differ only by inclusion, no word contradicts another, and John 19:20 states the inscription stood in three languages |
| C0065 the best seats | Matthew itself replies to the sons in the plural at 20:22, so both mother and sons are involved in Matthew's own telling |
| C0089 the centurion | Agency convention: an act done through delegates is attributed to the principal, and Luke supplies the delegation |
| C0143 did the eleven believe | Luke records ongoing disbelief in the same scene: 24:41, "while they still disbelieved for joy" |
| C0343 after the baptism | John never narrates the baptism, only refers back with the perfect *tetheamai*, "I have seen" |

**And one item where the study corrected itself against its own advantage.**
C0035, Galilee against Jerusalem, carried a `core` flag from the earlier rescue
ledger. `VERDICT.md` removes it:

>> "**CORE FLAG REMOVED**: the frozen definition in `PREREGISTRATION-NT` §3 is
>> crucified/buried/tomb empty, and appearances are not in it. The rescue ledger
>> used a wider notion of core; **that discrepancy is reported, not silently
>> reconciled.**"

Removing the flag makes the headline claim ("nothing hard touches the core")
easier to satisfy, so this is a change in the study's favour. It is recorded as a
discrepancy rather than absorbed, which is the correct handling and worth noting
because the direction is the tempting one.

### The items that drift, named by the file

`VERDICT.md` flags where a cost-2 is holding on by its fingernails. C0423, on
whether the women told the disciples, rests on reading Mark 16:8's "said nothing
to anyone" as silence in flight rather than permanent silence, and the file says
plainly that "no text supplies the 'on the way' qualifier, **so it drifts toward
3 if Mark's absolute phrasing is pressed.**"

That is a study marking its own weakest joint in public.

**Judas was moved from cost 4 to cost 3** on 24 July. Cost 4 means *no* rescue
exists; an ad hoc one does. The correction went **against** the first instinct
and **against** the rhetorically stronger position, since a lone hard
contradiction is a cleaner story than a cost 3. The scale outranks the instinct
and outranks the story.

## 3.5 F4 fired, and the only valid form of "what survives"

>> **F4 FIRED.** A2 plus A5 rejections are **67.6%** of all rejections against a
>> pre-declared ceiling of 40%. Per §9 that means the dissolution is resting on my
>> own sense-distinctions rather than on the texts, and Number A must be reported
>> as unreliable.

The results file's own first sentence:

>> So the honest first sentence of this study is not a number about the New
>> Testament. It is that I dissolved 62 entries by saying "not the same respect"
>> and 7 more by saying "tension, not negation," and I pre-committed to treating
>> that volume as disqualifying. **It is disqualifying. The 66.7% rejection rate
>> is not a finding.** I set that threshold precisely because A2 is the gate where
>> a motivated coder's thumb would rest. It was.

| code | reason | n | % of entries |
|---|---|---|---|
| A2 | not the same respect | 62 | **40.5%** |
| A4 | omission only | 12 | 7.8% |
| A1 | not the same subject | 7 | 4.6% |
| A5 | tension, not negation | 7 | 4.6% |
| A8 | reference failure | 5 | 3.3% |
| A0 | not an assertion | 4 | 2.6% |
| A3 | not the same time | 4 | 2.6% |
| A6 | text against doctrine | 1 | 0.7% |
| A7 | designed juxtaposition | 0 | 0.0% |
| | **rejected** | **102** | **66.7%** |
| ADM | **admitted** | **51** | **33.3%** |

### The structural argument, and why it is not an escape

F4 says the rejections are untrustworthy. It does not automatically contaminate
every output, **and the reason is directional**:

>> An A2 or A5 error puts an item back in play as a *contested* clash, at cost 1
>> or 2. **It cannot manufacture a cost 3 or 4**, because a cost 3 requires that
>> no channel supplies a rescue, and an item rejected for having a
>> sense-distinction available is **by construction** an item where a channel does.

Run as a worst case, with every A2 and A5 call assumed wrong:

| | before | after |
|---|---|---|
| admitted | 51 | **120** (78.4% of entries) |
| cost ≥3 | 2 | **2** (1.7% of admitted) |
| cost 4 | 0 | **0** |
| F2 (cost ≥3 over 10%) | not fired | still not fired |

**Untrustworthy:** the 33.3% admitted rate, the 66.7% rejection rate, and any
claim that the NT "mostly dissolves." Treat 33.3% as a floor and 78.4% as a
ceiling.

**Robust:** the count of hard contradictions is 2 and the count at cost 4 is 0,
across the entire hostile docket.

>> **The discipline this encodes:** report the fired falsifier at the top, then
>> show what survives and **why structurally**, never merely assert survival.

## 3.6 What is objective regardless of anyone's judgement

These do not run through Tier A at all and anyone can check them against
`docket.csv`, `dedupe_log.md` and `granularity_log.md`.

- **57 of 210 raw entries (27%) are restatements** of an entry already on the
  list. The cock crow appears four times. Matt 5:16 against Matt 6:1 appears
  three times. The potter's field appears three times. **That is counting, not
  adjudication.**
- **Five entries misdescribe their own citations.** The clearest cites Luke 8:5
  and 8:7 for an importunity-in-prayer claim; those verses are the parable of the
  sower and say nothing about prayer. Another sets 1 Cor 9:1 against Acts 9:8 to
  claim Paul did not see Jesus, when Acts 9:8 says he saw nothing *after opening
  his eyes, having been blinded*.
- **Four entries put an interrogative on one side.** Jesus asking "shall I say,
  Father save me from this hour?" and then rejecting it. Herod asking "who is
  this?". A question is not a claim.

## 3.7 The Bayes lever, and its stated boundary

`rescue/bayes.py`. Two hypotheses, stated precisely because they are the whole
meaning:

- **H_multi** — the material derives from MULTIPLE uncoordinated sources
  reporting the same underlying events.
- **H_single** — the material derives from ONE fabricated source, later copied.

For each observation X:

$$ B(X) = P(X | H_multi) / P(X | H_single) $$

$$ B_total = exp( α · Σ_i log B_i ),   α ∈ { 1.0, 0.5, 0.33 } $$

The **α exponent is a correlation discount** for the fact that the items are not
independent of each other. Each cell in the frozen table is given as
(low, default, high) so the run reports robustness rather than a single fragile
number. Result at default and α = 0.5: **B ≈ 72.7**.

Posterior from prior odds:

$$ odds_post = odds_prior × B ;    P = odds_post / (1 + odds_post) $$

**The boundary, printed on every run:**

>> This decides independence versus coordinated fabrication. **It does NOT reach
>> truth.** Independent witnesses to a shared *legend* also satisfy H_multi; only
>> DATING constrains that, and dating is not in this file. So a large B kills
>> "some men made it up together" and nothing more.

**The cost-3 amendment, and why it is Bayes-neutral by construction.** The frozen
table had no cost-3 case, because nothing had ever scored 3 until Judas moved.
The value was written down **before running it**:

>> peripheral cost 3 gets identical treatment to peripheral cost 4, because the
>> reasoning that earns the factor, "a fabricator would have smoothed this", does
>> not care whether an ad hoc rescue happens to exist, so the factor must not
>> change either.

Total held at 72.7. **That is what a non-tuned amendment looks like.**

## 3.8 Layer 2: the rule that inverts

`resurrection/PREREGISTRATION-R.md`, frozen `0fda18f`, 25 July 00:56.

### The ceiling, fixed before any scoring

>> Once the facts are fixed, the step from "the tomb was empty and the disciples
>> had experiences they took to be encounters" to "God raised him" is dominated by
>> the prior on whether such an event can occur. **No amount of source checking
>> touches a prior.** Hume's objection lives there and this instrument cannot
>> reach it in either direction.

Best possible outcome: **"the historical case is honestly constructed."** Not
"the resurrection happened."

### The inversion, and it is the only protection Layer 2 has

In Layer 1 the hostile compilers picked the docket. Here the temptation runs the
other way.

>> `isjesusalive.com` is the **object under test** and never supplies the docket.
>> The docket of objections comes from **critics**: Ehrman, Lüdemann, Goulder,
>> Carrier, and above all **Dale Allison**.

**Why Allison is the key auditor.** He **affirms the minimal facts while
rejecting the methodology.** That splits the two questions Layer 2 must keep
apart: *are the facts right* and *is the argument valid*. A source friendly to
the conclusion and hostile to the argument is the ideal auditor of an argument's
structure. **Both halves always get reported.**

>> Layer 1 had structural protection. Layer 2 has this rule and nothing else, and
>> the motivation risk is the highest in the project: a believer auditing a case
>> he wants to be true, on the question that matters most to him, with a single
>> non-blind coder. **If relaxed: Layer 2 is void. Not weakened. Void.**

### G1 fired, at two levels

**Level one, the site.** `isjesusalive.com/empty-tomb/` asserts "Most scholars,
not just Christian scholars, accept that the tomb was found empty." **It cites no
published source for this at all.** The only modern scholar named on the page is
William Lane Craig, quoted on a different point.

**Level two, the underlying survey.** The claim traces to Gary Habermas's
bibliography of resurrection scholarship, source of the "roughly 75 percent"
figure. **Habermas stated in 2012 that "most of this material is unpublished."**
That is his own description of his own data.

**Verdict: the empty-tomb consensus premise scores cost 4.** Not because the
empty tomb is false, and not because the majority claim is false. **Because the
cited support cannot be examined.**

>> **This is the same failure as our own run-1 fit ratio**, where the numerator
>> was coder-selected and we discounted it ourselves. It gets the same discount
>> here. **Consistency requires that, and the study would be worthless if it
>> applied the rule only to the other side.**

**The independent methodological problem**, which stands without trusting
Carrier: the figure is not 75% *of scholars*, it is 75% of **writers who
published articles arguing specifically for or against the empty tomb**. People
who publish on a contested question are self-selected. The inference is invalid
regardless of who raises it. (Carrier's separate claim that Habermas refused data
requests is tagged **tier K**, a lead and not a finding.)

### Enemy attestation is not what it is called: cost 3

The page's strongest-sounding argument cites Matthew 28:12-13, then Justin
Martyr and Tertullian. Three problems in order of severity:

1. **Matthew reporting his opponents' explanation is not his opponents
   attesting.** It is one author's account of what his adversaries said. This is
   the reverse of the criterion's normal use.
2. **The passage is single-source**, and belongs to the guards-at-the-tomb
   material critics standardly identify as apologetic development. Building the
   strongest leg on the pericope most suspected of being defensive is poor ground.
3. **Justin and Tertullian may be downstream of Matthew.** Both are a century or
   more later and both had Matthew.

**G4 signalled, not fired.** The enemy-attestation argument leans on a specific
single-source pericope, which is a detail-level dependence. If round 2 finds the
*surviving* arguments also require detail-level accuracy, G4 fires and the
project's two-layer framing was wrong.

### What this does not show

- **It does not show the tomb was not empty.** Allison, who rejects the method,
  nonetheless makes a relatively strong case for the historicity of the empty
  tomb on other grounds. The premise being unauditable is a fact about the
  argument, not about the tomb.
- **It does not show most scholars reject the empty tomb.** That would need the
  same published data nobody has. The honest position is that **the state of
  scholarly opinion on this question is not currently establishable from
  published sources**, which is uncomfortable for both sides.

Practical conclusion recorded in the file: if you argue the empty tomb in public,
**drop the consensus percentage and drop the enemy-attestation move.** Argue the
women and the Jerusalem proclamation, and cite Allison.

## 3.9 The patristic stratum: the Hard Twelve, graded

Fathers enter only as **named sources**, never as a scoring round. The Ehrman
guard stays symmetric, so age is not licence. **Zero cost changes** across the
whole survey, which is the expected and safe result.

### How "hardest" was chosen, and when

>> "**The ranking below was written and saved to this file before any source was
>> fetched for this round.** That ordering is the only thing stopping the list
>> from being quietly reshaped by which fathers turned out to have good answers."

Seven mechanical criteria, read off `scores.tsv` rather than off a sense of which
items feel bad:

| # | criterion | why it marks a weak point |
|---|---|---|
| D1 | cost 3 | top of the observed scale; the rescue invents an event |
| D2 | verified-dead rescue | a tier V row where the defence was checked and failed is worse than a contested one, **because the contest is over** |
| D3 | no defence offered | an item a developed harmony skips is usually the one without an answer |
| D4 | clustering | several accepted items on one pericope compound; a reader does not meet them singly |
| D5 | proximity to the resurrection claim | nothing is core-flagged, but some items sit next to the core |
| D6 | the rescue concedes something expensive | a defence that works by admitting the text was altered has a price defenders rarely state |
| D7 | not a harmony problem at all | an item falsified by events rather than reconciled by exegesis is a different and worse kind of weak |

### The scorecard

| # | item | father | grade | cost moved |
|---|---|---|---|---|
| 1 | Judas's death | Papias / Augustine | **ABSENT + AGAINST** | no |
| 2 | Peter's accusers | Augustine | PARTIAL, bundled | no |
| 3 | Galilee | Augustine | **GOOD**, bundled | no |
| 4 | empty tomb | Augustine / Origen | **BAD** / PARTIAL | no |
| 4 | empty tomb | Eusebius | **BAD** solution, **GOOD** method | no |
| 5 | staff on the mission | Augustine | **BAD** | no |
| 6 | Paul's companions' hearing | Chrysostom | **BAD**, verified dead | no |
| 7 | the hour of crucifixion | Augustine | **BAD** | no |
| 8 | the genealogies | Africanus / Origen | PARTIAL / **AGAINST** | no |
| 9 | temple cleansing | Origen | **AGAINST** | no |
| 10 | rendered speech | Augustine | **GOOD**, honest about the price | no |
| 11 | James against Paul | Eusebius | not a rescue: **canonical doubt** | no |
| 12 | "this generation" | Augustine | **BAD**, evasive, tier K | no |

Three GOOD, three PARTIAL, six BAD, three AGAINST, one ABSENT.

>> **The headline: the fathers cover MORE of the hard items than the modern
>> harmonies do, and their answers are worse.** They walk straight into items a
>> modern defender skips, and then rescue them with moves that fail the guard.
>>
>> **The distribution is the point.** A defender who says "the church has always
>> had answers to these" is right that answers exist and wrong about what they are
>> worth. A critic who says "they never noticed" is simply wrong. **Both of those
>> moves die on this table**, which is why the table is the deliverable and not
>> the individual verdicts.

### The worst finding is a silence

Augustine's *De consensu evangelistarum* is four books long and exists precisely
to answer people alleging the evangelists disagree. Book 3 chapter 7 works the
Judas pericope: the thirty pieces of silver, Judas's repentance, the priests
refusing to bank the money, the potter's field, and the prophecy Matthew
attributes to Jeremiah that is actually in Zechariah.

**He never mentions Acts 1:18.** Checked directly. No falling headlong, no
bursting, no attempt to square the hanging with the bowels.

And the one father who **does** describe the death gives a **third** account.
Papias, via Apollinaris:

>> "Judas walked about in this world a sad example of impiety; for his body having
>> swollen to such an extent that he could not pass where a chariot could pass
>> easily, he was crushed by the chariot, so that his bowels gushed out."

No rope. No tree. No fall. A swelling and a chariot.

>> The modern rescue asks you to believe there was one event, hanging followed by
>> a fall, told in two partial ways. **The earliest patristic witness to that event
>> knows a version with neither the hanging nor the fall. That is what a multiform
>> tradition looks like, not what one event reported twice looks like.**

Papias cannot move the score, because the docket is NT-internal by
pre-registration and a patristic text cannot supply the P or the not-P. Recorded
for what it shows about the shape of the tradition.

### The best patristic answer, and the bundle attached to it

Augustine, *De consensu* 3.25, on Galilee against Jerusalem:

>> "the words are simply these: Behold, He goes before you into Galilee; there
>> shall you see Him; and **there is no statement of the precise time** at which
>> that meeting was to take place."

That is a dissolution, not a harmonisation, licensed by the text's own silence,
and it gives an opponent nothing to grip. Made in AD 400.

**Then he bundles it** with two figurative readings of "Galilee", transmigration
and revelation, neither licensed and neither needed, plus an ordered list of ten
appearances which is a reconstruction attackable at every joint. **Grade: GOOD,
with a detachable bad half.**

### Eusebius: the worst solution and the best method, in one text

*To Marinus* 4, read from the Pearse edition directly, tier V. He states the
empty-tomb problem himself, and his statement is a better enumeration of the
clash than the compilers' is. His solution:

>> "there are four evangelists, and also a corresponding number of sightings
>> **There are four occasions, and four seen**"

The Greek is explicit that the count is **derived rather than observed**:
*tessarōn ontōn tōn euangelistōn, isarithmoi toutois*, "there being four
evangelists, the sightings are **equal in number to them**."

>! **Grade: BAD, the most extreme multiplication in the file.** Lindsell's six
>! denials are modest beside it. The number of events is being read off the number
>! of sources, **which guarantees in advance that no two sources can ever
>! conflict.**

And the corpus contradicts itself on order, flagged by the edition's own editors:
*To Marinus* 4.1 opens "The incident in Matthew comes first"; Nicetas-Marinus 5,
answering the same question, opens "I take it that the narrative in John comes
before that in Matthew."

**Then, in the same fragment, he does the one genuinely excellent thing in the
whole patristic survey.** He states what would have made the accusation stick:

>> "it really would have been justifiable to accuse them of discrepancy **if John
>> had kept the same time and the same place**, and had said that two of them were
>> seen, sitting on the stone late on the sabbath. Correspondingly, if Matthew had
>> maintained the time as early morning, as in John, and he too had said that one
>> angel, not two, had been seen inside the tomb, he would plausibly have been
>> regarded as writing a contradictory account."

>> **That is a falsifiability criterion, and it is ours.** Same time, same place,
>> same respect. Gates A1, A2 and A3 of `PREREGISTRATION-NT.md`, stated in the
>> fourth century, **by a defender, against his own interest.**
>>
>> It also acquits him of the charge laid against Chrysostom, whose argument
>> confirms on agreement and confirms on disagreement and therefore predicts
>> nothing. **The man was not running a flat verdict.** The honest qualifier: he
>> states the criterion and then satisfies it by multiplying events until the
>> times and places differ. **Naming what would falsify you is necessary and it is
>> not sufficient.**

### Two article moves, two centuries apart, both dead

**PAT1**, a check written into `greek/check.py` and run against MorphGNT.

Augustine makes Mark's *hē paidiskē* a **different** girl at the second denial.
But Mark 14:66 introduces her as *mia tōn paidiskōn*, one of the servant girls,
and 14:69 has *hē paidiskē*, **singular and articular**, pointing back at that
one. He settles it by preferring Matthew's *allē* and reading Mark against Mark's
own article.

Chrysostom makes Acts 9:7's *tēs phōnēs* **Paul's** voice, so the companions
heard Paul answering someone they could not see. But Acts 9:4, the voice Paul
hears, is *φωνὴν*, **anarthrous**, first mention; 9:7 is *τῆς φωνῆς*,
**articular**. There is no other voice in the pericope for that article to point
at.

>> **Two fathers, two centuries apart, two unrelated items, one illegitimate
>> move.** Which suggests it is not carelessness but the natural shape of the
>> pressure: when two texts collide, the cheapest exit is to make one of them
>> refer to something else, **and the article is what stands in the way.**

**And writing the check as a script caught two errors in the claim it was written
to support**: a postpositive δέ broke the article test, and Mark 14:66 is *mia
tōn paidiskōn*, not anarthrous. Both left recorded in the code comments.

**What survives on that item is neither rescue**, and it was sitting unused in
the text: Acts 22:9 is also articular and adds *tou lalountos moi*, "of the one
speaking **to me**." The verse specifies whose speech is denied. That is an
ACCOUNT-channel rescue with a cited licence, needing no case argument and no
second voice. **Cost stays 2 on that, and would be 3 without it.**

### The A2 gate, abusable in three directions, and all three now caught

Augustine on the staff, *De consensu* 2.30: Mark's staff is spiritual authority,
Matthew's and Luke's staff is a stick.

>> **Grade: BAD, and the most instructive BAD in the file.** The theological point
>> is not arbitrary, and he is not pretending the problem is absent. But nothing
>> in either text marks *rhabdos* as figurative in one gospel and literal in
>> another; the word sits in a list with bread, bag and money in both. **This is
>> the A2 move performed with no licence, and A2 is the exact gate that fired F4
>> against this project at 40.5%.**
>>
>> So the gate cuts three ways. **A2 is abusable by the accuser** (call everything
>> a contradiction), **by the defender** (call every clash a difference of sense),
>> **and by the coder** (dissolve what feels fine). This is the strongest argument
>> in the project for the gate structure being worth having at all.

### Origen, the outlier, who priced the trade first

*Commentary on John* X, on the temple cleansing:

>> "I conceive it to be impossible for those who admit nothing more than the
>> history in their interpretation to show that these discrepant statements are in
>> harmony with each other."
>>
>> "**The spiritual truth was often preserved, as one might say, in the material
>> falsehood.**"

The earliest sustained commentator on John, working this exact passage, **refuses
the historical harmony** and does not propose two cleansings.

Guards, both directions. This does not make the item a cost 4: the scale prices
rescues, not authorities. It also does not hand the item to the accuser, because
Origen is not saying the evangelists erred; he is saying they composed with a
purpose ranked above chronology, which is nearer the GENRE channel than a
confession of error. **What it destroys is the inerrantist reading and only
that.**

>> He is the only father here who declines to harmonise, and he pays for it with a
>> sentence no inerrantist can use. **Everyone else who wants to keep both the
>> history and the harmony has to buy an event, a sense, or a preference. That is
>> the trade the whole ledger is measuring, and Origen priced it first.**

### The conclusion protected at the level of what counts as evidence

Augustine, *Letter* 82, and the file corrects its own earlier reading of it:

>> "if in these writings I am perplexed by anything which appears to me opposed to
>> truth, I do not hesitate to suppose that either **the manuscript is faulty**, or
>> **the translator has not caught the meaning**, or **I myself have failed to
>> understand it**"

>> It is **not** a stray pious aside. It is the load-bearing premise of an
>> argument: because no error can be admitted anywhere without the whole authority
>> collapsing, every apparent error must exit through one of three doors.
>> "The author erred" is not on the list.

Eusebius does the same thing one level down, in textual criticism: a variant is
extraneous "most particularly if it contained something **contradictory to the
evidence of the other evangelists**." Harmonisation driving the choice of text.

>> **This is what separates the patristic version from the modern one. The fathers
>> announce that the conclusion is fixed and then reason from it. The modern
>> defender performs the identical operation and presents the output as a finding.
>> Announcing it is more honest, and it is still the thing that makes the
>> enterprise unfalsifiable.**

### And the fathers were not one voice

Galatians 2:11-14, Paul rebuking Peter. **Jerome held the rebuke was staged**, a
piece of theatre for weak Jewish believers, so Peter was not really wrong and
Paul was not really opposing him. **Augustine held it was real**, and fought a
long correspondence over it, arguing that admitting a single expedient falsehood
undermines the whole authority of Scripture.

Two fathers, one text, incompatible readings, neither able to settle it.

**Eusebius, *HE* 2.23.25, on James**: it "is disputed; at least, not many of the
ancients have mentioned it." James sat in the *antilegomena*. That kills "Luther
was an outlier against settled tradition." It does **not** show the early church
saw a Paul clash, because Eusebius gives no reason for the dispute, and reading
one in would be supplying a motive the text does not supply, **which is the
accuser's version of the same fallacy this file grades the defenders down for.**

### The flag raised against the project itself

>> **P8.** Eusebius spent three of his four *Problems to Marinus* on the
>> Matthew-against-John Magdalene tangle. **Our docket rejected C0202 in one line
>> at gate A3**, and A3 is a near neighbour of the gates that fired F4. Our
>> rejection may well be right, and Eusebius in fact arrives where we do. But he
>> needed a multi-visit reconstruction to get there and we needed a sentence.
>> **When a fourth-century harmonist treats an item as one of the four hardest
>> things in the resurrection narratives, and our gate disposes of it in a line,
>> that is evidence bearing on whether the gate calls are too quick.**

### What is missing, listed so the absences stay visible

1. ***To Stephanus* 1-16 is unread**, on the infancy narratives and genealogies,
   bearing directly on four docket items. Already on disk. Highest-value unread
   source in the project.
2. **Augustine *Letter* 199 unfetched**, so the "this generation" grade is
   provisional and tier K.
3. **Chrysostom under-read.** Two homilies fetched of ninety on Matthew alone.
4. **Nothing from the Greek fathers after Chrysostom**, nothing Syriac, and
   nothing on Ephrem's commentary on the Diatessaron, which would be the obvious
   place to see how a harmony handles what it cannot fit.
5. **No father found on C0264's actual clash, on C0397 outside Augustine, or
   defending C0512 head-on.** Those three absences are findings.

## 3.9b The apologists, scored by the same guard

`rescue/apologist-responses.md`. **Declared bias, written before reading:** "I am
now sampling rescues from one side only. This pass can therefore only push costs
*down*. That asymmetry is a property of the procedure, not a finding."

**Outcome: no licensed cost changes.** Twice, across two passes.

### Seven failure modes shared across every source surveyed

| # | mode | what it looks like |
|---|---|---|
| F-A | **verdict flatness** | every item returns "dissolved / evaporates / really bad argument" |
| F-B | **bundling** | a licensed rescue presented alongside an invented one as interchangeable. The critic attacks the invented one and the licensed one dies with it |
| F-C | **unfalsifiability critiques that cut both ways** | correctly nailing an opponent for whom agreement and disagreement both confirm, while running the mirror structure oneself |
| F-D | strawmanning the thesis | answering a claim the opponent explicitly disclaims |
| F-E | speculation as the simpler explanation | "he could have", "maybe he got a copy", offered minutes after condemning the opponent's hypotheticals |
| F-F | ad hominem | in place of answering the argument |
| F-G | answering the popularisation, not the scholarship | engaging the video summary of a scholar rather than the scholar |

### The weak points, ranked by how badly they will be exploited

| # | the move | why it fails | cost |
|---|---|---|---|
| W1 | Emmaus, "60 stadia is the round trip" | Luke 24:13 reads *apechousan stadious hexēkonta apo Ierousalēm*, "distant sixty stadia **from** Jerusalem". That syntax states a distance from a point | **3** |
| W2 | Theudas | Rebuts the **naming** objection well. Gamaliel's problem is **chronological**: the speech is set c. 35 CE and Theudas revolted 44-46 | **3** |
| W3 | the fiction/hoax strawman | The opponent's stated thesis, in the clip played on screen, is "a gifted writer and a serious historian". The answer is built around what it would take for Acts to be *fiction* | n/a |
| W5 | the Pervo remark | A smear standing in place of answering a thesis that is directly threatening: that Acts uses Paul's letters, which would generate **the appearance of undesigned coincidences** | n/a |
| W7 | "the location of Qumran, which nobody got right except Luke" | **Luke does not mention Qumran.** One checkable error inside a list discredits the list | n/a |
| W9 | leaning on undesigned coincidences | He cites Philip/Bethsaida, **which is literally one of the five fits logged in our own run 1**, in the section our own file flags as selection-inflated |

>! **W9 is the one that matters for this project.** "We cannot cite in public a
>! metric our own instrument flags as selection-inflated." The rule bit the
>! project's own strongest-sounding public argument.

### What holds, and should be kept

The Jericho climb is the strongest item: Luke's own text uses the directional
verbs, a man "going **down** (*katabainō*) from Jerusalem to Jericho" (10:30) and
Jesus "going **up** (*anabainō*) to Jerusalem" (18:31, 19:28). Cited, internal,
checkable in ten seconds. Also *polis*/*kōmē* flexibility with Josephus *Ant.*
18.28, where Philip "advanced the village Bethsaida into the dignity of a polis",
and Samaria as a city rebuilt by Herod as Sebaste, *Ant.* 15.296.

### The harmony scored item by item

A full published resurrection harmony, against the five empty-tomb cluster items:

| item | the harmony's move | licensed? |
|---|---|---|
| women at the tomb | John's plural "we" (20:2) implies unnamed company | **yes**, same licence already in our docket |
| number of angels | "unless the angels spoke simultaneously, one was the spokesperson" | **no**. No text says one spoke for the pair |
| inside or outside | Matthew reports the initial descent witnessed by the guards | **partly**. The guards are cited; the sequencing is not |
| **sitting or standing** | **not addressed at all** | n/a |
| the stone | cites Mark 16:4, that the stone was already removed | **no**. That cites the side already agreed and never engages Matt 28:2 |
| arrival time | Matthew "reflects Bethany's perspective", Mark "John's Jerusalem household" | **no. Cost 3.** Source communities in different villages, invented to explain a time gap |

>> **On three of six items a simpler move was available that needs no unstated
>> event, and the harmony passed it over.** Ours on the angels: naming one is not
>> asserting only one. Theirs: an unattested spokesperson convention. Ours on the
>> time: two texts supply the gradient across one journey, cost 1. Theirs: two
>> source communities, cost 3.
>>
>> And it builds a **named roster of five women including Susanna**, whom no text
>> places at the tomb at all, plus an uncited plausibility flourish that is doing
>> work John's "we" already does for free.

**Even the harmonisers' own camp is not united.** Sympathetic reviewers of the
strongest harmony on the market, reviewers who accept "reconcilable variation" as
a category, still flag an incomplete incorporation of 1 Cor 15:3-8, an inadequate
handling of Mark's ending, and a **speculative** sequencing of the women. On the
exact empty-tomb cluster where our docket's cost-2 items concentrate. Which is
what run 1 found independently: the empty-tomb pericope is the collision-dense
one.

- **Origen, Comm. John X** concedes the temple cleansing cannot be harmonised as
  history: *"the spiritual truth was often preserved in the material falsehood."*
  Kills the inerrantist reading only, not the texts.
- **Augustine, Ep. 82.1.3** is verdict flatness in its earliest clean form:
  faulty manuscript, bad translator, or my failure to understand, and **"the
  author erred" is not on the list.** Same defect as the skeptic lists, mirrored.
- **Chrysostom, Hom. Matt 1.5-6** is Layer 1's own argument c. 390, and **as he
  states it, agreement confirms and disagreement confirms, so it predicts
  nothing.** Repairable only with a control and a denominator, which we lack.
- **Worst finding is a silence.** Augustine's *De consensu* 3.7 works the Judas
  pericope, the silver, the potter's field, the Jeremiah-for-Zechariah problem,
  and **never mentions Acts 1:18.** Verified.
- **PAT1**, a check written into `greek/check.py`: two fathers rescue two
  unrelated items by reading a definite article as non-anaphoric, and **both are
  dead.** Writing it as a script **caught two errors in my own claim**, both left
  recorded in the code comments.
- **Best patristic answer**, Augustine *De consensu* 3.25 on Galilee: "there is
  no statement of the precise time" is a licensed dissolution. Use that minimal
  form, never his ten-appearance list.
- **Correction to our own registry.** Africanus, now verified, makes **Matthew
  natural and Luke legal**, the reverse of the Machen defence. Two rows were
  bundling incompatible rescues with an "or."
- **Eusebius, Nicetas-Marinus 5** states a falsifiability criterion **against his
  own interest**: the charge "really would have been justifiable if John had kept
  the same time and the same place." **Same time, same place, same respect. Our
  Tier A, stated by a defender in the fourth century.**

## 3.10 Two findings that generalise beyond this project

**Verdict flatness.** Across the census videos, the Judas videos, the Acts
livestream and the resurrection harmony, every item returned "dissolved." Across
the skeptic lists, every item returned "contradiction."

>> **A function whose output does not vary with its input is not reading its
>> input.** This is why the cost scale exists at all, and why it catches both
>> sides with one test.

**Dissolution beats harmonisation, tactically.** On three of six empty-tomb items
the published harmony *reconstructed* where *dissolution* was available, and its
rescues came out weaker than ours.

>> "Naming one angel is not asserting only one" gives an opponent nothing to
>> grip. "One angel was the spokesman, and these five women including Susanna came
>> from Bethany while John's household came from Jerusalem" gives him **five
>> joints**, and one broken joint makes the whole sequence look manufactured. The
>> harmoniser buys attack surface for no evidential gain. **And harmonisation
>> concedes the frame**, since producing one reconciled sequence accepts the
>> inerrantist premise that the accounts must reduce to a single narrative.

**Bundling**, the third recurring failure: good cited arguments shipped welded to
invented ones at equal confidence. A critic breaks the weak half and the good half
dies with it.

## 3.11 What is missing, and why no number here settles anything

1. **No denominator.** Two hard contradictions out of *what*? Against thousands
   of cross-checkable claim-pairs that is remarkable; against forty it is bad.
   **Same numerator, opposite conclusions.** Not built. **The top priority.**
2. **No control.** The apocryphal corpus is on disk and the procedure has not
   been run on it, so **F3 is untested** and there is no evidence the instrument
   discriminates canon from legend at all.
3. **32 of 51 audits are tier K**, citations unverified. Only 19 are tier V.
4. **Stratum 2 (190 NT-vs-OT items) unscored. Number B, the independent sweep,
   not attempted.** So this is a ceiling on the accusers' case, never a floor on
   the truth.

**A denominator may already exist and be sixteen centuries old.** The Eusebian
canon tables index every gospel section by which gospels carry it: an enumeration
of the cross-checkable set made by someone with no stake in the result. It is a
sampling frame, not a denominator, and building on it needs its own
pre-registration.

---pagebreak---

@@ PART IV — THE FOURTH STUDY, PRE-REGISTERED AND NEVER RUN

`interlock/resurrection/PREREGISTRATION-C.md`, committed `4c614fc`, 5 August
03:17. There is no `RUN-C.md` and no `RESULTS-C.md`. The directory contains four
files and this is the only one with nothing downstream of it.

Nine days later, two further studies were built and run. So it was not blocked.
It was passed over.

>! This section exists because a record that lists only what was done is a
>! biased record. **The best-designed file in the repository produced nothing.**

## 4.1 What it was going to test

`NEXT-R.md` had said no control exists for Layer 2 and none can be built, and
called that permanent. **This file narrows its own project's earlier claim:**

>> "That is too strong, and this file narrows it. It is true for the case as a
>> whole. But **one specific sub-argument inside Axis 2 does have a control, and
>> the corpus for it has been sitting in `../corpus/apocrypha/` since Layer 1.**
>> The sub-argument is the restraint claim: *the canonical resurrection narratives
>> do not look like what legendary development in this genre produces.* That is a
>> comparative claim. A comparative claim needs a comparison set. We have one."

## 4.2 Why the docket rule is the anti-cheat again, in a new place

>> "If I read both corpora and then decide which features count as
>> 'embellishment,' I will pick the features the canonical texts happen to lack,
>> and **the shaping will be invisible from the inside**.
>>
>> **So the feature list is not mine.**"

Sources: Bart Ehrman on legendary growth, and the form-critical tendencies of the
tradition as stated in the literature. **A feature enters only if a named source
states it as a tendency of legendary development.** Wanting to add a feature
because you noticed it in the texts is a new pre-registration, not an amendment.

## 4.3 The frozen feature list

| ID | feature, as the critics state it |
|---|---|
| E1 | the resurrection event itself is **directly narrated** rather than left off-stage |
| E2 | opponents or authorities are made **eyewitnesses** to the vindication |
| E3 | previously anonymous figures are **given names** |
| E4 | the miraculous is heightened by **physical scale or spectacle** |
| E5 | **numbers, times or measurements** are supplied where earlier sources have none |
| E6 | **doubt, fear or failure** of the followers is removed or resolved |
| E7 | **explicit proof** is offered to satisfy a stated objection |

Test set: the resurrection material in the four canonical gospels. Control set:
the Gospel of Peter and the Acts of Pilate, **both already on disk from Layer 1
and neither selected for this study.**

**And it has the thing Layer 1 never had.** A denominator: features present out
of features possible per unit, with a written-in-advance NA rule "so it cannot be
used to shed inconvenient units."

## 4.4 Five falsifiers, with the numbers fixed before any text was read

| | fires if | consequence |
|---|---|---|
| **H1** | the canonical set scores **above 0.40** | the restraint claim has no empirical content and comes out of the argument entirely |
| **H2** | the control set scores **below 0.50** | the apocrypha are not exhibiting the features the critics' own model predicts, so the feature list measures something else and **the instrument is invalid regardless of how the canon scores** |
| **H3** | the gap is **under 0.25** | direction without magnitude, which is what failed P5 in run 1 |
| **H4** | more than **30%** of calls require a judgement not statable as a rule someone else could apply | this is the A2 problem that fired F4, in a new place |
| **H5** | the result depends on **any single narrative unit** | leave-one-out is run **before** the headline number is written, not after |

>> "Numbers chosen now, on principle, before any text is read. 0.40, 0.50, 0.25
>> and 30% are stipulated here so they cannot be moved later to accommodate a
>> result. **Moving one afterwards voids the run.**"

Note **H2**, which is the design's sharpest feature: a falsifier that fires when
the study's *opponent* fails to behave as predicted. Most instruments have no way
to detect that their yardstick is broken. This one does.

## 4.5 Six confounds, declared against itself

>> "These are not caveats to add at the end. They are limits on what any positive
>> result can mean, and they are written now so I cannot discover them later and
>> soften them."

| | confound | statement |
|---|---|---|
| C1 | **date** | the apocryphal texts are later, so a difference is consistent with "later texts in this tradition embellish more". The study cannot separate genre from date and will not claim to |
| C2 | **survivorship, the worst one** | "The canonical four are the texts that **won**. If restraint was itself a criterion of canonization, then finding restraint in the canon is partly **circular**, because I would be measuring the selection rule rather than the composition process. **No result may be reported without this stated in the same paragraph.**" |
| C3 | sample size | four canonical narratives and two apocryphal. "This is a descriptive comparison and **the word 'significant' does not appear in the results**" |
| C4 | Gospel of Peter's date is disputed | if an early stratum is right, the control is contaminated toward the test set, which works **against** a positive finding. Record the direction either way |
| C5 | sole coder, not blind | strong pilot, never confirmatory |
| C6 | genre may not be matched | Acts of Pilate has a different purpose from a gospel. If a control unit is not attempting what the test units attempt, the feature is recorded **NA rather than absent** |

## 4.6 The paragraph it licenses, written before the data existed

>> "On seven features drawn from critics' own accounts of legendary development,
>> the canonical resurrection narratives score X and two apocryphal narratives
>> score Y. The canonical texts do not narrate the resurrection at all, and one
>> apocryphal text narrates it with the stone moving of its own accord, figures
>> whose heads reach heaven, and a speaking cross, with the guards and the elders
>> watching. **The comparison is confounded by date and by survivorship, and it
>> says nothing about whether the events occurred.**"

And the sentence that closes the file:

>> "It does not answer the vision hypothesis, which is the alternative that
>> matters most and which **predicts restrained early testimony just as comfortably
>> as the resurrection does**. Lüdemann and Goulder are untouched by this entire
>> study. **If a future session reports this result as evidence for the
>> resurrection, it has broken the file.**"

## 4.7 The order of operations, and where it stopped

| step | status |
|---|---|
| 1. Commit this file. Nothing before this step | **done**, `4c614fc` |
| 2. Declare pericope boundaries for both corpora in `RUN-C.md`. Commit | **never done** |
| 3. Code the **control set first**, so the feature list is exercised on the corpus I care less about before it touches the one I want a result from | never done |
| 4. Code the test set | never done |
| 5. Run leave-one-out and the H4 audit **before** computing the headline ratio | never done |
| 6. Write results, falsifiers at the top, confounds in the same paragraph as any headline number | never done |

>! Step 3 is the detail worth sitting with. **Code the control first, so the
>! instrument is exercised on the corpus you care less about before it touches the
>! one you want a result from.** That is a procedural safeguard against a bias
>! nobody can feel operating, and it costs nothing, and it was written down, and
>! it was never used.

## 4.8 It was run on 14 August, and two falsifiers fired

Written after the rest of Part IV, which is left standing above because the
question of what a nine-day-old unexecuted pre-registration is worth does not
disappear once it is finally executed.

**Order followed exactly as §7 specified.** `RUN-C.md` declaring the 22 pericope
boundaries and the applicability rule was committed at `0514fea` **containing
only that file**. The control set was coded before the test set. Leave-one-out
and the rule audit ran **before** the headline ratio was computed. Results
`3725bcc`.

| falsifier | threshold, fixed 5 Aug | observed | |
|---|---|---|---|
| **H1** canonical ratio above 0.40 | 0.40 | **0.352** | did not fire |
| **H2** control below 0.50, instrument invalid | 0.50 | **0.577** | did not fire |
| **H3** gap under 0.25 | 0.25 | **0.225** | **FIRED** |
| **H4** unstatable calls over 30% | 30% | **9.8%** | did not fire |
| **H5** result turns on any single unit | any | **4 of 22** | **FIRED** |

**H2 not firing is the important one.** It means the apocryphal narratives do
exhibit the features that critics' own model of legendary growth predicts, at
0.577, so the feature list is measuring something real and **the instrument is
not invalid.** That was the outcome most likely to sink the study and it did not
happen.

**H3 firing is the result.** The gap is 0.225 against a 0.25 threshold fixed
before any text was read. Direction without magnitude, which is the same failure
as P5 in interlock run 1.

### Where the difference lives, and where it runs backwards

| feature | canonical | apocryphal | |
|---|---|---|---|
| **E1** resurrection directly narrated | **0 / 5 = 0.00** | **3 / 5 = 0.60** | categorical |
| E4 miraculous heightened by scale | 0.15 | 0.56 | strong |
| E3 anonymous figures named | 0.08 | 0.33 | as predicted |
| E5 numbers and measurements supplied | 0.38 | 0.67 | as predicted |
| E7 explicit proof offered | 0.54 | 0.78 | weak |
| E2 opponents made eyewitnesses | 0.67 | 0.71 | **tied** |
| **E6** doubt or failure resolved | **0.73** | **0.25** | **BACKWARDS** |

**E1 is the one thing worth saying in public.** Not one of the five canonical
units that could have narrated the resurrection does so. Matthew comes closest
and stops short: the angel rolls the stone back and sits on it, and the tomb is
*already* empty, because "He is not here: for he is risen." Peter §9 opens the
heavens, walks two men down, has the stone roll of itself, and brings three men
out with a cross behind them. **It is categorical rather than a rate, it needs no
threshold, and it survives every leave-one-out.**

>! **E6 runs the other way and it is not a small effect.** The canonical texts
>! resolve the followers' doubt and failure at nearly three times the apocryphal
>! rate. Thomas puts his hand in the side. The Emmaus pair go from "we trusted
>! that it had been he" to burning hearts. He eats a piece of broiled fish in
>! front of them. Meanwhile the Gospel of Peter leaves the women fleeing in fear
>! and the twelve grieving and going home.
>!
>! Confound **C6**, declared on 5 August, anticipated the mechanism: the
>! apocryphal units are about opponents and cosmic events, so E6 is applicable 11
>! times in the canon and only 4 times in the control. **The feature is measuring
>! what each corpus is interested in, not how each corpus develops.**

### The advance prediction that was confirmed, and cost the study its result

`RUN-C.md` recorded, **before coding**, that Mark 16:9-20 is later disputed
material, that including it should **raise** the canonical ratio and **work
against** the restraint hypothesis, and that it was kept for exactly that reason.

It scores **4 of 5, the highest of any canonical unit**, and removing it takes
the gap to 0.259, one of only two ways to stop H3 firing.

>> **The conservative choice was correctly identified in advance, made anyway,
>> and it is what cost the study its magnitude test.** That is what a
>> pre-registration is for, and it is the cleanest instance of the discipline
>> paying its own bill anywhere in this repository.

**The two cleanest canonical units are the two earliest.** Mark 16:1-8 and Luke
24:1-12 both score **0 of 6**. Nothing fires on any feature in either.

**And the control's result is carried by one unit.** Dropping the Descent into
Hell, a perfect 6 of 6 and the latest stratum in the Acts of Pilate, takes the
control from 0.577 to 0.522 and the gap to 0.170.

### What it licenses, and the sentence the file forbids forgetting

**Drop** "the canonical accounts are strikingly restrained compared with the
apocrypha" as a general claim. Three of seven features carry the whole result and
one runs the other way.

**Keep** only E1, stated exactly.

>> "It does not answer the vision hypothesis, which is the alternative that
>> matters most and which **predicts restrained early testimony just as
>> comfortably as the resurrection does**. Lüdemann and Goulder are untouched by
>> this entire study. **If a future session reports this result as evidence for
>> the resurrection, it has broken the file.**"

And **confound C2 is untouched**, which is the worst of them. If restraint was
itself a criterion of canonization, this measures the selection rule rather than
the composition process. No study on this corpus can separate them.

## 4.9 What the existence of this file means

It cuts two ways and both should be said.

**For the project.** This is the most disciplined pre-registration in the
repository. It has a control, a denominator, five falsifiers with numbers fixed
in advance, six confounds declared against itself including one that admits
possible circularity, an ordering rule that front-loads the unfavourable corpus,
and a closing sentence forbidding its own future misuse. Nobody writes that file
to launder a result.

**Against the project.** It was also the cheapest study in the repository. Both
corpora were already on disk. Seven binary features. Twenty-two narrative units.
It took one working session, and the two studies run instead of it both failed.
**A pre-registration with nothing behind it is a promise, and the value of the
discipline is in the running, not in the writing.**

**And running it settled the question the section opens with.** The file was
worth writing. H2 not firing means the feature list detects what it claims to,
which the writing alone could not have shown. H5 firing means the result turns on
two units out of twenty-two, which no amount of design could have anticipated.
And the advance note about Mark's longer ending was right, and cost the study its
magnitude test. **None of that existed on 13 August. All of it is checkable now.**

---pagebreak---

@@ PART V — ALL THE MATHEMATICS, IN ONE PLACE

Ten statistics. For each: the formula, what it holds constant, what it can see,
what it cannot, and where it broke.

## 4.1 Rate per thousand

$$ r_b(T) = 1000 · h_b(T) / N(T) $$

**Holds constant:** text length, by dividing it out.
**Can see:** how saturated a text is with a vocabulary.
**Cannot see:** where anything is. Position is discarded entirely.
**Broke:** everywhere. This single property is the root cause of rounds 3 and 4
both failing, and of round 2's Bacchae failure.

## 4.2 SUM

$$ SUM(T) = Σ_b r_b(T) $$

**Can see:** accumulation across four vocabularies.
**Cannot see:** whether they occur together.
**Broke:** Odyssey book 7, a hospitality scene with zero violence, outscores
every tragedy on `marks` because "king" and "queen" saturate it.

## 4.3 MIN

$$ MIN(T) = min_b r_b(T) $$

**Can see:** conjunction. A text scores only as high as its weakest stereotype.
This is the algebraic form of Girard's actual claim.
**Cannot see:** anything, once any bucket is likely to be zero.
**Broke:** scale-dependence. With P(zero) = exp(−λ_b·N/1000) and λ_crimes ≈ 0.95,
a 1,500-word episode has a 24% chance of zero crimes hits even under the repaired
lexicon. MIN saturates at 0.00 and carries no information.

>> **The transferable rule.** A metric validated at one scale is not validated at
>> another. MIN was built on 10,000-word tragedies and applied to 1,500-word
>> episodes.

## 4.4 peak_min

$$ peak_min(T) = max_i [ min_b c_b(W_i) ],   |W| = 1000,  stride 250 $$

**Can see:** in principle, whether a text contains a passage where all four
converge.
**Cannot see:** in practice, nothing that the whole-text rate does not already
say. Round 3 proved this empirically.
**Broke:** two ways at once. **Invariance**, since the null showed word order is
irrelevant to it. And **power**, since it is a minimum over four counts with
median 2. A statistic built on counting to two.

Computed in linear time by prefix sums: `c[b,j] = Σ_{k<j} ind[b,k]`, then
`counts = c[:,ends] − c[:,starts]`.

## 4.5 The shuffle null (Null A)

$$ z = (obs − mean_s) / sd_s ;   p = (#{s : stat_s ≥ obs} + 1)/(S + 1) $$

**Holds constant:** the exact multiset of tokens. Every bucket's total count and
whole-text rate are unchanged.
**Destroys:** position, and nothing else.
**Therefore isolates:** locality. This is the cleanest null in the project and it
is immune to the density confound.
**Result:** median z = 0.00 across 71 texts. 4 of 71 significant against 3.6
expected by chance. None a named HIGH text.

**Implementation detail that is load-bearing:** phrase hits are marked at their
first token so a permutation moves each phrase as a unit. Shuffling raw words
would dissolve every phrase and make the null trivially beatable.

## 4.6 The frequency-matched lexicon null (Null B, and D4)

Draw replacement words matched on corpus frequency. Round 3 matched on surface
count and frequency; round 4 binned by ⌊log₂(count)⌋.

**Round 3, Null B, was a bad design and the reason is structural:**

>> A **minimum** over four sets is raised by uniformly-spread sets and lowered by
>> clumpy ones. Frequency-matched random draws spread across topics, so they are
>> less clumpy, so they beat any thematically coherent lexicon on a minimum. Null
>> B would fail identically for any four topical word sets. **It tests nothing.**

**Round 4, D4, failed for a different and more instructive reason:** the null
matched **unigrams only**, and the entire effect lives in the **phrases**. On
unigrams the Gospels score lowest of the three tiers and the observed separation
is negative (−0.075 per 1000). So 591 of 2000 random sets beat it. The half of
the instrument that produces the whole result **has never been null-tested at
all.**

## 4.7 Mann-Whitney U by label permutation

$$ U_a = R_a − n_a(n_a+1)/2 ;   p = (#{perm : R_a^perm ≥ R_a^obs} + 1)/(NPERM+1) $$

Midranks for ties. NPERM = 200,000.

**Why permutation rather than the normal approximation:** n = 4 for GOSPEL. The
normal approximation to U is invalid there. This is the better test, not a
workaround for a missing scipy.

**The vectorisation is exact.** Ranks are computed once on the pooled sample and
labels are permuted over the ranks. Since the rank vector does not depend on the
labels, this is algebraically identical and about a thousand times faster.

## 4.8 The extreme-cell test (conversion P2)

$$ E(M) = #{ rows at (0,0,0) or (1,1,1) } $$

Null by permuting **each column independently**, 10,000 times.

**Holds constant:** each bit's marginal rate.
**Destroys:** all association between the bits.
**Therefore isolates:** whether the three properties travel together. Which is
exactly claim (i): is conversion one event with three faces, or three unrelated
properties under one word.
**Status: never ran.** No control set was ever fetched.

## 4.9 The Bayes lever

$$ B_total = exp( α · Σ_i log B_i ) ;   odds_post = odds_prior × B $$

**Can see:** whether the pattern of fits, agreements, dependences and collisions
favours uncoordinated multiple sources over single fabrication.
**Cannot see:** truth. Independent records of a shared legend also satisfy
H_multi. Only dating constrains that, and dating is not in the file.
**The fragile part:** α is a judgement about how correlated the items are, not an
estimate from data. It is reported at three values (1.0, 0.5, 0.33) precisely
because it cannot be estimated.

## 4.10 The rejection-histogram falsifier (F4)

$$ fire if ( n_A2 + n_A5 ) / n_rejected > 0.40 $$

Observed: 69/102 = **67.6%**. Fired.

**Why this is the most interesting statistic in the repository.** It does not
measure the texts at all. It measures **the coder**. The threshold was set by
predicting in advance which two gates a motivated thumb would rest on.

>> **Naming a number beforehand is the only mechanism that can catch a bias you
>> cannot feel while committing it.**

---pagebreak---

@@ PART VI — THE RULES, AND THE FAILURE EACH ONE PREVENTS

Each rule with the specific failure it exists to stop, and what breaks if it is
relaxed. Compiled from `DESIGN-RATIONALE.md` and the myth-side pre-registrations.

| # | rule | the failure it prevents | if relaxed |
|---|---|---|---|
| 1 | Pre-register and commit before scoring | A rule written afterward gets shaped by what was found, **and the shaping is invisible from the inside** | Every number becomes uninterpretable |
| 2 | The sample is part of the registration, not just the instrument | A text found after seeing the results, added as a bug fix, flips a failed prediction to a pass | Correction 1's Diodorus page |
| 3 | Never repair the instrument to make a text pass | Adding dismemberment vocabulary to `crimes` to catch Pentheus | The instrument stops measuring and starts confirming |
| 4 | Tag new concepts so their effect stays separable | Cannot tell a bug fix from a theory change | `score.py --no-new` becomes impossible |
| 5 | Explicit surface forms, no stemming | `tear-` catches "tears", `torn-` catches "tornado" | Matches stop being auditable |
| 6 | Declare sensitivity analyses in advance | Choosing after seeing which way it helps | S1 and S2 would never have been run |
| 7 | Disclose contamination before scoring | Knowing John's division formula while writing the lexicon | The disclosure cannot be added later without looking defensive |
| 8 | A falsifier that fires is reported at the top | Burying F4 in a footnote | A falsifier that never fires is decoration |
| 9 | Show what survives, and why **structurally** | Asserting survival | Only a directional argument counts |
| 10 | The hostile compilers pick the docket | Choosing the easy items | Result becomes a selection, not a ceiling |
| 11 | Layer 2 inverts: the apologetics site never supplies the docket | The apologists pick the docket | Layer 2 is **void, not weakened** |
| 12 | A rescue counts only if something outside the coder's head licenses it | Both invented harmonies and lazy dissolutions | Plausibility measures the coder, not the text |
| 13 | Record the **first** failing gate, in fixed order | Coder preference disguised as a histogram | Coding stops being reproducible |
| 14 | Record findings that cut **for** the other side | A record where every entry is true and the set is biased | The spread is the evidence |
| 15 | Fix the ceiling of what a study can show, in advance | Overselling a good result later, including to yourself | Layer 2 gets read as proof of a miracle |
| 16 | Apply your own discount to yourself first | Discounting the other side's unauditable premise but not your own | The study is worthless |
| 17 | Corrections go against the story | Judas 4 → 3 was rhetorically worse and was made anyway | The scale stops outranking the instinct |
| 18 | Tier your own citations, V and K, never merged | 51 rows of uniform confidence, of which 32 are unchecked | The file lies about its own strength |
| 19 | Name the escape hatch before you reach it | "So these are false positives, therefore the theory survives" | The escape gets taken and feels like reasoning |
| 20 | No re-running with a wider net until something passes | Round 3's window at 1000/250 | A new operationalization is a new pre-registration |

>> **The one rule under all of them.** Never tune the instrument, and never tune
>> the sample, to pass. Everything else is machinery for making that rule
>> enforceable **by someone who does not trust the person who wrote it, including
>> when that person is me.**

---pagebreak---

@@ PART VII — THE LEDGER OF OWN ERRORS

Every occasion on which this project caught itself. Ordered by how instructive it
is, not by date.

**1. The bug fix that would have flipped a failure into a pass.**
`CORRECTION-1.md`. A fetcher bug truncated one text. Fixing it also surfaced a
corpus page that had been missed. Adding that page moves MYTHOGRAPHY 13.95 →
13.67 against TRAGEDY 13.88, turning a **failed** pre-registered prediction into
a **passing** one. Every step was defensible as a bug fix. **The file's own
words: it would have been entirely defensible, and none of it felt like
cheating.** The page is on disk and excluded.

**2. The instrument one line from being repaired to pass.**
`RESULTS.md`'s own next-action list said to add dismemberment vocabulary to
`crimes` so it would catch Pentheus. It is a category error: `crimes` is what the
victim is accused of, the sparagmos is what the mob does. What caught it was a
**definitional** distinction, not a statistical one. The vocabulary went into
`violence` instead.

**3. The contamination disclosure that came true.**
Round 4 §7 disclosed in advance that `no_fault` and `division` were at risk of
being motivated, because John's division formula was already known. S1 then
showed the `core` half carries **none** of the Gospel effect and the disclosed
half carries **all** of it. The disclosure was not a formality. It was correct.

**4. A pre-declared falsifier that fired on the coder.**
F4 at 67.6% against a 40% ceiling. The threshold was set by predicting in advance
which gates a motivated thumb would rest on. It rested there.

**5. A null test that tested nothing, admitted as a design error.**
Round 3's Null B. A minimum favours uniformly-spread sets over clumpy ones, so
frequency-matched random draws beat any coherent lexicon by construction.
Recorded as "my error, in the pre-registration."

**6. A null test that tested the wrong half.**
Round 4's D4 matched unigrams only, and the entire effect lives in the phrases.
The half producing the whole result has never been null-tested. Recorded as a
defect in the test design, and deferred to round 5 with its own commit rather
than rerun.

**7. A correction that overstated its own scope.**
The first pass on Correction 1 claimed five truncated files. Wrong: the search
was case-insensitive and matched the ordinary word "continued." Recorded, on the
ground that a correction which overstates its scope is not a correction.

**8. A diagnostic output read past twice.**
The `CONTINUED` pagination marker was in the very first diagnostic output and was
dropped into a list of ignored singletons. It was found by accident, on the way
to something else.

**9. A validation metric that could not fail.**
`NEXT.md` on speaker attribution: coverage sits at ~99% whether or not
attribution is correct, because every word between two tags is assigned to
*someone*. A missed speaker's lines are silently credited to the previous
speaker. **A broken parse looks perfect.** An early version dropped `DEÏANIRA`
and put her speeches on the Nurse, who came out at 61.5% of the play instead of
12.3%. Coverage was 99% for both runs.

**10. A Greek claim corrected by writing it as a script.**
PAT1. Writing the article test as code caught two errors in the claim it was
written to support: a postpositive δέ broke the test, and Mark 14:66 is *mia tōn
paidiskōn*, not anarthrous. Both left recorded in the code comments.

**11. A case grammar error caught by fetching the primary.**
C0443. Acts 22:7 had been recorded as accusative; it is genitive. Found on the
first five K→V promotions.

**12. Three claims corrected by reading a source instead of a blog.**
Eusebius *Ad Marinum*. He does **not** rank his two solutions, both are
attributed to other people, and the second view explicitly refuses to choose.
Three claims made from a blog summary were wrong. **The tier system is worthless
if a K row gets quoted as V.**

**13. An error in favour of the other side, published.**
The registry had Africanus backwards: he makes Matthew **natural** and Luke
**legal**, the reverse of the Machen defence, so two rows were bundling
incompatible rescues with an "or."

**14. A correction made against the rhetorically stronger position.**
Judas 4 → 3. A lone hard contradiction is a cleaner story than a cost 3. The
correction was made anyway, and the Bayes value for cost 3 was chosen on
principle **before** running it, so the amendment came out Bayes-neutral.

**15. A gate abused by all three parties, including us.**
A2, "not the same respect." Augustine's staff solution is gate A2 with no
licence. The skeptic lists abuse it. So did we, at 40.5%. **All three caught by
the same rule.**

**16. An escape hatch named in advance so it could not be taken.**
Round 4 D6. "These counterexamples are false positives, therefore the universal
negative survives" is refused in the file, because an instrument that produces
non-counterexamples **cannot test a universal negative in either direction.**
Recorded as *untested*, not as *survived*.

**17. A rubric applied more strictly than written, and applied to everything.**
The conversion instrument's L bit as written let silence score. The stricter
reading, requiring positive regard, was applied to **every** text and not only to
the one that needed it. Quixote scores under it. Plath does not. Recorded because
it changed a score.

**18. A power problem foreseeable in advance and not foreseen.**
Round 3. `peak_min` is a minimum over four counts with median 2. `RESULTS-3.md`:
"this was foreseeable before running it and was not foreseen."

---pagebreak---

@@ PART VIII — THE AUDIT OF THE AUDIT

Everything above is what the project says about itself. This part is what an
outside reader finds when they check it. Two of these are not recorded anywhere
in the repository.

## 8.1 What the git timestamp actually proves

The whole discipline rests on one sentence, repeated in every pre-registration:
*committed before any item was scored*, and *the git history is the evidence*.

So here is the git history, in full.

| round | pre-registration | results | **gap** |
|---|---|---|---|
| R1 | 21 Jul 01:37 | 21 Jul 01:39 | **2 minutes** |
| R2 | 21 Jul 03:00 | 21 Jul 03:14 | **14 minutes** |
| R3 | 22 Jul 00:55 | 22 Jul 03:22 | 2 h 27 m |
| NT count | 24 Jul 22:53 | 24 Jul 23:09 | **16 minutes** |
| Layer 2 | 25 Jul 00:56 | 25 Jul 00:58 | **2 minutes** |
| R4 | 11 Aug 02:07 | 11 Aug 02:17 | **10 minutes** |
| Conversion | 12 Aug 16:50 | 12 Aug 17:12 | 22 minutes |

**Median gap: 14 minutes.** Every pre-registration and its results were committed
inside a single continuous working session.

>! A hostile reader's objection, stated at its strongest: *you had the numbers on
>! screen and committed the prediction file first. Git proves the order in which
>! two files were written to disk. It does not prove that no scoring happened
>! before the first one was written.*

**This objection is real and it is not answered anywhere in the repository.**

### The defence that does survive, and it is stronger than the timestamps

Check **which files** land in each commit, not just when.

| commit | contains | does the scoring code exist yet? |
|---|---|---|
| `fc094bb` PREREG 3 | `PREREGISTRATION-3.md` only | **No** |
| `4188308` RESULTS 3 | `RESULTS-3.md`, **`nulltest.py`**, `results_nulltest.csv` | arrives here |
| `9310c30` PREREG 4 | `PREREGISTRATION-4.md`, `dissent.py`, `tiers.py`, `build_corpus3.py` | **No scorer** |
| `0c765d0` RESULTS 4 | `RESULTS-4.md`, **`score_dissent.py`**, `results_dissent.csv` | arrives here |
| `d671056` PREREG conv | `conversion/PREREGISTRATION.md` only | **No** |
| `cf4bfa0` RESULTS conv | `RESULTS.md`, **`analyze.py`**, **the entire corpus** | arrives here |

>> For rounds 3, 4 and the conversion study, git proves something **stronger than
>> the order of two prose files**: the program that produced the number **did not
>> exist** when the prediction was frozen. `nulltest.py` was not on disk when
>> `PREREGISTRATION-3.md` was committed. Neither was `score_dissent.py` when
>> round 4's predictions were frozen. The conversion corpus had not even been
>> downloaded.

**That is the argument to make. Not the timestamp. The file manifest.**

### And here is where it does not hold

| commit | contains |
|---|---|
| `00a9556` **PREREG 2** | `PREREGISTRATION-2.md`, `lexicon.py`, **`score.py`**, **`results_corpus_v1.csv`**, **`results_corpus_v2.csv`** |

Round 2's pre-registration commit contains **the scorer and two files of scored
results**. Those are `corpus/` scores, not `corpus2/`, which is consistent with
the smoke test the pre-registration itself discloses. But the machinery was fully
operational and committed at the moment the predictions were frozen, and the gap
to results is 14 minutes.

**Round 1 is weaker still.** Two minutes, and the scorer already existed from the
previous commit.

>! **The sharp point.** Round 2 produced p = 0.0045, which is the **only
>! surviving positive result in the entire repository**. It is also the round with
>! the **weakest file-level protection**. And per `CORRECTION-1.md` the script that
>! computed it was never saved, so **it could not be reproduced.**
>!
>! The one number the project had left was the one number that was both least
>! protected by the procedure and impossible to check.

>> **Resolved in part, 14 August 2026. See §1.18.** The script was reconstructed
>> under a spec committed before the scorer existed, across all 48 defensible
>> configurations. The original procedure is **identified** by two committed
>> statistics that are not the p-value (the null mean and sd), and the committed
>> result **reproduces** under it at p = 0.0005 to 0.0070.
>>
>> **What is not resolved.** The pre-declared verdict rule returns **UNSTABLE**,
>> because half the grid sits above 0.05. The committed effect size **+6.10 still
>> does not reproduce exactly** from its own CSV. And the file-manifest weakness
>> above is unchanged: round 2's own pre-registration commit still contains the
>> scorer and two files of scored results. **A reconstruction three weeks later
>> does not retroactively improve the protection round 2 was run under.**

## 8.2 A rule that was broken two weeks after it was written

`PREREGISTRATION-2.md` §1, 21 July: *"Minimum length 800 words. Excludes
`hyginus_fabulae_2`, `_3`, `_4`. 71 texts scored."*

`CORRECTION-1.md`, 22 July: *"the sample is part of the registration."*

`tiers.py`, 11 August: **contains no length rule at all.** Recomputed from
`corpus3/`:

| text | words | tier in round 4 | status in round 2 |
|---|---|---|---|
| `hyginus_fabulae_2` | 613 | MYTH | **excluded** |
| `hyginus_fabulae_3` | 689 | MYTH | **excluded** |
| `hyginus_fabulae_4` | 777 | MYTH | **excluded** |

**Round 4 silently re-admitted exactly the three texts round 2 excluded on a
stated rule.** The rule change is not declared in `PREREGISTRATION-4.md`.

**The effect, recomputed from `results_dissent.csv`:**

| | as run, n = 71 | 800-rule applied, n = 68 |
|---|---|---|
| MYTH median rate | 0.547 | 0.561 |
| myth texts above lowest Gospel (D6) | **7** | **6** |

**No verdict changes.** D6 fails either way. D1's ordinal still holds. And the
direction is mixed rather than helpful: two of the three re-admitted texts score
0.000, which lowers the myth median and **helps** D2 and D3, while the third
scores 1.631 and **adds a counterexample against** D6.

>> **This is exactly Correction 1's finding, recurring.** There the excluded page
>> would have flipped a verdict and was caught. Here the change flipped nothing,
>> and was **not** caught. The discipline is not "did it matter." The discipline
>> is "was it declared." A rule that only binds when someone is watching is not a
>> rule.

`RESULTS-4.md` §4 notices the **symptom** (hyginus at 613 words is "a rate
artifact on a short text and nothing else") without noticing that a
pre-registered exclusion rule had lapsed.

## 8.2b The patristic stratum is not in git, and it says it is

Found 14 August, incidentally, while checking the repository was clean after
committing round 5.

`interlock/ntcount/PATRISTIC-HARD.md` §0, on how its ranking of the Hard Twelve
was protected:

>> "The ranking below was written and saved to this file **before any source was
>> fetched for this round.** That ordering is the only thing stopping the list from
>> being quietly reshaped by which fathers turned out to have good answers.
>> **If this file is in git, the commit order is checkable by someone who does not
>> trust me.**"

**It is not in git.** Neither is `PATRISTIC.md`. Neither is the `patristic/`
directory holding the primary sources that make a tier-V patristic quotation
recheckable.

```
$ git ls-files --error-unmatch interlock/ntcount/PATRISTIC-HARD.md
error: pathspec did not match any file(s) known to git
```

**And five tracked files carry uncommitted modifications from the same session:**

| file | uncommitted change |
|---|---|
| `interlock/ntcount/audits.py` | +193 lines |
| `interlock/greek/check.py` | +80 lines, **including the PAT1 check** |
| `interlock/ntcount/REGISTRY.md` | 58 lines changed |
| `interlock/greek/VERIFIED-greek-checks.txt` | +54 lines |
| `interlock/README.md` | 17 lines, the reading order that **points at the two untracked files** |

**The timestamps place all of it on 25 July between 18:32 and 18:50.** The last
commit that day was 01:30. So an entire evening's work, 1,284 lines of new
analysis plus 332 lines of changes, was written and never committed, and has sat
uncommitted for twenty days.

### Why this is worse than the two findings above it

>! **The one thing that file names as its own verification does not exist.**
>! §8.1 found that the git gaps are minutes and argued the file manifest is the
>! real evidence. Here there is no manifest and no timestamp at all. The claim
>! that the D1 to D7 ranking preceded the source-fetching is exactly the kind of
>! claim this project refuses to accept on anyone's word, **and it is currently
>! resting on my word.**
>!
>! It is also the section that grades other people's honesty. The Hard Twelve
>! file is where Augustine is marked BAD for an unlicensed sense-distinction and
>! Eusebius is marked BAD for reading the number of events off the number of
>! sources. **A survey that audits defenders for unverifiable warrants is itself,
>! at this moment, an unverifiable warrant.**

### What must not be done about it

**Do not commit it now.** A commit today stamps 25 July work with 14 August,
which in a project whose entire discipline is commit ordering would be the single
most misleading action available. The honest options are to commit it with the
discrepancy stated in the message, or to leave it and record that the patristic
stratum carries **no ordering evidence** and that its §0 claim is unverifiable.

**Either way `PATRISTIC-HARD.md` §0 needs amending**, because as written it
points at a guarantee that is not there.

## 8.3 Multiplicity, and why it is less bad than it looks

Roughly 30 named predictions and falsifiers across five pre-registrations, with
**no multiple-comparison correction anywhere.** At α = 0.05, 30 predictions
produce about 1.5 false passes by chance.

**Why this is not fatal here.** Multiplicity inflates false **passes**, and this
project's results are overwhelmingly failures. Multiplicity cannot manufacture 14
failures.

**Where it does bite: round 2, which is where the surviving result lives.** Seven
predictions in one round. Bonferroni at 7 gives 0.0045 × 7 = **0.0315**, still
under 0.05. So the one number that matters survives the correction, narrowly.
**This calculation is not in the repository and should be.**

## 8.4 Four more objections a hostile reader will raise

**1. All the permutation tests are one-sided.** Legitimate under
pre-registration, since the direction was committed in advance. But it doubles
the nominal α relative to a two-sided test, and nowhere is that stated.

**2. The four Gospels are not four independent observations.** Round 4's
permutation test treats GOSPEL as n = 4 exchangeable draws. Matthew and Luke use
Mark. Under any standard view of Synoptic dependence the **effective** n is
smaller than 4, so p = 0.00034 overstates the evidence. The pre-registration
discusses translation matching and register at length and **never raises
literary dependence.** This is a real gap and it is not recorded anywhere.

**3. The most load-bearing control in the project has n = 1.** P5, translation
robustness at 17.2%, ran on **exactly one paired play**. `RESULTS-2.md` says it
"should be repeated on more paired translations." It has not been. Every
cross-text comparison in three instruments rests on one Agamemnon.

**4. The conversion study's file is called `RESULTS — run 1`.** Its primary test
(P2) and its group comparison (P3) **never ran**, because Set B was never
fetched. The file states this in §0, plainly. But the title and the commit
message ("the conversion instrument fails P1 and P4") describe a study that
produced two failures, when what actually happened is that **two of four
predictions were never tested at all.**

## 8.4b Six more, found by reading the files against each other

**5. One gate is doing two different jobs, and nothing separates them.** Set out
in Part III with worked items. A2 rejections split into two visibly different
kinds: ones citing a lexeme or a verse in the same passage (*barē* against
*phortion*; John 4:2 correcting John 4:1; *hōs enomizeto*), and ones citing a
convention (rhetorical quantifiers, inclusive reckoning, Semitic idiom). The
first kind carries its licence. The second kind is a judgement about register.
**They are coded identically.** F4 detected the aggregate as a number without
naming the mechanism, and splitting A2 into A2-lexical and A2-conventional would
have made the histogram interpretable at no cost.

**6. The gap typology produced almost nothing and this was never noticed.**
Recomputed from `run/coding_sheet.csv`: the six-type G1 to G6 scan yielded **7
tagged items of 39**, and the flat-collision scan, added as a patch after Pilot 1,
supplied the other 32. The theoretically motivated half of the interlock
instrument did four fifths of nothing.

**7. The interlock ratio has a numerator of five.** Across the whole run there
are **5 FITs**, and the headline statistic is FIT over FIT plus collisions.
`RESULTS.md` already discounts the fit ratio for selection. It does not say that
the number is also this small. Five items, coder-chosen, from the famous list.

**8. "Strong structured pilot, not a confirmatory result" appears on every
headline and is never operationalised.** The phrase carries a real commitment,
but no file states what would upgrade it, beyond "a future κ from any independent
coder." No sampling plan, no target, no candidate. It functions as a standing
disclaimer rather than a plan, and a disclaimer that never expires stops being
read.

**9. Two studies report a fired falsifier as the headline and one does not
report a study that never ran.** F4 and G1 are at the top of their files, in bold,
exactly as the rules require. Pre-registration C's non-execution appears nowhere:
not in `NEXT-R.md`, not in the interlock `README.md` reading order, not in any
handoff. **The discipline covers failures and does not cover omissions**, and an
omission is the easier one to hide because nothing was produced to look at.

**10. The Bayes lever's α is doing more work than any other single number in the
project, and it cannot be estimated.** B ≈ 72.7 is quoted at default and α = 0.5.
The α exponent discounts for the items not being independent of one another, and
it is a judgement, not an estimate from data. `bayes.py` reports three values
precisely because it cannot be pinned. So the honest form of the result is not a
number, it is a range across an assumption nobody can check, and the range is
wide: the same evidence at α = 1.0 and α = 0.33 differs by orders of magnitude.
**Quoting 72.7 alone, as I did in Part III, drops the thing that qualifies it.**

## 8.5 What an outside reader would find *strong*

Stated for balance, since Part VII is a list of errors and a record of only
errors would be as biased as a record of only successes.

- **Falsifiers that actually fired**, twice, and were reported at the top of
  their files rather than in footnotes.
- **Sensitivity analyses registered in advance that destroyed the round's own
  headline.** S1 and S2 are the strongest evidence in the repository that the
  procedure is real, because a project trying to look good would not have written
  them.
- **Contamination disclosed before scoring, and then confirmed by the data.**
- **A discount applied to itself first.** The run-1 fit ratio was discounted for
  coder selection before the same discount was applied to Habermas.
- **Escape hatches named in advance so they could not be taken.**
- **The file manifests**, per 8.1, which are better evidence than the timestamps
  the files themselves point to.
- **Real blinding tooling**, per Part III: opaque witness codes, a sealed key
  file, and gaps committed per witness before the key is opened. Then the limit
  of that tooling stated in the same section.
- **A gate that fired zero times, printed anyway** (A7), on the ground that a
  gate which never fires is evidence the others were not free passes.
- **A core flag removed when the frozen definition did not support it**, which
  made the study's own headline easier to satisfy, and was recorded as a
  discrepancy rather than absorbed.
- **The single most famous harmonising move refused.** "There were two temple
  cleansings" was available, and the item was admitted at cost 2 instead, with the
  abuse risk of that gate named in the same paragraph.
- **Roughly 960 junk hits deleted from a lexicon whose author wanted it to score
  high.** Bare `stone` at 211, bare `cast` and `drive` at 749. Every removal
  lowers the numbers.
- **Weak joints marked in public**, such as C0423 "drifts toward 3 if Mark's
  absolute phrasing is pressed."
- **A rule that bit the project's own best public argument.** W9: the
  Philip/Bethsaida coincidence cannot be used in public, because the project's own
  instrument flags it as selection-inflated.
- **Pre-registration C**, which is the best-designed file in the repository even
  though it produced nothing. Part IV.

---pagebreak---

@@ PART IX — FOUR ANALYSES THIS DOCUMENT RAN

>! **Read this box before the numbers.** Everything in this part was computed on
>! **already-scored data**, after the results were known. Under the project's own
>! rules that makes all of it **exploratory and post-hoc**. None of it can be
>! cited as a test, none of it rescues a failed prediction, and none of it
>! overturns one. Each is a **hypothesis for a future round with its own commit**.
>! Analysis 9.1 in particular produced exactly the shape of temptation the whole
>! repository exists to refuse, and that is said in 9.1 rather than in a footnote.

Three of these four were named in the repository as things that needed doing and
were never done. Seed `20260814` throughout.

## 9.1 The density confound, finally measured

`RESULTS-2.md` called this "the main confound and it is unresolved" and its Next
list, item 1, said: "score against a per-text baseline of narrative event-words."
Never built. Built here.

**Method.** A neutral event lexicon with nothing Girardian in it: *went, came,
said, spoke, took, gave, saw, made, sent, brought, answered, asked, called,
cried, heard, rose, stood, sat, put, set, found, left, turned, looked, fell, ran,
walked, entered, arrived, returned*. Rate per thousand words, 73 texts over 800
words.

| genre | n | neutral event rate | Girard rate | ratio |
|---|---|---|---|---|
| **MYTHOGRAPHY** | 9 | **28.65** | 13.67 | 0.477 |
| TRAGEDY | 12 | 21.45 | 13.88 | **0.647** |
| OVID | 11 | 21.73 | 9.85 | 0.453 |
| EPIC | 36 | 22.68 | 9.48 | 0.418 |
| CONTROL | 5 | 20.77 | 7.77 | 0.374 |

**Finding 1. `RESULTS-2.md`'s diagnosis is confirmed for the first time.**
Mythography really is the densest narrative prose in the corpus, and by a wide
margin: 28.65 event-words per thousand against 21 to 23 for everything else.
"Apollodorus and Diodorus are bare plot summaries, every word is event" was an
impression. It is now a number.

**Finding 2, and it goes against the confound story.** Across all 73 texts the
correlation between event rate and Girard total is **negative**: r = −0.243,
permutation p = 0.040.

>> So **density does not generally inflate Girard scores. It deflates them.**
>> Epic has a high event rate and a low Girard score. The claim "the instrument
>> partly measures how much plot per word a text carries" is **not supported as a
>> corpus-wide effect.** What is true is narrower and stranger: mythography is an
>> outlier on density *and* on score, and no general density mechanism explains
>> that pairing.
>>
>> I also checked lexical variety as an alternative proxy. Type-token ratio on a
>> fixed 4,000-token sample correlates with the Girard total at only r = +0.198,
>> p = 0.097, and mythography has the **lowest** TTR in the corpus (0.269) while
>> scoring near the top. **Two plausible density proxies, and neither explains the
>> mythography result.** The confound named in July is real as a description and
>> unproven as a mechanism.

**Finding 3, and here is the trap.** Normalise the Girard rate by the neutral
event rate and the genre ordering changes:

```
event-rate ranking : MYTHOGRAPHY > EPIC > OVID > TRAGEDY > CONTROL
Girard    ranking : TRAGEDY > MYTHOGRAPHY > OVID > EPIC > CONTROL
Girard / event    : TRAGEDY 0.65 > MYTHOGRAPHY 0.48 > OVID 0.45 > EPIC 0.42 > CONTROL 0.37
```

The normalised ordering is **TRAGEDY > MYTHOGRAPHY ≈ OVID ≈ EPIC > CONTROL**,
with tragedy clear of mythography by 0.17 where the raw rate had them tied at
0.04. **That is P1's predicted ordering, restored.**

>! **And that is exactly why it cannot be reported as a result.**
>!
>! I have just built, after seeing P1 fail, the normalisation that turns a failed
>! pre-registered prediction into a passing one. This is `CORRECTION-1.md` again,
>! at the level of the **metric** instead of the sample. There the excluded page
>! moved MYTHOGRAPHY 13.95 → 13.67 and flipped P1; here a denominator does the
>! same job more elegantly. Both are defensible. Both were motivated by knowing
>! the answer.
>!
>! **P1 remains a partial fail.** The event-normalised metric is a round-5
>! hypothesis, and it is only worth anything if its predictions are committed
>! before it is scored on texts that have not been scored on it.

## 9.2 Removing "king" from the marks bucket

`NEXT.md` item 3: "Fix `marks`. 44% 'king' is not a victim mark, it is a genre
signal." Never done. The worry has been standing since 21 July.

**Method.** Drop *king, kings, queen, queens, kingly, queenly* from the `marks`
bucket, rescore, and check whether any verdict moves.

| genre | n | total as-is | de-kinged | marks as-is | marks de-kinged |
|---|---|---|---|---|---|
| MYTHOGRAPHY | 9 | 13.67 | 11.42 | 3.33 | 1.08 |
| TRAGEDY | 12 | 13.88 | 11.48 | 4.37 | 1.98 |
| OVID | 11 | 9.85 | 8.50 | 2.22 | 0.86 |
| EPIC | 36 | 9.48 | 7.93 | 2.53 | 0.98 |
| CONTROL | 5 | 7.77 | 5.48 | 2.73 | 0.44 |

**The bucket loses between 55% and 84% of its mass. Nothing moves.**

| | as-is | de-kinged |
|---|---|---|
| P2/P3, lowest named HIGH vs highest named LOW | 10.07 vs 8.39, **holds** | 8.50 vs 6.98, **holds** |
| *Oedipus the King* rank of 73 | 2 | **3** |
| *Bacchae* rank | 36 | **35** |

>> **This is good news for the instrument and it retires a standing worry.** The
>> "king" objection was the most obvious thing wrong with the lexicon and it turns
>> out to be **cosmetic**: it inflates every text roughly proportionally rather
>> than sorting them. Even *Oedipus the King*, the worst case by construction,
>> drops one place.
>>
>> One detail runs the other way and is worth having. **The controls lose more
>> proportionally than the tragedies** (marks 2.73 → 0.44, an 84% drop, against
>> 4.37 → 1.98, 55%). So "king" was inflating the LOW texts harder than the HIGH
>> ones, and removing it slightly **widens** the gap the prediction needed.

Still post-hoc, still not a pass. But `NEXT.md` item 3 can be marked as
**probably not worth doing**, which is itself a saving.

## 9.3 How much of round 4 rests on one phrase family

`RESULTS-4.md` records that sixteen of John's twenty-six hits are the "some said
/ others said" formula, and asks whether that is Girard's broken unanimity or a
translator's reporting convention. It does not test what happens if you remove
it.

**Method.** Strip the crowd-speech concepts one at a time and rerun D1 and D2.
Label permutation, 50,000 draws.

| lexicon | GOSPEL | TRAGEDY | MYTH | GOSPEL > MYTH, p |
|---|---|---|---|---|
| full, as run in round 4 | 1.387 | 0.667 | 0.547 | **0.00042** |
| minus `some_others` | 0.972 | 0.656 | 0.449 | 0.0135 |
| minus `some_others` + `not_all` | 0.874 | 0.611 | 0.438 | 0.0242 |
| minus all three crowd-speech concepts | 0.655 | 0.524 | 0.346 | **0.0484** |

**The ordinal MYTH < TRAGEDY < GOSPEL survives every removal.** D2 degrades
smoothly, from p = 0.0004 to p = 0.048, and never inverts.

>> **So round 4 is not a single-idiom artifact.** Removing the one formula the
>> results file worried about costs a factor of thirty in p and still leaves it
>> nominally significant. The effect is a **family** effect, spread across
>> division, some-said, not-all and spare-him.
>>
>> **Which is arguably worse, not better.** A single formula is a quirk of one
>> translator's rendering of one construction. A whole **crowd-speech register**
>> is a systematic property of how the ASV narrates divided crowds, and it is
>> **more** plausible as a translation convention, not less. `NEXT.md` warned that
>> register was the largest threat to this test. This says the threat is broader
>> than the results file located it.
>>
>> And it does not touch S1 at all. Every one of these concepts is `unan`. The
>> `core` half still carries none of the Gospel effect.

## 9.4 The three re-admitted texts

Reported in full at Part VIII §8.2. Recomputed here for completeness: removing
the three texts that pre-registration 2 excluded on the 800-word rule and round 4
silently re-admitted moves the MYTH median from 0.547 to 0.561 and the D6
counterexample count from 7 to 6. **No verdict changes.**

## 9.5 What these four analyses are worth

| # | analysis | status |
|---|---|---|
| 9.1 | density confound | **the most valuable and the most dangerous.** Confirms the description, refutes the general mechanism, and produces a metric that would flip P1. Round 5 hypothesis, nothing more |
| 9.2 | de-kinged marks | closes a standing worry as cosmetic. A saving, not a finding |
| 9.3 | crowd-speech family | refines round 4 against itself. The register threat is broader than located |
| 9.4 | re-admitted texts | confirms the rule lapse changed no verdict |

None of them is a result. Three of them were asked for by the repository and
should have been done there, before anyone knew what the answers were.

---pagebreak---

@@ PART X — WHAT IS STILL BROKEN

In the order the repository itself ranks them.

| # | item | why it matters | status |
|---|---|---|---|
| ~~1~~ | ~~**The round-2 null script is not in the repo**~~ | **CLOSED 14 Aug, round 5.** Reconstructed, original procedure identified, committed result reproduces under it. §1.18 | **done** |
| ~~1~~ | ~~**A genuinely phrase-aware null has never been built**~~ | **CLOSED 14 Aug, round 6.** Built, and the phrase half passed at 0 of 2000. The translation control passed too. §1.19 | **done** |
| ~~1~~ | ~~**Localization**~~ | **TESTED 14 Aug, rounds 7 and 8.** Round 7's null was wrong; round 8 corrected it and U1 passed at p = 0.0015. §1.20 | **done** |
| ~~1~~ | ~~**Everything lives in `unan` and nothing in `core`**~~ | **DIAGNOSED 14 Aug.** `core` is three sub-families that cancel: the empty-accusation family runs 3.68× toward the Gospels, the advocacy family 17× away. §1.21 | **explained** |
| 1 | **A corpus that has never been scored** | The `core` split cannot be tested on anything on disk: one spare text and six wrong-tier apocrypha. Round 9 needs new texts with the fetch list frozen first | **the new item 1** |
| 2 | **No denominator for the NT count** | "Two hard contradictions out of *what*" decides the entire verdict | specified, not built |
| 3 | **No control for the NT count** | The apocrypha are on disk. F3 is untested, so there is no evidence the instrument discriminates at all | not run |
| 4 | **The density confound** | Mythography ties tragedy because bare plot summary is the densest prose in the corpus | unresolved since round 2 |
| 5 | **`marks` is 44% the word "king"** | It detects royalty, not victim marks | unfixed |
| 6 | **The phrase half of the dissent lexicon has never been null-tested** | It carries the entire round-4 effect | round 5, uncommitted |
| 7 | **Localization** | Two rounds died for lack of it. Victim voice share is the only localized measure available, and the diagnostic for it is already done | queued, unbuilt |
| 8 | **Set B of the conversion study** | P2 is the only test in that instrument that was ever going to mean anything | fetch was killed |
| 9 | **Dostoevsky and Proust** | Where Girard's strongest conversion claims live | not retrieved |
| 10 | **32 of 51 audits are tier K** | Their Greek and manuscript claims are leads, not facts | four could be settled in an hour |
| 11 | **Layer 2 Axis 2** | A cost 4 there invalidates the eliminative structure regardless of Axis 1 | not scored |
| 12 | **No corpus integrity check** | Correction 1's truncated text was found by accident. A truncated text is invisible to every metric currently computed | not built |
| 13 | **More paired translations** | The whole project rests on one Agamemnon | not done |
| ~~14~~ | ~~**The restraint control**~~ | **CLOSED 14 Aug.** Run against its own pre-registration. H3 and H5 fired, H1/H2/H4 did not. Part IV | **done** |
| 15 | **Splitting gate A2** into lexical and conventional | The gate F4 fired on is doing two different jobs and nothing separates them | not recognised in the repo |
| 16 | **The Eusebian canon tables** | A stake-free enumeration of the cross-checkable set, made in the fourth century. A sampling frame for the missing denominator | needs its own pre-registration |
| 17 | ***To Stephanus* 1-16** | Already on disk, bears on four docket items, the highest-value unread source in the project | unread |

**If the round-2 null script is rewritten and disagrees with the committed
number, the rule already written says: the disagreement is the finding and gets
reported, not reconciled.**

---pagebreak---

@@ PART XI — QUESTIONS YOU ANSWER

The answers are not elsewhere in this document. Write them in the margin.

**On the git finding (7.1).**

1. Is the file-manifest defence enough, or does round 2 need to be re-run from
   scratch under a procedure that leaves better evidence? What would that
   procedure look like?
   ___
   ___

2. What would a pre-registration procedure look like that a hostile reader could
   check **without** trusting the ordering of commits at all?
   ___
   ___

**On the lapsed length rule (7.2).**

3. The rule was declared, written down, given its own correction file, and then
   silently dropped two weeks later by the same project. What mechanism would
   have caught it? Name one that is not "be more careful."
   ___
   ___

4. Does the fact that the lapse changed no verdict make it better, worse, or
   neither? Argue it both ways before you answer.
   ___
   ___

**On the instruments.**

5. Rounds 3 and 4 died of the same cause: whole-text rates discard position. Is
   localization actually solvable with lexical methods, or is that cause fatal to
   the whole approach?
   ___
   ___

6. Round 4 §4 refuses the escape hatch and records Girard's universal negative as
   **untested**. Is "untested" the honest verdict, or is an instrument that cannot
   distinguish an Orphic epithet from a dissenting voice evidence that the
   *construct* is not lexically measurable at all?
   ___
   ___

7. The conversion study's §5.2 finding says the three pairs describe what happens
   to a **character** while "novelistic" names where the **author** stands. Is
   that a defect in the instrument, or a correction to Girard?
   ___
   ___

**On the whole thing.**

8. Which of the three instruments would you defend in front of someone who
   already thinks the enterprise is motivated? Which would you abandon?
   ___
   ___

9. Fourteen failures, nine passes, two fired falsifiers, one surviving p-value
   that cannot be reproduced. Is that a failed project or a working one? The
   answer is not in this document.
   ___
   ___

10. What is the one sentence you could say on camera that you would still defend
    in five years?
    ___
    ___

**On the study that was never run (Part IV).**

11. Pre-registration C has a control, a denominator, five numbered falsifiers,
    six confounds declared against itself, and an ordering rule that codes the
    unfavourable corpus first. It is the most disciplined file in the repository
    and it produced nothing. Does writing it count for anything at all, or is a
    pre-registration with nothing behind it worth exactly zero?
    ___
    ___

12. H2 fires if the **control** fails to behave as predicted, which would
    invalidate the instrument no matter how the canon scored. Name one other
    instrument you have built, in any project, that could detect its own yardstick
    being broken.
    ___
    ___

13. Confound C2 says that if restraint was itself a criterion of canonization,
    finding restraint in the canon measures the selection rule and not the
    composition process. Is that confound survivable, or does it mean the study
    should not be run at all?
    ___
    ___

**On the analyses in Part IX.**

14. 9.1 produces a metric that turns P1 from a fail into a pass, and 9.1 refuses
    to claim it. Write the pre-registration that would let a future round claim
    it. What corpus, what predictions, committed when?
    ___
    ___

15. 9.3 shows round 4's effect is a crowd-speech **family**, not one formula, and
    argues that is worse rather than better. Do you agree? A translator's
    systematic habit against a translator's single quirk. Which is more damaging
    to the claim?
    ___
    ___

16. 9.2 says the "king" problem is cosmetic and can be closed. That retires a
    worry that has been outstanding since 21 July on the strength of one
    post-hoc computation. Is that legitimate, given every other rule in this
    project?
    ___
    ___

**On the shape of the whole enterprise.**

17. The interlock ratio has a numerator of five. The dissent test's whole effect
    lives in phrases never null-tested. The four-bucket detector cannot separate
    Gospel from myth by design. Is there a version of this project where the
    instruments are strong enough to matter, or is the honest output always going
    to be a claim about somebody's list rather than about the texts?
    ___
    ___

18. Every failure in this repository was reported. No omission was. Pre-
    registration C is missing from every handoff file. What would a rule look
    like that catches a study that was never run, the way F4 catches a coder who
    leaned?
    ___
    ___

---pagebreak---

@@ PART XII — PROGRESS LOG

One line per pass. Date, what you read, what went fuzzy, what you would say
differently.

| date | section | what went fuzzy |
|---|---|---|
| | | |
| | | |
| | | |
| | | |
| | | |
| | | |
| | | |
| | | |
| | | |
| | | |

## Reproduction commands

```
cd ~/Myths
.venv/bin/python score.py corpus2              # rounds 1-2, whole-text scorer
.venv/bin/python score.py corpus2 --v1         # original lexicon
.venv/bin/python score.py corpus2 --no-new     # v2 matching, v1 concepts only
.venv/bin/python window.py corpus2             # peak_min locator
.venv/bin/python nulltest.py                   # round 3, both nulls
.venv/bin/python score_dissent.py              # round 4, every prediction
cd conversion && ../.venv/bin/python analyze.py
cd interlock/rescue && python3 bayes.py
cd interlock/greek && python3 check.py
git log --reverse --date=format:'%m-%d %H:%M' --pretty=format:'%ad  %h  %s'
```

`numpy` needs `.venv/bin/python`; Arch's system Python is externally managed.
`corpus2/` and `corpus3/` are gitignored and rebuilt by `get_corpus2.py` and
`build_corpus3.py`.
