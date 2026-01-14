# CBH Clinic - Next.js Landing Site

A modern, responsive landing website for CBH Clinic built with **Next.js** and **Tailwind CSS**. Designed for clean URLs (no `.html` extensions) and optimized for **Vercel** deployment.

## Features

✅ **Clean URL Routing** - No `.html` extensions  
✅ **Responsive Design** - Works on all devices  
✅ **Dark Mode Support** - Light and dark themes  
✅ **Fast Performance** - Next.js optimization  
✅ **Vercel Ready** - One-click deployment  
✅ **Contact Form** - Integrated with Formspree  

## Pages

- **Home** (`/`) - Landing page with hero, services, and testimonials
- **OB-GYNE Services** (`/services`) - Comprehensive list of gynecological services
- **Ultrasound Services** (`/ultrasound`) - Detailed ultrasound service information
- **Vaccination Services** (`/vaccination`) - Vaccination options available
- **Book Appointment** (`/booking`) - Contact form and appointment booking

## Getting Started

### Prerequisites

- Node.js 20.9.0+ (for production builds)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Git Integration (Recommended)

1. Push this project to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

## Customization

### Update Contact Information

Edit [src/app/booking/page.js](src/app/booking/page.js) and update:
- Phone numbers
- Clinic hours
- Formspree endpoint

### Change Colors

Edit [src/app/layout.js](src/app/layout.js) to update:
- Primary colors
- Fonts
- Tailwind configuration

### Add More Services

Create new pages in `src/app/[service-name]/page.js` and add navigation links.

## Project Structure

```
src/app/
├── layout.js          # Root layout with fonts & styles
├── page.js            # Home page
├── services/
│   └── page.js        # OB-GYNE Services
├── ultrasound/
│   └── page.js        # Ultrasound Services
├── vaccination/
│   └── page.js        # Vaccination Services
└── booking/
    └── page.js        # Contact & Booking
```

## Technologies Used

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **Icons**: Google Material Symbols
- **Fonts**: Inter (Google Fonts)
- **Form**: Formspree

## Notes for Vercel Deployment

- **Node Version**: Update to 20+ for production builds
- **Environment Variables**: None required by default
- **API Routes**: Contact form uses Formspree (third-party service)
- **Build Time**: ~1-2 minutes

## License

© 2024 CBH Clinic. All rights reserved.
