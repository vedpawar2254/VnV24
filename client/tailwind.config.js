/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#1A1A1A', 
          'secondary': '#F5F5F5',
          'accent': {
            DEFAULT: '#B3A369', 
            hover: '#C8B97A',  
          },
          'text-primary': '#E0E0E0',
          'text-secondary': '#A1A1A1',
          'border-color': '#2C2C2C', 
        },
        fontFamily: {
            sans: ['var(--font-inter)', 'sans-serif'],
            serif: ['var(--font-playfair-display)', 'serif'],
          },
      },
    },
    plugins: [],
  }