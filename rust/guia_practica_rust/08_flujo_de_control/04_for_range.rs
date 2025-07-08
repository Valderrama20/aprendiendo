// ------ for and range -----------

// En Rust para recorrer elementos podemos utilzar
// for in y unas de las formas mas sencillas para crear un iterador
// es utilizar la notacion de rangos "a..b" 
// Esto produce valores de a (inclusive) a b (exclusivo) en pasos de uno.
fn main() {
    // `n` will take the values: 1, 2, ..., 100 in each iteration
    for n in 1..101 {
        if n % 15 == 0 {
            println!("fizzbuzz");
        } else if n % 3 == 0 {
            println!("fizz");
        } else if n % 5 == 0 {
            println!("buzz");
        } else {
            println!("{}", n);
        }
    }
}

// Si queremos que el rango sea inclusivo en ambos extremos podemos utilizar
// a..=b

fn main() {
    // `n` will take the values: 1, 2, ..., 100 in each iteration
    for n in 1..=100 {
        if n % 15 == 0 {
            println!("fizzbuzz");
        } else if n % 3 == 0 {
            println!("fizz");
        } else if n % 5 == 0 {
            println!("buzz");
        } else {
            println!("{}", n);
        }
    }
}

// ------ iteradors ----------

// for in puede interactuar con iterados de varias maneras
// por defecto el bucle aplica into_iter para las colecciones.
// pero si queremos podemos utilizar iter o iter_mut
// Todos se encargan de la conversión de una colección en un iterador de 
// diferentes maneras, proporcionando diferentes vistas de los datos dentro.

// iter: Este toma un prestemo de cada elemento de la coleccion.
// por lo cual solo podemos leer y la coleccion no se ve afectada

fn main() {
    let names = vec!["Bob", "Frank", "Ferris"];

    for name in names.iter() {
        match name {
            &"Ferris" => println!("There is a rustacean among us!"),
            // TODO ^ Try deleting the & and matching just "Ferris"
            _ => println!("Hello {}", name),
        }
    }
    
    println!("names: {:?}", names);
}

// into_iter: Este a diferencia de iter, consume la coleccion
// y luego la coleccion no se podra utilizar ya que fue movida a dentro del bucle

fn main() {
    let names = vec!["Bob", "Frank", "Ferris"];

    for name in names.into_iter() {
        match name {
            "Ferris" => println!("There is a rustacean among us!"),
            _ => println!("Hello {}", name),
        }
    }
    
    // println!("names: {:?}", names);
    // FIXME ^ Comment out this line
}

// iter_mut: Toma prestado mutablemente cada elemento de la colección, 
// lo que permite la colección que se modificará en su lugar.

fn main() {
    let mut names = vec!["Bob", "Frank", "Ferris"];

    for name in names.iter_mut() {
        *name = match name {
            &mut "Ferris" => "There is a rustacean among us!",
            _ => "Hello",
        }
    }

    println!("names: {:?}", names);
}