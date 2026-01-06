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
