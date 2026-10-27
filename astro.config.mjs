// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL: the public origin, used for canonical and Open Graph URLs.
// BASE_PATH: set to "/<repo-name>/" for a GitHub Pages project site; leave "/" for Vercel or a user site.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://tazerflash.github.io',
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
