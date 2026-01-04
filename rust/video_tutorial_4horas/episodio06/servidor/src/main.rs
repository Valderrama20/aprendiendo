extern crate diesel;
use actix_web::web::get;
use actix_web::{App, HttpResponse, HttpServer, Responder, get, post, web};
use diesel::connection;
// Conexion a la base de datos
use diesel::pg::PgConnection;
// modulo para usar las variables de entorno
use dotenvy::dotenv;
// modulo para soportar json
use serde_json::json;
// modulo para poder localizar el archivo .env
use std::env;
//  manejar la conexiones a la base de datos
use diesel::r2d2::ConnectionManager;
use diesel::r2d2::{self, Pool};

// utilizamos el modulo de los modelos
use crate::models::model_car_to_repair::{CarToRepairModel, NewCarHandler};
mod models;
mod schema;
mod api;
// Nosotros podemos crear sevicios o rutas

// Para crear un servicio hacemos el uso de
#[get("/")] // indicamos la ruta simpre arriba, junto al metodo
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello World")
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

// Si queremos una ruta, solo creamos la funcion y se utiliza abajo
async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey There")
}



// Al crear un servidor con actix, es importante indicar que ahora el main
// es del tipo actix

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // cargamos las variables de entorno
    dotenv().ok();

    // conexion a la db
    // obtenemos la variable de entorno
    let database_url = env::var("DATABASE_URL").expect("No se encontro la url de conexion a la db");
    // creamos la conexion a la db
    let connection = ConnectionManager::<PgConnection>::new(database_url);
    // establecemos el pool de conexion
    let pool = Pool::builder()
        .build(connection)
        .expect("Error al conectar la db");

    // De esta forma creamos un servidor y agrematos los endpoins
    // ya sea utilizando servicios o rutas
    // luego se lista
    // y ejecuta
    HttpServer::new(move || {
        App::new()
            .service(hello)
            .service(echo)
            .service(api::car_to_repair_api::new_car_to_repair)
            .service(api::car_to_repair_api::get_cars_to_repair)
            .route("/hey", web::get().to(manual_hello))
            // de esta forma injectamos la conexion a la db en todo la app
            .app_data(web::Data::new(pool.clone()))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
