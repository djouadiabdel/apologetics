---
tags: [james, thumbnail, packaging]
covers: "Source art and build recipe for the James 2:14-26 thumbnails. All sources public domain."
---

# James 2:14-26 thumbnails, sources and recipe

Built 2026-08-07. Files in `~/Videos/thumbnails/james2-14-26-*.png` and `.jpg` (1280x720).
vidIQ thumbnail scoring was unavailable, account at 0 credits until 14 Aug 2026.

## Source art, all public domain

| Concept | Work | Where |
|---|---|---|
| A, D | Duccio di Buoninsegna, *The Temptation on the Mount* (Maestà predella, 1308-11), Frick Collection | Wikimedia Commons, `Duccio - The Temptation on the Mount.jpg` |
| B left | Caravaggio, *The Sacrifice of Isaac* (c. 1603), Uffizi | Commons, `Sacrifice of Isaac-Caravaggio (Uffizi).jpg` |
| B right | Anon. baroque, *Rahab and the Emissaries of Joshua* | Commons, `Rahab and the Emissaries of Joshua.jpg` |
| C | Novgorod School, *The Resurrection of Lazarus* (icon), National Museum of Art, Architecture and Design, Oslo | Commons, `Novgorod School - The Resurrection of Lazarus - NG.M.02463VERSO...jpg` |

Rejected on the way: Signorelli's *The Damned* (Orvieto) has full nudity and would be limited by YouTube. The 1420s Sergiev Posad Lazarus icon is only 800px and turns to mush at thumbnail size.

## Recipe

Crop to 16:9 on the concrete object, warm the tone (`-modulate 104,116,102`), lift contrast (`-sigmoidal-contrast 3.5x50%`), soft elliptical vignette, then two or three words in the corner.

The halo on the demon in A and D is drawn, not in Duccio. Gold ring, gaussian noise, slight blur, 88% opacity, so it sits in the panel rather than on top of it. That ring is the whole joke of the image, the demon wearing the icon grammar of holiness.

Text is Fira Sans Condensed ExtraBold, rendered at 4x with `-spread 5` on the alpha channel and scaled down, which roughens the edge into something closer to hand-painted. Tight dark shadow for legibility, faint warm glow. Script kept at `mktext.sh` in the session scratchpad, worth copying somewhere permanent if the look holds.

See [[Title and Packaging System]] for the four title rules. The thumbnail carries the image, the title carries the checkable fact, and they must not say the same thing.
