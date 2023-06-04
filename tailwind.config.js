const CODGRAY = '#151515'
const SHAMROCK = '#4EE1A0'
const MINE_SHAFT = '#242424'
const ALTO = '#d9d9d9'


module.exports = {
  content: ["./src/**/*.{ts,tsx,html}"],
  theme: {
    colors: {
      primay: CODGRAY,
      secondary: SHAMROCK,
      teriary: MINE_SHAFT,
      customGrey: ALTO
    },
    fontFamily: {
      'space-grotest': ['Space Grotesk', 'sans-serif']
    }
  },
  plugins: [],
};
