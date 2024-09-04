/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #1E1156 0%, rgba(28, 35, 64, 0) 100%)',
      },
    },
  },
  plugins: [],
}