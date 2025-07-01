// Importamos el tipo duration
use std::time::Duration;

// TYPE f32: numero flotante de precesion simple, ejemplo: 2.0

fn sleep_for(secs: f32) {

    // Duration::try_from_secs_f32: Intentamos convertir el codigo decimal en una duracion
    // Si los numeros son negativos, devuelve un error
    
    // en let Ok(dur) = estamos destructurando lo que nos devuelve la tupla
    // si todo fue correctamente, entramos al bloque de codigo. Si no, salta y sigue a 
    // lo siguiente. En este caso el final de la funcion.

    if let Ok(dur) = Duration::try_from_secs_f32(secs) {

        // Aqui indicamos que el hilo se duerma durante el tiempo que indica dur
        // en pocas palabras, el programa se para y luego continua cuando pasa el tiempo
        std::thread::sleep(dur);
        println!("Horas de sueno: {:?}", dur);
    }
}


fn main() {
    // Rust tiene algunos controles de flujo que difieren de otros lenguajes
    // Se utilizan para el patron de coincidencias
    
    // Expresiones:
    // if let
    // let else
    // while let

    //// if let /////
    
    // La expresion if let te permite ejecutar codigo si un valor coincide con un patron
    
    sleep_for(-10.0);
    sleep_for(1.0);

}