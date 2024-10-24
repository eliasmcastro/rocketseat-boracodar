/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-1': '#D9D9D9',
        'gray-2': '#565E6D',
        'gray-3': '#252C3A',
        'gray-4': '#1D2330',
        'gray-5': '#181D28',
        'gray-6': '#161A24',
        'green-light': '#ABF770',
        'green-dark': '#5CAD1D',
        'red-light': '#F77070',
        'red-dark': '#AB3030',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
