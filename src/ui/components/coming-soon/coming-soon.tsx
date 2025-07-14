import { Box, Typography } from "@mui/material";

const ComingSoon = () => (
  // This component displays a "Coming Soon" message centered on the page
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "2rem",
      color: "text.secondary",
      fontWeight: "bold",
      textAlign: "center",
    }}
  >
    <Typography variant="h4" component="h1">
      Coming Soon!
    </Typography>
  </Box>
);

export default ComingSoon;
