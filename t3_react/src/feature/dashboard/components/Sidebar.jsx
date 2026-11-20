
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";

import { useAuth } from "../../auth/hooks/useAuth";

function Sidebar() {
  const { user } = useAuth();

  const isAdmin = user.role === "admin";

  const menuItems = isAdmin
    ? [
        {
          title: "Dashboard",
          path: "/admin",
          icon: <DashboardIcon />,
        },
        {
          title: "Usuarios",
          path: "/admin/usuarios",
          icon: <PeopleIcon />,
        },
      ]
    : [
        {
          title: "Mi panel",
          path: "/usuario",
          icon: <DashboardIcon />,
        },
        {
          title: "Mi perfil",
          path: "/actualizar-contrasena",
          icon: <PersonIcon />,
        },
      ];

  return (
    <Box
      sx={{
        width: 250,
        minHeight: "100vh",
        backgroundColor: "#30245C",
        color: "#FFFFFF",
        p: 3,
        flexShrink: 0,
      }}
    >
      <Box display="flex" alignItems="center" gap={1} mb={5}>
        <SchoolIcon fontSize="large" />

        <Typography variant="h5" fontWeight={800}>
          StudyFlow
        </Typography>
      </Box>

      <Typography
        variant="caption"
        sx={{ color: "#BEB0E9", px: 2 }}
      >
        MENÚ PRINCIPAL
      </Typography>

      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={NavLink}
            to={item.path}
            sx={{
              borderRadius: 2,
              mb: 1,
              color: "#DED6FA",

              "&.active": {
                backgroundColor: "#7655D9",
                color: "#FFFFFF",
              },

              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.12)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>

      <Box mt="auto" pt={5}>
        <Typography variant="caption" color="#BEB0E9">
          Sesión iniciada como
        </Typography>

        <Typography fontWeight={700}>
          {user.name}
        </Typography>

        <Typography variant="caption" color="#BEB0E9">
          {isAdmin ? "Administrador" : "Estudiante"}
        </Typography>
      </Box>
    </Box>
  );
}

export default Sidebar;
