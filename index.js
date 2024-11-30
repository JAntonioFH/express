// Importa Express y CORS para gestionar el servidor y habilitar el intercambio de recursos entre dominios
const express = require('express');
const cors = require('cors');

// Importa las rutas definidas en un archivo externo
const routerApi = require('./rutas');

// Importa las variables de entorno desde un archivo de configuración
const { config } = require('./config/config');

// Define el puerto en el que se ejecutará el servidor, utilizando una variable de entorno
const puerto = config.port;

// Crea una instancia de la aplicación de Express
const app = express();

// Habilita CORS para permitir solicitudes desde otros orígenes
app.use(cors());

// Permite que el servidor acepte solicitudes con datos en formato JSON
app.use(express.json());

// Registra las rutas definidas en el archivo 'rutas'
routerApi(app);

// Define la ruta raíz ("/") que responde a solicitudes GET
// Aquí simplemente envía un mensaje de saludo como respuesta
app.get('/', (req, res) => {
    res.send('¡Hola, Mundo con Express!');
});

// Inicia el servidor y escucha en el puerto especificado
app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
