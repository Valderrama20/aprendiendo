package S;
public class GestorFacturaPractica {
    public void procesarFactura(double importe) {
        // 1. Calcular total con descuento
        double total = importe - (importe * 0.10);
        System.out.println("Total calculado: " + total);

        // 2. Formatear a JSON
        String json = "{ \"total\": " + total + " }";
        System.out.println("Formato JSON listo: " + json);

        // 3. Guardar log en archivo
        System.out.println("Escribiendo log en factura.log...");
    }
}