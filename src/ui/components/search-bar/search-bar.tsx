import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
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
      <InputBase sx={{ flex: 1,color:"#03165F",fontSize:"13px" }} placeholder="Search" inputProps={{ "aria-label": "search" }} />
      <SearchIcon sx={{ color: "#9A9AAF" }} />
    </Paper>
  );
}
