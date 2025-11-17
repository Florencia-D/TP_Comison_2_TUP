
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-lg text-center">

        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
          📚 Bienvenido a la Biblioteca
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          Gestioná usuarios, libros y préstamos de manera simple y rápida.
        </p>

        <div className="flex flex-col gap-4 mt-6">

          <Link to="/login">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md">
              Iniciar sesión
            </button>
          </Link>

          <Link to="/register">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md">
              Registrarme
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default HomePage;
