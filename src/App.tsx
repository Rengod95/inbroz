import React from "react";
import Header from "./components/common/Header";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import theme from "./Styles/theme";
import { mui_theme } from "./Styles/MuiTheme";
import PageRouter from "./Pages/Router/PageRouter";
function App() {
  return (
    <MuiThemeProvider theme={mui_theme}>
      <EmotionThemeProvider theme={theme}>
        <Header />
        <PageRouter />
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
