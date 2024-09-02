// Día 1-2: Introducción al Backend

// 1. Arquitectura Cliente-Servidor

// La arquitectura cliente-servidor es el modelo básico en el que se construye la mayoría de
// las aplicaciones web. Comprender esta arquitectura es esencial para entender cómo funciona
// el backend.

// Cliente: Es el dispositivo o la aplicación que inicia una solicitud al servidor.
//  Normalmente, es el navegador web o una aplicación móvil.

// Servidor: Es el sistema que responde a las solicitudes del cliente. Procesa
//  las solicitudes y devuelve la respuesta correspondiente (por ejemplo, páginas
//     HTML, datos JSON, etc.).

// Proceso de Comunicación:

// - El cliente envía una solicitud al servidor (por ejemplo, al ingresar una URL en el
//   navegador o hacer clic en un botón).
// - El servidor procesa la solicitud, consulta la base de datos si es necesario,
//   y construye una respuesta.
// - El servidor envía la respuesta al cliente, que puede ser un archivo HTML, un archivo
//   JSON, una imagen, etc.

// Ejemplo:

// Un usuario ingresa www.ejemplo.com en su navegador (cliente).

// El servidor recibe la solicitud, busca la página correspondiente y la envía de vuelta
// al navegador.

// 2. Diferencia entre Backend y Frontend

// El desarrollo web se divide principalmente en dos áreas: frontend y backend.
// Es importante entender la diferencia entre ellas para comprender el rol del backend
// en el desarrollo de aplicaciones web.

// Frontend:

// El frontend es la parte de la aplicación que interactúa directamente con el usuario.
// Incluye HTML, CSS y JavaScript, y se ocupa del diseño, la interfaz de usuario (UI) y
// la experiencia de usuario (UX).

// Ejemplo: El aspecto visual de una página web, como botones, formularios y menús.

// Backend:

// El backend se encarga de la lógica de la aplicación, las bases de datos, la autenticación,
// la autorización, y más.
// Trabaja detrás de escena para procesar las solicitudes del cliente, interactuar con bases
// de datos y enviar respuestas al frontend.

// Ejemplo: Procesar los datos de un formulario de registro y almacenarlos en una base de datos.

// Resumen:

// Frontend: Parte visible y con la que el usuario interactúa.
// Backend: Parte invisible que gestiona la lógica y el manejo de datos.

// 3. HTTP/HTTPS: Métodos, Códigos de Estado, Headers

// HTTP (Hypertext Transfer Protocol) y HTTPS (HTTP Secure) son los protocolos fundamentales
// utilizados en la comunicación web. HTTPS añade una capa de seguridad mediante la
// encriptación SSL/TLS.

// Métodos HTTP: Los métodos HTTP indican la acción que se va a realizar en un recurso web.
// Los métodos más comunes son:

// - GET: Solicita datos de un servidor (por ejemplo, obtener una página web).
// - POST: Envía datos al servidor (por ejemplo, enviar un formulario).
// - PUT: Actualiza un recurso existente.
// - DELETE: Elimina un recurso.

// Códigos de Estado HTTP: Los códigos de estado son respuestas estándar proporcionadas por
// los servidores web a las solicitudes del cliente. Indican si la solicitud fue exitosa o
// si hubo un problema.

// Respuestas informativas (100–199),
// Respuestas satisfactorias (200–299),
// Redirecciones (300–399),
// Errores de los clientes (400–499),
// y errores de los servidores (500–599).

// Headers HTTP: Los headers son metadatos que se envían con las solicitudes y respuestas HTTP.
// Estos incluyen información sobre el tipo de contenido, la autenticación, la longitud del
// cuerpo de la solicitud, etc.

// Headers comunes:

// Content-Type: Indica el tipo de contenido enviado (ej. application/json).
// Authorization: Incluye información para autenticar al cliente.
// Cache-Control: Define reglas de almacenamiento en caché
