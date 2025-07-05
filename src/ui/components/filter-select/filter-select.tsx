import Paper from "@mui/material/Paper";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import  React from "react";
interface Props {
label: string
}
const FilterSelect: React.FC<Props> = ({label}) => {
  return (
    <Paper
      elevation={0}
      component="form"
      sx={{
        p: "10px 16px",
        display: "flex",
        alignItems: "center",
		height: 40,
        borderRadius: "11.11px",
        boxShadow: "0px 2.22px 3.33px 0px #0000000D",
		color:'#03165F',
		fontSize:"13px"
      }}
    >
      {label}
      <KeyboardArrowDownIcon sx={{ color: "#9A9AAF" }} />
    </Paper>
  );
}

export default FilterSelect;