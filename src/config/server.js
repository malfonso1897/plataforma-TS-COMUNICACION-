const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('../routes');
const errorHandler = require('../middlewares/errorHandler');
const notFound = require('../middlewares/notFound');

const app = express();

// Middlewares globales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', routes);

// Ruta base de salud
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Plataforma TS Comunicación activa' });
});

// Middleware 404 y manejo de errores (deben ir al final)
app.use(notFound);
app.use(errorHandler);

module.exports = app;
