/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      md: "555 px",
    },
    extend: {
      minWidth: { 6: "360 px" },
    },
  },
  plugins: [],
};
