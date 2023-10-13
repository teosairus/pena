import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.css";
import App from "./views/App";

// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: "#00539B",
      dark: "#00396A",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#B5272E",
      // light: '#F5EBFF',
      dark: "#871D22",
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    grey: {
      500: "#9B9B9B",
    },
    error: {
      main: "#B5272E",
      light: "#F5EBFF",
      dark: "#871D22",
    },
    text: {
      primary: "#000",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
  },
  typography: {
    htmlFontSize: 16,
    allVariants: {
      fontFamily: "Montserrat Regular",
    },
    h1: {
      fontSize: "96px",
    },
    body1: {
      fontWeight: 500,
      fontFamily: "Montserrat Regular",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#fff",
          color: "primary",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          background: "#fff",
          color: "#00539B",
          fontSize: "20px",
          fontWeight: 500,
          letterSpacing: "0.15px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: "#00539B",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "70px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "6px 22px",
          fontSize: "1rem",
          fontWeight: 700,
          letterSpacing: "0.15px",
        },
        outlinedPrimary: {
          color: "#00539B",
          borderColor: "#00539B",
          "&:hover": {
            backgroundColor: "#00539B",
            color: "#fff",
          },
        },
        outlinedSecondary: {
          color: "secondary",
          borderColor: "secondary",
          "&:hover": {
            backgroundColor: "#B5272E",
            color: "#fff",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: "24px",
          height: "36px",
        },
      },
    },
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
