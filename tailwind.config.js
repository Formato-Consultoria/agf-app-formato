/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#761286',
        background: '#1E1E2F'
      },
      transitionProperty: {
        multiple: "width, height, backgroundColor, border-radius, display"
      },
    },
  },
  plugins: [],
}
