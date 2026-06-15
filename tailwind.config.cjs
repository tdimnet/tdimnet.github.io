const CODGRAY = '#151515'
const SHAMROCK = '#4EE1A0'
const MINE_SHAFT = '#242424'
const ALTO = '#d9d9d9'
const PIZAZZ = "#F4AC45"
const WHITE = '#FFFFFF'
// Mine Shaft 2 — the design system's hairline border on dark surfaces.
const HAIRLINE = '#2e2e2e'


module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    colors: {
      primay: CODGRAY,
      secondary: SHAMROCK,
      teriary: MINE_SHAFT,
      customGrey: ALTO,
      white: WHITE,
      orange: PIZAZZ,
      hairline: HAIRLINE
    }
  },
  plugins: [],
};
