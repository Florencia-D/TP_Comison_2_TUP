const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// // Obtener todos los préstamos
// const getAll = (req, res) => {
//   const consulta = "SELECT * FROM prestamos";

//   db.query(consulta, (err, rows) => {
//     if (err) {
//       return res.status(500).json(err);
//     }

//     return res.json(rows);
//   });
// };

// // Obtener todos los préstamos
// const getAll = (req, res) => {
//   const consulta = "SELECT * FROM prestamos";

//   db.query(consulta, (err, rows) => {
//     if (err) {
//       return res.status(500).json(err);
//     }

//     return res.json(rows);
//   });
// };

// Obtener todos los préstamos
const getAll = async (req, res) => {
  try {
    const prestamos = await prisma.prestamos.findMany();
    return res.json(prestamos);
  } catch (error) {
    console.error(error); 
    return res.status(500).json({ message: error.message });
  }
};



// // Obtener un préstamo por ID
// const getById = (req, res) => {
//   const { id } = req.params;

//   const consulta = "SELECT * FROM prestamos WHERE prestamo_id = ?";

//   db.query(consulta, [id], (err, rows) => {
//     if (err) {
//       return res.status(500).json(err);
//     }

//     if (!rows.length) {
//       return res.status(404).json({ error: "Prestamo no encontrado" });
//     }

//     return res.json(rows[0]);
//   });
// };


// Obtener un préstamo por ID
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const prestamo = await prisma.prestamos.findUnique({
      where: { prestamo_id: Number(id) },
    });

    if (!prestamo) {
      return res.status(404).json({ error: "Prestamo no encontrado" });
    }

    return res.json(prestamo);
  } catch (error) {
    return res.status(500).json({ error });
  }
};



// // Crear un nuevo préstamo
// const create = (req, res) => {
//   const { alumno_id, libro_id, fecha_prestamo, fecha_devolucion, estado } =
//     req.body;

//   const consulta =
//     "INSERT INTO prestamos (alumno_id, libro_id, fecha_prestamo, fecha_devolucion, estado) VALUES (?, ?, ?, ?, ?)";

//   db.query(
//     consulta,
//     [
//       alumno_id,
//       libro_id,
//       fecha_prestamo,
//       fecha_devolucion || null,
//       estado || "prestado",
//     ],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({message: err});
//       }

//       return res.status(201).json({ message: "Prestamo creado con exito" });
//     }
//   );
// };

// Crear un nuevo préstamo
const create = async (req, res) => {
  const { alumno_id, libro_id, fecha_prestamo, fecha_devolucion, estado } = req.body;

  try {
    const nuevoPrestamo = await prisma.prestamos.create({
      data: {
        alumno_id,
        libro_id,
        fecha_prestamo: new Date(fecha_prestamo),
        fecha_devolucion: fecha_devolucion ? new Date(fecha_devolucion) : null,
        estado: estado || "prestado",
      },
    });

    return res.status(201).json({ message: "Prestamo creado con exito", nuevoPrestamo });
  } catch (error) {
    return res.status(500).json({ error });
  }
};


// // Actualizar un préstamo
// const update = (req, res) => {
//   const { id } = req.params;

//   const { alumno_id, libro_id, fecha_prestamo, fecha_devolucion, estado } =
//     req.body;

//   const consulta =
//     "UPDATE prestamos SET alumno_id=?, libro_id=?, fecha_prestamo=?, fecha_devolucion=?, estado=? WHERE prestamo_id=?";

//   db.query(
//     consulta,
//     [
//       alumno_id,
//       libro_id,
//       fecha_prestamo,
//       fecha_devolucion || null,
//       estado || "prestado",
//       id,
//     ],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json(err);
//       }

//       if (result.affectedRows === 0) {
//         return res.status(404).json({ error: "Prestamo no encontrado" });
//       }

//       return res.json({ message: "Prestamo actualizado con exito" });
//     }
//   );
// };

// Actualizar un préstamo
const update = async (req, res) => {
  const { id } = req.params;
  const { alumno_id, libro_id, fecha_prestamo, fecha_devolucion, estado } = req.body;

  try {
    const prestamoActualizado = await prisma.prestamos.update({
      where: { prestamo_id: Number(id) },
      data: {
        alumno_id,
        libro_id,
        fecha_prestamo: new Date(fecha_prestamo),
        fecha_devolucion: fecha_devolucion ? new Date(fecha_devolucion) : null,
        estado: estado || "prestado",
      },
    });

    return res.json({ message: "Prestamo actualizado con exito", prestamoActualizado });
  } catch (error) {
    if (error.code === "P2025") {
      // Prisma error cuando no encuentra el registro
      return res.status(404).json({ error: "Prestamo no encontrado" });
    }
    return res.status(500).json({ error });
  }
};



// // Eliminar un préstamo
// const remove = (req, res) => {
//   const { id } = req.params;

//   const consulta = "DELETE FROM prestamos WHERE prestamo_id=?";

//   db.query(consulta, [id], (err, result) => {
//     if (err) {
//       return res.status(500).json(err);
//     }

//     if (result.affectedRows === 0) {
//       return res.status(404).json({ error: "Prestamo no encontrado" });
//     }

//     return res.json({ message: "Prestamo eliminado con exito" });
//   });
// };

// Eliminar un préstamo
const remove = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.prestamos.delete({
      where: { prestamo_id: Number(id) },
    });

    return res.json({ message: "Prestamo eliminado con exito" });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Prestamo no encontrado" });
    }
    return res.status(500).json({ error });
  }
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}