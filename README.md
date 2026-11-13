# 🚤 Ramji Boat Services Varanasi (रामजी बोट सर्विसेज)

> Official website for **Ramji Boat Services**, Varanasi (Kashi). Designed for high conversion, lightning-fast performance, modern aesthetics, and top-tier Google SEO.

---

## 📸 Reference & Brand Details

Based directly on the official flyer banner:
- **Brand Name:** RAMJI BOAT SERVICES
- **Tagline:** Enjoy a Beautiful Boat Ride in Varanasi!
- **Boat Fleet & Capacity:**
  - ⛵ **Big Boat:** 50–60 Persons (Groups, Corporate, Weddings, Ganga Aarti VIP view)
  - 🚤 **Small Boat:** 20–25 Persons (Families, Small Groups, Subah-e-Banaras Sunrise)
- **Direct Contact:** `8299027010` (Direct Call & WhatsApp)
- **Official Address:** Madarwan, Samneghat, Lanka, BHU, Varanasi, Uttar Pradesh - 221005
- **Ghat Pickups:** Samneghat (Base), Assi Ghat, Dashashwamedh Ghat, Namo Ghat

---

## 🛠️ Technology Stack & Architecture

This project is built using the industry's cleanest, modern, and developer-friendly stack:

| Component | Technology | Why Chosen |
|---|---|---|
| **Framework** | **React 18 + Vite 5** | Instant hot-reloading, zero-friction setup, clean component architecture |
| **Styling** | **Tailwind CSS 3** | Utility-first, responsive, lightweight, custom spiritual Varanasi theme |
| **Icons** | **Lucide React** | Clean, crisp, lightweight SVG icons |
| **SEO & Schema** | **Semantic HTML5 + JSON-LD** | Google LocalBusiness, FAQPage, OpenGraph, Twitter Cards, Geotags |
| **Hosting Target** | **Google Firebase Hosting** | Fast global CDN, free SSL, zero maintenance, `firebase.json` pre-configured |

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
Ensure **Node.js** (v18+) and **npm** are installed.

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory ready to be hosted on Google.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploy to Google

The website is fully configured with `firebase.json` and `.firebaserc` for 1-command deployment to **Google Firebase Hosting**.

See the complete step-by-step guide in [DEPLOYMENT_GOOGLE.md](DEPLOYMENT_GOOGLE.md).

Quick commands:
```bash
# 1. Install Firebase CLI (if not already installed)
npm install -g firebase-tools

# 2. Login to Google
firebase login

# 3. Deploy
firebase deploy
```

---

## 📁 Project Structure

```text
e:\Varanashi nav booking\
├── public/
│   ├── images/
│   │   └── ramji-boat-banner.jpg   # Official flyer reference image
│   ├── robots.txt                  # Search engine crawl rules
│   └── sitemap.xml                 # XML sitemap for Google Search Console
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation with sticky phone & WhatsApp
│   │   ├── Hero.jsx                # High-converting Hero with reference banner
│   │   ├── FleetSection.jsx        # 50-60 & 20-25 boat capacity showcase
│   │   ├── BookingCalculator.jsx   # Interactive booking & WhatsApp message generator
│   │   ├── ToursSection.jsx        # Sunrise, Aarti, 84 Ghats & festival tours
│   │   ├── GhatsExperience.jsx     # Visual guide to Varanasi 84 ghats
│   │   ├── WhyUsSection.jsx        # Trust indicators, safety & direct owner rates
│   │   ├── ReviewsSection.jsx      # Verified pilgrim & tourist ratings (4.9★)
│   │   ├── FaqSection.jsx          # Interactive SEO accordion FAQs
│   │   ├── ContactSection.jsx      # Phone, address & Google Map embed
│   │   ├── Footer.jsx              # Schema-compliant footer with quick links
│   │   └── FloatingActions.jsx     # High-conversion floating WhatsApp & Call buttons
│   ├── data/
│   │   └── boatData.js             # Central data file (easy to edit phone, text, prices)
│   ├── App.jsx                     # Main layout & modal controller
│   ├── index.css                   # Tailwind CSS imports & theme utilities
│   └── main.jsx                    # React entry point
├── dist/                           # Compiled production build ready for Google
├── firebase.json                   # Google Firebase Hosting configuration
├── .firebaserc                     # Firebase project configuration
├── tailwind.config.js              # Custom Varanasi / Ganga color palette
├── vite.config.js                  # Vite bundler configuration
├── package.json                    # Dependencies & build scripts
└── DEPLOYMENT_GOOGLE.md            # Step-by-step Google hosting tutorial
```

---

## ✏️ How Another Developer Can Customize This Site

All business information, phone numbers, prices, and tour packages are stored in one single file:
👉 `src/data/boatData.js`

- **To change phone or WhatsApp number:**
  Edit `BUSINESS_INFO.phone` and `BUSINESS_INFO.whatsappNumber` in `src/data/boatData.js`.
- **To add new boat models or update capacities:**
  Edit `BOAT_FLEET` array in `src/data/boatData.js`.
- **To add new tours:**
  Edit `TOUR_PACKAGES` array in `src/data/boatData.js`.
- **To update the location:**
  Edit `BUSINESS_INFO.address` in `src/data/boatData.js`.

---

## 🔍 SEO Features Implemented

1. **Schema.org Structured Data (JSON-LD):**
   - `LocalBusiness` / `TouristInformationCenter`
   - `AggregateRating` (4.9 / 5 with 385+ reviews)
   - `FAQPage`
   - Service catalog for `Big Boat (50-60 Pax)` and `Small Boat (20-25 Pax)`
2. **Geo-Targeting Meta Tags:**
   - Coordinates: `25.2773; 82.9995` (Samneghat, Lanka, BHU, Varanasi)
   - Region: `IN-UP`
3. **Social Sharing:**
   - Complete Open Graph tags for Facebook, LinkedIn, and WhatsApp link previews.
   - Twitter Card summary tags.
4. **Sitemap & Robots:**
   - `sitemap.xml` with image indexation.
   - `robots.txt` allowing full indexing.
5. **Mobile First & Core Web Vitals:**
   - 100% responsive on smartphones, tablets, and desktops.
   - Fast static assets with preloaded fonts and modern compression.

---

## 📞 Support & Inquiries
- **Operator:** Ramji Boat Services
- **Phone:** `8299027010`
- **Location:** Madarwan, Samneghat, Lanka, BHU, Varanasi
