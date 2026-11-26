
import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box className="landing">
      <Container maxWidth="lg">
        <Box className="landing-navbar">
          <Typography variant="h5" fontWeight={900}>
            FUN<span className="gradient-text">VERSE</span>
          </Typography>

          <Button
            variant="outlined"
            color="inherit"
            onClick={() => navigate("/crear-perfil")}
          >
            Crear perfil
          </Button>
        </Box>

        <Box className="landing-content">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography className="landing-tag">
              ✨ TU PRÓXIMA AVENTURA COMIENZA AQUÍ
            </Typography>

            <Typography className="landing-title">
              UN UNIVERSO
              <br />
              <span className="gradient-text">PARA JUGAR</span>
              <br />
              SIN LÍMITES.
            </Typography>

            <Typography className="landing-description">
              Explora mundos, supera desafíos, consigue recompensas
              y demuestra todo lo que eres capaz de hacer.
            </Typography>

           
<Box display="flex" gap={2} flexWrap="wrap" mt={4}>
  <Button
    variant="contained"
    size="large"
    onClick={() => navigate("/registro")}
  >
    Crear cuenta 🚀
  </Button>

  <Button
    variant="outlined"
    size="large"
    color="inherit"
    onClick={() => navigate("/login")}
  >
    Iniciar sesión
  </Button>
</Box>

          </motion.div>

          <motion.div
            className="landing-visual"
            animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="orbit orbit-one">🎮</div>
            <div className="orbit orbit-two">🧩</div>
            <div className="orbit orbit-three">🏆</div>
            <div className="main-planet">🌎</div>
          </motion.div>
        </Box>

        <Box id="mundos" className="worlds-section">
          <Typography variant="h4" fontWeight={900} textAlign="center">
            UN UNIVERSO, MUCHAS AVENTURAS
          </Typography>

          <Typography textAlign="center" color="text.secondary" mt={1}>
            Cada mundo tiene algo diferente para ti.
          </Typography>

          <Box className="world-grid">
            <div className="world-card purple">
              <span>🕹️</span>
              <h3>ARCADE WORLD</h3>
              <p>Juegos rápidos y desafíos de habilidad.</p>
            </div>

            <div className="world-card pink">
              <span>🧭</span>
              <h3>ADVENTURE WORLD</h3>
              <p>Explora, encuentra tesoros y supera obstáculos.</p>
            </div>

            <div className="world-card blue">
              <span>🧠</span>
              <h3>BRAIN WORLD</h3>
              <p>Entrena tu mente con retos y acertijos.</p>
            </div>

            <div className="world-card orange">
              <span>🎉</span>
              <h3>PARTY WORLD</h3>
              <p>Diviértete con juegos de palabras y creatividad.</p>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
