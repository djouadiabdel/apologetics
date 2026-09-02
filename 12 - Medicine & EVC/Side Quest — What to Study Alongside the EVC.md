# Side Quest — What to Study Alongside the EVC

Research note, 25 July 2026. Companion to `Plan Till EVC PSYCHIATRY.md` and `Clinical Core — August Briefing/`.

---

## 1. The question, stated precisely

You asked what field you should study at home as a side quest, given four things that are already true:

1. You have a deep-reading curriculum (phenomenology, descriptive psychopathology, philosophy of psychiatry) whose purpose is to make EVC content easy later because the psychological architecture is already built.
2. You make religious content (epistles, Girard, Chesterton) and it works.
3. You want to eventually make content **in French, for the French**, on your own subject.
4. You want meta-analyses and papers, and a name in the field.

So the real question is not "what is interesting." It is: **what single additional skill sits at the intersection of all four, so that one investment pays into the exam, the papers, the name, the channel and the business at once?**

That constraint eliminates almost everything. What survives is narrow and specific.

---

## 2. What your current plan already covers, and the hole it leaves

Your existing curriculum makes you good at three things:

- **Seeing** (phenomenology): hearing the difference between an overvalued idea and a delusional perception.
- **Naming** (Sims, CNUP): the semiology.
- **Questioning** (Bolton, Owen, Rashed): what a disorder is, what a diagnosis conceals.

That is a genuinely rare formation. It is also, on its own, **unfalsifiable**. Nothing in it produces a number, a table, a forest plot or a claim that could be shown wrong. Which means:

- It cannot, by itself, generate the meta-analyses you said you want.
- It gives you no way to answer the one objection French academic psychiatry will actually raise against you, which is "c'est de la philosophie, pas de la science."
- It gives you no leverage at all in the PCC years, when you need co-authors and a network.

The hole is not more philosophy and it is not more clinical medicine. **The hole is method.** You can currently interpret evidence but you cannot produce it, weigh it, or take apart someone else's.

---

## 3. The constraints I verified before recommending anything

These are facts as of July 2026 and they shape the answer.

**The EVC got harder and also got wider.**
- Psychiatry has **450 posts** at the EVC 2026, second-largest after médecine interne polyvalente, of which roughly **198 are voie externe**.
- **Since 2026, psychiatry is open to all PADHUE regardless of specialty of origin.** That is new. It means your competition is no longer just foreign psychiatrists, it is everyone who wants in. More posts, but a much bigger pool.
- Voie externe pass rate sits around **5 to 10%**. Voie interne is roughly half.
- Format: EVCF in QROC, EVCP in dossiers cliniques progressifs, with QCM having appeared in the 2025 session.
- Your existing note says 440 posts and 3,799 internal posts. Update those numbers.

**Implication:** any side quest must either feed the exam directly or be hard-capped in time. In the last 18 months before you sit, the side quest goes to near zero. Non-negotiable.

**The Ordre constrains the business more than you think.**
- The décret of 22 December 2020 ended the outright ban on physician advertising, but the CNOM issued a **charte for médecins créateurs de contenu in January 2025** which forbids personal or commercial promotion, forbids promoting a health product, requires disclosure of any partnership, and forbids giving personalised medical advice online.
- The Conseil d'État ruled on 13 May 2026 on whether online recommendations by a doctor can count as a prescription.

**Implication:** an info-product sold under your identity as a French psychiatrist, aimed at patients, is legally awkward and will stay awkward. An info-product sold to **professionals and students**, teaching a method rather than treating a condition, sits almost entirely outside this. Remember this, it determines which skill is worth learning.

**The meta-analysis market is saturated and everyone knows it.**
- Over ten systematic reviews and meta-analyses are published **daily**. Fordham et al. found 494 systematic reviews of CBT alone.
- Between **40% and 70%** of psychiatric evidence syntheses rate low or critically low on AMSTAR-2.
- The field's response has been umbrella reviews and meta-epidemiology, that is, work that **evaluates other people's syntheses** rather than adding another one.

**Implication:** do not become a meta-analysis mill. Nobody needs your 495th CBT review. The scarce position is the one that judges syntheses, and that position requires exactly the thing you already have (conceptual rigour about what is being measured) plus the thing you lack (the statistics).

---

## 4. The candidates, judged honestly

I considered seven. Scored against: doable alone in Algeria for free, feeds the EVC, produces publications, produces content, produces a defensible business, and compounds with what you already have.

| Field | Doable at home | Feeds EVC | Produces papers | Content | Business | Verdict |
|---|---|---|---|---|---|---|
| **Evidence synthesis + biostatistics in R** | Yes, fully free | Indirectly, strong | Directly, this is the vehicle | Yes, large French gap | Yes, sold to professionals | **Primary** |
| **Psychometrics / measurement theory** | Yes | No | Yes, and it is the rare angle | Yes, best fit with your thesis | Partly | **Fused into the primary** |
| Real-world data / SNDS pharmacoepidemiology | Documentation is open, data access is not | No | Very strong, once in France | Weak | Weak | **Phase 2, during PCC** |
| AI / ML in psychiatry | Yes | No | Crowded, and you would be late | Yes but noisy | Yes | Defer |
| A psychotherapy modality (TCC, CBT-I) | No, needs supervision | Slightly | No | Yes | Yes | Already decided: DU later |
| Clinical epidemiology / causal inference | Yes | Slightly | Yes | Low | No | Subsumed by the primary |
| Medical French / academic writing | Yes | Yes | Yes | Yes | Yes | **Already running**, keep it |

---

## 5. The recommendation

> **Learn evidence synthesis and the statistics under it, and specialise inside it on measurement, that is, on what psychiatric numbers are actually numbers of.**

Concretely, one skill with two faces:

**Face A, the technical one.** Systematic review and meta-analysis, done properly. PRISMA 2020, PROSPERO registration, RoB 2, ROBINS-I, GRADE, heterogeneity, publication bias, meta-regression, network meta-analysis. Executed in **R** with `meta` and `metafor`.

**Face B, the conceptual one.** Psychometrics and measurement. What a Hamilton score is. Whether a sum of ordinal items is an interval quantity. What it means to pool effect sizes across scales that do not measure the same construct. Validity theory. Network theory of psychopathology.

Face B is where your phenomenology stops being decorative and becomes an argument. When you ask "is depression the sort of thing that admits of a quantity," that is a Ratcliffe question and a Bolton question, but it is also a **live methodological question that gets published in psychiatric journals**, and almost nobody can argue it from both sides. Philosophers cannot compute. Statisticians have not read Jaspers.

That is your position. It is genuinely unoccupied.

---

## 6. The proof that this position exists: Bruno Falissard

You do not have to guess whether this profile has a career in France. It has one, and it belongs to the most influential methodologist in French psychiatry.

Falissard is polytechnicien, doctor in statistics, psychiatrist, child psychiatrist, professor of biostatistics at Paris-Saclay, director of CESP (Inserm), member of the Académie de médecine, past president of IACAPAP. His stated research area is **"methodology and epistemology of research in medicine, psychiatry, psychoanalysis and neuroscience."** He gives epistemology seminars at *L'Évolution Psychiatrique*, which is on your own fallback journal list.

At the **Congrès de l'Encéphale 2026** he was programmed in a debate with Fabrice Berna explicitly framed as navigating "entre scientisme et relativisme nihiliste," on the grounds that the biological model has not kept its promises and that the human sciences resist naturalisation.

So the exact synthesis you are trying to build (quantitative competence plus philosophical seriousness about what psychiatry is doing) is not a fantasy niche. It is the highest-status intellectual position in French psychiatry, and it is currently held by very few people. Falissard is 65.

The route he took is not open to you. You are not going to Polytechnique. But the **position** is defined by what you can do, not by where you studied, and the two capabilities that define it can both be self-taught.

---

## 7. Why this beats the alternatives you were probably considering

**Why not AI/ML?** Because in 2026 everyone with a medical degree and a GPU is doing it, the barrier to entry is gone, and your comparative advantage there is zero. Whereas your comparative advantage in "person who has read both Blankenburg and the GRADE handbook" is close to total. Also, ML in psychiatry mostly bottlenecks on measurement quality, so if you learn measurement you can later critique the ML papers, which is a better seat than competing to write them.

**Why not SNDS now?** Because the SNDS is the single most valuable France-specific research asset (67 million people, 99% coverage, the world's largest medico-administrative warehouse) and pharmacoepidemiology on it is a recognised French speciality with a documented shortage of trained people. But access is institutional. You cannot touch the data from Batna. **Park it.** The documentation is public and free, so read the structure during PCC, and pick it up the moment you have a French affiliation. This is your phase 2 skill and it is what will make you locally irreplaceable rather than globally generic.

**Why not just more philosophy?** Because you already have enough philosophy to be interesting and not enough method to be believed. Marginal return on the tenth phenomenology book is much lower than on the first statistics book.

**Why not a second content niche?** Answered in section 9.

---

## 8. The eighteen-month path, all free

You do not need the DU yet. Everything below costs nothing.

**Months 1 to 3, the spine.**
- **Harrer, Cuijpers, Furukawa, Ebert, *Doing Meta-Analysis with R: A Hands-On Guide*.** Free in full at `doing-meta.guide`, with the `dmetar` companion package. Cuijpers and Furukawa are the two most cited people in psychotherapy meta-analysis, so this is not a generic stats book, it is your field's book.
- Install R and RStudio. Work every chapter with code, not by reading.
- **Cochrane Handbook**, chapters 10 (analysing data), 8 and 25 (risk of bias), 14 (GRADE). Free online.
- **Cochrane Interactive Learning module 1** is free to registered users.

**Months 4 to 6, the first replication.**
- Pick a published psychiatric meta-analysis with an available data table. Re-run it in R from scratch. Get the same pooled estimate. Then break it: change the model, change the effect measure, drop the outliers, see how fragile the conclusion was.
- This single exercise teaches more than a year of reading, and it produces your first genuine content ("I reproduced a famous result and it moved").

**Months 7 to 12, the measurement turn.**
- Read on validity, ordinal scales and the quantity question. Borsboom on measurement and on the network theory. Then read the psychiatric critiques of the HAM-D and the PHQ-9.
- Write the bridging piece: this is the abstract for the Encéphale humanities track. Your August Core extraction pipeline already exists, this just gives it a second, harder-edged Core to draw from, one that will survive review far better than a purely Girardian abstract.
- **Cochrane France runs free French-language webinars** (rapid reviews, living systematic reviews, ROBINS-I, TACIT for conflicts of interest). Attend them. They are in French, they are your register practice, and they put names in front of you.

**Months 13 to 18, the first real output.**
- Register a protocol on **PROSPERO**. Free, and it is a public, citable, permanent record with your name on it, obtainable with no supervisor and no institution. This is the cheapest piece of academic capital in existence and almost no medical student uses it.
- Target either an **umbrella review** or a **meta-epidemiological critique** rather than a fresh pairwise meta-analysis, for the saturation reasons in section 3.

**Later, once you are in France and it is fundable.**
- **DU Revues systématiques et méta-analyses en santé, Université Paris Cité** (linked from Cochrane France). Roughly **1,000 € for students and internes** plus a 300 € dossier fee, partly at distance. Do this during FFI or PCC when a hospital may pay, not now. There is also a second-level **DU Méthodes avancées**.
- Then the SNDS, and the TDAH work you already planned.

**The hard stop.** Eighteen months before your EVC sitting, this all goes to maintenance. Your own file already sets the pivot to 60 to 70% French clinical psychiatry at that point. Honour it. A 5 to 10% pass rate does not forgive a divided final year.

---

## 9. The content question, answered directly

You asked whether you should make content about a second skill, or about your own field. Here is the honest reading.

**Do not start a second channel.** Your thesis is already chosen and it is good: *how do you tell a person apart from their nature*. Splitting attention across two identities halves both.

**But the new skill is not a second topic. It is the missing method for the one you have.** Right now your thesis is philosophical, which means an unsympathetic viewer can dismiss it as opinion. The moment you can say "here is the scale, here is what it actually measures, here is what happens to the pooled estimate when you take the construct seriously," the same thesis becomes unanswerable. Measurement is where person-versus-nature stops being an abstraction and becomes a technical fact about a questionnaire.

So the integration is: **religious and philosophical content stays the spine, methodology becomes the evidence.** Same channel, sharper teeth.

**There is, however, one genuinely separate content play worth naming.**

French-language teaching of critical appraisal and research methodology, aimed at **French medical students, internes and PADHUE**, is a real and underserved market. Consider what is true about it:

- The audience already pays for education (prépa EVC sites exist and charge for exactly this population).
- It is **deontologically clean**. The CNOM charte constrains health information addressed to the public. Teaching internes how to read a forest plot is not health information for patients, it is professional education, so the "no commercial promotion" problem mostly evaporates.
- It is **location-independent and language-locked**, which is the right shape for the business you want: French-speaking global audience, no clinic, no premises, and it survives you leaving France.
- You already have the copywriting skills from the old business, so the sales side is not a new skill.
- You yourself are the proof of concept. You are learning it from zero, in Algeria, alone. That is the story, and it is the same confessional-interior register you write best in.

The general-public French psychiatry space is not empty (PsyLab is at roughly 87k subscribers, plus La Psy du Soleil, La Psy qui parle, Va Te Faire Suivre). It is winnable but crowded, and it is the space where the Ordre's rules bite hardest. The professional-education space is thinner, better paid per head, and legally safer.

My recommendation: **one public channel on the thesis, one paid track for professionals on method.** They feed each other and neither is a second identity.

---

## 10. What not to do

- **Do not add a fourth spine to the reading plan.** This replaces nothing in `Plan Till EVC PSYCHIATRY.md`, it sits beside it as the method track. Three books open, plus R.
- **Do not chase a publication count.** Three defensible outputs beat twelve forgettable ones, and in a saturated synthesis market the count actively signals mill work.
- **Do not learn statistics from statistics books.** Learn them from psychiatric meta-analyses you are trying to reproduce. You already know that reading cold and getting confused is how you learn.
- **Do not let this touch the daily French writing.** Your own decision log says publication anxiety must not contaminate it. The method track has its own slot.
- **Do not buy the DU yet.** Free material takes you at least eighteen months deep.
- **Do not build a patient-facing paid product under your French medical identity** without checking the current CNOM position in writing.

---

## 11. Open questions worth verifying before committing money

1. Does the Paris Cité DU accept candidates **resident outside France** and non-doctors (you would be enrolling as a student or an interne)? The distance component suggests yes, the "présentiel" component suggests partly no. Ask the secretariat.
2. Exact 2027 or 2028 EVC format and post allocation. It has moved in each of the last two sessions and your file's numbers are already stale.
3. Whether PROSPERO currently accepts registrations from an author with **no institutional affiliation**. If not, the workaround is a co-registrant, which is itself a reason to start emailing people early.
4. The precise current CNOM position on **paid educational products sold by a registered physician to non-patients**. This is the single legal fact your whole business model rests on.

---

## Sources

- [Session EVC 2026, CNG](https://www.cng.sante.fr/session-evc-2026)
- [Postes ouverts aux EVC 2026](https://prepevc.fr/liste-postes-evc-2026/) and [EVC 2026, ce qui change](https://prepevc.fr/evc-2026/)
- [PADHUE, réforme des EVC et du PCC, FHF](https://www.fhf.fr/expertises/ressources-humaines/personnel-medical/padhue-reforme-des-evc-et-du-pcc)
- [Démographie, 16 200 psychiatres au 1er janvier 2026](https://www.santementale.fr/2026/07/demographie-des-professionnels-de-sante-16-200-psychiatres-au-1er-janvier-2026/)
- [Médecin créateur de contenu et communication éthique, charte CNOM janvier 2025, MACSF](https://www.macsf.fr/responsabilite-professionnelle/relation-au-patient-et-deontologie/medecin-createur-contenu-charte-communication-responsable)
- [Être un médecin-influenceur en 2026, La Revue du Praticien](https://www.larevuedupraticien.fr/article/etre-un-medecin-influenceur-en-2026-quels-reperes-juridiques)
- [The Mass Production of Redundant, Misleading, and Conflicted Systematic Reviews and Meta-analyses](https://pmc.ncbi.nlm.nih.gov/articles/PMC5020151/)
- [Umbrella review protocol on CBT and psychodynamic therapy, Frontiers in Psychiatry 2025](https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2025.1664393/full)
- [Doing Meta-Analysis in R, free online guide](https://doing-meta.guide/)
- [Cochrane Handbook chapter 10](https://training.cochrane.org/handbook/current/chapter-10)
- [Webinaires Cochrane France 2026](https://france.cochrane.org/news/webinaires-cochrane-et-ecole-dete-2026) and [nos formations](https://france.cochrane.org/ressources/formations)
- [DU Revues systématiques et méta-analyses en santé, Université Paris Cité](https://odf.u-paris.fr/fr/offre-de-formation/diplome-d-universite-du-diu-1/sciences-technologies-sante-STS/du-revues-systematiques-et-meta-analyses-en-sante-JXMZAKB9.html)
- [Bruno Falissard, statistics serving child psychiatry, Paris-Saclay](https://www.universite-paris-saclay.fr/en/news/bruno-falissard-statistics-serving-child-psychiatry) and [séminaire d'épistémologie, L'Évolution Psychiatrique](https://levolutionpsychiatrique.fr/seminaire-depistemologie-du-7-janvier-2021-bruno-falissard-ce-que-la-notion-de-troubles-du-neurodeveloppement-dit-de-la-pedopsychiatrie-du-xxieme-siecle/)
- [Programme du congrès de l'Encéphale 2026](https://www.encephale.com/Congres/Congres-de-l-Encephale-2026/Programme-2026)
- [Use of the French National Health Data System (SNDS) in pharmacoepidemiology](https://www.sciencedirect.com/science/article/pii/S0040595724000659)
- [Bourses jeunes chercheurs et publication d'appui, Fondation FondaMental](https://www.fondation-fondamental.org/faire-avancer-la-recherche/laide-la-recherche/bourses-jeunes-chercheurs)
- [Le beau succès de PsyLab, Le Quotidien du Médecin](https://www.lequotidiendumedecin.fr/actus-medicales/esante/le-beau-succes-de-psylab-la-chaine-youtube-qui-demystifie-la-psychiatrie)
