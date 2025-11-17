// const { enviarEmail } = require("../services/email.service");

// // Controlador de prueba para enviar un email
// const testMailController = async (req, res) => {
//   // recuperamos el mail del body
//   const { mail } = req.body;

//   // enviamos el email de prueba
//   await enviarEmail(mail);

//   return res.status(200).json({ message: "Email enviado correctamente" });
// };

// module.exports = {
//   testMailController,
// };


const { enviarEmail } = require("../services/email.service");

// Controlador de prueba para enviar un email
const testMailController = async (req, res) => {
  try {
    const { mail } = req.body;

    if (!mail) {
      return res.status(400).json({ message: "El campo 'mail' es obligatorio" });
    }

    await enviarEmail(mail);

    return res.status(200).json({ message: "Email enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el email:", error);
    return res.status(500).json({ message: "Error al enviar el email", error });
  }
};

module.exports = {
  testMailController,
};