import { Box } from "@mui/material";
import __logo from "../../../assets/logo.svg";

const Logo = () => (
  // This component displays the logo in a circular box
  <Box
    sx={{
      width: 44,
      height: 44,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img src={__logo} alt="Logo" width={34} height={40} style={{ objectFit: "contain" }} />
  </Box>
);

export default Logo;
