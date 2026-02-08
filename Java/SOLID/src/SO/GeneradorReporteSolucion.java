package SO;

// 1. La Interfaz (Abierta a extensiones)
public interface Reporte {
    void generar(String datos);
}

// 2. Implementaciones específicas
public class ReportePDF implements Reporte {
    public void generar(String datos) { System.out.println("Generando PDF: " + datos); }
}

public class ReporteTexto implements Reporte {
    public void generar(String datos) { System.out.println("Generando TXT: " + datos); }
}

// 3. El Generador (Cerrado a modificaciones)
public class GeneradorReporte {
    public void procesar(Reporte reporte, String datos) {
        reporte.generar(datos);
    }
}