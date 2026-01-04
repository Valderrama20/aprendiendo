// --------- From and into ------------

// En rust utilizamos from eh into para convertir tipos
// estas son implementacion las cuales tiene cada tipo
// si podemos convertir de a -> b tambien se puede de b -> a

// --------- From -----------

// Este rasgo o metodo permite que un tipo defina como crearse a si mismo
// a partir de otro tipo, creando un mecanismo muy simple para la conversion entre tipos

// Ejmplo: podemos convertir sin problemas un str a un String

let my_str = "hello";
let my_string = String::from(my_str);

// Podemos hacer algo similiar y definiar una conversion para nustro tipo

use std::convert::From;

#[derive(Debug)]
struct Number {
    value: i32,
}

impl From<i32> for Number {
    fn from(item: i32) -> Self {
        Number { value: item }
    }
}

fn main() {
    let num = Number::from(30);
    println!("My number is {:?}", num);
}


// ---------- Into --------------

// "Into" es el metodo o rasgo reciproco de "From". de esta forma tambien 
// definimos como convertir un tipo a otro

// al utilizar into debemos especificar el resultado esperado 
// ya que el compilador mayormente no lo infiere

use std::convert::Into;

#[derive(Debug)]
struct Number {
    value: i32,
}

impl Into<Number> for i32 {
    fn into(self) -> Number {
        Number { value: self }
    }
}

fn main() {
    let int = 5;
    // Try removing the type annotation
    let num: Number = int.into();
    println!("My number is {:?}", num);
}