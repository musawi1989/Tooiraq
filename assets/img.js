/* ============================================================
   TooIraq — lightweight scenic imagery (inline SVG, zero network)
   Each "photo" is a hand-drawn SVG scene (~1-2 KB) rendered as a
   data URI: instant loading, cacheable, crisp at any size.
   Swap any of these for real photographs later by replacing
   IMG(kind) with a normal image URL — the layout won't change.
   ============================================================ */

(function () {
  "use strict";

  const W = 800, H = 600;
  const sky = (a, b, c) =>
    '<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0" stop-color="' + a + '"/>' +
    (c ? '<stop offset=".55" stop-color="' + b + '"/><stop offset="1" stop-color="' + c + '"/>' :
         '<stop offset="1" stop-color="' + b + '"/>') +
    "</linearGradient></defs>" +
    '<rect width="800" height="600" fill="url(#s)"/>';
  const sun = (x, y, r, col, glow) =>
    (glow ? '<circle cx="' + x + '" cy="' + y + '" r="' + (r * 2.1) + '" fill="' + col + '" opacity=".25"/>' : "") +
    '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '"/>';
  const birds = (n, y0) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = 90 + i * 130 + (i % 2) * 40, y = y0 + (i % 3) * 26;
      s += '<path d="M' + x + " " + y + " q9 -9 18 0 q9 -9 18 0" + '" stroke="#2A2024" stroke-width="4" fill="none" stroke-linecap="round"/>';
    }
    return s;
  };
  const water = (y, col, lite) =>
    '<rect y="' + y + '" width="800" height="' + (H - y) + '" fill="' + col + '"/>' +
    '<g stroke="' + lite + '" stroke-width="5" stroke-linecap="round" opacity=".55">' +
    '<line x1="120" y1="' + (y + 34) + '" x2="300" y2="' + (y + 34) + '"/>' +
    '<line x1="420" y1="' + (y + 60) + '" x2="640" y2="' + (y + 60) + '"/>' +
    '<line x1="200" y1="' + (y + 92) + '" x2="360" y2="' + (y + 92) + '"/>' +
    '<line x1="500" y1="' + (y + 118) + '" x2="700" y2="' + (y + 118) + '"/></g>';
  const ground = (y, col) => '<rect y="' + y + '" width="800" height="' + (H - y) + '" fill="' + col + '"/>';
  const dk = "#251418";

  const SCENES = {
    babylon: () =>
      sky("#FFD98A", "#F2A65A", "#E07B4C") + sun(590, 240, 62, "#FFF2C9", 1) + birds(3, 150) +
      '<path d="M0 430 L800 430 L800 600 L0 600 Z" fill="#7A4A34"/>' +
      '<g fill="' + dk + '"><rect x="150" y="352" width="500" height="26"/><rect x="205" y="310" width="390" height="44"/><rect x="255" y="268" width="290" height="44"/><rect x="305" y="230" width="190" height="40"/><rect x="355" y="196" width="90" height="36"/><rect x="382" y="170" width="36" height="28"/></g>' +
      '<path d="M330 378 h140 v52 a70 70 0 0 1 -140 0 Z" fill="#3A2016"/>' +
      ground(430, "#5C3626") +
      '<g fill="' + dk + '"><path d="M60 430 q6 -70 12 0 Z"/><path d="M60 376 q26 8 34 30 M60 376 q-26 8 -34 30 M60 368 q18 -20 40 -16 M60 368 q-18 -20 -40 -16" stroke="' + dk + '" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M740 430 q6 -62 12 0 Z"/><path d="M744 384 q24 6 30 26 M744 384 q-24 6 -30 26 M744 376 q16 -18 36 -14 M744 376 q-16 -18 -36 -14" stroke="' + dk + '" stroke-width="8" fill="none" stroke-linecap="round"/></g>',
    marsh: () =>
      sky("#FFE9B8", "#F7B267", "#DE8A5A") + sun(210, 205, 54, "#FFF6D8", 1) + birds(4, 120) +
      water(330, "#B4763F", "#F5C877") +
      '<path d="M300 388 q100 -34 200 0 l-26 30 q-74 -22 -148 0 Z" fill="' + dk + '"/>' +
      '<path d="M500 388 q30 -44 18 -78" stroke="' + dk + '" stroke-width="10" fill="none" stroke-linecap="round"/>' +
      '<circle cx="378" cy="352" r="16" fill="' + dk + '"/><rect x="372" y="352" width="12" height="40" fill="' + dk + '"/>' +
      '<g stroke="' + dk + '" stroke-width="7" fill="none" stroke-linecap="round">' +
      '<path d="M60 600 v-160 m0 0 q-22 12 -34 2 m34 -2 q22 12 34 2 m-34 -32 q-18 4 -26 -6 m26 6 q18 4 26 -6"/>' +
      '<path d="M110 600 v-120 m0 0 q-18 8 -28 0 m28 0 q18 8 28 0"/>' +
      '<path d="M710 600 v-150 m0 0 q-20 10 -32 2 m32 -2 q20 10 32 2 m-32 -30 q-16 4 -24 -4 m24 4 q16 4 24 -4"/>' +
      '<path d="M760 600 v-110 m0 0 q-16 8 -26 0 m26 0 q16 8 26 0"/></g>',
    citadel: () =>
      sky("#BFD9E2", "#EAD9B0", "#E8B97E") + sun(150, 190, 44, "#FFF8E2", 1) + birds(3, 130) +
      '<path d="M0 420 Q200 380 400 400 Q600 420 800 396 L800 600 L0 600 Z" fill="#C29A62"/>' +
      '<path d="M80 420 Q400 330 720 414 L720 448 L80 452 Z" fill="#8A6238"/>' +
      '<g fill="' + dk + '"><rect x="120" y="350" width="560" height="34"/><rect x="120" y="330" width="26" height="24"/><rect x="186" y="330" width="26" height="24"/><rect x="252" y="330" width="26" height="24"/><rect x="318" y="330" width="26" height="24"/><rect x="384" y="322" width="34" height="32"/><rect x="452" y="330" width="26" height="24"/><rect x="518" y="330" width="26" height="24"/><rect x="584" y="330" width="26" height="24"/><rect x="650" y="330" width="26" height="24"/></g>' +
      ground(452, "#A67A50"),
    shrine: () =>
      sky("#2E3A5C", "#7A5C74", "#C97E6A") + sun(640, 170, 34, "#F4EBD8", 0) + birds(2, 110) +
      '<g fill="' + dk + '">' +
      '<path d="M310 330 a90 100 0 0 1 180 0 l0 90 l-180 0 Z"/>' +
      '<rect x="286" y="420" width="228" height="60"/>' +
      '<rect x="196" y="250" width="22" height="230"/><path d="M188 250 h38 l-19 -34 Z"/>' +
      '<rect x="582" y="250" width="22" height="230"/><path d="M574 250 h38 l-19 -34 Z"/>' +
      '<rect x="393" y="196" width="14" height="40"/><circle cx="400" cy="190" r="8"/>' +
      "</g>" +
      '<g fill="#F7D794" opacity=".85"><rect x="330" y="436" width="20" height="30" rx="10"/><rect x="374" y="436" width="20" height="30" rx="10"/><rect x="418" y="436" width="20" height="30" rx="10"/><rect x="462" y="436" width="20" height="30" rx="10"/></g>' +
      ground(480, "#1E1420"),
    mountains: () =>
      sky("#CFE6EA", "#EAF2E4", "#F3E9CF") + sun(660, 150, 46, "#FFFDF2", 1) + birds(3, 120) +
      '<path d="M0 420 L170 210 L320 420 Z" fill="#5E7C6A"/>' +
      '<path d="M140 210 L170 168 L214 232 L188 232 Z" fill="#EDF4F0"/>' +
      '<path d="M210 420 L430 150 L660 420 Z" fill="#43604F"/>' +
      '<path d="M392 200 L430 150 L474 210 L438 214 Z" fill="#F2F7F2"/>' +
      '<path d="M540 420 L700 240 L800 420 Z" fill="#5E7C6A"/>' +
      '<path d="M430 300 q6 60 -14 120 l30 0 q16 -60 4 -120 Z" fill="#BFE0E8"/>' +
      ground(420, "#7B9468") +
      '<path d="M0 470 Q400 440 800 474 L800 600 L0 600 Z" fill="#5F7A50"/>',
    malwiya: () =>
      sky("#F6E3B0", "#EFB877", "#D98D5C") + sun(160, 210, 56, "#FFF4D6", 1) + birds(3, 140) +
      ground(440, "#8A5B36") +
      '<g fill="' + dk + '">' +
      '<path d="M320 440 h160 l-14 -40 h-132 Z"/><path d="M340 400 h120 l-12 -36 h-96 Z"/>' +
      '<path d="M356 364 h88 l-10 -32 h-68 Z"/><path d="M370 332 h60 l-9 -28 h-42 Z"/>' +
      '<path d="M382 304 h36 l-7 -24 h-22 Z"/><rect x="392" y="258" width="16" height="22"/>' +
      "</g>" +
      '<path d="M480 440 q-30 -120 -74 -180" stroke="#5C3A22" stroke-width="7" fill="none" opacity=".5"/>' +
      '<g fill="' + dk + '"><rect x="600" y="380" width="110" height="60"/><rect x="614" y="362" width="14" height="16"/><rect x="644" y="362" width="14" height="16"/><rect x="674" y="362" width="14" height="16"/></g>',
    river: () =>
      sky("#FCD9A0", "#EF9E6A", "#D97A55") + sun(420, 220, 58, "#FFF0C6", 1) + birds(4, 130) +
      water(340, "#9C5A3C", "#F3BE7C") +
      '<path d="M420 340 v170" stroke="#F5D9A0" stroke-width="30" opacity=".28"/>' +
      '<g fill="' + dk + '">' +
      '<path d="M120 340 q7 -84 14 0 Z"/><path d="M124 272 q30 8 40 34 M124 272 q-30 8 -40 34 M124 262 q22 -24 48 -18 M124 262 q-22 -24 -48 -18 M124 258 q4 -26 -6 -40" stroke="' + dk + '" stroke-width="10" fill="none" stroke-linecap="round"/>' +
      '<path d="M680 340 q7 -74 14 0 Z"/><path d="M684 282 q26 7 36 30 M684 282 q-26 7 -36 30 M684 274 q20 -22 44 -16 M684 274 q-20 -22 -44 -16" stroke="' + dk + '" stroke-width="9" fill="none" stroke-linecap="round"/>' +
      '<path d="M250 402 q90 -30 180 0 l-22 26 q-66 -18 -136 0 Z"/></g>',
    baghdad: () =>
      sky("#F9E2B8", "#EFAF72", "#DE8A5C") + sun(650, 200, 50, "#FFF3D2", 1) + birds(3, 130) +
      '<g fill="' + dk + '">' +
      '<rect x="80" y="300" width="70" height="140"/><rect x="96" y="272" width="38" height="28"/>' +
      '<rect x="190" y="330" width="90" height="110"/>' +
      '<path d="M330 440 v-90 a45 45 0 0 1 90 0 v90 Z"/><rect x="368" y="300" width="14" height="34"/><circle cx="375" cy="294" r="7"/>' +
      '<rect x="470" y="316" width="60" height="124"/><rect x="484" y="290" width="32" height="26"/>' +
      '<rect x="570" y="350" width="120" height="90"/><rect x="588" y="332" width="18" height="18"/><rect x="626" y="332" width="18" height="18"/><rect x="664" y="332" width="18" height="18"/>' +
      "</g>" + water(440, "#A05E3E", "#F0BE84"),
    basra: () =>
      sky("#FFE4B8", "#F2A968", "#DD7E52") + sun(240, 190, 52, "#FFF4D4", 1) + birds(4, 120) +
      water(360, "#8E4E34", "#EFB877") +
      '<path d="M540 360 l-16 -70 h110 l-16 70 Z" fill="' + dk + '"/><rect x="574" y="252" width="10" height="42" fill="' + dk + '"/>' +
      '<g fill="' + dk + '">' +
      '<path d="M100 360 q8 -96 16 0 Z"/><path d="M106 282 q32 8 44 36 M106 282 q-32 8 -44 36 M106 272 q24 -26 52 -20 M106 272 q-24 -26 -52 -20 M104 268 q2 -28 -8 -44" stroke="' + dk + '" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<path d="M210 360 q7 -76 14 0 Z"/><path d="M215 298 q26 7 36 30 M215 298 q-26 7 -36 30 M215 290 q20 -22 44 -16 M215 290 q-20 -22 -44 -16" stroke="' + dk + '" stroke-width="9" fill="none" stroke-linecap="round"/>' +
      "</g>",
    ur: () =>
      sky("#F3D9A8", "#E8A968", "#D07E50") + sun(600, 180, 48, "#FFF2CE", 1) + birds(2, 120) +
      ground(430, "#9C6A42") +
      '<g fill="' + dk + '">' +
      '<path d="M180 430 h440 v-36 h-440 Z"/><path d="M240 394 h320 v-52 h-320 Z"/><path d="M300 342 h200 v-44 h-200 Z"/>' +
      '<path d="M380 298 h40 v-30 h-40 Z"/>' +
      '<path d="M388 430 v-120 h24 v120 Z" fill="#6B432A"/>' +
      "</g>"
  };

  const cache = {};
  window.IMG = function (kind) {
    if (!cache[kind]) {
      const body = (SCENES[kind] || SCENES.babylon)();
      cache[kind] = "data:image/svg+xml;utf8," +
        encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + " " + H + '" preserveAspectRatio="xMidYMid slice">' + body + "</svg>");
    }
    return cache[kind];
  };
})();
