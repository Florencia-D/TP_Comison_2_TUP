// const db = require("../config/DB");
const prisma = require('../config/prisma');


// Obtener todos los alumnos
// const getAll = (req, res) => {
//   const consulta = "SELECT * FROM alumnos";
//   db.query(consulta, (err, rows) => {
//     if (err) {
//       return res.status(500).json(err);
//     }
//     return res.json(rows);
//   });
// };


//----CODIGO MODIFICADO PARA OBTENER TODOS LOS ALUMNOS
const getAll = async (req, res) => {
  try {
    const alumnos = await prisma.alumnos.findMany();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un alumno por ID
// const getById = (req, res) => {
//   const { id } = req.params;
//   const consulta = "SELECT * FROM alumnos WHERE alumno_id = ?";
//   db.query(consulta, [id], (err, rows) => {
//     if (err) {
//       return res.status(500).json(err);
//     }
//     if (!rows.length) {
//       return res.status(404).json({ error: "Alumno no encontrado" });
//     }
//     return res.json(rows[0]);
//   });
// };


//----CODIGO MODIFICADO PARA OBTEN. UN ALUMNO POR EL ID
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const alumno = await prisma.alumnos.findUnique({
      where: { alumno_id: parseInt(id) },
    });
    if (!alumno) {
      return res.status(404).json({ error: 'Alumno no encontrado' });
    }
    res.json(alumno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo alumno
// const create = (req, res) => {
//   const { nombre, curso, dni } = req.body;
//   const consulta = "INSERT INTO alumnos (nombre, curso, dni) VALUES (?, ?, ?)";
//   db.query(consulta, [nombre, curso || null, dni], (err, result) => {
//     if (err) {
//       return res.status(500).json(err);
//     }
//     return res.status(201).json({ message: "Alumno creado con exito" });
//   });
// };

//----CODIGO MODIFICADO PARA CREAR UN NUEVO ALUMNO 
const create = async (req, res) => {
  const { nombre, curso, dni } = req.body;
  try {
    const nuevoAlumno = await prisma.alumnos.create({
      data: {
        nombre,
        curso: curso || null,
        dni,
      },
    });
    res.status(201).json({ message: 'Alumno creado con éxito', alumno: nuevoAlumno });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un alumno
// const update = (req, res) => {
//   const { id } = req.params;
//   const { nombre, curso, dni } = req.body;
//   const consulta =
//     "UPDATE alumnos SET nombre=?, curso=?, dni=? WHERE alumno_id=?";
//   db.query(consulta, [nombre, curso || null, dni, id], (err, result) => {
//     if (err) {
//       return res.status(500).json(err);
//     }
//     if (result.affectedRows === 0) {
//       return res.status(404).json({ error: "Alumno no encontrado" });
//     }
//     return res.json({ message: "Alumno actualizado con exito" });
//   });
// };


//----CODIGO MODIFICADO PARA ACTUALIZAR UN ALUMNOO 
const update = async (req, res) => {
  const { id } = req.params;
  const { nombre, curso, dni } = req.body;
  try {
    const alumnoActualizado = await prisma.alumnos.update({
      where: { alumno_id: parseInt(id) },
      data: {
        nombre,
        curso: curso || null,
        dni,
      },
    });

    res.json({ message: 'Alumno actualizado con éxito', alumno: alumnoActualizado });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Alumno no encontrado' });
    }
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un alumno
// const remove = (req, res) => {
//   const { id } = req.params;
//   const consulta = "DELETE FROM alumnos WHERE alumno_id=?";
//   db.query(consulta, [id], (err, result) => {
//     if (err) {
//       return res.status(500).json(err);
//     }
//     if (result.affectedRows === 0) {
//       return res.status(404).json({ error: "No encontrado" });
//     }
//     return res.json({ message: "Alumno eliminado con exito" });
//   });
// };


//----CODIGO MODIFICADO PARA ELIMINAR UN ALUMNO 
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.alumnos.delete({
      where: { alumno_id: parseInt(id) },
    });
    res.json({ message: 'Alumno eliminado con éxito' });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Alumno no encontrado' });
    }
    res.status(500).json({ error: error.message });
  }
};

module.exports = {getAll,getById,create,update,remove,};

