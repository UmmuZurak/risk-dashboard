import React from "react";
import { IconButton, Tooltip } from "@mui/material";

interface SidebarIconProps {
  icon: string;
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, label, selected, onClick }) => (
  <Tooltip title={label} placement="right">
    <IconButton
      onClick={onClick}
      sx={{
        mb: 1.5,
        bgcolor: selected ? "primary.main" : "transparent",
        "&:hover": {
          bgcolor: "primary.light",
          color: "#fff",
        },
        borderRadius: 2,
        width: 55,
        height: 55,
        transition: "background 0.2s",
      }}
      disableRipple
    >
      <img src={icon} alt={label} width={25} height={25} style={{ objectFit: "contain" }} />
    </IconButton>
  </Tooltip>
);

export default SidebarIcon;
