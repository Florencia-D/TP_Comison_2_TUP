import { useAuthStore } from "../store/useAuthStore";
import Button from "../components/Button";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import { getLibros } from "../services/librosServices";

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const data = await getLibros();
        setLibros(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLibros();
  }, []);

  const columns = [
    { key: "id", label: "ID" },
    { key: "titulo", label: "Título" },
    { key: "autor", label: "Autor" },
    { key: "anio", label: "Año" },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="flex justify-between items-center p-4 bg-white border-b">
        <h1>Panel Biblioteca - {user?.usuario || user?.email}</h1>
        <Button onClick={logout}>Cerrar sesión</Button>
      </header>

      <section className="p-6">
        {loading ? <p>Cargando libros...</p> : <Table columns={columns} data={libros} />}
      </section>
    </main>
  );
}
