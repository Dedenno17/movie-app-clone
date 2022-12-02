/** @type {import('tailwindcss').Config} */
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: '#0F0F0F',
        primaryRed: '#E50915',
        primaryGrey: '#E50915',
        primaryYellow: '#FFD600',
        secondaryGrey: '#282828',
      },
    },
  },
  plugins: [],
};
