/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom pink and purple palette for Maria/maah
        'maah-pink': {
          50: '#fdf3f8',
          100: '#fce7f1',
          200: '#f8cfe3',
          300: '#f4b7d5',
          400: '#ec7fbb',
          500: '#e947a1',
          600: '#d62590',
          700: '#b81975',
          800: '#94125a',
          900: '#7a0d4a',
        },
        'maah-purple': {
          50: '#faf5ff',
          100: '#f5ebff',
          200: '#ead7ff',
          300: '#dfc3ff',
          400: '#c896ff',
          500: '#b368ff',
          600: '#9d3aff',
          700: '#8b24e6',
          800: '#6e1ab8',
          900: '#591190',
        },
      },
      backgroundColor: {
        'maah-dark': '#0f0617',
        'maah-darker': '#0a0410',
      },
      textColor: {
        'maah-light': '#f8f0fc',
      },
      borderColor: {
        'maah-pink-light': '#e947a1',
        'maah-purple-light': '#b368ff',
      },
      gradientColorStops: {
        'maah-gradient-start': '#e947a1',
        'maah-gradient-end': '#b368ff',
      },
      boxShadow: {
        'maah-pink': '0 0 20px rgba(233, 71, 161, 0.3)',
        'maah-purple': '0 0 20px rgba(179, 104, 255, 0.3)',
        'maah-glow': '0 0 30px rgba(233, 71, 161, 0.5), 0 0 60px rgba(179, 104, 255, 0.3)',
      },
      animation: {
        'maah-pulse': 'maah-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'maah-glow': 'maah-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'maah-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.8' },
        },
        'maah-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(233, 71, 161, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(179, 104, 255, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};
