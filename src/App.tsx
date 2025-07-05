import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./ui/theme/theme";
import RiskPage from "./pages/risk";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RiskPage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
