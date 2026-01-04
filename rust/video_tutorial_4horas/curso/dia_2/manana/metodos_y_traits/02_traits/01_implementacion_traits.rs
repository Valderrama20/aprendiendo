// En rust tenemos algo similar a las interfaces, y estas son los traits
// La diferencia clave es que los traits pueden tener metodos con implementacion por defecto
// En el trait definimos los metodos que se deben tener para poder implementarlos

trait Pet {
    /// Devuelve una frase de esta mascota
    /// Metodo requerido sin implementacion
    /// cualquier tipo que implemente Pet, debe definir Talk
    fn talk(&self) -> String;

    /// Imprime un saludo a la mascota en una salida estardar
    /// Metodo con implementacion por defecto
    /// Los tipos que implemente pet no necesitan implementar pero se pueden sobrescribirlo si es necesario
    fn greet(&self) {
        println!("Eres una monada, como te llamas? {}", self.talk());
    }
}

// Definimos la estructura del objecto Dog (una clase)
struct Dog {
    name: String,
    age: i8,
}

// Implementamos el trait pet para dog
impl Pet for Dog {
    fn talk(&self) -> String {
        format!("Guau mi nombre es {}!", self.name)
    }
}

fn main() {
    let fido = Dog {
        name: String::from("Fido"),
        age: 5,
    };
    fido.greet();
}
