/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
  },
  fontWeight: {
      normal: '400',
      bold: '600',
  },
  screens: {
      'sm': '430px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
  },
    extend: {
      screens: {
        'xs': '280px',
        // => @media (min-width: 640px) { ... }
    },
    transitionDuration: {
        '2000': '2000ms',
    },
    fontSize: {
        'title': "26px",
        'p': '18px',
        'c': '14px',

        'tt': '24px',
        'tp': '16px',
        'tc': '13px',

        'mt': '20px',
        'mp': '14px',
        'mc': '12px',
    },
    rotate: {
        '36': '360deg',
    }
    },
  },
  plugins: [],
}