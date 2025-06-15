/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spore-black': '#000000',
        'spore-purple': '#9900FF',
        'spore-blue': '#00CCFF',
        'spore-pink': '#FF00CC',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 1.5s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 5px #00CCFF, 0 0 10px #00CCFF' 
          },
          '100%': { 
            textShadow: '0 0 10px #FF00CC, 0 0 20px #FF00CC' 
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
    },
  },
  plugins: [],
}
