
// Necesario para poder crear un rango rn rust
use rand::Rgn; 

fn main() {
    let mut numero_aleatorio = rand::thread_rgn().gen_range(0..=100);

    loop {
        let number_usuario = 10;

        if(numberUsuario > numeroAleatorio ) {
            println!("EL numero es menor");
        } else if (numberUsuario < numeroAleatorio ) {
            println!("EL numero es mayor");
        } else {
            break;
        }
    }

    println!("Felicidades!! descubriste el numero")
}
