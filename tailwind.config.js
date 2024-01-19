/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#D87D4A',
        'custom-lightgray' : '#F1F1F1;',
      },
      height: {
        '100px' : '100px',
        '352px' : '352px',
      }
    },
  },
  plugins: [],
}

