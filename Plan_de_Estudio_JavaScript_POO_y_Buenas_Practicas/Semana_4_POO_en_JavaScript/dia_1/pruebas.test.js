const { Biblioteca, Libro, UsuarioBiblioteca } = require("./dia_1.js");

test("Debe agregar libros a la biblioteca", () => {
  const biblioteca = new Biblioteca();

  biblioteca.crearLibro("El rey de los mares", "Jose G");
  expect(Object.keys(biblioteca.libros).length).toBe(1);

  biblioteca.crearLibro("Un mundo perdido", "Jose G");
  biblioteca.crearLibro("Rey del mundo", "Jose G");
  expect(Object.keys(biblioteca.libros).length).toBe(3);
});
