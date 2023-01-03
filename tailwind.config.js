/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.html', './node_modules/flowbite/**/*.js'
  ],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss'),
  ],
}