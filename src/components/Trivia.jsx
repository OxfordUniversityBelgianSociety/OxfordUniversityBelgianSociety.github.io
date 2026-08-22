import React from 'react';
import { SOCIETY_DATA } from '../data/societyData';

export default function Trivia() {
  return (
    <section className="trivia-section">
      <div className="section-container">
        <div className="section-header" style={{ marginBottom: '32px' }}>
          <div className="section-kicker">💡 Belgian & Oxford Lore</div>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>Did You Know?</h2>
        </div>
        <div className="trivia-grid">
          {SOCIETY_DATA.trivia.map((t, idx) => (
            <div key={idx} className="trivia-card">
              <h4>{t.title}</h4>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
