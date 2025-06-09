use std::fs::File;

fn bad_index() {
    let vector = vec![0, 1, 2];
    vector[4]; //Va a tirar error ya que el index 4 no existe
    panic!("Nunca me voy a ejecutar");
}

// De la siguiente forma podemos gestionar lo errors

fn open_unexisting_file() {
    // Open devuelve un result con Ok(value) o Err(Error)
    let f = File::open("no_existo.txt");

    // Utilizamos el match para gestionar los errores
    let f = match f {
        Ok(file) => file,
        Err(Error) => {
            // Tambien podemos propagar errores utilizanod el "?" luego de la funcion que puede romper
            panic!("El archivo no existe"); // Si queremos propagar errores podemos devolver Err(e)
        }
    };
}
