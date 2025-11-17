const express = require('express');
const router = express.Router();

// Ruta de prueba para saber si está viva la API
router.get('/health', (req, res) => res.json({ ok: true }));

// Monta todas las rutas de autenticación
router.use('/auth', require('./auth.routes'));
router.use('/alumnos', require('./alumnos'));
router.use('/libros', require('./libros'))
router.use('/prestamos',require('./prestamos'))
router.use('/mail',require('./mail.routes'))


module.exports = router;