

// Tenemos los enums, estas son opciones ya definidas
// las cuales podemos elegir
// Para acceder a ellas utilizamos "::"
// Ejemplo: Vehiculo::Combustion(Coche)

enum Vehiculo {
    Combustion(Coche),
    Hibrido(Coche),
    Electrico(Coche),
}

struct Coche {
    caballos: i32,
    marca: String,
    modelo: String,
    coste: i32,
}