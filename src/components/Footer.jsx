import React from 'react';
import { SOCIETY_DATA } from '../data/societyData';

export default function Footer() {
  const { links } = SOCIETY_DATA.society;

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <img src="/logos/logo-principal-avatar.png" alt="OUBS Logo" width="44" height="44" style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3))' }} />
            <h3 style={{ margin: 0 }}>Oxford University Belgian Society (OUBS)</h3>
          </div>
          <p>
            Fostering cultural affinity, friendship, and academic connections between Belgium and the University of Oxford.
          </p>
          <div className="footer-motto">
            "L'union fait la force • Eendracht maakt macht"
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><a href="#intro">Intro</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#membership">Membership</a></li>
            <li><a href="#committee">Committee</a></li>
            <li><a href="#term-card">Term Card</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Key Links</h4>
          <ul className="footer-links">
            <li><a href={links.membershipForm} target="_blank" rel="noopener noreferrer">Membership Sign-Up</a></li>
            <li><a href={links.emailList} target="_blank" rel="noopener noreferrer">Newsletter Mailchimp</a></li>
            <li><a href={links.linktree} target="_blank" rel="noopener noreferrer">Official Linktree</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Social & Contact</h4>
          <ul className="footer-links">
            <li><a href={links.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Page</a></li>
            <li><a href={links.facebook} target="_blank" rel="noopener noreferrer">Facebook Page</a></li>
            <li><a href={`mailto:${links.contactEmail}`}>{links.contactEmail}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>&copy; 2026 Oxford University Belgian Society (OUBS). All rights reserved.</div>
        <div>Designed for the Belgian student, researcher, and alumni community at Oxford.</div>
      </div>
    </footer>
  );
}
