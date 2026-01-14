# CBH Clinic Website - Quick Reference

## 🚀 Deploy in 3 Steps

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo and click Deploy

## 📍 Website Routes (No .html Extensions!)

```
✓ /              → Home
✓ /services      → OB-GYNE Services
✓ /ultrasound    → Ultrasound Services  
✓ /vaccination   → Vaccination Services
✓ /booking       → Contact & Bookings
```

## 🎨 Brand Colors

- **Primary**: `#4A90E2` (Blue)
- **Secondary**: `#7ED321` (Green)
- **Light BG**: `#FFFFFF` / `#F4F4F4`
- **Dark BG**: `#1a1a1a` / `#102216`

## 📂 Project Structure

```
cbh/
├── src/app/
│   ├── layout.js           ← Fonts & Global Styles
│   ├── page.js             ← Home Page
│   ├── services/page.js    ← Services Page
│   ├── ultrasound/page.js  ← Ultrasound Page
│   ├── vaccination/page.js ← Vaccination Page
│   └── booking/page.js     ← Contact Form
├── package.json
├── next.config.mjs
├── tailwind.config.js
├── README.md
└── DEPLOYMENT.md           ← Full deployment guide
```

## 💻 Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server on :3000
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Check code quality
```

## ✏️ Edit Contact Info

**File**: `src/app/booking/page.js`

```javascript
// Update phone numbers (around line 50-70)
<a href="tel:09638933717">0963-893-3717</a>
<a href="tel:09667584390">0966-758-4390</a>

// Update form endpoint if needed
const response = await fetch('https://formspree.io/f/meovqvrz', {
```

## 🎯 Add New Page

1. Create: `src/app/new-page/page.js`
2. Add to navigation in each page's header
3. Next.js auto-routes it

Example: `new-page/page.js` → `/new-page`

## 🔧 Customize Theme

**File**: `src/app/layout.js`

Change font imports, Material Symbols settings, or colors in the head section.

## 📝 Important Notes

- **Node.js**: Requires 20.9.0+ for production builds
- **Form Submission**: Uses Formspree (free, no backend needed)
- **Images**: Served from Google's CDN (no hosting needed)
- **Dark Mode**: Built-in, automatic based on system settings
- **Responsive**: Mobile-first design, works on all devices

## 🎓 Key Technologies

- **Framework**: Next.js 16 (React)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **Icons**: Google Material Symbols
- **Fonts**: Inter (Google Fonts)

## ⚡ Performance Metrics

- Pages: Pre-rendered static HTML
- Images: Optimized with CDN
- CSS: Minified with Tailwind
- JS: Code-split automatically
- Lighthouse Score: Expected 90+

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Node version error | Update Node.js to 20+ at nodejs.org |
| Port 3000 in use | Use `npm run dev -- -p 3001` |
| Styling not loading | Clear `.next` folder: `rm -r .next` |
| Links showing .html | Already fixed! Using Next.js routing |

## 📞 Clinic Info Fields to Update

- Phone numbers (2 numbers)
- Clinic hours
- Facebook handle
- Address/Location (if applicable)
- Calendly link (optional for booking)

All located in `src/app/booking/page.js`

---

**Ready to deploy?** See [DEPLOYMENT.md](DEPLOYMENT.md) for full instructions!
