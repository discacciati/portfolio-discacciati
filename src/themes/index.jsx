import { createTheme, css } from "@mui/material/styles";

const TitilliumFont = css`
 @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;700&display=swap');
`;

const BebasFont = css`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
`;

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0A0A0B",
    },
    white:{ 
        1: "#f5f5f5",
    },    
    lilac:{
        1: "#947EB0",
    },
    pastellilac:{
        1:"#DCD6F7",
    },
    green:{
        1:"#A9D2D5",
    },
    success: {
      main: "#3FE864",
    },
    error: {
      main: "#E83F5B",
    },
  },
  typography: {
    fontFamily: TitilliumFont,
    fontSize: 12,
    h1: {
      fontFamily: BebasFont,
      fontSize: 18,
      fontWeight: 700,
    },
    h2: {
      fontFamily: BebasFont,
      fontSize: 16,
      fontWeight: 600,
    },
    h3: {
      fontFamily: BebasFont,
      fontSize: 14,
      fontWeight: 700,
    },
    h4: {
      fontFamily: BebasFont,
      fontSize: 12,
      fontWeight: 400,
    },
    button: {
      fontFamily: BebasFont,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 4,
  }, 

  


});
