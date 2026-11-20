
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  LinearProgress,
} from "@mui/material";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import LockResetRoundedIcon from "@mui/icons-material/LockResetRounded";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";

import DashboardLayout from "../components/DashboardLayout";

function UserDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const cards = [
    {
      title: "Mis cursos",
      value: "04",
      description: "Cursos disponibles",
      icon: <MenuBookRoundedIcon />,
      color: "#7655D9",
    },
    {
      title: "Actividades",
      value: "12",
      description: "Actividades registradas",
      icon: <AssignmentTurnedInRoundedIcon />,
      color: "#2196F3",
    },
    {
      title: "Logros",
      value: "08",
      description: "Objetivos alcanzados",
      icon: <EmojiEventsRoundedIcon />,
      color: "#ED9C28",
    },
  ];

  return (
    <DashboardLayout title="Mi panel">

      <Box mb={4}>
        <Typography variant="h4" fontWeight={800} mb={1}>
          ¡Hola, {user.name.split(" ")[0]}! 👋
        </Typography>

        <Typography color="text.secondary">
          Bienvenido a tu espacio académico. Este es tu resumen de hoy.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} lg={4} key={card.title}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                border: "1px solid #EEEAF5",
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 3,
                  color: card.color,
                  backgroundColor: `${card.color}18`,
                  mb: 2,
                }}
              >
                {card.icon}
              </Box>

              <Typography color="text.secondary" variant="body2">
                {card.title}
              </Typography>

              <Typography variant="h4" fontWeight={800} my={1}>
                {card.value}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                {card.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} md={7}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              border: "1px solid #EEEAF5",
              height: "100%",
            }}
          >
            <Typography variant="h6" fontWeight={800} mb={1}>
              Mi progreso académico
            </Typography>

            <Typography color="text.secondary" variant="body2" mb={3}>
              Visualiza tu avance general.
            </Typography>

            <Typography fontWeight={700} mb={1}>
              Progreso general
            </Typography>

            <LinearProgress
              variant="determinate"
              value={75}
              sx={{
                height: 10,
                borderRadius: 5,
                mb: 1,
              }}
            />

            <Typography color="text.secondary" variant="caption">
              75% completado
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              border: "1px solid #EEEAF5",
              height: "100%",
            }}
          >
            <Typography variant="h6" fontWeight={800} mb={2}>
              Mi cuenta
            </Typography>

            <Typography color="text.secondary" variant="body2">
              Nombre
            </Typography>

            <Typography fontWeight={600} mb={2}>
              {user.name}
            </Typography>

            <Typography color="text.secondary" variant="body2">
              Correo electrónico
            </Typography>

            <Typography fontWeight={600} mb={3}>
              {user.email}
            </Typography>

            <Button
              variant="outlined"
              startIcon={<LockResetRoundedIcon />}
              onClick={() => navigate("/actualizar-contrasena")}
            >
              Cambiar contraseña
            </Button>
          </Paper>
        </Grid>
      </Grid>

    </DashboardLayout>
  );
}

export default UserDashboard;
