# Deployment Guide - CBH Clinic Website

## Quick Setup

Your Next.js project is ready to deploy! Here's how to get it live.

## Prerequisites for Local Development

Before running locally, you need Node.js 20.9.0 or higher:

```bash
# Check your current Node version
node --version

# If you need to update, download from https://nodejs.org/ (LTS version recommended)
```

## Local Development (Once Node is Updated)

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view your site.

---

## Deploy to Vercel (Recommended)

### 1. Prepare Your Repository

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: CBH Clinic website"

# Create a GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/cbh-clinic.git
git branch -M main
git push -u origin main
```

### 2. Deploy via Vercel UI

1. Go to **[vercel.com](https://vercel.com)**
2. Sign up/log in with GitHub
3. Click **"Add New..."** → **"Project"**
4. Select your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click **Deploy**

Your site is now live! 🎉

### 3. Alternative: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to link your project and deploy.

---

## Environment Configuration

No environment variables are required for basic functionality.

If you want to customize the contact form:
- The form uses **Formspree** (free service)
- Current endpoint: `https://formspree.io/f/meovqvrz`
- To use your own: Update the endpoint in [src/app/booking/page.js](src/app/booking/page.js)

---

## Project Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/page.js` | Home page |
| `/services` | `src/app/services/page.js` | OB-GYNE Services |
| `/ultrasound` | `src/app/ultrasound/page.js` | Ultrasound Services |
| `/vaccination` | `src/app/vaccination/page.js` | Vaccination Services |
| `/booking` | `src/app/booking/page.js` | Contact & Booking |

**Note:** No `.html` extensions! Next.js handles routing automatically.

---

## Customization Guide

### Update Contact Information

Edit **[src/app/booking/page.js](src/app/booking/page.js):**

```javascript
// Around line 50-70, update:
<a href="tel:09638933717">0963-893-3717</a>
<a href="tel:09667584390">0966-758-4390</a>
```

### Change Colors

Edit **[src/app/layout.js](src/app/layout.js)** to customize:
- Primary color: `#4A90E2` (currently blue)
- Secondary color: `#7ED321` (currently green)
- Text color: `#333333` (currently dark gray)

### Add New Service Page

1. Create a new folder: `src/app/my-service/`
2. Add `page.js` inside it
3. Update navigation links in each page's header

---

## Troubleshooting

### Issue: "Node.js version >= 20.9.0 required"

**Solution:** Upgrade Node.js
- Visit [nodejs.org](https://nodejs.org) and download LTS version
- Windows: Run the installer and restart your terminal
- Mac: `brew install node` or use the installer

### Issue: Port 3000 already in use

**Solution:** Use a different port
```bash
npm run dev -- -p 3001
```

### Issue: Build fails on Vercel

**Solution:** Check the build logs in Vercel dashboard
- Click your project
- Go to **Deployments**
- Click **failed** build
- Scroll down to see error messages

---

## Performance Tips

✅ Images are already optimized via Google's image CDN  
✅ CSS is minified with Tailwind  
✅ JavaScript is code-split automatically  
✅ Pages are pre-rendered at build time  

---

## Next Steps

1. ✅ Deploy to Vercel
2. 📝 Update clinic info in [src/app/booking/page.js](src/app/booking/page.js)
3. 🎨 Customize colors if desired
4. 📱 Test on mobile devices
5. 🔍 Submit sitemap to Google Search Console

---

## Support Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Deploy Docs](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Formspree Docs](https://formspree.io)

---

**Happy deploying!** 🚀
