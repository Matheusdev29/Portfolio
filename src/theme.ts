import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#2e2b2b",
    },
    secondary: {
      main:  "#0a0a0f",
    },
  },
  typography: {
    fontFamily:"Segoe UI"
  }
});
theme = responsiveFontSizes(theme)
export default theme