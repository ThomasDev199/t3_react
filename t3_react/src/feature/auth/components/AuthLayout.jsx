
import {
  Box,
  Typography,
  Stack,
  Container,
} from "@mui/material";

import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

function AuthLayout({ children, title, subtitle }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* PANEL IZQUIERDO */}
      <Box
        sx={{
          width: "58%",
          minHeight: "100vh",
          background: "linear-gradient(145deg, #30245C, #7655D9)",
          color: "#FFFFFF",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          justifyContent: "space-between",
          p: { md: 6, lg: 9 },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <SchoolRoundedIcon sx={{ fontSize: 36 }} />

          <Typography variant="h5" fontWeight={800}>
            StudyFlow
          </Typography>
        </Stack>

        <Box maxWidth={560}>
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              fontSize: { md: 38, lg: 54 },
              lineHeight: 1.15,
              mb: 3,
            }}
          >
            Organiza tu futuro académico.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#DED6FA",
              fontWeight: 400,
              mb: 5,
            }}
          >
            Aprende, organiza y alcanza tus objetivos
            con una plataforma diseñada para ti.
          </Typography>

          <Stack spacing={3}>
            {[
              {
                icon: <AutoAwesomeRoundedIcon />,
                text: "Organiza todas tus actividades.",
              },
              {
                icon: <TaskAltRoundedIcon />,
                text: "Controla tu progreso académico.",
              },
              {
                icon: <SchoolRoundedIcon />,
                text: "Mejora tu experiencia de aprendizaje.",
              },
            ].map((item, index) => (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    p: 1.5,
                    borderRadius: 3,
                    display: "flex",
                  }}
                >
                  {item.icon}
                </Box>

                <Typography>{item.text}</Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        <Typography variant="body2" color="#D6CCF5">
          © 2026 StudyFlow. Tu aprendizaje, en un solo lugar.
        </Typography>
      </Box>

      {/* PANEL DERECHO */}
      <Box
        sx={{
          width: { xs: "100%", md: "42%" },
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 3, sm: 5, md: 4 },
          py: 5,
          backgroundColor: "#FFFFFF",
        }}
      >
        <Container maxWidth="xs" disableGutters>
          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                gap: 1,
                mb: 4,
                color: "primary.main",
              }}
            >
              <SchoolRoundedIcon fontSize="large" />
              <Typography variant="h5" fontWeight={800}>
                StudyFlow
              </Typography>
            </Box>

            <Typography variant="h4" fontWeight={800} mb={1}>
              {title}
            </Typography>

            <Typography color="text.secondary" variant="body2">
              {subtitle}
            </Typography>
          </Box>

          {children}
        </Container>
      </Box>
    </Box>
  );
}

export default AuthLayout;
