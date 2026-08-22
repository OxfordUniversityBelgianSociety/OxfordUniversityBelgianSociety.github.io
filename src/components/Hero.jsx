import React from 'react';

function SketchyBelgianFlag({ mirrored = false }) {
  return (
    <div className={`sketchy-flag-wrap ${mirrored ? 'mirrored' : ''}`} aria-hidden="true">
      <svg
        viewBox="0 0 90 85"
        className="sketchy-flag-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={`sketch-shadow-${mirrored ? 'm' : 'r'}`} x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="1" dy="3" stdDeviation="2" floodColor="#002147" floodOpacity="0.12" />
          </filter>
        </defs>

        <g filter={`url(#sketch-shadow-${mirrored ? 'm' : 'r'})`}>
          {/* Flagpole */}
          <line
            x1="24" y1="82"
            x2="16" y2="10"
            stroke="#573a27"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <line
            x1="24" y1="82"
            x2="16" y2="10"
            stroke="#1c1917"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Finial Spearhead */}
          <path
            d="M16 3 L20 10 L16 13 L12 10 Z"
            fill="#f59e0b"
            stroke="#1c1917"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="11" r="1.8" fill="#fbbf24" />

          {/* Hanging cords & tassel */}
          <path
            d="M16 13 C14 20 10 24 9 32"
            stroke="#d97706"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <circle cx="9" cy="33" r="2" fill="#b45309" stroke="#1c1917" strokeWidth="0.7" />

          {/* Belgian Tricolor (Black, Yellow, Red) */}
          <g>
            {/* Stripe 1: Black (hoist) */}
            <path
              d="M17 14 C25 11 32 16 38 13 L34 58 C28 60 22 56 15 58 Z"
              fill="#18181b"
              stroke="#18181b"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            {/* Stripe 2: Yellow/Gold (middle) */}
            <path
              d="M38 13 C45 10 52 16 58 13 L54 59 C48 61 41 56 34 58 Z"
              fill="#f59e0b"
              stroke="#18181b"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            {/* Stripe 3: Red (fly) */}
            <path
              d="M58 13 C65 11 72 17 80 14 L74 60 C68 62 61 57 54 59 Z"
              fill="#dc2626"
              stroke="#18181b"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />

            {/* Hand-drawn contour ripples */}
            <path
              d="M17 14 C35 9 55 18 80 14"
              stroke="#18181b"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M15 58 C33 56 53 63 74 60"
              stroke="#18181b"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            {/* Wave seam dashes */}
            <path
              d="M38 14 C38 28 36 46 34 57"
              stroke="#18181b"
              strokeWidth="1.2"
              strokeDasharray="2 3"
              opacity="0.4"
            />
            <path
              d="M58 14 C58 29 56 47 54 58"
              stroke="#18181b"
              strokeWidth="1.2"
              strokeDasharray="2 3"
              opacity="0.4"
            />

            {/* Sketch crosshatching & shadow lines */}
            <path d="M19 21 L24 25 M18 29 L23 33 M17 37 L22 41" stroke="#ffffff" strokeWidth="0.8" opacity="0.35" strokeLinecap="round" />
            <path d="M40 24 L45 29 M39 34 L44 39" stroke="#b45309" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
            <path d="M60 22 L65 27 M59 32 L64 37 M58 42 L63 47" stroke="#7f1d1d" strokeWidth="1" opacity="0.45" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="intro" className="hero-classic-section">
      <div className="hero-classic-container">
        <div className="hero-title-row">
          <SketchyBelgianFlag mirrored={true} />

          <h1 className="hero-classic-title">
            Oxford University Belgian Society
          </h1>

          <SketchyBelgianFlag mirrored={false} />
        </div>
      </div>
    </section>
  );
}
