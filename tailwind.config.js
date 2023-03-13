/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'heading': ['Kanit','sans-serif']
    }
  },
  plugins: [require("daisyui"), ('flowbite/plugin')],
  daisyui: {
    themes: false
  },
}
