// con el trait Debug le indicamos al compulador que a la hora
// de mostrar ua structura, la muestre correctamente
#[derive(Debug)]

// Una estructura es un tipo personalizado, y en pocas palabras
// definimos como va a estar la informacion de adentro

// las estructura por convencion tenemos que llamarlar en Upper Calmecase
struct SuscriptorDeStanTech {
    es_inteligente: bool,
    nombre: String,
    beautiful: bool,
}

// De esta forma podemos contruir un objeto utilizando una estructura

// fn se_suscribe(nuevo_suscriptor: String) -> SuscriptorDeStanTech {
//     SuscriptorDeStanTech {
//         es_inteligente: true,
//         nombre: nuevo_suscriptor,
//         beautiful: true,
//     }
// }

// Al crear un nuevo objeto, si el parametro se llama igual que el creado en la
// Estructura, se puede pasar asi mismo

fn se_suscribe(nombre: String) -> SuscriptorDeStanTech {
    SuscriptorDeStanTech {
        es_inteligente: true,
        nombre,
        beautiful: true,
    }
}

// En rust tambien podemos asociar funciones a una structura
// en pocas palabras es como agregar metodos a una clase

// En estas implementaciones tenemos dos tipos de funcions
// funciones desasociadas las cuales requiere de una instancias (creacion del objeto)
// para ser utilizadas
// y las asociadas las cuales no requiere una instancia del objecto (son como metodos staticos, ejemplo: un constructor)

impl SuscriptorDeStanTech {
    // En las funciones desasociadas siempre vamos a tener el self
    // el cual hace una referencia al objecto (Igual al this de las clases en ts)
    // para acceder a esta funciona utilizamos "."
    fn se_desuscribe(&mut self, nuevo_nombre: String) {
        self.nombre = nuevo_nombre;
        self.beautiful = false;
        self.es_inteligente = false;
    }

    // En las funciones asociadas no tenenemos el self,
    // por lo cual es un metodo estatico el cual se puede utilzar sin una instancia
    // estas funciones puden ser un constructor y la utilizamos con "::"
    fn new_sub(nuevo_suscriptor: String) -> SuscriptorDeStanTech {
        SuscriptorDeStanTech {
            es_inteligente: true,
            nombre: nuevo_suscriptor,
            beautiful: true,
        }
    }
}

//Custom lifetime
// Cuando los valores de una estructura no pertenecen a ella
// tenemos que utilziar Custom lifetime para asegurar que esos
// valores vivan mientras la estructura viva

// struct User<'a> {
//     username: &'a str,
//     email: &'a str,
//     sing_in_count: u64,
//     active: bool,
// }

// Tambien tenemos estructura que serian una tubla
// a estas estructuras podemos acceder con el index del elemento
// ejemplo: tupla.0
struct RGBColor(i32, i32, i32);

fn main() {
    let nuevo_sub = se_suscribe(String::from("Jose"));

    // Al crear una estructura tambien podemos destructurar otrar
    // y se copiaran todos los valor de la anterior que yo no escriba
    let mut segundo_sub = SuscriptorDeStanTech {
        nombre: String::from("jose2"),
        ..nuevo_sub
    };

    // De esta forma podemos acceder a las funciones desasociadas
    segundo_sub.se_desuscribe(String::from("Desterrado"));

    // De esta forma accedemos a una funcion asociada
    let hola = SuscriptorDeStanTech::new_sub(String::from("Usuario dos"));

    // De esta forma creamos una estructura de tupla
    let rgb = RGBColor(233, 233, 233);

    println!("{}", rgb.0);
    // si no tenemos del #[derive(Debug)] no podemos mostrar la estructura
    println!("{:?}", segundo_sub);

    // TYPE Option<>:
    // Ya que en rust no tenemos null, tenemos que utilizar
    // el tipo Option<>, el cual devuelve Some(valor) o None

    let fav_num: Option<i8> = None;
    // Nosotos para poder utilizar su valor, tenemos que sacarlo
    // de su envoltorio
    // Para eso podemos utilizar el metodo .unwrap()
    // Esto no es muy recomendado porque que si llega a devolver None
    // rompe toda nuestra app

    //let x = a + fav_num.unwrap()

    // Para evitar estos problemas, podemos utilizar match
    // la cual verifica un patron de coincidencias y
    // hace una accion dependiendo del valor devuelto
    // y de esta forma podemos trabajr con el valor sin posibles errores

    // en el match tenemos un valor por defecto y el es _ =>
    // Este lo podemos utilizar cuando no queremos evaluar todos los casos
    // match fav_num {
    //     Some(value) => println!("Este es el numero favorito {value}"),
    //     None => println!("No hay ningun valor"),
    // }

    // Ademas del match, tambien tenemos if let,
    // el cual podemos utilizar para casos mas simples
    
    // Aqui estamos destructurandi el valor de fav_num
    // para poder trabajar con el
    if let Some(i) = fav_num {
        println!("Este es el tamano de tu nombre: {}", i);
    } else {
        println!("no hay nigun valor")
    }

    // TYPE Result<value, err>

    // Tambien existe el tipo Result<>, este devuelve un Err()
    // y Ok para operaciones correctamente

    let mut name = String::new();
    let size = std::io::stdin().read_line(&mut name);
    match size {
        Ok(value) => {
            println!("Este es el tamano de tu nombre: {}", value);
        }
        Err(_) => println!("Error"),
    }
}
