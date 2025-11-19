/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(249 250 251)',
        foreground: 'rgb(17 24 39)',
      },
    },
  },
  plugins: [],
}
