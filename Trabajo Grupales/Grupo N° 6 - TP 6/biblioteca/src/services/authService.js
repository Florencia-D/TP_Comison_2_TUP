import api from "./api";

export const login = async (usuario, contrasena) => {
  const res = await api.post("/auth/login", { usuario, contraseña: contrasena });
  return res.data;
};

export const register = async (usuario, contrasena, email) => {
  const res = await api.post("/auth/register", { usuario, contraseña: contrasena, email });
  return res.data;
};


