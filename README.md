# Gautam Jha - Portfolio Website

A modern, premium portfolio website for a Senior DevOps / Platform Engineer specializing in Kubernetes, GitOps, and Infrastructure Automation.

## Features

- Clean, minimal, professional design with dark mode
- Responsive across all devices
- Smooth scroll animations and transitions
- SEO-optimized with meta tags
- Production-ready React + TypeScript + Tailwind CSS
- Fast loading and optimized build

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Deployment:** Static site ready for GitHub Pages, Cloudflare Pages, or Netlify

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Option 1: GitHub Pages

1. **Update `vite.config.ts`:**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

2. **Create `.github/workflows/deploy.yml`:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages"
   - Set source to "GitHub Actions"
   - Push your code to trigger the deployment

### Option 2: Cloudflare Pages

1. **Connect your repository to Cloudflare Pages**

2. **Build settings:**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`

3. **Environment variables:** (None required for this project)

4. **Deploy:** Cloudflare will automatically build and deploy on every push

### Option 3: Netlify

1. **Connect your repository to Netlify**

2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy:** Netlify will automatically build and deploy on every push

Alternatively, use the Netlify CLI:

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## Customization

### Updating Personal Information

Edit the following files:

- `src/components/Hero.tsx` - Hero section with name and contact
- `src/components/About.tsx` - Professional summary
- `src/components/Header.tsx` - Navigation header
- `src/components/Footer.tsx` - Footer contact info
- `index.html` - SEO meta tags

### Modifying Tech Stack

Edit `src/components/TechStack.tsx` to update technologies.

### Adding Projects

Edit `src/components/Projects.tsx` to add or modify projects.

### Updating Skills

Edit `src/components/Skills.tsx` to modify capabilities.

## Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About/Summary section
│   │   ├── TechStack.tsx    # Tech stack grid
│   │   ├── Skills.tsx       # Skills & capabilities
│   │   ├── Projects.tsx     # Featured projects
│   │   ├── Blog.tsx         # Blog section (coming soon)
│   │   └── Footer.tsx       # Footer
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template with SEO
├── package.json             # Dependencies
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Performance

- Optimized production build with Vite
- Lazy loading and code splitting
- Minimal dependencies
- Fast Time to Interactive (TTI)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

**Gautam Jha**
- Email: gautam.jha3101@zohomail.in
- GitHub: [@gautamjha31012002](https://github.com/gautamjha31012002)
- Location: Delhi, India

---

Built with React, TypeScript & Tailwind CSS
