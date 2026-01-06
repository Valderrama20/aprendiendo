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
