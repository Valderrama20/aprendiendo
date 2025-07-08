// ------ loop -----------

// Rust nos proporciona una forma de crear un bucle infinito
// esta es "loop" y solo se detiene si nosotros lo indicamos

// Con "break" detenemos cualquier bucle
// Con "continue" terminamos la iteracion y comenzamos otra 

fn main() {
    let mut count = 0u32;

    println!("Let's count until infinity!");

    // Infinite loop
    loop {
        count += 1;

        if count == 3 {
            println!("three");

            // Skip the rest of this iteration
            continue;
        }

        println!("{}", count);

        if count == 5 {
            println!("OK, that's enough");

            // Exit this loop
            break;
        }
    }
}