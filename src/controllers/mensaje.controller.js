const mensajeService = require('../services/mensaje.service');

const getAll = async (_req, res, next) => {
  try {
    const mensajes = await mensajeService.getAll();
    res.json({ success: true, data: mensajes });
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const mensaje = await mensajeService.getById(req.params.id);
    if (!mensaje) {
      return res.status(404).json({ success: false, error: 'Mensaje no encontrado' });
    }
    res.json({ success: true, data: mensaje });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const nuevo = await mensajeService.create(req.body);
    res.status(201).json({ success: true, data: nuevo });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const actualizado = await mensajeService.update(req.params.id, req.body);
    if (!actualizado) {
      return res.status(404).json({ success: false, error: 'Mensaje no encontrado' });
    }
    res.json({ success: true, data: actualizado });
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    await mensajeService.remove(req.params.id);
    res.json({ success: true, message: 'Mensaje eliminado correctamente' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getById, create, update, remove };
