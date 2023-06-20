/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    colors: {
      'izzup-primary': '#00B096',
      'izzup-secondary': '#0081A7',
      'izzup-gray': '#A5A5A5',
      'izzup-black': '#1C1C1E',
      'izzup-white': '#EDF0EB',
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

