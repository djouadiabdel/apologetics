---
tags: [method, contradictions, instrument, falsification, interlock, luke]
created: 2026-07-25
status: round 1 scored, denominator not built
related: "[[01 - The Whole Argument]]", "[[the Gospel writers were accurate reporters]]", "[[Historical Criterion]]", "[[Textual Variants — What They Are and Aren't]]", "[[Vindicatory Miracles — The Catholic Case and Its Missing Control]]"
---

# 🧪 Counting the Contradictions

> [!abstract] What this is
> How we built a way to count contradictions in the New Testament, what the count came to, and the place where the instrument turned around and failed me. Working files are in `~/Myths/interlock/`.

---

## 1. It started with the census

I was watching apologetics videos about the census in Luke 2. Two of them, back to back. Both ended the same way. The objection evaporates. It dissolves. It disappears.

Then I noticed they said that about everything.

The census has a real problem in it. Nobody has produced a source outside Luke that puts a registration in Judea under Quirinius while Herod was alive. One video called it evaporated. Another video answered the one-angel-or-two-angels objection, which has nothing in it at all, and called that evaporated too.

Same word for the hard case and the empty one.

So I stopped listening to the arguments and started watching the verdicts. A machine that gives the same answer to every input is not reading the input. The skeptic lists do it in the other direction. Every entry a contradiction, the fatal one and the silly one priced identically.

Both sides had built something that could not be wrong. That is the thing I wanted to fix.

---

## 2. What was wrong with every number that already existed

Sam Harris commissioned a poster. It shows 439 contradictions in the Bible as red arcs. It is beautiful and it is worthless, for two reasons that have nothing to do with the Bible.

**It never says what a contradiction is.** No rule. So nobody can run the method again and get 439, and nobody can check it. A count that cannot be checked cannot be wrong.

**It has no denominator.** 439 out of what? A corpus with four accounts of one life has enormously more chances to contradict itself than a corpus with one. Counting raw hits punishes a book for being attested more than once.

I also found the arcs came from the Skeptic's Annotated Bible, repackaged. And a biblical scholar went through the list and found duplicates, entries citing verses that say something else, and Proverbs 26:4 against Proverbs 26:5, which are adjacent by design.

---

## 3. The definition, written down before I looked at anything

This part matters more than the result.

I wrote the rulebook and committed it to git before reading a single entry. Timestamped, frozen, `83f5f55`. If I had written it afterward I would have written a rule that produced the answer I wanted. And I would not have noticed doing it.

Here is what I wrote.

> Two texts contradict when they assert P and not-P about the same subject, in the same respect, at the same time, and no licensed reading makes both true.

Three qualifiers. Same subject, same respect, same time. They are Aristotle's, not mine, and not an apologist's dodge. Dropping them is how a list gets to 439.

The last clause is the one that cost me something. It does not say "no reading I can imagine." A rescue only counts if something outside my head licenses it. A Greek word, a verse, an attested custom, a named source, a named convention. If the only harmony available is an event no text mentions, the rescue fails. The contradiction stands.

I also wrote four falsifiers into the file. Conditions that, if they fired, meant the study had failed. Then I committed that too, so I could not quietly delete one later.

---

## 4. Letting the enemy pick the list

I did not choose which contradictions to examine. This is the whole anti-cheat.

The docket came from three hostile compilers. The Skeptic's Annotated Bible, the Infidels.org list, EvilBible.com. 671 entries, machine readable, verse references attached, both sides of each clash stated. I took all of them and cut nothing.

Of those, 210 alleged a contradiction between two New Testament texts. That became the study.

The rule is simple. They pick the docket, I adjudicate. I never get to skip the hard ones.

---

## 5. Killing the duplicates

Before any judgment I deduplicated, by a rule fixed in advance.

Exact matching removed 12. Then the granularity rule, one item equals one pair of incompatible propositions, removed 45 more. The cock crow was listed four separate times across the three sites. Matthew 5:16 against Matthew 6:1 appeared three times. The potter's field three times.

**57 of 210 entries, 27 percent, were the same complaint counted again.**

A quarter of the list is an echo.

Every merge is logged with its reason so anyone can reverse one.

That left 153 distinct allegations. Not 153 problems. 153 is how long the accusation is once you stop double counting it.

---

## 6. The gates

Then the sorting. An allegation can fail two different ways and I kept them apart.

It can fail to be a contradiction at all. Nine reasons for that, each recorded with a code so the pattern of failures is itself visible.

Here they are.

- **A0** One side is not an assertion. A question, a prayer, a command, or a liar talking. Jesus asks "shall I say, Father save me from this hour?" and rejects it in the same breath.
- **A1** Not the same subject. Two blind men, two mockings, two villages.
- **A2** Not the same respect. Rhetorical "all" read as a strict quantifier. Legal paternity read as biological.
- **A3** Not the same time. Fear then joy inside one encounter.
- **A4** Omission only. Naming one angel is not asserting there was one. You would need a text saying *only*, and none says it.
- **A5** Two emphases, no negation. God hardens and Satan blinds, and neither text says only.
- **A6** The clash is with a doctrine, not with a verse.
- **A7** Deliberate literary pairing. This one never fired.
- **A8** The cited verses do not say what the entry claims. Five did that.

Or it can be a real clash that gets rescued at a price. That is the cost scale, 1 to 4. Licensed, contested, ad hoc, hard. A 4 means no channel supplies a rescue at all.

---

## 7. What the count came to

153 allegations. 102 failed the gates. 51 were real clashes and got priced.

| cost | | n |
|---|---|---:|
| 1 | licensed, cited rescue | 11 |
| 2 | contested, scholars argue | 38 |
| 3 | ad hoc, needs an invented event | **2** |
| 4 | hard, no rescue anywhere | **0** |

The two hard ones are how Judas died and which people accused Peter in the courtyard. Nothing at 4. Nothing touching whether he was crucified under Pilate, buried, or found gone.

Two items. Out of a 210 item accusation.

---

## 8. Then my own falsifier fired

F4 said this. If the two most abusable gates carry more than 40 percent of my rejections, the dissolutions are resting on my sense of the words rather than on the texts. Then the whole rate gets reported as unreliable.

A2 and A5 came to 67.6 percent.

I had named that gate in advance as the place a motivated coder puts his thumb. Then I put my thumb there sixty-nine times.

I wrote the threshold. I blew through it. The file says so at the top instead of the bottom.

---

## 9. What lived through that

Not everything died.

An A2 mistake puts an item back as a *contested* clash. Cost 1 or 2. It cannot create a cost 3, because a cost 3 means no channel supplies a rescue, and an item I threw out for having a sense distinction available is by definition one where a channel does.

So I ran it as a worst case. Assume every single A2 and A5 call I made is wrong.

| | as scored | if I got all of them wrong |
|---|---:|---:|
| accepted as real | 51 | 120 |
| cost 3 or worse | 2 | 2 |
| cost 4 | 0 | 0 |

The dissolution rate is soft. The hard count holds.

---

## 10. What it costs me

Inerrancy. Not softened, not nuanced.

Judas at cost 3 means one of Matthew and Acts is wrong about a fact. The rope broke, the text was miscopied, the body swelled in the sun. None of it is in a text. Every rescue on offer invents the event it needs. That is what the guard was built to catch. It caught it.

If my position required zero errors anywhere, this study already ended it.

What it does not cost is reliability in the ordinary sense. A document can be wrong about how a traitor died and right about a public execution. That is the normal condition of every ancient source anyone uses.

---

## 11. Where the disagreements landed, which is the actual finding

The cost 4 slot is empty and the cost 3 slot holds a traitor's death and a courtyard accuser. The agreement holds at the center. Crucified under Pilate, buried, the tomb found open.

Myth speaks with one voice, and that unanimity is the fingerprint of the crowd that did the killing. Nobody in Sophocles dissents about Oedipus. The skeptic list is a catalogue of places where the witnesses to this particular execution could not keep their story straight. The unanimity broke.

A perfectly harmonized account of a lynching would be the suspicious document.

---

## 12. What I still do not have

The denominator.

Two hard contradictions out of what? If the New Testament has thousands of places where two texts make checkable claims about the same thing, two is astonishing. If it has forty, two is bad news. Same numerator, opposite verdicts.

So I have produced a count, and my own rulebook opens by saying a count without a denominator is worthless. I did the thing I wrote down not to do.

No control either. I have not run the same procedure on the apocrypha, which means I have no evidence the instrument can tell canon from legend at all.

And Claude did all the coding. One coder, not blinded, who recognises every text on sight. That caps the whole thing at a strong pilot. No amount of careful process moves it past that.

---

## 13. What I learned about the apologists on the way

I scored their answers too, with the same guard.

Their best arguments are good and checkable. Luke uses the words for going down to Jericho and going up to Jerusalem, so the claim that he did not know about the climb dies in ten seconds. Josephus flatly says Philip raised Bethsaida to the dignity of a city, so the *polis* objection dies too.

Then they staple an invented argument to the good one at the same confidence. Every time.

Emmaus is the clean example. There really are several places by that name and the identification really is unsettled. That argument stands on its own. Then the video adds that the sixty stadia might be the round trip, which the Greek will not carry, and admits it is unusual while saying it anyway.

The critic breaks the weak half. The good half dies with it.

The harmonizers do something worse. Handed a case where the text simply does not assert what the objection needs, they build a sequence instead. Five named women including one no text places at the tomb. An angel appointed spokesman by nobody. Two source communities starting from different villages to explain a difference in the hour.

Naming one angel is not denying two. That answer gives an opponent nothing to hold. Their answer gives him five joints to pull, and one broken joint makes the whole reconstruction look manufactured.

They pay attack surface for nothing.

---

## 14. The part I do not have yet, and am not going to pretend I do

I have audited twelve of the fifty-one. For the other thirty-nine I do not know where the defence breaks, because I have not gone and read the defence.

That is the difference between knowing the census argument and knowing the genealogies argument. On the census I can name the two false citations. On the genealogies I can only say that the rescues are contested and that I have not checked who makes them or how.

So the registry marks every row. Audited, or not audited. An unaudited row is not a solved problem. It is a rescue nobody has leaned on yet.

Ten of the thirty-nine are flagged as the ones a critic reaches for first. The genealogies. Acts against Paul's own letters, three separate times, and Paul is under oath in one of them. "This generation shall not pass."

Those are next.

---

> [!warning] Open
> Build the denominator. Run the apocryphal control last, after the scoring is locked, so the coding cannot drift toward the contrast I want. Audit the thirty-nine, starting with the ten flagged.

Everything is in `~/Myths/interlock/`. Start at `README.md`, which says what to read and in what order.

`ntcount/PREREGISTRATION-NT.md` is the frozen rulebook. `ntcount/VERDICT.md` has all 153 items and the reason for each. `ntcount/REGISTRY.md` names every accepted contradiction, who alleged it, how the defence tries to rescue it, and where that defence fails. `rescue/` holds the hand-worked items, the census done exhaustively as the template, and the apologist answers scored by the same rule.
