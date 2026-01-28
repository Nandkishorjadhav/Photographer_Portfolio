# ⚡ QUICK REFERENCE CHEAT SHEET

## 🔥 Most Common Customizations

### Change Your Name (3 places)
```jsx
// 1. Header - src/components/layout/Header.jsx (line 48)
Your Name

// 2. Hero - src/components/sections/Hero.jsx (line 55)
['Y', 'o', 'u', 'r', ' ', 'N', 'a', 'm', 'e']

// 3. Footer - src/components/layout/Footer.jsx (line 60)
Your Name
```

### Update Contact Info
```jsx
// src/components/sections/Contact.jsx (lines 196-242)
Email: hello@yourname.com
Phone: +1 (123) 456-7890
Location: Los Angeles, CA
```

### Change Color Scheme
```css
/* src/index.css (line 5) */
--color-luxury-gold: #d4af37;  /* Change this! */
```

### Add Your Images
```javascript
// src/data/gallery.js - Replace ALL images
{
  id: 1,
  src: 'YOUR_IMAGE_URL',
  title: 'YOUR_TITLE',
  category: 'wedding', // or portrait, fashion, landscape
  // ... other fields
}
```

---

## 📂 File Locations Quick Map

| What to Change | File Path | Line(s) |
|---------------|-----------|---------|
| Your Name | `src/components/layout/Header.jsx` | 48 |
| Hero Name | `src/components/sections/Hero.jsx` | 55 |
| Taglines | `src/components/sections/Hero.jsx` | 12-16 |
| Hero Background | `src/components/sections/Hero.jsx` | 35 |
| About Bio | `src/components/sections/About.jsx` | 51-69 |
| About Photo | `src/components/sections/About.jsx` | 27 |
| Gallery Images | `src/data/gallery.js` | All |
| Services | `src/data/services.js` | All |
| Testimonials | `src/data/testimonials.js` | All |
| Contact Email | `src/components/sections/Contact.jsx` | 209 |
| Contact Phone | `src/components/sections/Contact.jsx` | 228 |
| Social Links | `src/components/layout/Footer.jsx` | 63-103 |
| Color Scheme | `src/index.css` | 5 |
| Footer Text | `src/components/layout/Footer.jsx` | 60, 79-91 |

---

## 🎨 Popular Color Schemes

```css
/* Gold (Current) */
--color-luxury-gold: #d4af37;

/* Rose Gold */
--color-luxury-gold: #b76e79;

/* Silver */
--color-luxury-gold: #c0c0c0;

/* Emerald */
--color-luxury-gold: #50C878;

/* Navy Blue */
--color-luxury-gold: #1e3a8a;

/* Burgundy */
--color-luxury-gold: #800020;
```

---

## 🖼️ Image Guidelines

### Sizes
- **Hero:** 1920x1080px (landscape)
- **Gallery:** 1200px minimum on longest side
- **About Portrait:** 800x1000px (portrait)
- **Testimonial Photos:** 200x200px (square)

### Format
- Use JPEG for photos
- Use WebP for web (auto-converted)
- Keep under 2MB per image
- Compress with TinyPNG or Squoosh

### Upload Locations
1. **Upload to cloud:** Cloudinary, ImgBB, or Imgur
2. **Or use local:** Put in `public/images/` folder
3. **Update paths:** In data files

---

## 🚀 Quick Commands

```bash
# Development
npm run dev              # Start dev server (localhost:5173)
npm run build            # Build for production
npm run preview          # Preview build locally

# Deployment
git add .                # Stage changes
git commit -m "message"  # Commit
git push                 # Push to GitHub

# Troubleshooting
rm -rf node_modules      # Delete dependencies
npm install              # Reinstall
npm cache clean --force  # Clear npm cache
```

---

## 🔍 Find & Replace Quick Guide

### VS Code Search & Replace
- **Find:** Press `Ctrl+H` (Windows) or `Cmd+H` (Mac)
- **Replace All:** Click "Replace All" button

### Common Replacements
1. `Your Name` → `Your Actual Name`
2. `hello@yourname.com` → `your@email.com`
3. `Los Angeles, CA` → `Your City, State`
4. `+1 (123) 456-7890` → `Your Phone Number`

---

## 📱 Test Checklist

Before deploying:
- [ ] Site loads without errors
- [ ] All images display
- [ ] Navigation works (all links)
- [ ] Mobile menu opens/closes
- [ ] Gallery filter works
- [ ] Lightbox opens/closes
- [ ] Contact form validates
- [ ] Smooth scroll works
- [ ] Test on mobile device
- [ ] Test in different browsers

---

## 🌐 Deploy in 5 Minutes (Vercel)

1. Push code to GitHub
2. Go to vercel.com → Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Done! ✅

**Your site:** `yourproject.vercel.app`

---

## 💼 Portfolio Image Categories

```javascript
// Use these category names in gallery.js:
category: 'wedding'    // Wedding photography
category: 'portrait'   // Portrait sessions
category: 'fashion'    // Fashion/editorial
category: 'landscape'  // Nature/travel
```

---

## 🎯 SEO Quick Setup

### 1. Update `index.html`:
```html
<title>Your Name - Professional Photographer</title>
<meta name="description" content="Award-winning photographer specializing in weddings, portraits, and commercial photography.">
```

### 2. Add to `public/` folder:
- `favicon.ico` (16x16, 32x32 icon)
- `robots.txt` (for search engines)
- `sitemap.xml` (site structure)

---

## 🔧 Common Fixes

### Images not loading?
```javascript
// Check path format:
✅ '/images/photo.jpg'           // Correct (in public folder)
✅ 'https://example.com/img.jpg' // Correct (external URL)
❌ '../images/photo.jpg'         // Wrong (relative path)
```

### Build fails?
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

### Site is slow?
1. Compress images (< 500KB each)
2. Use WebP format
3. Enable CDN (Cloudflare)
4. Check console for errors

---

## 📧 Contact Form Setup

### Option 1: EmailJS (Easiest)
1. Sign up at emailjs.com
2. Get API key
3. Add to Contact.jsx
4. Test form

### Option 2: Formspree
1. Sign up at formspree.io
2. Get endpoint URL
3. Update form action
4. Test form

### Option 3: Custom Backend
- Build with Node.js/Express
- Deploy to Railway/Heroku
- Connect to form

---

## 🎨 Typography Alternatives

```css
/* Elegant Serif (for headings) */
--font-serif: 'Playfair Display', serif;    /* Current */
--font-serif: 'Cormorant Garamond', serif;  /* Alternative 1 */
--font-serif: 'Bodoni Moda', serif;         /* Alternative 2 */
--font-serif: 'Libre Baskerville', serif;   /* Alternative 3 */

/* Clean Sans-Serif (for body) */
--font-sans: 'Inter', sans-serif;           /* Current */
--font-sans: 'Satoshi', sans-serif;         /* Alternative 1 */
--font-sans: 'Cabinet Grotesk', sans-serif; /* Alternative 2 */
--font-sans: 'DM Sans', sans-serif;         /* Alternative 3 */
```

Remember to update Google Fonts import URL!

---

## 📊 Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| Load Time | < 3s | Browser DevTools |
| Lighthouse Score | 90+ | PageSpeed Insights |
| Image Size | < 500KB | TinyPNG |
| Total Page Size | < 5MB | Network tab |
| Time to Interactive | < 3s | Lighthouse |

---

## 🎁 Bonus Features (Future)

Add these if desired:
- [ ] Blog section
- [ ] Print shop (sell photos)
- [ ] Booking calendar
- [ ] Client galleries (password protected)
- [ ] Before/after slider
- [ ] Video backgrounds
- [ ] Instagram feed integration
- [ ] Newsletter signup
- [ ] Dark/Light mode toggle
- [ ] Multi-language support

---

## 📞 Support

**Documentation:**
- QUICKSTART.md - Getting started
- DEPLOYMENT.md - Hosting guide
- CUSTOMIZATION_GUIDE.js - Code reference
- PROJECT_SUMMARY.md - Full overview

**Online Resources:**
- React: react.dev
- Tailwind: tailwindcss.com
- Framer Motion: framer.com/motion

---

## ✨ You've Got This!

1. Start with QUICKSTART.md
2. Customize content
3. Test thoroughly
4. Deploy to Vercel
5. Share with the world!

**Your portfolio is going to look amazing! 📸🚀**

---

**Last Updated:** January 28, 2026
