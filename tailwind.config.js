/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      brand: {
        50: '#FEF6DA',
        100: '#FFEFBA',
        200: '#FFE89E',
        300: '#FFE079',
        400: '#FFD64F',
        500: '#F3C83D',
        600: '#DCB125',
        700: '#C19817',
        800: '#A47D05',
        900: '#7A5C00',
        overlay: 'rgba(0, 0, 0, .02)',
      },
      neutral: {
        50: '#F8F9FA',
        100: '#E9ECEF',
        200: '#DEE2E6',
        300: '#CED4DA',
        400: '#ADB5BD',
        500: '#6C757D',
        600: '#495057',
        700: '#343A40',
        800: '#212529',
        900: '#131517',
      },
    },
    fontFamily: {
      headline: ['var(--font-pacifico)', ...defaultTheme.fontFamily.mono],
      body: ['var(--font-open-sans)', ...defaultTheme.fontFamily.sans],
      garamond: [
        'var(--font-cormorant-garamond)',
        ...defaultTheme.fontFamily.sans,
      ],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.25rem', letterSpacing: '4%' }],
      sm: ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '3%' }],
      base: ['1rem', { lineHeight: '1.5rem', letterspacing: '1px' }],
      lg: ['1.125rem', { lineHeight: '2rem', letterSpacing: '2%' }],
      xl: ['1.25rem', { lineHeight: '2rem', letterSpacing: '2%' }],
      'xl-pacifico': ['1.25rem', { lineHeight: '2.5rem', letterSpacing: '2%' }],
      '2xl-pacifico': ['2rem', { lineHeight: '3rem', letterSpacing: '1%' }],
      '3xl-pacifico': ['2.5rem', { lineHeight: '4rem', letterSpacing: '1%' }],
      '4xl-pacifico': ['3rem', { lineHeight: '4.5rem', letterSpacing: '1%' }],
      '5xl-pacifico': ['4rem', { lineHeight: '6rem', letterSpacing: '2%' }],
      '6xl-pacifico': ['5rem', { lineHeight: '8rem', letterSpacing: '1%' }],
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
