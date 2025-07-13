import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./ui/theme/theme";
import RiskPage from "./pages/risk";
import DashboardLayout from "./ui/components/dashboard-layout/dashboard-layout";
import ComingSoonPage from "./ui/components/coming-soon/coming-soon";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<RiskPage />} />
            <Route path="*" element={<ComingSoonPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
