/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "red",
        "color-secondary": "gray",
        "color-white": "#fff"
      }
    },
  },
  plugins: [],
}
