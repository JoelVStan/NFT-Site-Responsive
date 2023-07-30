/** @type {import('tailwindcss').Config} */

const percentageWidth = require('tailwindcss-percentage-width')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif']
      }
      
    },
  },
  plugins: [
    percentageWidth
  ],
}

