
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const result = login(nickname, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/inicio");
  };

  return (
    <Box className="profile-page">
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Box className="profile-card">
            <Typography
              variant="h3"
              textAlign="center"
              fontWeight={900}
              mb={1}
            >
              FUN<span className="gradient-text">VERSE</span>
            </Typography>

            <Typography
              variant="h5"
              fontWeight={800}
              textAlign="center"
              mt={3}
            >
              ¡Qué bueno verte de nuevo!
            </Typography>

            <Typography
              color="text.secondary"
              textAlign="center"
              mb={4}
            >
              Ingresa a tu cuenta para continuar.
            </Typography>

            <Box component="form" onSubmit={handleLogin}>
              <Typography fontWeight={600} mb={1}>
                Nickname
              </Typography>

              <TextField
                fullWidth
                placeholder="Tu nickname"
                value={nickname}
                onChange={(e) => {
                  setNickname(e.target.value);
                  setError("");
                }}
                required
                sx={{ mb: 3 }}
              />

              <Typography fontWeight={600} mb={1}>
                Contraseña
              </Typography>

              <TextField
                fullWidth
                type="password"
                placeholder="Tu contraseña"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                required
              />

              {error && (
                <Typography color="error" mt={2}>
                  {error}
                </Typography>
              )}

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{ mt: 4 }}
              >
                Iniciar sesión
              </Button>
            </Box>

            <Typography textAlign="center" mt={3}>
              ¿Todavía no tienes cuenta?{" "}
              <Link to="/registro" className="auth-link">
                Crear cuenta
              </Link>
            </Typography>

            <Button
              color="inherit"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => navigate("/")}
            >
              Volver al inicio
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
