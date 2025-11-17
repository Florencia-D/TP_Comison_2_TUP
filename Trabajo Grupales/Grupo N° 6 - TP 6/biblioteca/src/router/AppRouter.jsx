// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import AlumnosPage from "../pages/AlumnosPage";
import LibrosPage from "../pages/LibrosPage";
import PrestamosPage from "../pages/PrestamosPage";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/alumnos" element={<AlumnosPage />} />
      <Route path="/libros" element={<LibrosPage />} />
      <Route path="/prestamos" element={<PrestamosPage />} />
    </Routes>
  </BrowserRouter>
);
