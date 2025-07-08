// ---------- Flujo de control ---------------

// Una parte integral de cualquier lenguaje de programacion son las formas 
// de modificar el flujo de control

// ------------ if - else -----------

// El if else en rust es muy parecido al de otros lenguajes.
// a diferencia de muchos de ellos la condicion no necesita estar rodeada
// de parentesis, y cada condicion es seguida de un bloque
// las condicioens son expresiones por lo cual siempre devuelve algo
// todas las opciones tiene que devolver el mismo tipo de dato

fn main() {
    let n = 5;

    if n < 0 {
        print!("{} is negative", n);
    } else if n > 0 {
        print!("{} is positive", n);
    } else {
        print!("{} is zero", n);
    }

    let big_n =
        if n < 10 && n > -10 {
            println!(", and is a small number, increase ten-fold");

            // This expression returns an `i32`.
            10 * n
        } else {
            println!(", and is a big number, halve the number");

            // This expression must return an `i32` as well.
            n / 2
            // TODO ^ Try suppressing this expression with a semicolon.
        };
    //   ^ Don't forget to put a semicolon here! All `let` bindings need it.

    println!("{} -> {}", n, big_n);
}