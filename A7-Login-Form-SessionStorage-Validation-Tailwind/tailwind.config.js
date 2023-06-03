/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        textDark: '#5d5d5d',
        textLight: '#6d6d6d',
        backGReg1: '#ffb330',
        backGReg2: '#fffcce',
        whiteSheet: 'rgba(255, 255, 255, 0.8)'
      },
    },
  },
  variants: {
    fill: ['hover', 'focus']
  },
  plugins: [],
}

