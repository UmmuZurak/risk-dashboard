import React from "react";
import { Box, IconButton } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchBar from "../../../ui/components/search-bar/search-bar";
import FilterSelect from "../../../ui/components/filter-select/filter-select";

const filterOptions = [
  "Risk Level",
  "Asset",
  "Responsibility",
  "Resolving Group",
  "Business Unit",
  "Internet Exposure",
  "Critical Asset",
  "Regulation",
  "Risk State",
];

const FiltersBar: React.FC = () => (
  <Box sx={{ display: "flex", justifyContent: "space-between", gap: 3 }}>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      <SearchBar />
      {filterOptions.map((opt) => (
        <FilterSelect label={opt} />
      ))}
    </Box>
    <Box
      sx={{
        px: 0.5,
        bgcolor: "#fff",
        display: "flex",
        alignItems: "center",
        height: 40,
        borderRadius: "11.11px",
        boxShadow: "0px 2.22px 3.33px 0px #0000000D",
      }}
    >
      <IconButton sx={{ color: "#7E7E8F" }}>
        <SettingsOutlinedIcon />
      </IconButton>
    </Box>
  </Box>
);

export default FiltersBar;
