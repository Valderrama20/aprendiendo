# Open/Closed Principle (OCP) 🔓

## 1. Explicación

El principio de Abierto/Cerrado dice que el software debe estar abierto para la extensión, 
pero cerrado para la modificación.

En palabras simples: deberías poder agregar nuevas funciones a tu programa 
(como un nuevo tipo de descuento o un nuevo método de pago) añadiendo código nuevo,
no editando el código que ya escribiste y que ya funciona.

### 2. Código que NO aplica el OCP ❌

Imagina que tenemos un sistema para procesar diferentes tipos de pagos.
Cada vez que queremos aceptar una nueva tarjeta o método, tenemos que 
modificar la clase principal.

````java
public class ProcesadorDePagos {
    public void procesar(double monto, String tipo) {
        if (tipo.equals("EFECTIVO")) {
            System.out.println("Procesando pago en efectivo de: " + monto);
        } else if (tipo.equals("TARJETA")) {
            System.out.println("Conectando con pasarela de tarjeta para cobrar: " + monto);
        }
        // Si queremos añadir "PAYPAL", tenemos que MODIFICAR esta clase y añadir otro 'else if'
    }
}
````

### 3. Código con el principio aplicado ✅

Para solucionarlo, usamos una Interface. Así, ProcesadorDePagos estará "cerrado"
(no cambia más) y "abierto" a nuevos métodos (solo creas una clase nueva que implemente
la interfaz).

````java
// Definimos el contrato
public interface MetodoPago {
    void pagar(double monto);
}

// Implementaciones individuales
public class PagoEfectivo implements MetodoPago {
    public void pagar(double monto) { System.out.println("Efectivo: " + monto); }
}

public class PagoTarjeta implements MetodoPago {
    public void pagar(double monto) { System.out.println("Tarjeta: " + monto); }
}

// La clase principal no cambia NUNCA más
public class ProcesadorDePagos {
    public void ejecutar(MetodoPago metodo, double monto) {
        metodo.pagar(monto);
    }
}
````