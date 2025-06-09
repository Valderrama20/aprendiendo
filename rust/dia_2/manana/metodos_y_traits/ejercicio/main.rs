use std::fmt::Display;

pub trait Logger {
    /// Registra un mensaje con el nivel de verbosidad dterminada
    fn log(&self, verbosity: u8, message: impl Display);
}

struct StderrLogger;

// Implementamos Logger en StderrLogger
impl Logger for StderrLogger {
    fn log(&self, verbosity: u8, message: impl Display) {
        eprintln!("verbosidad={verbosity}: {message}");
    }
}

// Esta funcion acepta cualquie implementacion de Logger
fn do_things(logger: &impl Logger) {
    logger.log(5, "Para tu informacion");
    logger.log(2, "oh, oh");
}

// TAREA: Define e implementa `VerbosityFilter`.

// Creamos la estructura para el filtro de verbosida
struct VerbosityFilter {
    max_verbosity: u8,
    inner: StderrLogger,
}

// implementamos el Logger en VerbosityFilter delegando la impresion de los datos luego de hacer una verificacion
impl Logger for VerbosityFilter {
    fn log(&self, verbosity: u8, msg: impl Display) {
        if self.max_verbosity >= verbosity {
            self.inner.log(verbosity, msg);
        }
    }
}

fn main() {
    let l = VerbosityFilter {
        max_verbosity: 3,
        inner: StderrLogger,
    };
    do_things(&l);
}
