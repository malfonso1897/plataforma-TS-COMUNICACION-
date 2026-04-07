const { Router } = require('express');
const mensajeRoutes = require('./mensaje.routes');
const usuarioRoutes = require('./usuario.routes');

const router = Router();

router.use('/mensajes', mensajeRoutes);
router.use('/usuarios', usuarioRoutes);

module.exports = router;
