/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "marketing-gradient":
          "radial-gradient(124.59% 356.65% at 5.73% 92.67%, #FEFAF5 37.96%, #FDE9D3 100%)",
      },
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
