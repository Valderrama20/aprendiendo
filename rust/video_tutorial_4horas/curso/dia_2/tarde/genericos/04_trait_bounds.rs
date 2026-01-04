// Cuando se trabaja con genericos
// se prefiere implementen algun trait
// de forma que se pueda llamar a los metodos de un trait

// Esto lo que haces es que solo se le pudan pasar parametros que implementen ese trait

// Se puede hacer con "T: Trait" o  "impl Trait"

fn duplicate<T: Clone>(a: T) -> (T, T) {
    (a.clone(), a.clone())
}

// struct NotClonable
// Debido a que esta structura no implementa Clone
// no se le pude pasar a duplicate
struct Pepe(String);


fn main(){
    let foo = String::from("foo");
    let pair = duplicate(Pepe(foo));
    println!("{pair:?}");
}
