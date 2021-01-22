const express = require('express');
const app = express();

app.use('/auth', require('./auth'));
app.use('/events', require('./events'));

module.exports = app;