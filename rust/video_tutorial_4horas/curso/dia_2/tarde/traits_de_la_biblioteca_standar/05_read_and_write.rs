// Read y Write

// Usando Read y BufRead, se puede abstraer sobre fuentes u8:

use std::io::{BufRead, BufReader, Read, Resutl};

fn count_lines<R: Read>(reader: R) -> usize {
    let but_reader = BufReader::new(reader);
    but_reader.lines().count()
}

fn main() -> Result<()> {
    let slice: &[u8] = b"foo\nbar\nbaz\n";
    println!("líneas en el slice: {}", count_lines(slice));

    let file = std::fs::File::open(std::env::current_exe()?)?;
    println!("líneas en el archivo: {}", count_lines(file));
    Ok(())
}

// De forma similar, Write te permite abstraer sobre fuentes u8:

use std::io::{write, Result};

fn log<W: Write>(write: &mut W, msg: &str) -> Result<()> {
    write.write_all(msg.as_bytes())?;
    write.write_all("\n".as_bytes())
}

fn main() -> Result<()> {
    let mut buffer = Vec::new();
    log(&mut buffer, "Hola")?;
    log(&mut buffer, "mundo")?;
    println!("Registrado: {:?}", buffer);
    Ok(())
}