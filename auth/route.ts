import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();

// Dummy database
const users = [
  {
    id: 1,
    username: "admin",
    password: "$2b$10$O9lUi5o5oW3tO/vz7hO5w.u8QF.R1Er5XVX9jKxo8VqW3t3F7VmAK", // "password" hashed
  },
];
// Ruta para iniciar sesión
app.post("/login", (req, res) => {
  // Implementar la lógica de inicio de sesión
  // Obtener el nombre de usuario y contraseña enviados en el cuerpo de la solicitud
  const { username, password } = req.body;

  // Buscar el usuario en la base de datos
  const user = users.find((u) => u.username === username);

  if (!user) {
    // Si el usuario no existe, devolver un error
    return res.status(401).json({
      message: "Usuario o contraseña inválidos",
    });
  }

  // Comparar las contraseñas hasheadas
  bcrypt.compare(password, user.password, (err, result) => {
    if (!result) {
      // Si las contraseñas no coinciden, devolver un error
      return res.status(401).json({
        message: "Usuario o contraseña inválidos",
      });
    }
  });
});

// Ruta para registrar usuarios
app.post("/register", (req, res) => {
  // Implementar la lógica de registro de usuarios
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
