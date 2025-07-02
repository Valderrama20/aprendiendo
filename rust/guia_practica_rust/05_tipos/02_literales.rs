// ------- Literales ------------

// En los numeros lo tipos los podemos indicar en el mismo como sufijo
// ejemplo: para especificar que el literal 42 Debería tener el tipo i32, escribe 42i32.

// los tipos de los literales numericos en los cuales no indiquemos su tipo
// se definiran dependiendo de como se utilicen 

fn main() {
    // Suffixed literals, their types are known at initialization
    let x = 1u8;
    let y = 2u32;
    let z = 3f32;

    // Unsuffixed literals, their types depend on how they are used
    let i = 1; // default i32
    let f = 1.0; // default f64

    // `size_of_val` returns the size of a variable in bytes
    println!("size of `x` in bytes: {}", std::mem::size_of_val(&x));
    println!("size of `y` in bytes: {}", std::mem::size_of_val(&y));
    println!("size of `z` in bytes: {}", std::mem::size_of_val(&z));
    println!("size of `i` in bytes: {}", std::mem::size_of_val(&i));
    println!("size of `f` in bytes: {}", std::mem::size_of_val(&f));
}