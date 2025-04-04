/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
      },
    },
  },
  plugins: [],
};
