import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <h1 className="text-3xl font-bold mb-3">Biblioteca</h1>
      <p className="mb-6">Gestioná libros y usuarios.</p>
      <div className="flex gap-2">
        <Button><Link to="/login">Ingresar</Link></Button>
        <Button><Link to="/register">Registrarse</Link></Button>
      </div>
    </main>
  );
}
