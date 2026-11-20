
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import App from "./App";
import { AuthProvider } from "./shared/contexts/AuthContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7655D9",
      dark: "#5D3DB8",
      light: "#A78BFA",
    },
    secondary: {
      main: "#A78BFA",
    },
    background: {
      default: "#F7F6FB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#252238",
      secondary: "#777184",
    },
  },

  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "10px 18px",
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        fullWidth: true,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
