/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Poppins","Inter", "Arial", "Helvetica", "sans-serif"],
        // sans: [ "Poppins","Inter", "Arial", "Helvetica", "sans-serif"],
        Montserrat: ["Montserrat", "Mulish", "Arial", "Helvetica", "sans-serif"]
      },
    },
  },
  plugins: [],
}

