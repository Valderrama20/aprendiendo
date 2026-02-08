package SOL;

public class Archivo {
    public void leer() { System.out.println("Leyendo..."); }
    public void escribir() { System.out.println("Escribiendo..."); }
}

public class ArchivoSoloLectura extends Archivo {
    @Override
    public void escribir() {
        throw new RuntimeException("No puedes escribir en un archivo de solo lectura");
    }
}