/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D357C',
        secondary: '#FF6502',
        background: '#F8FAFC',
      },
    },
  },
  plugins: [],
}

