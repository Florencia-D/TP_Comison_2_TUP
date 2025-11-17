import api from "./api";

// Obtener todos los préstamos
export const getPrestamos = async () => {
  const response = await api.get("/prestamos");
  return response.data;
};

// Crear préstamo
export const createPrestamo = async (prestamo) => {
  const response = await api.post("/prestamos", prestamo);
  return response.data;
};

// Actualizar préstamo
export const updatePrestamo = async (id, prestamo) => {
  const response = await api.put(`/prestamos/${id}`, prestamo);
  return response.data;
};

// Eliminar préstamo
export const deletePrestamo = async (id) => {
  const response = await api.delete(`/prestamos/${id}`);
  return response.data;
};
