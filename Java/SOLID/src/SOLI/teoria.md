# Interface Segregation Principle (ISP) ✂️

## 1. Explicación 📝

El Principio de Segregación de Interfaces dice que ningún cliente debe ser forzado a 
depender de métodos que no utiliza.

Este principio establece que una clase no debe ser obligada a implementar interfaces que no 
utiliza. En lugar de tener una interfaz "gorda" con muchos métodos, es mejor tener varias 
interfaces pequeñas y específicas. Así, cada clase solo implementa lo que realmente necesita.

### 2. Código que NO aplica el ISP ❌

Imagina una interfaz para trabajadores en una fábrica. 
El problema surge cuando introducimos robots.

````java
public interface Trabajador {
    void trabajar();
    void comer();
}

public class Humano implements Trabajador {
    public void trabajar() { System.out.println("Humano trabajando..."); }
    public void comer() { System.out.println("Humano comiendo..."); }
}

public class Robot implements Trabajador {
    public void trabajar() { System.out.println("Robot trabajando..."); }
    
    @Override
    public void comer() {
        // ¡Un robot no come! 
        // Estamos obligados a implementar un método inútil.
        throw new UnsupportedOperationException("Los robots no comen");
    }
}
````

### 3. Código con el principio aplicado ✅

Segregamos la interfaz original en dos más específicas.

````java
public interface Trabajable {
    void trabajar();
}

public interface Comible {
    void comer();
}

public class Humano implements Trabajable, Comible {
    public void trabajar() { /* ... */ }
    public void comer() { /* ... */ }
}

public class Robot implements Trabajable {
    public void trabajar() { /* ... */ }
    // El robot ya no tiene que saber nada sobre "comer"
}
````