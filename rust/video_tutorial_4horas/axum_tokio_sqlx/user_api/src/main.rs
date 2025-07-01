use axum::{Extension, Router, routing::get};
use db::conexion::init_db;
use std::sync::Arc;

use crate::handlers::users;

//Modulos propios a utilziar
mod db;
mod handlers;
mod models;

#[tokio::main]
async fn main() {
    // inicializamos la conexion con la db
    let pool = init_db().await;

    //compartimos el pool
    let shared_pool = Arc::new(pool);

    //Iniciamos el ruteado de la app
    let app = Router::new()
        .route("/users", get(users::getAll))
        .layer(Extension(shared_pool));

    // .post(create_user)

    // TODO: investigar uso de Arc
    // Con Arc y extension, cada handler puede acceder al pool de la db
    // de manera segura en concurrencia

    // inicializamos el servidor
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
