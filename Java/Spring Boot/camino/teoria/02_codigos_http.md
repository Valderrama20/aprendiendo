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
