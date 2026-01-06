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
