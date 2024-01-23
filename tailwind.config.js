/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'mxWidth': '1284px',
      },
      borderRadius: {
        '20': '20px',
      },
      fontSizee: {
        '16': '16px',
      },
      textColor: {
        'black': '#000',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #DD727D -3.47%, #834047 113.96%)',
        'gradient-image': 'linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(<path-to-image>)',
        'shaDo': '0px 2px 10px 0px rgba(210, 210, 210, 0.25)',
      
      },
      backgroundColor: {
        'transparent': 'rgba(255, 255, 255, 0.00)',
      },
    
      //border 
      borderColor: {
        'borderClr': 'rgba(229, 229, 229, 0.50)',
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}

