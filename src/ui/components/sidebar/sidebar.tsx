import React from "react";
import {
  Box,
  Drawer,
  Avatar,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
  Toolbar,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarIcon from "../../../ui/components/sidebar-icon/sidebar-icon";
import Logo from "../logo/logo";
import __avatar from "../../../assets/avatar.svg";
import __findings_icon from "../../../assets/nav-icons/inactive/findings.svg";
import __dashboard_icon from "../../../assets/nav-icons/inactive/dashboard.svg";
import __risk_icon from "../../../assets/nav-icons/active/risk.svg";
import __security_icon from "../../../assets/nav-icons/inactive/security.svg";
import __settings_icon from "../../../assets/nav-icons/inactive/settings.svg";
import __bot_icon from "../../../assets/nav-icons/inactive/bot.svg";
const drawerWidth = 80;

const navItems = [
  { icon: __dashboard_icon, label: "Dashboard" },
  { icon: __findings_icon, label: "Findings" },
  { icon: __risk_icon, label: "Risk", selected: true },
  { icon: __security_icon, label: "Security" },
];

const bottomNavItems = [
  { icon: __settings_icon, label: "Settings" },
  { icon: __bot_icon, label: "Bot" },
];

interface SidebarProps {
  mobileOpen: boolean;
  onMobileToggle: () => void;
}

const SidebarContent: React.FC = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        width: drawerWidth,
        height: "100%",
        bgcolor: "#F9F8FF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 3,
      }}
    >
      {!isMdUp && <Box sx={{ pt: 7 }} />}

      <Logo />

      {/* Navigation items */}
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", pt: 4 }}>
        {/* Top navigation icons */}
        <Stack spacing={0.5} flex={1} alignItems="center" width="100%">
          {navItems.map((item, idx) => (
            <SidebarIcon key={idx} icon={item.icon} label={item.label} selected={item.selected} />
          ))}
        </Stack>
        <Divider sx={{ my: 1, width: 32 }} />
        {/* Bottom navigation icons */}
        <Stack spacing={0.5} flex={1} alignItems="center" width="100%">
          {bottomNavItems.map((item, idx) => (
            <SidebarIcon key={idx} icon={item.icon} label={item.label} />
          ))}
        </Stack>
      </Box>

      {/* Display user avatar at bottom on desktop */}
      {isMdUp && (
        <Box sx={{ mt: "auto" }}>
          <Avatar alt="User" src={__avatar} sx={{ width: 44, height: 44 }} />
        </Box>
      )}
    </Box>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, onMobileToggle }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {/* Mobile Hamburger Menu */}
      {!isMdUp && (
        <Toolbar
          sx={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            zIndex: theme.zIndex.drawer + 1,
            bgcolor: "#F9F8FF",
            borderBottom: "1px solid #e0e0e0",
            minHeight: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1,
          }}
        >
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMobileToggle}
            aria-label="Open sidebar"
            sx={{ ml: 0.5 }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar alt="User" src={__avatar} sx={{ width: 44, height: 44 }} />
        </Toolbar>
      )}

      {/* Permanent Drawer for desktop, Temporary Drawer for mobile */}
      <Box
        component="nav"
        aria-label="Sidebar Navigation"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
        }}
      >
        {/* Desktop */}
        {isMdUp ? (
          <Box
            sx={{
              width: drawerWidth + 40,
              height: "100vh",
              position: "fixed",
              left: 0,
              top: 0,
              zIndex: theme.zIndex.drawer,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SidebarContent />
          </Box>
        ) : (
          /* Mobile */
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={onMobileToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <SidebarContent />
          </Drawer>
        )}
      </Box>
    </>
  );
};

export default Sidebar;
