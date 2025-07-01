// ---------- Tipos personalizados ----------

// Los tipos de datos personalizados de rust se se forman principalmente
// a traves  de dos palabras claves

// - struct: Definir una estructura
// - enum: Definir una enumeracion

// También se pueden crear constantes a través de las palabras clave const y static

// -------- Structuras ---------

// Existen tres tipos de estructuras que podemos crear utilziando la palabra
// clave "struct"

// - El clasico Estructuras C
// - Estructuras unitarias que no tienen campo
// - Tuplas

// An attribute to hide warnings for unused code.
#![allow(dead_code)]

#[derive(Debug)]
struct Person {
    name: String,
    age: u8,
}

// A unit struct
struct Unit;

// A tuple struct
struct Pair(i32, f32);

// A struct with two fields
#[derive(Debug)]
struct Point {
    x: f32,
    y: f32,
}

// Structs can be reused as fields of another struct
#[derive(Debug)]
struct Rectangle {
    // A rectangle can be specified by where the top left and bottom right
    // corners are in space.
    top_left: Point,
    bottom_right: Point,
}

fn main() {
    // Create struct with field init shorthand
    let name = String::from("Peter");
    let age = 27;
    let peter = Person { name, age };

    // Print debug struct
    println!("{:?}", peter);

    // Instantiate a `Point`
    let point: Point = Point { x: 5.2, y: 0.4 };
    let another_point: Point = Point { x: 10.3, y: 0.2 };

    // Access the fields of the point
    println!("point coordinates: ({}, {})", point.x, point.y);

    // Make a new point by using struct update syntax to use the fields of our
    // other one
    let bottom_right = Point {
        x: 10.3,
        ..another_point
    };

    // `bottom_right.y` will be the same as `another_point.y` because we used that field
    // from `another_point`
    println!("second point: ({}, {})", bottom_right.x, bottom_right.y);

    // Destructure the point using a `let` binding
    let Point {
        x: left_edge,
        y: top_edge,
    } = point;

    let _rectangle = Rectangle {
        // struct instantiation is an expression too
        top_left: Point {
            x: left_edge,
            y: top_edge,
        },
        bottom_right: bottom_right,
    };

    // Instantiate a unit struct
    let _unit = Unit;

    // Instantiate a tuple struct
    let pair = Pair(1, 0.1);

    // Access the fields of a tuple struct
    println!("pair contains {:?} and {:?}", pair.0, pair.1);

    // Destructure a tuple struct
    let Pair(integer, decimal) = pair;

    println!("pair contains {:?} and {:?}", integer, decimal);

    rect_area(_rectangle);
    println!("Dimensiones del rectangulo: {:?}", square(point, 1.5));
}

// 1- Agregar una función rect_area que calcula el área de a Rectangle
// (intentar utilizando desestructuración anidada).

fn rect_area(rectangle: Rectangle) {
    // Destructuramos la informacion a utilziar
    let Rectangle {
        top_left: Point { x, y },
        bottom_right: Point { x: x2, y: y2 },
    } = rectangle;

    // calculamos el alto y ancho del rectangulo
    let height = (y - y2).abs();
    let width = (x - x2).abs();

    // mostramos el area del rectangulo
    println!("El area del rectangulo es: {}", height * width);
}

// 2- Agregar una función square que requiere una Point y un f32 como argumentos,
// y devuelve un Rectangle con su esquina superior izquierda en la punta, y
// un ancho y altura correspondiente a la f32.

fn square(point: Point, number: f32) -> Rectangle {

    let height = point.y - number;
    let width = point.x - number;
    Rectangle {
        top_left: point,
        bottom_right: Point {
            x: width,
            y: height,
        },
    }
}
