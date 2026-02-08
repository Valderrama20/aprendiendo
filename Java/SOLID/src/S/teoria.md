# Single Responsibility Principle - SRP

## 1. Explicación 🎯

El SRP establece que una clase debe tener una, y solo una, razón para cambiar. 
Esto significa que una clase debe encargarse de una única tarea o funcionalidad 
dentro del sistema. Si una clase hace demasiadas cosas (clase "Dios"), se vuelve 
frágil: un cambio en la lógica de persistencia podría romper accidentalmente la 
lógica de cálculo.

### 2. Código que NO aplica el SRP ❌

Imagina una clase que gestiona un Producto. Fíjate cómo mezcla los datos con la persistencia 
y la notificación.

```java
public class Producto {
    private String nombre;
    private double precio;

    public Producto(String nombre, double precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    // Responsabilidad 1: Lógica de negocio
    public double calcularImpuesto() {
        return this.precio * 0.21;
    }

    // Responsabilidad 2: Persistencia (Base de Datos)
    public void guardarEnBaseDeDatos() {
        System.out.println("Guardando " + nombre + " en la base de datos...");
    }

    // Responsabilidad 3: Notificaciones
    public void enviarEmailConfirmacion() {
        System.out.println("Enviando correo: El producto " + nombre + " ha sido creado.");
    }
}
```

### 3. Código con el principio aplicado ✅

Para cumplir el SRP, dividimos las responsabilidades en clases especializadas:

````java
// Clase pura de datos (Modelo)
public class Producto {
    private String nombre;
    private double precio;

    public Producto(String nombre, double precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    public String getNombre() { return nombre; }
    public double getPrecio() { return precio; }
}

// Clase para cálculos
public class CalculadoraImpuestos {
    public double calcularIVA(Producto producto) {
        return producto.getPrecio() * 0.21;
    }
}

// Clase para persistencia
public class ProductoRepository {
    public void guardar(Producto producto) {
        System.out.println("Guardando " + producto.getNombre() + " en la DB.");
    }
}

// Clase para comunicaciones
public class ServicioEmail {
    public void enviarConfirmacion(Producto producto) {
        System.out.println("Email enviado para: " + producto.getNombre());
    }
}
````