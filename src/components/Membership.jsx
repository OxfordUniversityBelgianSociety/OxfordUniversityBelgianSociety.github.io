import React, { useState } from 'react';
import { SOCIETY_DATA } from '../data/societyData';

function SketchyAtomium({ highlight }) {
  const isLifeActive = highlight === 'life';
  const isAnyActive = Boolean(highlight);

  return (
    <div className="sketchy-atomium-wrap" aria-hidden="true">
      <svg
        viewBox="0 0 500 510"
        className="sketchy-atomium-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="atomium-drop-shadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#002147" floodOpacity="0.14" />
          </filter>
          <filter id="atom-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#f59e0b" floodOpacity="0.55" />
          </filter>

          <radialGradient id="atom-sphere-warm" cx="35%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#f8f5ee" />
            <stop offset="70%" stopColor="#ded5be" />
            <stop offset="100%" stopColor="#bfae8c" />
          </radialGradient>
        </defs>

        <g
          filter={isLifeActive ? 'url(#atom-glow)' : 'url(#atomium-drop-shadow)'}
          className={`atomium-group ${isAnyActive ? 'is-active' : ''} ${isLifeActive ? 'is-life-active' : ''}`}
        >
          <path
            d="M239 55 L239 220 L261 220 L261 55 Z"
            fill="#dcd3bd"
            stroke="#18181b"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <line x1="243" y1="65" x2="243" y2="185" stroke="#f6f2e8" strokeWidth="4" strokeLinecap="round" />

          <path
            d="M242 45 L80 110 L88 130 L250 65 Z"
            fill="#dcd3bd"
            stroke="#18181b"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <line x1="230" y1="60" x2="100" y2="115" stroke="#f6f2e8" strokeWidth="4" strokeLinecap="round" />

          <path
            d="M258 45 L420 110 L412 130 L250 65 Z"
            fill="#dcd3bd"
            stroke="#18181b"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <line x1="270" y1="60" x2="400" y2="115" stroke="#f6f2e8" strokeWidth="4" strokeLinecap="round" />

          <path
            d="M80 120 L123 342 L143 338 L100 116 Z"
            fill="#dcd3bd"
            stroke="#18181b"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <line x1="94" y1="135" x2="132" y2="330" stroke="#f6f2e8" strokeWidth="4" strokeLinecap="round" />

          <path
            d="M420 120 L377 342 L357 338 L400 116 Z"
            fill="#dcd3bd"
            stroke="#18181b"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <line x1="406" y1="135" x2="368" y2="330" stroke="#f6f2e8" strokeWidth="4" strokeLinecap="round" />

          <path
            d="M90 120 L240 210 L250 194 L100 104 Z"
            fill="#dcd3bd"
            stroke="#18181b"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <line x1="110" y1="120" x2="230" y2="192" stroke="#f6f2e8" strokeWidth="4" strokeLinecap="round" />

          <path
            d="M410 120 L260 210 L250 194 L400 104 Z"
            fill="#dcd3bd"
            stroke="#18181b"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <line x1="390" y1="120" x2="270" y2="192" stroke="#f6f2e8" strokeWidth="4" strokeLinecap="round" />

          <path
            d="M239 220 L239 430 L261 430 L261 220 Z"
            fill="#dcd3bd"
            stroke="#18181b"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <line x1="243" y1="260" x2="243" y2="400" stroke="#f6f2e8" strokeWidth="4" strokeLinecap="round" />

          <path
            d="M250 220 L145 340 L132 326 L237 206 Z"
            fill="#dcd3bd"
            stroke="#18181b"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <line x1="230" y1="230" x2="148" y2="322" stroke="#f6f2e8" strokeWidth="4" strokeLinecap="round" />

          <path
            d="M250 220 L355 340 L368 326 L263 206 Z"
            fill="#dcd3bd"
            stroke="#18181b"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <line x1="270" y1="230" x2="352" y2="322" stroke="#f6f2e8" strokeWidth="4" strokeLinecap="round" />

          <path
            d="M135 350 L242 420 L252 404 L145 334 Z"
            fill="#dcd3bd"
            stroke="#18181b"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <line x1="150" y1="350" x2="235" y2="405" stroke="#f6f2e8" strokeWidth="4" strokeLinecap="round" />

          <path
            d="M365 350 L258 420 L248 404 L355 334 Z"
            fill="#dcd3bd"
            stroke="#18181b"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <line x1="350" y1="350" x2="265" y2="405" stroke="#f6f2e8" strokeWidth="4" strokeLinecap="round" />

          <path
            d="M214 456 Q250 440 286 456 L298 482 Q308 494 290 494 L210 494 Q192 494 202 482 Z"
            fill="#dcd3bd"
            stroke="#18181b"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <g stroke="#18181b" strokeWidth="6" strokeLinecap="round">
            <line x1="222" y1="484" x2="222" y2="494" />
            <line x1="236" y1="480" x2="236" y2="494" />
            <line x1="250" y1="478" x2="250" y2="494" />
            <line x1="264" y1="480" x2="264" y2="494" />
            <line x1="278" y1="484" x2="278" y2="494" />
          </g>

          <path
            d="M102 368 L36 476 Q20 488 38 494 L106 494 Q118 494 110 480 L144 380 Z"
            fill="#dcd3bd"
            stroke="#18181b"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <polygon
            points="88,396 50,474 94,474"
            fill="#ffffff"
            stroke="#18181b"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <g stroke="#18181b" strokeWidth="6" strokeLinecap="round">
            <line x1="82" y1="416" x2="58" y2="444" />
            <line x1="58" y1="444" x2="90" y2="466" />
          </g>

          <path
            d="M398 368 L464 476 Q480 488 462 494 L394 494 Q382 494 390 480 L356 380 Z"
            fill="#dcd3bd"
            stroke="#18181b"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <polygon
            points="412,396 450,474 406,474"
            fill="#ffffff"
            stroke="#18181b"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <g stroke="#18181b" strokeWidth="6" strokeLinecap="round">
            <line x1="418" y1="416" x2="442" y2="444" />
            <line x1="442" y1="444" x2="410" y2="466" />
          </g>

          <circle cx="250" cy="55" r="38" fill="url(#atom-sphere-warm)" stroke="#18181b" strokeWidth="8" />
          <path d="M232 30 Q250 24 266 32" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.9" />

          <circle cx="88" cy="118" r="46" fill="url(#atom-sphere-warm)" stroke="#18181b" strokeWidth="8" />
          <path d="M66 90 Q88 82 108 92" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity="0.9" />

          <circle cx="412" cy="118" r="46" fill="url(#atom-sphere-warm)" stroke="#18181b" strokeWidth="8" />
          <path d="M390 90 Q412 82 432 92" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity="0.9" />

          <circle cx="132" cy="348" r="44" fill="url(#atom-sphere-warm)" stroke="#18181b" strokeWidth="8" />
          <path d="M112 320 Q132 312 150 322" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.9" />

          <circle cx="368" cy="348" r="44" fill="url(#atom-sphere-warm)" stroke="#18181b" strokeWidth="8" />
          <path d="M348 320 Q368 312 386 322" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.9" />

          <circle cx="250" cy="428" r="44" fill="url(#atom-sphere-warm)" stroke="#18181b" strokeWidth="8" />
          <path d="M230 400 Q250 392 270 402" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.9" />

          <circle cx="250" cy="216" r="68" fill="url(#atom-sphere-warm)" stroke="#18181b" strokeWidth="8" />
          <path d="M218 174 Q248 162 280 178" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" opacity="0.95" />
          <circle cx="230" cy="188" r="6" fill="#ffffff" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

export default function Membership() {
  const [hoveredTier, setHoveredTier] = useState(null);
  const { links } = SOCIETY_DATA.society;
  const { membership } = SOCIETY_DATA;

  return (
    <section id="membership" className="membership-section">
      <div className="section-container">
        <div className="membership-layout-grid">
          <div className="membership-main-col">
            <span className="section-kicker">Membership &amp; Community</span>
            <h2 className="membership-title">Become an OUBS Member</h2>
            <p className="membership-lead">
              The membership is only £20 for a year and £30 for a lifetime for current students, staff, and alumni. Join us to unlock discounted event tickets, priority banquet access, and invitations to exclusive tastings.
            </p>

            <ul className="benefits-list">
              <li>
                <span className="check-icon">✓</span>
                <span>Discounted or free entry to OUBS events</span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span>Priority booking for the Annual Black Tie Banquet</span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span>Ticket rights at Cambridge (CUBS) & London (LUBS) events</span>
              </li>
            </ul>

            <div className="membership-action-row">
              <a href={links.membershipForm} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                Sign Up for Membership &rarr;
              </a>
              <a href={links.emailList} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Join Mailing List
              </a>
            </div>
          </div>

          <div className="membership-cards-canvas">
            <div className="membership-atomium-backdrop" aria-hidden="true">
              <SketchyAtomium highlight={hoveredTier} />
            </div>

            <div className="membership-cards-col">
              <div
                className={`membership-tier-card ${hoveredTier === 'annual' ? 'is-focused' : ''}`}
                onMouseEnter={() => setHoveredTier('annual')}
                onMouseLeave={() => setHoveredTier(null)}
              >
                <div className="tier-info">
                  <div className="tier-title-row">
                    <h3>Annual Membership</h3>
                    <span className="tier-price-pill">{membership.annualPrice}</span>
                  </div>
                  <p>Full access for the current academic year across all three terms.</p>
                </div>
                <a href={links.membershipForm} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-gold">
                  Join
                </a>
              </div>

              <div
                className={`membership-tier-card ${hoveredTier === 'life' ? 'is-focused' : ''}`}
                onMouseEnter={() => setHoveredTier('life')}
                onMouseLeave={() => setHoveredTier(null)}
              >
                <div className="tier-info">
                  <div className="tier-title-row">
                    <h3>Life Membership</h3>
                    <span className="tier-price-pill">{membership.lifePrice}</span>
                  </div>
                  <p>Lifetime access for your entire degree and beyond as an active alumnus.</p>
                </div>
                <a href={links.membershipForm} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-gold">
                  Join Life
                </a>
              </div>

              <div
                className={`membership-tier-card ${hoveredTier === 'mailing' ? 'is-focused' : ''}`}
                onMouseEnter={() => setHoveredTier('mailing')}
                onMouseLeave={() => setHoveredTier(null)}
              >
                <div className="tier-info">
                  <div className="tier-title-row">
                    <h3>Mailing List</h3>
                    <span className="tier-price-pill tier-price-free">Free</span>
                  </div>
                  <p>Stay informed about term cards, open lectures, and public ticket drops.</p>
                </div>
                <a href={links.emailList} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
