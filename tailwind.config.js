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
        // Brand colors
        brand: {
          // Teal/mint color from the search button and highlighted text
          primary: {
            50: '#e6f7f4',
            100: '#ccefe9',
            200: '#99dfd3',
            300: '#66cfbd',
            400: '#33bfa7',
            500: '#5cbfb0', // Main brand color from the search button
            600: '#2a9988',
            700: '#207366',
            800: '#154c44',
            900: '#0a2622',
          },
          // Orange/coral from the sign up button
          secondary: {
            50: '#fff0eb',
            100: '#ffe1d6',
            200: '#ffc3ad',
            300: '#ffa585',
            400: '#ff875c',
            500: '#ff6933', // Button color
            600: '#cc5429',
            700: '#993f1f',
            800: '#662a14',
            900: '#33150a',
          },
        },
        // UI colors
        surface: {
          white: '#ffffff',
          light: '#f5f5f5', // Light gray background
          dark: '#181818', // Dark sections
          darker: '#121212', // Footer
        },
        text: {
          primary: '#121212', // Main text color
          secondary: '#666666', // Secondary text
          muted: '#999999', // Muted text
          light: '#ffffff', // Text on dark backgrounds
        },
        // Supporting colors
        accent: {
          green: '#5cb85c',
          blue: '#428bca',
          orange: '#ff6933',
        },
        // Grayscale
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#dddddd',
          400: '#cccccc',
          500: '#999999',
          600: '#777777',
          700: '#555555',
          800: '#333333',
          900: '#111111',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '4xs': '0.125rem', // 2px
        '3xs': '0.25rem', // 4px
        '2xs': '0.375rem', // 6px
        xs: '0.5rem', // 8px
        sm: '0.75rem', // 12px
        md: '1rem', // 16px
        lg: '1.25rem', // 20px
        xl: '1.5rem', // 24px
        '2xl': '2rem', // 32px
        '3xl': '2.5rem', // 40px
        '4xl': '3rem', // 48px
        '5xl': '4rem', // 64px
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
    },
  },
  plugins: [],
};
