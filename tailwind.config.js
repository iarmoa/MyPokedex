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
        'box': '.3rem .3rem 0 rgba(77, 73, 62,.3)'
      },
      colors: {
        'primary': {
          'white': '#F0F0F0',
          'brown': '#363636',
          'dark': '#1F1B18',
          'menu': '#c9c8c6',
          'shadow': 'rgba(173, 168, 147, 1)'
        },
        'secondary': {
          'white': '#FFFFFF',
        },
        'transparent': 'transparent'
      }
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      heading: ['Open Sans', 'sans-serif']
    },
    fontWeight:{
      normal: '300',
      medium: '400',
      bold: '500'
    },
    letterSpacing: {
      normal: '.1rem'
    }
  },
  plugins: [
    plugin(function({addBase, theme}) {
      addBase({
        'h1': { fontSize: '2.3em', textTransform: 'uppercase', fontWeight: '400', letterSpacing: '.7rem' },
        'h2': { fontSize: '1.7em' },
        'h3': { fontSize: '1.3em' },
      })
    })
  ],
}
