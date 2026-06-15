import { defineConfig } from 'astro/config'

// https://astro.build/config
// Tailwind v3 is processed through the standard postcss.config.cjs pipeline,
// mirroring the previous Vite setup (tailwindcss + autoprefixer).
export default defineConfig({
  site: 'https://tdimnet.github.io',
  markdown: {
    // Plain, un-highlighted code blocks suit the monochrome pixel-art brand;
    // styling is handled by `.article-prose pre` in global.css.
    syntaxHighlight: false,
  },
})
