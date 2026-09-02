---
season: 2
episode: 5
title: "Corpus Craft II: Is the Text the Text"
words: 1157
minutes: 8.6
character_anchor: "The cat in *The Matrix"
clinical_anchor: "A haemolysed sample"
status: draft
filmed: false
generated: true
tags:
  - falsifiable-girard
  - season-2
---

> [!info] S2E05 · 1157 words · ~8.6 min · [[Season 2 - Building Something That Can Say No — Index|season index]]
> **Generated from `Research/Season 2 — Building Something That Can Say No.md`. Edits here are overwritten.**

# Corpus Craft II: Is the Text the Text

[[S2E04 - Which Texts, and Why Those|← Which Texts, and Why Those]] · [[S2E06 - Corpus Craft III What Counts as One Word|Corpus Craft III: What Counts as One Word →]]

---
## The stake

The boring-sounding episode that caught a threefold error. **The file on your
disk is not always the text you chose**, and here it was wrong twice. The lesson
transfers to every dataset you will ever trust: check the artifact, not the
plan.

## Collecting episode 4

You have chosen which texts belong. **This episode asks whether the file on your
disk is the text you chose**, and in this project the answer was no. Twice.

## The clinical anchor, and use this one, it is the whole episode

**A haemolysed sample.**

The potassium comes back at 6.8. The number is real. The machine is calibrated.
The lab is competent. **And the patient does not have hyperkalaemia.**

Nothing about the analysis is wrong. **The specimen was wrong.** And the result
looks completely normal for a sick patient, **which is why people act on it.**

> **That is the shape of every corpus bug in this project**, and the shape is what
> makes them survivable.

## The character anchor

**The cat in *The Matrix*.**

A black cat walks past a doorway. A moment later the same cat walks past the same
doorway the same way. **Everyone in the room registers it and nobody stops**,
because that experience has a name and the name is déjà vu. It arrives filed under
"ordinary quirk" before anybody has examined it.

It was a glitch, and it was **the only glitch anyone got**, and the reason it went
past is not that it was subtle. It is that the world had already supplied a
category that absorbed it.

**That is what corpus bugs look like on screen.** Not an alarm. A slightly odd
thing that resembles the odd things you have taught yourself to ignore.

## The device: a bug that errors versus a bug that publishes

**Draw the distinction and keep it up.**

| | what happens | do you notice? |
|---|---|---|
| **loud failure** | the script crashes, the file is empty, the number is obviously absurd | **yes, immediately** |
| **quiet failure** | the script completes, the file has content, the number is unremarkable | **no. It goes into the results** |

> **Every bug that matters is the second kind**, because the first kind is fixed
> in the same afternoon it is created. **A bug that produces plausible output is
> not a bug you find. It is a bug you publish.**

And there is a selection effect underneath that which is worth stating as a
general law rather than as a remark about this project. **Your attention is
allocated by how loudly things fail.** Loud failures are removed on the day they
appear, so the population of surviving defects is not a random sample of the
defects you made. **It has been filtered for silence**, continuously, by your own
competence. The better you are at fixing what shouts, the more purely the
remainder consists of things that do not.

## Bug one: the play with its ending missing

`get_corpus2.py` downloaded pages from a Greek text archive. The archive splits
long pages and links the remainder as `CONTINUED`. **The fetcher never followed
the link.**

| text | as scored | actual | missing |
|---|---|---|---|
| Seneca, *Hercules Oetaeus* | 11,119 words | 20,621 | **46%** |

**And the missing half is not random.** The file broke off after one speech, so
Deianira's death, Hercules on the pyre and the apotheosis were **all absent**.
Hercules spoke exactly one line in the file. Two characters never appeared at all.

> **The scorer was reading a play with its sacrifice removed.** And the score came
> out mid-table, and **nothing flagged it.**

Stay on the coincidence for a second, because it is not really one. The instrument
exists to detect the residue of a sacrificial killing. **The half of the file that
went missing is the half containing the killing.** That is not bad luck: the
truncation happened at a page break partway through, and in a tragedy the death
comes late, so **any truncation of any tragedy removes the ending, and the ending
is where the instrument's entire subject lives.** A bug of this shape will damage
this project's measurements more than almost any other kind, and it presents as a
mid-table score.

Mid-table is the worst possible output. A zero would have been investigated. An
implausibly high score would have been investigated. **A perfectly ordinary number
is the one result nobody asks a question about.**

## And it was nearly missed twice more

The diagnostic that eventually caught it classified the string `CONTINUED` as a
**one-off speaker name** and dropped it into a list of ignored oddities.

> **That marker was in the very first line of diagnostic output, and it was read
> past twice.**

Say that out loud. The evidence was on screen, in the first line, and it did not
register, **because it looked like the kind of noise you learn to ignore.**

## Bug two, nineteen days later, same shape

A second study's control-group fetcher scraped a top-100 list by anchoring on a
string in the page. The site later began using that same string **first in a
navigation link**, so the scraper anchored 35,000 bytes too early and its stop
condition truncated the chunk **204 characters later**, before any list item.

```
old anchor  ->    0 list items,  silently empty control group
new anchor  ->  100 list items
```

**The study's own results file recorded the cause as "the fetch was killed partway
through."** That was the symptom. **The study ran for months without a control
group, and the reason was one string match.**

Notice that the misdiagnosis is itself the pattern repeating. A killed fetch is a
loud, ordinary, uninteresting explanation, and it fits the evidence, and it is
wrong. **The author reached for the noisy cause because a quiet cause does not
present itself as a cause at all.** The site had changed underneath the script,
which is the class of failure that never announces itself, because nothing on
either side of it broke.

## The recommendation nobody implemented

From the correction file, written in July after the first bug:

> "**No integrity check runs over the corpus.** This defect was found by accident,
> on the way to something else. **A truncated text is invisible to every metric
> currently computed.**"

**It is now two for two and still unbuilt.**

And say what that costs, because writing the recommendation is the part everybody
does. The first bug was found by accident. The second was found by accident. **The
project therefore has no estimate of how many it has not found**, because it has
never once looked on purpose. Every number in the next two seasons rests on files
that were checked only in the sense that nothing about them shouted.

## What would count against this

1. **A corpus check that would have caught both.** Design it and you have improved
   on the project. Word counts against a published edition would catch the first.
   Asserting an expected row count would catch the second.
2. **These being the only two.** Nobody knows. **No systematic check has ever been
   run**, so the honest answer to "how many more are in there" is that the
   question has not been asked.

## Handing off

The file is the right file. **Episode 6 asks what a word is**, which sounds
trivial and produced a threefold error on the highest-scoring text in the corpus.

## Questions

1. **Design the integrity check** that catches both bugs, in one paragraph.
2. Both produced plausible output rather than an error. **Coincidence, or a
   property of this kind of code?**
3. **How many corpus bugs are still in there?** Justify your number.
4. The marker was in the first line of output and was read past twice. **What
   does that tell you about reviewing your own diagnostics?**

---

[[S2E04 - Which Texts, and Why Those|← Which Texts, and Why Those]] · [[S2E06 - Corpus Craft III What Counts as One Word|Corpus Craft III: What Counts as One Word →]]
