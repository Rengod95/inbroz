import { createTheme } from "@mui/material";

export const mui_theme = createTheme({
  palette: {
    primary: {
      main: "#6c63ff",
    },
    secondary: {
      main: "#242e54",
    },
    success: {
      main: "#00bf8e",
    },
    warning: {
      main: "#f7c94b",
    },
    error: {
      main: "#f75842",
    },
    text: {
      primary: "rgba(255,255,255,0.7)",
      secondary: "#ffffff",
      disabled: "rgba(255,255,255,0.25)",
    },
    background: {
      default: "#2e3267",
      paper: "#424890",
    },
  },
});
