'use strict';

const empleados = [
  { id: 1, nombre: 'Ana García', puesto: 'Directora de Comunicación', departamentoId: 3, email: 'ana.garcia@ts-comunicacion.com' },
  { id: 2, nombre: 'Carlos López', puesto: 'Técnico de Recursos Humanos', departamentoId: 2, email: 'carlos.lopez@ts-comunicacion.com' },
  { id: 3, nombre: 'María Martínez', puesto: 'Desarrolladora', departamentoId: 4, email: 'maria.martinez@ts-comunicacion.com' },
];

function listarEmpleados() {
  return [...empleados];
}

function buscarEmpleado(id) {
  return empleados.find((e) => e.id === id) || null;
}

function agregarEmpleado({ nombre, puesto, departamentoId, email }) {
  if (!nombre || typeof nombre !== 'string' || !nombre.trim()) {
    throw new Error('El campo nombre es obligatorio.');
  }
  if (!puesto || typeof puesto !== 'string' || !puesto.trim()) {
    throw new Error('El campo puesto es obligatorio.');
  }
  if (!departamentoId || typeof departamentoId !== 'number') {
    throw new Error('El campo departamentoId es obligatorio y debe ser un número.');
  }
  if (!email || typeof email !== 'string' || !email.trim()) {
    throw new Error('El campo email es obligatorio.');
  }
  const nuevoId = empleados.length
    ? Math.max(...empleados.map((e) => e.id)) + 1
    : 1;
  const nuevo = { id: nuevoId, nombre: nombre.trim(), puesto: puesto.trim(), departamentoId, email: email.trim() };
  empleados.push(nuevo);
  return nuevo;
}

function actualizarEmpleado(id, datos) {
  const idx = empleados.findIndex((e) => e.id === id);
  if (idx === -1) return null;
  empleados[idx] = { ...empleados[idx], ...datos, id };
  return empleados[idx];
}

function eliminarEmpleado(id) {
  const idx = empleados.findIndex((e) => e.id === id);
  if (idx === -1) return false;
  empleados.splice(idx, 1);
  return true;
}

module.exports = { listarEmpleados, buscarEmpleado, agregarEmpleado, actualizarEmpleado, eliminarEmpleado };
