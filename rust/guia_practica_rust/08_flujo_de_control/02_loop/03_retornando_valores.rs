// --------- Retornando valores -----------

// Uno de los casos de uso de un loop, es reintentar una operacion hasta 
// que tenga exito, si la operacion devuelve un valor, el bucle puede retornarlo
// poniento el valor deltante del break

fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    assert_eq!(result, 20);
}