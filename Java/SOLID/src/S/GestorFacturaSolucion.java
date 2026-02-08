package S;

// 1. Responsabilidad: Lógica de cálculo
public class GestorFactura {
    public double calcularTotal(double importe) {
        return importe - (importe * 0.10);
    }
}

// 2. Responsabilidad: Formateo de datos
public class FormateadorFactura {
    public String convertirAJson(double total) {
        return "{ \"total\": " + total + " }";
    }
}

// 3. Responsabilidad: Persistencia/Logs
public class LoggerFactura {
    public void guardarLog(String mensaje) {
        System.out.println("Escribiendo log: " + mensaje);
    }
}