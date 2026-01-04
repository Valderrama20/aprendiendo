
// -------- Revision de memoria de programa ---------

// Los programas en rust asignan mamoria de dos formas distintas

// Stack: Zona de memoria continua para las variables locales
//    - Son valores que tienen tamano fijo en tiempo de compilacion
//    - Muy rapida: mueve el stack pointer.
//    - Facil de gestionar: sigue las llamadas de funciones
//    - Excelente localidad de memoria

// Heap: almacenamiento de valores fuera de las llamadas de funcion
//    - Los valores tienen tamanos dinamicos determinados en runtime
//    - Ligeramenta mas lento que el stack: requiere cierta trazabilidad
//    - No se puede asegurar la localidad de memoria

// Ejemplo:

// Al crear un string, los metadatos de tamanos fijos se colocan en el "stack"
// y los datos de tamano dinamico (la cadena real) en el "head"

fn main() {
    let s1 = String::from("Hola");
}