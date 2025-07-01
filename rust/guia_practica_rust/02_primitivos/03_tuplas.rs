// importamos la libreria de fmt para formatear
use std::fmt::{Display, Formatter, Result};

// ----- tuplas -----

// Una tupla es una coleccion de valores de diferentes tipos,
// se construye una tupla utilzando parenseis y pueden contener un sin fin de valores

// Tuples can be used as function arguments and as return values.
fn reverse(pair: (i32, bool)) -> (bool, i32) {
    // `let` can be used to bind the members of a tuple to variables.
    let (int_param, bool_param) = pair;

    (bool_param, int_param)
}

// The following struct is for the activity.
#[derive(Debug)]
struct Matrix(f32, f32, f32, f32);

fn main() {
    // A tuple with a bunch of different types.
    let long_tuple = (
        1u8, 2u16, 3u32, 4u64, -1i8, -2i16, -3i32, -4i64, 0.1f32, 0.2f64, 'a', true,
    );

    // Values can be extracted from the tuple using tuple indexing.
    println!("Long tuple first value: {}", long_tuple.0);
    println!("Long tuple second value: {}", long_tuple.1);

    // Tuples can be tuple members.
    let tuple_of_tuples = ((1u8, 2u16, 2u32), (4u64, -1i8), -2i16);

    // Tuples are printable.
    println!("tuple of tuples: {:?}", tuple_of_tuples);

    // But long Tuples (more than 12 elements) cannot be printed.
    //let too_long_tuple = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
    //println!("Too long tuple: {:?}", too_long_tuple);
    // TODO ^ Uncomment the above 2 lines to see the compiler error

    let pair = (1, true);
    println!("Pair is {:?}", pair);

    println!("The reversed pair is {:?}", reverse(pair));

    // To create one element tuples, the comma is required to tell them apart
    // from a literal surrounded by parentheses.
    println!("One element tuple: {:?}", (5u32,));
    println!("Just an integer: {:?}", (5u32));

    // Tuples can be destructured to create bindings.
    let tuple = (1, "hello", 4.5, true);

    let (a, b, c, d) = tuple;
    println!("{:?}, {:?}, {:?}, {:?}", a, b, c, d);

    let matrix = Matrix(1.1, 1.2, 2.1, 2.2);
    println!("{:?}", matrix);
    println!("{}", matrix);

    println!("Transpose:\n{}", transpose(matrix));
}

// Actividas:

// 1. Resumen: Agrega el fmt::Display rasgo a la Matrix estructura en lo anterior ejemplo,
// para que si pasa de imprimir el formato de depuración {:?} a la formato de
// visualización {}, ves el siguiente resultado:

// ( 1.1 1.2 )
// ( 2.1 2.2 )

impl Display for Matrix {
    fn fmt(&self, f: &mut Formatter) -> Result {
        writeln!(f, "( {} {} )", self.0, self.1)?;
        write!(f, "( {} {} )", self.2, self.3)
    }
    
}

// 2. Añadir un transpose función que utiliza el reverse funciona como una plantilla,
// que acepta una matriz como argumento y devuelve una matriz en la que dos elementos
// han sido intercambiados. Por ejemplo:

// println!("Matrix:\n{}", matrix);
// println!("Transpose:\n{}", transpose(matrix));

// Resultados en la salida:

fn transpose(Matrix(e1, e2, e3, e4): Matrix) -> Matrix {
    Matrix(e1, e3, e2, e4)
}

// Matrix:
// ( 1.1 1.2 )
// ( 2.1 2.2 )
// Transpose:
// ( 1.1 2.1 )
// ( 1.2 2.2 )
