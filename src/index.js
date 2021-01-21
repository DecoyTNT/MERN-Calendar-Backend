const express = require('express');
const { dbConnection } = require('./db/config');
require('dotenv').config();
const app = express();

dbConnection();

// Habilitar carpeta public
app.use(express.static('public'));

// Lectura y parse del body
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(process.env.PORT, () => console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`));