
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
  Paper,
  Chip,
} from "@mui/material";

import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <AssignmentTurnedInRoundedIcon />,
      title: "Organiza tus actividades",
      description:
        "Mantén tus tareas y actividades académicas organizadas en un solo lugar.",
    },
    {
      icon: <TrendingUpRoundedIcon />,
      title: "Mide tu progreso",
      description:
        "Consulta tus avances y descubre cuánto has progresado en tu aprendizaje.",
    },
    {
      icon: <GroupsRoundedIcon />,
      title: "Gestiona tu comunidad",
      description:
        "Los administradores pueden gestionar usuarios y supervisar la plataforma.",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F8F7FC" }}>
      {/* NAVBAR */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "white",
          color: "#252238",
          borderBottom: "1px solid #ECEAF2",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: 2,
                  bgcolor: "#7655D9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <SchoolRoundedIcon />
              </Box>

              <Typography variant="h5" fontWeight={800}>
                StudyFlow
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Button
                color="inherit"
                onClick={() => navigate("/login")}
              >
                Iniciar sesión
              </Button>

              <Button
                variant="contained"
                onClick={() => navigate("/registro")}
                sx={{
                  bgcolor: "#7655D9",
                  borderRadius: 2,
                  px: 2.5,
                  "&:hover": { bgcolor: "#5D3DB8" },
                }}
              >
                Registrarse
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* HERO */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          alignItems="center"
          sx={{ py: { xs: 7, md: 11 } }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Chip
              icon={<AutoAwesomeRoundedIcon />}
              label="Tu aprendizaje, a otro nivel"
              sx={{
                bgcolor: "#EEE9FF",
                color: "#7655D9",
                fontWeight: 700,
                mb: 3,
              }}
            />

            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                color: "#252238",
                fontSize: { xs: 39, md: 57 },
                lineHeight: 1.15,
                mb: 3,
              }}
            >
              Aprende mejor.
              <Box component="span" sx={{ color: "#7655D9" }}>
                {" "}Avanza más.
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#777184",
                fontWeight: 400,
                lineHeight: 1.8,
                mb: 4,
                maxWidth: 510,
              }}
            >
              StudyFlow es tu espacio para organizar actividades,
              realizar seguimiento a tu progreso académico y alcanzar
              tus objetivos de aprendizaje.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
                onClick={() => navigate("/registro")}
                sx={{
                  bgcolor: "#7655D9",
                  px: 3,
                  py: 1.7,
                  borderRadius: 2,
                  "&:hover": { bgcolor: "#5D3DB8" },
                }}
              >
                Comenzar ahora
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate("/login")}
                sx={{
                  color: "#7655D9",
                  borderColor: "#7655D9",
                  px: 3,
                  py: 1.7,
                  borderRadius: 2,
                }}
              >
                Ya tengo una cuenta
              </Button>
            </Stack>
          </Grid>

          {/* PANEL ILUSTRATIVO */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 4 },
                borderRadius: 5,
                bgcolor: "#7655D9",
                color: "white",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: 230,
                  height: 230,
                  borderRadius: "50%",
                  bgcolor: "rgba(255,255,255,0.08)",
                  top: -90,
                  right: -70,
                }}
              />

              <Typography variant="overline" sx={{ opacity: 0.8 }}>
                TU ESPACIO ACADÉMICO
              </Typography>

              <Typography variant="h4" fontWeight={800} sx={{ mb: 3 }}>
                ¡Bienvenido a tu próximo logro!
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  color: "#252238",
                  mb: 2,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography color="text.secondary" variant="body2">
                      Tu progreso académico
                    </Typography>
                    <Typography variant="h3" fontWeight={800}>
                      75%
                    </Typography>
                  </Box>

                  <TrendingUpRoundedIcon
                    sx={{ fontSize: 48, color: "#7655D9" }}
                  />
                </Stack>

                <Box
                  sx={{
                    height: 10,
                    bgcolor: "#EEEAF5",
                    borderRadius: 5,
                    mt: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "75%",
                      height: "100%",
                      bgcolor: "#7655D9",
                      borderRadius: 5,
                    }}
                  />
                </Box>
              </Paper>

              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <Paper sx={{ p: 2, borderRadius: 3 }}>
                    <AssignmentTurnedInRoundedIcon
                      sx={{ color: "#7655D9", fontSize: 30 }}
                    />
                    <Typography variant="h5" fontWeight={800}>
                      12
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Actividades
                    </Typography>
                  </Paper>
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Paper sx={{ p: 2, borderRadius: 3 }}>
                    <AutoAwesomeRoundedIcon
                      sx={{ color: "#7655D9", fontSize: 30 }}
                    />
                    <Typography variant="h5" fontWeight={800}>
                      8
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Logros
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* CARACTERÍSTICAS */}
      <Box sx={{ bgcolor: "white", py: 9 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: "#7655D9", fontWeight: 800 }}
            >
              DESCUBRE STUDYFLOW
            </Typography>

            <Typography
              variant="h3"
              fontWeight={800}
              sx={{ color: "#252238", mb: 2 }}
            >
              Todo lo que necesitas para avanzar
            </Typography>

            <Typography color="text.secondary">
              Herramientas para organizar, aprender y crecer.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 3.5,
                    border: "1px solid #ECEAF2",
                    borderRadius: 4,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 30px rgba(70,50,120,0.10)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 55,
                      height: 55,
                      borderRadius: 3,
                      bgcolor: "#EEE9FF",
                      color: "#7655D9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
                    {feature.title}
                  </Typography>

                  <Typography color="text.secondary" lineHeight={1.8}>
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box sx={{ bgcolor: "#252238", color: "white", py: 4 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography fontWeight={800} variant="h6">
              StudyFlow
            </Typography>

            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              © 2026 StudyFlow. Tu aprendizaje, nuestro propósito.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default LandingPage;
