// Concurrencia

// Un programa concurrente es aquel que no se bloquea
// con una sola tarea
// Estos enviar las tareas y esperan a que se resuelvan
// pero en el trascurso de es espera pueden enviar otras tareas sin problemas

// Paralelo

// Un programa paralelo es aquel que utiliza los diferentes hilos o nucles de un procesador
// para ejecutar una tarea

// use std::thread;
// use std::time::Duration;

// fn main() {
//     let handle = thread::spawn(|| {
//         for i in 1..10 {
//             println!("Este es el hilo {i} de los hilos paralelos");
//             thread::sleep(Duration::from_millis(1));
//         }
//     });

//     for i in 1..5 {
//         println!("Este es numero {i} del hilo principal");
//         thread::sleep(Duration::from_millis(1));
//     }

//     handle.join().unwrap();
// }


// use std::sync::mpsc;
// use std::thread;

// fn main () {
//     let (tx, rx) = mpsc::channel();

//     thread::spawn(move || {
//         let val = String::from("Hola");
//         tx.send(val).unwrap();
//     });

//     let received = rx.recv().unwrap();
//     println!("Got: {received}");
// }


// use std::sync::mpsc;
// use std::thread;
// use std::time::Duration;

// fn main (){
//     let (tx, rx) = mpsc::channel();

//     thread::spawn(move || {
//         let vals = vec![
//             String::from("hi"),
//             String::from("from"),
//             String::from("the"),
//             String::from("thread"),
//         ];

//         for val in vals {
//             tx.send(val).unwrap();
//             thread::sleep(Duration::from_secs(1));
//         }
//     });

//     for received in rx {
//         println!("Got: {received}");
//     }


// }

// Multiples transmitters

use std::sync::mpsc;
use std::thread;
use std::time::Duration;

fn main (){
    let (tx, rx) = mpsc::channel();
    
    let tx1 = tx.clone();
    thread::spawn(move || {
        let vals = vec![
            String::from("hi"),
            String::from("from"),
            String::from("the"),
            String::from("thread"),
        ];

        for val in vals {
            tx1.send(val).unwrap();
            thread::sleep(Duration::from_secs(1));
        }
    });

    thread::spawn(move || {
        let vals = vec![
            String::from("Don"),
            String::from("Pepe"),
            String::from("Como"),
            String::from("Esta"),
        ];

        for val in vals {
            tx.send(val).unwrap();
            thread::sleep(Duration::from_secs(1));
        }
    });

    for received in rx {
        println!("Got: {received}");
    }


}