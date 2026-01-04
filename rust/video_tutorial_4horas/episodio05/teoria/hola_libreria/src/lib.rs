// Nosotros podemos tener modulos en un mismo archivo
// o diferentes archivos

// Si queremos utiliar algo que esta en otro archivo, utilizas "mod"
// y el nombre del archivo (Esta es la forma mas simple)

mod archivo_extra;

// esta forma importamos un modulo organizado en carpetas
mod mecanishop;

use mecanishop::garaje2::arreglar_coche;

// Para crear un modulo utilizamos la palabra "mod" seguida del nombre
// algo interesante de los modulo es que todo lo interno es privado
// por seguridad, por lo cual si nosotros queremos utilizar una funcion
// u otro modulo interno, tenemos que utilizar la palabra "pub" delante del nombre
// del modulo

fn traer_grua() {}
// Creamos un modulo
mod taller {
    // definimos un modulo publico, interno
    pub mod recepcion {
        // definimos funciones privadas
        fn add_cita() {}
        fn llevar_a_taller() {
            //Si nosotros queremos utilizar una funcion que esta en un scope superior
            // a nuestro funcion, podemos hacerlo con "super"
            // Super sale de nuestro scope al siguiente scope superior
            // en este caso la utilizamos dos veces ya que la funcion esta
            // dos scopes por arriba
            super::super::traer_grua()
        }
    }

    // Definimos modulo publico interno
    pub mod garaje {
        // definimos funcion publica
        pub fn arreglar_coche() {}
    }
}

// Funcion que utiliza otro modulo

pub fn llevar_a_arreglar() {
    // Para acceder a los modulo podemos hacerlo con su ruta absoluta o relativas
    // Absolutas
    crate::taller::garaje::arreglar_coche();

    // Relativas
    taller::garaje::arreglar_coche();
}

// Utilizando el termino use
// Si estamos en otro archivo podemos utilizar el temino use para importar
// el modulo

// si queremos podemos cambiar el nombre del modulo, utilizando "as"

use crate::taller::garaje as mygarage;

pub fn prueba_codigo() {
    mygarage::arreglar_coche();
}

// Modo idiomatico
// Tabien si queremos solo una funcion de un modulo, podemos obtenerlas
// use crate::taller::garaje::arreglar_coche;

// pub fn prueba_codigo2() {
//     arreglar_coche();
// }

// Para utilizar un modulo que no es nuestro, 
// tenemos que ir a cargo.toml, agregar el nombre y la version del modulo
// luego lo usamos de la misma manera que si fuera un modulo nuestro

// El * significa que importamos todas las funciones del modulo
use rand::prelude::*;

fn hola() {
    let mut rng = rand::thread_rng();
    let y: f64 = rng.r#gen();
}
