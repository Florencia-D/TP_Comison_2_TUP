// src/app.js
require("dotenv").config({ path: __dirname + "/../.env" });

const express = require("express");
const cors = require("cors");

// Importar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Importar rutas
const librosRoutes = require("./routes/librosRoutes");
const alumnosRoutes = require("./routes/alumnosRoutes");
const prestamosRoutes = require("./routes/prestamosRoutes");
const mailRoutes = require("./routes/mailRoutes");
const authRoutes = require("./routes/authRoutes");

// Crear instancia de express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas principales
app.use("/libros", librosRoutes);
app.use("/alumnos", alumnosRoutes);
app.use("/prestamos", prestamosRoutes);
app.use("/mail", mailRoutes);
app.use("/auth", authRoutes);

// Endpoint de prueba DB con Prisma
app.get("/ping", async (_req, res) => {
  try {
    await prisma.$connect(); // conecta con la DB
    res.json({ message: "Prisma conectado OK" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Raíz
app.get("/", (_req, res) => res.send("API Biblioteca OK"));

// Exportar la app configurada
module.exports = app;
