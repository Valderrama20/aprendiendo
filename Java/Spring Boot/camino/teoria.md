# Decoradores y Anotaciones en Spring Boot

En Spring Boot, **los decoradores (anotaciones)** se utilizan para definir el comportamiento de los componentes de una aplicación.

Trabajan en conjunto con el **Spring Framework**, permitiendo:

- Menos configuración manual
- Más claridad en el código
- Desarrollo más rápido y mantenible

👉 Se colocan usando el símbolo `@` al inicio  
👉 Algunas anotaciones pueden recibir **atributos** para personalizar su comportamiento

---

# Anotaciones principales en Spring Boot

## @SpringBootApplication

Indica la **clase principal** de una aplicación Spring Boot.

Esta anotación combina internamente:

- `@Configuration`
- `@EnableAutoConfiguration`
- `@ComponentScan`

Es el punto de entrada de la aplicación.

---

## @RestController

_(equivale a `@Controller` + `@ResponseBody`)_

Se utiliza para crear **controladores REST**.

Permite:

- Definir endpoints HTTP
- Recibir peticiones
- Responder datos en formato **JSON** o **XML**

Cada método del controlador se mapea a una URL.

---

## @GetMapping

Mapea una **petición HTTP GET** a un método del controlador.

Se utiliza principalmente para:

- Obtener recursos
- Consultar información

Ejemplo:

```java
@GetMapping("/users")
```

---

## @PostMapping

Mapea una **petición HTTP POST**.

Se utiliza cuando queremos:

- Crear un nuevo recurso en el servidor

Ejemplo:

```java
@PostMapping("/users")
```

---

## @PutMapping

Mapea una **petición HTTP PUT**.

Se usa cuando queremos:

- Actualizar o reemplazar **completamente** un recurso existente

👉 El recurso se envía completo.

---

## @PatchMapping

Mapea una **petición HTTP PATCH**.

Se usa cuando:

- Solo queremos actualizar **algunos campos** de un recurso

👉 A diferencia de `PUT`, **no es necesario enviar el recurso completo**.

---

## @DeleteMapping

Mapea una **petición HTTP DELETE**.

Se utiliza para:

- Eliminar un recurso existente

---

## @PathVariable

Permite obtener **parámetros incluidos en la URL**.

Ejemplo:

```java
@GetMapping("/users/{id}")
public User getUser(@PathVariable Long id)
```

---

## @RequestBody

Indica que un objeto se construirá a partir de la información enviada en el **body** de la petición HTTP.

Usualmente se utiliza en:

- `POST`
- `PUT`
- `PATCH`

Ejemplo:

```java
@PostMapping("/users")
public User createUser(@RequestBody User user)
```

---

## @RequestMapping

Puede utilizarse:

- A nivel de **clase**
- A nivel de **método**

Sirve para:

- Definir una ruta base
- Indicar el tipo de petición HTTP
- Unificar rutas

👉 Es más general y puede reemplazar a `GetMapping`, `PostMapping`, etc.

---

## @ResponseEntity

Permite manejar respuestas HTTP de forma **detallada y flexible**.

Es una clase envoltorio que encapsula:

- El cuerpo de la respuesta
- El código HTTP
- Las cabeceras

Ayuda a mantener respuestas:

- Claras
- Uniformes
- Controladas

---

# Códigos de respuesta HTTP

Los **códigos HTTP** indican el resultado de una solicitud realizada por el cliente.

Permiten saber si:

- La petición fue exitosa
- Hubo un error
- Se requiere alguna acción adicional

---

## ✅ Respuestas exitosas (2xx)

| Código | Descripción | Uso típico                          |
| -----: | ----------- | ----------------------------------- |
|    200 | OK          | Solicitud procesada correctamente   |
|    201 | Created     | Recurso creado exitosamente         |
|    204 | No Content  | Éxito sin contenido en la respuesta |

---

## 🔁 Redirecciones (3xx)

| Código | Descripción       | Uso típico                    |
| -----: | ----------------- | ----------------------------- |
|    301 | Moved Permanently | Redirección permanente        |
|    302 | Found             | Redirección temporal          |
|    304 | Not Modified      | Recurso no modificado (cache) |

---

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
|    429 | Too Many Requests    | Demasiadas solicitudes              |

---

## 💥 Errores del servidor (5xx)

| Código | Descripción           | Uso típico                          |
| -----: | --------------------- | ----------------------------------- |
|    500 | Internal Server Error | Error genérico del servidor         |
|    502 | Bad Gateway           | Respuesta inválida de otro servidor |
|    503 | Service Unavailable   | Servicio no disponible              |
|    504 | Gateway Timeout       | Tiempo de espera agotado            |

---

# Microservicios

Los **microservicios** son un estilo de arquitectura donde una aplicación se divide en **servicios pequeños e independientes**.

Cada microservicio:

- Cumple una función específica
- Puede desplegarse de forma independiente
- No depende directamente de los demás

👉 A diferencia de una aplicación **monolítica**, donde todo está en un solo bloque.

---

## Ventajas

- Escalabilidad independiente
- Despliegue independiente
- Facilidad de mantenimiento
- Flexibilidad tecnológica
- Mayor tolerancia a fallos

---

## Desventajas

- Mayor complejidad de gestión
- Testing más complejo
- Comunicación entre servicios

---

# Arquitectura basada en capas

Es un enfoque para diseñar sistemas separando responsabilidades en **capas bien definidas**.

---

## Capas básicas

### Presentación

- Expone la aplicación al mundo exterior
- En APIs, corresponde a los **controladores**

---

### Lógica de negocio

- Es el corazón de la aplicación
- Contiene reglas, procesos y validaciones
- No depende de frameworks ni de bases de datos

---

### Acceso a datos

- Interactúa con la base de datos
- Maneja repositorios, ORM, consultas, etc.

---

### Integración (opcional)

- Comunicación con sistemas externos
- APIs externas, colas de mensajes, otros microservicios

---

### Seguridad (opcional)

- Controla accesos no autorizados
- Autenticación y autorización
- Tokens, filtros, roles, etc.

---

# ¿Qué es una API?

Una **API** es un intermediario entre un sistema y el mundo exterior.

Se encarga de:

- Recibir peticiones
- Procesarlas
- Enviar respuestas

---

## Arquitecturas de API

Las más comunes son:

- SOAP
- RPC
- WebSocket
- REST

---

## Restricciones de una API REST

- Separación cliente-servidor
- Interfaz uniforme
- Sin estado (stateless)
- Sistema en capas
- Uso de caché

---

## Convenciones REST

### URI

Identifica de forma única un recurso.

Ejemplo:

```
/users/1
```

---

### URL

Es un tipo específico de URI que indica:

- Dónde está el recurso
- Cómo acceder a él en Internet

👉 Al crear un recurso, una buena práctica es devolver en las cabeceras HTTP el campo **Location** con la URL del recurso creado.

