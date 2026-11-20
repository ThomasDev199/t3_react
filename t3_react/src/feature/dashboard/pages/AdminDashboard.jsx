
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
} from "@mui/material";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import BlockRoundedIcon from "@mui/icons-material/BlockRounded";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import DashboardLayout from "../components/DashboardLayout";
import { getDashboardStats } from "../services/dashboardService";

function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState(getDashboardStats());

  useEffect(() => {
    setStats(getDashboardStats());
  }, []);

  const cards = [
    {
      title: "Usuarios registrados",
      value: stats.total,
      icon: <PeopleAltRoundedIcon />,
      color: "#7655D9",
    },
    {
      title: "Estudiantes",
      value: stats.students,
      icon: <PersonRoundedIcon />,
      color: "#2196F3",
    },
    {
      title: "Usuarios activos",
      value: stats.active,
      icon: <CheckCircleRoundedIcon />,
      color: "#2EAD76",
    },
    {
      title: "Usuarios inactivos",
      value: stats.inactive,
      icon: <BlockRoundedIcon />,
      color: "#E56A6A",
    },
  ];

  return (
    <DashboardLayout title="Panel administrativo">

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        mb={4}
      >
        <Box>
          <Typography variant="h4" fontWeight={800}>
            Panel de administración
          </Typography>

          <Typography color="text.secondary">
            Gestiona y supervisa tu plataforma StudyFlow.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<PeopleAltRoundedIcon />}
          onClick={() => navigate("/admin/usuarios")}
        >
          Gestionar usuarios
        </Button>
      </Box>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} lg={3} key={card.title}>
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
                  borderRadius: 3,
                  backgroundColor: `${card.color}18`,
                  color: card.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                {card.icon}
              </Box>

              <Typography color="text.secondary" variant="body2">
                {card.title}
              </Typography>

              <Typography variant="h4" fontWeight={800} mt={1}>
                {card.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper
        elevation={0}
        sx={{
          p: 4,
          mt: 4,
          borderRadius: 3,
          border: "1px solid #EEEAF5",
        }}
      >
        <Typography variant="h6" fontWeight={800} mb={1}>
          Resumen de la plataforma
        </Typography>

        <Typography color="text.secondary" mb={3}>
          Consulta el estado general de los usuarios registrados.
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Typography variant="body2">
            Administradores: <strong>{stats.admins}</strong>
          </Typography>

          <Typography variant="body2">
            Estudiantes: <strong>{stats.students}</strong>
          </Typography>
        </Stack>

        <Button
          variant="outlined"
          sx={{ mt: 3 }}
          onClick={() => navigate("/admin/usuarios")}
        >
          Ver listado completo
        </Button>
      </Paper>

    </DashboardLayout>
  );
}

export default AdminDashboard;
