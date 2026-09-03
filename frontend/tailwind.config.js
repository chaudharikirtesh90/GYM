/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EF4444',
        secondary: '#111827',
        bg: '#F8FAFC',
        text: '#111827',
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(239,68,68,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(17,24,39,0.18), transparent 35%)',
      },
    },
  },
  plugins: [],
};
