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
