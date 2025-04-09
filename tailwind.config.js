/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        chisato: 'rgb(173, 64, 74)',
        takina: 'rgb(49, 57, 74)',
        kurumi: 'rgb(229, 201, 157)',
      }
    },
  },
  plugins: [],
}