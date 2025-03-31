/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#751B1B',
        secondary: '#1E1E1E',
        background: '#EFEFEF',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
      }),
      fontFamily: {
        heading: ['Arial Black', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}