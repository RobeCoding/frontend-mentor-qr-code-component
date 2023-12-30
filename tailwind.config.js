/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'lg': '1440px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'myWhite': 'hsl(0, 0%, 100%)',
        'myLightGray': 'hsl(212, 45%, 89%)',
        'myGrayishBlue': 'hsl(220, 15%, 55%)',
        'myDarkBlue': 'hsl(218, 44%, 22%)',
      },
    },
  },
  plugins: [],
}

