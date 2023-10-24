const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      fontColor: '#FF3811',
      fontDark: '#151515',
      fontTransparent: '#737373',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
});
