
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ProfileProvider, useProfile } from "./context/ProfileContext";

import LandingPage from "./pages/LandingPage";
import CreateProfilePage from "./pages/CreateProfilePage";
import HomePage from "./pages/HomePage";

function AppRoutes() {
  const { profile } = useProfile();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route
        path="/crear-perfil"
        element={
          profile ? <Navigate to="/inicio" replace /> : <CreateProfilePage />
        }
      />

      <Route
        path="/inicio"
        element={
          profile ? <HomePage /> : <Navigate to="/crear-perfil" replace />
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ProfileProvider>
  );
}
