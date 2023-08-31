import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { error } from 'console';

const DB_PATH = 'db/fruits.db';

export async function initializeDB() {
    const db = await open({
        filename: DB_PATH,
        driver: sqlite3.Database,
    });

    console.log('Database initialized');
}

export async function addFruit(variety?: Text, harvests?: Text, farmers?: Text, fields?: Text, clients?: Text) {

    if (variety === undefined) {
        let error = new Error(`processing error in request`)
        throw error;
    } else {
        const db = new sqlite3.Database(DB_PATH);
        db.run(
            'INSERT INTO fruits (variety, harvests, farmers, fields, clients) VALUES (?, ?, ?, ?, ?)',
            [variety, harvests, farmers, fields, clients],
            function (err: any) {
                throw err;
            }
        );
        db.close()
    }
}


