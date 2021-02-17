const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        splash: 'splash 3s normal forwards ease-out'
      },
      keyframes: {
        splash: {
          '0%': { 'background-color': colors.yellow['200'] },
          '100%': { 'background-color': 'transparent' }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
