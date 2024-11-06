// Argumentos de entrada
console.log(process.argv);

// controlar el procesos y su salida

// process.exit(0);

// podemos controlar eventos del proceso

process.on("exit", () => {
  // culaquier accion que quieras realizar al cerrar
});

// current working directory

console.log(process.cwd());
