// Renders a filming BOARD to A4 PDF for Rnote. Not a script and not a summary.
//
//   node filming-board.js "Filming/S2E07 — The Sample Is Part Of The Claim.board"
//
// Built to `_Format/Filming Doc Spec - Building the Rnote Board.md`:
//   one beat per page, cold content dense on the left, hot content in a tinted
//   strip on the right, the refrain in the same screen position every time it
//   recurs, one empty drawing zone per page, citations and the loop-opener in
//   the foot. No connective prose and never the conclusion.
//
// Page geometry differs from the research PDFs on purpose. Those carry a 62mm
// right gutter for margin notes. A board is annotated ON the content, so the
// margins are even and the drawing zone is explicit instead.
//
// Board markup:
//   @@ PAGE n — NAME     new page
//   :: pos    <text>     announced position, small caps above the header
//   :: head   <text>     the beat name, large
//   :: ladder             the TEACHING SEQUENCE, numbered rungs (see below)
//   :: cold               everything until the next :: is cold content
//   :: hot                everything until the next :: is hot content
//
// THE LADDER is the spine of the page and the reason this is not the austere
// board the spec describes. He is teaching, out loud, to somebody who knows
// nothing, and he needs the ORDER of the small moves in front of him. Each rung
// is one speech act, tagged, so his eye lands on the tag and he knows what he is
// doing before he knows what he is saying:
//
//   SAY    | say this, in your own words
//   ASK    | put the question to the viewer and stop
//   THEY   | the answer they will give, predicted out loud
//   SHOW   | point at the cold content
//   WAIT   | leave the silence, do not fill it
//   NO     | correct the predicted answer
//   LAND   | the rung the whole climb was for
//
// The insight IS on the page, at the bottom, after the climb. That is the
// difference from the spec's board: the spec removes the conclusion so he
// discovers it live, which suits a board he regurgitates from. A teaching ladder
// keeps it and makes him EARN it in front of the viewer, rung by rung.
//   :: refrain <text> | <n of m>
//   :: zone   <cue>      empty drawing box with a grey cue
//   :: foot   <text>     citations and numbers
//   :: loop   <text>     loop-opener handing to the next page
//   Inside cold: "|" splits a line into columns. A line of "---" rules off.

const { chromium } = require('/home/djouad/carousels/node_modules/playwright');
const fs = require('fs');
const path = require('path');

const SRC = process.argv[2];
if (!SRC) { console.error('usage: node filming-board.js <file.board>'); process.exit(1); }
const ABS = path.isAbsolute(SRC) ? SRC : path.join(__dirname, SRC);
const OUT = ABS.replace(/\.board$/, '.pdf');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const inline = (s) => esc(s)
  .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
  .replace(/\*([^*]+)\*/g, '<i>$1</i>')
  .replace(/`([^`]+)`/g, '<code>$1</code>');

function cols(block) {
  // a cold block: lines, "|" makes columns, "---" rules off, blank line spaces
  const rows = block.split('\n');
  const out = [];
  let table = null;
  const flush = () => {
    if (table) {
      const width = Math.max(...table.map((r) => r.length));
      out.push('<table class="cold">' + table.map((r) => '<tr>' +
        Array.from({ length: width }, (_, i) =>
          `<td>${inline((r[i] || '').trim())}</td>`).join('') + '</tr>').join('') + '</table>');
      table = null;
    }
  };
  for (const raw of rows) {
    const t = raw.trimEnd();
    if (!t.trim()) { flush(); out.push('<div class="gap"></div>'); continue; }
    if (/^-{3,}$/.test(t.trim())) { flush(); out.push('<hr>'); continue; }
    if (t.includes('|')) { (table = table || []).push(t.split('|')); continue; }
    flush();
    out.push(`<div class="frag">${inline(t.trim())}</div>`);
  }
  flush();
  return out.join('');
}

const TAGS = { SAY: 'say', ASK: 'ask', THEY: 'they', SHOW: 'show',
               WAIT: 'wait', NO: 'no', LAND: 'land' };

const WPM = 135;

// The hook is the ONE thing spoken word for word. The spec says never put the
// address on a page; this deliberately departs from it, because he asked for the
// first thirty seconds verbatim and a hook improvised is a hook re-shot. Set in
// large type, with the measured runtime printed, so a hook that has crept to
// forty seconds is visible before the camera is on.
function hookPage(src) {
  const parts = {};
  let key = null, buf = [];
  const store = () => { if (key) parts[key] = (parts[key] || '') + buf.join('\n'); buf = []; };
  for (const line of src.split('\n').slice(1)) {
    const m = line.match(/^::\s*(verbatim|then|must|ref)\s*(.*)$/);
    if (m) { store(); key = m[1]; if (m[2].trim()) { parts[key] = m[2].trim(); key = null; } continue; }
    if (key) buf.push(line);
  }
  store();
  const words = (parts.verbatim || '').split(/\s+/).filter(Boolean).length;
  const secs = Math.round(words / WPM * 60);
  const list = (b, cls) => (b || '').split('\n').filter((x) => x.trim())
    .map((x) => `<li class="${cls}">${inline(x.replace(/^\s*[-\d.]+\s*/, '').trim())}</li>`).join('');
  return `<section class="pg hookpg">
  <div class="band"><div class="pos">first thirty seconds &nbsp;·&nbsp; word for word</div>
    <h1>THE HOOK</h1></div>
  <div class="verbatim">${(parts.verbatim || '').split(/\n\s*\n/).filter((x) => x.trim())
      .map((x) => `<p>${inline(x.trim().replace(/\n/g, ' '))}</p>`).join('')}</div>
  <div class="hookmeta">${words} words &nbsp;·&nbsp; <b>${secs}s</b> at ${WPM} wpm
    ${secs > 32 ? '<span class="warn">OVER 30s, cut it</span>' : ''}</div>
  ${parts.then ? `<div class="then"><h2>then, off the page</h2>
    <ul>${list(parts.then, 'then')}</ul></div>` : ''}
  ${parts.must ? `<div class="must"><h2>what this episode has to answer</h2>
    <ol>${list(parts.must, 'must')}</ol></div>` : ''}
  ${parts.ref ? `<div class="refs"><h2>where to go for depth</h2>
    <ul>${list(parts.ref, 'ref')}</ul></div>` : ''}
</section>`;
}

function ladder(block) {
  const out = [];
  for (const raw of block.split('\n')) {
    const t = raw.trim();
    if (!t) continue;
    const m = t.match(/^(\d+)\.\s*(SAY|ASK|THEY|SHOW|WAIT|NO|LAND)\s*\|\s*(.*)$/);
    if (!m) { out.push(`<div class="rung cont">${inline(t)}</div>`); continue; }
    const [, n, tag, text] = m;
    out.push(`<div class="rung ${TAGS[tag]}">` +
      `<span class="n">${n}</span>` +
      `<span class="tag">${tag}</span>` +
      `<span class="txt">${inline(text)}</span></div>`);
  }
  return out.join('');
}

function page(src) {
  const name = src.split('\n')[0].trim();
  const rest = src.slice(src.indexOf('\n') + 1);
  const parts = {};
  let key = null, buf = [];
  const store = () => { if (key) parts[key] = (parts[key] || '') + buf.join('\n'); buf = []; };
  for (const line of rest.split('\n')) {
    const m = line.match(/^::\s*(pos|head|ladder|cold|hot|refrain|zone|foot|loop|ref)\s*(.*)$/);
    if (m) { store(); key = m[1]; if (m[2].trim()) { parts[key] = m[2].trim(); key = null; } continue; }
    if (key) buf.push(line);
  }
  store();

  const ref = parts.refrain
    ? (() => { const [t, c] = parts.refrain.split('|');
        return `<div class="refrain"><span>${inline(t.trim())}</span>` +
               (c ? `<em>${inline(c.trim())}</em>` : '') + '</div>'; })()
    : '';

  return `<section class="pg">
  <div class="band">
    ${parts.pos ? `<div class="pos">${inline(parts.pos)}</div>` : ''}
    <h1>${inline(parts.head || name)}</h1>
  </div>
  <div class="body">
    <div class="coldcol">
      ${parts.ladder ? `<div class="ladder">${ladder(parts.ladder)}</div>` : ''}
      ${cols(parts.cold || '')}
    </div>
    <div class="hotcol">${(parts.hot || '').split(/\n\s*\n/).filter((x) => x.trim())
      .map((x) => `<p>${inline(x.trim().replace(/\n/g, ' '))}</p>`).join('')}</div>
  </div>
  ${ref}
  ${parts.zone ? `<div class="zone"><span>${inline(parts.zone)}</span></div>` : ''}
  <div class="foot">
    ${parts.ref ? `<div class="beatref">go deeper &nbsp;&rsaquo;&nbsp; ${inline(parts.ref)}</div>` : ''}
    ${parts.foot ? `<div class="cites">${inline(parts.foot)}</div>` : ''}
    ${parts.loop ? `<div class="loop">loop out &nbsp;&rsaquo;&nbsp; ${inline(parts.loop)}</div>` : ''}
  </div>
</section>`;
}

const CSS = `
*{box-sizing:border-box}
@page{size:A4;margin:12mm 12mm 10mm}
body{font-family:"Liberation Sans",Helvetica,Arial,sans-serif;color:#111;margin:0}
/* min-height, NOT height, and nothing is ever clipped. A fixed height with
   overflow:hidden silently ate 23 lines across this board and no measurement of
   the columns could see it, because a stretched flex item always reports a box
   the same size as its container. If a beat is too big it now spills onto a
   second sheet, which is ugly and obvious, and the page-count check below turns
   that into an error. Losing a line the speaker was going to say is the one
   failure a filming board must not have. */
.pg{break-after:page;min-height:245mm;display:flex;flex-direction:column}
.pg:last-child{break-after:auto}
.band{border-bottom:2.5px solid #111;padding-bottom:2.5mm;margin-bottom:4mm}
.pos{font-size:8pt;letter-spacing:.16em;text-transform:uppercase;color:#666;margin-bottom:1.2mm}
h1{font-size:19pt;margin:0;font-weight:700;letter-spacing:-.01em;line-height:1.1}
.body{display:flex;gap:6mm;flex:1}
.coldcol{flex:1.85;font-size:11.2pt;line-height:1.42}
.hotcol{flex:1;background:#f2f0e9;border-left:3px solid #b9a86a;padding:3mm 3.5mm;
        font-size:10.4pt;line-height:1.4}
.hotcol p{margin:0 0 3.4mm;font-style:italic}
.hotcol p:last-child{margin:0}
/* THE HOOK PAGE. Big enough to read at arm's length off a tablet without
   dropping the eye, because this is the only text spoken word for word. */
.hookpg .verbatim{font-family:"Liberation Serif",Georgia,serif;font-size:17pt;
  line-height:1.5;margin:6mm 0 4mm;max-width:none}
.hookpg .verbatim p{margin:0 0 4mm}
.hookmeta{font-size:9pt;color:#666;letter-spacing:.05em;border-top:1px solid #ccc;
  padding-top:2mm;margin-bottom:6mm}
.hookmeta .warn{color:#9c3b2e;font-weight:700;margin-left:4mm}
.hookpg h2{font-size:8.6pt;letter-spacing:.14em;text-transform:uppercase;color:#666;
  margin:0 0 2mm;font-weight:700}
.hookpg .then,.hookpg .must,.hookpg .refs{margin-bottom:5.5mm}
.hookpg ul,.hookpg ol{margin:0;padding-left:5.5mm;font-size:10.6pt;line-height:1.45}
.hookpg li{margin:0 0 1.6mm}
.hookpg li.must{font-weight:600}
.hookpg li.ref,.beatref{font-family:"Liberation Mono",monospace;font-size:9.4pt;color:#444}
.beatref{margin-bottom:1.4mm;color:#5a4a8a}
/* the ladder: eye finds the TAG first, so he knows the move before the words */
.ladder{margin:0 0 4mm}
.rung{display:flex;align-items:baseline;gap:2.4mm;padding:1.5mm 0 1.5mm 0;
      border-bottom:1px solid #e6e4dc;line-height:1.36}
.rung .n{font-size:8pt;color:#aaa;width:4.5mm;flex:none;text-align:right}
.rung .tag{font-size:7.6pt;font-weight:700;letter-spacing:.09em;width:12mm;flex:none;
           padding:.5mm 0;text-align:center;border-radius:1mm;color:#fff;background:#999}
.rung .txt{flex:1;font-size:11pt}
.rung.cont{padding-left:19mm;border-bottom:0;font-size:10.4pt;color:#444}
.rung.say  .tag{background:#2f6f4f}
.rung.ask  .tag{background:#1f5f8b}
.rung.they .tag{background:#8a6d1f}
.rung.show .tag{background:#5a4a8a}
.rung.wait .tag{background:#b0b0b0}
.rung.no   .tag{background:#9c3b2e}
.rung.land .tag{background:#111}
.rung.land{border-bottom:0;border-top:2px solid #111;margin-top:1.5mm;padding-top:2.5mm}
.rung.land .txt{font-weight:700;font-size:12pt}
.frag{margin:0 0 1.6mm}
.gap{height:3mm}
hr{border:0;border-top:1px solid #bbb;margin:2.6mm 0}
table.cold{border-collapse:collapse;width:100%;margin:0 0 2.4mm}
table.cold td{vertical-align:top;padding:.9mm 4mm .9mm 0;line-height:1.34}
/* the label column must not wrap: "reject 1" breaking over two lines makes the
   eye hunt, which is the one thing a board exists to prevent */
table.cold td:first-child{font-weight:600;white-space:nowrap;width:1%}
table.cold td:last-child{width:auto}
code{font-family:"Liberation Mono",monospace;font-size:.9em;background:#eceae2;padding:0 .8mm}
.refrain{border-top:2px solid #111;border-bottom:2px solid #111;padding:2.2mm 0;margin:4mm 0 0;
         display:flex;justify-content:space-between;align-items:baseline}
.refrain span{font-weight:700;font-size:13pt;letter-spacing:.02em;text-transform:uppercase}
.refrain em{font-size:8pt;color:#777;font-style:normal;letter-spacing:.1em}
.zone{border:1.6px dashed #b0b0b0;height:30mm;min-height:16mm;flex-shrink:1;
      margin-top:4mm;position:relative}
.zone span{position:absolute;top:1.8mm;left:2.4mm;font-size:8pt;color:#999;letter-spacing:.06em}
.foot{margin-top:auto;padding-top:2.6mm;border-top:1px solid #ccc;font-size:8.6pt;color:#555}
.cites{font-family:"Liberation Mono",monospace;letter-spacing:.02em}
.loop{margin-top:1.4mm;font-style:italic;color:#333}
`;

(async () => {
  const raw = fs.readFileSync(ABS, 'utf8');
  const blocks = raw.split(/^@@ /m).slice(1);
  const pages = blocks.map((b) => /^HOOK\b/i.test(b.trim()) ? hookPage(b) : page(b)).join('\n');
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(path.basename(OUT, '.pdf'))}</title><style>${CSS}</style></head>
<body>${pages}</body></html>`;
  const browser = await chromium.launch();
  // Measure at the PRINT content width, not the default viewport. A4 less the
  // 12mm side margins is 186mm ~= 703px at 96dpi. Measuring at 1280px let every
  // line wrap less than it does on paper, so pages measured short and two of
  // them spilled a foot onto an extra sheet with no warning.
  const p = await browser.newPage({ viewport: { width: 703, height: 1000 } });
  await p.setContent(html, { waitUntil: 'load' });
  await p.emulateMedia({ media: 'print' });

  // MEASURE the rendered columns rather than estimating from the markup. An
  // over-full page used to print on top of the drawing zone, and no count of
  // rungs predicted it reliably, because a rung wraps or does not depending on
  // its wording. The browser already knows the answer, so ask it.
  // A beat that does not fit spills to a second sheet, so the PDF ends up with
  // more pages than the board has beats. That comparison is exact, needs no
  // layout measurement, and cannot be fooled by flex.
  const tall = await p.evaluate(() => Array.from(document.querySelectorAll('.pg'))
    .map((pg, i) => ({ page: i + 1,
                       head: (pg.querySelector('h1') || {}).textContent || '',
                       mm: Math.round(pg.getBoundingClientRect().height / 3.7795) }))
    .filter((x) => x.mm > 273));
  for (const t of tall) {
    console.warn(`  ! beat ${t.page} "${t.head.slice(0, 42)}" is ${t.mm}mm ` +
                 `(fits: 273mm). It will spill onto a second sheet. Split it.`);
  }

  await p.pdf({ path: OUT, printBackground: true, preferCSSPageSize: true });
  await browser.close();

  const sheets = parseInt(require('child_process')
    .execSync(`pdfinfo ${JSON.stringify(OUT)} | awk '/^Pages/{print $2}'`).toString().trim(), 10);
  const ok = sheets === blocks.length;
  console.log('wrote', OUT, fs.statSync(OUT).size, 'bytes');
  console.log(`  ${blocks.length} beats -> ${sheets} sheets` +
              (ok ? '  ok' : `  MISMATCH, ${sheets - blocks.length} beat(s) overflowed`));
})();
