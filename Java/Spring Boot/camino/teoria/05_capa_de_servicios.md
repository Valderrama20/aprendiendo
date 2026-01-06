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
