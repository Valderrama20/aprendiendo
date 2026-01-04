// ------------ thiserror y anyhow -------------

// The thiserror and anyhow crates are widely used to simplify error handling.

// "thiserror" se suele usar en bibliotecas para crear tipos de errores personalizados 
// que implementan From<T>.

// Las aplicaciones suelen utilizar "anyhow" para gestionar errores en funciones, como 
// añadir información contextual a los errores.
use anyhow::{bail, Context, Result};
use std::fs;
use std::io::Read;
use thiserror::Error;

#[derive(Clone, Debug, Eq, Error, PartialEq)]
#[error("No se ha encontrado ningún nombre de usuario en {0}")]
struct EmptyUsernameError(String);

fn read_username(path: &str) -> Result<String> {
    let mut username = String::with_capacity(100);
    fs::File::open(path)
        .with_context(|| format!("No se ha podido abrir {path}"))?
        .read_to_string(&mut username)
        .context("No se ha podido leer")?;
    if username.is_empty() {
        bail!(EmptyUsernameError(path.to_string()));
    }
    Ok(username)
}

fn main() {
    //fs::write("config.dat", "").unwrap();
    match read_username("config.dat") {
        Ok(username) => println!("Nombre de usuario: {username}"),
        Err(err) => println!("Error: {err:?}"),
    }
}