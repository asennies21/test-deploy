import express from 'express'

const puerto = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Despliegue exitoso');
})
app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});