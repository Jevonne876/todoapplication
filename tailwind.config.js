/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        vollkron: ["Vollkron", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
