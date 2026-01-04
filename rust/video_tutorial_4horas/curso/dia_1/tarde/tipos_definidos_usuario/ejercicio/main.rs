////// Ejercicio: eventos de ascensor ///////

// Crearemos una estructura de datos para representar un evento en un sistema de control de ascensores.
// Debes definir los tipos y las funciones para crear varios eventos. Usa #[derive(Debug)] para permitir
//  que se aplique el formato {:?} a los tipos.

// Para hacer este ejercicio solo es necesario crear y rellenar estructuras de datos de forma que main
// se ejecute sin errores. En la siguiente parte del curso veremos cómo extraer datos de estas estructuras.

#[derive(Debug)]
/// Un evento en el sistema de ascensores al que debe reaccionar el controlador.
enum Event {
    // TAREAS: añadir variantes obligatorias
    CardDoorOpened,
    CardDoorClosed,
    ButtonPressed(Button),
    CartArrived(Floor),
}

// Una planta que representa un numero entero
type Floor = i32;

/// Un sentido de la marcha.
#[derive(Debug)]
enum Direction {
    Up,
    Down,
}

#[derive(Debug)]
/// Un botón accesible para el usuario.
enum Button {
    /// Un botón para el ascensor en la planta indicada.
    LobbyCall(Direction, Floor),

    /// Un botón de planta de la cabina del ascensor.
    CarFloor(Floor),
}

/// El ascensor ha llegado a la planta indicada.
fn car_arrived(floor: i32) -> Event {
    Event::CartArrived(floor)
}

/// Las puertas del ascensor se han abierto.
fn car_door_opened() -> Event {
    Event::CardDoorOpened
}

/// Las puertas del ascensor se han cerrado.
fn car_door_closed() -> Event {
    Event::CardDoorClosed
}

/// Se ha pulsado el botón direccional de un ascensor en la planta indicada.
fn lobby_call_button_pressed(floor: i32, dir: Direction) -> Event {
    Event::ButtonPressed(Button::LobbyCall(dir, floor))
}

/// Se ha pulsado el botón de una planta en el ascensor.
fn car_floor_button_pressed(floor: i32) -> Event {
    Event::ButtonPressed(Button::CarFloor(floor))
}

fn main() {
    println!(
        "Un pasajero de la planta baja ha pulsado el botón para ir hacia arriba: {:?}",
        lobby_call_button_pressed(0, Direction::Up)
    );
    println!(
        "El ascensor ha llegado a la planta baja: {:?}",
        car_arrived(0)
    );
    println!(
        "Las puertas del ascensor se han abierto: {:?}",
        car_door_opened()
    );
    println!(
        "Un pasajero ha pulsado el botón de la tercera planta: {:?}",
        car_floor_button_pressed(3)
    );
    println!(
        "Las puertas del ascensor se han cerrado: {:?}",
        car_door_closed()
    );
    println!(
        "El ascensor ha llegado a la tercera planta: {:?}",
        car_arrived(3)
    );
}
