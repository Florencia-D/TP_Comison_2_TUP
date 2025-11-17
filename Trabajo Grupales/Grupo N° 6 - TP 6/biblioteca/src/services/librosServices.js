import api from "./api";

export const getLibros = async () => {
  const { data } = await api.get("/libros"); // Cambiá la URL a tu endpoint real
  return data;
};
