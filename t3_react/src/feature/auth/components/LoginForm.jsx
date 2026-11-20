
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Stack,
  InputAdornment,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useAuth } from "../hooks/useAuth";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    try {
      const user = login(form.email.trim(), form.password);

      navigate(user.role === "admin" ? "/admin" : "/usuario");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2.2}>
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          label="Correo electrónico"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="email"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon color="action" fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
        />

        <TextField
          label="Contraseña"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          autoComplete="current-password"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon color="action" fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
        />

        <Box textAlign="right">
          <Typography
            component={Link}
            to="/actualizar-contrasena"
            variant="body2"
            color="primary"
            sx={{ textDecoration: "none" }}
          >
            ¿Olvidaste tu contraseña?
          </Typography>
        </Box>

        <Button type="submit" variant="contained" size="large">
          Iniciar sesión
        </Button>

        <Typography textAlign="center" variant="body2" color="text.secondary">
          ¿No tienes una cuenta?{" "}
          <Typography
            component={Link}
            to="/registro"
            color="primary"
            fontWeight={700}
            variant="body2"
            sx={{ textDecoration: "none" }}
          >
            Regístrate
          </Typography>
        </Typography>
      </Stack>
    </Box>
  );
}

export default LoginForm;
