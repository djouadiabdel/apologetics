# Kdenlive Effects Cheatsheet — Anime Essay Format

Your video has 4 visual modes: manga panels, anime clips (<5 sec), face-to-camera, text on screen.
These are the only effects you need. Everything else is noise.

---

## MANGA PANELS (your main visual — 60-70% of runtime)

### Transform
- **What it does:** Move, scale, and reposition any image or clip. This is your Ken Burns tool.
- **How to use:** Add to clip → set keyframe at start (zoomed in on detail) → set keyframe at end (slightly different position/zoom) → Kdenlive animates between them.
- **Three moves:**
  - **Slow push-in:** Start wide, end tight on a face or detail. Default for emotional beats.
  - **Slow pull-out:** Start tight on a detail, end wider. Good for reveals.
  - **Slow pan:** Start left side of panel, end right side. Good for two-character panels.
- **Rule:** Keep movement subtle. If you notice it sliding, you moved too far.

### Opacity
- **What it does:** Controls how transparent a clip is (0% = invisible, 100% = fully visible).
- **How to use:** Keyframe opacity from 0→100 at start for fade-in, 100→0 at end for fade-out.
- **When:** Transitioning between manga panels so they breathe instead of hard-cutting.

---

## ANIME CLIPS (<5 seconds each)

### Speed / Reverse
- **What it does:** Slow down or speed up a clip.
- **How to use:** Right-click clip → Change Speed. Try 80% for a slightly slowed dramatic moment.
- **When:** A 3-second clip feels too fast for the beat you're narrating. Slow it to 80% to stretch it to ~4 seconds.

### Fade In / Fade Out (corner drag)
- **What it does:** Smooth visual fade at the start or end of any clip.
- **How to use:** Hover over top-left or top-right corner of clip in timeline → drag the circle inward.
- **When:** EVERY anime clip should fade in and out. No hard cuts on copyrighted footage — fades make them feel like punctuation, not like stolen clips.

---

## FACE-TO-CAMERA

### Color Correction — Brightness / Gamma
- **What it does:** Adjusts overall brightness without blowing out highlights.
- **How to use:** Effects → Color and Image Correction → Gamma. Adjust until your face looks natural.
- **When:** Your webcam/phone footage will look different from the manga panels. Match the brightness so the cut between them doesn't feel jarring.

### Crop and Transform
- **What it does:** Reframe your face-to-camera shot.
- **How to use:** Use Transform to zoom in slightly and reposition so your face is off-center (rule of thirds — eyes on the upper third line, face slightly left or right of center).
- **When:** Your raw webcam footage probably has you dead center with too much headroom. Fix it once per recording session.

---

## TEXT ON SCREEN

### Title Clips (built-in tool, not an effect)
- **What it does:** Creates text overlays — key phrases, character names, Girard quotes.
- **How to use:** Project menu → Add Title Clip → type text → style it → drag onto top track.
- **When:** When you say a key phrase that should land visually. "The triangle doesn't hold." "He wanted Miyata's recognition, not Miyata."

### Fade In / Fade Out on text
- **Same corner-drag technique as anime clips.** Every title should fade in and fade out. Text that pops on and off hard looks amateur.

---

## AUDIO

### Volume Keyframes
- **What it does:** Lets you raise/lower audio volume at specific points in the timeline.
- **How to use:** Click on the audio clip → you'll see a volume line. Click to add points, drag them up/down.
- **When:** Lower music volume when you're speaking, raise it during visual-only moments or transitions.

### Fade Out (corner drag on audio)
- **What it does:** Smooth music fade at the end of the video.
- **How to use:** Same corner-drag as video fades, but on the audio clip.
- **When:** End of every video. Music fading out under your last sentence is the cleanest way to close.

---

## GLOBAL — APPLY TO EVERYTHING

### Dissolve (Composition)
- **What it does:** Smooth blend from one clip to another.
- **How to use:** Compositions → Dissolve → drag onto the cut point between two clips.
- **When:** Between manga panels ONLY. Not between anime clips. Not into/out of face-cam. Manga panels dissolving into each other feels like pages turning. Everything else should cut or fade.

---

## EFFECTS YOU DO NOT NEED

- ~~Bezier Curves / Advanced Color Grading~~ — you're not grading cinema footage
- ~~LUTs~~ — you're not shooting LOG
- ~~Chroma Key~~ — you don't have a green screen
- ~~Motion Tracking~~ — nothing in your format moves like that
- ~~Wipe transitions~~ — looks cheap in essay format
- ~~3D effects / Glitch / Distortion~~ — not your aesthetic

---

## TRACK LAYOUT (save as your default project template)

```
Track 4 (top):  TEXT — titles, key phrases, names
Track 3:        FACE — face-to-camera clips
Track 2:        VISUALS — manga panels, anime clips, black frames
Track 1 (bottom): AUDIO — voiceover + music
```

Save this as a project template in Kdenlive: Project → Save As Template.
Every new video starts from this layout.
