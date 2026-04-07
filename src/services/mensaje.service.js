// Almacenamiento en memoria (reemplazar con BD real)
const mensajes = [];
let nextId = 1;

const getAll = async () => mensajes;

const getById = async (id) => mensajes.find((m) => m.id === Number(id)) || null;

const create = async (data) => {
  const mensaje = { id: nextId++, ...data, creadoEn: new Date().toISOString() };
  mensajes.push(mensaje);
  return mensaje;
};

const update = async (id, data) => {
  const index = mensajes.findIndex((m) => m.id === Number(id));
  if (index === -1) return null;
  mensajes[index] = { ...mensajes[index], ...data };
  return mensajes[index];
};

const remove = async (id) => {
  const index = mensajes.findIndex((m) => m.id === Number(id));
  if (index !== -1) mensajes.splice(index, 1);
};

module.exports = { getAll, getById, create, update, remove };
