// -------- Expresiones ----------

// Un programa de Rust se compone (en su mayoria) de una serie de declaraciones

fn main() {
    // statement
    // statement
    // statement
}

// Hay algunos tipos de declaraciones en Rust. Las dos mas comunes son declarar
// una variable y utilizar ";" al final

fn main() {
    // variable binding
    let x = 5;

    // expression;
    x;
    x + 1;
    15;
}

// Los bloques tambien son expresiones, por lo cual de pueden utilizar como
// valores en una asignacion
// la ultima exppresion del bloque simpre y cuando no lleve ";" sera el valor que este tome
// si la última expresión del bloque termina con a punto y coma, el valor de retorno será ().

fn main() {
    let x = 5u32;

    let y = {
        let x_squared = x * x;
        let x_cube = x_squared * x;

        // This expression will be assigned to `y`
        x_cube + x_squared + x
    };

    let z = {
        // The semicolon suppresses this expression and `()` is assigned to `z`
        2 * x;
    };

    println!("x is {:?}", x);
    println!("y is {:?}", y);
    println!("z is {:?}", z);
}

