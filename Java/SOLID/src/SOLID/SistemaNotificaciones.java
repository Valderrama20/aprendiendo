package SOLID;

public class GmailService {
    public void enviar(String msj) { System.out.println("Gmail: " + msj); }
}

public class SistemaNotificaciones {
    private GmailService gmail;

    public SistemaNotificaciones() {
        this.gmail = new GmailService();
    }

    public void notificar(String mensaje) {
        gmail.enviar(mensaje);
    }
}