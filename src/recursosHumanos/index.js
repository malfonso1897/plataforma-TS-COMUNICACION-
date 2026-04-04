'use strict';

const { listarDepartamentos, buscarDepartamento, agregarDepartamento } = require('./departamentos');
const { listarEmpleados, buscarEmpleado, agregarEmpleado, actualizarEmpleado, eliminarEmpleado } = require('./empleados');

function mostrarResumen() {
  const empleados = listarEmpleados();
  const departamentos = listarDepartamentos();

  console.log('\n=== App de Recursos Humanos ===');
  console.log(`Departamentos registrados: ${departamentos.length}`);
  departamentos.forEach((d) => console.log(`  [${d.id}] ${d.nombre}`));

  console.log(`\nEmpleados registrados: ${empleados.length}`);
  empleados.forEach((e) => {
    const dep = buscarDepartamento(e.departamentoId);
    const depNombre = dep ? dep.nombre : 'Sin departamento';
    console.log(`  [${e.id}] ${e.nombre} — ${e.puesto} (${depNombre}) <${e.email}>`);
  });
  console.log('================================\n');
}

module.exports = {
  listarDepartamentos,
  buscarDepartamento,
  agregarDepartamento,
  listarEmpleados,
  buscarEmpleado,
  agregarEmpleado,
  actualizarEmpleado,
  eliminarEmpleado,
  mostrarResumen,
};
