
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Button,
} from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../auth/hooks/useAuth";

function Header({ title }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#FFFFFF",
        color: "#252238",
        borderBottom: "1px solid #EEEAF5",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={800}>
          {title}
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <Avatar
            sx={{
              bgcolor: "primary.main",
              width: 38,
              height: 38,
            }}
          >
            {user.name.charAt(0).toUpperCase()}
          </Avatar>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography fontWeight={700} variant="body2">
              {user.name}
            </Typography>

            <Typography color="text.secondary" variant="caption">
              {user.email}
            </Typography>
          </Box>

          <Button
            color="error"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Salir
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
