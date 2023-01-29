// @ts-nocheck
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'primary': '3px 3px 0 rgba(77, 73, 62, .6)',
        'pattern': '0 0 150px rgba(#4D493E, .4), inset 0 0 150px rgba($#4D493E, .3)'
      },
      dropShadow: {
        'title': '.3rem .3rem 0 rgba(77, 73, 62,.3)',
      },
      colors: {
        'primary': {
          'white': '#DFDFDF',
          'brown': '#4D493E',
          'dark': '#1F1B18'
        },
        'transparent': 'transparent'
      },
      letterSpacing: {
        'normal': '.1rem'
      }
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      heading: ['Open Sans', 'sans-serif']
    }
  },
  plugins: [
    plugin(function({addBase, theme}) {
      addBase({
        'h1': { fontSize: '2em', textTransform: 'uppercase', fontWeight: '400', letterSpacing: '.7rem' },
        'h2': { fontSize: '1.7em' },
        'h3': { fontSize: '1.3em' },
      })
    })
  ],
}
