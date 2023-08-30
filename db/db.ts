import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const DB_PATH = 'db/fruits.db';

export async function initializeDB() {
  const db = await open({
    filename: DB_PATH,
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS fruits (
      id INTEGER PRIMARY KEY,
      name TEXT UNIQUE
    );

    -- Define otras tablas aquí (variedades, agricultores, campos, clientes, etc.)
  `);

  console.log('Database initialized');
}

export async function addFruit(name:Text){

}


