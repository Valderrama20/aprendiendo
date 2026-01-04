use std::cmp::Ordering;

// TAREA: implementar la función `min` usada en `main`.
fn min<T: Ord>(a: &T, b: &T) -> Ordering {
   a.cmp(&b)
}

// funcion generica
fn min_by<T, F>(a: T, b: T, compare: F) -> T
where F: Fn(&T, &T) -> Ordering {
    match compare(&a, &b) {
        Ordering::Less => a,
        Ordering::Greater => b,
        _ => a,
    }
}

fn main() {
    assert_eq!(min_by(0, 10,min), 0);
    assert_eq!(min_by(500, 123,min), 123);

    assert_eq!(min_by('a', 'z',min), 'a');
    assert_eq!(min_by('7', '1',min), '1');

    assert_eq!(min_by("hola", "adios",min), "adios");
    assert_eq!(min_by("murciélago", "armadillo",min), "armadillo");
}
