// Genericos

// En rust al igual que ts tenemos los genericos
// estos son tipos los cuales de adaptan al tipo de dato
// que le ingrese el usuario

// Funciones sin tipos genericos
// Aqui el problema es que si queremos replicar un comportamiento
// tendriamos que replicar la funcion para cada tipo de dato

// Funcion que obtiene el elemento del medio de un arr
fn middle_element_char(list: &[char]) -> char {
    list[list.len() / 2]
}

fn middle_element_int(list: &[i64]) -> i64 {
    list[list.len() / 2]
}

// Funciones con tipos genericos
// El proble anterior lo resolvemos de la siguiente forma

fn middle_element<T: Copy>(list: &[T]) -> T {
    list[list.len() / 2]
}

// Tambien podemos usar los genericos en estructuras

struct Plano<T> {
    x: T,
    y: T,
}

// agregamos metodos
impl<T> Plano<T> {
    fn x(&self) -> &T {
        &self.x
    }
    fn y(&self) -> &T {
        &self.y
    }
}

// Tambien lo podemos utilizar con enums

enum Option<T> {
    Some(T),
    None,
}

// Traits

// Los traits en rust son como las interfaces en ts
// nos sirven para indicar como debe ser una clase
// pero no es una implementacion
// los traits tambien pueden tener metodos implementados
// como si fueran clases abstractas
// Sus nombres son en UpperCalmelCase

pub trait PrettyPrint {
    fn pretty_print(&self) -> String;
}

// Implementaciones

// para implementar un trait necesitamos un estructura
#[derive(Debug)]
pub struct Suscriptor {
    pub nombre: String,
}

// Y de la siguiente forma implementamos un trait

impl PrettyPrint for Suscriptor {
    fn pretty_print(&self) -> String {
        format!("El suscriptor se llama {}", self.nombre)
    }
}

fn main() {
    let suscriptor1 = Suscriptor {
        nombre: "Jose".to_owned(),
    };

    print!("{}", suscriptor1.pretty_print());
}

// Tambien podemos indicar que queremos un dato que implemente un
// trait especifica

fn middle_element2<T: Copy + PrettyPrint>(list: &[T]) -> T {
    list[list.len() / 2]
}

// Y si tenemos muchas trait que queremos implementar podemos utilizar el where
// para mayor legibilidad

fn where_middle_element2<T, U>(t: &[T], u: &[U]) -> (T, U)
where
    T: Copy + PrettyPrint,
    U: Copy + PrettyPrint,
{
    (t[0], u[0])
}
