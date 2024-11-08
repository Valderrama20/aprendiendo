// 1. ¿Qué es Node.js?

//  - Node.js es un entorno de ejecución para JavaScript que se utiliza en el
//  desarrollo del lado del servidor. Desarrollado sobre el motor V8 de Google, permite ejecutar
//  código JavaScript fuera del navegador, lo cual es fundamental para crear aplicaciones de
//  backend. Node.js destaca por su eficiencia y escalabilidad en el manejo de solicitudes 
//  concurrentes, lo que lo hace ideal para aplicaciones en tiempo real, como chats, juegos
//  en línea, o servicios de streaming.

// ----- Características clave de Node.js:

// Orientado a eventos: Node.js opera de manera asíncrona, utilizando eventos y callbacks, 
// lo que permite manejar múltiples solicitudes sin bloquear el hilo principal.

// Single-threaded (un solo hilo): Aunque utiliza un solo hilo para la ejecución de JavaScript,
//  puede gestionar múltiples conexiones gracias al modelo de concurrencia basado en el Event Loop.

// Eficiencia en I/O: Node.js es altamente eficiente en operaciones de entrada/salida (I/O),
//  como el acceso a archivos, bases de datos o solicitudes de red, ya que utiliza funciones 
//  no bloqueantes (asíncronas).

// Escalabilidad: Permite construir aplicaciones escalables gracias a su naturaleza no 
// bloqueante, lo que le permite manejar muchas solicitudes concurrentes sin perder rendimiento.

// 2. El Event Loop y la naturaleza asíncrona de Node.js
// - El Event Loop es el núcleo de la
//  arquitectura de Node.js y maneja la ejecución de las operaciones de entrada y salida 
//  (I/O). La idea básica es que cuando se realiza una operación de I/O (como leer un archivo o
//      una solicitud HTTP), Node.js no espera a que esta operación termine. En su lugar, delega 
//      la tarea y pasa a la siguiente instrucción, manteniendo el flujo de ejecución.

// Esto es posible gracias a la naturaleza asíncrona de Node.js, que se basa en el modelo de 
// eventos. Cuando una tarea de I/O termina, se coloca en una cola de eventos y se ejecuta una
//  vez que el Event Loop ha terminado de procesar las tareas en curso.

// -------------- Funcionamiento del Event Loop:

// 1. Node.js recibe una solicitud o evento (por ejemplo, una solicitud HTTP).

// 2. Si la solicitud no es bloqueante (por ejemplo, leer desde un archivo o una operación en la red),
//    se asigna a una cola de operaciones.

// 3. Cuando la operación finaliza, se envía una señal al Event Loop para que ejecute el callback
//    asociado a esa operación.

// 4. El Event Loop procesa el callback cuando está listo, ejecutándolo en el hilo principal 
//    de Node.js.