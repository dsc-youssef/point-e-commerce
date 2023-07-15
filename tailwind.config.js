/** @type {import('tailwindcss').Config} */

// Custom Config
const colors = require('./config/tailwind/colors');
const fontFamily = require('./config/tailwind/fonts');

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily
    },

  },
  plugins: [],
}

