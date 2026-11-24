
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useProfile } from "../context/ProfileContext";

const avatars = ["🦊", "🐼", "🐸", "🐯", "🐵", "🐱", "🐲", "🦄"];

export default function CreateProfilePage() {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState("🦊");
  const [error, setError] = useState("");

  const { createProfile } = useProfile();
  const navigate = useNavigate();

  const handleCreateProfile = () => {
    const cleanNickname = nickname.trim();

    if (cleanNickname.length < 3) {
      setError("Tu nickname debe tener al menos 3 caracteres.");
      return;
    }

    if (cleanNickname.length > 16) {
      setError("Tu nickname no puede superar los 16 caracteres.");
      return;
    }

    createProfile(cleanNickname, avatar);
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
              CREA TU JUGADOR
            </Typography>

            <Typography color="text.secondary" textAlign="center" mt={1}>
              Tu aventura necesita una identidad.
            </Typography>

            <Box className="avatar-preview">
              {avatar}
            </Box>

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

            <Typography fontWeight={700} mt={4} mb={1}>
              Tu nickname
            </Typography>

            <TextField
              fullWidth
              placeholder="Ejemplo: PlayerOne"
              value={nickname}
              onChange={(event) => {
                setNickname(event.target.value);
                setError("");
              }}
              inputProps={{ maxLength: 16 }}
              error={Boolean(error)}
              helperText={error || `${nickname.length}/16 caracteres`}
            />

            <Button
              fullWidth
              size="large"
              variant="contained"
              sx={{ mt: 3 }}
              onClick={handleCreateProfile}
            >
              Crear mi perfil 🚀
            </Button>

            <Button
              fullWidth
              color="inherit"
              sx={{ mt: 1 }}
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
