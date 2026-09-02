# Method Track — Episode Map

The mapping rule made concrete: **an episode exists only after its artifact
exists.** Each row is one episode, the module it comes from, the exact reading
that precedes it, and the artifact the session must produce before the camera
turns on. Two 45-minute sessions per week; roughly one episode per two to three
sessions; ~18 months to the PROSPERO registration. Language: English unless
marked FR. The FR episodes are the francophone-market seed, not translations.

---

## Track A — The Hands (Episodes 1-15)

| Ep | Working title | Module | Read before filming | Session artifact |
|---|---|---|---|---|
| 1 | I Ran a Meta-Analysis Before I Understood One | M0 | Harrer ch 1 + ch 4 (first 10 pp) | R + RStudio installed; `forest_plot_module0.png` |
| 2 | 522 Trials, 7 Definitions of "Response" | M1 | R4DS, the `dplyr` chapter | `griselda_exploration.R`, first pass |
| 3 | 90% of Statistical Frustration is Data Shape | M1 | R4DS, the `ggplot2` chapter | Trial-size and dropout plots from GRISELDA |
| 4 | What a Number Actually Means: d, g, and the Assumption Hiding Inside | M2 | Harrer ch 3 · Borenstein ch 4, 5, 7 | 3 hand-computed effect sizes vs `escalc()` |
| 5 | Why Fixed-Effect Pooling is Indefensible in Psychiatry | M3 | Harrer ch 4 · Borenstein ch 11-13 | `metacont()` REML run + weight-shift plot |
| 6 | Tau²: Sampling Error or Real Patients? | M3 | Falissard (FR), variance decomposition section | **FR** paragraph on variance components |
| 7 | I² = 80%: Bad Drug, or Different Patients? | M4 | Harrer ch 5 · Cochrane Handbook ch 10.10 · Borenstein ch 16-18 | Escitalopram forest with prediction intervals |
| 8 | The Two Outlier Trials, Read Properly | M4 | Same + GRISELDA inclusion columns | Outlier audit note (2 trials, criteria compared) |
| 9 | 94% vs 51%: The Turner Story | M5 | Turner 2008 (NEJM) | Contour-enhanced funnel plot, published data |
| 10 | Trim-and-Fill: Estimating the Trials That Never Ran | M5 | Harrer ch 9 · Borenstein ch 30 | Raw vs trim-and-fill adjusted plot |
| 11 | When Real Heterogeneity Mimics Publication Bias | M5 | Same, hinge question | The mimicry demonstrated on one drug |
| 12 | Does Severity Moderate the Effect? | M6 | Harrer ch 7-8 · Fournier 2010 (JAMA) | Meta-regression bubble plot |
| 13 | The Ecological Fallacy at Study Level | M6 | Same | The fallacy demonstrated on GRISELDA arms |
| 14 | Network Meta-Analysis: Drawing the Graph | M7 | Harrer ch 12 · Dias ch 1-2 | 5-drug network graph + P-score league table |
| 15 | Transitivity: The Assumption That Shatters Indirect Comparisons | M7 | Dias ch 3 · Cipriani 2018 methods appendix | Inconsistency check on the network |

## Track B — The Eyes (Episodes 16-22)

| Ep | Working title | Module | Read before filming | Session artifact |
|---|---|---|---|---|
| 16 | Building a Search That Actually Finds Everything | M8 | Cochrane ch 4 · PRISMA-S 2021 | Full Boolean strategy, hit counts, date-stamped |
| 17 | Why Free-Text Search Misses 30% of Trials | M8 | Same | The misses demonstrated on one question |
| 18 | Screening 100 Abstracts Twice, and Cohen's Kappa | M9 | Cochrane ch 5 · Page 2021 (PRISMA 2020) | Two blinded passes + `PRISMA2020` flow diagram |
| 19 | RoB 2: The Traffic Lights | M10 | Sterne 2019 (BMJ) | `robvis` traffic-light plot, 3 landmark RCTs |
| 20 | The Blinding Problem in Psychiatric Trials | M10 | Sterne 2016 (ROBINS-I, BMJ) | Domain 2 reasoning on a psychotherapy trial |
| 21 | "Trivial Effect" vs "Very Low Certainty": GRADE | M11 | GRADE Handbook · HAS guideline | Summary of Findings table with downgrade rationales |
| 22 | AMSTAR-2: Ranking Five Reviews on One Question | M12 | Shea 2017 · Ioannidis 2016 · Fusar-Poli 2018 | AMSTAR-2 matrix, 5 reviews ranked |

## Track C — The Rare Layer (Episodes 23-38)

| Ep | Working title | Module | Read before filming | Session artifact |
|---|---|---|---|---|
| 23 | Alpha Is Not Evidence: Item Redundancy | M13 | Falissard, *Questionnaire Data with R*, ch 1-4 · Streiner ch 5 | Item analysis table (difficulty, item-total, α vs ω) |
| 24 | Cronbach's Alpha vs McDonald's Omega | M13 | Same | The redundancy demo: drop items, watch α lie |
| 25 | The Illusion of Latent Dimensions (EFA from Zero) | M14 | Revelle ch 6 · Falissard ch 6 | EFA with parallel analysis on a PHQ-9 dataset |
| 26 | CFA: The Diagram Everyone Trusts | M14 | Revelle · Borsboom, *Measuring the Mind*, ch 3 | CFA path diagram with CFI/TLI/RMSEA/SRMR |
| 27 | Michell's Objection: Psychology Never Proved Its Numbers | M15 | Michell ch 1, 2, 9 | The thesis stated in my own words, on camera |
| 28 | « La sévérité d'un trouble mental est-elle une grandeur mesurable ? » | M15 | Borsboom ch 1-2 · Bolton on validity | **FR.** The 2-page essay, read and defended |
| 29 | If Severity Is Ordinal, What Exactly Is Meta-Analysis Averaging? | M15 | Bolton, measurement chapters | The violation demonstrated on pooled HAM-D means |
| 30 | 52 Symptoms, 7 Scales, 0.36 Overlap | M16 | Fried 2017 · Fried 2015 | The symptom-overlap matrix, built by hand |
| 31 | HAMD17 vs MADRS: Is Pooling Their Effect Size Valid? | M16 | Fried + Borsboom 2017 (network theory) | GRISELDA scale audit of my Module 3 pooled trials |
| 32 | The Question That Carries the Whole Track | M16 | All of the above | The synthesis episode: what is the estimate an estimate of |
| 33 | The Serotonin Review: What It Did Right | M17 | Moncrieff 2022, full methods | Independent AMSTAR-2 of the umbrella review |
| 34 | The Serotonin Review: Where It Overclaimed | M17 | Jauhar 2023 critique | Claim-by-claim forensic table |
| 35 | Critique or Institutional Defense? The 2024 Response | M17 | Moncrieff 2024 response | The 3-page methodological report, finished |
| 36 | Writing a PROSPERO Protocol in Public, Part 1 | M18 | PRISMA-P 2015 · Cochrane ch 1 | Protocol draft, objectives and eligibility live |
| 37 | Three Niches, One Choice | M18 | Same | The niche decided, with the rejected two argued |
| 38 | Registered. | M18 | PROSPERO submission guidelines | **The registration number, on screen** |

## Connective (Episodes 39-45)

| Ep | Working title | Source | Artifact |
|---|---|---|---|
| 39 | The 7-Point Way I Read Every Study Now | The appraisal mental model | The model applied live to one new paper |
| 40 | Why I'm Learning This in Public | The positioning episode | The CNOM-safe framing stated once, plainly |
| 41 | La méta-analyse en français : la taille d'effet | Track A recap | **FR.** Forest plot narrated in French |
| 42 | Le biais de publication, expliqué en français | M5 recap | **FR.** Funnel plot narrated in French |
| 43 | I² et hétérogénéité en français | M4 recap | **FR.** Prediction intervals narrated in French |
| 44 | The Fuzz Log, Part One | Camera-loop fuzz entries | Whatever went fuzzy, re-taught properly |
| 45 | One Year of Learning in Public: The Ledger | The whole track | Artifacts, failures, and what changed |

---

## Cadence arithmetic

Two 45-minute sessions per week. Sessions 1-20 cover Episodes 1-5's modules
(M0-M3), and the episode is filmed only when its artifact exists. Expect one
episode per two to three sessions: **~45 episodes across ~18 months**, of which
five are French. The Girard series owns the other weekly slot; the two tracks
share the block without collision, per the corpse inventory.

## The rule that keeps this honest

**No episode without its artifact.** The camera is downstream of the desk, never
a substitute for it. If a session produces understanding but no artifact, the
session still counts and the episode waits.
