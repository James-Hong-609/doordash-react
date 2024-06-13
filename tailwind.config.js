/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '160': '650px'
      },
      padding: {
        '5': '1.25rem',
        '1': '6px'
      },
      fontFamily: {
        'mine1': ['TT Norms', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"']
      },
      letterSpacing: {
        normal: '0.15px'
      },
      zIndex: {
        '1': '1'
      },
      borderRadius: {
        'large': '100px'
      },
      fontSize: {
        '4xl': '39px',
        '16px': '16px'
      },
      minWidth: {
        '100': '408px'
      },    
      maxWidth: {
        '8xl': '1184px'
      },
      lineHeight: {
        '5a': '22px'
      },
      flex: {
        '0': '1 1 100%'
      },
      boxShadow: {
        'mine1': '0 0 0 1px #19191900, 0 2px 8px 0 #19191933'
      },
      flexShrink: {
        '2': '2'
      },
      flexGrow: {
        '2': '2'
      },
      flex: {
        '2': '1 0 auto'
      }
    },
  },
  plugins: [],
}

