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
          // Base / Neutral: Off-white / Cream
          'primary': '#F8F6F2',
          'secondary': '#FAF9F7',
          
          // Secondary: Deep Forest Green or Warm Taupe
          'forest-green': '#2E3E2F',
          'warm-taupe': '#8B7D6B',
          
          // Accent / Highlight: Gold or Copper
          'gold': '#D6A953',
          'copper': '#B67C55',
          
          // Text Colors
          'text-dark': '#333333',
          'text-light': '#FAFAFA',
          
          // Border Colors
          'border-color': '#E0E0E0',
        },
        fontFamily: {
            sans: ['var(--font-inter)', 'sans-serif'],
            serif: ['var(--font-playfair-display)', 'serif'],
          },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }