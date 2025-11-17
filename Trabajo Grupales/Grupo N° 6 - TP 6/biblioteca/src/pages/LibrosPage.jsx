import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { usePagination } from "../hooks/usePagination";
import { getLibros, createLibro, updateLibro, deleteLibro } from "../services/librosService";
import Table from "../components/Table";
import Modal from "../components/Modal";
import InputField from "../components/InputField";
import Button from "../components/Button";

const LibrosPage = () => {
  const navigate = useNavigate();
  const { data: libros, refetch } = useFetch(getLibros);
  const { currentData, currentPage, maxPage, next, prev } = usePagination(libros, 5);

  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ titulo: "", autor: "", categoria: "", ejemplares_disponibles: 0 });
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const filteredData = currentData().filter(l =>
    l.titulo.toLowerCase().includes(search.toLowerCase()) ||
    l.autor.toLowerCase().includes(search.toLowerCase()) ||
    (l.categoria?.toLowerCase().includes(search.toLowerCase()))
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) await updateLibro(editingId, form);
    else await createLibro(form);
    setModalOpen(false);
    setForm({ titulo: "", autor: "", categoria: "", ejemplares_disponibles: 0 });
    setEditingId(null);
    refetch();
  };

  const handleEdit = (libro) => {
    setForm({
      titulo: libro.titulo,
      autor: libro.autor,
      categoria: libro.categoria || "",
      ejemplares_disponibles: libro.ejemplares_disponibles
    });
    setEditingId(libro.libro_id);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (confirm("¿Eliminar libro?")) {
      await deleteLibro(id);
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

      <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-12">📚 Libros</h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <Button color="green" onClick={() => setModalOpen(true)}>Nuevo Libro</Button>
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3 shadow-inner"
        />
      </div>

      {/* Tabla de libros */}
      <Table
        columns={["titulo", "autor", "categoria", "ejemplares_disponibles"]}
        data={filteredData}
        actions={(row) => (
          <div className="flex gap-2">
            <Button color="blue" onClick={() => handleEdit(row)}>Editar</Button>
            <Button color="red" onClick={() => handleDelete(row.libro_id)}>Eliminar</Button>
          </div>
        )}
      />

      {/* Paginación */}
      <div className="flex justify-center items-center gap-4 mt-6 text-gray-700">
        <Button onClick={prev}>Anterior</Button>
        <span>Página {currentPage} / {maxPage}</span>
        <Button onClick={next}>Siguiente</Button>
      </div>

      {/* Modal para crear/editar libro */}
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingId(null);
          setForm({ titulo: "", autor: "", categoria: "", ejemplares_disponibles: 0 });
        }}
        title={editingId ? "Editar Libro" : "Nuevo Libro"}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <InputField label="Título" value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} />
          <InputField label="Autor" value={form.autor} onChange={(e) => setForm({ ...form, autor: e.target.value })} />
          <InputField label="Categoría" value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })} />
          <InputField label="Ejemplares Disponibles" type="number" value={form.ejemplares_disponibles} onChange={(e) => setForm({ ...form, ejemplares_disponibles: Number(e.target.value) })} />
          <Button type="submit" color="green">{editingId ? "Actualizar" : "Crear"}</Button>
        </form>
      </Modal>
    </div>
  );
};

export default LibrosPage;
