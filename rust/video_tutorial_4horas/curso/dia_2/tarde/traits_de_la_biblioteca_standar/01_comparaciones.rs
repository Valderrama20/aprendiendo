// Comparaciones
// Estos traits permiten comparar valores
// Se pueden derivar todos los traits de los tipos que contengan campos que implementen estos traits

// PartialEq y Eq
// En pocas palabras es un trait el cual podemos implementar para hacer comparaciones
// este tiene un metodo eq el cual recibe dos referencias a objetos y compara lo que indiquemos
// lo podemos utilizar con los operadores == o !=

struct Key {
    id: u32,
    metadata: Option<String>,
}

impl PartialEq for Key {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id
    }
}

// PartialOrd y Ord
// Con esta podemos hacer comparaciones de mayor o menor para por ejemplo un ordenamiento
// tiene un metodo partial_cmp el cual podemos utilizar con los operadores
// <, <=, >= y >

use std::cmp::Ordering;
#[derive(Eq, PartialEq)]
struct Citation {
    author: String,
    year: u32,
}

impl PartialOrd for Citation {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        match self.author.partial_cmp(&other.author) {
            Some(Ordering::Equal) => self.year.partial_cmp(&other.year),
            author_ord => author_ord
        }
    }
}

fn main() {}
