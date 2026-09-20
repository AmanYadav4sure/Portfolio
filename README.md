# Aman Yadav — Portfolio

Personal portfolio of **Aman Yadav**, a mobile & AI-native developer from Janakpur, Nepal.

**Live site:** [amanyadav.site](https://amanyadav.site)

## Tech stack

- **React 19** + **TypeScript** + **Vite**
- **GSAP** + **Lenis** for animation and smooth scrolling
- **Three.js** for the interactive particle background
- **react-helmet-async** for per-page SEO meta
- **Space Grotesk / Montserrat / Instrument Serif / DM Mono** typography

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # typecheck + build + prerender /projects and /contact
npm run preview   # preview the production build
npm run lint      # oxlint
```

## Project structure

```
public/          static assets (logos, icons, robots.txt, sitemap.xml)
src/
  components/    Navbar, SEO, MagneticButton, ThreeBackground
  data/          projects.ts — the project showcase data
  pages/         Home, Projects, Contact
  styles/        global.css (design tokens)
tests/           Playwright responsive smoke tests
postbuild.cjs    prerenders /projects and /contact static HTML for SEO
```

## Deployment

Deployed on Vercel — every push to `main` builds and ships automatically.
