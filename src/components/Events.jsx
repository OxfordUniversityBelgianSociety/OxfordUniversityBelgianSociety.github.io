import React, { useState } from 'react';

function EventsSketch({ highlight }) {
  const isChocActive = highlight === 'chocolate' || highlight === 'both';
  const isBeerActive = highlight === 'beer' || highlight === 'emblem' || highlight === 'both';
  const isEmblemActive = highlight === 'emblem';

  const isChocDimmed = highlight && !isChocActive;
  const isBeerDimmed = highlight && !isBeerActive;

  return (
    <div className="events-sketch-wrap" aria-hidden="true">
      <svg
        viewBox="0 0 400 450"
        className="events-sketch-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="choc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a3826c" />
            <stop offset="50%" stopColor="#8e6d58" />
            <stop offset="100%" stopColor="#7a5944" />
          </linearGradient>
          <linearGradient id="choc-bevel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b6957f" />
            <stop offset="100%" stopColor="#7d5c47" />
          </linearGradient>
          <linearGradient id="wrapper-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#faf7f2" />
            <stop offset="50%" stopColor="#eee5d8" />
            <stop offset="100%" stopColor="#dcd0be" />
          </linearGradient>

          <linearGradient id="beer-glass-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#edd5bc" />
            <stop offset="30%" stopColor="#deb997" />
            <stop offset="70%" stopColor="#c89b70" />
            <stop offset="100%" stopColor="#deb997" />
          </linearGradient>
          <linearGradient id="cap-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef0cb" />
            <stop offset="50%" stopColor="#f5dc93" />
            <stop offset="100%" stopColor="#e3c26d" />
          </linearGradient>

          <filter id="beer-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#f59e0b" floodOpacity="0.55" />
          </filter>
          <filter id="choc-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#b45309" floodOpacity="0.5" />
          </filter>
          <filter id="emblem-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#f59e0b" floodOpacity="0.8" />
          </filter>
        </defs>

        <g>
          <g
            transform="rotate(8 270 240)"
            className={`sketch-element sketch-chocolate ${isChocActive ? 'is-active' : ''} ${isChocDimmed ? 'is-dimmed' : ''}`}
          >
            <rect
              x="180"
              y="70"
              width="170"
              height="280"
              rx="12"
              fill="url(#choc-grad)"
              stroke="#18181b"
              strokeWidth="7"
            />

            {[
              { x: 195, y: 85 },
              { x: 270, y: 85 },
              { x: 195, y: 145 },
              { x: 270, y: 145 },
              { x: 195, y: 205 },
              { x: 270, y: 205 },
              { x: 195, y: 265 },
              { x: 270, y: 265 },
            ].map((sq, i) => (
              <g key={i}>
                <rect
                  x={sq.x}
                  y={sq.y}
                  width="65"
                  height="50"
                  rx="6"
                  fill="url(#choc-bevel)"
                  stroke="#18181b"
                  strokeWidth="4.5"
                />
                <rect
                  x={sq.x + 8}
                  y={sq.y + 6}
                  width="49"
                  height="38"
                  rx="3"
                  fill="#8b6a55"
                  stroke="#18181b"
                  strokeWidth="3.5"
                />
                <path
                  d={`M ${sq.x + 10} ${sq.y + 38} L ${sq.x + 10} ${sq.y + 8} L ${sq.x + 50} ${sq.y + 8}`}
                  stroke="#cfb39e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </g>
            ))}

            <path
              d="M176 250 L195 240 L220 252 L250 238 L285 250 L320 236 L354 248 L354 354 Q354 362 344 362 L188 362 Q176 362 176 350 Z"
              fill="url(#wrapper-gold)"
              stroke="#18181b"
              strokeWidth="7"
              strokeLinejoin="round"
            />
            <path d="M195 240 L210 270 M250 238 L260 275 M320 236 L310 270" stroke="#18181b" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
            <path d="M190 310 L340 310" stroke="#18181b" strokeWidth="3" strokeDasharray="6 4" opacity="0.4" />
          </g>

          <g className={`sketch-element sketch-beer ${isBeerActive ? 'is-active' : ''} ${isBeerDimmed ? 'is-dimmed' : ''}`}>
            <path
              d="M142 50
                 L166 50
                 L164 125
                 Q164 150 196 195
                 Q206 210 206 230
                 L206 395
                 Q206 414 154 414
                 Q102 414 102 395
                 L102 230
                 Q102 210 112 195
                 Q144 150 144 125
                 Z"
              fill="url(#beer-glass-grad)"
              stroke="#18181b"
              strokeWidth="7.5"
              strokeLinejoin="round"
            />

            <path
              d="M112 225 L112 385"
              stroke="#ffffff"
              strokeWidth="7"
              strokeLinecap="round"
              opacity="0.3"
            />
            <path
              d="M120 195 Q145 155 147 130"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.35"
            />

            <rect
              x="142"
              y="85"
              width="24"
              height="20"
              rx="3"
              fill="url(#cap-gold)"
              stroke="#18181b"
              strokeWidth="5"
            />

            <path
              d="M136 50 Q154 42 172 50 L170 58 L138 58 Z"
              fill="url(#cap-gold)"
              stroke="#18181b"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            <path d="M139 56 L141 51 M147 57 L148 50 M154 57 L154 49 M161 57 L160 50 M167 56 L165 51" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" />

            <g
              transform="translate(154, 305)"
              className={`sketch-element sketch-emblem ${isEmblemActive ? 'is-active' : ''}`}
            >
              <ellipse cx="0" cy="0" rx="42" ry="54" fill="#faf8f3" stroke="#18181b" strokeWidth="6" />
              <ellipse cx="0" cy="0" rx="34" ry="45" fill="none" stroke="#e3c26d" strokeWidth="3.5" />
              <path
                d="M-10 -15 Q0 -25 10 -15 Q15 0 0 15 Q-15 0 -10 -15 Z"
                fill="#e3c26d"
                stroke="#18181b"
                strokeWidth="3"
              />
              <circle cx="0" cy="-6" r="3.5" fill="#18181b" />
              <path d="M-22 24 Q0 28 22 24" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
              <path d="M-16 32 Q0 35 16 32" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Events() {
  const [hoveredType, setHoveredType] = useState(null);

  const eventCategories = [
    {
      type: 'beer',
      icon: '🍻',
      title: 'Regular Socials & Tastings',
      desc: 'Fortnightly pub gatherings, guided Belgian beer and chocolate tastings, inter-society mixers, and casual college meetups.',
    },
    {
      type: 'chocolate',
      icon: '👔',
      title: 'Annual Black Tie Banquet',
      desc: 'Our flagship formal gala hosted in a historic Oxford college dining hall, featuring a multi-course feast, welcome reception, and after-dinner drinks.',
    },
    {
      type: 'emblem',
      icon: '🏛️',
      title: 'Annual Embassy Visit & Reception',
      desc: 'An exclusive annual trip to London for a private drinks reception and diplomatic networking evening at the Embassy of Belgium.',
    },
    {
      type: 'both',
      icon: '🎓',
      title: 'Tri-Varsity Mixers',
      desc: 'Joint social gatherings, exchanges, and collaborative events with our counterpart Belgian societies from Cambridge (CUBS) and London (LUBS).',
    },
  ];

  return (
    <section id="events" className="events-section">
      <div className="section-container">
        <div className="events-header">
          <span className="section-kicker">Society Life &amp; Calendar</span>
          <h2 className="events-title">Events &amp; Traditions</h2>
          <p className="events-lead">
            Throughout the academic year, OUBS curates a rich variety of social and formal occasions that bring together the Belgians of Oxford.
          </p>
        </div>

        <div className="events-canvas-wrap">
          <div className="events-sketch-backdrop" aria-hidden="true">
            <EventsSketch highlight={hoveredType} />
          </div>

          <div className="events-cards-grid">
            {eventCategories.map((item, idx) => (
              <div
                key={idx}
                className={`event-feature-card ${hoveredType === item.type ? 'is-focused' : ''}`}
                onMouseEnter={() => setHoveredType(item.type)}
                onMouseLeave={() => setHoveredType(null)}
              >
                <div className="event-feature-icon">{item.icon}</div>
                <div className="event-feature-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
