// ------ Semantica de movimiento ---------

// una asignacion transferira su ownership entre variables

fn main (){
    let s1: String = String::from("Hola");
    let s2: String = s1;
    println!("s2: {s2}");
     // println!("s1: {s1}"); no se puede porque ya no tiene el valor
     // debido que su ownership fue tranferido a s2
}

// Cuando se pasa un valor a una funcion pasa lo mismo, el valor 
// se asigna al parametro de la funcion, tranfiendo el ownership

fn say_hello(name: String) {
   println!("Hola {name}");
}

fn main() {
    let name = String::from("Alice");
    say_hello(name);
    // say_hello(name); la funcion no se puede volver a llamar porque la primera llamada
    // tomo el valor de name y al terminar su ejecucion se libero la memoria por lo cual name
    // ya no existe

    // la unica forma de que esto no pasa es pasando una referencia de name a la funcion say_hello 
    // o pasando una copia de name con name.clone()
}