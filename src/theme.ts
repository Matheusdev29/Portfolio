import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#2e2b2b",
    },
    secondary: {
      main:  "#ffffff",
    },
  },
  typography: {
    fontFamily:"Segoe UI"
  }
});
theme = responsiveFontSizes(theme)
export default theme