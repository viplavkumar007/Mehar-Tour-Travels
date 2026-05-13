# Mehar Tour and Travels — Website

A modern, production-grade single-page website built with React + Vite + Tailwind CSS + Framer Motion.

## 🚀 Local Development

### Prerequisites
- Node.js v18+  
- npm v9+

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

### Build for Production
```bash
npm run build
# Output in /dist folder

npm run preview
# Preview production build locally
```

---

## ☁️ Deploy to Vercel (Recommended)

### Option A – Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
# Follow prompts — framework: Vite, output: dist
```

### Option B – GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** ✅

---

## 🌐 Deploy to Netlify

### Option A – Netlify CLI
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist
```

### Option B – Netlify Dashboard
1. Go to [app.netlify.com](https://app.netlify.com) → New Site
2. Connect GitHub repo OR drag-and-drop the `/dist` folder
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy** ✅

---

## 📁 Project Structure

```
mehar-tour-travels/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    │   └── logo.png
    ├── data/
    │   └── siteContent.js       ← All content config
    └── components/
        ├── Navbar.jsx
        ├── ScrollReveal.jsx
        ├── CTA.jsx
        ├── Footer.jsx
        └── sections/
            ├── Hero.jsx
            ├── Services.jsx
            ├── About.jsx
            ├── Destinations.jsx
            ├── Testimonials.jsx
            ├── FAQ.jsx
            └── ContactForm.jsx
```

---

## ✏️ Updating Content

All text, services, FAQs, testimonials, and contact info live in:
```
src/data/siteContent.js
```
Edit this file to update any copy without touching components.

---

## 📱 Features

- ✅ Responsive (mobile-first)
- ✅ Transparent navbar → glass on scroll
- ✅ Mobile navbar sits above hero (not overlapping)
- ✅ Glossy buttons with border-radius
- ✅ Vibrant service cards with gradient icons
- ✅ Framer Motion scroll-reveal animations
- ✅ WhatsApp + Email enquiry form (pre-filled)
- ✅ Instagram link in hero + footer
- ✅ Toast notifications
- ✅ FAQ accordion with smooth animation
- ✅ Floating CTA strip with animated gradient
- ✅ Accessible (ARIA, keyboard nav, focus states)
- ✅ prefers-reduced-motion support
