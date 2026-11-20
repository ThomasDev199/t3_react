
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  Box,
  TextField,
  Button,
  Stack,
  Alert,
  Typography,
} from "@mui/material";

import { useAuth } from "../hooks/useAuth";

function RegisterForm() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (form.password.length < 6) {
      setError("La contraseña debe tener mínimo 6 caracteres.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      register({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      });

      setSuccess("¡Cuenta creada correctamente!");

      setTimeout(() => {
        navigate("/login");
      }, 1200);

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={1.8}>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}

        <TextField
          label="Nombre completo"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          autoComplete="name"
        />

        <TextField
          label="Correo electrónico"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />

        <TextField
          label="Contraseña"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          autoComplete="new-password"
        />

        <TextField
          label="Confirmar contraseña"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          autoComplete="new-password"
        />

        <Button type="submit" variant="contained" size="large">
          Crear mi cuenta
        </Button>

        <Typography textAlign="center" variant="body2" color="text.secondary">
          ¿Ya tienes cuenta?{" "}
          <Typography
            component={Link}
            to="/login"
            color="primary"
            variant="body2"
            fontWeight={700}
            sx={{ textDecoration: "none" }}
          >
            Inicia sesión
          </Typography>
        </Typography>
      </Stack>
    </Box>
  );
}

export default RegisterForm;
