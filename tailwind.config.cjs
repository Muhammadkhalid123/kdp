const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      scale: {
        '125': '1.25',
        '150': '1.5',
      },
      fontFamily: {
        noto: ['"Noto Serif Display"', 'serif'],
      },
    }
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: '"Noto Serif Display", serif',
        },
      });
    }),
  ],
};
