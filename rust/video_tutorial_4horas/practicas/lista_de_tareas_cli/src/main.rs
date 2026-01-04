mod lib;

use clap::{Parser, Subcommand};
use lib::task_storage::{Task, load_task, save_task};

/// Gestor de tares simples en rust
#[derive(Parser)]
#[command(name = "todo-list")]
#[command(about = "Una CLI parqa gestionar tus tareas", long_about = None)]
struct Cli {
    /// Subcomandos a ejecutar
    #[command(subcommand)]
    command: Commands,
}

/// Definimos los subcomandos disponibles
#[derive(Subcommand)]
enum Commands {
    /// Agregamos una nueva tarea
    Add {
        /// Texto descriptivo de la tarea
        description: String,
    },
    /// Lista todas las tareas
    List {
        /// Solo tareas completadas
        #[arg(long)]
        completed: bool,
        /// Solo tareas pendientes
        #[arg(long)]
        pending: bool,
    },
    /// Marca una tarea como completada
    Done {
        /// Id de la tarea a marcar
        id: u32,
    },
    /// Elimina una tarea
    Remove {
        /// id de la tarea a eliminar
        id: u32,
    },
}

fn main() {
    // Parseamos la liena de comando a nuestra estructura
    let cli = Cli::parse();

    // Ruta fija para el json, lo podemos hacer configurable
    let path = "task.json";

    // 1. Cargamos todas las tareas
    let mut tasks = load_task(path).unwrap();

    // Utilizamos un match para saber que saber que sub comando recibimos
    match &cli.command {
        // Si el comando es Add{}, agregamos un nueva tarea
        Commands::Add { description } => {
            // Obtenemos el id de la proxima tarea

            // Es importante tener en cuenta que metodo utilizar para desempaquetar el resultado
            // ya que si utilizamos .unwrap o .expect
            // al tener un error, se detiene el programa
            let next_id = tasks.iter().map(|t| t.id).max().unwrap_or(0) + 1;

            // Agregamos una nueva tarea a nuestro vector de task
            tasks.push(Task {
                id: next_id,
                description: description.to_string(),
                completed: false,
            });

            // guardamos el vector de task en el json
            save_task(path, &tasks).unwrap();

            // le indicamos a usuario que todo fue correctamente
            println!("Tarea añadida con ID {}", next_id);
        }
        Commands::List { completed, pending } => {
            // Recorremos el vector de tareas
            for task in &tasks {
                // si completed es true y mi tarea tiene al campo completed en true, se muestra
                // si pending es true y mi tarea tiene el campo completed en false, se muestra
                // si no completed y pending estan en false, muestro todo los elementos
                if (*completed && task.completed)
                    || (*pending && !task.completed)
                    || (!*completed && !*pending)
                {
                    // Creamos un string para mostras si esta completada o no
                    let status = if task.completed { "[x]" } else { "[]" };

                    // Mostramos la tareas
                    println!("{} {}: {}", status, task.id, task.description);
                }
            }
        }
        Commands::Done { id } => {
            // recorremos el vector de task y buscamos alguna tarea que coincida con el id indicado
            // si encontramos la tarea, marcamos como true su campo completed
            // METODO .iter_mut(): Recorre el vector, devolciendo una referencia mutable
            // METODO .find() busca un elemento dentro de un vecto y devuelve dentro de un Option<> con el resultado
            if let Some(task) = tasks.iter_mut().find(|task| task.id == *id) {
                task.completed = true;
                match save_task(path, &tasks) {
                    Ok(_) => println!("Tarea {} completada correctamente", { *id }),
                    Err(_) => println!("Error al completar la tarea"),
                }
            } else {
                println!("Tarea no encontrada")
            }
        }
        Commands::Remove { id } => {
            // obtenemos el largo original del vector
            let original_len = tasks.len();

            // intentamos eliminar el elemento del vector con el id indicado
            // METODO .retain(): recorre y elimina elemento de un vector (filter)
            tasks.retain(|task| task.id != *id);

            // Verificamos si se elimino algo
            if tasks.len() != original_len {
                // guardamos el nuevo arr
                save_task(path, &tasks).expect("Error al elimianr la tarea");

                // Le indicamos al usuario que se elimino correctamente
                println!("Se elimino la tarea con ID: {}", id);
            } else {
                println!("No se econtro la tarea con ID: {}", id);
            }
        }
    }
}
