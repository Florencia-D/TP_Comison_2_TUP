// src/services/authService.js
import api from "./api";

export const registerRequest = async (user) => {
  const { data } = await api.post("/auth/register", user);
  return data;
};

export const loginRequest = async (credentials) => {
  const { data } = await api.post("/auth/login", credentials);
  return data;
};
