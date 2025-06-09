fn main() {
    // Arrays

    // Para definir el tipo de un arr, indicamos su tipo y longitud;
    let mut arr: [i8; 10] = [42; 10];

    // Sobre escribimos un numero dentro de larray
    arr[5] = 0;

    // TODO: investigar el funcionamiento de :?
    //mostramos la informacion del arr
    println!("arr: {arr:?}");

    // Tuplas:
    // Las tuplas al igual que el array tienen una lingitud fija
    // Las tuplas agrupan valores de diferentes tipos en un tipo compuesto
    let tupla: (i8, bool) = (7, false);

    // Podemos acceder a una tupla con el punto y su indice
    println!("tupla.0: {}", tupla.0);
    println!("tupla.1: {}", tupla.1);

    // Iteracion de arreglos (arrays)
    // Con "for" podemos iterar sobre array pero no sobre tuplas

    let primes = [2, 3, 5, 7, 11, 13, 17, 19];

    for prime in primes {
        for i in 2..prime {
            // Aqui estamos utilziando una macro la cual hace una comparacion (TODO: Investigar mas)
            assert_ne!(prime % i, 0);
        }
    }

    // Tambien exiten las macros: assert_eq! y assert!. estas variantes siempre se comprueban
    // mistras que las variantes de solo depuracion como debug_assert!, no compilan nada en el codigo

    // Patrones y destructuracion
    // cuando trabajamos con valores estructurados, es nomal querer obtener un valor
    // Esto lo podemos hacer manualmente

    print_tuple((20, 15));

    // En rust tambien tenemos la coincidencia de patrones, por lo cual
    // podemos destructurar

    print_tuple2((100,200))
}

fn print_tuple(tuple: (i32, i32)) {
    let left = tuple.0;
    let right = tuple.1;

    println!("left: {left}, right: {right}");
}

fn print_tuple2(tuple: (i32, i32)) {
    let (left, right) = tuple;

    println!("left 2: {left}, right 2: {right}");
}
