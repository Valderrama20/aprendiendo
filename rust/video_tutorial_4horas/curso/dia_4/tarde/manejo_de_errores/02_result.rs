// ---- Result ----

// Para manejar errors en Rust utilizamos normalmente
// el enum result

use std::fs::File;
use std::io::Read;

fn main() {
    let file: Result<File, std::io::Error> = File::open("diary.txt");
    match file {
        Ok(mut file) => {
            let mut contents = String::new();
            if let Ok(bytes) = file.read_to_string(&mut contents) {
                println!("Querido diario: {contents} ({bytes} bytes)");
            } else {
                println!("No se ha podido leer el contenido del archivo");
            }
        }
        Err(err) => {
            println!("No se ha podido abrir el diario: {err}");
        }
    }
}
