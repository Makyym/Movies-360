export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textShadow: {
        redGlow:
          '1px 1px 20px rgba(255, 0, 0, 0.75), -1px -1px 20px rgba(255, 0, 0, 0.3)',
        none: 'none',
      },
    },
  },
  plugins: [textShadow],
};
