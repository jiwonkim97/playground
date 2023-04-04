import mysql from 'mysql';
import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: number;
  name: string;
  age: number;
}

const db = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name',
});

db.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + db.threadId);
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      db.query('SELECT * FROM table_name', (error: Error | null, results: User[]) => {
        if (error) {
          throw error;
        }

        res.status(200).json(results);
      });
      break;

    case 'POST':
      const { name, age } = req.body;

      db.query('INSERT INTO table_name (name, age) VALUES (?, ?)', [name, age], (error, result) => {
        if (error) {
          throw error;
        }

        res.status(200).json(result);
      });
      break;

    case 'PUT':
      const { id, updatedName, updatedAge } = req.body;

      db.query('UPDATE table_name SET name = ?, age = ? WHERE id = ?', [updatedName, updatedAge, id], (error, result) => {
        if (error) {
          throw error;
        }

        res.status(200).json(result);
      });
      break;

    case 'DELETE':
      const deleteId = Number(req.query.deleteId);

      db.query('DELETE FROM table_name WHERE id = ?', [deleteId], (error, result) => {
        if (error) {
          throw error;
        }

        res.status(200).json(result);
      });
      break;

    default:
      res.status(405).end();
  }
}
