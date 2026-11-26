import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#276348" },
    secondary: { main: "#92bd67" },
    background: { default: "#f6f8f5", paper: "#ffffff" },
    success: { main: "#367b54" },
    text: { primary: "#26362c", secondary: "#77827a" },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 9, padding: "10px 18px" } } },
    MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } },
    MuiTextField: { defaultProps: { size: "small" } },
  },
});

export default theme;
