// Importa Express y CORS
const express = require('express');
const cors = require('cors');
// Crea una instancia de Express
const app = express();
// Habilita CORS en todas las rutas
app.use(cors());

// Define el puerto en el que escuchará el servidor
const puerto = 8080;

// Ruta raíz ("/") para responder a solicitudes GET
app.get('/', (req, res) => {
    res.send('¡Hola, Mundo con Express!');
});

// Ruta adicional "/about"
app.get('/about', (req, res) => {
    res.send('Esta es la página sobre nosotros.');
});

// Ruta con parámetros en la URL
app.get('/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`¡Hola, ${nombre}!`);
});

// Inicia el servidor
app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
