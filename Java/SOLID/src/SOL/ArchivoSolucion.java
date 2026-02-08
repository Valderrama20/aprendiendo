package SOL;

// Contrato base: Todos los archivos se pueden leer
public class Archivo {
    public void leer() {
        System.out.println("Leyendo contenido...");
    }
}

// Habilidad especial: Solo algunos archivos permiten escribir
public interface Escribible {
    void escribir(String contenido);
}

// Implementación 1: Archivo normal (Lee y Escribe)
public class ArchivoTexto extends Archivo implements Escribible {
    @Override
    public void escribir(String contenido) {
        System.out.println("Escribiendo: " + contenido);
    }
}

// Implementación 2: Archivo de solo lectura (Solo Lee)
public class ArchivoSoloLectura extends Archivo {
    // Solo hereda leer(), no tiene el método escribir()
}