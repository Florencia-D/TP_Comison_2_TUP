// src/pages/RegisterPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import InputField from "../components/InputField";
import Button from "../components/Button";

const RegisterPage = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuarioRegex = /^[a-zA-Z0-9]{3,}$/;
    const passRegex = /^.{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!usuarioRegex.test(usuario)) return alert("Usuario inválido (mínimo 3 caracteres alfanuméricos)");
    if (!passRegex.test(contrasena)) return alert("Contraseña inválida (mínimo 3 caracteres)");
    if (!emailRegex.test(email)) return alert("Email inválido");

    try {
      await register(usuario, contrasena, email);
      alert("Registro exitoso. Inicia sesión.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Error al registrarse");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Crear Cuenta
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField
            label="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <InputField
            label="Correo"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            label="Contraseña"
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
          >
            Registrarme
          </button>
        </form>

        {/* 🔵 Botón Volver al Inicio igual al estilo del login */}
        <button
          onClick={() => navigate("/")}
          className="w-full mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-lg transition-all"
        >
          Volver al Inicio
        </button>

        <p className="text-center mt-4 text-gray-600">
          ¿Ya tenés cuenta?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
          >
            Inicia sesión
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
