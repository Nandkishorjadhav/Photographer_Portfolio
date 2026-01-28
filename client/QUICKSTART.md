# 🚀 Quick Start Guide

## Getting Started

Your premium photographer portfolio is now ready! The development server is running at:
**http://localhost:5175/**

## 📝 Customization Checklist

### 1. Personal Information (Required)
- [ ] Update your name in [Header.jsx](src/components/layout/Header.jsx) - Line 48
- [ ] Update your name in [Footer.jsx](src/components/layout/Footer.jsx) - Line 60
- [ ] Update your name in [Hero.jsx](src/components/sections/Hero.jsx) - Line 55
- [ ] Update contact email and phone in [Footer.jsx](src/components/layout/Footer.jsx) - Lines 79-91
- [ ] Update contact info in [Contact.jsx](src/components/sections/Contact.jsx) - Lines 196-242

### 2. Images (Required)
Replace placeholder images with your own photos:
- [ ] [gallery.js](src/data/gallery.js) - Update all gallery images (at least 12-20 images)
- [ ] [Hero.jsx](src/components/sections/Hero.jsx) - Line 35 (hero background image)
- [ ] [About.jsx](src/components/sections/About.jsx) - Line 27 (your portrait)
- [ ] [testimonials.js](src/data/testimonials.js) - Client photos

### 3. Content (Recommended)
- [ ] [About.jsx](src/components/sections/About.jsx) - Update your bio and story
- [ ] [services.js](src/data/services.js) - Customize service offerings and pricing
- [ ] [testimonials.js](src/data/testimonials.js) - Add real client testimonials
- [ ] [gallery.js](src/data/gallery.js) - Update image titles, locations, and camera info

### 4. Social Links (Optional)
- [ ] [Header.jsx](src/components/layout/Header.jsx) - Update social links
- [ ] [Footer.jsx](src/components/layout/Footer.jsx) - Lines 63-103
- [ ] [Contact.jsx](src/components/sections/Contact.jsx) - Lines 244-265

### 5. Branding (Optional)
- [ ] [index.css](src/index.css) - Change color scheme (Lines 3-11)
- [ ] Update favicon in [public/](public/) folder
- [ ] [Hero.jsx](src/components/sections/Hero.jsx) - Customize taglines (Line 12)

## 🎨 Color Customization

To change the accent color from gold to another luxury color:

1. Open [index.css](src/index.css)
2. Update line 4:
   ```css
   --color-luxury-gold: #d4af37;  /* Change this hex code */
   ```

**Suggested luxury colors:**
- Gold: `#d4af37` (current)
- Silver: `#c0c0c0`
- Rose Gold: `#b76e79`
- Deep Burgundy: `#800020`
- Navy Blue: `#000080`

## 📸 Image Guidelines

For best results, use images with:
- **Minimum resolution:** 2000px on the longest side
- **Format:** JPEG or PNG (WebP is auto-generated)
- **Aspect ratio:** 4:3 or 3:2 for gallery images
- **File size:** Optimized (under 2MB per image)

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📂 Important Files

- **Data Files:** `src/data/` - All content (images, testimonials, services)
- **Layout:** `src/components/layout/` - Header and Footer
- **Sections:** `src/components/sections/` - All page sections
- **Styles:** `src/index.css` - Global styles and colors

## ✅ Pre-Launch Checklist

Before deploying to production:
- [ ] Replace all placeholder images with real photos
- [ ] Update all personal information
- [ ] Test contact form submission
- [ ] Check all links (social media, email, phone)
- [ ] Test on mobile devices
- [ ] Test in different browsers
- [ ] Optimize image file sizes
- [ ] Update meta tags for SEO (in index.html)
- [ ] Add Google Analytics (optional)
- [ ] Set up contact form backend (EmailJS, Formspree, etc.)

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### Deploy to Netlify
1. Run `npm run build`
2. Drag the `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

## 🆘 Need Help?

- Check the [README.md](README.md) for detailed documentation
- Review component comments in the code
- All components are well-documented with PropTypes

## 🎉 You're All Set!

Your premium photographer portfolio is ready to showcase your work to the world. Start by customizing the content with your own information and images, then deploy to share with clients!

---

**Happy Creating! 📸✨**
