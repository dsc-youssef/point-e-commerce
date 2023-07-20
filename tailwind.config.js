/** @type {import('tailwindcss').Config} */

// Custom Config
const colors = require('./config/tailwind/colors');
const fontFamily = require('./config/tailwind/fonts');
const fontSize = require("./config/tailwind/fontSize");
const container = require("./config/tailwind/container");

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container,
    extend: {
      colors,
      fontFamily,
      fontSize
    },

  },
  plugins: [],
}

