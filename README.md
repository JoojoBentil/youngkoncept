# YOUNGKONCEPT - Photography Portfolio Website

A modern, elegant, and professional photography portfolio website built with Next.js and Tailwind CSS.

## 🚀 Features

- **Stunning Hero Section** - Eye-catching introduction with brand name and call-to-action
- **Interactive Photo Gallery** - 9 high-quality images with category filtering (Portrait, Wedding, Birthday, Graduation, Fashion)
- **About Section** - Professional introduction to the photography brand
- **Services & Pricing** - Clear display of photography packages and pricing
- **Client Testimonials** - Showcase client reviews with ratings
- **Booking Form** - Functional contact form with WhatsApp integration
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Black & Gold Theme** - Luxurious color scheme
- **SEO Optimized** - Meta tags and semantic HTML
- **Performance Focused** - Next.js Image optimization and lazy loading

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Playfair Display (serif) & Inter (sans-serif)
- **Images:** Next/Image with Unsplash placeholders

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization Guide

### Update Contact Information

Edit `components/BookingForm.tsx` and `components/Footer.tsx`:
- Replace `233XXXXXXXXX` with your actual WhatsApp number
- Update social media links (Instagram, TikTok)

### Replace Photos

Update image URLs in:
- `components/Gallery.tsx` - Replace Unsplash URLs with your actual photos
- `components/Hero.tsx` - Change hero background image
- `components/About.tsx` - Update about section image

### Update Pricing

Edit `components/Services.tsx` to modify:
- Package prices
- Service descriptions
- Features included in each package

### Change Colors

Modify `tailwind.config.ts` to adjust the gold color palette or add new colors.

## 📱 Sections Overview

1. **Hero Section** - Brand introduction with CTA button
2. **Gallery** - Filterable photo gallery with lightbox preview
3. **About** - Story and mission of Youngkoncept
4. **Services & Pricing** - Four photography packages with detailed features
5. **Testimonials** - Three client reviews with photos
6. **Booking Form** - Contact form with WhatsApp integration
7. **Footer** - Brand info, quick links, and social media

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy
4. Your site will be live in minutes!

### Build for Production

```bash
npm run build
npm start
```

## 📄 License

© 2026 YOUNGKONCEPT. All rights reserved.

## 🤝 Support

For questions or support, contact YOUNGKONCEPT via WhatsApp or social media.

---

**Based in Accra, Ghana 🇬🇭**
