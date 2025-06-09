// Rust nos permite asociar funciones a los nuevos tipos
// Luego de crear un struct, podemos asignarle metodos y un constructor,
// En pocas palabras el struct es la interface y la funcion es la implementacion

// TYPE Vec<>: Este es un vector dinamico. En pocas palablas es un array de los elementos que le indiques
// En este caso tenemos un Array de enteros

// Estructura
struct Race {
    name: String,
    laps: Vec<i32>,
}

// Implementacion
impl Race {
    // este es un metodo estatico el cual hace la funcion del constructor
    fn new(name: &str) -> Self {
        Self {
            name: String::from(name),
            laps: Vec::new(),
        }
    }

    // Metodos

    //Acceso exclusivo de lectura/escritura asociado a self
    // Aqui tomamos una referencias mutable del objecto globla (Es como el this, solo que se pasa manualmente)
    fn add_lap(&mut self, lap: i32) {
        self.laps.push(lap);
    }

    // Acceso compartido y de solo lectura asociado a self

    // METODOS .iter(), .enumerate():
    // El metodo .iter() recorre elementos y el .enumerate() les da un index

    // Aqui tomamos una referencia inmutable, por lo cual solo modemos leer sus datos
    fn print_laps(&self) {
        println!("Se han registrado {} vueltas de {}:", self.laps.len(), self.name);
        for (idx, lap) in self.laps.iter().enumerate() {
            println!("Vuelta {idx}: {lap} s");
        }
    }

    //Propiedad exclusiva de self
    // Aqui consumimos el objecto global, dejando de existir en el scope externo
    // Por lo cual no se podra utilizar despues. (Es como si eliminaramos la informacion de la clase luego 
    // de ejecutar este metodo)
    fn finish(self) {
        let total: i32 = self.laps.iter().sum();
        println!("La carrera {} ha terminado. Duración total de la vuelta: {}.", self.name, total);
    }
}

fn main() {
    let mut race = Race::new("Gran Premio De Monaco");
    race.add_lap(70);
    race.add_lap(68);
    race.print_laps();
    race.add_lap(71);
    race.print_laps();
    race.finish();
    // race.add_lap(42);
}
