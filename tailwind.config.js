/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'exo': ['Exo','sans-serif'],
        'gafata': ['Gafata', 'sans-serif'],
        'catamaran' : ['Catamaran','sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'alegreya': ['Alegreya Sans SC', 'sans-serif']
      }
    },
  },
  plugins: [],
}