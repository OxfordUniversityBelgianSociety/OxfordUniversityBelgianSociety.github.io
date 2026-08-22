import React from 'react';

export default function About() {
  return (
    <section id="who-we-are" className="about-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-kicker">🇧🇪 Who Are We</div>
          <h2 className="section-title">A Welcoming Belgian Community in Oxford</h2>
          <p className="section-desc">
            Founded to celebrate Belgian culture, foster lifelong friendships, and create a vibrant intellectual and social home away from home across the University of Oxford.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-icon">🍻</div>
            <h3>Gezelligheid & Gastronomy</h3>
            <p>
              From guided Trappist beer and cheese tastings to fresh Liège waffle picnics in University Parks and lively pub nights.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">🏛️</div>
            <h3>Annual Galas & Tradition</h3>
            <p>
              Our flagship annual Black Tie Banquet brings together Oxford students, fellows, and Belgian alumni for an unforgettable formal evening.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">🤝</div>
            <h3>Tri-Varsity Network</h3>
            <p>
              Strong partnership with the Cambridge University Belgian Society (CUBS) and London Universities Belgian Society (LUBS) with reciprocal member rates.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">🇪🇺</div>
            <h3>Dialogue & Community</h3>
            <p>
              Engaging talks on European politics and Belgian diplomacy, plus dedicated welfare support for freshers settling into Oxford collegiate life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
