/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'baloo': ['"Baloo Bhai 2"', 'cursive'],
        'average-sans': ['"Average Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#185D56',
      }
    },
  },
  plugins: [],
}