/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'cabin': ["Cabin", "sans-serif"],
      },
      colors: {
        'header-bg': 'f0eeeb',
        'font-color': '6e6759',
        'footer-color': '9e9e9e'
      },
      backgroundImage: {
        'phone-bg': "url('/build/img/phone-mockup-desktop.png')",
      },
    },
  },
  plugins: [],
}

