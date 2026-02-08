package SOLI;

// Interfaces segregadas (específicas)
public interface Imprimible {
    void imprimir();
}

public interface Escaneable {
    void escanear();
}

public interface Faxeable {
    void enviarFax();
}

// Ahora la impresora básica solo usa lo que necesita
public class ImpresoraBasica implements Imprimible {
    @Override
    public void imprimir() {
        System.out.println("Imprimiendo documento...");
    }
}

// Una máquina avanzada podría implementar varias
public class SuperImpresora implements Imprimible, Escaneable {
    public void imprimir() { /* ... */ }
    public void escanear() { /* ... */ }
}