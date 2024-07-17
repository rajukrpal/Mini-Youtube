/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black-opacity-40': 'rgba(0, 0, 0, 0.6)', // Custom color with 40% opacity
        'custom-black-opacity': "#212529",
      },
    
    },
  },
  plugins: [],
}