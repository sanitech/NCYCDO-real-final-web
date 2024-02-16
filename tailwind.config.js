/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx, js, tsx}",
    "./node_modules/flowbite-react/lib/esm/**/*.{js, jsx, tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
