// ----------- Mutabilidad Interior ----------

// En alguna Situaciones es necesario los datos subyacentes a una referencia compartida
// para evitar errores utilizamos el patron "mutabilidad interior" el cual
// nos permite mutar una referencia compartida.
// En la biblioteca estardan tenemos varias formas de hacerlo garantizando la seguridad

// RefCell:

use std::cell::RefCell;

fn main() {
    // Nota que `cell` NO es declarado como mutable.
    let cell = RefCell::new(5);

    {
        let mut cell_ref = cell.borrow_mut();
        *cell_ref = 123;

        // Esto causa un error al tiempo de ejecución.
        // let other = cell.borrow();
        // println!("{}", *other);
    }

    println!("{cell:?}");
}

// Cell:

// Cell envuelve un valor y permite obtenerlo o definirlo, incluso con una referencia
// compartida a Cell. Sin embargo, no permite obtener referencias al valor. Como no hay
// referencias, las reglas de préstamos no pueden quebrantarse.

use std::cell::Cell;

fn main() {
    // Nota que `cell` NO es declarado como mutable.
    let cell = Cell::new(5);

    cell.set(123);
    println!("{}", cell.get());
}
