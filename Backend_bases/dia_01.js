// HTTP (Hypertext Transfer Protocol)

// - Este es el protocolo utilizado para la comunicacion
// entre los navegadores y servidores web

// - funciona sobre TCP/IP y es la base de todas las interacciones en la web

// - Cada peticion HTTP tiene un metodo, una url, headers y un cuerpo (en caso de ser una peticion POST, PUT, PATCH)

// ------------- Metodos HTTP --------------

// Los métodos HTTP representan la acción que queremos realizar sobre un recurso en el servidor.
//  Los métodos más comunes son:

// GET:
// - Propósito: Obtener datos del servidor sin modificar el recurso.
// - Uso común: Recuperar información como una lista de usuarios o detalles de un producto.
// - Ejemplo: Obtener todos los usuarios.
GET / users;

// POST:
// - Propósito: Enviar datos al servidor para crear un nuevo recurso.
// - Uso común: Registrar un nuevo usuario, crear una nueva publicación, etc.
// - Ejemplo: Crear un nuevo usuario.

POST / users;
// Body: {
//   "name": "John"
//   "email": "john@example.com"
// }

// PUT:
// - Propósito: Actualizar completamente un recurso existente en el servidor.
// - Uso común: Modificar todos los datos de un recurso específico.
// - Ejemplo: Actualizar todos los detalles de un usuario con un ID específico.

PUT / users / 1;
// Body: {
//   "name": "John Updated",
//   "email": "johnupdated@example.com"
// }

// PATCH:
// - Propósito: Actualizar parcialmente un recurso.
// - Uso común: Cambiar solo algunos campos de un recurso en lugar de actualizar todo.
// - Ejemplo: Cambiar solo el email de un usuario

PATCH / users / 1;
// Body: {
//   "email": "newemail@example.com"
// }

// DELETE:
// - Propósito: Eliminar un recurso del servidor.
// - Uso común: Borrar un recurso específico (como un usuario o una publicación).
// - Ejemplo: Eliminar un usuario con un ID específico.

DELETE / users / 1;

// ------------- Códigos de Estado HTTP --------------

// Los codigos de estados HTTP son devueltos por el servidor en cada peticion para indicar
// si la solicitud fue procesada correctamente o no. Se dividen en categorias.

// --- Códigos 2XX: Éxito

// Estos codigos indican que la solicitud fue exitosa

// 200 OK: La solicitud fue procesada exitosamente (por ejemplo, para una petición GET).
// 201 Created: Un nuevo recurso fue creado correctamente (por ejemplo, tras una petición POST).
// 204 No Content: La solicitud fue exitosa, pero no hay contenido que devolver (usualmente con DELETE).
