import { Grid } from "@mui/material";
import RiskSummary from "./risk-summary";
import FiltersBar from "./filters-bar";
import RiskTable from "./risk-table";
import { useRiskContext } from "../../../context/risk/risk-context";

const RiskDashboard = () => {
  // Get filtered data from the risk context
  const { filteredData } = useRiskContext();

  return (
    // Main container for the risk dashboard
    <Grid container spacing={2.5}>
      <Grid size={12}>
        <RiskSummary />
      </Grid>
      <Grid size={12}>
        <FiltersBar />
      </Grid>
      <Grid size={12}>
        <RiskTable data={filteredData} />
      </Grid>
    </Grid>
  );
};

export default RiskDashboard;
