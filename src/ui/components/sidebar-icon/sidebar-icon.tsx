import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

interface SidebarIconProps {
  icon:(isActive:boolean) =>string;
  label: string;
  active: boolean;
  onClick?: () => void;
  path: string;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, label, active, onClick,path }) => (
  // This component renders an icon button for the sidebar with a tooltip
  <Link to={path}>
  <Tooltip title={label} placement="right">
    <IconButton
      onClick={onClick}
      sx={{
        mb: 1.5,
        bgcolor: active ? "primary.main" : "transparent",
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
      <img src={icon(active)} alt={label} width={25} height={25} style={{ objectFit: "contain" }} />
    </IconButton>
  </Tooltip>
  </Link>
  
);

export default SidebarIcon;
