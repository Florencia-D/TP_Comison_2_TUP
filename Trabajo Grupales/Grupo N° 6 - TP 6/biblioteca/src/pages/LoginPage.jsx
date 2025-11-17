import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { loginRequest } from "../services/authService";
import { useAuthStore } from "../store/useAuthStore";

export default function LoginPage() {
  const [form, setForm] = useState({ usuario: "", contraseña: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await loginRequest(form);
      setUser(data.user);
      setToken(data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Credenciales inválidas o error en el servidor.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Iniciar sesión</h1>
        <InputField label="Usuario" name="usuario" value={form.usuario} onChange={handleChange} />
        <InputField label="Contraseña" name="contraseña" type="password" value={form.contraseña} onChange={handleChange} />
        {error && <p className="text-red-600 mb-2">{error}</p>}
        <Button type="submit" className="w-full">Ingresar</Button>
      </form>
    </main>
  );
}
