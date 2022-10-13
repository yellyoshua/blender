/* eslint-disable no-undef */ 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#473D5F',
        tertiary: '#FCB82F'
      }
    }
  },
  plugins: []
};
