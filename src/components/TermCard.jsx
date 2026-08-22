import React from 'react';
import { SOCIETY_DATA } from '../data/societyData';

function FriesSketch() {
  return (
    <div className="termcard-sketch-wrap" aria-hidden="true">
      <svg
        viewBox="0 0 380 440"
        className="termcard-sketch-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fry-grad-main" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffea9f" />
            <stop offset="50%" stopColor="#f5bd47" />
            <stop offset="100%" stopColor="#d48a22" />
          </linearGradient>
          <linearGradient id="fry-grad-alt" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff2ba" />
            <stop offset="60%" stopColor="#f8c858" />
            <stop offset="100%" stopColor="#de952a" />
          </linearGradient>
          <linearGradient id="fry-dark-bevel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cc7c1b" />
            <stop offset="100%" stopColor="#9e560b" />
          </linearGradient>
          <linearGradient id="cone-grad" x1="0%" y1="0%" x2="100%" y2="30%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#faf6ee" />
            <stop offset="70%" stopColor="#eee4d2" />
            <stop offset="100%" stopColor="#d9cdb8" />
          </linearGradient>
          <linearGradient id="cone-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8dcbf" />
            <stop offset="100%" stopColor="#c5b28e" />
          </linearGradient>
          <linearGradient id="mayo-grad" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#fffceb" />
            <stop offset="85%" stopColor="#fbeeaa" />
            <stop offset="100%" stopColor="#edd88f" />
          </linearGradient>
          <linearGradient id="wood-pick" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7ecd5" />
            <stop offset="50%" stopColor="#e5cca0" />
            <stop offset="100%" stopColor="#c7a874" />
          </linearGradient>
        </defs>

        <g className="fry-scene">
          <g className="fry-steam-group">
            <path
              className="fry-steam fry-steam-1"
              d="M165 42 Q158 25 168 12 Q176 0 166 -10"
              stroke="#c89b70"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.5"
            />
            <path
              className="fry-steam fry-steam-2"
              d="M205 38 Q216 20 208 8 Q200 -4 212 -14"
              stroke="#c89b70"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              className="fry-steam fry-steam-3"
              d="M235 48 Q242 32 236 20"
              stroke="#c89b70"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.4"
            />
          </g>

          <g className="fry-bg-group">
            <path
              className="fry-anim fry-anim-bg-1"
              d="M135 150 L125 90 L145 86 L154 150 Z"
              fill="url(#fry-dark-bevel)"
              stroke="#18181b"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <path
              className="fry-anim fry-anim-bg-2"
              d="M245 150 L260 85 L280 90 L262 150 Z"
              fill="url(#fry-dark-bevel)"
              stroke="#18181b"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <path
              className="fry-anim fry-anim-bg-3"
              d="M190 150 L195 55 L218 57 L212 150 Z"
              fill="url(#fry-dark-bevel)"
              stroke="#18181b"
              strokeWidth="5"
              strokeLinejoin="round"
            />
          </g>

          <g className="fry-anim fry-anim-left-2">
            <g transform="rotate(-16 130 180)">
              <rect
                x="115"
                y="90"
                width="24"
                height="120"
                rx="4"
                fill="url(#fry-grad-main)"
                stroke="#18181b"
                strokeWidth="5.5"
                strokeLinejoin="round"
              />
              <path d="M117 93 L137 93" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
            </g>
          </g>

          <g className="fry-anim fry-anim-left-1">
            <g transform="rotate(-8 160 170)">
              <rect
                x="148"
                y="72"
                width="25"
                height="140"
                rx="4"
                fill="url(#fry-grad-alt)"
                stroke="#18181b"
                strokeWidth="5.5"
                strokeLinejoin="round"
              />
              <path d="M151 75 L170 75" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
            </g>
          </g>

          <g className="fry-anim fry-anim-center">
            <g transform="rotate(2 195 170)">
              <rect
                x="184"
                y="58"
                width="26"
                height="150"
                rx="4"
                fill="url(#fry-grad-main)"
                stroke="#18181b"
                strokeWidth="5.5"
                strokeLinejoin="round"
              />
              <path d="M187 61 L207 61" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
            </g>
          </g>

          <g className="fry-anim fry-anim-right-1">
            <g transform="rotate(10 230 170)">
              <rect
                x="218"
                y="68"
                width="25"
                height="140"
                rx="4"
                fill="url(#fry-grad-alt)"
                stroke="#18181b"
                strokeWidth="5.5"
                strokeLinejoin="round"
              />
              <path d="M221 71 L240 71" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
            </g>
          </g>

          <g className="fry-anim fry-anim-right-2">
            <g transform="rotate(18 255 180)">
              <rect
                x="242"
                y="85"
                width="24"
                height="125"
                rx="4"
                fill="url(#fry-grad-main)"
                stroke="#18181b"
                strokeWidth="5.5"
                strokeLinejoin="round"
              />
              <path d="M245 88 L263 88" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
            </g>
          </g>

          <g className="fry-anim fry-anim-left-extra">
            <g transform="rotate(-28 175 160)">
              <rect
                x="160"
                y="110"
                width="24"
                height="95"
                rx="4"
                fill="url(#fry-grad-alt)"
                stroke="#18181b"
                strokeWidth="5"
                strokeLinejoin="round"
              />
            </g>
          </g>

          <g className="fry-anim fry-anim-pick">
            <g transform="rotate(22 250 110)">
              <path
                d="M246 30 L254 30 L252 110 L248 110 Z"
                fill="url(#wood-pick)"
                stroke="#18181b"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M247 110 L246 130 M253 110 L254 130"
                stroke="#18181b"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </g>
          </g>

          <g className="fry-mayo-layer">
            <path
              d="M165 145
                 C150 130 160 112 180 115
                 C190 102 215 105 224 118
                 C240 112 252 128 245 142
                 C255 155 242 170 228 168
                 C218 178 192 176 182 165
                 C168 172 155 160 165 145 Z"
              fill="url(#mayo-grad)"
              stroke="#18181b"
              strokeWidth="5.5"
              strokeLinejoin="round"
            />
            <path
              d="M178 126 Q195 120 215 128"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M192 142 Q210 138 226 148"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.6"
            />
          </g>

          <g className="fry-cone-layer">
            <path
              d="M92 188
                 Q190 220 288 188
                 L200 416
                 Q190 424 180 416
                 Z"
              fill="url(#cone-grad)"
              stroke="#18181b"
              strokeWidth="7"
              strokeLinejoin="round"
            />

            <path
              d="M92 188
                 L184 414
                 L190 320
                 L120 196
                 Z"
              fill="url(#cone-shadow)"
              opacity="0.35"
            />

            <path
              d="M120 196 L188 412"
              stroke="#18181b"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.4"
            />
            <path
              d="M260 194 L196 380"
              stroke="#18181b"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.3"
            />

            <g transform="translate(190, 275) rotate(-3)">
              <rect
                x="-68"
                y="-14"
                width="136"
                height="28"
                rx="4"
                fill="#ffffff"
                stroke="#18181b"
                strokeWidth="4.5"
              />
              <rect x="-66" y="-12" width="44" height="24" fill="#231f20" />
              <rect x="-22" y="-12" width="44" height="24" fill="#ffd100" />
              <rect x="22" y="-12" width="42" height="24" fill="#ef3340" />
              <rect
                x="-66"
                y="-12"
                width="130"
                height="24"
                fill="none"
                stroke="#18181b"
                strokeWidth="3"
              />
            </g>
          </g>

          <g className="fry-sparkles-group" fill="#ffffff" stroke="#18181b" strokeWidth="2">
            <polygon className="fry-sparkle fry-sparkle-1" points="105,145 109,141 113,145 109,149" />
            <polygon className="fry-sparkle fry-sparkle-2" points="275,135 279,131 283,135 279,139" />
            <polygon className="fry-sparkle fry-sparkle-3" points="135,60 138,57 141,60 138,63" />
            <polygon className="fry-sparkle fry-sparkle-4" points="255,50 258,47 261,50 258,53" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function TermCard() {
  const { termCard, society } = SOCIETY_DATA;

  return (
    <section id="term-card" className="term-card-section">
      <div className="section-container">
        <div className="termcard-header-block">
          <span className="section-kicker">📅 {termCard.term}</span>
          <h2 className="termcard-title">{termCard.title}</h2>
          <p className="termcard-lead">{termCard.description}</p>
        </div>

        <div className="termcard-canvas-wrap">
          <div className="termcard-fries-backdrop" aria-hidden="true">
            <FriesSketch />
          </div>

          <div className="termcard-main-col">
            {termCard.imageUrl ? (
              <div className="termcard-poster-frame">
                <img
                  src={termCard.imageUrl}
                  alt={`${termCard.term} Term Card Poster`}
                  className="termcard-full-poster"
                />
              </div>
            ) : (
              <div className="termcard-poster-frame">
                <div className="termcard-poster-header">
                  <div className="termcard-poster-brand">
                    <img
                      src="/logos/crest-white.png"
                      alt="OUBS Crest"
                      className="termcard-crest"
                    />
                    <div>
                      <span className="termcard-sub-header">Oxford University Belgian Society</span>
                      <h3 className="termcard-main-term">{termCard.term}</h3>
                    </div>
                  </div>
                  <div className="termcard-status-pill">
                    <span className="live-dot"></span>
                    <span>{termCard.statusBadge}</span>
                  </div>
                </div>

                <div className="termcard-events-list">
                  {termCard.events.map((evt, idx) => (
                    <div key={idx} className={`termcard-event-row ${evt.isPlaceholder ? 'is-placeholder' : ''}`}>
                      <div className="termcard-event-week">{evt.week}</div>
                      <div className="termcard-event-info">
                        <h4>{evt.title}</h4>
                        <p>{evt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="termcard-poster-footer">
                  <p>🔔 The official term card poster will be published on Instagram ahead of 0th Week.</p>
                </div>
              </div>
            )}

            <div className="termcard-single-actions">
              <a
                href={society.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Follow @oubelgiansociety &rarr;
              </a>
              <a
                href={society.links.emailList}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Join Mailing List
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


