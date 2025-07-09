// Vocal o consonante
// Función que reciba una tupla (char, i32) y devuelva "Vocal" si el char es vocal
// (a, e, i, o, u), o "Consonante" en caso contrario.

fn vocal_consonante(value: (char, i32)) -> &'static str {
    match value {
        ('a' | 'i' | 'o' | 'u', ..) => "Vocal",
        _ => "Consonante",
    }
}

fn main() {
    println!("{}", vocal_consonante(('p', 20)));
}
