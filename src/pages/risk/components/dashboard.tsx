import { Grid } from "@mui/material";
import RiskSummary from "./risk-summary";
import FiltersBar from "./filters-bar";
import RiskTable from "./risk-table";
import { TABLE_DATA } from "../lib/mock-data/mock-data";
import { useEffect, useState } from "react";

const RiskDashboard = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(TABLE_DATA);

  useEffect(() => {
    // Return all data if search is empty
    if (search.trim() === "") {
      setFilteredData(TABLE_DATA);
      return;
    }

    // Filter data by owner, asset, source
    const filtered = TABLE_DATA.filter(
      (item) =>
        item.asset.toLowerCase().includes(search.toLowerCase()) ||
        item.owner.toLowerCase().includes(search.toLowerCase()) ||
        item.source.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredData(filtered);
  }, [search]);

  return (
    <Grid container spacing={2.5}>
      <Grid size={12}>
        <RiskSummary />
      </Grid>
      <Grid size={12}>
        <FiltersBar handleSearch={(search: string) => setSearch(search)} />
      </Grid>
      <Grid size={12}>
        <RiskTable data={filteredData} />
      </Grid>
    </Grid>
  );
};

export default RiskDashboard;
