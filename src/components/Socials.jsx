import React from 'react';
import { SOCIETY_DATA } from '../data/societyData';

export default function Socials() {
  const { links } = SOCIETY_DATA.society;

  const contacts = [
    {
      id: "instagram",
      name: "Instagram",
      handle: "@oubelgiansociety",
      link: links.instagram,
      colorClass: "contact-pill-insta",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      id: "email",
      name: "Email",
      handle: links.contactEmail,
      link: `mailto:${links.contactEmail}`,
      colorClass: "contact-pill-email",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      )
    },
    {
      id: "newsletter",
      name: "Mailing List",
      handle: "Subscribe for Updates",
      link: links.emailList,
      colorClass: "contact-pill-newsletter",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      handle: "OUBS Network",
      link: links.linkedin,
      colorClass: "contact-pill-linkedin",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      id: "linktree",
      name: "Linktree",
      handle: "linktr.ee/BelgianSoc",
      link: links.linktree,
      colorClass: "contact-pill-linktree",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      )
    },
    {
      id: "facebook",
      name: "Facebook",
      handle: "OxfordUniversityBelgianSociety",
      link: links.facebook,
      colorClass: "contact-pill-fb",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="contacts" className="contacts-section">
      <div className="section-container">
        <div className="section-header" style={{ marginBottom: '28px' }}>
          <span className="section-kicker">✉️ Get in Touch</span>
          <h2 className="section-title">Contacts</h2>
        </div>

        <div className="contacts-simple-grid">
          {contacts.map(item => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-link-pill ${item.colorClass}`}
            >
              <div className="contact-pill-icon">{item.icon}</div>
              <div className="contact-pill-content">
                <span className="contact-pill-name">{item.name}</span>
                <span className="contact-pill-handle">{item.handle}</span>
              </div>
              <span className="contact-pill-arrow">&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

