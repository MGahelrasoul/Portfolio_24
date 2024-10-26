/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050505',
        secondary: '#f9f9f9',
        tertiary: '#0e0e0e',
        highlight: '#ffba08',
        lowlight: '#f48c06',
        nav: '#111111',
        btn: '#1c1c1c',
        'nav-border': 'rgba(51, 51, 51, 0.25)',
        'card-body': '#262626',
        'card-footer': '#161616',
        'card-border': '#303030',
        'card-b-txt': '#8c8c8c',
        'card-f-txt': '#a2a2a2',
        'btn-hover': '#303030',
        'white-txt': '#f3f3f3',
        'gray-txt': '#6d6d6d',
        'sub-txt': '#DCCEC5',
      },
      boxShadow: {
        card: '0px 35px 60px -30px rgba(244, 140, 6, 0.25)',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}
