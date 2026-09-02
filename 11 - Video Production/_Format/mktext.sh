#!/bin/bash
# mktext.sh BASE OUT "TEXT" GRAVITY XOFF YOFF POINTSIZE FILL
# renders rough hand-painted caps onto BASE
set -e
BASE=$1; OUT=$2; TXT=$3; GRAV=$4; XO=$5; YO=$6; PS=$7; FILL=${8:-#f7f0da}
FONT=${FONT:-"Fira-Sans-Condensed-ExtraBold"}
S=4
TMP=$(mktemp -d)
magick -background none -fill "$FILL" -font "$FONT" -pointsize $((PS*S)) \
  -kerning $((PS/12)) label:"$TXT" \
  -bordercolor none -border 40 \
  -channel A -spread 5 -blur 0x0.6 -level 42%,58% +channel \
  -resize $((100/S))% "$TMP/t.png"
# tight dark shadow for legibility + faint warm glow
magick "$TMP/t.png" -channel A -blur 0x2.5 -level 0%,60% +channel -fill '#1c1208' -colorize 100 "$TMP/sh.png"
magick "$TMP/t.png" -channel A -blur 0x10 -level 0%,55% +channel -fill '#e8b95a' -colorize 100 "$TMP/gl.png"
magick "$BASE" \
  \( "$TMP/sh.png" \) -gravity $GRAV -geometry +$((XO+3))+$((YO+4)) -compose over -composite \
  \( "$TMP/gl.png" \) -gravity $GRAV -geometry +${XO}+${YO} -compose over -composite \
  \( "$TMP/t.png" \)  -gravity $GRAV -geometry +${XO}+${YO} -compose over -composite \
  "$OUT"
rm -rf "$TMP"
