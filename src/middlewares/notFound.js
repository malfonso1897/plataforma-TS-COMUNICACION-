/**
 * Middleware para rutas no encontradas (404).
 */
const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    error: `Ruta no encontrada: ${req.originalUrl}`,
  });
};

module.exports = notFound;
