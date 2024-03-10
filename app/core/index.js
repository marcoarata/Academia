// DEPENDENCIAS .................................................................................

const express = require('express');
const { v4: uuidv4 } = require('uuid');

const fs = require('fs');


// CONFIGURACIONES ..............................................................................

// --> Express.js - Inicializa la Aplicación
const app = express();

// MIDDLEWARES .................................................................................

// --> Express.js - Recibe JSON desde POST
app.use(express.json());

// RUTAS .......................................................................................
const routerApp = require('../routes/index');

routerApp(app);

// DATOS ......................................................................................

// --> JSON DB - Persiste los Datos en Objeto JavaScript
const data = require('../data/index');

// SERVER APP ..................................................................................

app.listen(4000, () => {
    console.log('Servidor iniciado en el puerto 4000');
});

