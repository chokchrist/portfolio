/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1C0F13', 
        'contrast': '#23161A',
        'secondary': {
          200: '#F4F3F0',
          400: '#EBE9E5',
          700: '#C9C8C4',
        }
      }
    },
  },
  plugins: [],
}

