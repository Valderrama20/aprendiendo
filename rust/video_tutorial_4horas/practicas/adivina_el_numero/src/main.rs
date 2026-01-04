// Importamos el modulo a utilizar

use rand::Rng; // Modulo para generar nuemeros aleatorios
use std::cmp::Ordering; // para comparar numeros con .cmp
use std::io; // Modulo para leer la entrada del usuario 

fn main() {
    println!("Bienvenido a adivina el numero");
    println!("Elige un numero entre el 1 y 100");
    println!("Si tu numero es mayor, te mostraremos el mensaje: 'El numero es Menor'");
    println!("Si tu numero es menor, te mostraremos el mensaje: 'El numero es Mayor'");
    println!("Y si ganas, te mostraremos el mensaje: 'Ganaste' y termina el juego");

    // Generamos un numero aleatorio
    let random_number = rand::thread_rng().gen_range(1..=100);

    loop {
        // Variable para almacenar el numero introducido por el usuario
        let mut user_number: String = String::new();

        // Le solicitamos al usuario que ingrese un numero
        println!("Ingresa un numero:");
        io::stdin()
            .read_line(&mut user_number)
            .expect("Fallo el leer la entrada");

        // Intentamos tranformar el string a un numero
        let user_number = match user_number.trim().parse::<i32>() {
            Ok(num) => num,
            Err(_) => {
                println!("Ingresa un numero valido");
                continue;
            }
        };

        // con el uso de .cmp verificamos si nuestro nuemro es mayor o menor
        match user_number.cmp(&random_number) {
            Ordering::Greater => println!("El numero es menor"),
            Ordering::Less => println!("El numero es mayor"),
            Ordering::Equal => {
                println!("Ganaste, el numero correo es {}", user_number);
                break;
            }
        }
    }
}
