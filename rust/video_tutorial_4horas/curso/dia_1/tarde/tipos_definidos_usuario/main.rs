fn main() {
    ///////// Estructura con nombres //////////

    // Tambien podemos crear estructuras personalizadas
    // Es como si fueran las interfaces de TS

    let mut jose = Person {
        name: String::from("jose"),
        age: 22,
    };

    describe(&jose);

    jose.age = 28;
    describe(&jose);

    let name = String::from("Avary");
    let age = 30;
    let avary = Person { name, age };
    describe(&avary);

    // Al utilizar ..Person podemos obtener los valors le otra persona. Lo mismo que ... de js/ts
    let jackie = Person {
        name: String::from("Jackie"),
        ..avary
    };
    describe(&jackie);

    ///////// Estructura Tuplas //////////

    // Si los nombres no son importantes, podemos utilizar una tupla

    let p = Point(17, 32);
    println!("({}, {})", p.0, p.1);

    ///////// Enumeraciones //////////

    // Con la palabra clave enum, podemos crear con diferentes opciones

    let m: PlayerMove = PlayerMove::Run(Direction::Left);
    println!("En este turno: {:?}", m);

    ///////// Variables Static //////////

    // Estas son variables las cuales viven durante toda la ejecucion del programa, y por lo tanto
    // no se moveran

    println!("{BANNER}");

    ///////// Contantes //////////

    // Las variables contantes se evaluan en tiempo de compilacion
    // y se insertan donde sean necesarios

    const PI: f64 = 3.14;

    ///////// Alias de tipo //////////

    // Los alias no sirver para acortar el nombre de un tipo muy largo
    // tambien para abstraer el tipado

    enum CarryableConcreteItem {
        Left,
        Right,
    }

    type Item = CarryableConcreteItem;

    // Los alias resultan de más utilidad con tipos largos y complejos:
    // use std::cell::RefCell;
    // use std::sync::{Arc, RwLock};
    // type PlayerInventory = RwLock<Vec<Arc<RefCell<Item>>>>;
}

// Estructuras con nombres

struct Person {
    name: String,
    age: u8,
}

fn describe(person: &Person) {
    println!("{} tiene {} anos", person.name, person.age);
}

// Estructuras de tuplas

struct Point(i32, i32);

// Enumeraciones

#[derive(Debug)]
enum Direction {
    Left,
    Right,
}

#[derive(Debug)]
enum PlayerMove {
    Pass,                        // Variante Simple
    Run(Direction),              // Variante Tupla
    Teleport { x: u32, y: u32 }, // Variante de struct
}

// Variables Estaticas
static BANNER: &str = "Bienvenide a RustOS 3.14";
