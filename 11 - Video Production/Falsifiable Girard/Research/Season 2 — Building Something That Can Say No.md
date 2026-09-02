# Season 2 — Building Something That Can Say No

Research document. Thirteen episodes. Season 1 laid out a theory. This season
turns four sentences of it into code, and spends half its runtime on the part
nobody teaches: **getting the text right before you count anything.**

>! Two anchors per concept from here on. A **character** for the audience, and a
>! **clinical mechanism** for you, because that is how you actually hold a
>! concept and the audience does not have it. Use the character on camera. Use
>! the clinical one to know you have understood it.

## Packaging: title awareness levels


Cold-capable titles and stranger variants are listed. Everything not listed is a subscriber title, correct as is for the sequential audience.

| Ep | Title | Level | Note |
|---|---|---|---|
| 1 | The Accusation That Actually Matters | 3 | |
| 2 | Writing the Words Before the Texts Exist | 3 | |
| 3 | What a Timestamp Actually Proves | 2 | works cold |
| 4 | Which Texts, and Why Those | 3 | |
| 5 | Corpus Craft II: Is the Text the Text | 4 | |
| 6 | Corpus Craft III: What Counts as One Word | 4 | |
| 7 | Corpus Craft IV: The Sample is Part of the Claim | 4 | CHANNEL OPENER; cold variant: None of It Felt Like Cheating |
| 8 | Lexicon Craft I: Why There is No Stemming | 4 | |
| 9 | Lexicon Craft II: Deleting 960 Hits From Your Own Instrument | 3 | near-cold, the number carries it |
| 10 | Lexicon Craft III: Tagging So You Can Undo Yourself | 4 | |
| 11 | The First Number, and What it Throws Away | 3 | |
| 12 | Adding Up Versus All Four at Once | 4 | |
| 13 | The Hospitality Scene That Beat Every Tragedy But One | 2 | works cold |

---pagebreak---

@@ THE SKELETON

## What this season is doing

Season 1 ended with four word-lists that do not exist yet. This season builds
them, and the build has three separable problems that get confused constantly.

| # | the problem | the question | episodes |
|---|---|---|---|
| 1 | **the charge** | why does any of this need to be measurable at all | 1-3 |
| 2 | **the corpus** | which texts, and is the one on my disk the one I think it is | 4-7 |
| 3 | **the lexicon** | does this word mean what I am counting it as | 8-10 |
| 4 | **the metric** | what number do I compute, and what does it throw away | 11-13 |

## Which part is load-bearing

**Problem 2 is the one that decides everything and gets zero attention anywhere.**

Everyone argues about problem 4, the statistics. Nobody checks problem 2. And in
this project, problem 2 produced **two separate bugs**, both of which shipped
plausible output instead of errors, and one of which silently deleted an entire
control group from a study.

>> **A statistic computed on the wrong text is not a weak result. It is not a
>> result.** That is the sentence carrying this season.

## What is not decided yet at the end of this season

Nothing has been tested. Twelve episodes in, there is an instrument and no
result. That is deliberate and it should be said in episode 1, because the
temptation in every methods project is to look at an answer while still building
the thing that produces it.

---pagebreak---

@@ EPISODE 1 — THE ACCUSATION THAT ACTUALLY MATTERS

## The first thirty seconds

>% Here is a test. It comes back positive on every single patient.
>% It is never wrong. Not once.
>% A doctor could run it a thousand times and never be embarrassed by it.
>% Now ask what you would do differently if the machine were unplugged. Nothing.
>% It is the most reliable instrument in the building, and it is worthless.

## The stake

Season 1 was theory, and theory is safe. This episode is the day it stops being
safe: the four marks look like they confirm everything, which is exactly the
problem. **You will learn why a table with no losing row tells you nothing**, and
it is a tool you will use on every confident claim you ever meet. A promise for
the season: by the last episode you will have watched this instrument catch its
own false positive, and you will know exactly why the catch worked.

## Collecting Season 1

Eighteen episodes gave you a theory: copied desire, the model becoming the rival,
rivals converging, a crisis of distinctions, a community discharging it onto one
victim, and four marks left behind in the texts.

Season 1 episode 14 gave you five objections to it. **This season is about the
one that has an answer**, and about what answering it costs.

## The character

**Sherlock.**

He looks at a man's cuff and tells you where he has been, and he is right, and it
is the best thing in the episode. Now ask what makes him right. **The writer
composed the deduction first and then arranged a world in which it holds.** No
scene was ever filmed in which Sherlock reads the cuff and the man turns out to
have been somewhere else.

**The method is never wrong because nothing was ever allowed to go wrong**, and
the audience experiences that as brilliance, because from the inside there is no
difference between a method that always works and a method that is never tested.

**Sharper, and without the fiction: a cold reading.** *"You have been hurt by
someone close to you."* It cannot fail. Not because it is true, but because
**there is no state of the world in which the reader is caught out.**

That is the shape to hold on to. **Neither one is a lie.** Both are impressive.
Both are constructed so that no possible observation embarrasses them.

## The clinical anchor

**A test with 100% sensitivity and zero specificity.** It comes back positive in
every patient. It is never wrong.

Follow what that does to a clinic. A positive result changes nothing, because you
would have got one anyway. A negative result never happens, so it cannot reassure
anybody. **You would make exactly the same decisions if the machine were
unplugged**, and the only thing the test reliably produces is the feeling of
having checked.

**It is worthless**, and for exactly the reason above: **a test that cannot come
back negative carries no information.**

>> **That sentence carries thirteen episodes.** **The entire
>> season is one long attempt to build a test that can come back negative.**

And notice that the fault is not in the test's accuracy. It is right every single
time. **Being right about every case is compatible with telling you nothing**, and
that sentence is the whole reason this project exists.

## The device: build the confirmation table

Do not assert that Girardian reading is unfalsifiable. **Demonstrate it**, by
taking every possible observation and asking what a Girardian says about it.

| what you find in a text | what a Girardian reading says |
|---|---|
| the victim is guilty | that is the persecutors' account, exactly as predicted |
| the victim is innocent | that is the revelation breaking through |
| there is a crowd | the mob, exactly as predicted |
| there is no crowd | the mechanism has been concealed, **which is what myth does** |
| the violence is described | the residue is visible |
| there is no violence | the sacrifice has been ritualised and hidden |
| the text blames the victim | persecution text |
| the text pities the victim | partial revelation, tragedy sits here |

Go down the rows in pairs, because the pairing is the trick. **A crowd is
evidence.** No crowd is also evidence, because concealing the mechanism is what
myth is for. **Described violence is evidence.** Absent violence is also evidence,
because ritual hides it. **A guilty victim is evidence**, since that is the
persecutors' version. An innocent one is evidence too, since that is the
revelation getting through.

>> **Read the right-hand column down. There is no row where the theory loses.**

And be careful about the objection you are making, because the easy version of it
is wrong. **Every single row is defensible on its own.** Each is a reading a
serious person could hold, argued from Girard's actual text, and some of them are
excellent. **Nothing is refuted here at the level of the row.**

**The load-bearing sentence is about the column.** A theory that has an answer for
each observation individually, and an answer for the negation of each observation,
has told you in advance that it will survive whatever you find. **You learn its
verdict before you open the book**, and a verdict available before the evidence is
not a verdict.

That is the charge, and it is not a strawman. It is what serious critics say, and
the table is the reason it stings.

## And the defence people usually give makes it worse

Somebody objects, and the Girardian responds with **another reading.** A better
one, often a beautiful one, and frequently one that does genuinely illuminate the
text under discussion.

>> **Another reading is another positive result from a test that has never returned
>> a negative.** Adding a row to the table does not fix the table.

Worse, it strengthens the objection while feeling like an answer. **Each new
reading demonstrates the theory's reach**, and reach is precisely what is not in
question. Nobody doubts that Girardian reading can be applied to anything. That is
the complaint.

## What the only real answer looks like

**State what the theory forbids, in advance, in a form somebody else can check.**

Not "here is a text that fits." Anyone can produce that. Instead:

- **here are the texts I say will score high**
- **here are the texts I say will score low**
- **I wrote it down before I looked**
- **and if the low ones beat the high ones, I was wrong**

Every line there is doing separate work. The first two make the theory commit to a
partition of the world rather than to an interpretation of a passage. The third
removes the author's memory from the evidence, which matters because **nobody
knows what they expected once they have seen the answer**, and honesty does not
help with that. The fourth is what makes the whole arrangement a test rather than
a display, because it names the outcome the author is agreeing to lose on.

That last line is the entire design of the next six seasons. **The instrument
exists to make a row in that table come out empty.**

## The honest cost, and it is stated in episode 1 rather than discovered later

**Making the theory testable makes it smaller.**

The instrument can only reach the parts of Girard that leave countable residue,
which is Season 1 episodes 6 to 10 and nothing before them.

>> **Season 1 episodes 1 to 5 are the most interesting part of Girard and nothing
>> in this project tests any of it.** Say that here rather than letting a critic
>> say it in a comment.

**And there is a second cost, which is subtler and worth naming.**

A testable version of a claim is not the same claim. When you convert "no
dissenting voice is ever heard" into "a word-list fires at a higher rate in one
tier than another," you have built something **adjacent** to Girard's sentence,
not a translation of it.

Look at what slid. Girard's sentence is about **a voice**, a person speaking at a
particular moment, and it is absolute: never, not once, nowhere. The operational
version is about **a rate**, which is an average over a whole text, and it is
comparative: more here than there. **Neither the moment nor the absoluteness
survived the conversion**, and both of them were the claim.

And the danger is not that the conversion is careless. It is that the result still
passes as Girard's sentence in conversation, so a passing score gets reported as
support for something the test never touched.

>> Every season after this one is haunted by that gap, and **Season 7 episode 4 is
>> where the gap finally does visible damage.**

## What would count against this episode's own claim

Because a season about falsifiability should apply it to itself:

1. **A Girardian reading that names, in advance, a text it expects to fail** and
   then reports the failure. If that exists in the literature, the confirmation
   table above is unfair.
2. **A row in the table where the theory actually loses.** Find one.
3. **The instrument turning out to confirm everything too.** If the numbers also
   never come back negative, this project has reproduced the disease with
   arithmetic. **Watch for that. Season 3 is where it would show.**

## Handing off

The answer is to write down what you expect **before** you look.

**Episode 2 is the moment that happens**: four word-lists, sixty-six words,
written before a single text had been downloaded.

## Questions

1. **Name a claim you hold that could not come out negative.** Not a bad one. One
   you actually believe.
   ___
   ___
2. Add a row to the confirmation table from your own field. **What observation
   would embarrass a theory you like?**
   ___
   ___
3. Is "unfalsifiable" a fatal objection to a theory of **literature**, or only to
   a theory of **nature**?
   ___
   ___
4. If making a theory testable shrinks it, **when is that trade worth taking?**
   ___
   ___

---pagebreak---

@@ EPISODE 2 — WRITING THE WORDS BEFORE THE TEXTS EXIST

## The stake

One skill, stealable for anything: decide what you expect *before* you look.
**Nine words in the lexicon fire zero times, and that is the proof it was written
blind**, stronger than any timestamp. You will want this move the next time
someone shows you a perfect prediction.

## Collecting episode 1

Episode 1's confirmation table had no losing row. The only escape was to **write
down what you expect before you look.**

**This episode is that moment.**

## The character

**Ippo announcing the Dempsey Roll.** He tells you what is coming. Then it lands
or it does not, in front of everybody, and **there is no version where he
explains afterwards that something else was the plan.**

**The famous one: Babe Ruth's called shot.** People still argue about it a
century later for one reason: **calling the shot is the only thing that converts
a home run from an outcome into a claim.**

## The clinical anchor

**A pre-specified primary endpoint.** A trial that decides after unblinding which
outcome it was measuring has not measured anything. Everybody in medicine knows
this. **It is the same idea exactly.**

And notice what the rule is actually protecting against, because it is not fraud.
A trial with twenty outcomes and no primary will find something significant by
chance, and the investigator who reports it is not lying. **He is remembering,
sincerely, that this was the one he cared about**, and there is no way for him to
check that memory against anything. The endpoint is fixed in advance because
nobody's recollection of their own expectations survives seeing the answer.

## What was actually built

`make_scorers.py`. **Four word-buckets, 66 words total, written before a single
text had been downloaded.**

One bucket per stereotype from Season 1 episodes 6 to 9, which is the whole design.
**The theory says persecution leaves four kinds of trace, so the instrument has
four containers**, and each one holds the English words that would carry that
trace into a text.

The ordering is checkable in the repository: the corpus arrives in a later commit
than the lexicon.

| bucket | first draft |
|---|---|
| crisis | plague, pestilence, famine, drought, blight, barren, sterile, sickness, disease, death, twin, twins, double, doubles, likeness |
| crimes | incest, parricide, patricide, regicide, murder, betrayal, poison, poisoning, sacrilege, blasphemy, defilement, pollution, abomination, unclean, monstrous |
| marks | stranger, foreigner, alien, cripple, lame, blind, deformed, beggar, orphan, king, queen, tyrant, monster, scapegoat, accursed, marked |
| violence | crowd, mob, unanimous, stone, stoned, cast, expel, banish, exile, drive, driven, slay, slain, kill, blood, hunt, hound |

## The device: the dead words are the receipt

Here is the thing nobody notices, and it is the strongest evidence in the whole
project that the ordering was genuine.

**Nine of those 66 words never fire at all**, in roughly two hundred thousand
words of Greek and Roman literature:

`sterile` · `patricide` · `regicide` · `blasphemy` · `poisoning` · `cripple` ·
`orphan` · **`scapegoat`** · `stoned`

Now ask the question that turns this from a technical footnote into evidence:

>> **What would this list look like if the lexicon had been written AFTER reading
>> the texts?**

**It would have no dead words in it.** Nobody sits down with the corpus open,
notices that `regicide` never appears, and puts it in anyway. You would have
removed them, silently, without a moment's guilt, because removing a word that
does nothing is housekeeping. **The bucket would look tidier and better**, and
nothing anywhere would record that it had been tidied.

>> **A lexicon with nine dead words in it is a lexicon that was written blind. The
>> failures are the fingerprint.**

Understand what kind of argument that is, because it is not the usual kind. It is
not a claim about the author's character and it does not ask anybody to believe
him. **It points at a property of the artifact that would have been destroyed by
the behaviour being suspected.** Tidying leaves no trace; the absence of tidying
does. The nine words are evidence in the way an unpicked lock is evidence.

**And it survives the obvious counter-move**, which is worth stating rather than
hoping nobody thinks of it. Somebody could plant dead words deliberately, to
manufacture exactly this receipt. True, and to do it he would have to have
anticipated this argument before writing the lexicon, and then commit to carrying
useless words through every later analysis where they cost him coverage. **The
forgery is possible and it is not free**, which is the most any evidence of this
kind ever offers.

That is a much better argument than a commit timestamp, and it is available to
anyone who reads the file. **Season 2 episode 3 is about why the timestamp on its
own is weaker than people think.**

## And the fourth dead word is a finding, not a footnote

**Read the list again and stop on `scapegoat`.**

The word does not appear anywhere in the corpus. **The instrument built to detect
scapegoating cannot find the word "scapegoat,"** because that is not how these
texts talk.

And it goes further. `parricide`, `patricide` and `regicide` are the Latinate
labels for exactly the crimes Girard's theory is about, and **all three fire
zero times.**

>> **The theory names its objects with nouns. The literature describes them with
>> verbs.** "He slew his father." Not "he committed parricide."

And that is a difference in what the language is doing, not a difference in
spelling. **A noun is a category with the event already classified inside it.**
Parricide is a verdict; somebody has decided what the killing was and filed it.
The verb reports the killing and leaves the classification to the reader, which is
precisely what a narrative does and precisely what a theory does not.

So the instrument was built out of the vocabulary of judgement and pointed at
texts written in the vocabulary of event.

That gap is not a technicality about word choice. **It is a gap between the
vocabulary of a twentieth-century theorist and the vocabulary of the material he
is theorising about**, and repairing it is most of episode 9.

## What would count against this

1. **A dead word that is actually a coding error.** If `stoned` fails to fire
   because of a tokenisation bug rather than because the texts do not use it, the
   receipt is worthless. **This is a real risk and episode 6 is about exactly that
   class of bug.**
2. **The lexicon having been quietly edited after the fact.** The defence is not
   trust, it is the file history, and episode 3 examines how good that defence
   actually is.
3. **Sixty-six words being too few to measure anything.** A real objection. The
   repaired version has several hundred surface forms and episode 9 explains why
   that is not simply an improvement.

## Handing off

The lexicon was written first. **Episode 3 asks what "first" is worth**, and the
answer is less than you would like and more than it looks.

## Questions

1. Writing the lexicon before the corpus protects against **one specific
   failure.** Name it precisely.
   ___
   ___
2. **The dead words are the receipt.** Is that argument sound? What would make it
   unsound?
   ___
   ___
3. Nine dead words out of 66. **Bad lexicon, or an interesting finding about how
   texts talk?**
   ___
   ___
4. **What would you have put in the buckets?** Write your list now, before episode
   9 shows you the repaired one.
   ___
   ___

---pagebreak---

@@ EPISODE 3 — WHAT A TIMESTAMP ACTUALLY PROVES

## The stake

Everyone trusts timestamps. This episode shows what one actually certifies and
what it cannot, **and why the contents of a file can outrank its history**. After
this you will never look at a proof of date the same way, including your own.

## Collecting episode 2

Episode 2 found evidence the lexicon was written blind: **nine dead words that
nobody would have left in.**

But that is an argument from the *contents* of a file. The project's own claim is
about **order**, that the predictions were written before the scoring, and it
offers a different kind of proof for that. **This episode is about how good that
proof is, and the answer is uncomfortable.**

## The character

**A sealed envelope handed to a lawyer.**

The trope exists in a hundred films for one reason: **it converts a claim made
afterwards into a claim made before**, and every audience understands instantly
why that matters. Nobody needs the concept explained. The whole of pre-registration
is in a piece of stationery.

**And then the version that shows the crack, which is Borden's diary in *The
Prestige*.** A rival steals it, reads it, and reasons carefully from it, because a
diary is a dated record and a dated record is evidence. **It was written to be
stolen.** The dates are real, the entries are in order, the object is exactly what
it appears to be, and the reader is still being played, because the one thing the
artifact cannot record is the intention of the man holding the pen.

Hold both. **The envelope is why the procedure works. The diary is why this
episode exists.**

## The clinical anchor

**A trial registration number.** Not the protocol, the **registration**, which is
the thing whose entire value is that it was filed on a date and cannot be edited.

And notice what a registry is really doing, because it is not storage. The
protocol could sit in a drawer. **The registry's function is that it is held by
somebody with no stake in the result**, so the record is outside the reach of the
person the record is about.

## The rule the project follows

1. Write the predictions in a file.
2. **Commit it to git.**
3. Then run the scorer.
4. Report what happened, failures at the top.

**And the reason, in the project's own words**, which is the sentence to read
aloud:

>> "If the rule is written afterward, it gets shaped by what was found, and **the
>> shaping is invisible from the inside**. I would have written a definition that
>> produced the answer I already liked **and experienced that as being careful**."

That is the claim. Not that people lie. That **a mind adjusting a rule to fit a
result cannot feel itself doing it**, so the only defence is a record somebody
else can check.

## And now go and check it

**This is where the episode turns.**

| round | pre-registration | results | gap |
|---|---|---|---|
| 1 | 21 Jul 01:37 | 21 Jul 01:39 | **2 minutes** |
| 2 | 21 Jul 03:00 | 21 Jul 03:14 | **14 minutes** |
| 3 | 22 Jul 00:55 | 22 Jul 03:22 | 2 h 27 |
| NT count | 24 Jul 22:53 | 24 Jul 23:09 | **16 minutes** |
| Layer 2 | 25 Jul 00:56 | 25 Jul 00:58 | **2 minutes** |
| 4 | 11 Aug 02:07 | 11 Aug 02:17 | **10 minutes** |

**Median gap: fourteen minutes.** Every prediction and its result were committed
inside one continuous working session, often minutes apart.

Two minutes, twice. Sit with that number before defending it.

The defensive reading is available and it is genuinely true. The work was done in
long uninterrupted sittings. The scorer runs in seconds. And there is no reason a
careful person would pause between freezing a prediction and executing it.
**Everything about the gap is consistent with the procedure having been followed
exactly.**

It is also consistent with the opposite.

>> **The hostile reading, stated at full strength:** you had the numbers on screen
>> and committed the prediction file first. **Git proves which of two files hit the
>> disk first. It does not prove that no scoring happened before either.**

That is the whole weakness in one line. A commit records **when a file was
written down**, and the claim being made is about **when something was known**.
Those come apart, and nothing in a timestamp closes the distance. This is Borden's
diary again: an accurate, dated, unfalsified record that answers a question
adjacent to the one being asked.

**That objection is real and it is not answered anywhere in the project.** Say so
out loud, before anybody else gets to.

## The device: stop looking at WHEN and look at WHAT IS INSIDE

Here is the fix, and it is better than the thing it replaces.

Do not ask when the commit was made. **Ask what files it contains.** A commit is
not a timestamp with a note attached. It is a complete snapshot of the project at
a moment, so it records not only what was said but **what existed**.

| commit | contains | did the scorer exist yet? |
|---|---|---|
| pre-registration 3 | the prediction file, **and nothing else** | **no** |
| results 3 | results, **and `nulltest.py`**, and the output | **it arrives here** |
| pre-registration 4 | predictions, lexicon, tiers | **no scorer** |
| results 4 | results, **and `score_dissent.py`** | **it arrives here** |

>> For those rounds, git proves something **much stronger than the order of two
>> prose files**: the **program that produced the number did not exist** when the
>> prediction was frozen.
>>
>> You cannot fit a result to a prediction using software you have not written
>> yet.

Notice why that argument is stronger, and it is not because it is more rigorous
in style. **The timestamp defence asks you to accept a claim about a person's
behaviour**, which is unverifiable in principle. The manifest defence rests on an
absence in the artifact: the file is not there, and its absence is checkable by
anybody, forever, with no cooperation from the author. **A defence that depends on
what somebody did is replaced by a defence that depends on what a repository
contains.**

**That is the argument to make on camera. Not the timestamp. The manifest.**

## And the exception, which is the part that costs something

**Round 2's pre-registration commit contains the scorer and two files of
already-scored results.**

They are scores on a *different* corpus, which the pre-registration itself
discloses as a smoke test, and that disclosure is real and should be reported.
But apply the manifest test as stated and it fails: **the machinery was fully
operational and committed at the moment the predictions were frozen.** The gap to
results is fourteen minutes. Every protection this episode just built is
unavailable for that round.

>> **And round 2 is the round that produced the project's only surviving positive
>> number.** The least protected round is the one carrying the result.

Say that plainly. It is the single most damaging fact about the project's evidence
and it is better said by you. **And say it in this position**, in the middle of
the episode that constructs the defence, rather than in a footnote after the
audience has been persuaded.

## What would count against this

1. **A round where the scorer appears in the pre-registration commit and the
   result is claimed anyway.** That is round 2 and it is disclosed above.
2. **Files edited after commit without a record.** Git makes that visible; the
   defence is that anyone can check.
3. **The whole file-manifest argument failing** if someone wrote the scorer,
   deleted it, committed the prediction, and restored it. **Possible. Undetectable.
   And at that point you are not doing science, you are doing fraud**, which no
   procedure defends against.

## Handing off

Predictions are frozen and the order is as good as it is going to get.

**Episode 4 asks the question that comes before all of it and almost nobody
asks: which texts, and why those?**

## Questions

1. **Is the file-manifest defence enough?** What procedure would satisfy a reader
   who trusts nothing at all?
2. Two minutes. **Does that bother you more or less than you expected** before you
   saw the manifests?
3. Design a pre-registration procedure that **does not depend on trusting commit
   order.**
4. The least protected round carries the only result. **How much should that
   discount it?** Put a number on it.
---pagebreak---

@@ EPISODE 4 — WHICH TEXTS, AND WHY THOSE

## The stake

Before you count anything, somebody chose what counts. **Almost nobody who
analyses text ever states their selection rule out loud**, and this episode is
the stating of it. You will leave with the questions to ask of any corpus,
including ones you build yourself.

## Collecting episode 3

Episodes 2 and 3 secured **the instrument**: written blind, frozen, order
checkable.

**None of that helps if you point it at the wrong texts**, and almost nobody
asks how the texts were chosen. This episode is that question.

## The device: three circles, and the gap between them

Stay on this diagram for the whole episode. The gaps between the boxes are the subject.

```
   POPULATION      everything you want your claim to be about
   ┌──────────────────────────────────────────────┐
   │   SAMPLING FRAME    the list you could        │
   │   ┌──────────────────────────┐  actually      │
   │   │   SAMPLE                 │  draw from     │
   │   │   what you scored        │                │
   │   └──────────────────────────┘                │
   └──────────────────────────────────────────────┘
```

| | in this project |
|---|---|
| **population** | all Greek and Roman narrative literature |
| **sampling frame** | what two websites and Project Gutenberg happen to hold, in English translation |
| **sample** | 76 texts, later 98 |

>> **Every claim you make is about the population. Every number you have is about
>> the sample.** The frame is the gap between them, **and it is almost never
>> examined.**

Sampling gets discussed constantly and it is nearly always the inner boundary
being discussed: was the sample big enough, was it drawn at random, is it
representative of the frame. **All of that concerns the smaller circle.** The
outer boundary, between the frame and the population, is the one that decides
whether the question was ever answerable, and it does not appear in the
statistics at all, because **no procedure inside the frame can detect the shape of
the frame.**

## The clinical anchor, exact

**Eligibility criteria against the patients who actually walk through your door.**

The paper says "adults with heart failure." **The population** is adults with
heart failure. **The frame** is adults with heart failure who attend a tertiary
centre, speak the language, and consent. **The sample** is who enrolled.

Everyone knows the drug behaves differently outside the frame. **The abstract says
none of this.** And the reason it does not is worth naming without cynicism: the
frame is not a decision anybody made. It is the accumulated residue of where the
building is, who can get to it, who was referred, and who said yes. **Nobody chose
it, so nobody feels responsible for reporting it.**

## The character anchor

**Truman.**

Everything he believes about the world is correct about Seahaven. He is not
foolish, he is not incurious, and his reasoning from evidence is sound. **The
frame was built around him and it has no visible edge**, so every generalisation
he forms is confirmed by everything he can reach.

**Notice what would not have helped him.** More observations, better records, a
larger notebook, more rigour. All of it takes place inside the frame and all of it
comes back confirming. The only move that works is the one that ends the show,
which is sailing at the wall to find out where it is.

**A corpus is Seahaven.** Every statistic computed on it is honest, and it
describes what somebody digitised.

## What this project's frame actually was, biases stated out loud

| the frame is biased toward | consequence |
|---|---|
| texts old enough to be out of copyright | translations are 1900 to 1921, not modern |
| texts somebody bothered to digitise | the canonical and the famous |
| texts with an English translation at all | fragments and minor works vanish |
| **whatever one website's page structure let a script fetch** | **this produced two silent bugs** |

>> **Dwell on the last row.** The sampling frame was partly determined by
>> **HTML.** Not by scholarship. Not by a research design. **By how a website laid
>> out its pages, and by whether a script followed a link.**

## Who is actually in this corpus, since the names run through six seasons

Before the numbers, put the cast on screen once. **These names recur in every
season from here** and nothing later stops to say who they are.

| name | when | what it is |
|---|---|---|
| **Homer** | c. 8th c. BC | the *Iliad* and the *Odyssey*. Greek epic verse |
| **Euripides**, Sophocles, Aeschylus | 5th c. BC | Athenian tragedy, written for the stage |
| **Seneca** | c. AD 50 | Roman tragedy in Latin, on the same Greek stories |
| **Ovid** | AD 8 | the *Metamorphoses*, a Latin verse poem retelling myth as a chain of transformations |
| **Apollodorus** | 1st-2nd c. AD | the *Bibliotheca*, a bare prose catalogue of the whole of Greek myth |
| **Hyginus** | c. 2nd c. AD | the *Fabulae*, the same idea as Apollodorus and even more compressed |
| **Diodorus Siculus** | 1st c. BC | a universal history whose early books retell myth as history |
| **Statius**, Quintus Smyrnaeus, Apollonius | 1st-4th c. AD | later epic, filling gaps the earlier poems left |

Two distinctions inside that list matter for everything downstream.

**Verse against prose.** Homer, Euripides and Ovid are poets writing to be
performed or read for pleasure, with description, speeches and imagery. Apollodorus
and Hyginus are writing reference works, with none of that.

**That split is the one the project calls epic against mythography**, and it is
about to become one of the most load-bearing facts in the study.

Here is why. The instrument counts hits per thousand words. So it treats a page of
Hyginus and a page of Homer as the same kind of object. **They are not remotely
the same kind of object.** One is a summary with the description stripped out. The
other is a poem, and most of its words are description.

## The number that proves the frame is not neutral

The corpus contains **36 epic texts** and **8 mythography texts.**

That is not a statement about Greek literature. **It is a statement about how the
*Iliad* and the *Odyssey* were split into books by whoever digitised them, and how
Apollodorus was not.**

Follow the mechanism, because it is duller and worse than a bias. Two epics
arrived as one file per book, so two works became dozens of rows. One mythographer
arrived as a handful of files, so a comparably large body of material became a
handful of rows. **Nobody weighted anything. Nobody decided epic deserved more
say.** A genre's influence over every average in the project was set by an
upload convention.

>> **A genre's weight in the corpus is an artifact of file-splitting**, and every
>> genre mean in Season 3 inherits it. When mythography ties tragedy in Season 3
>> episode 7, remember that mythography is eight files and epic is thirty-six for
>> reasons that have nothing to do with antiquity.

And note which direction the exposure runs. **The instrument's precision is
unaffected**, so nothing about this shows up as noise or as a wide interval. The
numbers stay just as tight and are computed over a differently shaped world.

## The number that has four values, and this one is checkable live

Here is something the project never printed, and it is the best exercise in this
episode because the audience can verify it while watching.

**Ask how many texts are in the corpus.** The repository answers four different
ways, and three of the four are in the same results file.

| figure | where it appears |
|---|---|
| **76** | every file in `corpus2/`, and every row in the results table |
| **73** | never stated, and it is the one that is derivable |
| 71 | the pre-registration and the results file, called "scoreable" |
| 72 | the same results file, for the *Bacchae*'s rank and the saturation count |

**Now derive the 73.** The pre-registration declared a minimum text length of 800
words. Three texts in the table fall under it, at 613, 689 and 777 words. Take
them out of the 76 and you get **73**, exactly, and that is the number of texts
that the project's own declared rule permits.

>> **So the figure the rule produces is the one figure nobody ever wrote down**,
>> and two other numbers are used instead, in the same document, without either
>> being reconciled to it.

Be careful about what that does and does not show. **Nothing here is a
falsified result.** Nobody has been caught. The gap between 71 and 73 is two
texts and nobody knows which two, and the effect of any of this on the published
findings is almost certainly nothing.

**What it shows is that the sample was never counted.** The corpus was assembled,
a rule was written about it, and the rule and the pile were never once put next to
each other. Which is the identical failure to the missing integrity check from
episode 5, at the level of the sample instead of the file, and it is why the rule
in episode 7 has to be mechanical rather than remembered.

## The one thing done right, and it is worth the episode

The control group for one study was taken from **Project Gutenberg's own "Top 100
last 30 days" list**, applied mechanically **in the order the list gives them.**

The rule was fixed in advance: single-author prose fiction over 40,000 words,
nothing by an author already in the test set, no anthologies, no plays, no poetry.

>> **"The ordering is not mine."** That sentence is the whole design. A list
>> generated by strangers downloading books, applied in its own order, **cannot be
>> shaped by what I wanted to find.**

Both halves of that are load-bearing and the second is the one people drop.
Choosing an external list is easy. **Taking it in its own order is what removes
the discretion**, because a list you are allowed to walk down and pick from is
your list again, with a citation attached. The rule fixed in advance does the same
job for the exclusions: it decides what counts as eligible before anybody knows
which books are affected.

Compare that with choosing forty myths yourself, which is Season 1 episode 14's
objection 1, and which is the charge this entire project exists to answer.

## What would count against this

1. **The genre imbalance changing the results.** If reweighting epic to eight
   files moved the genre means, every Season 3 conclusion is about file-splitting.
   **Nobody has ever run that check.**
2. **The four corpus sizes having an innocent explanation each.** Likely, and it
   would not help. **A figure that needs an explanation per usage is not a figure
   the reader can check**, and the point of the episode is checkability rather than
   correctness.
2. **The translation window mattering.** Everything is 1900 to 1921 English.
   Season 3 episode 5 tests this once, on one paired play, and never again.
3. **The frame excluding the texts that would falsify.** If the mechanism shows up
   mainly in material nobody digitised, the corpus cannot see it, and no amount of
   statistics repairs that.

## Handing off

You have chosen the texts. **Episode 5 asks whether the text on your disk is the
text you think it is**, and the answer, twice, was no.

## Questions

1. **Write your own frame for "Greek literature."** What does it exclude, and does
   the exclusion favour any conclusion?
2. Epic is 36 of 76 texts because of file-splitting. **How would you fix that
   without choosing an answer?**
3. An externally generated list applied in its own order. **What is the strongest
   objection to that as a control?**
4. Which of the three circles do you think is doing the most damage here?
---pagebreak---

@@ EPISODE 5 — CORPUS CRAFT II: IS THE TEXT THE TEXT

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

>> **That is the shape of every corpus bug in this project**, and the shape is what
>> makes them survivable.

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

**Stay on this table. The second row is the episode.**

| | what happens | do you notice? |
|---|---|---|
| **loud failure** | the script crashes, the file is empty, the number is obviously absurd | **yes, immediately** |
| **quiet failure** | the script completes, the file has content, the number is unremarkable | **no. It goes into the results** |

>> **Every bug that matters is the second kind**, because the first kind is fixed
>> in the same afternoon it is created. **A bug that produces plausible output is
>> not a bug you find. It is a bug you publish.**

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

>> **The scorer was reading a play with its sacrifice removed.** And the score came
>> out mid-table, and **nothing flagged it.**

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

>> **That marker was in the very first line of diagnostic output, and it was read
>> past twice.**

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

>> "**No integrity check runs over the corpus.** This defect was found by accident,
>> on the way to something else. **A truncated text is invisible to every metric
>> currently computed.**"

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
---pagebreak---

@@ EPISODE 6 — CORPUS CRAFT III: WHAT COUNTS AS ONE WORD

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

Take a line of Sophocles and count the word `king`.

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

>> **Same sentence. Same word. Three different answers**, and none of the three is
>> obviously wrong until you look.

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

>> **A threefold error, on the highest-scoring bucket, of the highest-scoring text
>> in the corpus, caused by a comma.**

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

>> "If a future download has a different checksum, **that is a changed sample and
>> needs saying out loud.**"

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
---pagebreak---

@@ EPISODE 7 — CORPUS CRAFT IV: THE SAMPLE IS PART OF THE CLAIM

## The first thirty seconds

>% A man builds a test. He writes down what he expects, in public, before he looks.
>% Then he runs it and he loses.
>% Weeks later, fixing something unrelated, he finds a page his script never downloaded.
>% That page belongs to the side that beat him.
>% Fixing it turns his failure into a success. Every step of fixing it is correct.
>% Watch where this goes.

## The stake

This is the episode to send to a friend who likes detective stories, because it
needs no theory at all. A bug is found that would have turned a failed prediction
into a passing one, and every single step that hid it was defensible. **None of
it felt like cheating, which is exactly what makes it dangerous.

**This is the strongest episode in the season and probably in the series.** It is
also the one to open the whole channel on, because it needs no theory at all.

## Collecting episodes 5 and 6

The file is the whole file and the tokens are right. **Two bugs found, both of the
quiet kind**, both producing plausible output rather than an error.

This episode is a third thing of the same shape, and it is the worst one, because
**nothing about it is a bug at all.** Every step is correct.

## The situation, told as a story

**July.** A prediction has already failed and the failure is published. The
prediction was that mythography would score **lower** than tragedy, because the
theory says myth conceals the mechanism and tragedy half-exposes it. **It lost by
0.04**, which is nothing at all, and a loss by nothing is still a loss and was
reported as one.

Weeks later, while fixing the truncated-play bug from episode 5, the audit turns
up something else. **A page of a text that the fetcher had missed entirely.**
Real, legitimate, part of the corpus, simply never downloaded. Nobody left it out.
A script did not follow a link.

**And the missing page belongs to the genre that won.**

## The device: five true statements

**Take these one at a time and ask the audience to reject one.**

1. The page really is part of that text.
2. The fetcher really did have a bug, and the bug is now fixed.
3. Fixing bugs in your data pipeline is **what you are supposed to do.**
4. The corrected corpus is **more accurate** than the one you scored.
5. Therefore rescore with the corrected corpus.

>> **Every single statement is true. Every one is what a careful person does.**
>> **Which one do you reject?**

Now go along the row and try each rejection out loud, because the audience needs
to feel the trap close rather than be told about it.

**Reject 1** and you are claiming a page of Diodorus is not part of Diodorus.
**Reject 2** and you are pretending a bug you found and fixed was not a bug.
**Reject 3** and you have adopted the position that data pipelines should be left
broken, which nobody holds. **Reject 4** and you are saying the corpus missing a
page is the more accurate one, which is simply false.

Four of the five are unrejectable. **And here is what happens when you follow all
five:**

```
MYTHOGRAPHY  13.95  ->  13.67        vs   TRAGEDY 13.88

prediction:    FAIL  ->  PASS
```

**A failed prediction becomes a passing one.**

## And the sentence that is the whole episode

From the correction file, written by the person it happened to:

>> "It would have been **entirely defensible as a bug fix**, and it is exactly the
>> move pre-registration exists to make impossible."

And then:

>> **"None of it felt like cheating."**

**Sit on that.** Not "I was tempted and resisted." Not "I noticed what I was about
to do." **The step did not register as a temptation at all**, because every link
in the chain is a link you are supposed to follow, and the person following them
was doing maintenance rather than analysis.

That is why the usual defences are worthless here. Integrity does not help,
because nothing presented itself as a choice about integrity. Care does not help,
because the whole sequence **is** care. **Being the kind of person who fixes bugs
is precisely what walks you into it.**

>> **That is what Season 2 episode 3 meant by "the shaping is invisible from the
>> inside."** This is what it looks like when it happens.

## The character anchor

**Walter White, and specifically the early decisions rather than the late ones.**

There is no scene in which he chooses to become a criminal. **Every individual
step is a reasonable response to the situation the previous step created**, and
each one is the sensible move for a man in that position at that moment. Ask
somebody to point at the decision that did it and they cannot, because there
isn't one. There is a chain, and every link is locally defensible.

**The five statements are that chain, compressed into one afternoon.** The
difference is that in the show the audience can see where it goes, and in a
research project nobody can, because the destination is just a number that came
out slightly different.

## What was actually done

The page was fetched. **It is on the disk. It is excluded from the analysis.**

And it stays excluded, permanently, from this round. It is available **only to a
future round whose predictions are committed before it is scored.**

So the resolution is to reject statement 5, and only statement 5, and only for
this round. **Notice how strange that is.** You knowingly compute your headline
number on a corpus you have already established is missing a page, while holding
the corrected corpus on the same disk. **The instrument is deliberately kept less
accurate than it could be**, and it is the right call, and nothing about it feels
right while doing it.

**And a rule was written that had not existed before:**

>> **The sample is part of the registration, not just the instrument.**

Everyone knows you cannot change your hypothesis after seeing the data. **Far
fewer people know you cannot change your data either**, and this is why. The
lexicon was frozen, the metric was frozen, the predictions were frozen, and the
corpus was left as the one live variable in a system built entirely out of frozen
ones.

## The clinical anchor

**Post-hoc exclusion criteria.**

A trial where the eligibility rule is refined after the interim look. **Every
individual refinement is medically reasonable.** Each one has a paper behind it,
each was proposed by somebody competent for a stated clinical reason, and the
refined population is genuinely the one the drug is for.

And the trial is dead anyway, and everybody in the field knows it is dead, and
**nobody can point at the specific decision that killed it.** That is the
signature. A trial killed by one bad decision can be discussed. This kind is
killed by a sequence in which every element is defensible, so the argument about
it never reaches a conclusion and the result simply stops being cited.

## And now the uncomfortable follow-up, which belongs here and not in a later season

That rule was written in July. **Two weeks later the same project broke it.**

A minimum text length of 800 words had been declared, and had explicitly excluded
three short texts by name. The round-4 sample file **contains no length rule at
all**, and those three texts are back in.

| text | words | round 2 | round 4 |
|---|---|---|---|
| `hyginus_fabulae_2` | 613 | **excluded** | in |
| `hyginus_fabulae_3` | 689 | **excluded** | in |
| `hyginus_fabulae_4` | 777 | **excluded** | in |

Recomputed effect: the myth median moves 0.547 to 0.561, one counterexample count
goes 7 to 6. **No verdict changes.**

>> **And that is exactly the point.** The discipline is not "did it matter." It is
>> **"was it declared."** A rule that only binds when somebody is watching is not a
>> rule, it is a habit, and habits lapse in fourteen days.

Put the two halves of the episode next to each other, because together they say
something neither says alone. **In July the project refused a change that would
have helped it, at real cost, on principle.** In August the same project silently
dropped a rule it had written itself, in a way that happened to be harmless, and
nobody noticed for weeks.

The same person, the same repo, two weeks apart. **So the July refusal was not a
character trait**, and treating it as one is the mistake. It held because it
arrived as a visible decision with a written rule attached. The August lapse
happened because nothing arrived at all.

**Which is the refrain, in its most concrete form.** A rule that depends on your
remembering it is a check that cannot fail, and a check that cannot fail prints
reassurance. The length rule was in a document. It was not in the code.

## What would count against this

1. **The Diodorus exclusion being superstition.** A real argument exists: the page
   belongs, excluding it makes the corpus knowingly wrong, and pre-registration
   should not force you to publish a number you know is inaccurate. **Make that
   argument at full strength before rejecting it.**
2. **The length-rule lapse being harmless because nothing moved.** Also arguable.
   **Argue it, then notice that you can only say it moved nothing because somebody
   checked afterwards**, which is not available in advance.

## Handing off

The corpus is fixed, frozen, and its rules are written down.

**Episodes 8 to 10 turn to the other half: the word-lists**, and to the day
somebody nearly repaired one to make a failing prediction pass.

## Questions

1. **Which of the five statements do you reject?** You must reject one. Say which
   and why.
2. Is the Diodorus exclusion the right call, or superstition? **Argue both sides
   before answering.**
3. The length rule lapsed and changed nothing. **Better, worse, or neither?**
4. **Name a mechanism that would catch a lapsed rule.** Not "be more careful."
---pagebreak---

@@ EPISODE 8 — LEXICON CRAFT I: WHY THERE IS NO STEMMING

## The stake

Every text-analysis tutorial stems its words. This project refused, on purpose,
and the refusal is a lesson in **paying a cost you can name instead of borrowing
one you cannot**. You will recognise this trade everywhere once it is named.

## Collecting episode 7

The corpus is settled and its rules are written down. **Now the other half of the
instrument: the word-lists**, and the first decision is one every text-analysis
tutorial gets wrong.

## The temptation

Every tutorial says the same thing. **Reduce words to their stems**, so `murder`,
`murdered` and `murdering` all count as one concept.

And the reason it is recommended is a real reason. Without it you are counting
strings rather than ideas, and a text that says `murdering` three times looks
identical to a text that never mentions killing at all. Stemming is one line of
library code, it costs nothing, and it fixes that.

So understand what a stemmer actually does before deciding against it. **It chops
suffixes according to rules about letters.** It does not know what any word means.
It knows that a word ending in `-ing` is probably a form of the word without the
`-ing`, and it applies that everywhere, at speed, without hesitating.

**This project refused it entirely.** No prefix matching anywhere.

## The device: four stems, and what each one drags in

**Put the counts on screen.** These are from the actual corpus.

| you stem | you also catch | how many times |
|---|---|---|
| `tear-` | **"tears"**, which is weeping, not rending | **441** |
| `rend-` | "render", "rendered", "rendering" | 28 |
| `torn-` | **"tornado"** | |
| `stone-` | "stone" the material, against "stoned" the punishment | 211 |

Go down the rows, because each one fails differently.

**`rend-` catching "render"** is the innocent case. 28 hits, spread across the
corpus, meaning nothing in particular. That is noise, and noise you can live with.

**`torn-` catching "tornado"** is the funny case, and it is the one that gets used
in talks, and it is the least dangerous of the four. Nobody will ever be misled
by it, because the moment you look at a hit you can see it is absurd.

**`stone-` at 211** is where it stops being funny. The bucket wants stoning, the
execution. The corpus is full of stone the material, stone walls, stone steps,
stone thrown in anger with nobody dying. **The false hits are in the same semantic
neighbourhood as the true ones**, which means you cannot spot them by scanning a
list. You have to read every occurrence in context, which is the labour the
stemmer was supposed to save.

>> **And then read the first row slowly.** The bucket exists to catch a body being
>> torn apart by a crowd. **Stemming hands it four hundred and forty-one instances
>> of people crying.**

`tear` and `tears` are the same letters and opposite events. No rule about
suffixes can separate them, because there is nothing in the letters to separate.

## Why the first row is not just the biggest number

Those 441 hits do not scatter randomly. **They concentrate in exactly the texts
you are most interested in**, because tragedies are full of weeping.

**The error correlates with the hypothesis**, and that is the worst property an
error can have. Spell out why, because most people rank errors by size and size
is the wrong axis.

**A random error adds noise.** Noise makes a true effect harder to find, so it
works against you, and a result that survives it is stronger than it looks. **A
correlated error adds signal shaped like your hypothesis.** It works for you, it
grows as your effect grows, and it survives every check that asks how large the
effect is, because the effect really is large. It is simply not yours.

>> **A big random error is a problem you can see. A correlated error of any size
>> is a result you cannot tell from a discovery.**

## The clinical anchor

**Specificity.**

A screening test that flags everybody has perfect sensitivity and catches every
case in the population, and it is useless, because a positive result carries no
information. Nothing was learned that you did not know before running it.

**Stemming is a screening rule with excellent sensitivity and terrible
specificity**, applied to a question where the false positives cluster in the
signal. It is the version of the useless screen where the extra positives are not
even distributed evenly.

## The character anchor

**Drax.**

He hears every word correctly and takes it entirely on the surface. Nothing goes
over his head; his reflexes are too fast, he would catch it. The failure is not
inattention and it is not stupidity, because **his processing of the form is
perfect.** He has no model of what the form is for.

**A stemmer is Drax.** Letters go in, the suffix rule applies, and the meaning was
never consulted at any point. It will do this a hundred thousand times without
tiring, without doubting, and without once producing the hesitation that would
tell you it had gone wrong.

## What was done instead

**Every concept lists its surface forms explicitly.** So `tear_apart` is exactly
`tore`, `torn`, `tear`, `tearing`, and nothing else. Written out by hand.

The cost is that adding a concept means enumerating it, and the project's own
code comment says:

>> "Explicit lists mean **every match is auditable.** The cost is that adding a
>> concept means writing out its forms; **that cost is the point.**"

**Read the last clause again**, because it is the sentence the episode exists for.
The effort is not a regrettable side effect that a better tool would remove. **The
effort is what forces every form to pass through a decision**, and a decision
leaves a record that somebody else can disagree with.

## The trade, stated honestly, because explicit lists are not simply better

| | explicit lists | stemming |
|---|---|---|
| false positives | **few**, and each one traceable | many, and invisible |
| false negatives | **many.** Any form you forgot is silently missed | few |
| auditable | **yes.** Open the file and read it | no |
| effort | high | one line |

Look at the second row before congratulating anybody. **Explicit lists are worse
on false negatives, and not slightly.** Every form nobody thought of is missed in
silence, and the misses do not announce themselves the way a "tornado" hit does.
The instrument is under-counting all the time and nothing on the screen says so.

So the honest comparison is not accuracy against accuracy.

>> **Explicit lists trade a loud, checkable error for a quiet, uncheckable one.**
>> They are not more accurate. **They are more inspectable**, and in a project
>> whose entire defence is "go and check," that is the right trade **and it should
>> be presented as a trade rather than as a virtue.**

And notice which way that cuts against the project's own interests. The choice
that makes the instrument inspectable is the choice that makes it **miss more**,
so the discipline here is paid for in results, not in praise.

## What would count against this

1. **A form the lists miss that carries real signal.** Certain. **The question is
   whether the misses correlate with the hypothesis**, and nobody has checked.
2. **Stemming giving the same answer.** Testable in an afternoon: rerun with a
   stemmer and compare. **Never done.**
3. **A modern language model solving it.** It would fix the coverage problem and
   **introduce an unauditable one**, which is a different trade, not a free win.

## Handing off

The lists are explicit. **Episode 9 is the day somebody went through them
deleting things**, and the day a reasonable fix was refused.

## Questions

1. **Which error would you rather have**, the loud checkable one or the quiet
   uncheckable one? Does it depend on the claim?
2. `tears` and `tearing` are one string family and opposite meanings. **How many
   other pairs like that are in English?**
3. The 441 false hits concentrate in tragedies. **Why is a correlated error worse
   than a random one?**
4. **Would a language model solve this?** What new problem does it introduce?
---pagebreak---

@@ EPISODE 9 — LEXICON CRAFT II: DELETING 960 HITS FROM YOUR OWN INSTRUMENT

## The stake

The instrument's author deleted 960 of his own hits after seeing a failure. Is
that repair, or cheating? **This episode walks the exact line between the two**,
and the answer is not the loose one you expect.

## Collecting episode 8

The lists are explicit and hand-written, which is the choice episode 8 defended.
Now collect the cost of that choice. **A hand-written list means one person chose
every single word in it**, and that person is not neutral. He built the instrument
because he expects it to find something.

Every word he adds is a word he thinks belongs. Every word he leaves out is a word
he judged did not. There is no mechanism anywhere in the procedure that pushes
back on him.

**This episode is him going through it deleting.**

## What came out, with counts

| removed | hits it was contributing | why |
|---|---|---|
| bare `stone`, `stones` | **211** | nearly all the material. A stone wall, a stone tomb |
| bare `cast`, `drive`, `driven` | **749 combined** | "cast a glance", "driven by the wind" |
| `tears`, `tearful` | **462** | weeping |
| `render`, `rendered` | 28 | not rending |
| `ravishing` | | almost always "ravishing beauty" in this corpus |

Read the second row, because it is the largest and the least dramatic. **749 hits
from three ordinary English verbs.** Not exotic words, not mistakes anybody would
laugh at. `cast` and `drive` are simply common, and common words accumulate
enormous counts in a corpus of this size while meaning nothing relevant on almost
every occasion.

**Roughly 960 hits deleted from an instrument whose author wanted the numbers to
go up.** Every single removal lowers every single score, in every text, including
the ones he most wanted to score high.

>> **That is the episode's evidence**, and it is a kind that cannot be faked. You
>> can claim you were careful. **You cannot claim you deleted 960 hits from your
>> own case unless the file shows it.**

And notice why the direction is what carries it. An author tuning an instrument
towards his hypothesis **adds** vocabulary that fires in the texts he wants to
win. That is the natural motion, it costs nothing, and it leaves a file that looks
exactly like a thorough one. **These 960 are the opposite motion**, and the
opposite motion is expensive in the only currency the project cares about.

## The craftsmanship, which is the interesting part

`cast` and `drive` did not simply go. **Girard's stereotype is expulsion, and
English builds expulsion with particles.**

So they came back as phrases: `cast out`, `cast forth`, `cast down`, `drive out`,
`drove out`, `driven from`, `thrust out`, `hunted out`.

>> **The bare verb is noise. The verb plus its particle is the concept.** That is
>> a claim about **English**, not about Girard, and claims like it decide results
>> far more often than anybody admits.

Sit with that for a second, because it is a whole category of hidden decision. The
pre-registration froze a theory of persecution. **It did not freeze a theory of
English**, and one was needed anyway, and one got supplied on the spot by whoever
happened to be editing the file. Nobody pre-registers their linguistics. The
grammar you assume is invisible in a way the theory you announce is not.

## The device: the refusal, and why it is not a statistical decision

**Here is the situation.** A prediction has failed. Specifically, **Girard's
single most important example scored zero** on the crimes bucket, because Ovid
describes the killing as **tearing and rending** while the bucket contained
`murder`, `parricide`, `pollution`.

**The obvious fix, and it is written in the project's own next-steps list: add the
tearing vocabulary to the crimes bucket.**

It would work. It would fix the failure. It is a coverage gap, coverage gaps are
meant to be fixed, and this one is real: the bucket genuinely does not contain the
words Ovid genuinely uses. **Nothing about that repair is dishonest on its face**,
which is exactly the problem, because nothing about the repairs that ruin projects
ever is.

**It was refused. And the reason is not statistical.**

>> "In Girard the crime stereotype is **what the victim is accused of**; the
>> tearing is **what the mob does.** Tearing belongs in violence. **Putting it in
>> crimes would have corrupted the bucket to pass a test.**"

The vocabulary went into the **violence** bucket, where it belongs, **and where it
does not help the failed prediction at all.**

So look at what actually distinguished the two options. Both are the same edit:
take the tearing words, put them in a bucket. **The words are identical, the
labour is identical, and the only difference is the destination.** One repair
fixes a coverage gap. The other manufactures a pass. There is no test on the
words themselves that separates them, and there is no number anywhere in the
project that could have decided it.

>> **The instrument was one line of reasoning away from being repaired to make its
>> own failing example pass, and what stopped it was a definitional distinction
>> from Season 1 episode 7**, not a number.

**That is why Season 1 says that distinction twice, in episode 7 and again in
episode 9.** A rule written
in advance can refuse you. The same rule, articulated on the day it is needed,
refuses nothing, because a person under pressure to pass will articulate whichever
version of the rule lets him pass and will believe it while doing so.

## The clinical anchor

**Moving a patient's diagnosis to make the pathway work.**

Everybody knows what that is. Everybody knows how reasonable it feels at the time,
and that the reasoning offered for it is usually correct as far as it goes: the
patient really does have that feature, the pathway really is the one that will
help. **The reclassification is defensible in every individual case and the audit
still has to catch it**, and the audit only can if somebody wrote down what the
categories meant **before** the patient arrived.

## The character anchor

**The two fake rules in *Death Note*.**

Light is the prime suspect, and the evidence against him is going to hold. So he
writes two extra rules into the notebook itself, in the same hand as the real
ones, on the same pages, saying things that clear him. The investigation then
reads the rulebook, reasons impeccably from it, and reasons its way to the wrong
man.

**The trick works for one reason only.** The notebook carries no record of when
any rule was written. There is nothing in the object to distinguish a rule that
was always there from a rule added by the person the rule exonerates.

**A lexicon is a rulebook.** The tearing repair would have been a rule added to
clear the suspect, in the same hand, on the same page, and every analysis
downstream would have reasoned correctly from it.

## What would count against this

1. **The tearing vocabulary genuinely belonging in crimes.** Argue it: the mob
   believes it is punishing, so its action is an accusation enacted. **It is not a
   stupid argument.** The counter is that Girard's own text separates them.
2. **The 960 deletions being over-correction.** If `stone` sometimes really is the
   punishment, deleting it costs real signal. **Nobody measured how much.**
3. **Deletion being a form of tuning too, and this is the sharpest version of the
   objection.** Removing words that fire mostly in your controls raises the
   contrast exactly as effectively as adding words that fire in your targets, and
   it looks like restraint while doing it. **Whether these 960 hits fell evenly
   across the tiers or landed disproportionately on the control texts was never
   measured**, and the direction-of-sacrifice argument above quietly assumes they
   fell evenly.

## Handing off

The lexicon was revised **after** seeing a failure. **Episode 10 is about the
three characters that make that survivable.**

## Questions

1. The tearing vocabulary would have fixed the failure. The category rule said no.
   **Which authority should win?**
2. **Deleting 960 hits lowers your own scores. What makes someone do that?**
3. "Bare verb is noise, verb plus particle is the concept." **Fact about English
   or convenient rule?** How would you check?
4. Argue the case **for** putting tearing in crimes, at full strength.
5. The right fix and the cheating fix were the same words in different buckets.
   **Name a decision in your own field with that shape**, where nothing in the
   action distinguishes the two and only a prior rule does.
---pagebreak---

@@ EPISODE 10 — LEXICON CRAFT III: TAGGING SO YOU CAN UNDO YOURSELF

## The stake

A small technical choice that buys the ability to undo yourself. **Tags are how
you make your own revisions visible instead of shameful**, and the habit costs
minutes and saves entire arguments.

## Collecting episode 9

Episode 9 revised the lexicon, and it revised it **after seeing a failure.**

State the problem precisely, because the loose version of it is wrong. The loose
version says that revising an instrument after seeing results is cheating. That
would forbid every bug fix ever made, and no instrument in any field would
survive contact with its first real data. Episode 9's changes were made for good
reasons and this episode does not take them back.

The precise version is that **two different kinds of change were made in the same
edit**, and afterwards nobody could tell them apart.

>> Did the numbers improve because **bugs were fixed**, or because **new words
>> were added that happened to help?**

Those are not two degrees of the same thing. **A bug fix says the instrument was
failing to do what it always claimed.** The theory is untouched. **Adding a
concept says the instrument now claims something different.** What is being
tested has changed, and any comparison to a result from before the edit is a
comparison between two instruments.

And a reader looking at the revised lexicon sees one file, one date, one list of
words, with nothing on the page indicating which line came from which motive.

**That is not a flaw in the results. It is a hole in the record**, and holes in
the record cannot be repaired by argument afterwards, because there is nothing
left to argue from.

## The device: three characters that make the edit reversible

Every entry in the repaired lexicon carries a tag.

| tag | means | is it a theory change? |
|---|---|---|
| `v1` | in the original pre-corpus lexicon, unchanged | no |
| `inf` | an inflection of a `v1` word. **A matching bug fix** | **no. Adds no concept** |
| `v2` | a genuinely **new concept** added in the revision | **yes** |

Take them one at a time, because the middle row is the one doing the work.

**`v1` is the frozen state.** Whatever was written in episode 2, before any text
had been scored, before anybody knew what would happen.

**`inf` is an inflection of something already in `v1`.** `murder` was in the
original list and the matcher was failing to catch `murdered` and `murdering`.
Adding those forms adds no concept whatsoever. **The instrument always intended to
catch that word and was simply failing to**, which is the definition of a bug
rather than a revision.

**`v2` is a concept that was not there.** Something the pre-corpus lexicon did not
contain and would never have caught however perfect the matching had been.

And then the part that turns a label into a check. **The scorer takes a flag,
`--no-new`, which drops everything tagged `v2`.**

## Why a tag is not a changelog

Most projects handle this with a note. We revised the lexicon on such a date, here
is what we changed and why. That note is prose, and a reader has to trust it, then
reconstruct the old instrument in their head, then take on faith that the
reconstruction matches what the code actually did.

**The tag is executable.** Any result in the project can be recomputed as if the
new concepts had never been added, by anybody, without asking permission and
without the author's cooperation.

>> A changelog is a **claim** of separability. A flag **is** separability. The
>> point is not that the author was honest about the revision. **The point is that
>> his honesty stopped being load-bearing.**

And put it against the refrain. A promise not to have tuned the instrument is a
check that cannot fail, so it prints reassurance and nothing else. **`--no-new` can
fail.** Run it, and if the results collapse without the new concepts, the project
has been told something it did not want to hear, in public, by its own code.

## The clinical anchor

**A protocol amendment log.**

Amendments are not forbidden. Trials get amended constantly and for excellent
reasons. **The requirement is that each one is dated and separable**, so a reader
can reconstruct what the trial looked like before it.

Which is why the failure mode here is worse than it sounds. **A trial with
undocumented amendments is not a trial with a flaw. It is a trial you cannot
read.** A flaw you can weigh. An unreadable record leaves you with a number and no
way to find out what produced it.

## The character anchor

**Leonard in *Memento*.** He cannot form new memories, so he keeps his findings
on polaroids and tattoos, which is a perfectly sensible instrument for a man in
his situation.

**And it has no provenance tags.** Nothing on any note records who he was when he
wrote it, or what he had just been told, or which notes were written before which.
So he cannot distinguish a fact he established from a fact somebody fed him, and
the record he built to protect himself becomes the mechanism by which he is
steered. **He is not lying and he is not careless.** He is unauditable, including
to himself, and that turns out to be enough.

## And here is what the tags revealed, which is the reason they earn an episode

The v1 headline finding had been: **"each bucket is dominated by one generic
word."** It was the project's first real observation about its own instrument, and
it mattered, because a bucket that is mostly one word is not measuring a concept.
It is measuring a word, and reporting the result under the concept's name.

Then the matching bug was fixed, and the tags let somebody ask what that finding
looked like without it.

| bucket | top word's share, v1 | after the fix |
|---|---|---|
| crisis | 68% | 60% |
| marks | 54% | 44% |
| **violence** | **36%** | **21%** |
| **crimes** | **43%** | **12%** |

>> **Two of the four buckets stopped being dominated by one word once the matching
>> was fixed.** Crimes went from 43% to 12%.

The mechanism is worth spelling out, because it explains the direction of every
row. The old matcher caught `murder` **138 times out of 297 real occurrences.**
The forms it missed were the inflected ones. So the base form was the only form
being counted reliably, and of course it dominated the bucket. **The dominance was
a fact about the matcher, not a fact about the corpus.**

>> **So half of the project's own first major finding was a bug in its own code**,
>> and the tags are the only reason anyone could tell.

Then look at which half survived. **Crisis is still 60% `death` and `marks` is
still 44% `king`.** So "dominated by one generic word" is not a property of the
method and never was. It is a per-bucket fact, true of two buckets and false of
two, which is a worse outcome than a clean survival or a clean death because it
gives you no rule to carry forward.

**And the surviving 44% is the load-bearing one.** It is the number Season 1
episode 8 is built on, and the one Season 4 episode 17 tests by deleting the word and
re-running everything.

**Without the tags, none of that is detectable.** There would be no correction to
announce. You would simply have a better lexicon, and a claim that stopped being
repeated, and nobody would ever have said a false thing out loud.

## What would count against this

1. **`inf` not really being "no new concept."** Argue it: inflections smuggle in
   meaning. `murdering` is not `murder`, it is ongoing, and a bucket that gains
   the progressive forms may be catching a different aspect of the event. **A real
   objection and the project does not address it.**
2. **The tags being applied inconsistently.** Checkable by reading the file, which
   is the point of putting them there.
3. **The tags being assigned by the same person making the edit.** Nobody
   independent decided whether a given form was an inflection or a smuggled
   concept, so the separation is only as good as one author's judgement at one
   sitting. **The check is executable and the classification behind it is not.**

## Handing off

The instrument is built. **Episode 11 is the first number it produces**, and the
one property of that number causes every major failure in the next two seasons.

## Questions

1. **Without tags, how would you ever separate the two effects?**
2. Half the v1 finding was an artifact of the code. **What in your own work is a
   property of your tools rather than your subject?**
3. **Is `inf` really no new concept?** Argue that inflections smuggle meaning.
4. Two buckets kept their dominant word and two lost it. **What, if anything, are
   you entitled to conclude from a finding that holds in half your cases?**
---pagebreak---

@@ EPISODE 11 — THE FIRST NUMBER, AND WHAT IT THROWS AWAY

## The stake

The first real number of the project arrives, and with it the first honest loss:
**counting words throws away their order**, and what that costs is not an
abstraction. You will feel what a measurement gives up in the moment it is made.

## Collecting episode 10

The corpus is right, the tokens are right, the lexicon is written, debugged,
de-noised and tagged.

**Now you count. And the counting has one property that costs the project two
entire seasons.**

## The metric

$$ r(text) = 1000 × hits / total words $$

Hits per thousand words. That is the whole thing.

And the denominator is not decoration. A raw count is worthless across texts of
different lengths, because a long text contains more of everything, including
whatever you are looking for. Dividing by length is the minimum required to make
two texts comparable at all, and every field that counts things arrived at the
same fix independently.

## The clinical anchor, exact

**Prevalence.** Cases divided by population.

You already know why the denominator matters and why raw counts mislead: **a
bigger hospital has more infections and is not dirtier.** Same idea, no
translation needed.

**And the character version: a batting average.** Everybody accepts instantly that
you divide by opportunity, and nobody has ever needed the concept explained.

So the rate is the right instinct, correctly applied, and this episode is not
about a mistake. **It is about what the correct instinct costs.**

## The device: shuffle the book

**Do this on camera and make it physical.**

Take the *Bacchae*. Seventeen thousand words. Cut it into individual words. Put
them in a bag. Shake the bag. Pour them out in whatever order they come.

**Now score it.**

>> **The number is identical. To the last decimal place.**

Not close. Not approximately. **Identical**, and it is worth being clear that this
is not a limitation of the implementation, because it follows from the arithmetic
with no room for anything else. The numerator counts hits, and shuffling does not
create or destroy a word. The denominator counts words, and shuffling does not
create or destroy those either. **Both terms are functions of which words are
present and of nothing else.**

The rate cannot tell the difference between Euripides and a bag of the same words.

## Why that single fact matters more than anything else in this season

**One sentence, and it holds for two seasons:**

>> **A rate treats a text as a bag of words.** So it can never test any claim about
>> **where** something happens, **when** it happens, or **what it happens near.**

Take a moment on what is inside "order," because it is easy to hear as a small
thing. Order is adjacency, sequence, scene, and episode. It is what happens next,
and what happens to whom, and what one passage does to the passage after it.
**Order is the whole of narrative**, and a rate discards all of it in a single
division.

And now recall what the theory actually claims. **Season 1 episode 10**: the four
stereotypes converge **on one passage**, because one event produced all four.

>> **Girard's claim is about a moment. A rate cannot represent a moment.** It
>> cannot represent anything happening anywhere.

**That mismatch is the cause of every major failure in Seasons 3 and 4.** Not a
bug, not a bad word-list, not too small a corpus. **The instrument and the claim
are about different kinds of thing**, and it takes eight rounds and four
instruments to fully absorb it.

Say the consequence out loud, because it is the part people resist. **No amount of
additional data repairs this.** A hundred more texts, a cleaner corpus, a better
lexicon, a more sophisticated test: every one of those improves the precision of a
quantity that does not contain the claim. **You can measure a bag of words as
accurately as you like and still never have measured a moment.**

## The second thing it discards, which is subtler

**A rate rewards density of event.** A text where every word is plot carries more
hits per word than a text with description and lyric in it, and the difference has
nothing to do with persecution. It is a fact about how the text was written.

Measured later: mythography runs **28.65 neutral event-words per thousand** against
21 to 23 for everything else. **The densest narrative prose in the corpus**, and
the reason is structural rather than accidental. Apollodorus is a handbook. He
records what happened and drops everything a poet would put around it, so a far
higher proportion of his words are doing narrative work.

The problem is that the denominator counts all words equally while the numerator
only ever fires on event vocabulary. **Strip the lyric out of a text and its rate
rises without a single new event being described.**

And in Season 3 episode 7 mythography **ties tragedy**, which nobody predicted, and
which Season 1 episode 17 offered two readings of.

## And what a rate is genuinely good for, because this episode is not an attack

Say this before the objections, or the audience will conclude the metric is
worthless and that is not the finding.

**A rate is the correct instrument for any claim about how much.** How much
persecution vocabulary does this genre carry. Does mythography carry more than
tragedy. Is this text unusual for its kind. **Every one of those is answerable and
worth answering**, and the rate answers them with a precision no reading of the
texts could match.

It also has a property nothing else in this project has: **it is completely
transparent.** Anybody can recompute it with a word-list and a calculator, there
are no free parameters to tune, and two people scoring the same text will get the
same number to the last decimal.

>> **The problem is not that the rate is a bad measurement. It is that it is a good
>> measurement of the wrong quantity**, and those two failures look identical from
>> inside the spreadsheet.

Which is why the fix in Season 3 is not a better rate. It is a different question,
asked with a window and a peak, and it takes two failed rounds to get there.

## What would count against this

1. **Position not mattering.** If the stereotypes really are diffuse properties of
   whole texts rather than features of episodes, the rate is the correct
   instrument and Seasons 3 and 4 are chasing something that was never there.
   **That is a live possibility and nobody in the project entertains it**, which
   is a bad sign in itself. The reading that would make eight rounds of work
   unnecessary is the one nobody argued for.
2. **A better denominator existing.** Divide by event-words instead of total
   words? Season 3 episode 8 computes exactly that and **it flips a result**,
   which is why it cannot be claimed.
3. **This episode overstating the loss.** A rate is blind to order, and it does
   not follow that order carries the signal. **A text drenched in all four
   stereotypes at every point would be found by a rate and found correctly.** The
   argument here is that the rate cannot test the conjunction claim, not that it
   tests nothing.

## Handing off

You have four numbers per text. **Episode 12 asks how to combine them**, and the
two options encode two different theories.

## Questions

1. **Name three things a rate per thousand throws away.** You have two.
2. Shuffling the book does not change the number. **What class of claim can that
   number never test?** State it precisely.
3. **What would you divide by instead of total words?** What breaks?
4. Is it possible the stereotypes really are diffuse? **What would show that?**
---pagebreak---

@@ EPISODE 12 — ADDING UP VERSUS ALL FOUR AT ONCE

## The stake

Four numbers into one, and the choice of how is a theory-laden act. **MIN is
chosen on theory alone, with nothing in the data recommending it**, which is
either the most honest or the most reckless moment of the season. You decide,
with all the reasoning on the table.

## Collecting episode 11

Episode 11 produced four numbers per text, one per stereotype, each blind to
order. **This episode is about turning four numbers into one**, which you have to
do, because you cannot rank texts or test a prediction against a quadruple.

**And how you combine them is not a technical choice.** The two options encode two
different theories, and picking one is picking what you think Girard is claiming.

Which is why the episode is worth ten minutes on something that looks like
arithmetic housekeeping. **The theory gets decided here, in a line of code, by
somebody who may not notice he is deciding it.**

## The two options

$$ SUM = r_crisis + r_crimes + r_marks + r_violence $$
$$ MIN = the smallest of the four $$

**SUM is accumulation.** A text scores high by having a lot of any of it, and one
enormous bucket can carry the other three on its back. Say that property by its
name, because the next episode turns on it: **SUM is compensatory.** Strength in
one place pays for absence in another, and the total does not record which
happened.

**MIN is conjunction.** A text scores only as high as its **weakest** stereotype,
and nothing a strong bucket does can raise it. Drench a text in violence with no
accusation anywhere and it scores **zero**.

## The device: same four numbers, two verdicts

**Put two invented texts side by side.**

| | crisis | crimes | marks | violence | **SUM** | **MIN** |
|---|---|---|---|---|---|---|
| **Text A** | 2.0 | 2.0 | 2.0 | 2.0 | **8.0** | **2.0** |
| **Text B** | 0.0 | 0.0 | 0.0 | 8.0 | **8.0** | **0.0** |

>> **Identical on SUM. As different as two texts can be on MIN.**
>>
>> Text A has all four stereotypes at once. **Text B is a battle scene with no
>> victim, no accusation and no crisis in it at all.** SUM says they are the same
>> text. **MIN says one of them is not a persecution text.**

Notice that the table contains no new information beyond the four columns. Both
metrics see identical inputs. **Everything separating the two verdicts happens in
the choice of operation**, which is why calling it a technical detail is the
mistake the episode exists to prevent.

And be clear that SUM is not stupid. It answers a real question, which is how much
persecution vocabulary a text carries. **That question is simply not the one being
asked**, and the two are easy to confuse because a text that satisfies the second
usually satisfies the first as well.

## The clinical anchor, exact

**Diagnostic criteria requiring N of M against criteria requiring all of them.**

SIRS needs two of four and catches everything that walks through the door. A
definition requiring all four is specific and misses cases. **Same trade, same
mathematics, and every clinician has an opinion about it.**

Notice that neither is wrong. The N-of-M version exists to make sure nobody is
missed, and it earns its keep in a triage setting where the cost of missing is
enormous. **All-of exists to make sure the label means something**, and it earns
its keep when somebody is going to build on the label later. The question is never
which is better. It is what the label is for.

## The character anchor, and you already have it

**The relay team from Season 1 episode 10.** Nobody thinks the fastest individual
leg tells you about the team, because **the baton has to go all the way round**,
and the claim "this team is good" is a claim about the **weakest** leg.

Episode 8 used it to explain what Girard means by *together*. **Here it stops being
an illustration and becomes the arithmetic**, which is the whole move of this
episode: MIN is that sentence written as an operation.

And it is the dropped baton that carries it, because a dropped baton does not
lengthen the team's time. **It ends the race**, no matter how fast the other three
ran. That is what taking a minimum does to a zero, and it is why the algebra and
the sentence are the same object.

## Why MIN is the right choice for this theory

Season 1 episode 10 said it: **the whole claim is conjunction.** Four faces of one
event.

Follow what that requires. If the four stereotypes are four traces of one
mechanism, then a text with three of them and not the fourth is evidence
**against** the mechanism, not weak evidence for it. The theory does not predict
lots of persecution vocabulary. **It predicts co-occurrence**, and a metric that
scores highly on three is not measuring co-occurrence at all.

>> **MIN is the algebraic form of the sentence "they appear together."** SUM is the
>> algebraic form of "there is a lot of this stuff around." **Only one of those is
>> Girard's claim.**

So MIN was chosen and written into the first pre-registration as the primary
metric.

## And here is the correction, which was found by opening the book

**That last sentence is too strong, and the series said it for a long time before
anybody checked.**

Girard's own decision rule, in *The Scapegoat* chapter 3, is this:

>> "Not all the stereotypes must be present: **three are enough and often even
>> two.**"

**That is N-of-M**, and it is not MIN. MIN demands four of four and returns zero on
three. Girard demands two.

So the honest account of this choice has three parts and the middle one is new.

| | |
|---|---|
| the reasoning above | **still good.** Conjunction, not accumulation, is what makes it a theory |
| **the attribution** | **wrong.** Girard does not require all four, and nobody had read the sentence where he says so |
| what MIN actually is | **a deliberate strengthening** of the source's rule, which is a legitimate thing to do and a different thing to claim |

>> **Choosing a harder test than your source requires is defensible and often
>> admirable.** Presenting it as what the source requires is not, and the
>> difference matters here because **the strengthening is what breaks in Season 3.**

**Say it that way on camera.** MIN is the right instinct and an overreach, at the
same time, and Season 1 episode 10 has the full passage and the reason the
overreach is more interesting than the error.

**The reasoning should still be presented as good**, without hedging in the voice,
because the audience needs to feel a decision being made well before they watch it
fail. **Just do not tell them Girard asked for it.**

## And the trap, planted not sprung

MIN has a property nobody considered, and it is **arithmetic rather than
literary**. Nothing about Girard is involved in it, and nothing about the corpus,
and no amount of thinking harder about the theory would have surfaced it.

The number that does the damage was already planted in Season 1 episode 7:
**`crimes` fires at 0.95 per thousand words, five times rarer than violence.**

Two facts, side by side. A metric
that takes the smallest of four. A bucket that is five times rarer than its
neighbours. **The audience now has everything needed to see it**, which is the
point of planting rather than explaining.

>> **Do not resolve this here.** Let the audience feel the choice was right,
>> because it was right. **Season 3 episode 2 takes it apart in one line of
>> arithmetic that has nothing to do with Girard.**

## What would count against this

1. **MIN being too strict.** If the four stereotypes are genuinely produced by one
   event, they should still vary in strength, and demanding all four be present at
   once may reject real persecution texts. **That is the case against MIN and
   Season 3 episode 1 is what it looks like when it happens.**
2. **A third option existing.** Geometric mean? Second-lowest? **Try to invent one
   before you are shown one.** MIN is one end of a family, and the project never
   looked at the middle of it.
3. **The conjunction being at the wrong scale.** MIN asks whether all four occur
   in the same **text**. Girard's claim is that they occur in the same **event**.
   Those are not the same requirement and episode 11 already said why a rate
   cannot express the second one. **MIN is the best available answer to a question
   the instrument cannot ask properly.**

## Handing off

MIN is chosen. **Episode 13 is the case that proves it was the right call**, and
it is a dinner party.

## Questions

1. **State in one sentence what MIN detects that SUM cannot.**
2. MIN is the minimum of four. **What happens when one of the four is rare?**
   Answer before Season 3.
3. **Invent a third way to combine four numbers** that encodes conjunction without
   MIN's weakness.
4. SUM answers a real question badly matched to the claim. **Name a summary
   statistic in your own field that answers the neighbouring question** and gets
   reported as though it answered yours.
---pagebreak---

@@ EPISODE 13 — THE HOSPITALITY SCENE THAT BEAT EVERY TRAGEDY BUT ONE

## The stake

The promise from episode 1 comes due: a dinner party that outscores every
tragedy, and the instrument catching its own false positive. **Stay for what the
catch proves.

## Collecting episode 12

Episode 12 chose MIN over SUM on theory alone. Nothing in the data recommended
it. The argument was that Girard's claim is about four things occurring together,
so the metric has to be one that four together can satisfy and three cannot.

**That is the weakest kind of justification available at the moment you make
it.** You are asserting that a piece of arithmetic matches a piece of theory, and
there is no way to check the match from inside the argument. Every bad instrument
in the world was also chosen for reasons its author found convincing.

**This episode is the check**, and it comes from a text that was in the corpus to
be boring. It is the only kind of evidence that can vindicate a choice made on
theory: a case the choice handles correctly that nobody had in mind when they
made it.

**Season 1 episode 18 read this passage as literature.** This episode reads it as
a test of the metric.

## The finding

| book | scene | crisis | crimes | marks | violence | **SUM** | **MIN** |
|---|---|---|---|---|---|---|---|
| **7** | Odysseus welcomed at the palace | 0.30 | **0.00** | **6.51** | 0.59 | 7.40 | **0.00** |
| 18 | Irus the beggar | 0.00 | **0.00** | 5.73 | 2.15 | 7.88 | **0.00** |
| 22 | the slaughter of the suitors | 1.31 | 0.22 | **0.22** | 7.62 | 9.37 | 0.22 |

>> **These are the v2 numbers.** The old table was round 1 on lexicon v1, never
>> re-run until Season 1 episode 18 forced it. **That episode carries the full
>> before-and-after**; this one carries what the numbers mean.

Read it one column at a time, because the **`marks` column** is the finding.

**Book 7 is a dinner party.** Odysseus arrives at the palace of Alcinous, is
bathed, given clean clothes, fed, and questioned politely by his host. Nobody is
accused, expelled or harmed. **Zero on `crimes`, and that zero is correct**,
because there is nothing in the scene for that bucket to find.

**And `violence` is not zero, which is better than if it were.** It is 0.59, two
hits in 3,379 words: **`killed`** and **`to pieces`**, both inside Odysseus telling
his hosts about the shipwreck.

>> The bucket did not find violence in the room. It found a man **describing**
>> violence, and a word-list cannot tell a wound from an anecdote about one.
>> `crisis` does the same: its one hit is **`likeness`**, meaning somebody
>> resembling somebody.

**Book 22 is the massacre.** Odysseus kills every suitor in the hall, and it is
one of the most violent scenes in Greek literature.

**On the victim-marks bucket the dinner party scores 6.51 and the massacre scores
0.22.** Thirty times lower, on the bucket built to detect marked victims, in the
scene where the bodies are. **That is the finding and it is untouched by the
re-run.**

>> **And say what the re-run took away.** Under v1 the dinner party beat the
>> massacre on SUM too, 6.51 against 5.67, with the massacre seventh. **Under v2
>> it does not**, and book 22 ranks second. **The most quotable sentence this
>> episode ever had was an artifact of a bug.**

What survives: a scene with an empty bucket still ranks **fifth of twenty-four**,
and on `marks` it still beats **every tragedy in the corpus except *Oedipus the
King*** at 9.58. The only other texts above it are two prose compendia.

## Why a hospitality scene scores as victim-marking

Nothing has gone wrong with the code here, and that is the part worth slowing
down for.

**Collect Season 1 episode 8.** `marks` is **44% the word `king`**, and the king
passed both tests there: outside the group, and killable without anybody obliged
to avenge him. **In Girard the king is a victim whose execution has been
deferred**, tier K there and still tier K here. `king` belongs in `marks`.

Now put that word-list in front of book 7. Everyone in the room is a king, is
addressing a king, or is describing one. The word saturates the passage for
reasons of **setting**.

>> **The false positive is not the lexicon misfiring. It is the lexicon working
>> exactly as written, on a text where one stereotype is present at maximum
>> density and the other three are absent.**

That decides which repairs are available. A misfire you fix by editing words. This
you cannot, because deleting `king` would delete a real victim mark and break the
instrument in the other direction. **The problem is not in the word-list, so it
cannot be solved in the word-list.**

## What SUM does with a text like that

SUM adds the four buckets. 0.30 plus 0.00 plus 6.51 plus 0.59 is **7.40**.

Look at what that arithmetic permits. **A single bucket can carry the entire
score.** `marks` alone is **88% of book 7's total**, and the bucket that is empty
contributes nothing to the ranking and costs nothing either. **SUM cannot tell the
difference between a text that is missing a stereotype and a text that has a
little of it.**

**Episode 12 called that property compensatory**, and book 7 is what it looks like
outside an invented example. Strength anywhere buys weakness anywhere else, so
four moderate stereotypes and one extreme one produce the same total, and **no
later step can pull them apart.** The number threw the difference away when it was
computed.

Book 22 is the demonstration. All four of its buckets are non-zero. **On the claim
being tested it is the better text**, because the claim is that the four occur
together and in book 22 they do. **Under v1 SUM ranked it below the dinner party;
under v2 SUM gets this pair right**, and the fix repaired one instance of a defect
it did not repair in general.

## The payoff

**Look at the MIN column.**

MIN takes the smallest of the four. For book 7 the smallest of 0.30, 0.00, 6.51
and 0.59 is **0.00**. For book 18, **0.00**. **Both were 0.00 under v1 too, and this
is the number the re-run could most easily have destroyed.**

Notice how the 6.51 gets treated. It is not penalised, not down-weighted, not
corrected. **It is never consulted**, because MIN stops at the weakest bucket. An
empty bucket anywhere sets the score to zero no matter what the rest of the text
is doing.

Book 22 scores 0.22. Small, above both, and the ordering is now the right way
round.

>> **The conjunction requirement kills the false positive automatically**, with no
>> patch, no exception, and nobody having to notice.

**The load-bearing clause is the last one.** Nobody wrote a rule about kings or
about hospitality scenes, and nobody read book 7 in advance. The metric was chosen
because of the shape of the claim, and the shape of the claim is what rejected the
text.

Then consider the alternative. An instrument that has to be told about book 7 will
also have to be told about the next book 7, **and no list exists anywhere of every
text that will fool you.** A special case only ever covers the failure you have
already met.

## The clinical anchor, and it is episode 12's, now with a patient in front of it

Episode 12 put N-of-M criteria against all-of criteria and left it as a trade.
**Book 7 is what the trade looks like when a real case arrives.**

Any-five-of-nine admits this patient. One florid feature at an extreme level, four
soft ones, threshold met, diagnosis recorded, **and the chart does not preserve
which route it took.** Everything downstream now treats that patient as equivalent
to somebody who met the criteria the ordinary way.

All-of refuses the same patient on one absent feature, and refuses without anybody
reviewing the case.

>> That is the property worth having. **A rule that has to be applied by a person
>> protects you only when the person is paying attention**, and book 7 arrived in a
>> batch of twenty-four with nobody reading it.

## The character anchor

**A heist crew.** The job needs a safecracker, a driver, an inside man and a
lookout.

SUM is the producer counting talent. Three world-class safecrackers and no driver
looks like an outstanding crew on paper, and the total really is high. MIN is the
person who has run a job. It asks who is weakest on the team, and if there is
nobody in the car the score is zero and the rest of the crew is irrelevant.

**Nobody has to add a rule saying the driver matters.** It falls out of asking for
the minimum.

## And it is not a one-off

One rescued false positive is an anecdote, so this episode used to point at what
MIN did across the corpus. **Every Greek tragedy MIN ≥ 0.48, every control MIN ≤
0.32. A gap with nothing inside it.**

>> **That partition does not exist on the fixed lexicon.** Re-scored, the 19-text
>> corpus gives lowest tragedy **Prometheus 0.47** and four controls above it, Ovid
>> *Metamorphoses* 5 at **1.57**. On the 76-text corpus tragedies span 0.44 to 3.29
>> and non-tragedies 0.00 to **2.09**. **The ranges overlap.**

**The clean separation was lexicon v1**, the same superseded run as the old book 7
table, and `FINDINGS.md` said so in a line nobody acted on: §2's thresholds "no
longer apply."

>> **Do not round this up.** MIN still rejected book 7 automatically. **What is
>> gone is the evidence that it does the right thing in general**, which is what
>> made it look like a validated metric rather than one lucky catch.

The older discount still stands. **Nothing was predicted.** Every text was labelled
before the metric ran, which is what episode 1's confirmation table warned about,
and **MIN was validated on 10,000-word tragedies only**. **Season 3 episode 3 is
where that does its damage.**

## The device: what a good instrument looks like when it works

**This is worth naming, because the series is mostly failures and the audience
should see what success looks like.**

| | |
|---|---|
| a metric chosen for **theoretical** reasons, before the data | episode 12 |
| a false positive appearing that would have wrecked the results | book 7 |
| the metric **rejecting it automatically**, with no special case | MIN = 0.00 |
| **nobody having to notice** | the correction needed no author |

The fourth row separates this from luck. The first three describe a narrow escape,
where somebody made a defensible choice, a trap appeared, and the choice happened
to cover it. **The fourth row is what makes it evidence about the method**,
because the correction did not require an author. It would have worked in a text
nobody read, on a run nobody watched, in a corpus a hundred times this size.

>> **That is what it looks like when the reasoning was right.** Not a number that
>> confirms you. **A number that catches an error you had not spotted yet.**

## What would count against this

1. **MIN being right here for the wrong reason.** Book 7 was rejected because its
   `crimes` bucket is empty, and `crimes` is the rarest bucket in the instrument
   at **0.95 hits per thousand words**, five times rarer than `violence`. A metric
   that zeroes out whenever the rarest bucket is empty will zero out **almost
   everything**, including the texts it is supposed to catch. On that reading MIN
   detected no false positive at all. It reflected a scarce word-list and got the
   right answer here by accident. **Season 3 episode 2 settles this, and not in
   MIN's favour.**
2. **The 0.48 / 0.32 separation being driven by length rather than genre.** The
   tragedies are of comparable length to each other and the controls are not.
   **Nobody has run MIN on texts matched for length**, which would separate the
   two explanations in an afternoon.
3. **One rescued case not being a validation, and it is not.** It is a single
   text, and it shows the metric can reject something, not that it rejects the
   right things in general.

## How to end the season

The instrument is finished. Written blind, frozen, order checkable, corpus
audited, tokens fixed, lexicon de-noised and tagged, metric chosen for the right
reason and validated against a false positive it caught by itself.

>> **And nothing has been tested. Not one prediction has been run.**
>>
>> **The reasoning that got here is correct.** Every decision in thirteen episodes
>> was defensible and most of them were right.

Say that and let it sit, because the whole weight of the next season lands on it.
Thirteen episodes have produced an instrument nobody watching has been given a
reason to distrust.

**Then say the first line of Season 3:**

>> **The pre-registered prediction failed, and the controls beat the persecution
>> texts.**

## Questions

1. Book 7 is the best argument for MIN. **What is the best argument against MIN,
   and do you have it yet?**
2. MIN was validated on 10,000-word tragedies. **What has not been checked about
   it?**
3. Book 7 was rejected because a bucket was empty. **Name a second reason a bucket
   could be empty** that has nothing to do with the scene being peaceful.
4. **Write your prediction for Season 3 now.** Which texts score high, which low,
   and what fails first?
5. Name a time your own method caught an error **you had not noticed.** If you
   cannot, what does that tell you about the method?
---pagebreak---

@@ PRODUCTION NOTES

## Runtime

**Do not trust a runtime estimate taken from this document's length.**
Run `audit.py`. It reports the speakable word count per episode with tables,
code and question blanks stripped, which is the only number that predicts
anything. Divide by 135.

## The two-anchor table

| concept | character, for them | clinical, for you |
|---|---|---|
| unfalsifiable | detective who is never wrong, cold reading | 100% sensitivity, zero specificity |
| pre-registration | Ippo announcing the Dempsey Roll, the called shot | pre-specified primary endpoint |
| the timestamp | sealed envelope with a lawyer | trial registration number |
| corpus integrity | evidence nobody checked | **haemolysed sample** |
| tokenisation | autocorrect betraying you | correct number, wrong units |
| the sample is part of the claim | | post-hoc exclusion criteria |
| no stemming | autocorrect again | specificity |
| provenance tags | | protocol amendment log |
| rate per thousand | batting average | prevalence |
| SUM against MIN | the team that needs every member | N-of-M criteria against all-of |

## Numbers planted in this season for later detonation

| number | detonates in |
|---|---|
| `crimes` at 0.95 per 1000, five times rarer than violence | Season 3, episode 2 |
| a rate is unchanged by shuffling the whole book | Seasons 3 and 4, four times |
| mythography at 28.65 event-words per 1000 | Season 3, the density confound |
| MIN validated only on 10,000-word tragedies | Season 3, episode 3 |
| round 2's commit contains the scorer | Season 7, the audit |

## Progress log

| date | episode | what went fuzzy on camera |
|---|---|---|
| | | |
| | | |
| | | |
| | | |
