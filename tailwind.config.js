/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')


module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: '1rem',
    },
    extend: {
      colors: {
        fePrimary : '#901C1C',
        feSecondary : '#d3573c',
        feSecondaryGray: '#525252',
        background: '#FAFAFA',
        infosBarBg: '#DB8876'
      },
    },
  },
  plugins: [],
}
