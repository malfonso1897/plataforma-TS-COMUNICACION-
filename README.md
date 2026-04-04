# plataforma-TS-COMUNICACION-

Plataforma TS Comunicación — sistema de gestión interna para el equipo de comunicación.

## App de Recursos Humanos

Módulo integrado en `src/recursosHumanos/` que permite gestionar empleados y departamentos de la organización.

### Estructura

```
src/
├── index.js                        # Punto de entrada principal
└── recursosHumanos/
    ├── index.js                    # Exportaciones del módulo RR. HH.
    ├── empleados.js                # Gestión de empleados (CRUD)
    └── departamentos.js            # Gestión de departamentos
```

### Funcionalidades

#### Empleados
- `listarEmpleados()` — devuelve todos los empleados.
- `buscarEmpleado(id)` — busca un empleado por su ID.
- `agregarEmpleado({ nombre, puesto, departamentoId, email })` — registra un nuevo empleado.
- `actualizarEmpleado(id, datos)` — actualiza los datos de un empleado existente.
- `eliminarEmpleado(id)` — elimina un empleado por su ID.

#### Departamentos
- `listarDepartamentos()` — devuelve todos los departamentos.
- `buscarDepartamento(id)` — busca un departamento por su ID.
- `agregarDepartamento(nombre)` — registra un nuevo departamento.

### Uso

```js
const recursosHumanos = require('./src/recursosHumanos');

// Listar todos los empleados
const empleados = recursosHumanos.listarEmpleados();

// Agregar un empleado
const nuevo = recursosHumanos.agregarEmpleado({
  nombre: 'Laura Sánchez',
  puesto: 'Coordinadora de Comunicación',
  departamentoId: 3,
  email: 'laura.sanchez@ts-comunicacion.com',
});

// Mostrar resumen en consola
recursosHumanos.mostrarResumen();
```

### Ejecución

```bash
npm start
```
