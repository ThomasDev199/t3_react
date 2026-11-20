
import { useState } from "react";

import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Alert,
} from "@mui/material";

import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BlockRoundedIcon from "@mui/icons-material/BlockRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

import DashboardLayout from "../components/DashboardLayout";

import { useAuth } from "../../auth/hooks/useAuth";

import {
  getUsers,
  deleteUser,
  toggleUserStatus,
} from "../../auth/services/authService";

function UsersPage() {
  const { user } = useAuth();

  const [users, setUsers] = useState(getUsers());
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const handleDelete = () => {
    if (!selectedUser) return;

    const updated = deleteUser(selectedUser.id);

    setUsers(updated);
    setSelectedUser(null);
    setOpen(false);
    setMessage("Usuario eliminado correctamente.");
  };

  const handleToggle = (id) => {
    const updated = toggleUserStatus(id);

    setUsers(updated);
    setMessage("Estado del usuario actualizado.");
  };

  return (
    <DashboardLayout title="Gestión de usuarios">

      <Box mb={3}>
        <Typography variant="h4" fontWeight={800} mb={1}>
          Gestión de usuarios
        </Typography>

        <Typography color="text.secondary">
          Administra las cuentas registradas en StudyFlow.
        </Typography>
      </Box>

      {message && (
        <Alert
          severity="success"
          sx={{ mb: 3 }}
          onClose={() => setMessage("")}
        >
          {message}
        </Alert>
      )}

      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          border: "1px solid #EEEAF5",
          overflow: "hidden",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#F7F6FB" }}>
              <TableRow>
                <TableCell><strong>Nombre</strong></TableCell>
                <TableCell><strong>Correo</strong></TableCell>
                <TableCell><strong>Rol</strong></TableCell>
                <TableCell><strong>Estado</strong></TableCell>
                <TableCell align="center"><strong>Acciones</strong></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>{item.name}</TableCell>

                  <TableCell>{item.email}</TableCell>

                  <TableCell>
                    <Chip
                      label={item.role === "admin" ? "Administrador" : "Estudiante"}
                      color={item.role === "admin" ? "secondary" : "primary"}
                      size="small"
                    />
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={item.status}
                      color={item.status === "Activo" ? "success" : "error"}
                      size="small"
                    />
                  </TableCell>

                  <TableCell align="center">
                    {item.id !== user.id && item.role !== "admin" && (
                      <>
                        <Tooltip
                          title={
                            item.status === "Activo"
                              ? "Desactivar usuario"
                              : "Activar usuario"
                          }
                        >
                          <IconButton
                            color="warning"
                            onClick={() => handleToggle(item.id)}
                          >
                            {item.status === "Activo" ? (
                              <BlockRoundedIcon />
                            ) : (
                              <CheckCircleOutlineRoundedIcon />
                            )}
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="Eliminar usuario">
                          <IconButton
                            color="error"
                            onClick={() => {
                              setSelectedUser(item);
                              setOpen(true);
                            }}
                          >
                            <DeleteOutlineRoundedIcon />
                          </IconButton>
                        </Tooltip>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}

              {users.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No hay usuarios registrados.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Eliminar usuario</DialogTitle>

        <DialogContent>
          ¿Estás seguro de que deseas eliminar a{" "}
          <strong>{selectedUser?.name}</strong>?
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            Cancelar
          </Button>

          <Button color="error" variant="contained" onClick={handleDelete}>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>

    </DashboardLayout>
  );
}

export default UsersPage;
