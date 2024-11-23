/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  important: true,
  theme: {
    extend: {
      width: {
        fill: '-webkit-fill-available',
      },
      height: {
        fill: '-webkit-fill-available',
      },
    },
  },
  plugins: [],
};
