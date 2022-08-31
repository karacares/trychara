const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['*.{html,css}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#384D33',
          500: '#347344',
          300: '#4CB752',
          200: '#C9FFCC',
          100: '#E5FFE7',
        },
      },
      fontFamily: {
        cabinetRegular: [
          'CabinetGrotesk-Regular',
          ...defaultTheme.fontFamily.sans,
        ],
        cabinetMedium: [
          'CabinetGrotesk-Medium',
          ...defaultTheme.fontFamily.sans,
        ],
        cabinetBold: ['CabinetGrotesk-Bold', ...defaultTheme.fontFamily.sans],
        handoExtraLight: ['Hando-ExtraLight', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
