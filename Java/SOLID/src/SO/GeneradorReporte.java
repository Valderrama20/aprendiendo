package SO;

public class GeneradorReporte {
    public void generar(String datos, String tipo) {
        if (tipo.equals("PDF")) {
            System.out.println("Generando PDF con: " + datos);
        } else if (tipo.equals("TEXTO")) {
            System.out.println("Generando archivo .txt con: " + datos);
        }
    }
}