/* ---------------------------------------------------------------
   BELGIAN WAFFLE GEOMETRY
   A 3-column x 2-row waffle-iron lattice: thick bars with rounded
   tabs protruding on every edge, concave scallops between them,
   and a bite taken out of the top-right corner.
----------------------------------------------------------------*/
const BAR = 46;          // thickness of the grid bars
const CELL = 108;        // inner pocket size
const TAB = 32;          // how far the bar ends stick out past the body
const RAD = 19;          // rounding of the protruding bar ends
const DIP = 42;          // depth of the concave scallop between bars
const X0 = 62;
const Y0 = 72;

const VX = [0, 1, 2, 3].map(i => X0 + i * (BAR + CELL));   // vertical bar left edges
const HY = [0, 1, 2].map(i => Y0 + i * (BAR + CELL));      // horizontal bar top edges
const RIGHT = VX[VX.length - 1] + BAR;
const BOTTOM = HY[HY.length - 1] + BAR;

function buildSilhouette() {
  const d = [`M ${X0} ${Y0}`];

  // TOP edge, left -> right
  VX.forEach((b, i) => {
    const t = Y0 - TAB;
    d.push(`L ${b} ${t + RAD}`, `Q ${b} ${t} ${b + RAD} ${t}`);
    d.push(`L ${b + BAR - RAD} ${t}`, `Q ${b + BAR} ${t} ${b + BAR} ${t + RAD}`);
    d.push(`L ${b + BAR} ${Y0}`);
    if (i < VX.length - 1) {
      const nb = VX[i + 1];
      d.push(`Q ${(b + BAR + nb) / 2} ${Y0 + DIP} ${nb} ${Y0}`);
    }
  });

  // RIGHT edge, top -> bottom
  HY.forEach((h, i) => {
    const r = RIGHT + TAB;
    d.push(`L ${RIGHT} ${h}`, `L ${r - RAD} ${h}`, `Q ${r} ${h} ${r} ${h + RAD}`);
    d.push(`L ${r} ${h + BAR - RAD}`, `Q ${r} ${h + BAR} ${r - RAD} ${h + BAR}`);
    d.push(`L ${RIGHT} ${h + BAR}`);
    if (i < HY.length - 1) {
      const nh = HY[i + 1];
      d.push(`Q ${RIGHT - DIP} ${(h + BAR + nh) / 2} ${RIGHT} ${nh}`);
    }
  });

  // BOTTOM edge, right -> left
  const vrev = [...VX].reverse();
  vrev.forEach((b, i) => {
    const bt = BOTTOM + TAB;
    d.push(`L ${b + BAR} ${BOTTOM}`, `L ${b + BAR} ${bt - RAD}`, `Q ${b + BAR} ${bt} ${b + BAR - RAD} ${bt}`);
    d.push(`L ${b + RAD} ${bt}`, `Q ${b} ${bt} ${b} ${bt - RAD}`);
    d.push(`L ${b} ${BOTTOM}`);
    if (i < vrev.length - 1) {
      const pb = vrev[i + 1];
      d.push(`Q ${(b + pb + BAR) / 2} ${BOTTOM - DIP} ${pb + BAR} ${BOTTOM}`);
    }
  });

  // LEFT edge, bottom -> top
  const hrev = [...HY].reverse();
  hrev.forEach((h, i) => {
    const l = X0 - TAB;
    d.push(`L ${X0} ${h + BAR}`, `L ${l + RAD} ${h + BAR}`, `Q ${l} ${h + BAR} ${l} ${h + BAR - RAD}`);
    d.push(`L ${l} ${h + RAD}`, `Q ${l} ${h} ${l + RAD} ${h}`);
    d.push(`L ${X0} ${h}`);
    if (i < hrev.length - 1) {
      const ph = hrev[i + 1];
      d.push(`Q ${X0 + DIP} ${(h + ph + BAR) / 2} ${X0} ${ph + BAR}`);
    }
  });

  return d.join(' ') + ' Z';
}

const WAFFLE_PATH = buildSilhouette();

// Scalloped bite edge sweeping across the top-right corner.
const BITE_EDGE =
  'M 372 0 Q 356 80 392 130 Q 402 184 452 205 Q 485 250 540 248 Q 578 281 626 268';
// Same curve, closed off to the outside — used as the mask cut-out.
const BITE_CUT = `${BITE_EDGE} L 700 268 L 700 -60 L 372 -60 Z`;

const OUTLINE = '#5c3a12';

export { BAR, CELL, TAB, RAD, DIP, X0, Y0, VX, HY, RIGHT, BOTTOM, WAFFLE_PATH, BITE_EDGE, BITE_CUT, OUTLINE };
