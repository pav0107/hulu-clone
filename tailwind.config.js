module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.html', './components/**/*.{js,jsx,ts,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
