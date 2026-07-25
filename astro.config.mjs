import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
// Styling is plain, hand-written CSS (src/styles/global.css) — no Tailwind,
// no PostCSS pipeline. Astro bundles the CSS on its own.
export default defineConfig({
  site: 'https://tdimnet.github.io',
  // Generates /sitemap-index.xml at build time for search engines.
  integrations: [sitemap()],
})
