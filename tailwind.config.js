/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        200: '78rem',
        30: '19rem'
      },
      width: {
        20: '6rem'
      }
    },
  },
  plugins: [],
}

