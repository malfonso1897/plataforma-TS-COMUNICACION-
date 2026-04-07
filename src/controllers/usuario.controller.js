const usuarioService = require('../services/usuario.service');

const getAll = async (_req, res, next) => {
  try {
    const usuarios = await usuarioService.getAll();
    res.json({ success: true, data: usuarios });
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const usuario = await usuarioService.getById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ success: false, error: 'Usuario no encontrado' });
    }
    res.json({ success: true, data: usuario });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const nuevo = await usuarioService.create(req.body);
    res.status(201).json({ success: true, data: nuevo });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const actualizado = await usuarioService.update(req.params.id, req.body);
    if (!actualizado) {
      return res.status(404).json({ success: false, error: 'Usuario no encontrado' });
    }
    res.json({ success: true, data: actualizado });
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    await usuarioService.remove(req.params.id);
    res.json({ success: true, message: 'Usuario eliminado correctamente' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getById, create, update, remove };
