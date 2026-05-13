/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:      '#1A6DB5',
          blueDark:  '#0F4A80',
          blueLight: '#EBF4FF',
          orange:    '#F47920',
          orangeLight:'#FFF3E8',
          green:     '#4CAF50',
          navy:      '#1A2B4A',
          navyLight: '#2D3F5E',
          sky:       '#D6EEFF',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.jpg')",
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        pulse_glow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(244,121,32,0.4)' },
          '50%':     { boxShadow: '0 0 40px rgba(244,121,32,0.8)' },
        },
      },
      animation: {
        float:      'float 4s ease-in-out infinite',
        pulse_glow: 'pulse_glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
