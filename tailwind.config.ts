import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero--bg-main': "url('/hero--bg-main.png')",
      },
      colors: {
        'color--green': {
          DEFAULT: '#00CE8D',
          50: '#87FFD9',
          100: '#72FFD3',
          200: '#49FFC6',
          300: '#21FFB9',
          400: '#00F7A9',
          500: '#00CE8D',
          600: '#009667',
          700: '#005E40',
          800: '#00261A',
        },
        'color--gray': '#D3D3D3',
        'color--black': '#070D0D',
      },
    },
  },
  plugins: [],
};
export default config;
