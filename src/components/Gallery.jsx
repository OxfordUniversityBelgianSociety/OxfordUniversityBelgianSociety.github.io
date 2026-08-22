import React, { useState } from 'react';
import { SOCIETY_DATA } from '../data/societyData';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const categories = ['All', 'Banquets', 'Tastings', 'Socials', 'Inter-Varsity'];

  const filteredItems = selectedCategory === 'All'
    ? SOCIETY_DATA.gallery
    : SOCIETY_DATA.gallery.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-kicker">📸 Memories & Events</div>
          <h2 className="section-title">Society Gallery</h2>
          <p className="section-desc">
            A glimpse into the traditions, celebrations, tastings, and friendships that define the Oxford University Belgian Society experience.
          </p>
        </div>

        <div className="gallery-filter-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              className={`gallery-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setActiveModalItem(item)}
            >
              <div className="gallery-img-wrapper">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-zoom-icon">🔍 View Photo</span>
                </div>
              </div>
              <div className="gallery-info">
                <div className="gallery-meta">
                  <span className="gallery-cat-badge">{item.category}</span>
                  <span className="gallery-term-text">{item.term}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-footer-notice">
          <p>
            More event highlights, reels, and photo albums are shared regularly on our Instagram.
          </p>
          <a
            href={SOCIETY_DATA.society.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            Follow @oubelgiansociety on Instagram &rarr;
          </a>
        </div>
      </div>

      {activeModalItem && (
        <div className="gallery-modal-backdrop" onClick={() => setActiveModalItem(null)}>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <button
              className="gallery-modal-close"
              onClick={() => setActiveModalItem(null)}
              aria-label="Close photo preview"
            >
              &times;
            </button>
            <div className="gallery-modal-image-wrap">
              <img src={activeModalItem.imageUrl} alt={activeModalItem.title} />
            </div>
            <div className="gallery-modal-details">
              <div className="gallery-meta">
                <span className="gallery-cat-badge">{activeModalItem.category}</span>
                <span className="gallery-term-text">{activeModalItem.term}</span>
              </div>
              <h3>{activeModalItem.title}</h3>
              <p>{activeModalItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
