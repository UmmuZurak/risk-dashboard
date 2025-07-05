import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#F9F8FF",
    },
    primary: {
      main: "#416BFF1A",
      light: "#416BFF0D",
      600: "#03165F",
    },
    secondary: {
      main: "#FAA24B",
      light: "#FAA24B1A",
      200: "#F9D33D26",
      500: "#FDDA3E",
    },
    error: {
      main: "#BA0001",
      light: "#BA00011A",
    },
    warning: {
      main: "#F76565",
      light: "#FF2D2E1A",
    },
    success: {
      main: "#53CA43",
      light: "#53CA431A",
    },
    grey: {
      100: "#F2F3F7",
      500: "#9A9AAF",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      fontSize: "15px",
      fontWeight: 700,
      color: "#03165F",
    },
  },
});

export default theme;
