/**
 * Estructura de respuesta exitosa estándar.
 * @param {object} res - Objeto response de Express
 * @param {any} data - Datos a enviar
 * @param {number} status - Código HTTP (default 200)
 */
const sendSuccess = (res, data, status = 200) => {
  res.status(status).json({ success: true, data });
};

/**
 * Estructura de respuesta de error estándar.
 * @param {object} res - Objeto response de Express
 * @param {string} message - Mensaje de error
 * @param {number} status - Código HTTP (default 400)
 */
const sendError = (res, message, status = 400) => {
  res.status(status).json({ success: false, error: message });
};

module.exports = { sendSuccess, sendError };
