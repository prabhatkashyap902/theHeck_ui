/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nothingFont: ["nothingFont", "sans-serif"],
      },
      fontWeight: {
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        // Mapping higher weights to the closest available weight
        extrabold: 700, // Map extra bold to bold
        black: 700, // Map black to bold
      },
    },
  },
  plugins: [],
}
