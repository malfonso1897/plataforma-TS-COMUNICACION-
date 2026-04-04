'use strict';

const departamentos = [
  { id: 1, nombre: 'Dirección General' },
  { id: 2, nombre: 'Recursos Humanos' },
  { id: 3, nombre: 'Comunicación' },
  { id: 4, nombre: 'Tecnología' },
  { id: 5, nombre: 'Administración' },
];

function listarDepartamentos() {
  return [...departamentos];
}

function buscarDepartamento(id) {
  return departamentos.find((d) => d.id === id) || null;
}

function agregarDepartamento(nombre) {
  if (!nombre || typeof nombre !== 'string' || !nombre.trim()) {
    throw new Error('El nombre del departamento es obligatorio.');
  }
  const nuevoId = departamentos.length
    ? Math.max(...departamentos.map((d) => d.id)) + 1
    : 1;
  const nuevo = { id: nuevoId, nombre: nombre.trim() };
  departamentos.push(nuevo);
  return nuevo;
}

module.exports = { listarDepartamentos, buscarDepartamento, agregarDepartamento };
