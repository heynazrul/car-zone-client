/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#FF3811',

          secondary: '#f2ae48',

          accent: '#436800',

          neutral: '#1A171C',

          'base-100': '#FFFFFF',

          info: '#90BADA',

          success: '#106059',

          warning: '#E1820E',

          error: '#F9063F',

          // 'base-second': '#F3F3F3',
        },
      },

      {
        dark: {
          primary: '#FF3811',

          secondary: '#D926AA',

          accent: '#1FB2A5',

          neutral: '#191D24',

          'base-100': '#2A303C',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',

          // 'base-second': '#F3F3F3',

          // 'base-200': '#fff',
        },
      },
    ],
  },
};
