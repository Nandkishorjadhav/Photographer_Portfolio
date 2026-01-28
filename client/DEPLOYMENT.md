# 🚀 Deployment Guide

Complete guide for deploying your premium photographer portfolio to production.

## Pre-Deployment Checklist

### ✅ Content Review
- [ ] All placeholder text replaced with your information
- [ ] All images replaced with your actual portfolio photos
- [ ] Contact information verified (email, phone, location)
- [ ] Social media links updated and working
- [ ] Services and pricing customized
- [ ] Testimonials added (5-10 real reviews)
- [ ] About section bio completed

### ✅ Technical Review
- [ ] All images optimized (< 2MB each, preferably < 500KB)
- [ ] Images in WebP format or JPEG
- [ ] No console errors in browser
- [ ] No broken links
- [ ] Contact form tested locally
- [ ] Mobile responsive tested (iPhone, Android)
- [ ] Desktop tested (Chrome, Firefox, Safari, Edge)

### ✅ SEO & Metadata
- [ ] Updated page title in `index.html`
- [ ] Meta description added
- [ ] Open Graph tags configured
- [ ] Favicon added to `public/` folder
- [ ] Alt text on all images

---

## Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Free hosting for personal projects
- Automatic SSL/HTTPS
- Global CDN
- Easy custom domain setup
- Automatic deployments from Git

**Steps:**

1. **Prepare Your Code**
   ```bash
   # Make sure everything is committed
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Sign Up & Import**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository

3. **Configure Build**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install --legacy-peer-deps`

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

---

### Option 2: Netlify

**Why Netlify?**
- Free tier with generous limits
- Drag-and-drop deployment
- Form handling built-in
- Easy custom domains

**Steps:**

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Deploy via Drag & Drop**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `dist` folder
   - Done! ✨

3. **Deploy via Git (Better)**
   - Sign up at [netlify.com](https://netlify.com)
   - New site from Git
   - Connect repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
     - Install command: `npm install --legacy-peer-deps`

4. **Configure Redirects**
   Create `public/_redirects`:
   ```
   /* /index.html 200
   ```

---

### Option 3: GitHub Pages

**Why GitHub Pages?**
- Free and simple
- Perfect for personal portfolios
- Integrated with GitHub

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/repository-name"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub**
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Save

---

### Option 4: AWS S3 + CloudFront

**For Production-Grade Hosting**

1. **Build**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   - Name: your-domain.com
   - Enable static website hosting
   - Upload `dist` folder contents

3. **Configure CloudFront**
   - Create distribution
   - Point to S3 bucket
   - Enable HTTPS

4. **Update DNS**
   - Point domain to CloudFront URL

---

## Post-Deployment

### 1. Test Your Live Site

Visit your deployed site and check:
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Navigation works
- [ ] Contact form works
- [ ] Mobile responsive
- [ ] Fast loading (< 3 seconds)
- [ ] No console errors

### 2. Setup Analytics (Optional)

**Google Analytics 4:**
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### 3. Configure Contact Form Backend

Your contact form currently logs to console. Connect it to:

**Option A: EmailJS** (Recommended for beginners)
- Sign up at [emailjs.com](https://www.emailjs.com)
- Free tier: 200 emails/month
- 10 minutes setup

**Option B: Formspree**
- Sign up at [formspree.io](https://formspree.io)
- Free tier: 50 submissions/month
- Add endpoint to form

**Option C: Custom Backend**
- Build API with Node.js/Express
- Deploy to Heroku/Railway
- Connect to your form

### 4. SEO Optimization

**Submit to Search Engines:**
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

**Create sitemap.xml** in `public/`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2024-01-28</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

**robots.txt** in `public/`:
```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

### 5. Performance Optimization

**Test Performance:**
- [PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- Target: 90+ score

**Optimization Tips:**
- Compress images further (TinyPNG, Squoosh)
- Enable CDN (Cloudflare, Bunny)
- Lazy load images (already implemented)
- Minify code (automatic in build)

### 6. Security

**HTTPS:**
- Always use HTTPS (automatic on Vercel/Netlify)
- Force HTTPS redirect

**Security Headers:**
Add to `netlify.toml` or `vercel.json`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
```

---

## Custom Domain Setup

### 1. Purchase Domain
- Namecheap
- Google Domains
- GoDaddy
- Cloudflare

### 2. Configure DNS

**For Vercel:**
- Type: A, Name: @, Value: 76.76.21.21
- Type: CNAME, Name: www, Value: cname.vercel-dns.com

**For Netlify:**
- Type: A, Name: @, Value: 75.2.60.5
- Type: CNAME, Name: www, Value: yoursite.netlify.app

### 3. Update Site
- Add domain in hosting dashboard
- Wait for DNS propagation (24-48 hours)

---

## Maintenance

### Regular Updates
- **Monthly:** Check for broken links
- **Quarterly:** Update portfolio images
- **Annually:** Review and update content

### Monitoring
- Setup uptime monitoring (UptimeRobot, Pingdom)
- Monitor analytics weekly
- Check contact form submissions

### Backups
- Code is on GitHub (automatic backup)
- Export analytics data quarterly
- Save original high-res images

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

### Images Not Loading
- Check image URLs are absolute
- Verify images in `public/` folder
- Check network tab for 404 errors

### Slow Performance
- Optimize images (< 500KB each)
- Enable compression on hosting
- Use WebP format
- Implement CDN

### Form Not Working
- Check console for errors
- Verify form backend setup
- Test with simple alert first

---

## Support Resources

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Vite Guide:** [vitejs.dev/guide](https://vitejs.dev/guide)
- **React Docs:** [react.dev](https://react.dev)

---

## Success! 🎉

Your premium photographer portfolio is now live and ready to attract clients!

**Next Steps:**
1. Share on social media
2. Update email signature with link
3. Add to business cards
4. Submit to photography directories
5. Start promoting your work!

---

**Questions? Review the README.md or check component documentation in the code.**

Good luck with your photography business! 📸✨
