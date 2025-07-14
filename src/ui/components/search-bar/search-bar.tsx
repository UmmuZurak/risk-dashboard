import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useRiskContext } from "../../../context/risk/risk-context";

export default function SearchBar() {
  // Import the handleSearch function from the risk context
  const { handleSearch } = useRiskContext();

  // This component renders a search bar with an input field and a search icon
  return (
    <Paper
      elevation={0}
      component="form"
      sx={{
        p: "10px 16px",
        display: "flex",
        alignItems: "center",
        width: 250,
        height: 40,
        borderRadius: "11.11px",
        boxShadow: "0px 2.22px 3.33px 0px #0000000D",
      }}
    >
      <InputBase
        sx={{ flex: 1, color: "#03165F", fontSize: "13px" }}
        placeholder="Search by asset, owner, source"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <SearchIcon sx={{ color: "#9A9AAF" }} />
    </Paper>
  );
}
