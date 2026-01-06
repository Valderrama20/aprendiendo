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

### @Lazy

La anotación **@Lazy** permite indicar que un **bean se cree de forma diferida**, es decir, **solo cuando realmente se vaya a utilizar**.

Por defecto, Spring crea todos los beans al iniciar la aplicación.  
Con `@Lazy`, la creación del bean se pospone hasta el momento en que sea requerido.

---

## ¿Para qué sirve @Lazy?

Esta anotación es útil cuando:
- Un bean es **costoso de crear**
- Se utiliza **muy pocas veces**
- No es necesario cargarlo al iniciar la aplicación

De esta forma, se optimiza:
- El tiempo de arranque
- El uso de recursos

---

## ¿Cómo funciona?

- Spring registra el bean
- No lo instancia al inicio
- Lo crea **la primera vez que se inyecta o se accede a él**

---

## Idea clave

👉 `@Lazy` retrasa la creación de un bean hasta que realmente se necesita.

Menos carga al inicio, más eficiencia cuando hace falta 😄
