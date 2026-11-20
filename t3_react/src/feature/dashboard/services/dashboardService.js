
import { getUsers } from "../../auth/services/authService";

export function getDashboardStats() {
  const users = getUsers();

  return {
    total: users.length,
    active: users.filter((user) => user.status === "Activo").length,
    inactive: users.filter((user) => user.status === "Inactivo").length,
    admins: users.filter((user) => user.role === "admin").length,
    students: users.filter((user) => user.role === "user").length,
  };
}
