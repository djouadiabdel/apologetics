---
tags: [méthode, recherche, méta-analyse, psychométrie, biostatistique, r, psychiatrie, evc]
statut: actif
auteur: Abdel
cursus: 18 mois (2 séances / semaine de 45 min)
objectifs: [Maîtrise R & méta-analyse, Psychométrie théorique, Publications & PROSPERO]
---

# Method Track — The Complete Curriculum for Evidence Synthesis, Biostatistics & Psychometrics in Psychiatry

> [!abstract] The Strategic Posture
> **Do not become a generic meta-analysis factory.** The market is flooded with low-quality pairwise reviews. 
> Your position is the rare, high-leverage intersection: **Evidence synthesis in R + Conceptual measurement theory.** 
> You learn to compute the numbers, but your distinct advantage is knowing *what psychiatric numbers are actually numbers of* (the measurement question).
>
> *Benchmark Model:* **Pr. Bruno Falissard** (Child Psychiatrist, Mathematician, Biostatistician at Inserm / Paris-Saclay, creator of the `psy` R package).

---

## 0. Five Iron Rules (Why This Will Not Fail)

1. **Code first, understanding second**: Run the analysis and generate the forest plot *before* reading the mathematical derivation. A plot you computed yourself creates the schema that makes the theory obvious.
2. **45 minutes maximum per session**: Stop the moment the clock hits 45 min or the task finishes. Compounding comes from consistency across evenings, not exhaustion.
3. **One concrete artifact per module**: Every session must output a tangible artifact: a forest plot, a summary table, a registered string, or a French synthesis note. Reading without an artifact does not count.
4. **Attempt, do not master**: No module requires full mastery to advance. Execute the rep, produce the artifact, and move forward. The second pass will be intuitive.
5. **Permission to skip**: Hard conceptual gates (Modules 7, 14, 15) can be deferred without blocking the rest of the pipeline.

---

## 1. The Definitive Library & References

### A. The Core Applied Spine (Open Access & Practical)

| Resource | Title & Authors | Key Focus & Location |
| :--- | :--- | :--- |
| **The Applied Bible** | *Doing Meta-Analysis with R: A Hands-On Guide*<br>— Harrer, Cuijpers, Furukawa, Ebert (2021) | Step-by-step code in `meta`, `metafor`, `dmetar`. Written by the leading psychiatric evidence synthesis group. Free at `doing-meta.guide`. |
| **The Gold Standard Manual** | *Cochrane Handbook for Systematic Reviews of Interventions*<br>— Higgins, Thomas, Chandler et al. (2nd ed. 2019) | The international methodological benchmark. Consult specific chapters. Free at `training.cochrane.org/handbook`. |
| **Data Engine in R** | *R for Data Science* (2nd ed. 2023)<br>— Wickham, Çetinkaya-Rundel, Grolemund | Mastering `tidyverse`, `dplyr`, `ggplot2`. Free at `r4ds.hadley.nz`. |
| **Psychometric Code** | *An Introduction to Psychometric Theory with Applications in R*<br>— William Revelle (Author of `psych` package) | Classical test theory, factor analysis, reliability. Free at `personality-project.org/r/book/`. |
| **Certainty System** | *GRADE Handbook*<br>— Schünemann, Brożek, Guyatt, Oxman | How evidence quality is graded (imprecision, risk of bias, inconsistency). Free at `gdt.gradepro.org`. |
| **Open Dataset on Disk** | *Cipriani et al. 2018 GRISELDA Database* (*The Lancet*) | 522 trials, 117,000 patients, 21 antidepressants. Ready at `~/method/data/cipriani_griselda_lancet2018.xlsx`. |

---

### B. The Conceptual & Deep Methodological Library

| Book | Author(s) & Publisher | Why It Is Essential |
| :--- | :--- | :--- |
| **Conceptual Meta-Analysis** | *Introduction to Meta-Analysis* (2nd ed. 2021)<br>— Borenstein, Hedges, Higgins, Rothstein (Wiley) | The theoretical twin to Harrer. Explains fixed vs. random effects, weighting models, and variance components without drowning in software syntax. |
| **Clinical Epidemiology** | *Systematic Reviews in Health Research: Meta-Analysis in Context* (3rd ed. 2022)<br>— Egger, Higgins, Davey Smith (BMJ Books / Wiley) | Advanced health research epidemiology, multi-level modeling, bias adjustment, and meta-epidemiology. |
| **Advanced NMA** | *Network Meta-Analysis for Decision-Making* (2018)<br>— Dias, Ades, Welton, Jansen, Caldwell (Wiley) | The mathematical Bible of indirect comparisons, transitivity, consistency equations, and Bayesian network models. |
| **French Biostatistics** | *Comprendre et utiliser les statistiques dans les sciences de la vie* (2020)<br>— Bruno Falissard (Elsevier Masson) | Your precise French statistical register. Teaches you how French academic boards and the EVC expect statistical concepts to be stated. |
| **Questionnaire Analysis** | *Analysis of Questionnaire Data with R*<br>— Bruno Falissard (Chapman & Hall / CRC) | Bridges clinical psychiatric rating scales with mathematical measurement using the `psy` package. |
| **Scale Construction** | *Health Measurement Scales: A Practical Guide to Their Development and Use* (5th ed. 2015)<br>— Streiner, Norman, Cairney (Oxford Univ Press) | The most practical manual on item selection, scale design, and validating clinical rating instruments (HAM-D, MADRS, PANSS). |
| **Philosophy of Measurement** | *Measuring the Mind: Conceptual Issues in Contemporary Psychometrics* (2005)<br>— Denny Borsboom (Cambridge Univ Press) | The intellectual crown: analyzes what latent variables actually are and why operationalism fails in psychiatry. |
| **The Deep Critique** | *Measurement in Psychology: A Critical History of a Methodological Concept*<br>— Joel Michell (Cambridge Univ Press) | The foundational attack: argues modern psychology never proved that psychological attributes are quantitative variables. |
| **Modern Bayesian Modeling** | *Statistical Rethinking: A Bayesian Course with Examples in R and Stan* (2nd ed. 2020)<br>— Richard McElreath (CRC Press) | Upgrades your statistical intuition: DAGs, generative models, Bayesian priors, and multilevel regressions. |

---

### C. Landmark Methodological Papers (The Core Portfolio)

- **Eiko Fried (2017)**: *"The 52 symptoms of major depression: Lack of content overlap among seven common depression scales."* (*J Affect Disord*). The paper proving depression rating scales don't measure the same clinical object.
- **John P. A. Ioannidis (2016)**: *"The Mass Production of Redundant, Misleading, and Conflicted Systematic Reviews and Meta-analyses."* (*Milbank Q*). Exposes the meta-analysis publication bubble.
- **Joanna Moncrieff et al. (2022)**: *"The serotonin theory of depression: A systematic umbrella review of the evidence."* (*Mol Psychiatry*) + 2023/2024 published critiques and rebuttals.
- **Erick H. Turner et al. (2008)**: *"Selective Publication of Antidepressant Trials and Its Influence on Apparent Efficacy."* (*N Engl J Med*). The classic FDA unreleased dataset study on publication bias.
- **Denny Borsboom (2017)**: *"A network theory of mental disorders."* (*World Psychiatry*). Replaces latent disease models with causal symptom networks.

---

# TRACK A — The Hands (Biostatistics & Computation in R)

Seven practical modules. You master data pipelines, effect sizes, pooling models, heterogeneity, and network meta-analyses in R.

---

### Module 0 — The First Forest Plot Before You Understand Anything
* **The Task**: Open R / RStudio. Install `meta`, `metafor`, and `dmetar`. Open Harrer Ch. 4, run the built-in depression trial example, and generate a high-resolution forest plot.
* **Read**: Harrer et al., *Doing Meta-Analysis with R*, Chapter 1 & Chapter 4 (first 10 pages).
* **Target Psychiatric Object**: Suicide prevention in adolescents / depression trial dataset.
* **Artifact**: `forest_plot_module0.png` saved in your workspace.
* **Hinge Question**: What do the squares, horizontal lines, and diamond at the bottom represent visually?

---

### Module 1 — Data Wrangling & Corpus Architecture in R
* **The Task**: Load `~/method/data/cipriani_griselda_lancet2018.xlsx`. Filter by drug (e.g., Fluoxetine vs Sertraline vs Escitalopram), count trial sizes, compute dropout rates, and plot trial distributions with `ggplot2`.
* **Read**: Wickham & Grolemund, *R for Data Science*, Chapters on `dplyr` (data transformation) & `ggplot2` (visualization).
* **R Packages**: `tidyverse`, `readxl`, `janitor`.
* **Artifact**: Clean R script `griselda_exploration.R` answering 4 clinical questions on the Cipriani dataset.
* **Hinge Question**: Why does 90% of statistical frustration stem from improper data shapes rather than mathematical difficulty?

---

### Module 2 — What a Number Actually Means (Effect Sizes & Metrics)
* **The Task**: Compute Standardized Mean Difference (SMD), Cohen's $d$, and Hedges' $g$ by hand in R for 3 real depression trials (HAM-D means, SDs, and sample sizes). Compare with `metafor::escalc()`.
* **Read**: 
  - Harrer, Chapter 3 (*Effect Sizes*).
  - Borenstein et al., *Introduction to Meta-Analysis*, Chapters 4, 5 & 7 (Continuous vs Binary metrics).
* **Target Psychiatric Object**: HAM-D 17-item scale vs MADRS score reductions.
* **Artifact**: Table of 3 hand-computed effect sizes with exact 95% confidence intervals.
* **Hinge Question**: When you convert a 3-point raw difference on HAM-D into a Hedges' $g$ of 0.30, what mathematical assumption have you made about the variance across patient populations?

---

### Module 3 — Pooling Models (Fixed-Effect vs. Random-Effects)
* **The Task**: Pool your 3 trials using both Fixed-Effect (inverse variance) and Random-Effects (DerSimonian-Laird & REML) models. Observe the weight redistribution and CI widening.
* **Read**: 
  - Harrer, Chapter 4 (*Pooling Effect Sizes*).
  - Borenstein, Chapters 11–13 (*Fixed-Effect vs Random-Effects Models: Concept, Math, and Differences*).
  - Falissard, *Comprendre et utiliser les statistiques*, Section on variance decomposition.
* **R Functions**: `meta::metacont(..., method.tau = "REML", common = TRUE, random = TRUE)`.
* **Artifact**: One French paragraph explaining precisely why Fixed-Effect models are almost always scientifically indefensible in psychiatry.
* **Hinge Question**: Is between-study variance ($	au^2$) sampling error, or does it reflect genuine clinical differences between patient cohorts?

---

### Module 4 — Heterogeneity: The Noise Floor vs True Clinical Signal
* **The Task**: Calculate Cochran's $Q$, $I^2$, and the 95% **Prediction Interval** for Escitalopram trials in the GRISELDA database. Identify outlying studies and examine their inclusion criteria.
* **Read**: 
  - Harrer, Chapter 5 (*Between-Study Heterogeneity*).
  - Cochrane Handbook, Chapter 10, Section 10.10 (*Heterogeneity*).
  - Borenstein, Chapters 16–18 (*Identifying and Quantifying Heterogeneity*).
* **R Functions**: `meta::forest(..., prediction = TRUE)`.
* **Artifact**: Forest plot with prediction intervals + clinical audit note on the 2 outlier trials.
* **Hinge Question**: If $I^2 = 80\%$, does the drug have variable efficacy, or were the trials evaluating completely different clinical populations?

---

### Module 5 — Publication Bias, File-Drawer Effect & Small-Study Effects
* **The Task**: Generate a contour-enhanced funnel plot for a major antidepressant. Run Egger's linear regression test and perform Duval & Tweedie's trim-and-fill procedure to estimate missing trials.
* **Read**: 
  - Harrer, Chapter 9 (*Publication Bias*).
  - Turner et al. (2008), *N Engl J Med* paper on FDA vs. published antidepressant trials.
  - Borenstein, Chapter 30 (*Publication Bias*).
* **R Functions**: `meta::funnel()`, `dmetar::eggers.test()`, `meta::trimfill()`.
* **Artifact**: Funnel plot comparing raw published effect size vs trim-and-fill adjusted effect size.
* **Hinge Question**: Why can true clinical heterogeneity mimic publication bias on a funnel plot?

---

### Module 6 — Subgroup Analyses & Meta-Regression
* **The Task**: Perform a meta-regression in R evaluating whether baseline depression severity moderates antidepressant effect sizes. Test for linearity and ecological fallacies.
* **Read**: 
  - Harrer, Chapters 7 & 8 (*Subgroup Analysis & Meta-Regression*).
  - Fournier et al. (2010), *JAMA* landmark paper on antidepressant severity thresholds.
  - Egger et al., *Systematic Reviews in Health Research*, Chapter on Meta-Regression.
* **R Functions**: `meta::metareg(..., ~ baseline_severity)`.
* **Artifact**: Bubble plot of effect size against baseline HAM-D severity with fitted regression line.
* **Hinge Question**: What is the ecological fallacy at the study level, and why can trial-level averages lie about individual patient treatment responses?

---

### Module 7 — Network Meta-Analysis (NMA & Multiple Treatments)
* **The Task**: Construct a multi-arm network graph of 5 antidepressants from the GRISELDA database. Compute direct vs. indirect estimates, test for network inconsistency, and calculate P-scores / SUCRA rankings.
* **Read**: 
  - Harrer, Chapter 12 (*Network Meta-Analysis*).
  - Dias et al., *Network Meta-Analysis for Decision-Making*, Chapters 1–3 (*The Principles of NMA*).
  - Cipriani et al. (2018), *The Lancet* methods appendix.
* **R Packages**: `netmeta`, `dmetar`.
* **Artifact**: Network evidence graph + P-score ranking league table.
* **Hinge Question**: What is the **transitivity assumption**, and what clinical scenario completely shatters indirect comparisons between two drugs?

---

# TRACK B — The Eyes (Systematic Review Standards & Quality Appraisal)

Five non-mathematical modules. You master search architecture, screening protocols, risk of bias (RoB 2, ROBINS-I), certainty (GRADE), and umbrella review quality (AMSTAR-2).

---

### Module 8 — The Exhaustive Search Architecture
* **The Task**: Build a comprehensive, multi-layered Boolean search strategy for a narrow psychiatric question (e.g., *Ketamine in treatment-resistant bipolar depression*) with MeSH headings, wildcards, and field tags in PubMed.
* **Read**: 
  - Cochrane Handbook, Chapter 4 (*Searching for and Selecting Studies*).
  - PRISMA-S 2021 reporting guideline for search strategies.
* **Artifact**: Exported reproducible search syntax with date stamp, database filters, and hit counts across PubMed, Embase, and PsycINFO.
* **Hinge Question**: Why does an unindexed free-text search miss 30% of relevant clinical trials?

---

### Module 9 — Screening, Deduplication & Inter-Rater Concordance
* **The Task**: Import 100 search yields into Rayyan. Conduct two blinded screening passes separated by 7 days. Compute your Cohen's $\kappa$ intra-rater agreement and construct an automated PRISMA 2020 flow diagram.
* **Read**: 
  - Cochrane Handbook, Chapter 5 (*Collecting Data*).
  - Page et al. (2021), *The PRISMA 2020 statement: an updated guideline*.
* **R Package**: `PRISMA2020` (interactive flow chart generator).
* **Artifact**: Full PRISMA 2020 screening flow diagram with exact exclusion breakdown.
* **Hinge Question**: Why does single-screener protocol design invalidate a systematic review for top-tier medical journals?

---

### Module 10 — Risk of Bias 2 (RoB 2) & ROBINS-I Deep Appraisal
* **The Task**: Apply the Cochrane **RoB 2** tool across all 5 domains (randomization, deviations, missing data, outcome measurement, selection of reported results) to 3 landmark psychiatric RCTs. Generate summary traffic-light plots.
* **Read**: 
  - Sterne et al. (2019), *RoB 2: a revised tool for assessing risk of bias in randomised trials* (*BMJ*).
  - Sterne et al. (2016), *ROBINS-I for non-randomised studies of interventions* (*BMJ*).
  - Cochrane France ROBINS-I instructional materials.
* **R Package**: `robvis`.
* **Artifact**: High-resolution traffic-light and weighted summary plot (`robvis_traffic_light.png`).
* **Hinge Question**: In a psychotherapy or psychiatric trial, why is lack of participant blinding often impossible to fix, and how should Domain 2 reflect this without biasing the result?

---

### Module 11 — Certainty of Evidence & The GRADE Framework
* **The Task**: Build a complete GRADE **Summary of Findings (SoF)** table for a pooled outcome. Formulate and defend downgrade decisions across the 5 domains (risk of bias, inconsistency, indirectness, imprecision, publication bias).
* **Read**: 
  - *GRADE Handbook* (Schünemann et al.).
  - Guyatt et al., GRADE working group papers in *J Clin Epidemiol*.
  - HAS (Haute Autorité de Santé) guide for clinical practice guidelines.
* **Tool**: GRADEpro GDT (`gradepro.org`).
* **Artifact**: Formatted Summary of Findings table with explicit footnote rationales for each downgrade.
* **Hinge Question**: What is the crucial clinical distinction between *"the drug has a trivial effect"* and *"we have very low certainty about whether the drug has an effect"*?

---

### Module 12 — The Umbrella Review Position & AMSTAR-2 Quality Appraisal
* **The Task**: Conduct an **AMSTAR-2** critical appraisal across 5 published systematic reviews on a single psychiatric intervention (e.g., rTMS in depression). Identify critical flaws and rank review validity.
* **Read**: 
  - Shea et al. (2017), *AMSTAR 2: a critical appraisal tool for systematic reviews* (*BMJ*).
  - Ioannidis (2016), *The Mass Production of Redundant, Misleading, and Conflicted Systematic Reviews*.
  - Fusar-Poli & Radua (2018), *Ten simple rules for conducting umbrella reviews* (*Lancet Psychiatry*).
* **R Package**: `metaumbrella`.
* **Artifact**: AMSTAR-2 evaluation matrix categorizing the 5 reviews into High, Moderate, Low, or Critically Low quality.
* **Hinge Question**: Why are umbrella reviews the single most unsaturated and influential synthesis format in contemporary psychiatry?

---

# TRACK C — The Rare Layer (Psychometrics, Epistemology & Capstone)

Six advanced modules. You bridge statistical computation with the deep philosophical question of psychiatric measurement, ending in a registered PROSPERO protocol.

---

### Module 13 — The Mathematics of Questionnaires & Rating Scales
* **The Task**: Load a public psychiatric rating scale dataset (PHQ-9 or BDI). Compute item response frequencies, item-total correlations, Cronbach's $lpha$, and McDonald's $\omega$. Test what happens to reliability when redundant items are dropped.
* **Read**: 
  - Falissard, *Analysis of Questionnaire Data with R*, Chapters 1–4 (*Univariate & Bivariate description of questionnaire items*).
  - Streiner, Norman, Cairney, *Health Measurement Scales*, Chapter 5 (*Reliability*).
* **R Packages**: `psy`, `psych`.
* **Artifact**: Item analysis table reporting difficulty indices, item-total correlations, and $lpha$ vs $\omega$.
* **Hinge Question**: Why does a high Cronbach's alpha often indicate item redundancy (asking the same question in 4 ways) rather than scale validity?

---

### Module 14 — Factor Analysis & The Illusion of Latent Dimensions
* **The Task**: Run Exploratory Factor Analysis (EFA) with parallel analysis, followed by Confirmatory Factor Analysis (CFA) using structural equation modeling on a depression scale in R.
* **Read**: 
  - Revelle, *An Introduction to Psychometric Theory with Applications in R*, Chapter 6 (*Factor Analysis*).
  - Falissard, *Analysis of Questionnaire Data with R*, Chapter 6 (*Factor Analysis and Cluster Analysis*).
  - Borsboom, *Measuring the Mind*, Chapter 3 (*The Latent Variable Model*).
* **R Packages**: `psych`, `lavaan`.
* **Artifact**: CFA path diagram with fit indices (CFI, TLI, RMSEA, SRMR) and standardized factor loadings.
* **Hinge Question**: Does an extracted latent factor represent a real biological entity in the brain, or is it an algebraic summary of item correlations?

---

### Module 15 — The Quantity Objection (Joel Michell & Denny Borsboom)
* **The Task**: Write a rigorous 2-page essay in French: Stating Joel Michell's thesis that psychology never proved its attributes are quantitative, followed by Denny Borsboom's ontological response and its implications for psychiatric meta-analyses.
* **Read**: 
  - Joel Michell, *Measurement in Psychology: A Critical History of a Methodological Concept*, Chapters 1, 2 & 9.
  - Denny Borsboom, *Measuring the Mind: Conceptual Issues in Contemporary Psychometrics*, Chapters 1 & 2.
  - Derek Bolton, *What is a Mental Disorder?*, Chapters on measurement validity.
* **Artifact**: Two-page French philosophical-methodological brief: *« La sévérité d'un trouble mental est-elle une grandeur mesurable ? »*
* **Hinge Question**: If depression severity is ordinal rather than continuous interval, what mathematical violation occurs when meta-analysts average mean scores across trials?

---

### Module 16 — The 52 Symptoms of Depression (Eiko Fried & Network Theory)
* **The Task**: Re-analyze the symptom overlap across 7 major depression scales (HAM-D, MADRS, BDI, QIDS, CES-D, SDS, PHQ-9). Map out which clinical domains are present in one scale and completely absent in another.
* **Read**: 
  - Eiko Fried (2017), *"The 52 symptoms of major depression: lack of content overlap among seven common depression scales"* (*J Affect Disord*).
  - Eiko Fried (2015), *"Problematic assumptions of depression measurement"* (*PLoS ONE*).
  - Borsboom (2017), *"A network theory of mental disorders"* (*World Psychiatry*).
* **Artifact**: Comparative symptom-matrix table highlighting scale discordances + audit of your Module 3 pooled trials.
* **Hinge Question**: If Trial A uses HAM-D (heavy on somatic/sleep items) and Trial B uses BDI (heavy on cognitive/guilt items), is pooling their Standardized Mean Difference scientifically valid?

---

### Module 17 — The Moncrieff Serotonin Controversy: Anatomy of a Capstone Case
* **The Task**: Perform an independent AMSTAR-2 and GRADE appraisal of Joanna Moncrieff’s 2022 serotonin umbrella review. Compare your rating against the published critiques in *Molecular Psychiatry* (2023/2024) and the King's College London response.
* **Read**: 
  - Moncrieff et al. (2022), *The serotonin theory of depression: a systematic umbrella review* (*Mol Psychiatry*).
  - Jauhar et al. (2023), *A critique of "The serotonin theory of depression"*.
  - Moncrieff et al. (2024), *Response to critiques*.
* **Artifact**: Forensic 3-page methodological report evaluating where the review followed strict protocol and where causal overclaiming occurred.
* **Hinge Question**: Where does legitimate methodological critique end and motivated institutional defense begin during a high-stakes scientific controversy?

---

### Module 18 — Designing & Registering Your Own PROSPERO Protocol
* **The Task**: Write, format, and submit a complete, official **PROSPERO systematic review / umbrella protocol**. Secure an international registration number.
* **Read**: 
  - PROSPERO registration guidelines & PRISMA-P 2015 statement.
  - Cochrane Handbook, Chapter 1 (*Starting a Review*).
* **3 High-Yield Protocol Niches**:
  1. *Content Overlap Bias*: Evaluating how many psychiatric meta-analyses pooled across disparate depression scales without testing scale-moderation effects.
  2. *Quality-Stratified Umbrella*: An umbrella review on an ambiguous psychiatric intervention (e.g. Ketamine/rTMS in refractory depression) stratified by AMSTAR-2 quality to test if lower-quality syntheses report inflated effect sizes.
  3. *Meta-Epidemiological Franco-Anglophone Comparison*: Examining whether French psychiatric syntheses differ from Anglo-Saxon ones in methodological rigor or reporting standards.
* **Artifact**: **Official PROSPERO Registration Number & Submitted Protocol Document.**

---

## 2. Master Blueprint & Study Cadence

```
Evenings 1 – 20   : Track A (Modules 0 → 3)   [R Mechanics & Basic Pooling]
Evenings 21 – 45  : Track A (Modules 4 → 7)   [Heterogeneity, Funnels, NMA] + Module 13 [Rating Scales]
Evenings 46 – 80  : Track B (Modules 8 → 12)  [Systematic Searches, RoB 2, GRADE, AMSTAR-2]
Evenings 81 – 120 : Track C (Modules 14 → 17) [Factor Analysis, Michell Objection, Fried 52 Symptoms, Moncrieff]
Evenings 121+     : Module 18                 [PROSPERO Protocol Registration & Paper Submission]
```

---

## 3. The 7-Point Paper Appraisal Mental Model

Keep this checklist active whenever reading any published psychiatric study:

```text
1. CLAIM      : What causal assertion is made in one sentence?
2. MEASURE    : What exact instrument was used, and is it comparable across arms?
3. DESIGN     : What confounding factor or bias could generate this number?
4. POOLING    : Was pooling legitimate? What does heterogeneity (I² / prediction interval) say?
5. CERTAINTY  : What would GRADE assign this finding, and why?
6. CONCEPT    : What is this number actually an estimate of (latent trait vs artifact)?
7. PUBLIC USE : What is the single unvarnished truth worth explaining to clinicians and the public?
```
