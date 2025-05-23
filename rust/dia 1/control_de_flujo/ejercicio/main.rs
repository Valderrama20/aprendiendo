
// La secuencia de Collatz se define de la siguiente manera, para n1 arbitrario mayor que cero:

// Si _ni_es 1, la secuencia termina en ni.
// Si ni es par, ni+1 = ni / 2.
// Si ni es impar, ni+1 = 3 * ni + 1.
// Por ejemplo, empezando con n1 = 3:

// 3 es impar, entonces n2 = 3 * 3 + 1 = 10;
// 10 is par, entonces n3 = 10 / 2 = 5;
// 5 es impar, entonces n4 = 3 * 5 + 1 = 16;
// 16 es par, entonces n5 = 16 / 2 = 8;
// 8 es par, entonces n6 = 8 / 2 = 4;
// 44 es par, entonces n7 = 4 / 2 = 2;
// 2 es par, entonces n8 = 1; and
// la secuencia finaliza.
// Escribe una función para calcular la longitud de la secuencia de Collatz para un número n inicial dado.

fn main() {
    println!("Resultado del collatz: {}", collatz_length(3))
}

fn collatz_length(mut n: i32) -> u32 {
    let mut longitud = 1;

    loop {
        if n > 1 {
            break;
        } else if n % 2 == 0 {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        longitud += 1;
    }
    longitud
}


// /// Determina la longitud de la secuencia de Collatz que empieza por `n`.
// fn collatz_length(mut n: i32) -> u32 {
//     let mut len = 1;
//     while n > 1 {
//         n = if n % 2 == 0 { n / 2 } else { 3 * n + 1 };
//         len += 1;
//     }
//     len
// }

// #[test]
// fn test_collatz_length() {
//     assert_eq!(collatz_length(11), 15);
// }

// fn main() {
//     println!("Longitud: {}", collatz_length(11));
// }