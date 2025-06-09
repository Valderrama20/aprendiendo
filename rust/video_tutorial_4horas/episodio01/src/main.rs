
fn main() {
    let number = 16;
    // println!(
    //     "El resultado del factorial de {number} es: {}",
    //     calcular_factorial(number)
    // )

    println!("el numero {number} es primo: {}", es_primo(number));
}

fn calcular_factorial(number: u128) -> u128 {
    if number == 0 || number == 1 {
        1
    } else {
        let mut result = number;
        // aqui creamos un rango entre cero y el numero indicado
        // y luego lo invertimos
        for i in (1..number).rev() {
            result *= i;
        }
        result
    }
}

fn es_primo(number: u128) -> bool {
    let mut es_primo: bool = true;

    // Utilizando as podemos cambiar el tipo de una variable
    let num = number as f64;
    if number > 1 {
        for i in 2..=(num.sqrt() as i128) {
            if (number as i128) % i == 0 {
                es_primo = false;
                break;
            }
        }
    }

    es_primo
}

// /// Variables
// fn prueba_inmutabilidad() {
//     // las variables en rust en realidad solo se pueden modificar si nosotros lo indicamos
//     // para poder cambiar el valor de una variable let tenemos que agregar mut antes del nombre, ejemplo:

//     let mut x = 8;
//     println!("El valor de x es {}", x);
//     x = 3;
//     println!(
//         "Esta linea solo se ejecuta su x es mutable, valor de x {}",
//         x
//     );
// }

// // Constantes

// // En rust las constantes de declaran con const, a diferencia de las variables
// // en una constante siempre es necesario indicar su tipo y es recomendable que su
// // nombre sea en mayusculas con convencion

// const ESTA_ES_UNA_CONSTANTE: i32 = 20;

// // Ejemplos shadowing

// // En rust el shadowing es hacerle sombra a una variable
// // Uno creeria que se sobre escribe pero no es asi
// // ya que cuando la variable que hace sobra sale del scope, el valor original vuelve

// fn shadowing() {
//     let x = 1;
//     let x = x + 23;
//     let x = x - 23 / 23;
//     println!("El resultado de x es {}", x)
// }

// // Tipos de datos en rust

// fn scalares() {
//     // Enteros

//     // En rust tenemos los numeros firmados y sin firmar
//     // Los numeros firmados tienen signo, lo que significa que puede contener numero nagativos (i)
//     // y los que no son firmados no tiene signo, por lo cual siempre seran positivos (u)

//     let ocho_bits: i8 = 20;
//     let diezseis_bits: i16 = 20;
//     let tresdos_bits: u32 = 20;
//     let seiscuatro_bits: u64 = 20;
//     let unodosocho_bits: i128 = 20;

//     // floats

//     let float_tresdos: f32 = 1.0;
//     let float_dato = float_tresdos + 2.0;

//     // booleanos

//     let variable: bool = true;

//     // charateres

//     // Hay que tener en cuenta que lo caracteres individuales van con comilla simple
//     let my_chart: char = 'a';
// }

// // Tipos compuestos

// fn compound() {
//     // Tuplas

//     // Si queremos acceder a la tupla, podemos hacerlo como si fuese un arr
//     // con el indes, ejemplo: tup.0

//     let tup: (i8, f64, char) = (20, 3.4, '1');

//     //Arrays

//     // Al tipar un arr tenemos que indicar el tipo de datos y el largo que va a tener
//     // [type; length]

//     let arr: [i32; 4] = [20, 12, 12, 27];

//     // Para acceder a un elemento del arr utilizamos su index

//     let val = arr[0];
//     //let val2 = arr[4]; // Esto esplota al compilar ya que el index 4 no existe

//     // Bucles

//     // Em rust tenemos tres tipos de bluces (for while, loop)

//     // for

//     for i in arr.iter() {
//         println!("Elemento del arr {i}");
//     }

//     // while

//     // Este bucle se ejecuta siempre y cuando se cumpla una condicion
//     let mut ent = 10;
//     while ent > 0 {
//         ent -= 1;
//         println!("Cuenta atras {ent}")
//     }

//     // loop

//     // Este bucle se ejecutara hasta econtrar a un break

//     let mut ent2 = 0;
//     loop {
//         if ent2 >= 10 {
//             break;
//         }
//         ent2 += 2;
//         println!("cuenta hasta 10: {ent2}");
//     }
// }
