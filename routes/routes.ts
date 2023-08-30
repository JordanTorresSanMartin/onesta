import express from 'express';
import multer from 'multer';
import csvParser from 'csv-parser';
import { addFruit, /* Agregar otras funciones aquí */ } from '../db/db';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export function setupRoutes(app: express.Application) {
  app.post('/api/fruits', async (req, res) => {
    try {
      const { name } = req.body;
      await addFruit(name);
      res.status(201).json({ message: 'Fruit added successfully' });
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Define otras rutas aquí

  app.post('/api/upload-csv', upload.single('csv'), async (req, res) => {
    const fileBuffer = req;
    const results: any[] = [];

    csvParser({ headers: true })
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        try {
          // Procesar los datos del CSV y guardarlos en la base de datos
          for (const entry of results) {
            // Realiza las operaciones de inserción en la base de datos
          }

          res.status(200).json({ message: 'CSV data uploaded successfully' });
        } catch (error:any) {
          res.status(500).json({ error: error.message });
        }
      })
      .end(fileBuffer);
  });
}
