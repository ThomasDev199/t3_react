
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ProfileContext = createContext();

const STORAGE_KEY = "funverse_profile";

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    try {
      const savedProfile = localStorage.getItem(STORAGE_KEY);
      return savedProfile ? JSON.parse(savedProfile) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (profile) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [profile]);

  const createProfile = (nickname, avatar) => {
    const newProfile = {
      id: crypto.randomUUID(),
      nickname,
      avatar,
      coins: 100,
      experience: 0,
      level: 1,
      gamesPlayed: 0,
      createdAt: new Date().toISOString(),
    };

    setProfile(newProfile);
  };

  const updateProfile = (updates) => {
    setProfile((current) =>
      current ? { ...current, ...updates } : current
    );
  };

  const deleteProfile = () => {
    setProfile(null);
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        createProfile,
        updateProfile,
        deleteProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error(
      "useProfile debe utilizarse dentro de ProfileProvider"
    );
  }

  return context;
}
