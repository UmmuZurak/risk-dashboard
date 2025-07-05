import React from "react";
import { Box, useTheme, useMediaQuery, Grid } from "@mui/material";
import Sidebar from "../../../ui/components/sidebar/sidebar";
import RiskSummary from "./risk-summary";
import FiltersBar from "./filters-bar";
import RiskTable from "./risk-table";
import { TABLE_DATA } from "../lib/mock-data/mock-data";

const drawerWidth = 80;

const RiskDashboard: React.FC = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
		{/* For mobile, add space for AppBar/Toolbar */}
        {!isMdUp && <Box sx={{ height: 56 }} />}
        <Grid container spacing={2.5} sx={{ width: "100%", pr: { xs: 0, md: 3 },pb:3 }}>
          <Grid size={12}>
            <RiskSummary />
          </Grid>
          <Grid size={12}>
            <FiltersBar />
          </Grid>
          <Grid size={12}>
            <RiskTable data={TABLE_DATA} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RiskDashboard;
