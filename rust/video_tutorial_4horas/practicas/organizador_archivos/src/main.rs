use clap::Parser; // Dependencias para crear nuestro CLI

use log::debug;
// crates para recorrer las carpetas
use ::mime_guess::mime;
use std::io;
use std::{fs, path};
use walkdir::WalkDir;

// inicializamos el cli y creamos nuestros comandos
#[derive(Parser)]
#[command(name = "organizador-archivos")]
#[command(about = "Clasifica y mueve ficheros segun su tipo", long_about = None)]
struct Cli {
    /// ruta del directorio que queremos organizar
    origin: String,

    /// Carpetas donde dejas las subcarpetas (por defecto, misma que origen)
    #[arg(short, long)]
    destination: Option<String>,

    /// No mueve nada, solo muestra que haria
    #[arg(long)]
    dry_run: bool,

    /// Muestra logs mas detallados
    #[arg(short, long)]
    verbose: bool,
}

fn main() -> io::Result<()> {
    // parseamos los argumentos de cli
    let cli = Cli::parse();

    // inicializamos el logger si se pidio
    if cli.verbose {
        env_logger::builder()
            .filter_level(log::LevelFilter::Debug)
            .init();
    }

    // obtenemos la direccion de origen
    let src = path::PathBuf::from(&cli.origin);

    // obtenemos la direccion de destino
    let dst = cli
        .destination
        .map(path::PathBuf::from)
        .unwrap_or_else(|| src.clone());

    // recorremos las carpetas
    for entry in WalkDir::new(&src).into_iter().filter_map(|e| e.ok()) {
        let path = entry.path();

        // saltamos carpetas ya que filtramos solo archivos
        if path.is_dir() {
            debug!("Saltando carpeta: {:?}", path);
            continue;
        }

        // procesamos cada archivo

        // obtenemos la extension del archivo
        let ext = path
            .extension()
            .and_then(|e| e.to_str())
            .unwrap_or("")
            .to_lowercase();

        let mime = mime_guess::from_ext(&ext).first_or_octet_stream();
        debug!(
            "Archivo {:?} tiene extensión '{}' y MIME {:?}",
            path, ext, mime
        );

        // obtenemos la categoria del archivo
        let category = category_for(&mime);

        // creamos la nuevas rutas y nombres
        let mut target_dir = dst.join(category);
        let file_name = path.file_name().unwrap();
        target_dir.push(file_name);

        // En dry-run, solo imprimimos
        if cli.dry_run {
            println!("(Dry) mover {:?} -> {:?}", path, target_dir);
        } else {
            // creamos la carpeta si no existe
            fs::create_dir_all(target_dir.parent().unwrap())?;

            // movemos/renombramos el archivo
            fs::rename(path, &target_dir)?;
            println!("Movido {:?} → {:?}", path, target_dir)
        }
    }

    Ok(())
}

/// funcion para indicar el tipo de archivo
fn category_for(mime: &mime::Mime) -> &'static str {
    match mime.type_() {
        mime::IMAGE => "Images",
        mime::VIDEO => "Videos",
        mime::AUDIO => "Audio",
        mime::TEXT => "Documents",
        _ => "Others",
    }
}
