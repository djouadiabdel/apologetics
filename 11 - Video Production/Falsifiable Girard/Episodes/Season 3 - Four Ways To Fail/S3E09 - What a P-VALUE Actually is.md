---
season: 3
episode: 9
title: "What a P-VALUE Actually is"
words: 1787
minutes: 13.2
character_anchor: "A friend who says he can tell Coke from Pepsi"
clinical_anchor: "How often would chance alone produce this"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-3
---

> [!info] S3E09 · 1787 words · ~13.2 min · [[Season 3 - Four Ways To Fail — Index|season index]]
> **Generated from `Research/Season 3 — Four Ways To Fail.md`. Edits here are overwritten.**

# What a P-VALUE Actually is

[[S3E08 - The Noise Floor Nobody Computed|← The Noise Floor Nobody Computed]] · [[S3E10 - The One Number that Survived|The One Number that Survived →]]

---
## The stake

The series has quoted p-values for episodes without defining one, which is fixed
here from zero, with the detail most explanations skip: **what a p-value is
not**. If you have ever nodded at one without owning it, this is your episode.

## Why this episode is here

From the next episode onward this series quotes p-values constantly, and it has
never said what one is. That is the same failure as a methods section that says
"we tokenised the corpus."

So before the number that matters, the tool.

## Start with the wrong definition, because almost everybody has it

Ask people what a p-value is and you get one of two answers. Either it is the
probability that the result happened by chance, or it is the probability that the
claim is false.

It is neither of those. It is not a probability about your claim at all, and once
you see why, a lot of published science reads differently.

## What it actually is

A p-value is the probability of getting a result at least as extreme as the one
you got, **if nothing were going on.**

Everything hangs on that last clause. It is a conditional probability, and the
condition is the null. You are not measuring your hypothesis. You are measuring
**how surprised the null should be** to have produced what you saw.

That is a much weaker thing than people think, and it is still useful, and the gap
between those two sentences is where most misreadings live.

## The character anchor

**A friend who says he can tell Coke from Pepsi.**

You do not argue with him. You pour ten cups behind a screen and he calls nine
right.

Now ask the only question available to you. **If he were guessing, how often would
somebody get nine or more out of ten?** That is a question you can answer exactly,
without knowing anything about him, about taste, or about soft drinks, **because
it is a question about coin flips and not about your friend.**

The answer is about one time in a hundred. So you say: either he can do it, or
something unusual happened. **You have not measured his palate.** You have measured
how embarrassing his performance is for the theory that he is guessing, and that
turns out to be the only thing an experiment ever gives you.

**Notice what the test cannot do.** It cannot tell you he is a supertaster rather
than lucky, and it cannot tell you the effect is large: a man who is right 60% of
the time forever will also produce tiny p-values, given enough cups. **The
question is always about the guessing hypothesis and never about him.**

## Now build one, with no formula, using the actual case

Round 2 asked whether Girard's four word-lists separate tragedy from the control
group better than random word-lists would.

**Step one.** Measure the real thing. The buckets separate the two groups by 6.10
per thousand words. That number on its own means nothing, because you have
nothing to compare it against.

**Step two.** Build a fake version of the world where nothing is going on. Take
sixty-six words at random from the corpus, matched so they are about as common as
Girard's words are, so you are not comparing rare words with common ones. That
list has no theory behind it. Nobody chose it for meaning. Score it exactly the
same way.

**Step three.** Do that two thousand times, and write down the separation each
time. Now you have an entire distribution of what "nothing going on" looks like
for this corpus, this metric and these two groups. It comes out centred at about
minus 0.16, wandering roughly three either side.

So a meaningless list of words typically separates these groups by about zero.

**Step four.** Count how many of the two thousand fakes did as well as the real
one.

Eight. Eight out of two thousand. Which is where p equals 0.0045 comes from.

And notice what that sentence actually says. It is not an 8-in-2000 chance that
Girard is right. It is an 8-in-2000 chance that a **meaningless word list does
this well**, which is a completely different claim.

## The device: build the null in four steps

**Write the four steps on the board and fill the right-hand column as you go.**

| step | what you do | round 2's number |
|---|---|---|
| 1 | measure the real thing | separation of **6.10** |
| 2 | build one fake world where nothing is going on | 66 random frequency-matched words |
| 3 | do it two thousand times | fakes centre on **−0.16**, spread **2.95** |
| 4 | count how many fakes beat the real one | **8 of 2000** |

## The formula, now that the idea is already there

p equals the number of fakes at least as extreme, plus one, divided by the number
of fakes plus one.

The plus one on both sides is worth explaining rather than skipping. Without it,
if no fake ever beat you, you would report a p of zero, which claims infinite
evidence from two thousand tries. The correction makes the smallest reportable
value one in two thousand and one, which is honest about how much work you
actually did.

## The clinical anchor

You already use this every time you read a trial, whether or not anyone put it in
these words.

The p-value on a treatment effect is asking: if this drug did nothing at all, how
often would randomisation on its own have handed us a gap this big between the
two arms? Not "is the drug real." **How often would chance alone produce this.**

## The four things it is not, said one at a time

It is not the probability the hypothesis is false. It assumes the null is true
and reports on the data, which is the reverse direction.

It is not the probability the result was chance. It is the probability of data
this extreme **given** chance, and swapping those two around is the commonest
error in the sciences.

It is not a measure of how big the effect is. A tiny effect in a huge sample
gives a tiny p, which is why enormous studies report significant differences
nobody cares about.

And it is not a measure of how important the finding is. Which brings us to the
next episode, because p equals 0.0045 in this project means **persecution texts
contain persecution vocabulary**, and that is a clean, correct, and profoundly
unsurprising thing to have shown.

## Where 0.05 comes from, and it is not from mathematics

Every prediction in this project is judged against **p < 0.05**, and the number
appears so often that it starts to feel like a law. It is not one. It is a
convention, and it has an author.

**Ronald Fisher**, in a statistics textbook in 1925, remarked that one in twenty
was a convenient line for deciding whether a result was worth a second look. He
was describing a rule of thumb for his own work. He was not proposing a threshold
for a century of science, and he later wrote against using any fixed level at all.

> **There is nothing behind 0.05 except that it is a round fraction and somebody
> influential said it out loud.** One in twenty. It could as easily have been one
> in ten or one in a hundred, and in fields that care more, it is.

Two things follow, and both matter for reading every result in this series.

**First, p = 0.049 and p = 0.051 are the same result.** They differ by nothing.
Treating one as a finding and the other as a failure is an artifact of a line
drawn in 1925, which is why this project reports the actual p-value everywhere
rather than the word "significant".

**Second, a threshold only means anything if you fix it before you look.** The
number is arbitrary, and arbitrary is fine. **Arbitrary and chosen afterwards is
not**, because at that point you are picking the line that puts your result on the
right side of it.

## One-sided or two-sided, and this project is one-sided everywhere

There is a fork in every p-value that almost nobody says out loud, and it is
worth twenty seconds because it changes every number in this series by a factor
of two.

A **two-sided** test asks *is there a difference?* and treats a surprise in either
direction as a surprise. A **one-sided** test asks *is it bigger, in the direction
I named in advance?* and only counts the surprises going the way you predicted.

| | the question | a huge effect the wrong way |
|---|---|---|
| two-sided | is there a difference | **counts** |
| **one-sided** | is it bigger, as predicted | **returns nothing** |

**Every prediction in this project is directional.** Tragedy above control, Gospel
above myth, dissent nearer the violence. So every p-value in every round is
one-sided.

> **And a one-sided p-value is exactly half its two-sided equivalent on the same
> data.** Anybody who recomputes these numbers the ordinary way will get figures
> twice as large, and the pre-registrations do not say which they used.

Say it before a commenter does. The results here survive doubling, which is the
only reason it is safe to say plainly, and **that is a fact about these particular
numbers rather than a defence of the practice.**

The cost is real and it is why the direction must be fixed in advance. **You buy
sensitivity by agreeing not to notice being wrong backwards**, and Season 4
episode 5 contains a result that runs backwards, which is exactly the case a
one-sided test is blind to.

## And the thing that breaks p-values, which is coming later

If you make one prediction at a threshold of 0.05, you accept a one in twenty
chance of a false pass. If you make thirty predictions, you should expect about
one and a half false passes **even if nothing is true anywhere.**

This project made roughly fifty committed predictions and applied no correction for
that anywhere.

It matters less than it sounds, for a reason worth working out yourself before
Season 7 tells you. Here is the hint: think about what multiplicity inflates, and
then look at how many of this project's predictions passed.

## What would count against this episode

1. **The whole framework being the wrong one.** A serious body of opinion holds
   that p-values should be abandoned rather than explained, in favour of effect
   sizes and intervals. **This episode teaches the tool the project actually used**,
   and a viewer should know that teaching it is not the same as endorsing it.
2. **The permutation approach being unusual.** Most published p-values come from a
   formula with assumptions baked in. **The version built here, by shuffling two
   thousand times, assumes almost nothing** and is therefore easier to understand
   and harder to get wrong. That makes it a good teaching case and an unrepresentative
   one.

## Handing off

You have the tool. **Episode 9 is the one number in the project that survives**,
and the whole of its value depends on reading it with the definition above rather
than the definition everybody carries around.

## Questions

1. Write the definition of a p-value in your own words, with no formula, in one
   sentence. Then check it against the four things it is not.
2. One study reports p equals 0.049 and another reports 0.051. How different are
   they, really?
3. Fifty predictions, no correction. Work out why that might matter less here than
   in a normal study.

---

[[S3E08 - The Noise Floor Nobody Computed|← The Noise Floor Nobody Computed]] · [[S3E10 - The One Number that Survived|The One Number that Survived →]]
