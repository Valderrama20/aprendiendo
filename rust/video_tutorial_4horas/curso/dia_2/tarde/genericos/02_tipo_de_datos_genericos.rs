
// podemos utilizar genericos para abstraer el tipo
// de campo concreto

#[derive(Debug)]
struct Point<T, U>{
    x: T,
    y: U,
}

impl<T, U> Point<T, U>{
    fn coords(&self) -> (&T, &U) {
        (&self.x, &self.y)
    }

    fn set_x(&mut self, x: T){
        self.x = x;
    }
}

fn main() {
    let integer = Point { x: 5, y: 10 };
    let float = Point { x: 1.0, y: 4.0 };
    let multiples_genericos = Point { x: 5, y: 4.0 };
    println!("{integer:?} y {float:?}, {multiples_genericos:?}");
    println!("coordenadas: {:?}", integer.coords());
}