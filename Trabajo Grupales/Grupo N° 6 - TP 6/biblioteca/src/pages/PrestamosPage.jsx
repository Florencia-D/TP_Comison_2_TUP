// src/pages/PrestamosPage.jsx
// src/pages/PrestamosPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { usePagination } from "../hooks/usePagination";
import { getPrestamos, createPrestamo, updatePrestamo, deletePrestamo } from "../services/prestamosService";
import Table from "../components/Table";
import Modal from "../components/Modal";
import InputField from "../components/InputField";
import Button from "../components/Button";

const PrestamosPage = () => {
  const navigate = useNavigate();
  const { data: prestamos, refetch } = useFetch(getPrestamos);
  const { currentData, currentPage, maxPage, next, prev } = usePagination(prestamos, 5);

  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ alumno_id: "", libro_id: "", fecha_prestamo: "", fecha_devolucion: "", estado: "prestado" });
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const filteredData = currentData().filter(p =>
    p.estado.toLowerCase().includes(search.toLowerCase()) ||
    String(p.alumno_id).includes(search) ||
    String(p.libro_id).includes(search)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) await updatePrestamo(editingId, form);
    else await createPrestamo(form);
    setModalOpen(false);
    setForm({ alumno_id: "", libro_id: "", fecha_prestamo: "", fecha_devolucion: "", estado: "prestado" });
    setEditingId(null);
    refetch();
  };

  const handleEdit = (prestamo) => {
    setForm({
      alumno_id: prestamo.alumno_id,
      libro_id: prestamo.libro_id,
      fecha_prestamo: prestamo.fecha_prestamo?.split("T")[0],
      fecha_devolucion: prestamo.fecha_devolucion?.split("T")[0] || "",
      estado: prestamo.estado
    });
    setEditingId(prestamo.prestamo_id);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (confirm("¿Eliminar préstamo?")) {
      await deletePrestamo(id);
      refetch();
    }
  };

  return (
    <div className="relative min-h-screen p-6 bg-gradient-to-br from-blue-100 to-blue-200">

      <button
        onClick={() => navigate("/dashboard")}
        className="absolute top-6 right-6 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
      >
        Volver
      </button>

      <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-12">📚 Préstamos</h1>

      {/* Crear préstamo y búsqueda */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <Button color="green" onClick={() => setModalOpen(true)}>Nuevo Préstamo</Button>
        <input
          type="text"
          placeholder="Buscar por estado o ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3 shadow-inner"
        />
      </div>

      {/* Tabla de préstamos */}
      <Table
        columns={["alumno_id", "libro_id", "fecha_prestamo", "fecha_devolucion", "estado"]}
        data={filteredData}
        actions={(row) => (
          <div className="flex gap-2">
            <Button color="blue" onClick={() => handleEdit(row)}>Editar</Button>
            <Button color="red" onClick={() => handleDelete(row.prestamo_id)}>Eliminar</Button>
          </div>
        )}
      />

      {/* Paginación */}
      <div className="flex justify-center items-center gap-4 mt-6 text-gray-700">
        <Button onClick={prev}>Anterior</Button>
        <span>Página {currentPage} / {maxPage}</span>
        <Button onClick={next}>Siguiente</Button>
      </div>

      {/* Modal para crear/editar préstamo */}
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingId(null);
          setForm({ alumno_id: "", libro_id: "", fecha_prestamo: "", fecha_devolucion: "", estado: "prestado" });
        }}
        title={editingId ? "Editar Préstamo" : "Nuevo Préstamo"}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <InputField label="ID Alumno" type="number" value={form.alumno_id} onChange={(e) => setForm({ ...form, alumno_id: Number(e.target.value) })} />
          <InputField label="ID Libro" type="number" value={form.libro_id} onChange={(e) => setForm({ ...form, libro_id: Number(e.target.value) })} />
          <InputField label="Fecha Préstamo" type="date" value={form.fecha_prestamo} onChange={(e) => setForm({ ...form, fecha_prestamo: e.target.value })} />
          <InputField label="Fecha Devolución" type="date" value={form.fecha_devolucion} onChange={(e) => setForm({ ...form, fecha_devolucion: e.target.value })} />
          <InputField label="Estado" value={form.estado} onChange={(e) => setForm({ ...form, estado: e.target.value })} />
          <Button type="submit" color="green">{editingId ? "Actualizar" : "Crear"}</Button>
        </form>
      </Modal>

    </div>
  );
};

export default PrestamosPage;
