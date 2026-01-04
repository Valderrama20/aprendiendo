// ----------- Anidacion y etiquetas ---------------

// En ocasiones podemos tener bucles anidados
// si nosotros queremos detener un bucle en especifico
// debemos utilitar etiquestas "'first_loop"
// y asi poder y identificarlos al momento de hacer un break o continue

#![allow(unreachable_code, unused_labels)]

fn main() {
    'first_loop: loop {
        println!("Entered the outer loop");

        'second_loop: loop {
            println!("Entered the inner loop");

            // This would break only the inner loop
            //break;

            // This breaks the first loop
            break 'first_loop;
        }

        println!("This point will never be reached");
    }

    println!("Exited the outer loop");
}