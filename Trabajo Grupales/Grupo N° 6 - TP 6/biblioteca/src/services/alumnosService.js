// src/services/alumnosService.js
import api from "./api";

export const getAlumnos = async () => (await api.get("/alumnos")).data;
export const createAlumno = async (data) => (await api.post("/alumnos", data)).data;
export const updateAlumno = async (id, data) => (await api.put(`/alumnos/${id}`, data)).data;
export const deleteAlumno = async (id) => (await api.delete(`/alumnos/${id}`)).data;
