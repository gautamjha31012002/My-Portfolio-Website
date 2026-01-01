# Deployment Guide

Quick reference for deploying your portfolio to various platforms.

## GitHub Pages (Recommended)

### Automatic Deployment with GitHub Actions

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages.

**Steps:**

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment", set **Source** to **GitHub Actions**

3. **Update base path (if needed):**

   If your repository is not at the root domain (e.g., `username.github.io/portfolio`), update `vite.config.ts`:

   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/', // Add this line
     optimizeDeps: {
       exclude: ['lucide-react'],
     },
   });
   ```

4. **Deploy:**
   - Push to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Your site will be available at: `https://yourusername.github.io/your-repo-name/`

### Manual Deployment (Alternative)

```bash
npm run build
npx gh-pages -d dist
```

---

## Cloudflare Pages

**Steps:**

1. **Log in to Cloudflare Dashboard**
2. **Go to Pages** → **Create a project**
3. **Connect your Git repository**
4. **Configure build settings:**
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`

5. **Deploy:**
   - Click **Save and Deploy**
   - Cloudflare will build and deploy automatically on every push

**Custom Domain:**
- Go to your Pages project settings
- Add your custom domain
- Update DNS records as instructed

---

## Netlify

### Option 1: Netlify UI

1. **Log in to Netlify**
2. **Click "Add new site"** → **Import an existing project**
3. **Connect to Git provider**
4. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

5. **Deploy:**
   - Click **Deploy site**
   - Netlify will build and deploy automatically

### Option 2: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build your site
npm run build

# Deploy to production
netlify deploy --prod --dir=dist
```

**Custom Domain:**
- Go to Site settings → Domain management
- Add your custom domain
- Follow DNS configuration instructions

---

## Vercel

**Steps:**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts:**
   - Connect to your Git repository
   - Vercel auto-detects Vite configuration
   - Deploy to production: `vercel --prod`

**Automatic Deployments:**
- Connect your GitHub repository
- Vercel will automatically deploy on every push

---

## Custom Domain Setup

### General DNS Configuration

For apex domain (`example.com`):
```
A Record: @ → Your hosting IP
```

For subdomain (`www.example.com`):
```
CNAME Record: www → your-site.pages.dev
```

### Platform-Specific

**GitHub Pages:**
- Add `CNAME` file in `public/` folder with your domain
- Configure DNS to point to GitHub Pages IPs

**Cloudflare Pages:**
- Cloudflare DNS is automatically configured
- Just add custom domain in Pages settings

**Netlify:**
- Add custom domain in site settings
- Netlify provides DNS records automatically

---

## Environment Variables

This portfolio doesn't require environment variables for deployment. If you add any:

- **GitHub Pages:** Add to repository secrets
- **Cloudflare Pages:** Add in Pages project settings
- **Netlify:** Add in Site settings → Environment variables
- **Vercel:** Add in Project settings → Environment variables

---

## Performance Optimization

### Lighthouse Score Tips

1. **Enable HTTP/2** (automatic on most platforms)
2. **Enable gzip/brotli compression** (automatic on most platforms)
3. **Add caching headers:**

   Create `public/_headers` for Netlify/Cloudflare:
   ```
   /assets/*
     Cache-Control: public, max-age=31536000, immutable

   /*.js
     Cache-Control: public, max-age=31536000, immutable

   /*.css
     Cache-Control: public, max-age=31536000, immutable
   ```

4. **Enable asset optimization** (automatic on Cloudflare/Netlify)

---

## Troubleshooting

### Build Fails

- Check Node.js version (should be 18+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Run build locally: `npm run build`

### 404 on Refresh

Add redirect rules:

**Netlify** (`public/_redirects`):
```
/*    /index.html   200
```

**Cloudflare Pages** (`public/_redirects`):
```
/*    /index.html   200
```

**Vercel** (automatic with Vite)

### Assets Not Loading

- Check `base` path in `vite.config.ts`
- Ensure paths are relative
- Clear browser cache

---

## Quick Deploy Commands

```bash
# GitHub Pages
git push origin main

# Netlify CLI
netlify deploy --prod

# Vercel CLI
vercel --prod

# Cloudflare Pages (via Git)
git push origin main
```

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All navigation links work
- [ ] Smooth scrolling works
- [ ] Responsive on mobile
- [ ] Meta tags appear correctly
- [ ] Contact links work
- [ ] GitHub link opens correctly
- [ ] No console errors
- [ ] Fast page load (< 2s)
- [ ] Custom domain configured (if applicable)

---

## Support

For deployment issues:
- **GitHub Pages:** [GitHub Pages Docs](https://docs.github.com/pages)
- **Cloudflare Pages:** [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
- **Netlify:** [Netlify Docs](https://docs.netlify.com)
- **Vercel:** [Vercel Docs](https://vercel.com/docs)
