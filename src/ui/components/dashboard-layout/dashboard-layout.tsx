import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Sidebar from "../sidebar/sidebar";
import { Outlet } from "react-router-dom";
const drawerWidth = 80;

// This is the main layout for the dashboard with a sidebar and an outlet for passing child components.
const DashboardLayout = () => {
  // Use theme and media query to handle responsive design
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  // State to manage the mobile sidebar toggle
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // Function to toggle the mobile sidebar
  const handleMobileToggle = () => setMobileOpen((prev) => !prev);
  return (
    <Box sx={{ display: "flex", width: "100vw" }}>
      <Sidebar mobileOpen={mobileOpen} onMobileToggle={handleMobileToggle} />
      <Box
        sx={{
          flex: 1,
          mt: 2,
          ml: { xs: 0, md: `${drawerWidth - 50}px` },
          p: 3,
          bgcolor: "background.default",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        {/* For mobile, add space for top bar */}
        {!isMdUp && <Box sx={{ height: 50 }} />}
        
        {/* Outlet for passing children components */}
        <Box sx={{ width: "100%", pr: { xs: 0, md: 3 }, pb: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
