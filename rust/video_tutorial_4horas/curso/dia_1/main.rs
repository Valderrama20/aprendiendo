// Las funciones se definen con fn
// Los bloques se delimitan con llaves
// LA funcion main en el punto de entrada del programa
// Rust tiene macro higienicas, por ejemplo println!
// las cadenas en rust estan codificadas en UTF-8 y pueden contener caracteres unicode

fn main() {
    // Hola Mundo

    println!("Hola, 🌍");

    //  Variables

    // Rust ofrece seguridad de tipos con tipado estatico.
    // Una variable se define con let
    let num: i32 = 10;
    println!("EL numero es: {num}");
    // num = 100;
    // println!("EL numero de num ahora es {num}")

    // Valores

    // Enteros con signo: i8, i16, i32, i64, i128, isize
    // Enteros sin signo: u8, u16, u32, u64, u128, usize
    // Numeros de coma flotante: f32, f64
    // Valores unicode: chart
    // boleanos: bool

    // Los tipos tienen la sigueinte anchura
    // iN, uN y fN: N es la cantidad de bits de capacidad
    // isize y usize tienen el ancho de un puntero
    // chart tiene un tamaño de 32bits
    // bool tiene 8 bits

    // Aritmetica
    println!("el resultado es: {}", interproduc(120, 150, 110));

    // Inferencia de tipos

    // Rust analiza como se utiliza la variable para saber su tipo

    let x = 20;
    let y = 10;

    take_u32(x);
    take_i8(y);
    // take_u32(y)

    let _float = 3.5;
    let _integer = 5;
    // assert_eq!(float, integer); con assert_eq! verificamos que dos expresiones sean iguales
    // ERROR: no hay implementación para `{float} == {integer}`

    // Fibonacci
    let n = 20;
    println!("fib({n}) = {}", fib(n));
}

// aritmerica

fn interproduc(a: i32, b: i32, c: i32) -> i32 {
    return a * b + b * c + c * a;
}

// inferencia de tipos

fn take_u32(num: u32) {
    println!("u32: {num}");
}

fn take_i8(num: i8) {
    println!("i8: {num}");
}

// Fibonacci

fn fib(n: i32) -> i32 {
    if n < 2 {
        return n;
    } else {
        return fib(n-1) + fib(n-2)
    }
}
