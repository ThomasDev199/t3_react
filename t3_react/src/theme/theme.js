
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8B5CF6",
    },
    secondary: {
      main: "#F472B6",
    },
    background: {
      default: "#0B0B18",
      paper: "#17172A",
    },
    success: {
      main: "#22C55E",
    },
    warning: {
      main: "#FACC15",
    },
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },

  shape: {
    borderRadius: 16,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "11px 22px",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid rgba(255,255,255,0.08)",
        },
      },
    },
  },
});

export default theme;
