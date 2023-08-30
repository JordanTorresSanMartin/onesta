import express from 'express';
import { initializeDB } from '../db/db';
import { setupRoutes } from '../routes/routes';

const app = express();
const PORT = 3000;

// Inicializar la base de datos
initializeDB();

// Configuración para manejar JSON y archivos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de las rutas
setupRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
