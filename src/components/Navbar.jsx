import React, { useState } from 'react';
import { SOCIETY_DATA } from '../data/societyData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);
  const { links } = SOCIETY_DATA.society;

  return (
    <>
      <div className="belgian-top-bar" aria-hidden="true">
        <div className="bar-black"></div>
        <div className="bar-yellow"></div>
        <div className="bar-red"></div>
      </div>

      <div className="multilingual-ticker">
        <span>
          🇧🇪 Bienvenue <span className="ticker-dot">•</span> Welkom <span className="ticker-dot">•</span> Willkommen <span className="ticker-dot">•</span> Welcome to Oxford University Belgian Society
        </span>
      </div>

      <header className="site-nav">
        <div className="nav-container">
          <a href="#intro" className="nav-brand" onClick={closeMenu} aria-label="OUBS Home">
            <img
              src="/logos/blason_horizontal_bleu.png"
              alt="Oxford University Belgian Society"
              className="nav-brand-logo"
            />
          </a>

          <div className="nav-right-group">
            <nav className="nav-main-menu">
              <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`} id="navLinks">
                <li><a href="#events" onClick={closeMenu}>Events</a></li>
                <li><a href="#membership" onClick={closeMenu}>Membership</a></li>
                <li><a href="#committee" onClick={closeMenu}>Committee</a></li>
                <li><a href="#term-card" onClick={closeMenu}>Term Card</a></li>
                <li><a href="#contacts" onClick={closeMenu}>Contacts</a></li>

                <li className="mobile-menu-actions">
                  <div className="mobile-social-icons">
                    <a
                      href={links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-icon-btn nav-icon-instagram"
                      aria-label="Instagram"
                      title="Instagram (@oubelgiansociety)"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href={links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-icon-btn nav-icon-facebook"
                      aria-label="Facebook"
                      title="Facebook"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href={links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-icon-btn nav-icon-linkedin"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href={links.emailList}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-icon-btn nav-icon-email"
                      aria-label="Email Mailing List"
                      title="Subscribe to Email List"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </a>
                  </div>
                  <a
                    href={links.membershipForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-sm mobile-join-btn"
                  >
                    Join Us &rarr;
                  </a>
                </li>
              </ul>
            </nav>

            <div className="nav-actions-group">
              <div className="nav-divider" aria-hidden="true"></div>

              <div className="nav-social-icons">
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-icon-btn nav-icon-instagram"
                  title="Follow us on Instagram (@oubelgiansociety)"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                <a
                  href={links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-icon-btn nav-icon-facebook"
                  title="Follow us on Facebook"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-icon-btn nav-icon-linkedin"
                  title="Connect with us on LinkedIn"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                <a
                  href={links.emailList}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-icon-btn nav-icon-email"
                  title="Join our Email Mailing List"
                  aria-label="Email List"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>

              <div className="nav-cta">
                <a
                  href={links.membershipForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-sm"
                >
                  Join
                </a>
              </div>
            </div>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
