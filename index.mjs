import 'dotenv/config'
import express from 'express'
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ,
});

const puerto = 3000;

const app = express();

app.get('/', async (req, res) => {
  const resultado = await pool.query('SELECT * FROM test');
  res.send(resultado.rows);
})
app.use(express.static('./front'))

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});