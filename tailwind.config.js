/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#18159F', // Example: Deep Blue
        secondary: '#D9DCE1', // Example: Light Gray
      },
    },
  },
  plugins: [],
}

