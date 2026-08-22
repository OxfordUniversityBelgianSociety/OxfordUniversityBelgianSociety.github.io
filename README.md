# Oxford University Belgian Society (OUBS) Website (Vite + React)

Draft website for the **Oxford University Belgian Society (OUBS)** built with **Vite**, **React**, and modular CSS components.

---

## Features

- **Belgian Identity & Oxford Prestige**: Oxford Blue (`#002147`) paired with Belgian tricolor accents (`#121214`, `#fbbf24`, `#dc2626`), crest badge, and multilingual greetings (*Bienvenue / Welkom / Willkommen / Welcome*).
- **Interactive Term Card (`src/components/TermCard.jsx`)**:
  - Filter by Term (*Michaelmas*, *Hilary*, *Trinity*, *All*)
  - Filter by Event Category (*Tastings*, *Formals & Banquets*, *Socials*, *Inter-University*)
  - Instant **Add to Calendar** (`.ics` download for Google Calendar, Apple Calendar, and Outlook)
  - Direct ticket and sign-up integration
- **Executive Committee Showcase (`src/components/Committee.jsx`)**:
  - Dynamic committee cards with roles, colleges, degrees, Belgian hometowns, and favorite Belgian beers
- **Interactive Belgian Pairing Engine (`src/components/BelgianPairing.jsx`)**:
  - Pairs Oxford student scenarios (e.g. *Post-tutorial crisis*, *Radcliffe Camera all-nighter*, *Sunny Cherwell punting*, *Sub-fusc pre-drinks*) with authentic Trappist beers and delicacies.
- **Membership & Key Links Integration (`src/components/Membership.jsx`)**:
  - Official Google Forms Membership Sign-Up
  - Annual Black Tie Banquet Reservation Form
  - Mailchimp Email List Subscription
  - Direct links to Instagram (`@oubelgiansociety`), LinkedIn, Linktree, and Facebook

---

## Project Structure

```
website/
├── index.html                  # Vite HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite React configuration
├── public/
│   └── favicon.svg             # OUBS crest favicon
└── src/
    ├── main.jsx                # React app entry point
    ├── App.jsx                 # App layout & toast notification container
    ├── index.css               # Belgian theme, typography & responsive layouts
    ├── components/
    │   ├── Navbar.jsx          # Sticky navigation & mobile hamburger menu
    │   ├── Hero.jsx            # Society banner, stats & social strip
    │   ├── About.jsx           # Society pillars & community background
    │   ├── TermCard.jsx        # Term card with filters & .ics download
    │   ├── BelgianPairing.jsx  # Interactive Oxford-Belgium pairing guide
    │   ├── Committee.jsx       # Committee grid with member profiles
    │   ├── Membership.jsx      # Membership tiers & banquet reserve links
    │   ├── Trivia.jsx          # Belgian & Oxford lore cards
    │   ├── Footer.jsx          # Social links, contact email & copyright
    │   └── Toast.jsx           # Toast notification component
    ├── data/
    │   └── societyData.js      # Centralized events, committee & links data
    └── utils/
        └── calendar.js         # ICS file generator utility
```

---

## Quick Start & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Production Build
```bash
npm run build
```
Optimized static build output is generated in `dist/`.

---

## Updating Content

All events, committee members, pairings, and society links are centralized in `src/data/societyData.js`:
- **Events**: Modify or append to `SOCIETY_DATA.events`.
- **Committee**: Update `SOCIETY_DATA.committee`.
- **Links**: Update `SOCIETY_DATA.society.links`.
