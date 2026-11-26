
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

const avatars = ["🦊", "🐼", "🐸", "🐯", "🐵", "🐱", "🐲", "🦄"];

export default function RegisterPage() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState("🦊");
  const [error, setError] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    if (nickname.trim().length < 3) {
      setError("El nickname debe tener mínimo 3 caracteres.");
      return;
    }

    if (nickname.trim().length > 16) {
      setError("El nickname no puede superar 16 caracteres.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener mínimo 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const result = register(nickname, password, avatar);

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
            <Typography variant="h4" fontWeight={900} textAlign="center">
              CREA TU CUENTA
            </Typography>

            <Typography color="text.secondary" textAlign="center" mt={1}>
              Elige tu identidad y comienza la aventura.
            </Typography>

            <Box className="avatar-preview">{avatar}</Box>

            <Typography fontWeight={700} mb={2}>
              Selecciona tu avatar
            </Typography>

            <Box className="avatar-grid">
              {avatars.map((item) => (
                <Button
                  key={item}
                  className={`avatar-option ${avatar === item ? "selected" : ""}`}
                  onClick={() => setAvatar(item)}
                  aria-label={`Seleccionar avatar ${item}`}
                  aria-pressed={avatar === item}
                >
                  {item}
                </Button>
              ))}
            </Box>

            <Box component="form" onSubmit={handleRegister}>
              <Typography fontWeight={600} mt={3} mb={1}>
                Nickname
              </Typography>

              <TextField
                fullWidth
                placeholder="Tu nombre de jugador"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                inputProps={{ maxLength: 16 }}
                required
              />

              <Typography fontWeight={600} mt={3} mb={1}>
                Contraseña
              </Typography>

              <TextField
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                required
              />

              <Typography fontWeight={600} mt={3} mb={1}>
                Confirmar contraseña
              </Typography>

              <TextField
                fullWidth
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repite tu contraseña"
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
                sx={{ mt: 3 }}
              >
                Crear cuenta 🚀
              </Button>
            </Box>

            <Typography textAlign="center" mt={3}>
              ¿Ya tienes cuenta?{" "}
              <Link to="/login" className="auth-link">
                Inicia sesión
              </Link>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
