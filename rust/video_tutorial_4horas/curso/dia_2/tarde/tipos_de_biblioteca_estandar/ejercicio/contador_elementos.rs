// En este ejercicio habrá una estructura de datos muy sencilla y
// la convertirás en genérica. Utiliza un std::collections::HashMap
// para hacer un seguimiento de los valores se han visto y cuántas
// veces ha aparecido cada uno.

// La versión inicial de Counter está codificada para que solo funcione
// con los valores u32. Haz que struct y sus métodos sean genéricos sobre
// el tipo de valor del que se está haciendo un seguimiento, de manera que
// Counter pueda hacer el seguimiento de cualquier tipo de valor.

// Si te sobra tiempo, prueba a usar el método entry para reducir a la mitad
// el número de búsquedas de hash que se necesita para implementar el método count.

use std::collections::HashMap;
use std::hash::Hash;

/// Counter cuenta el número de veces que se ha visto cada valor de tipo T.
struct Counter<T> {
    values: HashMap<T, u64>,
}

impl<T: Hash + Eq> Counter<T> {
    /// Crea un nuevo Counter.
    fn new() -> Self {
        Counter {
            values: HashMap::new(),
        }
    }

    /// Cuenta una repetición del valor dado.
    fn count(&mut self, value: T) {
        *self.values.entry(value).or_insert(0) += 1;
    }

    /// Devuelve el número de veces que se ha visto el valor dado.
    fn times_seen(&self, value: T) -> u64 {
        self.values.get(&value).copied().unwrap_or_default()
    }
}

fn main() {
    let mut ctr = Counter::new();
    ctr.count(13);
    ctr.count(14);
    ctr.count(16);
    ctr.count(14);
    ctr.count(14);
    ctr.count(11);

    for i in 10..20 {
        println!("se han visto {} valores iguales a {}", ctr.times_seen(i), i);
    }

    let mut strctr = Counter::new();
    strctr.count("manzana");
    strctr.count("naranja");
    strctr.count("manzana");
    println!("se han visto {} manzanas", strctr.times_seen("manzana"));
}
