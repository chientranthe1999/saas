module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'rgba(91, 181, 162, 1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
