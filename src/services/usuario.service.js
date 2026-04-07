// Almacenamiento en memoria (reemplazar con BD real)
const usuarios = [];
let nextId = 1;

const getAll = async () => usuarios;

const getById = async (id) => usuarios.find((u) => u.id === Number(id)) || null;

const create = async (data) => {
  const usuario = { id: nextId++, ...data, creadoEn: new Date().toISOString() };
  usuarios.push(usuario);
  return usuario;
};

const update = async (id, data) => {
  const index = usuarios.findIndex((u) => u.id === Number(id));
  if (index === -1) return null;
  usuarios[index] = { ...usuarios[index], ...data };
  return usuarios[index];
};

const remove = async (id) => {
  const index = usuarios.findIndex((u) => u.id === Number(id));
  if (index !== -1) usuarios.splice(index, 1);
};

module.exports = { getAll, getById, create, update, remove };
