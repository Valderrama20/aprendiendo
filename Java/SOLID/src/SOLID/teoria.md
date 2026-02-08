# Dependency Inversion Principle (DIP) 🏗️

## 1. Explicación 📝

El Principio de Inversión de Dependencias dice dos cosas clave:

1. Los módulos de alto nivel (la lógica de tu aplicación) no deben depender de módulos de
bajo nivel (detalles como bases de datos o servicios específicos). Ambos deben depender de 
abstracciones (interfaces).


2. Las abstracciones no deben depender de los detalles. Los detalles deben depender de las
abstracciones.

En resumen: "Depende de interfaces, no de clases concretas". 
Esto hace que tu código sea como un bloque de LEGO: puedes quitar una pieza y poner otra 
compatible sin reconstruir todo el modelo.

### 2. Código que NO aplica el DIP ❌

Imagina un interruptor que controla una bombilla. El interruptor está "atado" 
directamente a la bombilla.

````java
public class Bombilla {
    public void encender() { System.out.println("Luz encendida"); }
    public void apagar() { System.out.println("Luz apagada"); }
}

public class Interruptor {
    private Bombilla bombilla; // Dependencia directa (Bajo nivel)

    public Interruptor() {
        this.bombilla = new Bombilla(); 
    }

    public void operar() {
        // Lógica de encendido/apagado
        bombilla.encender();
    }
}
````

¿Cuál es el problema? Si mañana queremos que el Interruptor controle un Ventilador o 
una Alarma, tenemos que modificar la clase Interruptor porque está pegada a la Bombilla.

### 3. Código con el principio aplicado ✅

Creamos una abstracción (interfaz) para cualquier cosa que se pueda encender o apagar.

````java
// La abstracción
public interface Conectable {
    void encender();
    void apagar();
}

// El interruptor depende de la interfaz, no de la bombilla
public class Interruptor {
    private Conectable dispositivo;

    // Inyectamos la dependencia
    public Interruptor(Conectable dispositivo) {
        this.dispositivo = dispositivo;
    }

    public void operar() {
        dispositivo.encender();
    }
}

// Ahora podemos usar cualquier cosa
public class Bombilla implements Conectable {
    public void encender() { /* ... */ }
    public void apagar() { /* ... */ }
}
````