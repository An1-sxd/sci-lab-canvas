

# Virtual Lab - SaaS Website Plan

## Overview
A modern, data-driven SaaS website for **Virtual Lab** - a scientific experiment platform. The design will follow the teal/cyan scientific theme shown in the reference image, with a clean, professional SaaS appearance.

---

## 🎨 Visual Identity

**Color Palette:**
- Primary: Teal/Cyan gradients (#0891b2 → #06b6d4)
- Dark accents: Deep navy (#0c4a6e, #164e63)
- Light backgrounds: Soft cyan tints with subtle grid patterns
- Decorative: Floating circles/bubbles in various opacities

**Typography:**
- Headings: Space Grotesk (bold, modern)
- Body: Inter (clean, readable)

**Design Elements:**
- Flask logo icon in teal gradient
- Soft glows and shadows
- Rounded corners
- Floating decorative shapes
- Grid/dot background patterns

---

## 📁 Architecture

All content will be stored in data files, making the site easy to maintain:

```
src/
├── data/
│   ├── landing.data.js      # Hero, features, app previews
│   ├── pricing.data.js      # Plans and features
│   ├── download.data.js     # Platforms and download links
│   └── footer.data.js       # Footer links and info
│
├── components/
│   ├── layout/              # Navbar, Footer
│   ├── landing/             # Hero, Features, AppPreview
│   ├── pricing/             # PricingCard
│   └── download/            # DownloadSection
│
├── pages/
│   ├── Landing.jsx
│   ├── Pricing.jsx
│   └── Download.jsx
```

---

## 📄 Pages

### 1. Landing Page
- **Navbar** - Logo, navigation links (Home, Features, Pricing, Download), CTA button
- **Hero Section** - "Design, Run & Analyze Experiments" headline with gradient accent, subtitle, two CTA buttons
- **App Preview Section** - Screenshots/mockups showing the platform capabilities
- **Features Section** - Grid of key benefits (Create Experiments, Data Analysis, Real-time Simulation, Collaboration)
- **Footer** - Links, social icons, copyright

### 2. Pricing Page
- **Three pricing tiers in cards:**
  - **Personal** ($9/month) - For individual researchers
  - **Business** ($29/month) - For teams and labs
  - **Enterprise** (Contact Us) - Custom solutions
- Each card shows: price, description, feature list, CTA button
- Popular plan highlighted with accent border/badge

### 3. Download Page
- **Hero section** with app preview image
- **Platform download cards:**
  - Windows (.exe)
  - macOS (.dmg)
  - Linux (.deb / .AppImage)
- Each shows: platform icon, system requirements, download button
- Version info and release notes link

---

## ✨ Key Features

1. **Fully Data-Driven** - All text, prices, and features editable via JS data files
2. **Responsive Design** - Mobile-first, works on all devices
3. **Consistent Theme** - Matches the Virtual Lab app aesthetic
4. **Modern SaaS UI** - Professional gradients, shadows, and animations
5. **Clean JSX Components** - No TypeScript, pure React with Vite

