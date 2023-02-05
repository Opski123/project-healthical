/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      lsm: '578px',
      md: '768px',
      mm: '800px',
      lg: '936px',
      slg: '1000px',
      blg: '1190px',
      xlg: '1150px',
      xxlg: '1242px',
      sxx: '1313px',
      xx: '1345px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', serif",
        montserrat: "'Montserrat', sans-serif",
      },
      left: {
        800: "800px",
        700: "700px",
        98: "432px",
        500: "500px",
        617: "617px",
      },
      width: {
        800: "800px",
        700: "700px",
        98: "432px",
        408: "408px",
        500: "500px",
        617: "617px",
      },
      maxWidth: {
        98: "432px",
        617: "617px",
        85: "351px",
      },
      height: {
        98: "432px",
      },
      padding: {
        22: "88px",
        33: "132px",
        34: "136px",
      },
      margin: {
        98: "391px",
        34: "137px",
      },
      colors: {
        blue: "#0051B4",
        lightBlue: "#D2EDFF",
        darkBlue: "#001465",
        brown: "#535653",
        lightBrown: '#898989',
        darkBrown: "#111511",
        gray: "#F0F4F0",
        lightGray: '#EBEBEB',
        lighterGray: '#B4B4B4',
      },
      boxShadow: {
        '1': '0px 16px 24px 2px rgba(0, 0, 0, 0.14)',
        '2': '0px 12px 17px 2px rgba(0, 0, 0, 0.14)',
      },
    },
  },
  // plugins: [require('@tailwindcss/forms')],
}
