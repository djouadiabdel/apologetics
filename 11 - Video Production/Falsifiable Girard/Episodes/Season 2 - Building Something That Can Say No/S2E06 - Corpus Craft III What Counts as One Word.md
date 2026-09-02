---
season: 2
episode: 6
title: "Corpus Craft III: What Counts as One Word"
words: 1061
minutes: 7.9
character_anchor: "Spinal Tap's Stonehenge"
clinical_anchor: "Units"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-2
---

> [!info] S2E06 · 1061 words · ~7.9 min · [[Season 2 - Building Something That Can Say No — Index|season index]]
> **Generated from `Research/Season 2 — Building Something That Can Say No.md`. Edits here are overwritten.**

# Corpus Craft III: What Counts as One Word

[[S2E05 - Corpus Craft II Is the Text the Text|← Corpus Craft II: Is the Text the Text]] · [[S2E07 - Corpus Craft IV The Sample is Part of the Claim|Corpus Craft IV: The Sample is Part of the Claim →]]

---
## The stake

Tokenisation sounds like plumbing, and it is where a threefold error lived. **How
you cut a text into countable pieces decides what your numbers mean**, and this
episode makes the decision slowly, out loud, with the wrong answer on the table
first.

## Collecting episode 5

The file is now the whole file. **This episode is about turning that file into
things you can count**, which sounds like the boring part and is where a threefold
error lived.

Start from what a computer actually receives. **It does not get words.** It gets
one long run of characters, and somebody has to write down a rule for where each
word begins and ends. That rule is called tokenisation, and every count in every
text-analysis result you have ever read was produced downstream of one.

## The clinical anchor

**Units.**

The most dangerous number in medicine is a **correct number in the wrong units.**
Nobody argues about the arithmetic. The arithmetic was fine. The measurement was
fine. The instrument was calibrated and the technician was competent, and the
number that came out is simply not the quantity anybody thought it was.

Notice what makes that class of error survive. **Nothing about it looks wrong.** A
value in the wrong units still arrives in a plausible range, still varies
sensibly, still responds to the things you would expect it to respond to. It fails
no check that operates on the number.

## The character anchor

**Spinal Tap's Stonehenge.**

The band asks for a Stonehenge monolith. Somebody sketches it on a napkin and
writes 18 inches where they meant 18 feet. **Every subsequent step is performed
correctly.** The drawing is measured accurately, the fabricator builds exactly
what was specified, the crew flies it in on cue.

An eighteen-inch monument descends onto the stage, and dwarves dance around it.

**Nobody in that chain did their job badly.** The units were wrong at the first
step and every competent operation afterwards carried the error faithfully to the
audience. That is tokenisation. It happens once, early, before anything anybody
would call analysis, and everything careful you do later is careful about the
wrong quantity.

## The device: one sentence, three tokenisers, three answers

Put this on screen. Take a line of Sophocles and count the word `king`.

```
  raw text:        "O king, the king is dead," said the king&rsquo;s herald.

  split on spaces:   king,  king  king&rsquo;s        ->  1 match
  strip punctuation: king   king  king s              ->  3 matches
  strip + decode:    king   king  king s              ->  3 matches, clean tokens
```

Walk the first row. Splitting on spaces is the obvious rule and the one everybody
writes first. It produces the token `king,` with the comma attached, and `king,`
is not the same string as `king`, so it does not match. **Two of the three kings
in that sentence are invisible to the count**, and nothing in the output says so.
You get the number 1, and 1 is a perfectly ordinary number.

> **Same sentence. Same word. Three different answers**, and none of the three is
> obviously wrong until you look.

**Nobody publishes this step.** Every paper says "we tokenised the corpus." **The
tokenisation is where the result was decided, and there is no section of any paper
where you can check it.**

## Three defects, each of which changed results

**HTML entities.** The downloaded pages contained **3,037 undecoded entities**,
the codes a web page uses for apostrophes and dashes. Each one became a junk
token: not a word, not punctuation, but a short run of letters that the tokeniser
counted as a word because it looks like one.

And here is why that is worse than it sounds. **Rates are hits divided by word
count.** The junk never matches any bucket, so it adds nothing to the numerator,
and it **inflates the denominator of every single score in the corpus.** Not one
text. All of them, in the same direction, quietly, downward.

**Punctuation.** Splitting on spaces leaves punctuation attached, so `king,` and
`king.` are not `king`. On Sophocles' *Oedipus* this undercounted the `marks`
bucket **threefold: 20 hits where the true figure was 62.**

> **A threefold error, on the highest-scoring bucket, of the highest-scoring text
> in the corpus, caused by a comma.**

Take the three qualifiers in that sentence one at a time, because their
combination is the point. *Oedipus* is the flagship text, the one the theory most
expects to score. `marks` is the bucket it scores on. And the error was in the
direction that hides the result rather than manufactures it. **The project's best
case was being suppressed by punctuation**, and had nobody looked, the write-up
would have reported a weaker finding and been believed.

**The fix in both cases is one line**, replacing a naive split with a rule that
extracts letter-runs and lowercases them. Which is exactly why it deserves an
episode: **the correction is trivial and the consequence was not.** There is no
relationship between how hard a defect is to fix and how much it moves your
results, and the intuition that the two go together is wrong in both directions.

## The one thing done right

The Bible text used in later rounds was recorded with its source URL **and its
sha256 checksum**, and the pre-registration says:

> "If a future download has a different checksum, **that is a changed sample and
> needs saying out loud.**"

A checksum is a short string computed from the file's contents, such that **any
change to the file at all produces a different string.** One character edited, one
paragraph restored by an editor, a different printing silently substituted by the
source site: all of it shows up, without anybody having to remember what the file
used to say.

**One line, and it makes the sample checkable forever.** Which sets up the sting:
**nothing else in the corpus has one.** The single text with the strongest
guarantee is the one that arrived last, and every text scored before it rests on
the assumption that the internet does not change.

## What would count against this

1. **The entity bug biasing all texts equally.** If it did, comparisons between
   texts survive. **Nobody has checked whether it was uniform**, and it would not
   be, because different sources had different entity rates.
2. **The tokeniser choice not mattering.** Easy to test: rerun with three
   tokenisers and compare. **Never done.**

## Handing off

The text is right and the tokens are right. **Episode 7 is about the moment
somebody nearly changed which texts were in the corpus, for entirely good
reasons, after seeing the results.**

## Questions

1. You have a corpus. **Write the five checks you run before computing anything.**
2. The entity bug inflated all denominators. **Does a uniform bias matter if you
   are comparing texts to each other?** Careful.
3. **Why does no methods section ever contain the tokeniser?**
4. Run the three-tokeniser test on any text you have. **How big is the spread?**

---

[[S2E05 - Corpus Craft II Is the Text the Text|← Corpus Craft II: Is the Text the Text]] · [[S2E07 - Corpus Craft IV The Sample is Part of the Claim|Corpus Craft IV: The Sample is Part of the Claim →]]
