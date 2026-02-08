# Liskov Substitution Principle (LSP) 🔄

## 1. Explicación 📝

El Principio de Sustitución de Liskov dice que los objetos de una 
subclase deben poder reemplazar a los objetos de la clase base sin 
que el programa falle o se comporte de forma inesperada.

En términos sencillos: si una clase B hereda de A, deberíamos poder usar B en cualquier
lugar donde usemos A sin romper nada. Si la subclase "rompe" alguna funcionalidad de la 
clase padre (como lanzar un error porque no puede hacer algo que el padre sí), estamos 
violando el LSP.

### 2. Código que NO aplica el LSP ❌

El ejemplo más clásico es el de las aves. Decimos que todas las aves vuelan, pero...
¿qué pasa con los pingüinos? 🐧

````java
public class Ave {
    public void volar() {
        System.out.println("Estoy volando...");
    }
}

public class Gorrion extends Ave {
    // El gorrión vuela sin problemas
}

public class Pinguino extends Ave {
    @Override
    public void volar() {
        // ¡Problema! Un pingüino no vuela. 
        // Forzamos un error o dejamos el método vacío.
        throw new UnsupportedOperationException("No puedo volar");
    }
}
````

¿Por qué está mal? Si tenemos una lista de Ave y llamamos al método volar(), 
nuestra aplicación se cerrará con un error cuando llegue al pingüino.


### 3. Código con el principio aplicado ✅

Para solucionarlo, debemos ser más precisos con nuestras jerarquías. 
No todas las aves vuelan, así que separamos esa capacidad.

````java
public class Ave {
    public void comer() { System.out.println("Comiendo..."); }
}

public interface Voladora {
    void volar();
}

public class Gorrion extends Ave implements Voladora {
    public void volar() { System.out.println("Volando alto!"); }
}

public class Pinguino extends Ave {
    // El pingüino es un Ave, pero no implementa Voladora.
    // Solo hace lo que realmente puede hacer.
}
````
