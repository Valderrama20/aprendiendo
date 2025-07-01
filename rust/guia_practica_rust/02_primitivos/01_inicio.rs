// --------- primitivos ------------

// Rust tiene una gran variedad de primitivos
// estos son:

// Tipos escalares

// - Enteros con signo: "i8", "i16", "i32", "i64", "i128" y "isize" (tamano del puntero)
// - Enteros sin signo: "u8", "u16", "u32", "u64", "u128" y "usize" (tamano del puntero)
// - Punto flotante: "f32", "f64"
// - char: valores escalares unico como: "a" (4 bytes cada uno)
// - bool: o true o false
// - El tipo de unidad (), cuyo único valor posible es una tupla vacía: () 

// Tipos compuestos

// arrays: [1, 2, 3]
// tuplas: (1, true)

// En rust tenemos inferencia de tipos por lo cual no hace falta
// tipar las variables ya que estos toman los valores por defual si no se indican

fn main() {
    // Variables can be type annotated.
    let logical: bool = true;

    let a_float: f64 = 1.0;  // Regular annotation
    let an_integer   = 5i32; // Suffix annotation

    // Or a default will be used.
    let default_float   = 3.0; // `f64`
    let default_integer = 7;   // `i32`

    // A type can also be inferred from context.
    let mut inferred_type = 12; // Type i64 is inferred from another line.
    inferred_type = 4294967296i64;

    // A mutable variable's value can be changed.
    let mut mutable = 12; // Mutable `i32`
    mutable = 21;

    // Error! The type of a variable can't be changed.
    mutable = true;

    // Variables can be overwritten with shadowing.
    let mutable = true;

    /* Compound types - Array and Tuple */

    // Array signature consists of Type T and length as [T; length].
    let my_array: [i32; 5] = [1, 2, 3, 4, 5];

    // Tuple is a collection of values of different types 
    // and is constructed using parentheses ().
    let my_tuple = (5u32, 1u8, true, -5.04f32);
}