/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
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
