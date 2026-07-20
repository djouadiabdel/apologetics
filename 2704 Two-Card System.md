---
tags: [memory, cards, two-card, 2704, shadow, system]
created: 2026-07-10
status: design locked (Option B) — list not yet built
related: "[[Card Memory System]]"
---

# 🂡🂱 2704 Two-Card System (the "one syllable per card" design)

> [!abstract] What this is
> The advanced layer: read **two cards at once → one word → one image**. There are 52×52 = **2704** ordered pairs. This note records the design we settled on and *why*, so it's re-derivable and transferable. Foundation deck lives in [[Card Memory System]].

---

## 1. The core decision — 2 syllables, not 1

A pair of cards is **4 facts**: rank1, suit1, rank2, suit2.
A single C‑V‑C word has only **3 sound-slots**. You can't fit 4 into 3 without cheating — which is exactly why the classic 1-syllable systems (Ben/Shadow) are *forced* into two **arbitrary** mappings:
- merge both suits into one consonant ("suit-combo", 16→8), and
- make the vowel secretly carry the 1st rank.

We rejected that. Instead: **give every card its own syllable** → 4 facts fill 4 slots (**C‑V‑C‑V**), and *every sound has a logical reason*.

> [!note] The trade-off
> 2 syllables per pair = slightly less compressed / slightly slower at elite speed, but **100% intuitive** (nothing memorized blindly). That was the priority.

---

## 2. The rules (all derivable, nothing arbitrary)

**Rank → consonant** (standard Major — already known):

| A | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|----|
| t | n | m | r | l | ch | k | f | p | s |

**Suit → vowel** (the vowel is *inside the suit's name*):

| ♠ Sp**a**de | ♥ H**e**art | ♦ D**i**amond | ♣ Cl**u**b |
|---|---|---|---|
| **a** | **e** | **i** | **u** |

**Court → consonant** (the *initial* of its name):

| **J**ack | **Q**ueen | Kin**g** |
|---|---|---|
| **j** | **kw** | **g** |

> Tiny cleanup that makes courts fit: rank **6 = "ch"** and rank **7 = "k"** only, which frees **j** and **g** for Jack and King.

**Every card = its consonant + its suit-vowel = one syllable:**
`3♥` = m+e = **"me"** · `9♦` = p+i = **"pi"** · `K♥` = g+e = **"ge"** · `Q♦` = kw+i = **"kwi"**

**A pair = two syllables = a word → image.**

---

## 3. Examples

**Number + number**

| Pair | build | Word → Image |
|---|---|---|
| A♠ 9♦ | ta + pi | **TAPIR** 🦤 |
| 6♦ A♠ | chi + ta | **CHEETAH** 🐆 |
| 5♥ 7♦ | le + ki | **LOKI** ⚡ |
| 5♣ 2♥ | lu + ne | **LUNAR** 🌙 |
| 7♣ 3♠ | ku + ma | **KUMA** (bear) 🐻 |
| A♣ 2♠ | tu + na | **TUNA** 🐟 |
| 4♠ 7♥ | ra + ke | **RAKE** 🍂 |
| 8♠ 4♥ | fa + re | **FAIRY** 🧚 |
| 3♦ 5♠ | mi + la | **MILA** 👩 |
| 9♥ A♠ | pe + ta | **PITA** 🥙 |

**Courts (same engine)**

| Pair | build | Word → Image |
|---|---|---|
| K♣ 8♥ | gu + fe | **GOOFY** 🐶 |
| Q♦ 2♠ | kwi + na | **QUINOA** 🌾 |
| J♥ 5♦ | je + li | **JELLY** 🍮 |
| K♥ A♠ | ge + ta | **GETA** (sandal) 👡 |
| K♠ J♥ | ga + je | **GADGET** 🔧 |

**Same-suit pairs are fine** — they just share a vowel (both consonants still differ, so no ambiguity):
`2♥ 3♥` = ne+me = **NEMO** 🐠 · `9♥ A♥` = pe+te = **PETE**

---

## 4. The "shadow" is automatic

Reverse the two cards → read the syllables in the other order → a **different word**. No separate shadow list to build:

- `A♠ 9♦` = ta·pi = **TAPIR** 🦤 ↔ `9♦ A♠` = pi·ta = **PITA** 🥙

---

## 5. The most important truth (scaffold, not calculator)

> [!important] No 2704 system auto-generates 2704 perfect words — none try to.
> The phonetic rules are a **learning scaffold**, not a runtime calculator. In practice:
> 1. Rules generate ~**85–90% of pairs cleanly** (Tapir, Nemo, Goofy…).
> 2. The **ugly ~10%** (bad syllable clashes, court-on-court junk) get a **hand-assigned** fixed image, once.
> 3. You then **drill all 2704 as fixed pictures** — at speed you *recognize*, never compute.
>
> So "calibrated for all 2704 variations" = **build the full list once, hand-fix the ugly ones, and that finished list IS the calibration.**

**Courts specifically:** court+number is almost always clean; **court+court** is the small rough batch (~50-ish) you hand-pick. Every system does this for the court corner — it's normal, not a failure.

---

## 6. Build plan

1. ✅ Lock the Option B rules above.
2. Generate **all 2704 pairs** into a spreadsheet: auto-word + suggested image + a **flag column** for the ~10% needing a hand-fix.
3. Knock out the flagged ones together.
4. Export to **Anki**; drill to instant recognition (2 cards/image → 26 images per deck).

---

## 7. Vs. the classic 1-syllable systems

| | This (Option B) | Ben / Shadow |
|---|---|---|
| Syllables per pair | 2 (C-V-C-V) | 1 (C-V-C) |
| Arbitrary mappings | **none** | suit-combo + rank→vowel |
| Speed ceiling | slightly lower | higher |
| Intuitiveness | **maximal** | lower |

**Sources:** [Shadow System](https://artofmemory.com/blog/shadow-system/) · [Ben System](https://artofmemory.com/wiki/Ben_System/) · books: Metivier — *The Victorious Mind*, *The Memory Connection* (~/Downloads).
