// --------- Box<T> ----------

// Box es un puntero propio de datos en el heap

fn main() {
    let five = Box::new(5);
    println!("cinco: {}", *five);
}

// los tipos de datos recursivos o los tipos de datos con tamanos dinamicos
// deben utilizar box

#[derive[Debug]]
enum List<T> {
    // una lista no vacia, el primer elemento y el resto de la lista.
    Element(T, Box<List<T>>),
    // una lista vacia
    Nil,
}

fn main () {
    let list: List<i32> = List::Element(1, Box::new(List::Element(2, Box::new(List::Nil))));
    println!("{:?}", list)
}