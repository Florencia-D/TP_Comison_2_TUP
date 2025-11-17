import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { registerRequest } from "../services/authService";

export default function RegisterPage() {
  const [form, setForm] = useState({ usuario: "", email: "", contraseña: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await registerRequest(form);
      setSuccess("Usuario registrado con éxito!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Error al registrarse");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Registrarse</h1>
        <InputField label="Usuario" name="usuario" value={form.usuario} onChange={handleChange} />
        <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
        <InputField label="Contraseña" name="contraseña" type="password" value={form.contraseña} onChange={handleChange} />
        {error && <p className="text-red-600 mb-2">{error}</p>}
        {success && <p className="text-green-600 mb-2">{success}</p>}
        <Button type="submit" className="w-full">Registrarse</Button>
      </form>
    </main>
  );
}
