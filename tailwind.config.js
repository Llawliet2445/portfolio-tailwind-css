/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding : '16px',

    },
    extend: {
      colors: {
        primary: '#2563eb',
        secondary : '#64748b',
        instagram : '#E4405F',
        discord : '#5865F2',
        github : '#181717',
        stack_overflow : '#F58025',
        footer : '#083344',
      },
      screens : {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

