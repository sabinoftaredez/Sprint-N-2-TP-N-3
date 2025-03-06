import express from 'express';
import { connectDB } from './Config/dbConfig.mjs';
import { superheroeRoutes } from './Routes/superheroeRoutes.mjs'; // Asegurarme que coincida.
const app = express();
const PORT = process.env.PORT || 3005;
// Middleware para recibir JSON.
app.use(express.json());
// Conexión a la base de datos.
connectDB();
// Rutas.
app.use('/api/', superheroeRoutes); // Asegurarme que la ruta comience con una barra inclinada.

// Error en las Rutas NO Encontradas.
app.use((req, res) => {
    res.status(404).send({ message: "Ruta no encontrada" });
});
// Bienvenida al Servidor.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el http://localhost:${PORT}`);
});