// DEPENDENCIAS ...................................................................
const fs = require('fs');

// JSON DB ...........................................................................

/* Persistencia de Datos en Archivo JSON */
const db = fs.readFileSync('./app/data/db.json', 'utf-8')
let data = JSON.parse(db);


module.exports = data;