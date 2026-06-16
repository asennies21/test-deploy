import express from 'express'
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'prueba',
  password: process.env.DB_PASSWORD || 'admin',
  port: process.env.DB_PORT || 5432,
});

const puerto = 3000;

const app = express();

app.get('/', async (req, res) => {
  const resultado = await pool.query('SELECT *- from test')
  res.send(resultado.rows);
})
app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});