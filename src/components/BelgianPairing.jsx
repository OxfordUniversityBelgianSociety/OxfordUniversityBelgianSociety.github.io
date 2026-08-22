import React, { useState } from 'react';
import { SOCIETY_DATA } from '../data/societyData';

export default function BelgianPairing() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activePairing = SOCIETY_DATA.pairings[selectedIndex];

  return (
    <section id="pairing" className="pairing-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-kicker">🍫 The Belgian Experience</div>
          <h2 className="section-title">The Oxford-Belgian Pairing Guide</h2>
          <p className="section-desc">
            Select your current Oxford mood or situation to discover your bespoke Belgian brew and artisanal delicacy recommendation.
          </p>
        </div>

        <div className="pairing-container">
          <div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: 'var(--oxford-blue)', marginBottom: '8px' }}>
              Choose Your Oxford Situation:
            </h3>
            <div className="pairing-scenarios">
              {SOCIETY_DATA.pairings.map((p, idx) => (
                <button
                  key={p.id}
                  className={`scenario-btn ${idx === selectedIndex ? 'active' : ''}`}
                  onClick={() => setSelectedIndex(idx)}
                >
                  <span>{p.situation}</span>
                  <span className="scenario-arrow">&rarr;</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pairing-result-card">
            <div className="pairing-beer-header">
              <div className="pairing-beer-icon">🍺</div>
              <div className="pairing-beer-titles">
                <h3>{activePairing.beerName}</h3>
                <span>{activePairing.type}</span>
              </div>
            </div>

            <div className="pairing-details-box">
              <div className="pairing-field">
                <h4>Belgian Delicacy Match</h4>
                <div className="pairing-treat-badge">🧇 {activePairing.treatName}</div>
              </div>

              <div className="pairing-field">
                <h4>Flavor & Aroma Profile</h4>
                <p>{activePairing.tastingNotes}</p>
              </div>

              <div className="pairing-field why-box">
                <h4>Why This Pairs with Your Oxford Moment</h4>
                <p>{activePairing.whyItWorks}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
