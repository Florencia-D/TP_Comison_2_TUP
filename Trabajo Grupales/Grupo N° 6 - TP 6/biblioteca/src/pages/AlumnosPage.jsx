// src/pages/AlumnosPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { usePagination } from "../hooks/usePagination";
import { getAlumnos, createAlumno, updateAlumno, deleteAlumno } from "../services/alumnosService";
import Table from "../components/Table";
import Modal from "../components/Modal";
import InputField from "../components/InputField";
import Button from "../components/Button";

const AlumnosPage = () => {
  const navigate = useNavigate();
  const { data: alumnos, refetch } = useFetch(getAlumnos);
  const { currentData, currentPage, maxPage, next, prev } = usePagination(alumnos, 5);

  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ nombre: "", curso: "", dni: "" });
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const filteredData = currentData().filter(a =>
    a.nombre.toLowerCase().includes(search.toLowerCase()) ||
    (a.curso?.toLowerCase().includes(search.toLowerCase())) ||
    a.dni.includes(search)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) await updateAlumno(editingId, form);
    else await createAlumno(form);
    setModalOpen(false);
    setForm({ nombre: "", curso: "", dni: "" });
    setEditingId(null);
    refetch();
  };

  const handleEdit = (alumno) => {
    setForm({ nombre: alumno.nombre, curso: alumno.curso || "", dni: alumno.dni });
    setEditingId(alumno.alumno_id);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (confirm("¿Eliminar alumno?")) {
      await deleteAlumno(id);
      refetch();
    }
  };

  return (
    <div className="relative min-h-screen p-6 bg-gradient-to-br from-blue-100 to-blue-200">

      {/* Botón Volver */}
      <button
        onClick={() => navigate("/dashboard")}
        className="absolute top-6 right-6 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
      >
        Volver
      </button>

      {/* Título */}
      <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-12">👨‍🎓 Alumnos</h1>

      {/* Crear alumno y búsqueda */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <Button color="green" onClick={() => setModalOpen(true)}>Nuevo Alumno</Button>
        <input
          type="text"
          placeholder="Buscar por nombre, curso o DNI..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3 shadow-inner"
        />
      </div>

      {/* Tabla de alumnos */}
      <Table
        columns={["nombre", "curso", "dni"]}
        data={filteredData}
        actions={(row) => (
          <div className="flex gap-2">
            <Button color="blue" onClick={() => handleEdit(row)}>Editar</Button>
            <Button color="red" onClick={() => handleDelete(row.alumno_id)}>Eliminar</Button>
          </div>
        )}
      />

      {/* Paginación */}
      <div className="flex justify-center items-center gap-4 mt-6 text-gray-700">
        <Button onClick={prev}>Anterior</Button>
        <span>Página {currentPage} / {maxPage}</span>
        <Button onClick={next}>Siguiente</Button>
      </div>

      {/* Modal para crear/editar alumno */}
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingId(null);
          setForm({ nombre: "", curso: "", dni: "" });
        }}
        title={editingId ? "Editar Alumno" : "Nuevo Alumno"}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <InputField label="Nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
          <InputField label="Curso" value={form.curso} onChange={(e) => setForm({ ...form, curso: e.target.value })} />
          <InputField label="DNI" value={form.dni} onChange={(e) => setForm({ ...form, dni: e.target.value })} />
          <Button type="submit" color="green">{editingId ? "Actualizar" : "Crear"}</Button>
        </form>
      </Modal>

    </div>
  );
};

export default AlumnosPage;
