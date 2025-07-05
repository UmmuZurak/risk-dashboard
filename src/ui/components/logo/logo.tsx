import { Box } from "@mui/material";
import __logo from "../../../assets/logo.svg"; // Adjust the path as necessary

const Logo = () => (
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
