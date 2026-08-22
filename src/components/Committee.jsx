import React, { useState } from 'react';
import { SOCIETY_DATA } from '../data/societyData';
import {
  BAR, CELL, VX, HY, WAFFLE_PATH, BITE_EDGE, BITE_CUT, OUTLINE,
} from './waffleGeometry';

const cellX = c => VX[c] + BAR;
const cellY = r => HY[r] + BAR;

export default function Committee() {
  const [activeId, setActiveId] = useState('c-anna');
  const activeMember = SOCIETY_DATA.committee.find(m => m.id === activeId) || SOCIETY_DATA.committee[0];

  // 3 x 2 grid — the top-right pocket (col 2, row 0) has been eaten.
  const pockets = [
    { id: 'c-anna',       col: 0, row: 0, label: 'Anna',       initials: 'AD', role: 'Co-President' },
    { id: 'c-miranda',    col: 1, row: 0, label: 'Miranda',    initials: 'MF', role: 'Co-President' },
    { id: 'c-loic',       col: 0, row: 1, label: 'Loïc',       initials: 'LD', role: 'Committee' },
    { id: 'c-lauren',     col: 1, row: 1, label: 'Lauren',     initials: 'LD', role: 'Committee' },
    { id: 'c-christophe', col: 2, row: 1, label: 'Christophe', initials: 'CM', role: 'Committee' },
  ];

  return (
    <section id="committee" className="committee-waffle-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-kicker">👥 Leadership &amp; Team</span>
          <h2 className="section-title">Meet the Committee</h2>
          <p className="section-desc">
            Click or tap any pocket of our Belgian waffle to meet the students leading the Oxford University Belgian Society.
          </p>
        </div>

        <div className="committee-waffle-layout">
          <div className="waffle-interactive-col">
            <svg
              viewBox="0 0 632 500"
              className="big-waffle-svg"
              role="group"
              aria-label="Interactive Belgian waffle — one pocket per committee member"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Golden, baked bar tops — lit from the upper left */}
                <linearGradient id="wf-bar" x1="12%" y1="0%" x2="88%" y2="100%">
                  <stop offset="0%" stopColor="#fdeec4" />
                  <stop offset="34%" stopColor="#f4d491" />
                  <stop offset="72%" stopColor="#e3b463" />
                  <stop offset="100%" stopColor="#cf9743" />
                </linearGradient>

                {/* The bevelled wall where each pocket starts — a deeper amber */}
                <linearGradient id="wf-wall" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c98a37" />
                  <stop offset="48%" stopColor="#dfa64c" />
                  <stop offset="100%" stopColor="#f2cd83" />
                </linearGradient>

                {/* Pocket floor — the darkest, most caramelised yellow */}
                <radialGradient id="wf-floor" cx="34%" cy="28%" r="84%">
                  <stop offset="0%" stopColor="#e6b45f" />
                  <stop offset="55%" stopColor="#d29b45" />
                  <stop offset="100%" stopColor="#b87c2e" />
                </radialGradient>

                {/* Soft shadow cast by the pocket walls onto the floor */}
                <linearGradient id="wf-floor-shade" x1="0%" y1="0%" x2="62%" y2="100%">
                  <stop offset="0%" stopColor="rgba(90,52,12,0.38)" />
                  <stop offset="50%" stopColor="rgba(90,52,12,0.05)" />
                  <stop offset="100%" stopColor="rgba(255,240,205,0.18)" />
                </linearGradient>

                {/* Exposed crumb revealed by the bite */}
                <linearGradient id="wf-crumb" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f7e6c1" />
                  <stop offset="100%" stopColor="#e2c795" />
                </linearGradient>

                {/* Overall sheen across the whole waffle */}
                <linearGradient id="wf-sheen" x1="0%" y1="0%" x2="70%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.34)" />
                  <stop offset="45%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="100%" stopColor="rgba(120,72,20,0.16)" />
                </linearGradient>

                <radialGradient id="wf-scorch" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(150,92,26,0.22)" />
                  <stop offset="100%" stopColor="rgba(150,92,26,0)" />
                </radialGradient>

                <filter id="wf-grain" x="0" y="0" width="100%" height="100%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
                  <feColorMatrix type="saturate" values="0" />
                </filter>

                <clipPath id="wf-clip">
                  <path d={WAFFLE_PATH} />
                </clipPath>

                <mask id="wf-bite" maskUnits="userSpaceOnUse" x="-40" y="-60" width="760" height="620">
                  <rect x="-40" y="-60" width="760" height="620" fill="#ffffff" />
                  <path d={BITE_CUT} fill="#000000" />
                </mask>
              </defs>

              {/* ============ WAFFLE (everything below is bitten by the mask) ============ */}
              <g mask="url(#wf-bite)">
                {/* Baked body */}
                <path
                  d={WAFFLE_PATH}
                  fill="url(#wf-bar)"
                  stroke={OUTLINE}
                  strokeWidth="8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />

                {/* Sheen over the bar tops */}
                <path d={WAFFLE_PATH} fill="url(#wf-sheen)" />

                {/* Uneven browning from the iron, plus a fine baked grain */}
                <g clipPath="url(#wf-clip)" pointerEvents="none">
                  <ellipse cx="150" cy="120" rx="120" ry="80" fill="url(#wf-scorch)" />
                  <ellipse cx="470" cy="360" rx="150" ry="95" fill="url(#wf-scorch)" />
                  <ellipse cx="300" cy="440" rx="130" ry="60" fill="url(#wf-scorch)" />
                  <rect x="0" y="0" width="632" height="500" filter="url(#wf-grain)" opacity="0.16" style={{ mixBlendMode: 'multiply' }} />
                </g>

                {/* Pearl-sugar crystals scattered over the bars */}
                <g fill="#fffaf0" opacity="0.9">
                  <circle cx="88" cy="196" r="4.2" />
                  <circle cx="238" cy="96" r="3.4" />
                  <circle cx="546" cy="352" r="4" />
                  <circle cx="392" cy="404" r="3.6" />
                  <circle cx="86" cy="404" r="3.2" />
                  <circle cx="240" cy="250" r="3" />
                  <circle cx="394" cy="248" r="3.6" />
                  <circle cx="546" cy="102" r="3" />
                  <circle cx="160" cy="404" r="2.6" />
                  <circle cx="470" cy="90" r="2.8" />
                </g>

                {/* ============ THE SIX POCKETS ============ */}
                {[0, 1].map(r =>
                  [0, 1, 2].map(c => {
                    const x = cellX(c);
                    const y = cellY(r);
                    const p = pockets.find(k => k.col === c && k.row === r);
                    const isSelected = p && activeId === p.id;

                    const walls = (
                      <>
                        {/* the "start of the square": bevelled wall in a second yellow */}
                        <rect
                          x={x} y={y} width={CELL} height={CELL} rx="9"
                          fill="url(#wf-wall)" stroke={OUTLINE} strokeWidth="5"
                        />
                        {/* the recessed floor: the deepest yellow */}
                        <rect
                          x={x + 14} y={y + 14} width={CELL - 28} height={CELL - 28} rx="6"
                          fill={isSelected ? '#002147' : 'url(#wf-floor)'}
                          stroke={isSelected ? '#e0b357' : OUTLINE}
                          strokeWidth={isSelected ? '3.5' : '3'}
                        />
                        {/* shadow the walls cast into the pocket */}
                        <rect
                          x={x + 14} y={y + 14} width={CELL - 28} height={CELL - 28} rx="6"
                          fill="url(#wf-floor-shade)" pointerEvents="none"
                        />
                      </>
                    );

                    // The eaten pocket is scenery only — no member behind it.
                    if (!p) return <g key={`empty-${c}-${r}`}>{walls}</g>;

                    return (
                      <g
                        key={p.id}
                        className={`waffle-pocket-btn ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => setActiveId(p.id)}
                        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveId(p.id); } }}
                        role="button"
                        tabIndex={0}
                        aria-pressed={isSelected}
                        aria-label={`${p.label}, ${p.role}`}
                        style={{ cursor: 'pointer' }}
                      >
                        {walls}
                        <text
                          x={x + CELL / 2} y={y + 46} textAnchor="middle"
                          fill={isSelected ? '#ffffff' : '#43260a'}
                          stroke={isSelected ? 'none' : 'rgba(255,241,213,0.5)'}
                          strokeWidth={isSelected ? 0 : 3}
                          paintOrder="stroke"
                          fontFamily="'Playfair Display', Georgia, serif"
                          fontWeight="800" fontSize="24"
                        >
                          {p.initials}
                        </text>
                        <text
                          x={x + CELL / 2} y={y + 68} textAnchor="middle"
                          fill={isSelected ? '#e9bd68' : '#3a2008'}
                          stroke={isSelected ? 'none' : 'rgba(255,241,213,0.45)'}
                          strokeWidth={isSelected ? 0 : 2.6}
                          paintOrder="stroke"
                          fontFamily="'Plus Jakarta Sans', sans-serif"
                          fontWeight="700" fontSize="13"
                        >
                          {p.label}
                        </text>
                        <text
                          x={x + CELL / 2} y={y + 84} textAnchor="middle"
                          fill={isSelected ? 'rgba(255,255,255,0.78)' : 'rgba(58,32,8,0.78)'}
                          stroke={isSelected ? 'none' : 'rgba(255,241,213,0.4)'}
                          strokeWidth={isSelected ? 0 : 2.4}
                          paintOrder="stroke"
                          fontFamily="'Plus Jakarta Sans', sans-serif"
                          fontWeight="600" fontSize="10"
                        >
                          {p.role}
                        </text>
                      </g>
                    );
                  })
                )}
              </g>

              {/* ============ THE BITE ============ */}
              <g clipPath="url(#wf-clip)">
                {/* pale crumb exposed just inside the bitten edge */}
                <path d={BITE_EDGE} fill="none" stroke="url(#wf-crumb)" strokeWidth="20" strokeLinecap="round" />
                <path d={BITE_EDGE} fill="none" stroke="rgba(120,72,20,0.22)" strokeWidth="13" strokeLinecap="round" />
                {/* the torn edge itself */}
                <path d={BITE_EDGE} fill="none" stroke={OUTLINE} strokeWidth="8" strokeLinecap="round" />
              </g>

              {/* Crumbs that broke off with the bite */}
              <g fill="url(#wf-bar)" stroke={OUTLINE} strokeWidth="3">
                <ellipse cx="470" cy="132" rx="9" ry="7" transform="rotate(-18 470 132)" />
                <ellipse cx="536" cy="186" rx="6.5" ry="5" transform="rotate(24 536 186)" />
                <circle cx="424" cy="82" r="4.5" />
                <circle cx="586" cy="212" r="5.5" />
              </g>
            </svg>
          </div>

          {/* ACTIVE MEMBER DETAIL CARD */}
          <div className="waffle-detail-col">
            <div className="waffle-member-spotlight">
              <div className="spotlight-header">
                <div className="spotlight-avatar-chip">
                  <span>{activeMember.name.split(' ').map(n => n[0]).join('').slice(0, 3)}</span>
                </div>
                <div className="spotlight-title-group">
                  <span className="spotlight-role-badge">{activeMember.role}</span>
                  <h3 className="spotlight-name">{activeMember.name}</h3>
                </div>
              </div>

              <div className="spotlight-meta-list">
                {activeMember.college && (
                  <div className="spotlight-meta-item">
                    <span className="meta-icon">🏛️</span>
                    <div className="meta-content">
                      <span className="meta-label">College</span>
                      <span className="meta-val">{activeMember.college}</span>
                    </div>
                  </div>
                )}
                {activeMember.degree && (
                  <div className="spotlight-meta-item">
                    <span className="meta-icon">🎓</span>
                    <div className="meta-content">
                      <span className="meta-label">Degree / Subject</span>
                      <span className="meta-val">{activeMember.degree}</span>
                    </div>
                  </div>
                )}
                <div className="spotlight-meta-item">
                  <span className="meta-icon">✉️</span>
                  <div className="meta-content">
                    <span className="meta-label">Contact</span>
                    <a href={`mailto:${activeMember.email || 'oubelgiansociety@gmail.com'}`} className="meta-val meta-link">
                      {activeMember.email || 'oubelgiansociety@gmail.com'}
                    </a>
                  </div>
                </div>
              </div>

              {/* QUICK-SELECT MEMBER CHIPS */}
              <div className="spotlight-quick-select">
                <span className="quick-select-label">Select Committee Member:</span>
                <div className="quick-chips-row">
                  {SOCIETY_DATA.committee.map(m => (
                    <button
                      key={m.id}
                      type="button"
                      className={`quick-member-chip ${activeId === m.id ? 'chip-active' : ''}`}
                      onClick={() => setActiveId(m.id)}
                    >
                      {m.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

