# Rohan Pol: Portfolio

Personal portfolio site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). It is a single static page (Hero, About, Experience, Projects, Skills, Achievements, Contact) with light/dark mode that follows the system setting by default.

## Edit the content

All copy lives in **[`src/content.ts`](src/content.ts)**. Components only render it, so you should not need to touch them to update text.

- Wrap text in `**double asterisks**` to bold it (used for metrics).
- Leave a URL as `''` to hide that link until it is ready.

### Before deploying

- [x] `contact.linkedin` in `src/content.ts`: LinkedIn profile URL
- [ ] On-Device RAG project `links[0].href` in `src/content.ts`: repository URL
- [ ] Google Peer Bonus `description` in `src/content.ts`: one line on what ATO NoteMaker does
- [ ] `public/resume.pdf`: latest resume (the "Download Resume" buttons link here)
- [ ] Optional `public/profile.jpg`: square photo; replaces the "RP" initials automatically at build time

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the built site
```

`npm run og` regenerates `public/og.png` (the link-preview image) and the PNG favicons from `scripts/generate-images.mjs`. Run it if you change the name, headline, or headline stats.

## Deploy

The site builds to plain static files in `dist/`. Two environment variables control URLs:

| Variable    | Purpose                                         | Default                       |
| ----------- | ----------------------------------------------- | ----------------------------- |
| `SITE_URL`  | Public origin, used for canonical and OG URLs   | `https://tazerflash.github.io` |
| `BASE_PATH` | Sub-path the site is served from                | `/`                           |

### Option A: GitHub Pages

1. Push this folder to a GitHub repository on the `main` branch.
   - Repo named `TazerFlash.github.io` → the site lives at `https://tazerflash.github.io/`.
   - Any other repo name (e.g. `portfolio`) → go to **Settings → Secrets and variables → Actions → Variables** and add `BASE_PATH` = `/portfolio/`.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) and publishes the site.

### Option B: Vercel

1. Import the repository at [vercel.com/new](https://vercel.com/new). Vercel detects Astro automatically (build `npm run build`, output `dist`).
2. Under **Environment Variables**, add `SITE_URL` = your Vercel URL (e.g. `https://rohanpol.vercel.app`) so the Open Graph image URL is correct.
3. Deploy. Leave `BASE_PATH` unset.

## Project structure

```
public/            favicon, OG image, robots.txt, resume.pdf, profile.jpg
scripts/           OG image / favicon generator
src/content.ts     all site content
src/components/    one component per section
src/layouts/       HTML shell, SEO tags, theme + scroll-reveal scripts
src/styles/        Tailwind entry and colour tokens (one accent colour)
```
