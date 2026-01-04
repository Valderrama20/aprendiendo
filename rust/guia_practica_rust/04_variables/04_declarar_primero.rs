// ---------- Declarar primero -------------

// En rust tambien podemos declarar una variable sin iniciarla
// pero cada variable debe tener un valor antes de utilizar 

// Esto no es recomendable ya que puede dificultar la lectura del codigo

fn main() {
    // Declare a variable binding
    let a_binding;

    {
        let x = 2;

        // Initialize the binding
        a_binding = x * x;
    }

    println!("a binding: {}", a_binding);

    let another_binding;

    // Error! Use of uninitialized binding
    println!("another binding: {}", another_binding);
    // FIXME ^ Comment out this line

    another_binding = 1;

    println!("another binding: {}", another_binding);
}