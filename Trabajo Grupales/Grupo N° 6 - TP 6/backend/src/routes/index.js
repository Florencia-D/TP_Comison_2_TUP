const express = require('express');
const router = express.Router();

// Ruta de prueba para saber si está viva la API
router.get('/health', (req, res) => res.json({ ok: true }));

// Monta todas las rutas de autenticación
router.use('/auth', require('./authRoutes'));
router.use('/alumnos', require('./alumnosRoutes'));
router.use('/libros', require('./librosRoutes'));
router.use('/prestamos', require('./prestamosRoutes'));
router.use('/mail', require('./mailRoutes'));



module.exports = router;