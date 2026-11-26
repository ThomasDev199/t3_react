
import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

import { useProfile } from "../context/ProfileContext";

export default function HomePage() {
const { user, logout, deleteAccount } = useAuth();

  const games = [
    {
      name: "MEMORIA",
      description: "Encuentra todas las parejas.",
      icon: "🧩",
      color: "purple",
      status: "Próximamente",
    },
    {
      name: "ADIVINA LA PALABRA",
      description: "Descubre la palabra secreta.",
      icon: "🔤",
      color: "pink",
      status: "Próximamente",
    },
    {
      name: "DIBUJA Y ADIVINA",
      description: "Demuestra tu creatividad.",
      icon: "🎨",
      color: "blue",
      status: "Próximamente",
    },
  ];

  const handleDeleteProfile = () => {
    if (window.confirm("¿Seguro que quieres eliminar tu perfil?")) {
      deleteProfile();
      navigate("/");
    }
  };

  return (
    <Box className="home-page">
      <Container maxWidth="lg">
        <Box className="dashboard-navbar">
          <Typography variant="h5" fontWeight={900}>
            FUN<span className="gradient-text">VERSE</span>
          </Typography>

          <Box display="flex" alignItems="center" gap={2}>
            <Typography>{profile.avatar} {profile.nickname}</Typography>
            <Button color="inherit" onClick={handleDeleteProfile}>
              Eliminar perfil
            </Button>
          </Box>
        </Box>

        <Box className="welcome-section">
          <Typography variant="h3" fontWeight={900}>
            ¡HOLA, {profile.nickname.toUpperCase()}!
          </Typography>

          <Typography color="text.secondary" mt={1}>
            Tu siguiente aventura está esperando.
          </Typography>
        </Box>

        <Box className="stats-grid">
          <div className="stat-card">
            <span>🪙</span>
            <Typography variant="h5" fontWeight={900}>
              {profile.coins}
            </Typography>
            <Typography color="text.secondary">Monedas</Typography>
          </div>

          <div className="stat-card">
            <span>⭐</span>
            <Typography variant="h5" fontWeight={900}>
              {profile.level}
            </Typography>
            <Typography color="text.secondary">Nivel</Typography>
          </div>

          <div className="stat-card">
            <span>⚡</span>
            <Typography variant="h5" fontWeight={900}>
              {profile.experience}
            </Typography>
            <Typography color="text.secondary">Experiencia</Typography>
          </div>
        </Box>

        <Typography variant="h4" fontWeight={900} mt={6} mb={3}>
          EXPLORA LOS MINIJUEGOS
        </Typography>

        <Box className="game-grid">
          {games.map((game, index) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`game-card ${game.color}`}
            >
              <span className="game-icon">{game.icon}</span>
              <Typography variant="h6" fontWeight={900}>
                {game.name}
              </Typography>
              <Typography color="text.secondary">
                {game.description}
              </Typography>
              <Button variant="outlined" color="inherit" disabled>
                {game.status}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
