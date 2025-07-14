import { Box, Typography } from "@mui/material";

interface Props {
  icon?: string;
  label?: string;
  number?: number;
  type?: "critical" | "high" | "medium" | "low" | "exposed" | "grey";
}
const Tag: React.FC<Props> = ({ icon, label, number, type = "low" }) => {
  // Define the styles for each tag type
  const tagType = {
    critical: { background: "error.light", color: "error.main" },
    high: { background: "warning.light", color: "warning.main" },
    medium: { background: "secondary.light", color: "secondary.main" },
    low: { background: "success.light", color: "success.main" },
    exposed: { background: "secondary.200", color: "secondary.500" },
    grey: { background: "grey.100", color: "grey.500" },
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        py: 0.5,
        px: 1,
        color: tagType[type]?.color,
        backgroundColor: tagType[type]?.background,
        borderRadius: "5.56px",
      }}
    >
      {/* Display icon if defined */}
      {icon && (
        <img src={icon} alt={label} width={12.5} height={12.5} style={{ objectFit: "contain" }} />
      )}
      {/* Display label if defined */}
      {label && (
        <Typography variant="body2" style={{ fontSize: "14px", fontWeight: 600 }}>
          {label}
        </Typography>
      )}
      {/* Display number if defined */}
      {number && (
        <Typography
          variant="body2"
          color="primary.600"
          style={{ fontSize: "14px", fontWeight: 600 }}
        >
          {number}
        </Typography>
      )}
    </Box>
  );
};

export default Tag;
