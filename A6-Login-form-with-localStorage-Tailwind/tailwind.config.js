/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        textDark: '#5d5d5d',
        textLight: '#6d6d6d',
        backGReg1: '#6fc3f7',
        backGReg2: '#c2fdff',
        backGLog1: '#ffb330',
        backGLog2: '#fffcce',
      },
    },
  },
  variants: {
    fill: ['hover', 'focus']
  },
  plugins: [],
}

