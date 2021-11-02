module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // backgroundImage: (theme) => ({
      //   'bg-img': "url('/images/logo512.png')",
      // }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
