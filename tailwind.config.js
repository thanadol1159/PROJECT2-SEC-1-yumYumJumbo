/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'heading': ['Kanit','sans-serif']
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false
  },
}
