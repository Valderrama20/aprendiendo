// ----- Tipos Copy -------------

// aunque la semantica de movimiento es la forma predetermina, algunos
// tipos se copian de forma predeterminada:

fn main() {
    let x = 42;
    let y = x;
    println!("x: {x}"); // would not be accessible if not Copy
    println!("y: {y}");

    //estos tipos implementan el trait copy
}

// Puedes habilitar tus propios tipos para que usen la semantica de copia

#[derive(Copy, Clone, Debug)]
struct Point(i32, i32);

fn main() {
    let p1 = Point(3, 4);
    let p2 = p1;
    println!("p1: {p1:?}");
    println!("p2: {p2:?}");
    // Después de la asignación, tanto p1 como p2 tienen sus propios datos.
    // También podemos utilizar p1.clone() para copiar los datos de forma explícita
}
