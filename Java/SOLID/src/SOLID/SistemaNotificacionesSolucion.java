package SOLID;

// 1. La Abstracción (Interfaz)
public interface ServicioNotificacion {
    void enviar(String mensaje);
}

// 2. Implementaciones de bajo nivel (Detalles)
public class GmailService implements ServicioNotificacion {
    public void enviar(String msj) { System.out.println("Enviando Gmail: " + msj); }
}

public class WhatsAppService implements ServicioNotificacion {
    public void enviar(String msj) { System.out.println("Enviando WhatsApp: " + msj); }
}

// 3. Módulo de alto nivel (No depende de clases concretas)
public class SistemaNotificaciones {
    private ServicioNotificacion servicio;

    // Inyección de dependencia: Recibimos CUALQUIER servicio
    public SistemaNotificaciones(ServicioNotificacion servicio) {
        this.servicio = servicio;
    }

    public void notificar(String mensaje) {
        servicio.enviar(mensaje);
    }
}