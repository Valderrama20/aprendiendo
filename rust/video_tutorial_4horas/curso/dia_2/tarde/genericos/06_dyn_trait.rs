// Ademas de ser usados para despacho estatico 
// los trais tambien se puede utilizar para despacho 
// dinamico/tipo-borrado con objectos de trait

//TODO: enterder mejor esto

struct Dog {
    name: String,
    age: i8,
}

struct Cat {
    lives: i8
}

trait Pet {
    fn talk(&self) -> String;
}

impl Pet for Dog {
    fn talk(&self) -> String {
      format!("¡Guau, me llamo {}!", self.name)
    }
}

impl Pet for Cat {
    fn talk(&self) -> String {
        String::from("Miau")
    }
}

// Utilizamos genericos de despacho estatico
fn generic(pet: &impl Pet) {
    println!("Hola, quien eres? {}", pet.talk());
}

// Utilizamos borradura de tipos y despacho dinamico.
fn dynamic(pet: &dyn Pet) {
    println!("Hola, quien eres? {}", pet.talk())
}

fn main() {
    let cat = Cat { lives: 9 };
    let dog = Dog { name: String::from("Fido"), age: 5 };

    generic(&cat);
    generic(&dog);

    dynamic(&cat);
    dynamic(&dog);
}