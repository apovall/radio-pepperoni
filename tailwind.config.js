/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "dark-gray": "#2E2E2E",
      "nostromo-green": "#92CC00",
      "cancel": "#C34A4A",
      "disabled": "#D9D9D9",
      "main": "#3D3D3D",
      "orange": "#FFC700",
      "lime": "#E9EC49",
      "acceptable-green": "#35B942"
    },
    fontFamily: {
      nostromo : ["Nostromo"],
    },
    extend: {
      dropShadow: {
        'nostromo-green': '0px 0px 3px #92CC00'
      }
    },
  },
  plugins: [],
}

