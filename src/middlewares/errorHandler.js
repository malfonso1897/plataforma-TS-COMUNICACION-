/**
 * Middleware de manejo centralizado de errores.
 */
const errorHandler = (err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Error interno del servidor';

  res.status(status).json({
    success: false,
    error: message,
  });
};

module.exports = errorHandler;
