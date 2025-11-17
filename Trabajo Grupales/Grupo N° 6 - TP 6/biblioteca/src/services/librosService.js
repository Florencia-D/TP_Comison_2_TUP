import api from "./api";

// Obtener todos los libros
export const getLibros = async () => {
  const response = await api.get("/libros");
  return response.data;
};

// Crear libro
export const createLibro = async (libro) => {
  const response = await api.post("/libros", libro);
  return response.data;
};

// Actualizar libro
export const updateLibro = async (id, libro) => {
  const response = await api.put(`/libros/${id}`, libro);
  return response.data;
};

// Eliminar libro
export const deleteLibro = async (id) => {
  const response = await api.delete(`/libros/${id}`);
  return response.data;
};
