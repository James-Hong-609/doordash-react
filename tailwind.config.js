/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '160': '650px',
        'tmp': '154px',
        'tmp1': 'calc(100vh - 64px)',
        '33vh': '33vh',
        '15': '60px'
      },
      width: {
        'tmp': '154px',
        'vw': '100vw',
        '220': '220px',
        '15': '60px'
      },
      padding: {
        '5': '1.25rem',
        '220px': '220px'
      },
      fontFamily: {
        'mine1': ['TT Norms', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"']
      },
      letterSpacing: {
        'normal': '-0.01px',
        '0': '0',
        '4ch': '-0.04ch'
      },
      zIndex: {
        '1': '1',
        '100': '100',
        '400': '400',
        '449': '449',
        '450': '450'
      },
      borderRadius: {
        'large': '100px',
        '1000px': '1000px',
        'mine': '0px 1000px 1000px 0px'
      },
      fontSize: {
        '4xl': '39px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '32px': '32px',
        '40px': '40px'
      },
      minWidth: {
        '90': '360px',
        '100': '408px'
      },    
      maxWidth: {
        '1152': '1152px',
        '8xl': '1184px',
        '100': '400px',
        '90pct': '90%'
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
      },
      margin: {
        'tmp': '-60px',
        'mpx': '-1px',
        'm12px': '-12px',
        'm16px': '-16px',
        '7.5': '30px',
        '68': '272px'
      },
      minWidth: {
        '90pct': '90%',
        '220px': '220px'
      },
      gap: {
        '2': '2px',
        '15': '60px'
      },
      gridTemplateRows: {
        'auto': 'auto auto auto'
      },
      gridTemplateColumns: {
        'auto': 'auto 1fr auto'
      },
      left: {
        'tmp': '-10000px'
      },
      backgroundColor: {
        'gray': 'rgb(247,247,247)',
        'gray1': 'rgb(231,231,231)',
        'gray2': 'rgb(214,214,214)',
        'gray3': 'rgb(190,190,190)'
      }
    },
  },
  plugins: [],
}

