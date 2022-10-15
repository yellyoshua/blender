/* eslint-disable no-undef */ 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#473D5F',
        'primary-light': '#6B5F8A',
        'primary-dark': '#2A1F3A',
        secondary: '#006A74',
        tertiary: '#FCB82F'
      }
    }
  },
  plugins: []
};
