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

---

# Versionado y estructuración de URLs

El **versionado y la correcta estructuración de URLs** es una práctica esencial para que una API sea:

- Mantenible
- Escalable
- Fácil de consumir por los clientes

Gracias a esto, podemos **evolucionar la API** (añadir cambios, mejoras o correcciones) **sin romper las aplicaciones existentes** que dependen de versiones anteriores.

---

## Convenciones de URL

Las **convenciones de URL** definen cómo estructuramos nuestras rutas para que sean:

- Intuitivas
- Claras
- Consistentes

Una buena convención facilita el uso y entendimiento de la API tanto para desarrolladores como para clientes.

Buenas prácticas comunes:

- Usar **sustantivos** para representar recursos (`/users`, `/products`)
- Utilizar **verbos HTTP** para indicar la acción (`GET`, `POST`, `PUT`, `DELETE`)
- Emplear **parámetros claros y descriptivos**
- Evitar verbos en la URL (`/getUsers` ❌, `/users` ✅)

Ejemplo:

```

GET /api/v1/users/1

```

---

## Versionado de la API

El **versionado de la API** permite que diferentes versiones de una misma API **coexistan simultáneamente**.

Esto asegura que:

- Los cambios no rompan clientes existentes
- Se pueda migrar de versión de forma progresiva
- Se mantenga compatibilidad hacia atrás (_backward compatibility_)

---

## Tipos de versionado

### Versionado en la URL

Es el método **más simple y común**.

Consiste en incluir la versión directamente en la ruta.

Ejemplo:

```

/api/v1/users
/api/v2/users

```

✅ Fácil de entender  
✅ Muy visible  
❌ La URL cambia al cambiar de versión

---

### Versionado mediante encabezados HTTP

La versión se envía a través de los **headers** de la petición.

Ejemplo:

```

API-Version: v1

```

✅ URLs más limpias  
❌ Menos intuitivo  
❌ Más complejo de depurar

---

### Versionado mediante parámetros de consulta

La versión se envía como un **query parameter** en la URL.

Ejemplo:

```

/api/users?version=1

```

✅ Fácil de implementar  
❌ Menos recomendado en APIs REST modernas  
❌ Puede generar URLs menos claras

---

## Recomendación general

Para la mayoría de los proyectos:

- El **versionado en la URL** suele ser la mejor opción por su simplicidad y claridad.
- En APIs más avanzadas, el versionado por **headers** puede ser una buena alternativa.

La clave es **elegir un enfoque y ser consistente** en toda la API.

# Capa de servicios

La **capa de servicios** es donde reside la **lógica de negocio** de la aplicación, es decir, la funcionalidad principal que define **cómo opera el sistema**.

En esta capa se implementan:

- Reglas de negocio
- Procesos principales
- Validaciones
- Coordinación entre distintas operaciones

La capa de servicios **no se encarga de mostrar datos ni de recibir peticiones HTTP**.  
Su responsabilidad es **procesar la información y aplicar la lógica correspondiente**.

---

## Ejemplo práctico

En una aplicación de gestión de productos:

- La **capa de servicios**:

  - Gestiona la lógica relacionada con los productos
  - Decide cómo se crean, actualizan, eliminan o validan
  - Interactúa con la capa de acceso a datos

- La **capa de presentación**:
  - Recibe las peticiones del usuario (API, controlador)
  - Devuelve las respuestas al cliente
  - Muestra los datos sin aplicar lógica de negocio

---

## Separación de responsabilidades

Esta separación permite:

- Código más limpio y organizado
- Mayor facilidad de mantenimiento
- Mejor escalabilidad
- Posibilidad de reutilizar la lógica de negocio en distintos puntos de la aplicación

👉 En resumen:  
La **capa de servicios piensa**, la **capa de presentación habla**, y la **base de datos guarda silencio** 😄

# Programación orientada a interfaces

La **programación orientada a interfaces** es un enfoque dentro de la **programación orientada a objetos (POO)** que consiste en definir **qué debe hacer una clase**, sin especificar **cómo debe hacerlo**.

Para ello, se utilizan **interfaces**, que actúan como un **contrato** que las clases deben cumplir.

👉 En otras palabras:  
se separa **la definición del comportamiento** del **detalle de su implementación**.

---

## ¿Qué es una interfaz?

Una **interfaz** es una estructura que define un conjunto de **métodos** que una o más clases deben implementar.

Características principales:

- Define **qué métodos deben existir**
- **No define cómo** se implementan esos métodos
- Obliga a las clases a cumplir el contrato establecido

Esto garantiza que distintas implementaciones puedan ser utilizadas de forma intercambiable.

---

## Beneficios de la programación orientada a interfaces

### Abstracción

Permite separar:

- **Qué se necesita** (la interfaz)
- **Cómo se hace** (la implementación)

Esto facilita:

- La reutilización del código
- La reducción del acoplamiento entre componentes

---

### Flexibilidad

Gracias a las interfaces, podemos:

- Cambiar una implementación por otra
- Sin modificar el código que depende de la interfaz

👉 El código consumidor no necesita saber **qué implementación concreta se está usando**.

---

### Escalabilidad

Facilita la evolución del sistema, ya que:

- Se pueden añadir nuevas funcionalidades
- Implementando nuevas clases que cumplan la misma interfaz

Esto permite crecer la aplicación sin romper el código existente.

---

## Idea clave

👉 _Programa contra interfaces, no contra implementaciones._

Así tu código será:

- Más limpio
- Más mantenible
- Más fácil de testear

# Inyección de dependencias

La **inyección de dependencias (Dependency Injection, DI)** es un **patrón de diseño** que permite que los objetos **reciban sus dependencias desde el exterior**, en lugar de crearlas internamente.

El objetivo principal es:

- Reducir el acoplamiento entre componentes
- Facilitar el mantenimiento del código
- Mejorar la escalabilidad y la testabilidad de la aplicación

👉 Una dependencia es cualquier objeto que una clase necesita para funcionar.

---

## Inversión de Control (IoC)

La **Inversión de Control (IoC)** es el principio en el que se basa la inyección de dependencias.

En lugar de que el código controle:

- La creación
- La gestión
- El ciclo de vida de los objetos

Ese control se **invierte** y pasa a un **contenedor o framework**, como **Spring**.

👉 El desarrollador define _qué necesita_, y Spring se encarga del _cómo y cuándo_.

---

## ¿Cómo funciona en Spring Boot?

En Spring Boot:

- El contenedor de Spring detecta las clases anotadas
- Crea automáticamente las instancias necesarias
- Inyecta las dependencias donde se requieran

Todo esto ocurre sin que el desarrollador tenga que crear objetos manualmente con `new`.

---

## Tipos de inyección de dependencias en Spring Boot

### Inyección por constructor

- Las dependencias se pasan a través del constructor
- Es la **forma recomendada**
- Garantiza que la clase siempre tenga sus dependencias

✅ Más segura  
✅ Facilita los tests  
✅ Hace las dependencias explícitas

---

### Inyección por setter

- Las dependencias se inyectan mediante métodos setter
- Útil cuando una dependencia es opcional

❌ Menos segura que la de constructor

---

### Inyección por campo

- Las dependencias se inyectan directamente en los atributos de la clase
- Se realiza mediante anotaciones

❌ Menos recomendable  
❌ Dificulta el testing  
❌ Oculta dependencias

---

## Anotaciones principales

### @Service

Indica que una clase debe ser tratada como un **servicio**.

Esto significa que:

- Spring gestionará su creación
- Se registrará como un **bean**
- Podrá ser inyectada en otras partes de la aplicación

Se usa normalmente en la **capa de servicios**.

---

### @Autowired

Indica a Spring que debe **inyectar automáticamente una dependencia** en el punto donde se declara.

Spring buscará un bean compatible y lo asignará.

👉 Actualmente, se recomienda usar **inyección por constructor**, lo que permite prescindir de `@Autowired` en muchos casos.

## Idea clave

👉 _No crees dependencias, decláralas._

### @Primary

En Spring Boot, es posible tener **varios beans que implementen la misma interfaz**.

Cuando esto ocurre, Spring **no sabe cuál inyectar** y se produce un conflicto al intentar resolver la dependencia.

Para solucionar este problema, se utiliza la anotación **@Primary**, que indica a Spring **qué bean debe tener prioridad** cuando existen múltiples implementaciones posibles.

---

## ¿Cuándo usar @Primary?

- Cuando hay más de una implementación de una misma interfaz
- Cuando una de ellas debe ser la opción por defecto
- Para evitar errores de ambigüedad en la inyección de dependencias

---

## Ejemplo conceptual

Si existen dos implementaciones de una interfaz:

- `ProductRepositoryMySQL`
- `ProductRepositoryMemory`

Y ambas están registradas como beans, Spring no sabrá cuál usar.

Marcando una como `@Primary`, Spring la seleccionará automáticamente.

👉 Si no se indica `@Primary` ni se usa `@Qualifier`, Spring lanzará una excepción.

---

## Idea clave

👉 `@Primary` define **el bean preferido** cuando hay múltiples opciones disponibles.

---

### @Qualifier

La anotación **@Qualifier** se utiliza cuando existen **varios beans que implementan la misma interfaz** y queremos **indicar explícitamente cuál de ellos debe inyectarse**.

A diferencia de `@Primary`, que define un bean por defecto, `@Qualifier` permite **seleccionar de forma precisa** la implementación que se desea usar en cada caso.

---

## ¿Cuándo usar @Qualifier?

- Cuando hay múltiples implementaciones de una misma interfaz
- Cuando no queremos depender de un bean por defecto
- Cuando necesitamos distintas implementaciones en diferentes partes de la aplicación

---

## ¿Cómo funciona?

`@Qualifier` se usa junto con la inyección de dependencias para indicar el **nombre del bean** que Spring debe inyectar.

De esta forma, se elimina cualquier ambigüedad.

---

## Idea clave

👉 `@Primary` elige una opción por defecto.  
👉 `@Qualifier` elige **exactamente** qué bean usar.

Ambas anotaciones resuelven el mismo problema, pero de formas distintas.

### @ConditionalOnProperty

La anotación **@ConditionalOnProperty** permite **activar o desactivar beans de forma condicional** en función de un valor definido en los **archivos de configuración** de la aplicación.

Estos archivos suelen ser:
- `application.properties`
- `application.yml`

Gracias a esta anotación, Spring solo creará un bean **si se cumple una condición específica**, lo que resulta muy útil para:
- Configuraciones por entorno (dev, test, prod)
- Funcionalidades opcionales
- Cambiar comportamientos sin modificar código

---

## ¿Cómo funciona?

Spring evalúa una propiedad de configuración y:
- Si la condición se cumple → el bean se crea
- Si no se cumple → el bean no se registra en el contexto

Todo esto se controla desde el archivo de configuración.

---

## Casos de uso comunes

- Habilitar o deshabilitar una funcionalidad
- Activar implementaciones distintas según el entorno
- Evitar cargar beans innecesarios

---

## Idea clave

👉 `@ConditionalOnProperty` te permite **controlar el comportamiento de la aplicación desde la configuración**, sin tocar el código.

Menos `if`, más elegancia 😄


# Jackson (Biblioteca)

**Jackson** es una biblioteca de Java utilizada para el **procesamiento de datos en formato JSON**.

Es ampliamente usada en Spring Boot para:

- Convertir objetos Java a JSON
- Convertir JSON a objetos Java

Spring Boot la integra de forma automática, por lo que normalmente **no es necesario configurarla manualmente**.

---

## Funcionalidades principales

### Serialización

Proceso mediante el cual se convierte un objeto o colección de Java en formato JSON.

Ejemplo:

- Un `List<Product>` → JSON

---

### Deserialización

Proceso inverso, donde un JSON se convierte en objetos Java.

Ejemplo:

- JSON → `List<Product>`

---

## Uso en APIs REST

Gracias a Jackson:

- Los controladores pueden recibir objetos Java desde el `@RequestBody`
- Las respuestas se devuelven automáticamente en formato JSON

👉 Todo esto ocurre de forma transparente, sin que el desarrollador tenga que intervenir directamente.
