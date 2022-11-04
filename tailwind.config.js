/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1199px',
      "2xl": '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: '#4B64DD',
        secondary: '#F8F9FF',
        dark: '#051036',
        "light-primary": '#fbf7ed',
      },
      fontFamily: {
        WASSFONT: ['WASSFT', 'sans-serif'],
        WASSFONTBOLD: ['WASSFTBOLD', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
