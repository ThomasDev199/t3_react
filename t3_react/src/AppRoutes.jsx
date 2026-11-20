
import { Navigate, Route, Routes } from "react-router-dom";

import { useAuth } from "./feature/auth/hooks/useAuth";

// Páginas de autenticación
import LoginPage from "./feature/auth/pages/LoginPage";
import RegisterPage from "./feature/auth/pages/RegisterPage";
import UpdatePasswordPage from "./feature/auth/pages/UpdatePasswordPage";
import LandingPage from "./feature/auth/pages/LandingPage";

// Páginas del dashboard
import UserDashboard from "./feature/dashboard/pages/UserDashboard";
import AdminDashboard from "./feature/dashboard/pages/AdminDashboard";
import UsersPage from "./feature/dashboard/pages/UsersPage";

// Componente para proteger las rutas
function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  // Si no hay sesión, enviar al login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si el usuario no tiene el rol requerido
  if (role && user.role !== role) {
    return (
      <Navigate
        to={user.role === "admin" ? "/admin" : "/usuario"}
        replace
      />
    );
  }

  return children;
}

// Componente principal de rutas
function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Ruta principal */}
      <Route path="/" element={<LandingPage />} />

      {/* Autenticación */}
      <Route path="/login" element={<LoginPage />} />

      <Route path="/registro" element={<RegisterPage />} />

      {/* Actualizar contraseña */}
      <Route
        path="/actualizar-contrasena"
        element={
          <ProtectedRoute>
            <UpdatePasswordPage />
          </ProtectedRoute>
        }
      />

      {/* Panel del estudiante */}
      <Route
        path="/usuario"
        element={
          <ProtectedRoute role="user">
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      {/* Panel del administrador */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Gestión de usuarios */}
      <Route
        path="/admin/usuarios"
        element={
          <ProtectedRoute role="admin">
            <UsersPage />
          </ProtectedRoute>
        }
      />

      {/* Página no encontrada */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
