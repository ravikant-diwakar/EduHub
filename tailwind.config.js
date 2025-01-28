/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#121212',   /* Darker background for a deeper feel */
          secondary: '#181818', /* Slightly lighter secondary color for contrast */
          accent: '#303030',    /* A bit brighter accent to highlight elements */
          text: '#e0e0e0',      /* Light gray text for improved readability */
      }      
      }
    },
  },
  plugins: [],
}