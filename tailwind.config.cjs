/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: 'hsl(0 0 2)',
        secondary: 'hsl(0 0 5)',
        tertiary: 'hsl(0 0 10)',
        txt: 'hsl(0 0 95)',
        muted: 'hsl(0 0 70)',
        border: 'hsl(0 0 30)',
        highlight: 'hsl(43 100 52)',
        lowlight: 'hsl(34, 95%, 49%)',
        'nav-border': 'hsl(0 0 20)',
        'card-body': 'hsl(0 0 15)',
        'sub-txt': 'hsl(23 25 82)',
      },
      boxShadow: {
        card: '0px 35px 60px -30px rgba(244, 140, 6, 0.25)',
        exp: '0px 3px 0px #303030',
      },
      screens: {
        xs: '450px',
      },
    },
  },
}
