import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const DashboardPage = () => {
  const { logout } = useAuth();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-6">
      

      <button
        onClick={logout}
        className="absolute top-6 right-6 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
      >
        Cerrar Sesión
      </button>

     
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-16 text-center">
        📚 Biblioteca
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
        <Link to="/alumnos">
          <button className="w-full py-5 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-200">
            Alumnos
          </button>
        </Link>

        <Link to="/libros">
          <button className="w-full py-5 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-200">
            Libros
          </button>
        </Link>

        <Link to="/prestamos">
          <button className="w-full py-5 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-200">
            Préstamos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
