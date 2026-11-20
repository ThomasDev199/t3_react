
const USERS_KEY = "studyflow_users";

const ADMIN_USER = {
  id: 1,
  name: "Administrador",
  email: "admin@studyflow.com",
  password: "Admin123",
  role: "admin",
  status: "Activo",
};

export function getUsers() {
  const users = JSON.parse(localStorage.getItem(USERS_KEY));

  if (!users) {
    localStorage.setItem(USERS_KEY, JSON.stringify([ADMIN_USER]));
    return [ADMIN_USER];
  }

  return users;
}

export function registerUser(userData) {
  const users = getUsers();

  const exists = users.some(
    (user) => user.email.toLowerCase() === userData.email.toLowerCase()
  );

  if (exists) {
    throw new Error("Este correo electrónico ya está registrado.");
  }

  const newUser = {
    id: Date.now(),
    ...userData,
    role: "user",
    status: "Activo",
  };

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify([...users, newUser])
  );

  return newUser;
}

export function loginUser(email, password) {
  const users = getUsers();

  const user = users.find(
    (item) =>
      item.email.toLowerCase() === email.toLowerCase() &&
      item.password === password
  );

  if (!user) {
    throw new Error("Correo electrónico o contraseña incorrectos.");
  }

  if (user.status !== "Activo") {
    throw new Error("Tu cuenta se encuentra desactivada.");
  }

  return user;
}

export function updateUserPassword(userId, currentPassword, newPassword) {
  const users = getUsers();

  const user = users.find((item) => item.id === userId);

  if (!user || user.password !== currentPassword) {
    throw new Error("La contraseña actual es incorrecta.");
  }

  const updatedUsers = users.map((item) =>
    item.id === userId
      ? { ...item, password: newPassword }
      : item
  );

  localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));

  return true;
}

export function updateUser(userId, data) {
  const users = getUsers();

  const updatedUsers = users.map((user) =>
    user.id === userId ? { ...user, ...data } : user
  );

  localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));

  return updatedUsers;
}

export function deleteUser(userId) {
  const users = getUsers();

  const updatedUsers = users.filter((user) => user.id !== userId);

  localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));

  return updatedUsers;
}

export function toggleUserStatus(userId) {
  const users = getUsers();

  const updatedUsers = users.map((user) =>
    user.id === userId
      ? {
          ...user,
          status: user.status === "Activo" ? "Inactivo" : "Activo",
        }
      : user
  );

  localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));

  return updatedUsers;
}
