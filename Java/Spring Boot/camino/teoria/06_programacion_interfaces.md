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
