---
title: The Accusation, and the Wager
series: Falsifiable Girard
post: 1
tier: standard
status: drafted, unreviewed
drafted: 2026-08-17
sources: Myths — Forensic Record.md, NEXT.md, PREREGISTRATION-2.md, S1 skeleton, git log
---

The standard objection to René Girard is that his theory cannot lose.

Put it at full strength. The weak version is easy to knock down and I am not interested in that.

Girard says human desire is copied from other people. Copying turns models into rivals. Rival crowds discharge themselves onto a single victim, and the peace afterwards makes the victim look guilty. Myth is the surviving story, told by the people who did it, from inside. Which is why the victim in a myth is always genuinely monstrous.

Now watch what that does to evidence.

A text where the victim looks guilty confirms the theory, because that is what the mechanism produces. A text where the victim looks innocent confirms it too, because that is the mechanism being exposed. A text with no visible victim confirms it best of all, since the whole point is that the mechanism hides itself.

There is no text you could hand a Girardian that would make him say the words *this one does not fit*.

That is not a cheap shot. It is the objection his defenders have to answer.

And the honest answer is that most Girardian reading is interpretation rather than measurement. Interpretation of that kind cannot fail.

## The wager

So I made a bet with myself. Take the part of the theory that is enumerable, turn it into code, and write down what it predicts before running it.

Girard says the persecution mechanism leaves four marks in the text it produces. A social crisis. An accusation of crimes that break the deepest boundaries. Marks that single out the victim. And the collective violence itself. Four sentences, in his own books, that are specific enough to make into word lists.

So I made word lists. Then I ran them over a corpus of Greek and Roman literature that I had not read.

The discipline is one rule, and everything else in this series comes out of it.

>> **Commit the prediction to git before the scorer exists. Then report what happened, including when what happened is that I was wrong.**

That rule is cheap to state and expensive to keep.

It cost me the ability to fix an instrument after seeing what it did. It cost me a corpus page that would have flipped a failed prediction to passing. I found that page while fixing an unrelated bug, and I had to exclude it. It is still on disk. Unused.

> [FIGURE 1. The wager as a single loop. Write prediction, commit, build scorer, run, report. An arrow leaving the loop at "report" labelled "even when it fails", and a red X across the arrow that would run backwards from "run" to "write prediction". The forbidden arrow is the content.]

## What actually got built

Three instruments, not one, and they test different things.

**The scapegoat detector.** Four word lists over 73 Greek and Roman texts, plus the four Gospels and 23 tragedies. Ten pre-registered rounds between July and August. This is the one most of the series is about.

**The interlock instrument.** A separate study asking whether the New Testament's internal contradictions are what a hostile compiler says they are. The docket comes from atheist aggregators, so I could not skip the hard ones. Every allegation runs through nine gates and a cost scale.

**The conversion instrument.** Three of the seven transformations Girard names at the end of *Deceit, Desire and the Novel*. Scored on the last 1,500 words of novel endings.

They are separate studies with separate pre-registrations. None of them rescues another.

## What a falsifier is, since seven of them fired

A prediction says what you expect. A **falsifier** says what would make you stop.

They are not the same thing and the second one is rarer. A prediction can fail and leave the theory untouched, because you can always say the instrument was blunt. A falsifier is a number, fixed before the run, attached to a sentence of the form *if this comes out above that, the round does not get to claim what it was built to claim.*

Three examples from this project, all written before the data existed.

**If the median result across all texts is inside this band, report the round as under-powered rather than as an absence.** That one fired. The statistic came back at −0.012 and a round that would otherwise have read as *the effect is not there* was reported instead as *this instrument could not have seen it*.

**If more than 40% of rejections come through two gates, the rejection rate is unreliable.** That one fired at 67.6%, in the contradiction study, and it is the headline of that study rather than a footnote.

**If dropping one unit changes the verdict, say so.** That one fired too. Four of twenty-two units move a verdict on their own.

>> **A fired falsifier is a success. It is the instrument doing the one thing an instrument is for.**

The reason to say that loudly is that the alternative is worse than it looks. A project with no falsifiers is not a project with fewer problems. It is a project where the problems have nowhere to appear.

## The tally, which is the point

As of the forensic record's count on 14 August, across 51 committed predictions and falsifiers:

| | |
|---|---|
| clean passes | **14** |
| failures | **22** |
| falsifiers fired | **7** |
| vacuous passes | **2** |
| never run | **3** |

Two more rounds ran after that count and neither improved it.

> [FIGURE 2. The tally as a single stacked bar, full width, passes in one colour and everything else in greys. The passing segment should be visibly the minority. No axis, no gridlines. One bar.]

Twenty-two failures is not an embarrassing number to publish. It is the only number that makes the rest of the series worth reading.

A project of this shape coming back with twenty-two passes would tell you something got adjusted. And you would be right.

The repository is 51 commits across ten working days. Not months. I said months once and got corrected, and the correction was fair, so I counted.

## What I am not claiming

Fix the ceiling now, so nothing later reads as a bait and switch.

**None of this tests whether Christianity is true.** The detector compares vocabularies across texts. The interlock study asks whether a document transmits reliably, which is a question about transmission and not about miracles.

The one study that touches the resurrection has a ceiling written into its pre-registration. The best available outcome is *this case is honestly built*. Never *it happened*. Once the facts are fixed, the inference is dominated by your prior on miracles, and no source check touches a prior.

**None of it tests Girard's mimetic psychology.** The copying, and the model becoming the rival, are never tested by anything here. Only the four stereotypes are measurable, and they are the last part of the theory rather than the interesting one.

**And a lexical instrument measures vocabulary.** It cannot tell that a dissenting word belongs to a person separating from a crowd rather than to a hymn. One text in the corpus scores the maximum on the dissent lexicon because it is a prayer full of the words *blameless* and *defend*. That warning stands over every result here.

## What the rest of these posts are

Eleven of them. Some run longer on purpose. The ones with a real finding get room to explain it, and the connective ones do not.

| # | what it does |
|---|---|
| 2 | Girard in the minimum. Only what you need to follow the instrument |
| **3** | the decision rule Girard wrote down, which nobody in this project had read |
| 4 | turning four sentences into code, and the choice between adding up and taking the smallest |
| 5 | the corpus, and why the sample is part of the claim |
| **6** | four broken control tests and the one mistake underneath all four |
| 7 | the arithmetic, all of it, from a rate to a power calculation |
| 8 | pre-registration, and why the timestamp proves less than you think |
| **9** | ten rounds, and the half of the instrument that never carried anything |
| 10 | the checks that could not fail, including three of my own |
| 11 | the other two instruments, and what the whole thing cost |

The four in bold are where the actual findings are. If you only read four, read those.

## How to check any of this without trusting me

The series claims everything is verifiable, so here is what that means in practice. Each of these takes a few minutes and needs nothing but the repository and something you already own.

**Count `king` in one page of the *Odyssey*.** Post 4 says one bucket is 44% a single word, and that a hospitality scene consequently outscores every tragedy in the corpus. You need the text and your eyes.

**Read the commit order.** Post 8 lays out which files exist in which commit and when. `git log` settles it, and it settles it against me as much as for me.

**Recompute one rate.** Hits divided by words, times a thousand. A calculator. If the number in the file disagrees with the number you get, that is a finding and it is yours.

**Rerun one scorer** and check whether the output matches the committed results file. This one requires Python and about a minute.

**Open a cited verse** and see whether it says what the compiler claimed it says. Post 11 reports that five allegations in a hostile docket misdescribe their own citations. Any Bible will do.

**Count the files in the corpus directory.** Post 5 is about what happens when nobody does.

>> **A claim nobody can check is a claim nobody should believe, and that includes every claim in this series.**

The reason to list these rather than assert the general principle is that the general principle is free and the list is not. Publishing a repository where the awkward things are findable costs something. Six of the eight most damaging findings in these eleven posts were found by somebody going and looking, and in every case that somebody was me, which is exactly the weakness in the arrangement.

## The one sentence the project turns on

It arrives in post 10. It is worth planting here, because it is the thing I would keep if everything else in this series turned out to be wrong.

>> **A check that cannot fail prints reassurance.**

I built several. Not through carelessness. Through the ordinary process of writing a control test, watching it pass, and moving on. Which is what everybody does, and which is the exact circumstance under which a broken control is invisible.

The project caught three of its own. Not by being clever. It caught them by printing the numbers next to the verdict, every time, so a verdict that disagreed with its own evidence had somewhere to be noticed.

Start with post 2 if you have never read Girard. Start with post 3 if you have.
