
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  TextField,
  Button,
  Stack,
  Alert,
} from "@mui/material";

import { useAuth } from "../hooks/useAuth";

function UpdatePasswordForm() {
  const { changePassword } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
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

    if (form.newPassword.length < 6) {
      setError("La nueva contraseña debe tener mínimo 6 caracteres.");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setError("Las nuevas contraseñas no coinciden.");
      return;
    }

    if (form.currentPassword === form.newPassword) {
      setError("La nueva contraseña debe ser diferente.");
      return;
    }

    try {
      changePassword(form.currentPassword, form.newPassword);

      setSuccess("Contraseña actualizada correctamente.");

      setTimeout(() => {
        navigate(-1);
      }, 1200);

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}

        <TextField
          label="Contraseña actual"
          name="currentPassword"
          type="password"
          value={form.currentPassword}
          onChange={handleChange}
          required
        />

        <TextField
          label="Nueva contraseña"
          name="newPassword"
          type="password"
          value={form.newPassword}
          onChange={handleChange}
          required
        />

        <TextField
          label="Confirmar nueva contraseña"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <Button type="submit" variant="contained" size="large">
          Actualizar contraseña
        </Button>

        <Button
          variant="text"
          onClick={() => navigate(-1)}
        >
          Cancelar
        </Button>
      </Stack>
    </Box>
  );
}

export default UpdatePasswordForm;
