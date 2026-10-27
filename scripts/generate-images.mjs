// Renders the Open Graph preview image and PNG favicons into public/.
// Run with `npm run og` after changing the name, headline, or accent colour.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const out = (f) => fileURLToPath(new URL(`../public/${f}`, import.meta.url));
const accent = '#2253d1';
const sans = "Inter, 'Segoe UI', Helvetica, Arial, sans-serif";
const mono = "'JetBrains Mono', Consolas, Menlo, monospace";

const stats = [
  ['8% → 14%', 'onboarding retention'],
  ['66%', 'ATO detection automated'],
  ['$90M+', 'fraud losses quantified'],
];

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0b0d11"/>
  <rect x="0" y="0" width="1200" height="6" fill="${accent}"/>
  <rect x="80" y="80" width="64" height="64" rx="14" fill="${accent}"/>
  <text x="112" y="122" text-anchor="middle" font-family="${mono}" font-size="26" font-weight="600" fill="#fff">RP</text>
  <text x="168" y="122" font-family="${mono}" font-size="22" fill="#9ba2ae" letter-spacing="2">PRODUCT ANALYTICS · GENERATIVE AI</text>
  <text x="80" y="268" font-family="${sans}" font-size="92" font-weight="700" fill="#eceef2">Rohan Pol</text>
  <text x="80" y="332" font-family="${sans}" font-size="38" font-weight="500" fill="#82a6ff">Data Scientist, Product Analytics &amp; Generative AI</text>
  ${stats
    .map(
      ([v, l], i) => `
  <g transform="translate(${80 + i * 350}, 420)">
    <rect width="320" height="130" rx="16" fill="#12151b" stroke="#242833" stroke-width="2"/>
    <text x="28" y="62" font-family="${mono}" font-size="40" font-weight="600" fill="#eceef2">${v.replace('&', '&amp;')}</text>
    <text x="28" y="100" font-family="${sans}" font-size="22" fill="#9ba2ae">${l}</text>
  </g>`,
    )
    .join('')}
</svg>`;

const icon = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="${size >= 180 ? 0 : 14}" fill="${accent}"/>
  <text x="32" y="42" text-anchor="middle" font-family="${mono}" font-size="28" font-weight="600" fill="#fff">RP</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile(out('og.png'));
await sharp(Buffer.from(icon(180))).png().toFile(out('apple-touch-icon.png'));
await sharp(Buffer.from(icon(32))).png().toFile(out('favicon-32.png'));
console.log('Wrote public/og.png, public/apple-touch-icon.png, public/favicon-32.png');
