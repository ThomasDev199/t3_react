
import { createContext, useEffect, useState } from "react";

import {
  getUsers,
  loginUser,
  registerUser,
  updateUserPassword,
} from "../../feature/auth/services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const session = localStorage.getItem("studyflow_session");
    return session ? JSON.parse(session) : null;
  });

  useEffect(() => {
    getUsers();
  }, []);

  const login = (email, password) => {
    const loggedUser = loginUser(email, password);

    setUser(loggedUser);
    localStorage.setItem(
      "studyflow_session",
      JSON.stringify(loggedUser)
    );

    return loggedUser;
  };

  const register = (data) => {
    return registerUser(data);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("studyflow_session");
  };

  const changePassword = (currentPassword, newPassword) => {
    updateUserPassword(user.id, currentPassword, newPassword);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
