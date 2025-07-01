// importacion para trabajar con archivos json
use serde::{Deserialize, Serialize};
use serde_json::Result as jsonResult;
use std::fs;
use std::io::ErrorKind;

// Generamos la implementacion de los traits Serialize y deserialize
// ahora nuestra estructur Task la podemos converitr en json y reconstruir del json
#[derive(Serialize, Deserialize, Debug)]
pub struct Task {
    pub id: u32,
    pub description: String,
    pub completed: bool,
}

// funcion para trabajar con archivos json
pub fn load_task(path: &str) -> jsonResult<Vec<Task>> {
    // 1. Leer el fichero completo en un string
    let data = match fs::read_to_string(path) {
        Ok(data) => data,
        // Este caso se ejecuta si tenemos un error y ese error cumple cierta condicion
        Err(err) if err.kind() == ErrorKind::NotFound => {
            // Si no existe el archivo, devolvemos una lista vacia
            return Ok(Vec::new());
        }
        Err(err) => return Err(serde_json::Error::io(err)),
    };

    // 2. Deserializamos el strin Json a Vec<Task>
    let tasks: Vec<Task> = serde_json::from_str(&data)?;
    Ok(tasks)
}

// funcion para guardar una tarea json
pub fn save_task(path: &str, task: &Vec<Task>) -> jsonResult<()> {
    // 1. Serializar el Vec<Task> a string Json formateado
    let json = serde_json::to_string_pretty(task)?;

    // 2. Escribir el String en el archibo, sobreescribiendo el anterior
    fs::write(path, json).map_err(serde_json::Error::io)
}
