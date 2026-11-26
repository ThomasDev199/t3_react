
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

const USERS_KEY = "funverse_users";
const SESSION_KEY = "funverse_session";

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    } catch {
      return [];
    }
  });

  const [user, setUser] = useState(() => {
    try {
      const session = JSON.parse(
        localStorage.getItem(SESSION_KEY)
      );

      if (!session) return null;

      const savedUsers = JSON.parse(
        localStorage.getItem(USERS_KEY)
      ) || [];

      return savedUsers.find(
        (item) => item.id === session.id
      ) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }, [users]);

  const register = (nickname, password, avatar) => {
    const cleanNickname = nickname.trim();

    const exists = users.some(
      (item) =>
        item.nickname.toLowerCase() ===
        cleanNickname.toLowerCase()
    );

    if (exists) {
      return {
        success: false,
        message: "Este nickname ya está registrado.",
      };
    }

    const newUser = {
      id: crypto.randomUUID(),
      nickname: cleanNickname,
      password,
      avatar,
      coins: 100,
      experience: 0,
      level: 1,
      gamesPlayed: 0,
      createdAt: new Date().toISOString(),
    };

    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);
    setUser(newUser);

    localStorage.setItem(
      USERS_KEY,
      JSON.stringify(updatedUsers)
    );

    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ id: newUser.id })
    );

    return { success: true };
  };

  const login = (nickname, password) => {
    const foundUser = users.find(
      (item) =>
        item.nickname.toLowerCase() ===
          nickname.trim().toLowerCase() &&
        item.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Nickname o contraseña incorrectos.",
      };
    }

    setUser(foundUser);

    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ id: foundUser.id })
    );

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
  };

  const updateUser = (updates) => {
    if (!user) return;

    const updatedUser = { ...user, ...updates };

    const updatedUsers = users.map((item) =>
      item.id === user.id ? updatedUser : item
    );

    setUsers(updatedUsers);
    setUser(updatedUser);
  };

  const deleteAccount = () => {
    if (!user) return;

    const updatedUsers = users.filter(
      (item) => item.id !== user.id
    );

    setUsers(updatedUsers);
    setUser(null);

    localStorage.setItem(
      USERS_KEY,
      JSON.stringify(updatedUsers)
    );

    localStorage.removeItem(SESSION_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        register,
        login,
        logout,
        updateUser,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth debe utilizarse dentro de AuthProvider"
    );
  }

  return context;
}
