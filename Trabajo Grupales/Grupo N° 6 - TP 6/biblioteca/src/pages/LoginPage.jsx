import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usuario,
          contraseña: contrasena
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Credenciales incorrectas");
        return;
      }

      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (error) {
      alert("Error en el servidor");
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">


      <Link
        to="/"
        className="absolute top-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-lg 
                   shadow-md hover:bg-blue-700 transition-all"
      >
        Volver al inicio
      </Link>

      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Iniciar Sesión
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">

           <div>
            <label className="block text-gray-700 font-medium mb-1">
              Usuario
            </label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Ingresa tu usuario"
              required
            />
          </div>


          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
          >
            Entrar
          </button>
          
        </form>

        {/* Link a registro */}
        <p className="text-center text-gray-700 mt-5">
          ¿No tienes cuenta?
          <Link to="/register" className="text-blue-600 font-semibold hover:underline ml-1">
            Registrate aquí
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
