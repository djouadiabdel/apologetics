const { chromium } = require('/home/djouad/carousels/node_modules/playwright');
const fs = require('fs');
const path = require('path');

const outdir = '/home/djouad/Documents/apologetics/14 - Method & Memory/French';

// -------------------------------------------------------------
// 1. PC SLIDES (16:9 Widescreen)
// -------------------------------------------------------------
const CSS_PC = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

@page {
  size: 320mm 180mm;
  margin: 0;
}

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 0;
  padding: 0;
  background-color: #121110;
  font-family: 'Cormorant Garamond', 'Noto Serif', 'Liberation Serif', Georgia, serif;
  color: #262422;
}

.slide-deck {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
}

.slide {
  width: 320mm;
  height: 180mm;
  max-width: 320mm;
  max-height: 180mm;
  position: relative;
  page-break-after: always;
  break-after: page;
  background: #fdfbf7;
  padding: 9mm 14mm 8mm 14mm;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

@media print {
  body { background: transparent; }
  .slide-deck { padding: 0; gap: 0; }
  .slide { box-shadow: none; }
  .interactive-nav, .interactive-controls { display: none !important; }
}

/* Elegant framing line */
.slide::before {
  content: "";
  position: absolute;
  top: 4mm;
  left: 5mm;
  right: 5mm;
  bottom: 4mm;
  border: 1px solid #e5ded2;
  pointer-events: none;
}
.slide::after {
  content: "";
  position: absolute;
  top: 5mm;
  left: 6mm;
  right: 6mm;
  bottom: 5mm;
  border: 0.5px solid #f0eae0;
  pointer-events: none;
}

/* Header styling */
.slide-header {
  margin-bottom: 7px;
  position: relative;
  z-index: 2;
  border-bottom: 1.5px solid #8b1e1e;
  padding-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.header-left {
  flex: 1;
}

.kicker {
  font-family: 'Inter', sans-serif;
  font-size: 7.5pt;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #8b1e1e;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 2px;
}

.kicker .badge {
  background: #8b1e1e;
  color: #fff;
  padding: 1px 6px;
  border-radius: 2px;
  font-size: 6.8pt;
  letter-spacing: 0.08em;
}

h1.slide-title {
  font-family: 'Cinzel', serif;
  font-size: 16pt;
  font-weight: 700;
  color: #1a1816;
  margin: 0;
  line-height: 1.15;
  letter-spacing: 0.03em;
}

.slide-subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: 10.5pt;
  font-style: italic;
  color: #6b6357;
  margin: 0;
}

.header-right {
  font-family: 'Inter', sans-serif;
  font-size: 8pt;
  color: #8c8273;
  text-align: right;
  font-weight: 500;
  letter-spacing: 0.04em;
}

/* Content Grids */
.grid-2col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  flex: 1;
  min-height: 0;
  position: relative;
  z-index: 2;
}

.grid-3col {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  flex: 1;
  min-height: 0;
  position: relative;
  z-index: 2;
}

/* Cards and Panels */
.card {
  background: #ffffff;
  border: 1px solid #e8e2d8;
  border-radius: 4px;
  padding: 9px 12px;
  box-shadow: 0 1px 4px rgba(60, 50, 40, 0.03);
  display: flex;
  flex-direction: column;
}

.card-title {
  font-family: 'Cinzel', serif;
  font-size: 9.5pt;
  font-weight: 700;
  color: #8b1e1e;
  border-bottom: 1px solid #eedfd8;
  padding-bottom: 3px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-title .tag {
  font-family: 'Inter', sans-serif;
  font-size: 6.5pt;
  font-weight: 600;
  text-transform: uppercase;
  background: #f4ede4;
  color: #6a5948;
  padding: 1px 5px;
  border-radius: 2px;
}

.rubric {
  font-family: 'Cormorant Garamond', serif;
  font-size: 9.2pt;
  color: #8b1e1e;
  font-style: italic;
  margin: 3px 0 1px;
}

.prayer-text {
  font-size: 10.5pt;
  line-height: 1.4;
  color: #262422;
  margin: 0 0 5px;
  text-align: justify;
}

.highlight-joint {
  color: #8b1e1e;
  font-weight: 600;
}

/* Hierarchy column in Choirs slide */
.choir-col {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hierarchy-tag {
  font-family: 'Inter', sans-serif;
  font-size: 6.8pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: #2a2622;
  color: #f7f3ec;
  padding: 2.5px 6px;
  border-radius: 2px;
  text-align: center;
}

.choir-card {
  background: #ffffff;
  border: 1px solid #e7e0d5;
  border-left: 3.5px solid #8b1e1e;
  border-radius: 3px;
  padding: 6px 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.02);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.choir-num {
  font-family: 'Inter', sans-serif;
  font-size: 6.5pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #8b1e1e;
  margin-bottom: 1px;
}

.choir-name {
  font-family: 'Cinzel', serif;
  font-size: 10.5pt;
  font-weight: 700;
  color: #1a1816;
  margin-bottom: 2px;
}

.choir-body {
  font-size: 9.5pt;
  line-height: 1.32;
  color: #2b2826;
  margin: 0;
}

/* Callouts */
.callout-quote {
  background: #fbf7f0;
  border-left: 3px solid #b38a38;
  padding: 7px 10px;
  border-radius: 2px;
  margin: 5px 0;
  font-size: 9.5pt;
  line-height: 1.38;
  color: #3b352b;
}

.callout-quote b {
  color: #1e1a14;
}

.proto-box {
  background: #f3f0e8;
  border: 1px solid #ded6c8;
  padding: 7px 10px;
  border-radius: 3px;
  margin-bottom: 6px;
}

.proto-step {
  display: flex;
  align-items: baseline;
  gap: 7px;
  font-size: 9pt;
  line-height: 1.4;
  color: #2d2924;
  margin-bottom: 3px;
}

.proto-step:last-child { margin-bottom: 0; }

.proto-num {
  font-family: 'Inter', sans-serif;
  font-size: 7pt;
  font-weight: 700;
  background: #8b1e1e;
  color: #ffffff;
  width: 15px;
  height: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Tables */
table.pc-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 9pt;
}

table.pc-table th {
  font-family: 'Inter', sans-serif;
  font-size: 6.8pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b5f50;
  background: #f5efe6;
  padding: 3.5px 6px;
  border-bottom: 1.5px solid #d5c8b5;
  text-align: left;
}

table.pc-table td {
  padding: 3px 6px;
  border-bottom: 1px solid #ebe4d8;
  vertical-align: middle;
}

table.pc-table tr:last-child td {
  border-bottom: none;
}

.cue-num {
  font-family: 'Inter', sans-serif;
  font-size: 7pt;
  font-weight: 700;
  color: #8b1e1e;
  width: 18px;
}

.cue-choir {
  font-family: 'Cinzel', serif;
  font-weight: 700;
  font-size: 8.8pt;
  color: #1a1816;
  width: 95px;
}

.cue-text {
  font-style: italic;
  color: #38342e;
}

/* Grid cards */
.grid-item {
  background: #fff;
  border: 1px solid #e5dfd5;
  border-radius: 3px;
  padding: 4px 7px;
  margin-bottom: 4px;
}

.grid-item .gi-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.gi-line {
  height: 12px;
  border-bottom: 1px dashed #c0b8ac;
  margin-top: 2px;
}

/* Footnote bar */
.slide-footer {
  margin-top: auto;
  padding-top: 3px;
  border-top: 0.5px solid #e8e2d8;
  display: flex;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;
  font-size: 6.5pt;
  color: #9a9082;
  letter-spacing: 0.05em;
  position: relative;
  z-index: 2;
}

/* Interactive Navigation Bar (HTML only) */
.interactive-nav {
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(28, 25, 23, 0.92);
  backdrop-filter: blur(8px);
  border: 1px solid #443c34;
  padding: 6px 14px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  font-family: 'Inter', sans-serif;
  font-size: 9pt;
  color: #ded6c8;
}

.interactive-nav button {
  background: #362f27;
  border: 1px solid #5a4f42;
  color: #f7f3ec;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 8.5pt;
  cursor: pointer;
  transition: all 0.2s;
}

.interactive-nav button:hover {
  background: #8b1e1e;
  border-color: #a82424;
}

.interactive-nav .slide-indicator {
  font-weight: 600;
  color: #d4a373;
}
`;

const SCREEN_1 = `
<div class="slide" id="slide-1">
  <div class="slide-header">
    <div class="header-left">
      <div class="kicker"><span class="badge">ÉDITION PC</span> MÉTHODE & MÉMOIRE · PRODUCTION DU FRANÇAIS CLASSIQUE</div>
      <h1 class="slide-title">Chapelet de saint Michel Archange</h1>
      <p class="slide-subtitle">Neuf salutations aux neuf chœurs des anges · D'après la tradition de l'Abbaye du Mont-Saint-Michel (1751)</p>
    </div>
    <div class="header-right">P. 1 / 8<br>OUVERTURE</div>
  </div>

  <div class="grid-2col">
    <div class="card">
      <div class="card-title">
        <span>1 — Le Texte · Prière d'Ouverture</span>
        <span class="tag">À voix haute</span>
      </div>

      <div class="callout-quote" style="margin-top:0;">
        <b>Consigne de production :</b> Ne rien analyser pour l’instant. Réciter à voix haute, debout ou en marchant. Laisser d'abord la syntaxe et le rythme habiter l'oreille.
      </div>

      <p class="rubric">Signe de la Croix</p>
      <p class="prayer-text">
        Dieu, viens à mon aide. Seigneur, à notre secours.<br>
        Gloire au Père et au Fils et au Saint Esprit, comme il était au commencement, maintenant et toujours, pour les siècles des siècles. Amen.
      </p>

      <p class="rubric">Sur le pendant (les 4 premiers grains) :</p>
      <p class="prayer-text" style="font-size: 9.8pt; line-height: 1.35;">
        Quatre <i>Notre Père</i> en l'honneur des quatre Archanges protecteurs : <b>saint Michel</b>, <b>saint Gabriel</b>, <b>saint Raphaël</b>, et notre <b>saint Ange Gardien</b>.
      </p>

      <p class="rubric">Sur la boucle (pour chaque chœur) :</p>
      <p class="prayer-text" style="font-size: 9.8pt; line-height: 1.35; margin-bottom: 0;">
        Un <i>Notre Père</i>, trois <i>Je vous salue Marie</i>, puis la salutation propre au chœur céleste invoqué.
      </p>
    </div>

    <div class="card">
      <div class="card-title">
        <span>Pourquoi ce texte pour le français ?</span>
        <span class="tag">Architecture B2 → C1</span>
      </div>

      <p class="prayer-text" style="font-size: 9.8pt; line-height: 1.38; margin-bottom: 5px;">
        Neuf répétitions consécutives de <b>que + subjonctif optatif</b>, sujet placé invariablement devant le verbe. C'est la construction charnière pour acquérir l'autorité syntaxique du français classique.
      </p>

      <div class="proto-box" style="padding: 6px 9px; margin-bottom: 5px;">
        <div style="font-family: 'Inter', sans-serif; font-size: 7pt; font-weight: 700; color: #8b1e1e; text-transform: uppercase; margin-bottom: 3px;">
          Trois deltas syntaxiques majeurs
        </div>
        <div style="font-size: 8.8pt; line-height: 1.35; color: #2d2924;">
          • <b>Répétition du coordonnant :</b> <i>d'abandonner… et <b>de</b> courir</i>, <i>de dominer… et <b>de</b> nous corriger</i>, <i>dans la foi et <b>dans</b> les bonnes œuvres</i>.<br>
          • <b>Maintien du subjonctif après <i>mais</i> :</b> <i>ne nous laisse pas… mais <b>qu'il</b> nous délivre</i>.<br>
          • <b>Régimes stricts des verbes :</b> <i>répandre <b>dans</b></i>, <i>succomber <b>à</b></i>, <i>délivrer <b>du</b></i>, <i>protéger <b>contre</b></i>.
        </div>
      </div>

      <div style="background: #faf7f2; border: 1px solid #ebd8ce; border-radius: 3px; padding: 5px 8px; margin-top: auto;">
        <div style="font-family: 'Inter', sans-serif; font-size: 6.8pt; font-weight: 700; color: #8b1e1e; text-transform: uppercase; margin-bottom: 2px;">
          Structure des Neuf Chœurs (Denys l'Aréopagite / S. Thomas)
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 8pt; color: #40382e;">
          <span><b>I. Supérieure :</b> Séraphins · Chérubins · Trônes</span>
          <span><b>II. Médiane :</b> Dominations · Puissances · Vertus</span>
          <span><b>III. Inférieure :</b> Principautés · Archanges · Anges</span>
        </div>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <span>METHOD & MEMORY · APOLOGETICS WORKSHOP</span>
    <span>CHAPELET DE SAINT MICHEL — ÉDITION MONITEUR PC</span>
  </div>
</div>
`;

const SCREEN_2 = `
<div class="slide" id="slide-2">
  <div class="slide-header">
    <div class="header-left">
      <div class="kicker"><span class="badge">SECTION 1</span> LE TEXTE INTÉGRAL · LES NEUF SALUTATIONS</div>
      <h1 class="slide-title">Les Neuf Chœurs des Esprits Bienheureux</h1>
      <p class="slide-subtitle">Formule : « Par l’intercession de saint Michel et du Chœur céleste des [Chœur], que le Seigneur [Demande]. »</p>
    </div>
    <div class="header-right">P. 2 / 8<br>SALUTATIONS</div>
  </div>

  <div class="grid-3col">
    <!-- COLONNE 1 -->
    <div class="choir-col">
      <div class="hierarchy-tag">I. Hiérarchie Supérieure · L'Amour & La Présence</div>

      <div class="choir-card">
        <div class="choir-num">1er Chœur</div>
        <div class="choir-name">Séraphins</div>
        <p class="choir-body">
          Par l’intercession de saint Michel et du Chœur céleste des <b>Séraphins</b>, que le Seigneur <span class="highlight-joint">nous rende</span> dignes d’être enflammés d’une parfaite charité.
        </p>
      </div>

      <div class="choir-card">
        <div class="choir-num">2e Chœur</div>
        <div class="choir-name">Chérubins</div>
        <p class="choir-body">
          Par l’intercession de saint Michel et du Chœur céleste des <b>Chérubins</b>, que le Seigneur <span class="highlight-joint">nous fasse la grâce</span> d’abandonner la voie du péché et <b>de</b> courir dans celle de la perfection chrétienne.
        </p>
      </div>

      <div class="choir-card">
        <div class="choir-num">3e Chœur</div>
        <div class="choir-name">Trônes</div>
        <p class="choir-body">
          Par l’intercession de saint Michel et du Chœur céleste des <b>Trônes</b>, que le Seigneur <span class="highlight-joint">répande dans</span> nos cœurs l’esprit d’une véritable et sincère humilité.
        </p>
      </div>
    </div>

    <!-- COLONNE 2 -->
    <div class="choir-col">
      <div class="hierarchy-tag">II. Hiérarchie Médiane · Le Gouvernement & Le Combat</div>

      <div class="choir-card">
        <div class="choir-num">4e Chœur</div>
        <div class="choir-name">Dominations</div>
        <p class="choir-body">
          Par l’intercession de saint Michel et du Chœur céleste des <b>Dominations</b>, que le Seigneur <span class="highlight-joint">nous fasse la grâce</span> de dominer nos sens et <b>de</b> nous corriger dans nos mauvaises passions.
        </p>
      </div>

      <div class="choir-card">
        <div class="choir-num">5e Chœur</div>
        <div class="choir-name">Puissances</div>
        <p class="choir-body">
          Par l’intercession de saint Michel et du Chœur céleste des <b>Puissances</b>, que le Seigneur <span class="highlight-joint">daigne protéger</span> nos âmes <b>contre</b> les embûches et les tentations du démon.
        </p>
      </div>

      <div class="choir-card">
        <div class="choir-num">6e Chœur</div>
        <div class="choir-name">Vertus Célestes</div>
        <p class="choir-body">
          Par l’intercession de saint Michel et du Chœur céleste des <b>Vertus Célestes</b>, que le Seigneur ne nous laisse pas succomber à la tentation, mais <span class="highlight-joint">qu’il nous délivre</span> du mal.
        </p>
      </div>
    </div>

    <!-- COLONNE 3 -->
    <div class="choir-col">
      <div class="hierarchy-tag">III. Hiérarchie Inférieure · La Conduite des Hommes</div>

      <div class="choir-card">
        <div class="choir-num">7e Chœur</div>
        <div class="choir-name">Principautés</div>
        <p class="choir-body">
          Par l’intercession de saint Michel et du Chœur céleste des <b>Principautés</b>, que le Seigneur <span class="highlight-joint">remplisse</span> nos âmes de l’esprit d’une véritable et sincère obéissance.
        </p>
      </div>

      <div class="choir-card">
        <div class="choir-num">8e Chœur</div>
        <div class="choir-name">Archanges</div>
        <p class="choir-body">
          Par l’intercession de saint Michel et du Chœur céleste des <b>Archanges</b>, que le Seigneur <span class="highlight-joint">nous accorde</span> le don de la persévérance dans la foi et <b>dans</b> les bonnes œuvres, pour arriver à la gloire du Paradis.
        </p>
      </div>

      <div class="choir-card">
        <div class="choir-num">9e Chœur</div>
        <div class="choir-name">Tous les Anges</div>
        <p class="choir-body">
          Par l’intercession de saint Michel et du Chœur céleste de <b>tous les Anges</b>, que le Seigneur <span class="highlight-joint">daigne nous accorder</span> d’être gardés par eux pendant cette vie mortelle, pour être conduits ensuite au ciel.
        </p>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <span>NOTER : DOMINATIONS → PUISSANCES → VERTUS (ORDRE DU TEXTE DE 1751)</span>
    <span>PARCOURIR TOUT LE CYCLE À VOIX HAUTE AVANT TOUTE TENTATIVE DE MÉMORISATION</span>
  </div>
</div>
`;

const SCREEN_3 = `
<div class="slide" id="slide-3">
  <div class="slide-header">
    <div class="header-left">
      <div class="kicker"><span class="badge">SECTION 1 (FIN)</span> CLÔTURE LITURGIQUE</div>
      <h1 class="slide-title">L'Antienne, le Verset et l'Oraison</h1>
      <p class="slide-subtitle">Le modèle de la grande période oratoire française du XVIIe et XVIIIe siècle</p>
    </div>
    <div class="header-right">P. 3 / 8<br>ORAISON</div>
  </div>

  <div class="grid-2col">
    <!-- COLONNE GAUCHE : ANTIENNE & VERSET -->
    <div class="card">
      <div class="card-title">
        <span>Antienne à Saint Michel</span>
        <span class="tag">Invocatoire</span>
      </div>

      <p class="prayer-text" style="font-size: 10.5pt; line-height: 1.45;">
        Très glorieux saint Michel, chef et prince des Armées célestes, gardien fidèle des âmes, vainqueur des esprits rebelles, favori de la maison de Dieu, notre admirable guide après Jésus-Christ ;
      </p>
      <p class="prayer-text" style="font-size: 10.5pt; line-height: 1.45;">
        vous, dont l’excellence et la vertu sont suréminentes : <b>daignez nous délivrer de tous les maux</b>, nous tous qui recourons à vous avec confiance ; et faites, par votre incomparable protection, que nous avancions chaque jour dans la fidélité à servir Dieu.
      </p>

      <div style="margin-top: auto; background: #faf6f0; border-left: 3px solid #8b1e1e; padding: 6px 9px; border-radius: 2px;">
        <div style="font-size: 10pt; line-height: 1.4; color: #2a2520;">
          <b style="color: #8b1e1e;">℣.</b> Priez pour nous, ô bienheureux saint Michel, Prince de l’Église de Jésus-Christ.<br>
          <b style="color: #8b1e1e;">℞.</b> Afin que nous puissions être dignes de ses promesses.
        </div>
      </div>
    </div>

    <!-- COLONNE DROITE : ORAISON & ANALYSE RHÉTORIQUE -->
    <div class="card">
      <div class="card-title">
        <span>Oraison Finale</span>
        <span class="tag">Collecte solennelle</span>
      </div>

      <p class="prayer-text" style="font-size: 10.5pt; line-height: 1.42;">
        Dieu tout-puissant et éternel, qui par un prodige de bonté et de miséricorde pour le salut commun des hommes, avez choisi pour Prince de votre Église le très glorieux Archange saint Michel ;
      </p>
      <p class="prayer-text" style="font-size: 10.5pt; line-height: 1.42;">
        <b>rendez-nous dignes</b>, nous vous en prions, d’être délivrés, par sa bienveillante protection, de tous nos ennemis, afin qu’à notre mort aucun d’eux ne puisse nous inquiéter ; <b>mais qu’il nous soit donné</b> d’être introduits par lui en la présence de votre puissante et auguste Majesté.
      </p>
      <p class="prayer-text" style="font-size: 10pt; color: #5a5245; font-style: italic; margin-bottom: 5px;">
        Par les mérites de Jésus-Christ, notre Seigneur. Amen.
      </p>

      <div class="callout-quote" style="margin: 0; font-size: 8.8pt; line-height: 1.34;">
        <b>Analyse de la charpente :</b> Remarquer la haute tenue de la période latine française : <i>Dieu… qui par [complément] avez choisi… rendez-nous dignes… afin qu'à notre mort… mais qu'il nous soit donné…</i>. Aucune rupture syntaxique, chaque proposition s'emboîte sans à-coup.
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <span>TEXTE SOURCE : TRADITION DE L'ABBAYE DU MONT-SAINT-MICHEL</span>
    <span>FIN DE LA SECTION 1 — FERMER LE TEXTE AVANT DE PASSER AUX INDICES</span>
  </div>
</div>
`;

const SCREEN_4 = `
<div class="slide" id="slide-4">
  <div class="slide-header">
    <div class="header-left">
      <div class="kicker"><span class="badge">SECTION 2</span> MÉTHODE FRANKLIN · RECONSTRUCTION SÉMANTIQUE</div>
      <h1 class="slide-title">Les Neuf Indices & La Loi de l'Écart</h1>
      <p class="slide-subtitle">Le sens en anglais seulement. Jamais la formulation. Reconstruire à froid après 48h.</p>
    </div>
    <div class="header-right">P. 4 / 8<br>INDICES</div>
  </div>

  <div class="grid-2col">
    <!-- COLONNE GAUCHE : TABLEAU DES INDICES -->
    <div class="card">
      <div class="card-title">
        <span>Gabarit & Indices Sémantiques</span>
        <span class="tag">Sens pur</span>
      </div>

      <div style="background: #f7f3eb; border: 1px solid #dfd7c8; padding: 4px 7px; border-radius: 3px; font-size: 8.8pt; margin-bottom: 5px;">
        <i>« Par l’intercession de saint Michel et du Chœur céleste des <b>[Chœur]</b>, que le Seigneur <b>[Demande]</b>. »</i>
      </div>

      <table class="pc-table">
        <thead>
          <tr>
            <th>N°</th>
            <th>Chœur</th>
            <th>Indice sémantique (Sens nu)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="cue-num">1</td><td class="cue-choir">Séraphins</td><td class="cue-text">worthy to burn, perfect love</td></tr>
          <tr><td class="cue-num">2</td><td class="cue-choir">Chérubins</td><td class="cue-text">quit sin’s road, run the other one</td></tr>
          <tr><td class="cue-num">3</td><td class="cue-choir">Trônes</td><td class="cue-text">pour into hearts: true humility</td></tr>
          <tr><td class="cue-num">4</td><td class="cue-choir">Dominations</td><td class="cue-text">master the senses, correct the passions</td></tr>
          <tr><td class="cue-num">5</td><td class="cue-choir">Puissances</td><td class="cue-text">shield souls: traps, the devil’s tempting</td></tr>
          <tr><td class="cue-num">6</td><td class="cue-choir">Vertus</td><td class="cue-text">not to fall to temptation, deliver from evil</td></tr>
          <tr><td class="cue-num">7</td><td class="cue-choir">Principautés</td><td class="cue-text">fill souls: true obedience</td></tr>
          <tr><td class="cue-num">8</td><td class="cue-choir">Archanges</td><td class="cue-text">perseverance, faith and works, reach the glory</td></tr>
          <tr><td class="cue-num">9</td><td class="cue-choir">tous les Anges</td><td class="cue-text">guarded in this mortal life, led after to eternal glory</td></tr>
        </tbody>
      </table>
    </div>

    <!-- COLONNE DROITE : PROTOCOLE & PRINCIPE -->
    <div class="card">
      <div class="card-title">
        <span>Le Protocole de Reconstruction</span>
        <span class="tag">4 Étapes</span>
      </div>

      <div class="proto-box">
        <div class="proto-step">
          <span class="proto-num">1</span>
          <span><b>Lis les indices</b> attentivement, puis <b>pose le document deux jours entiers</b>.</span>
        </div>
        <div class="proto-step">
          <span class="proto-num">2</span>
          <span><b>Reconstruis à froid, à voix haute</b>, sans rien regarder.</span>
        </div>
        <div class="proto-step">
          <span class="proto-num">3</span>
          <span><b>Compare</b> immédiatement au texte intégral de la section 1.</span>
        </div>
        <div class="proto-step">
          <span class="proto-num">4</span>
          <span><b>Trie chaque écart</b> dans l'une des deux piles (Section 6).</span>
        </div>
      </div>

      <div class="card-title" style="margin-top: 3px;">
        <span>L'Écart est la Leçon</span>
        <span class="tag">Règle d'or</span>
      </div>

      <div class="callout-quote" style="font-size: 9.3pt; line-height: 1.38; margin: 0;">
        Ta version ne sera pas le texte. <b>C’est voulu.</b> Un indice qui déterminerait le texte ne serait plus un indice, ce serait le texte.<br><br>
        <b>L’écart est la leçon :</b> tu produiras spontanément <i>« dignes de brûler d’un amour parfait »</i> là où le texte dit <i>« dignes d’être enflammés d’une parfaite charité »</i>.<br>
        Quatre choix que l’indice ne fixait pas, quatre constructions que tu n’es pas allé chercher. <b>C’est exactement ça qu’on récolte.</b>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <span>NE JAMAIS REGARDER LA FORMULATION FRANÇAISE PENDANT LA RECONSTRUCTION</span>
    <span>L'ANCRAGE MNÉSIQUE SE FAIT PAR LE RETRAIT, PAS PAR LA RELECTURE</span>
  </div>
</div>
`;

const SCREEN_5 = `
<div class="slide" id="slide-5">
  <div class="slide-header">
    <div class="header-left">
      <div class="kicker"><span class="badge">SECTION 3</span> LES GRILLES D'ENTRAÎNEMENT · À VOIX HAUTE</div>
      <h1 class="slide-title">Rappel Échelonné : Grille A & Grille B</h1>
      <p class="slide-subtitle">Réciter la formule entière sans s'arrêter. Jamais de récitation silencieuse.</p>
    </div>
    <div class="header-right">P. 5 / 8<br>GRILLES</div>
  </div>

  <div class="grid-2col">
    <!-- COLONNE GAUCHE : GRILLE A -->
    <div class="card">
      <div class="card-title">
        <span>Grille A — Le Chœur est fourni</span>
        <span class="tag">Palier 1 (Guidé)</span>
      </div>
      <p style="font-size: 8.2pt; color: #6a6254; margin: 0 0 4px; font-style: italic;">
        Le nom du chœur est l'amorce. Formuler oralement toute la salutation jusqu'au point final.
      </p>

      <div class="grid-item">
        <div class="gi-header"><span><b>1 · Séraphins</b></span> <span style="font-size:7.2pt; color:#8b1e1e;">rendre dignes / enflammés</span></div>
        <div class="gi-line"></div>
      </div>
      <div class="grid-item">
        <div class="gi-header"><span><b>2 · Chérubins</b></span> <span style="font-size:7.2pt; color:#8b1e1e;">voie du péché / perfection</span></div>
        <div class="gi-line"></div>
      </div>
      <div class="grid-item">
        <div class="gi-header"><span><b>3 · Trônes</b></span> <span style="font-size:7.2pt; color:#8b1e1e;">répande dans / humilité</span></div>
        <div class="gi-line"></div>
      </div>
      <div class="grid-item">
        <div class="gi-header"><span><b>4 · Dominations</b></span> <span style="font-size:7.2pt; color:#8b1e1e;">dominer sens / passions</span></div>
        <div class="gi-line"></div>
      </div>
      <div class="grid-item">
        <div class="gi-header"><span><b>5 · Puissances</b></span> <span style="font-size:7.2pt; color:#8b1e1e;">protéger âmes contre</span></div>
        <div class="gi-line"></div>
      </div>
      <div class="grid-item">
        <div class="gi-header"><span><b>6 · Vertus Célestes</b></span> <span style="font-size:7.2pt; color:#8b1e1e;">succomber à / mais qu'il</span></div>
        <div class="gi-line"></div>
      </div>
      <div class="grid-item">
        <div class="gi-header"><span><b>7 · Principautés</b></span> <span style="font-size:7.2pt; color:#8b1e1e;">remplisse âmes / obéissance</span></div>
        <div class="gi-line"></div>
      </div>
      <div class="grid-item">
        <div class="gi-header"><span><b>8 · Archanges</b></span> <span style="font-size:7.2pt; color:#8b1e1e;">persévérance foi / Paradis</span></div>
        <div class="gi-line"></div>
      </div>
      <div class="grid-item" style="margin-bottom:0;">
        <div class="gi-header"><span><b>9 · Tous les Anges</b></span> <span style="font-size:7.2pt; color:#8b1e1e;">gardés vie mortelle / ciel</span></div>
        <div class="gi-line"></div>
      </div>
    </div>

    <!-- COLONNE DROITE : GRILLE B -->
    <div class="card">
      <div class="card-title">
        <span>Grille B — Rien n'est donné</span>
        <span class="tag">Palier 2 (Autonomie)</span>
      </div>
      <p style="font-size: 8.2pt; color: #6a6254; margin: 0 0 4px; font-style: italic;">
        Restitution libre totale. Retrouver l'ordre des 9 chœurs ET la demande correspondante.
      </p>

      <div class="grid-item"><div class="gi-header"><span><b>1.</b> [ Chœur ? ]</span> <span>Demande complète…</span></div><div class="gi-line"></div></div>
      <div class="grid-item"><div class="gi-header"><span><b>2.</b> [ Chœur ? ]</span> <span>Demande complète…</span></div><div class="gi-line"></div></div>
      <div class="grid-item"><div class="gi-header"><span><b>3.</b> [ Chœur ? ]</span> <span>Demande complète…</span></div><div class="gi-line"></div></div>
      <div class="grid-item"><div class="gi-header"><span><b>4.</b> [ Chœur ? ]</span> <span>Demande complète…</span></div><div class="gi-line"></div></div>
      <div class="grid-item"><div class="gi-header"><span><b>5.</b> [ Chœur ? ]</span> <span>Demande complète…</span></div><div class="gi-line"></div></div>
      <div class="grid-item"><div class="gi-header"><span><b>6.</b> [ Chœur ? ]</span> <span>Demande complète…</span></div><div class="gi-line"></div></div>
      <div class="grid-item"><div class="gi-header"><span><b>7.</b> [ Chœur ? ]</span> <span>Demande complète…</span></div><div class="gi-line"></div></div>
      <div class="grid-item"><div class="gi-header"><span><b>8.</b> [ Chœur ? ]</span> <span>Demande complète…</span></div><div class="gi-line"></div></div>
      <div class="grid-item" style="margin-bottom:0;"><div class="gi-header"><span><b>9.</b> [ Chœur ? ]</span> <span>Demande complète…</span></div><div class="gi-line"></div></div>
    </div>
  </div>

  <div class="slide-footer">
    <span>LA VOIX DOIT SORTIR NETTE ET CONTINUE SANS HÉSITATION SUR LES PRÉPOSITIONS</span>
    <span>SI UN BLOC BUTTE SUR LA GRILLE B, ALLER DIRECTEMENT À LA SECTION 4 (POINTS DURS)</span>
  </div>
</div>
`;

const SCREEN_6 = `
<div class="slide" id="slide-6">
  <div class="slide-header">
    <div class="header-left">
      <div class="kicker"><span class="badge">SECTION 4</span> ENCODAGE MNÉSIQUE DÉLIBÉRÉ</div>
      <h1 class="slide-title">Les Cinq Points Durs & La Résolution des Paires</h1>
      <p class="slide-subtitle">Quatre chœurs sont transparents (auto-liés). Les cinq autres constituent tout le travail.</p>
    </div>
    <div class="header-right">P. 6 / 8<br>POINTS DURS</div>
  </div>

  <!-- BANDEAU HAUT : LES 4 TRANSPARENTS -->
  <div style="background: #f7f3eb; border: 1px solid #ded5c5; border-radius: 3px; padding: 4px 9px; margin-bottom: 7px; z-index: 2;">
    <div style="font-family: 'Inter', sans-serif; font-size: 6.8pt; font-weight: 700; color: #8b1e1e; text-transform: uppercase;">
      Les 4 chœurs auto-indexés (Ne rien leur donner, ils se lient tout seuls) :
    </div>
    <div style="font-size: 8.6pt; color: #3d372e; display: flex; justify-content: space-between; margin-top: 2px;">
      <span><b>Dominations</b> → <i>dominer</i></span>
      <span><b>Séraphins</b> → <i>enflammés (brûler)</i></span>
      <span><b>Puissances</b> → <i>protéger</i></span>
      <span><b>Anges</b> → <i>gardés par eux</i></span>
      <span><b>Vertus</b> → <i>fin du Notre Père (délivre du mal)</i></span>
    </div>
  </div>

  <div class="grid-2col">
    <!-- COLONNE GAUCHE : 3 APPARIEMENTS DÉLIBÉRÉS -->
    <div class="card">
      <div class="card-title">
        <span>Trois Appariements Non-Immédiats</span>
        <span class="tag">Crochets sémantiques</span>
      </div>

      <div style="margin-bottom: 5px;">
        <div style="font-family: 'Inter', sans-serif; font-size: 7.8pt; font-weight: 700; color: #8b1e1e;">
          1. Chérubins → Quitter la voie du péché
        </div>
        <div style="font-size: 8.8pt; line-height: 1.33; color: #2d2924;">
          L’épée de feu à la porte d’Éden (Gn 3, 24). Le chérubin est posté sur la route. <b>Seul chœur rattaché bibliquement à une porte et à un chemin.</b> Tu n'abandonnes pas la route, on t'en fait sortir.
        </div>
      </div>

      <div style="margin-bottom: 5px;">
        <div style="font-family: 'Inter', sans-serif; font-size: 7.8pt; font-weight: 700; color: #8b1e1e;">
          2. Trônes → Humilité
        </div>
        <div style="font-size: 8.8pt; line-height: 1.33; color: #2d2924;">
          Un trône est ce sur quoi on s’assoit : l'élément le plus bas de la pièce. <b>Le 3e chœur, l'un des plus hauts, reçoit la vertu la plus basse.</b> C’est l’inversion paradoxale qui sert de crochet.
        </div>
      </div>

      <div>
        <div style="font-family: 'Inter', sans-serif; font-size: 7.8pt; font-weight: 700; color: #8b1e1e;">
          3. Archanges → Persévérance
        </div>
        <div style="font-size: 8.8pt; line-height: 1.33; color: #2d2924;">
          Gabriel annonce et ça aboutit. Raphaël fait l'aller-retour avec Tobie. Michel combat jusqu'à la fin. <b>L'archange est celui qui termine la mission.</b>
        </div>
      </div>
    </div>

    <!-- COLONNE DROITE : DEUX PAIRES EN RISQUE DE FUSION -->
    <div class="card">
      <div class="card-title">
        <span>Deux Paires en Risque de Confusion</span>
        <span class="tag">Règle de l'unique</span>
      </div>

      <div class="callout-quote" style="margin-top: 0; padding: 4px 8px; font-size: 8.3pt;">
        <b>Règle anti-interférence :</b> Surapprendre <u>un seul membre</u> de la paire. L’autre se prend par élimination. Deux images concurrentes doublent le risque de parasite.
      </div>

      <div style="margin-bottom: 5px; background: #faf7f2; border: 1px solid #e7ded0; padding: 5px 8px; border-radius: 2px;">
        <div style="font-family: 'Inter', sans-serif; font-size: 7.6pt; font-weight: 700; color: #8b1e1e;">
          Paire 3 & 7 — « l’esprit d’une véritable et sincère ___ »
        </div>
        <div style="font-size: 8.6pt; line-height: 1.32; color: #2c2823;">
          Verrouille le <b>7</b> en chaîne : <b>Prince → commande → obéissance → remplit ses rangs (<i>remplisse</i>) → les âmes</b>.<br>
          Le <b>3</b> est mécaniquement le reste : <i>répande, cœurs, humilité</i>.
        </div>
      </div>

      <div style="background: #faf7f2; border: 1px solid #e7ded0; padding: 5px 8px; border-radius: 2px;">
        <div style="font-family: 'Inter', sans-serif; font-size: 7.6pt; font-weight: 700; color: #8b1e1e;">
          Paire 2 & 4 — « nous fasse la grâce de… »
        </div>
        <div style="font-size: 8.6pt; line-height: 1.32; color: #2c2823;">
          Verrouille le <b>4</b> : <b>Dominations → dominer</b> (verbe déjà dans le nom).<br>
          Le <b>2</b> est le reste (déjà tenu par le chérubin sur la route).<br>
          <i>« nous fasse la grâce de »</i> est une pièce de stock coulée une fois, réutilisée aux 2 endroits.
        </div>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <span>PAS DE MÉMOIRE BRUTE SANS CROCHET : L'ASSOCIATION DOIT ÊTRE STRUCTURÉE</span>
    <span>L'ÉLIMINATION LOGIQUE ÉCONOMISE LA MOITIÉ DE LA CHARGE COGNITIVE</span>
  </div>
</div>
`;

const SCREEN_7 = `
<div class="slide" id="slide-7">
  <div class="slide-header">
    <div class="header-left">
      <div class="kicker"><span class="badge">SECTION 5</span> LA CONSTRUCTION · ANALYSE SYNTAXIQUE</div>
      <h1 class="slide-title">Les Huit Verbes Optatifs & Le Régime Prépositionnel</h1>
      <p class="slide-subtitle">Neuf répétitions de que + subjonctif optatif (sujet invariable devant le verbe)</p>
    </div>
    <div class="header-right">P. 7 / 8<br>GRAMMAIRE</div>
  </div>

  <div class="grid-2col">
    <!-- COLONNE GAUCHE : TABLEAU DES VERBES -->
    <div class="card">
      <div class="card-title">
        <span>Les Huit Verbes au Subjonctif</span>
        <span class="tag">Optatif</span>
      </div>

      <table class="pc-table">
        <thead>
          <tr>
            <th>Infinitif</th>
            <th>Formulation exacte dans la prière</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><b>rendre</b></td><td>que le Seigneur nous <b>rende</b></td><td style="font-size:7pt; color:#888;">3e gr.</td></tr>
          <tr><td><b>faire</b></td><td>que le Seigneur nous <b>fasse</b> la grâce</td><td style="font-size:7pt; color:#8b1e1e; font-weight:600;">Irrégulier</td></tr>
          <tr><td><b>répandre</b></td><td>que le Seigneur <b>répande</b></td><td style="font-size:7pt; color:#888;">3e gr.</td></tr>
          <tr><td><b>daigner</b></td><td>que le Seigneur <b>daigne</b></td><td style="font-size:7pt; color:#888;">1er gr.</td></tr>
          <tr><td><b>laisser</b></td><td>que le Seigneur ne nous <b>laisse</b> pas</td><td style="font-size:7pt; color:#888;">Négatif</td></tr>
          <tr><td><b>délivrer</b></td><td>… mais <b>qu’il</b> nous <b>délivre</b></td><td style="font-size:7pt; color:#8b1e1e; font-weight:600;">Reprise qu'</td></tr>
          <tr><td><b>remplir</b></td><td>que le Seigneur <b>remplisse</b></td><td style="font-size:7pt; color:#888;">2e gr. (-iss-)</td></tr>
          <tr><td><b>accorder</b></td><td>que le Seigneur nous <b>accorde</b></td><td style="font-size:7pt; color:#888;">1er gr.</td></tr>
        </tbody>
      </table>

      <div class="callout-quote" style="margin: 5px 0 0; font-size: 8.6pt; line-height: 1.34;">
        <b>Rappel Pascalien :</b> Même schéma optatif que dans le Notre Père : <i>que ton règne vienne, que ta volonté soit faite</i>.
      </div>
    </div>

    <!-- COLONNE DROITE : LES 4 QUESTIONS D'ÉLUCIDATION -->
    <div class="card">
      <div class="card-title">
        <span>Quatre Questions d'Élucidation Syntaxique</span>
        <span class="tag">Delta Test</span>
      </div>

      <div style="font-size: 8.8pt; line-height: 1.32; color: #282420; display:flex; flex-direction:column; gap:4px;">
        <div style="background:#faf7f2; padding:4px 7px; border-radius:2px; border-left:2.5px solid #8b1e1e;">
          <b>1. Le seul verbe qui ne ressemble pas au présent :</b><br>
          <b>Faire → fasse</b>. Les 7 autres verbes partagent leur radical sonore avec l'indicatif (<i>rend, répand, daigne, laisse, délivre, remplit, accorde</i>).
        </div>

        <div style="background:#faf7f2; padding:4px 7px; border-radius:2px; border-left:2.5px solid #8b1e1e;">
          <b>2. Pourquoi le <i>qu'</i> revient-il après <i>mais</i> (6e chœur) ?</b><br>
          <i>« mais <b>qu’il</b> nous délivre »</i> : Il maintient la dépendance optative. Sans lui, la proposition devient indépendante et le verbe bascule à l'indicatif.
        </div>

        <div style="background:#faf7f2; padding:4px 7px; border-radius:2px; border-left:2.5px solid #8b1e1e;">
          <b>3. Le mot répété devant le second élément coordonné :</b><br>
          Dans les liaisons par <i>et</i> (2, 4, 8, antienne), <b>la préposition se répète toujours</b> : <i>d'abandonner… et <b>de</b> courir</i>, <i>dans la foi et <b>dans</b> les œuvres</i>.
        </div>

        <div style="background:#faf7f2; padding:4px 7px; border-radius:2px; border-left:2.5px solid #8b1e1e;">
          <b>4. Régime prépositionnel strict :</b><br>
          <i>protéger <b>contre</b></i> · <i>succomber <b>à</b></i> · <i>délivrer <b>du</b></i> · <i>remplir <b>de</b></i> · <i>répandre <b>dans</b></i> · <i>accorder <b>de</b></i>.
        </div>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <span>LE COORDONNANT DOUBLÉ EST LA MARQUE D'UN FRANÇAIS TENU ET NON TRADUIT</span>
    <span>REPÉRER CHAQUE DIFFÉRENCE ENTRE LA PRODUCTION SPONTANÉE ET LE MODÈLE</span>
  </div>
</div>
`;

const SCREEN_8 = `
<div class="slide" id="slide-8">
  <div class="slide-header">
    <div class="header-left">
      <div class="kicker"><span class="badge">SECTION 6</span> LE CARNET · RÈGLE DES CINQ & TRI DES ÉCARTS</div>
      <h1 class="slide-title">Cadence d'Acquisition & Triage des Deltas</h1>
      <p class="slide-subtitle">Chaque passe à voix haute. Règle des cinq par bloc sur sept jours.</p>
    </div>
    <div class="header-right">P. 8 / 8<br>TRIAGE</div>
  </div>

  <div class="grid-2col">
    <!-- COLONNE GAUCHE : LE CALENDRIER DES PASSES -->
    <div class="card">
      <div class="card-title">
        <span>Le Calendrier des Passes (Règle des 5)</span>
        <span class="tag">Cadence</span>
      </div>

      <table class="pc-table" style="font-size: 8.8pt;">
        <thead>
          <tr>
            <th>Bloc de récitation</th>
            <th>J1 (5 passes)</th>
            <th>J2 (6 passes)</th>
            <th>J3–7 (1/j)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>1 · Séraphins · Chérubins · Trônes</b></td>
            <td>J1 [ ][ ][ ][ ][ ]</td>
            <td>J2 [ ][ ][ ][ ][ ][ ]</td>
            <td>J3-7 [ ][ ][ ][ ][ ]</td>
          </tr>
          <tr>
            <td><b>2 · Dominations · Puissances · Vertus</b></td>
            <td>J1 [ ][ ][ ][ ][ ]</td>
            <td>J2 [ ][ ][ ][ ][ ][ ]</td>
            <td>J3-7 [ ][ ][ ][ ][ ]</td>
          </tr>
          <tr>
            <td><b>3 · Principautés · Archanges · Anges</b></td>
            <td>J1 [ ][ ][ ][ ][ ]</td>
            <td>J2 [ ][ ][ ][ ][ ][ ]</td>
            <td>J3-7 [ ][ ][ ][ ][ ]</td>
          </tr>
          <tr>
            <td><b>4 · Antienne + Oraison</b></td>
            <td>J1 [ ][ ][ ][ ][ ]</td>
            <td>J2 [ ][ ][ ][ ][ ][ ]</td>
            <td>J3-7 [ ][ ][ ][ ][ ]</td>
          </tr>
        </tbody>
      </table>

      <div class="callout-quote" style="margin: 7px 0 0; font-size: 8.8pt; line-height: 1.35;">
        <b>Jour 2 est le jour décisif :</b> C’est le jour le plus lourd du calendrier, celui qu’on est tenté de sauter et c’est précisément celui qui ancre le souvenir.<br>
        Alterner : certaines passes depuis le 1er chœur, certaines à froid sur le bloc du jour.
      </div>
    </div>

    <!-- COLONNE DROITE : TRI DES ÉCARTS (PILES A & B) -->
    <div class="card">
      <div class="card-title">
        <span>Le Tri des Écarts en Deux Piles</span>
        <span class="tag">Diagnostic</span>
      </div>

      <div style="background: #faf6f0; border: 1px solid #ebd9ce; border-left: 3.5px solid #8b1e1e; padding: 6px 8px; border-radius: 2px; margin-bottom: 6px;">
        <div style="font-family: 'Inter', sans-serif; font-size: 7.6pt; font-weight: 700; color: #8b1e1e; text-transform: uppercase;">
          Pile A — Faute de français (Pensée juste, syntaxe fausse)
        </div>
        <div style="font-size: 8.6pt; line-height: 1.33; color: #2d2822; margin-top: 2px;">
          Second <i>« de »</i> tombé, <i>répandre</i> sans <i>« dans »</i>, <i>« qu’ »</i> perdu après <i>mais</i>, mauvaise préposition.<br>
          → <b>Va au delta log. Ne mérite aucune ancre mnésique</b>, seulement des passes répétées pour habituer l'organe vocal.
        </div>
      </div>

      <div style="background: #faf6f0; border: 1px solid #dcd3c4; border-left: 3.5px solid #3d362e; padding: 6px 8px; border-radius: 2px;">
        <div style="font-family: 'Inter', sans-serif; font-size: 7.6pt; font-weight: 700; color: #2a2520; text-transform: uppercase;">
          Pile B — Faute d’appariement (Bon français, mauvais chœur)
        </div>
        <div style="font-size: 8.6pt; line-height: 1.33; color: #2d2822; margin-top: 2px;">
          Tu as attribué l’obéissance aux Trônes. C’est une faute de mémoire pure, pas de syntaxe.<br>
          → <b>Seule pile qui justifie une ancre délibérée</b> (revoir la section 4), et seulement après avoir échoué.
        </div>
      </div>

      <div style="margin-top: auto; padding: 4px 6px; background: #f3efe6; border-radius: 2px; font-size: 8pt; color: #6a6052; text-align: center; font-style: italic;">
        Une passe à froid supplémentaire fin août, sinon le gain s’érode.
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <span>PAS DE SENTIMENTALISME DEVANT L'ERREUR : LA CLASSER DANS SA PILE ET REPASSER</span>
    <span>FIN DU PROTOCOLE DU CHAPELET DE SAINT MICHEL</span>
  </div>
</div>
`;

// Interactive Browser Version with Key Navigation
const INTERACTIVE_SCRIPT = `
<div class="interactive-nav">
  <button onclick="prevSlide()">← Précédent</button>
  <span class="slide-indicator" id="slideNum">Slide 1 / 8</span>
  <button onclick="nextSlide()">Suivant →</button>
  <button onclick="toggleFullscreen()">⛶ Plein écran</button>
</div>

<script>
  let currentSlide = 1;
  const totalSlides = 8;

  function updateIndicator() {
    document.getElementById('slideNum').textContent = 'Slide ' + currentSlide + ' / ' + totalSlides;
  }

  function goToSlide(n) {
    if (n < 1) n = 1;
    if (n > totalSlides) n = totalSlides;
    currentSlide = n;
    const target = document.getElementById('slide-' + currentSlide);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    updateIndicator();
  }

  function nextSlide() { goToSlide(currentSlide + 1); }
  function prevSlide() { goToSlide(currentSlide - 1); }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    } else if (e.key >= '1' && e.key <= '8') {
      goToSlide(parseInt(e.key));
    }
  });

  // Track scroll position to update slide number
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        if (id && id.startsWith('slide-')) {
          currentSlide = parseInt(id.replace('slide-', ''));
          updateIndicator();
        }
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('.slide').forEach(slide => observer.observe(slide));
</script>
`;

const FULL_PC_HTML = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Chapelet de saint Michel — Édition PC</title>
  <style>
    ${CSS_PC}
  </style>
</head>
<body>
  <div class="slide-deck">
    ${SCREEN_1}
    ${SCREEN_2}
    ${SCREEN_3}
    ${SCREEN_4}
    ${SCREEN_5}
    ${SCREEN_6}
    ${SCREEN_7}
    ${SCREEN_8}
  </div>
  ${INTERACTIVE_SCRIPT}
</body>
</html>`;

// -------------------------------------------------------------
// 2. FIXED PHONE EDITION (Compact, NO empty orphan pages)
// -------------------------------------------------------------
const SALUTATIONS = [
  ['Séraphins',      'nous rende dignes d’être enflammés d’une parfaite charité.'],
  ['Chérubins',      'nous fasse la grâce d’abandonner la voie du péché et de courir dans celle de la perfection chrétienne.'],
  ['Trônes',         'répande dans nos cœurs l’esprit d’une véritable et sincère humilité.'],
  ['Dominations',    'nous fasse la grâce de dominer nos sens et de nous corriger dans nos mauvaises passions.'],
  ['Puissances',     'daigne protéger nos âmes contre les embûches et les tentations du démon.'],
  ['Vertus Célestes','ne nous laisse pas succomber à la tentation, mais qu’il nous délivre du mal.'],
  ['Principautés',   'remplisse nos âmes de l’esprit d’une véritable et sincère obéissance.'],
  ['Archanges',      'nous accorde le don de la persévérance dans la foi et dans les bonnes œuvres, pour pouvoir arriver à la possession de la gloire du Paradis.'],
  ['tous les Anges', 'daigne nous accorder d’être gardés par eux pendant cette vie mortelle, pour être conduits ensuite à la gloire éternelle du ciel.'],
];

const HINTS = [
  'worthy to burn, perfect love',
  'quit sin’s road, run the other one',
  'pour into hearts: true humility',
  'master the senses, correct the passions',
  'shield souls: traps, the devil’s tempting',
  'not to fall to temptation, deliver from evil',
  'fill souls: true obedience',
  'perseverance, faith and works, reach the glory',
  'guarded in this mortal life, led after to eternal glory',
];

const ord = ['1er','2e','3e','4e','5e','6e','7e','8e','9e'];

const full = SALUTATIONS.map(([c, p], i) => `
  <div class="sal">
    <div class="salnum">${ord[i]} chœur</div>
    <p>Par l’intercession de saint Michel et du Chœur céleste des <b>${c}</b>,
    que le Seigneur ${p}</p>
  </div>`).join('');

const hintList = SALUTATIONS.map(([c], i) => `
  <tr><td class="n">${i + 1}</td><td class="ch">${c}</td><td class="hi">${HINTS[i]}</td></tr>`).join('');

const blankA = SALUTATIONS.map(([c], i) => `
  <div class="bl"><span class="n">${i + 1}</span> <b>${c}</b>
  <span class="rule"></span></div>`).join('');

const blankB = SALUTATIONS.map((_, i) => `
  <div class="bl"><span class="n">${i + 1}</span>
  <span class="rule wide"></span></div>`).join('');

const passRow = (label) => `
  <tr><td class="cl">${label}</td>
  <td><i>J1</i> ${'<span class=bx></span>'.repeat(5)}</td>
  <td><i>J2</i> ${'<span class=bx></span>'.repeat(6)}</td>
  <td><i>J3–7</i> ${'<span class=bx></span>'.repeat(5)}</td></tr>`;

const BODY_PHONE = `
<h1>Chapelet de saint Michel</h1>
<p class="sub">Neuf salutations aux neuf chœurs des anges. Texte : Abbaye du Mont-Saint-Michel.</p>

<div class="stage">1 — Le texte. À voix haute. Ne rien analyser.</div>

<h2>Ouverture</h2>
<p class="rub">Signe de la Croix.</p>
<p class="pray">Dieu, viens à mon aide. Seigneur, à notre secours.<br>
Gloire au Père et au Fils et au Saint Esprit, comme il était au commencement,
maintenant et toujours, pour les siècles des siècles. Amen.</p>
<p class="rub">Sur les 4 premiers grains, quatre <i>Notre Père</i> : saint Michel, saint Gabriel,
saint Raphaël, notre Ange Gardien.</p>
<p class="rub">Puis pour chaque chœur : un <i>Notre Père</i>, trois <i>Je vous salue Marie</i>, et la salutation.</p>

<h2>Les neuf salutations</h2>
${full}

<h2>Antienne</h2>
<p class="pray">Très glorieux saint Michel, chef et prince des Armées célestes, gardien fidèle des âmes,
vainqueur des esprits rebelles, favori de la maison de Dieu, notre admirable guide après Jésus-Christ ;
vous, dont l’excellence et la vertu sont suréminentes : daignez nous délivrer de tous les maux,
nous tous qui recourons à vous avec confiance ; et faites, par votre incomparable protection,
que nous avancions chaque jour dans la fidélité à servir Dieu.</p>
<p class="vers">℣. Priez pour nous, ô bienheureux saint Michel, Prince de l’Église de Jésus-Christ.<br>
℞. Afin que nous puissions être dignes de ses promesses.</p>

<h2>Oraison</h2>
<p class="pray">Dieu tout-puissant et éternel, qui par un prodige de bonté et de miséricorde pour le salut
commun des hommes, avez choisi pour Prince de votre Église le très glorieux Archange saint Michel ;
rendez-nous dignes, nous vous en prions, d’être délivrés, par sa bienveillante protection, de tous nos
ennemis, afin qu’à notre mort aucun d’eux ne puisse nous inquiéter ; mais qu’il nous soit donné d’être
introduits par lui en la présence de votre puissante et auguste Majesté.
Par les mérites de Jésus-Christ, notre Seigneur. Amen.</p>

<div class="stage" style="margin-top: 2em;">2 — Les indices. Méthode Franklin.</div>

<div class="frame">
Par l’intercession de saint Michel et du Chœur céleste des <span class="slot">_______</span>,<br>
que le Seigneur <span class="slot long">_____________________</span>.
</div>

<table class="strip">${hintList}</table>

<div class="proto">
<b>1.</b> Lis les indices, puis pose le document <b>deux jours</b>.<br>
<b>2.</b> Reconstruis à froid, à voix haute, sans rien regarder.<br>
<b>3.</b> Compare à la section 1.<br>
<b>4.</b> Trie les écarts en deux piles, section 6.
</div>
<p class="note">Ta version ne sera pas le texte. C’est voulu. Un indice qui déterminerait le texte
ne serait plus un indice, ce serait le texte. <b>L’écart est la leçon</b> : tu écriras
<i>dignes de brûler d’un amour parfait</i> là où le texte dit <i>dignes d’être enflammés
d’une parfaite charité</i>. Quatre choix que l’indice ne fixait pas, quatre constructions
que tu n’es pas allé chercher. C’est ça qu’on récolte.</p>

<div class="stage" style="margin-top: 2em;">3 — Les grilles. À voix haute. Jamais en silence.</div>

<h2>Grille A <span class="hint">le chœur est donné</span></h2>
<div class="blanks">${blankA}</div>

<h2>Grille B <span class="hint">rien n’est donné</span></h2>
<div class="blanks">${blankB}</div>

<div class="stage" style="margin-top: 2em;">4 — Les cinq points durs. Le seul encodage délibéré.</div>

<p class="note">Quatre chœurs sur neuf se lient tout seuls, la prière ayant été composée comme un
moyen mnémotechnique en 1751 : <b>Dominations</b> → <i>dominer</i>, <b>Séraphins</b> → <i>enflammés</i>,
<b>Puissances</b> → <i>protéger</i>, <b>Anges</b> → <i>gardés par eux</i>, et <b>Vertus</b> reprend
mot pour mot la fin du Notre Père. Ceux-là ne reçoivent rien. Les cinq ci-dessous sont tout le travail.</p>

<h2>Trois appariements que le texte ne fait pas pour toi</h2>

<div class="anchor">
<div class="atitle">Chérubins → quitter la voie du péché</div>
L’épée de feu à la porte d’Éden, Gn 3,24. Le chérubin est celui qui est <b>posté sur la route</b>.
Seul chœur que la Bible attache à une porte et à un chemin. Tu n’abandonnes pas la route,
on t’en fait sortir.
</div>

<div class="anchor">
<div class="atitle">Trônes → humilité</div>
Un trône est ce sur quoi on s’assoit : la chose la plus basse de la salle. Le 3<sup>e</sup> chœur,
l’un des plus hauts, reçoit la vertu la plus basse. <b>C’est l’inversion qui est le crochet</b>, pas le mot.
</div>

<div class="anchor">
<div class="atitle">Archanges → persévérance</div>
Gabriel annonce et l’annonce aboutit. Raphaël accompagne Tobie à l’aller et au retour.
Michel combat jusqu’à la fin. L’archange est <b>celui qui termine la mission</b>.
</div>

<h2>Deux paires qui vont se fondre l’une dans l’autre</h2>
<p class="note">Technique : <b>surapprendre un seul membre</b> de la paire. L’autre se prend
par élimination. Ne fabrique pas deux images concurrentes, elles s’ajouteraient à l’interférence.</p>

<div class="anchor pair">
<div class="atitle">3 et 7 — <i>l’esprit d’une véritable et sincère ___</i></div>
Verrouille le <b>7</b>, en chaîne : <b>Prince → il commande → obéissance → il remplit ses rangs
(<i>remplisse</i>) → les âmes.</b> Tout le 7 tient sur <i>prince</i>.<br>
Le <b>3</b> est alors le reste : <i>répande</i>, <i>cœurs</i>, <i>humilité</i>.
</div>

<div class="anchor pair">
<div class="atitle">2 et 4 — <i>nous fasse la grâce de…</i></div>
Verrouille le <b>4</b> : <b>Dominations → dominer</b>, le verbe est déjà dans le nom du chœur.<br>
Le <b>2</b> est alors le reste, et il est déjà tenu par le chérubin sur la route.
</div>

<p class="note"><i>nous fasse la grâce de</i> est une pièce de stock : coulée une fois, réutilisée
aux deux endroits, jamais recoulée. Seul l’infinitif qui suit change.</p>

<div class="stage" style="margin-top: 2em;">5 — La construction. Après avoir buté sur la grille B.</div>

<p class="note">Neuf répétitions d’un <b>que + subjonctif optatif</b>, sujet devant le verbe,
sujet identique neuf fois. Tu l’as déjà du Notre Père : <i>que ton règne vienne, que ta volonté soit faite</i>.</p>

<table class="verbs">
<tr><th>infinitif</th><th>ce que dit le texte</th></tr>
<tr><td>rendre</td><td>que le Seigneur nous <b>rende</b></td></tr>
<tr><td>faire</td><td>que le Seigneur nous <b>fasse</b> la grâce</td></tr>
<tr><td>répandre</td><td>que le Seigneur <b>répande</b></td></tr>
<tr><td>daigner</td><td>que le Seigneur <b>daigne</b></td></tr>
<tr><td>laisser</td><td>que le Seigneur ne nous <b>laisse</b> pas</td></tr>
<tr><td>délivrer</td><td>… mais <b>qu’il</b> nous <b>délivre</b></td></tr>
<tr><td>remplir</td><td>que le Seigneur <b>remplisse</b></td></tr>
<tr><td>accorder</td><td>que le Seigneur nous <b>accorde</b></td></tr>
</table>

<h2>Questions</h2>
<p class="note">Réponds par écrit. La réponse n’est pas ailleurs dans ce document.</p>
<ol class="q">
<li>Un seul de ces huit verbes ne ressemble pas à son présent de l’indicatif.
Lequel ?</li>
<li>La 6<sup>e</sup> dit <i>mais <b>qu’il</b> nous délivre</i>. Pourquoi le <i>qu’</i> revient-il
après <i>mais</i> ? Qu’est-ce qui casse si tu l’enlèves ?</li>
<li>Quatre passages coordonnent deux choses par <i>et</i> (n° 2, 4, 8, et l’antienne).
Dans chacun, quel petit mot se répète devant le second élément ?</li>
<li>Chaque verbe appelle sa suite : <i>protéger <u>contre</u></i>, <i>succomber <u>à</u></i>,
<i>délivrer <u>du</u></i>, <i>remplir <u>de</u></i>, <i>répandre <u>dans</u></i>,
<i>accorder <u>de</u></i> + infinitif. Lesquelles as-tu produites autrement ?</li>
</ol>

<div class="stage" style="margin-top: 2em;">6 — Le carnet. Règle des cinq. Chaque passe à voix haute.</div>

<table class="grid">
<tr><th>bloc</th><th>jour 1 — 5 passes</th><th>jour 2 — 6 passes</th><th>jours 3 à 7 — 1/jour</th></tr>
${passRow('1 · Séraphins · Chérubins · Trônes')}
${passRow('2 · Dominations · Puissances · Vertus')}
${passRow('3 · Principautés · Archanges · Anges')}
${passRow('4 · Antienne + Oraison')}
</table>
<p class="note">Jour 2 est le jour le plus lourd du calendrier. C’est celui qu’on saute et c’est celui
qui décide. Alterne : certaines passes depuis le 1<sup>er</sup> chœur, certaines à froid sur le bloc du jour.</p>

<h2>Le tri des écarts</h2>
<p class="note">Après reconstruction à froid, chaque écart tombe dans une pile et une seule.</p>

<div class="pile">
<div class="ptitle">A — faute de français <span>la pensée juste, la construction non</span></div>
<div class="pnote">Second <i>de</i> tombé, <i>répandre</i> sans <i>dans</i>, <i>qu’</i> perdu après <i>mais</i>,
mauvaise préposition. → va au delta log. Ne mérite <b>aucune</b> ancre, seulement des passes.</div>
</div>

<div class="pile">
<div class="ptitle">B — faute d’appariement <span>bon français, mauvais chœur</span></div>
<div class="pnote">Tu as donné l’obéissance aux Trônes. C’est une faute de mémoire, pas de langue.
→ <b>seule pile qui mérite une ancre</b>, et seulement après avoir échoué.</div>
</div>

<p class="note">Une passe à froid supplémentaire fin août, sinon le gain s’érode.</p>
`;

const CSS_COMMON = `
*{box-sizing:border-box}
body{font-family:"Liberation Serif",Georgia,"Times New Roman",serif;color:#111;margin:0;
     -webkit-font-smoothing:antialiased;hyphens:none}
h1{font-size:1.4em;margin:0 0 .1em;font-weight:600;letter-spacing:.01em}
.sub{font-size:.72em;color:#666;margin:0 0 1.2em;font-style:italic}
h2{font-size:.92em;margin:1.2em 0 .4em;font-weight:600;
   border-bottom:1px solid #ccc;padding-bottom:.2em;break-after:avoid}
h2 .hint{font-weight:400;font-style:italic;color:#777;font-size:.85em;border:0}
.stage{font-family:"Liberation Sans",Helvetica,Arial,sans-serif;font-size:.68em;
  text-transform:uppercase;letter-spacing:.08em;color:#fff;background:#333;
  padding:.4em .65em;margin:0 0 1em;break-after:avoid}
p{margin:0 0 .6em;line-height:1.45}
.rub{font-size:.78em;color:#555;font-style:italic;line-height:1.4}
.pray{text-align:justify}
.vers{font-size:.88em;color:#333}
.note{font-size:.78em;color:#444;line-height:1.45;background:#f4f4f2;
  padding:.55em .65em;border-left:2px solid #bbb;break-inside:avoid;margin-bottom:.7em}
.sal{margin:0 0 .7em;break-inside:avoid}
.salnum{font-family:"Liberation Sans",Helvetica,sans-serif;font-size:.62em;
  letter-spacing:.09em;text-transform:uppercase;color:#888}
.sal p{margin:0;text-align:justify}
.frame{border:1.5px solid #333;padding:.7em;margin:0 0 .7em;line-height:1.8;font-size:.9em}
.slot{border-bottom:1.5px solid #333;padding:0 1.6em}
.slot.long{padding:0 5em}
.proto{font-size:.8em;line-height:1.6;background:#ececeb;padding:.6em .7em;margin:0 0 .7em;
  break-inside:avoid}
table{width:100%;border-collapse:collapse;font-size:.78em;margin:.4em 0 .8em}
td,th{vertical-align:top;padding:.38em .4em;border-bottom:1px solid #ddd;text-align:left}
th{font-family:"Liberation Sans",Helvetica,sans-serif;font-size:.8em;font-weight:600;
   text-transform:uppercase;letter-spacing:.05em;color:#666;border-bottom:1px solid #999}
.strip .n{width:1.4em;color:#999;font-size:.85em}
.strip .ch{width:6.4em;font-weight:600}
.strip .hi{line-height:1.4;font-style:italic;color:#333}
.verbs td{width:50%}
.verbs td:first-child{font-style:italic;color:#555}
.anchor{border-left:3px solid #333;padding:.5em .7em;margin:0 0 .7em;font-size:.8em;
  line-height:1.45;break-inside:avoid}
.anchor.pair{border-left-color:#999;background:#f7f7f6}
.atitle{font-family:"Liberation Sans",Helvetica,sans-serif;font-size:.9em;font-weight:600;
  margin:0 0 .3em}
.blanks{margin:0 0 .8em;break-inside:avoid}
.bl{margin:0 0 .35em;font-size:.82em;break-inside:avoid}
.bl .n{color:#999;display:inline-block;width:1.3em}
.rule{display:block;border-bottom:1px solid #bbb;height:1em;margin:.1em 0 0}
.rule.wide{height:1.2em}
.q{font-size:.8em;line-height:1.45;padding-left:1.2em;margin:0}
.q li{margin:0 0 .7em;break-inside:avoid}
.grid .cl{font-size:.88em;line-height:1.3}
.grid i{font-style:normal;color:#999;font-size:.8em;margin-right:.25em}
.bx{display:inline-block;width:.8em;height:.8em;border:1px solid #999;margin-right:.16em}
.pile{margin:0 0 .8em;break-inside:avoid}
.ptitle{font-family:"Liberation Sans",Helvetica,sans-serif;font-size:.76em;font-weight:600;
  text-transform:uppercase;letter-spacing:.05em;background:#333;color:#fff;padding:.3em .55em}
.ptitle span{text-transform:none;letter-spacing:0;font-weight:400;font-style:italic;
  color:#ccc;margin-left:.4em}
.pnote{font-size:.75em;color:#444;line-height:1.45;padding:.45em .55em;background:#f4f4f2}
`;

const CSS_PHONE = `@page{size:100mm 186mm;margin:7mm 6mm 7mm}
body{font-size:10.2pt}
h1{font-size:1.35em}
.q{font-size:.78em}`;

const htmlPhone = `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<title>Chapelet de saint Michel (Format compact)</title><style>${CSS_COMMON}${CSS_PHONE}</style></head>
<body>${BODY_PHONE}</body></html>`;

// -------------------------------------------------------------
// MAIN EXECUTION
// -------------------------------------------------------------
(async () => {
  console.log('Building all editions...');
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // 1. Chapelet Saint Michel - PC.pdf (16:9 Widescreen)
  await page.setContent(FULL_PC_HTML, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  const pcPdfPath = path.join(outdir, 'Chapelet Saint Michel - PC.pdf');
  await page.pdf({
    path: pcPdfPath,
    printBackground: true,
    preferCSSPageSize: true,
  });
  console.log('✓ Wrote PC PDF:', pcPdfPath, fs.statSync(pcPdfPath).size, 'bytes');

  // 2. Chapelet Saint Michel - PC.html (Interactive browser version)
  const pcHtmlPath = path.join(outdir, 'Chapelet Saint Michel - PC.html');
  fs.writeFileSync(pcHtmlPath, FULL_PC_HTML, 'utf8');
  console.log('✓ Wrote PC HTML:', pcHtmlPath, fs.statSync(pcHtmlPath).size, 'bytes');

  // 3. Update telephone PDF so it has NO empty pages
  await page.setContent(htmlPhone, { waitUntil: 'load' });
  await page.emulateMedia({ media: 'print' });
  const phonePdfPath = path.join(outdir, 'Chapelet Saint Michel - telephone.pdf');
  await page.pdf({
    path: phonePdfPath,
    printBackground: true,
    preferCSSPageSize: true,
  });
  console.log('✓ Wrote Fixed Telephone PDF:', phonePdfPath, fs.statSync(phonePdfPath).size, 'bytes');

  await browser.close();
  console.log('All builds complete successfully!');
})();
