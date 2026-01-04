# Decoradores

Los utilizamos para definir el comportamiento de loo componentes de una aplicaciones
(tranbaja en conjunto con Spring Framework, simplificando el desarrollo)

- Se colocan utilizando el @ al inicio

Los decoradores pueden tener atributos

# Anotaciones

## @SpringBootApplication

La utilizamos para indicar la clase principal de nuestra aplicacion Spring Boot

## @RestController (@Controller y @ResponseBody)

Nos permite crear endpoint, este crea controladores los cuales se mapean a una url
permitiendo tomar peticiones HTTP y reponder en json o xml

## @GetMapping

Lo utilizamos para mapear una url especifica a un metodo en el controlador,
dirigiando todas las peticiones get con esa url alli

## @PathVariable

La utilizamos cuanto queremos obtener los parametros contenidos en la url
de un endpoint

## @PostMapping

La utilizamos cuando queremos enviar una peticion tipo post al servidor
y crear un nuevo recurso

## @RequestBody

Con esta indicamos que se construira un objeto a partir de la informacion
enviada en el body de la request http

## @PutMapping

La utilizamos cuando queremos mapear un controllador a una peticion de tipo put,
una peticion de tipo put es aquella donde queremos actualizar o remplazar por completo
un recurso de nuestra aplicacion

## @DeleteMapping

Lo utilizamos cuando queremos mapear un controllador encargado de eliminar un recurso
existente

## @PatchMapping

Lo utilizamos cuando solo queremos actualizar algunos campos de un recurso existente,
con este no hace falta enviar la representacion completa del mismo. A diferencia de put, que remplaza por completo el recurso

## @RequestMapping

Esta la podemos utiliza tanto a nivel de clase como a nivel de metodo
nos sirve para unificar rutas, poniendo una como base o tambien se puede
utilizar esta para indicar el tipo de peticion, etc. En lugar de las anotaciones anteriores (Es todo en una)

## @ResponseEntity

La utilizamos para manejar las respuestas http de manera detallada y flexible, esta es una clase tipo envoltorio
ya que encapsula la respuesta. Esta nos ayuda a proporcionar informacion adicional
y mantener la uniformidad y claridad en las respuestas

## Codigos de respuesta http

Estos son codigos de respuestas estardar los cuales se envian a los cliente para indicar
el resultado de una solicitud http. Esto nos ayuda ya que podemos entener si fue exitosa, tiene
algun error o hay que hacer algo mas en la peticion

# Códigos HTTP más utilizados

## ✅ Respuestas exitosas (2xx)

| Código | Descripción | Uso típico                          |
| -----: | ----------- | ----------------------------------- |
|    200 | OK          | Solicitud procesada correctamente   |
|    201 | Created     | Recurso creado exitosamente         |
|    204 | No Content  | Éxito sin contenido en la respuesta |

## 🔁 Redirecciones (3xx)

| Código | Descripción       | Uso típico                    |
| -----: | ----------------- | ----------------------------- |
|    301 | Moved Permanently | Redirección permanente        |
|    302 | Found             | Redirección temporal          |
|    304 | Not Modified      | Recurso no modificado (cache) |

## ❌ Errores del cliente (4xx)

| Código | Descripción          | Uso típico                          |
| -----: | -------------------- | ----------------------------------- |
|    400 | Bad Request          | Solicitud mal formada               |
|    401 | Unauthorized         | Falta autenticación                 |
|    403 | Forbidden            | Acceso denegado                     |
|    404 | Not Found            | Recurso no encontrado               |
|    405 | Method Not Allowed   | Método HTTP no permitido            |
|    409 | Conflict             | Conflicto con el estado del recurso |
|    422 | Unprocessable Entity | Error de validación de datos        |
|    429 | Too Many Requests    | Demasiadas solicitudes (rate limit) |

## 💥 Errores del servidor (5xx)

| Código | Descripción           | Uso típico                          |
| -----: | --------------------- | ----------------------------------- |
|    500 | Internal Server Error | Error genérico del servidor         |
|    502 | Bad Gateway           | Respuesta inválida de otro servidor |
|    503 | Service Unavailable   | Servicio no disponible              |
|    504 | Gateway Timeout       | Tiempo de espera agotado            |

# Microservicios

Los microservicios son un tipo de arquitectura en la cual se busca
dividir las tareas y que cada una sea independiente, con el fin de que si alguna falla, esta no rompa a las demas. En una aplicacion monolitca (todo en uno) si tenemos algun
problema o queremos actualizar algo, seria mas complicado ya que todo esta en un mismo lugar

## Ventajes:

- Escabilidad independiente
- Despliegue independiente
- Facilidad de mantenimiento
- Flexibilidad Tecnologica
- Tolerancia a fallos

## Desventajas:

- Complejidad de la gestion
- Mayor complejidad de testing

# Arquitectura basada en capas

La arqitectura basada capas es un enfoque para diseñar sistemas de sofware,
la idea es segmentar responsabilidades en distintas capas

## Capas basicas

### Presentacion

En esta capa nosotros exponemos nuestra aplicacion al mundo real,
en nuestro caso, utilizando una api.

### Logica de negocio

Este es el corazon de nuestra app, aqui se encuentra toda la logica de negocio de la aplicacion. Son las reglas y procesos que definen como opera una aplicacion

### Acceso a datos

Esta es la encargada de interactuar con la base de datos o cualquier otro sistema
de almacenamiento de datos

### Integracion (opcional)

Esta la utilizamos para integrar el microservicio con sistemas externos o con otros microservicios.

Puede incluir componentes de comunicacion como http, clientes de servicio web, colas de mensajes, etc

### Seguridad (opcional)

Esta es la capa encargada de implementar medidad de seguridad para no permitir
accesos no autorizados

Puede incluir componentes como filtros de seguridad, tokens de acceso, etc

# Que es una api

Esta es un intermediario entre nuestro sistema y el mundo exterior.
Es la encargada de recibir las peticiones y responder

## Arquitectura de api

Estas indican como se comparten los datos con los clientes,
las mas populares son:

- SOAP
- RPC
- WebSocket
- REST

### Restriciones de una api REST

- Separacion cliente-servidor
- Interfaz uniforme
- Sin estado
- Sistema en capas
- Almacenamiento en cache
