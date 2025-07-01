use actix_web::{post, get, web, HttpResponse, Responder};
use diesel::{r2d2::{self, ConnectionManager}, PgConnection};
use serde_json::json;

use crate::models::model_car_to_repair::{NewCarHandler, CarToRepairModel};

// Ruta para crear un nuevo carro a reparar

#[post("/api/cartorepair/newcar")]
async fn new_car_to_repair(
    pool: web::Data<r2d2::Pool<ConnectionManager<PgConnection>>>,
    item: web::Json<NewCarHandler>,
) -> impl Responder {
    let mut conn = pool.get().expect("Problemas al obtener la conexion");
    match web::block(move || CarToRepairModel::add_car_to_repair(&mut conn, &item)).await {
        Ok(data) => {
            let data = data.unwrap();
            HttpResponse::Ok().json(json!(data))
        }
        Err(err) => HttpResponse::Ok().body(err.to_string()),
    }
}

// Ruta para obtener todos los carros a reparar

#[get("/api/cartorepair/getcars")]
async fn get_cars_to_repair(
    pool: web::Data<r2d2::Pool<ConnectionManager<PgConnection>>>,
) -> impl Responder {
    let mut conn = pool.get().expect("Problemas al obtener la conexion");
    match web::block(move || CarToRepairModel::get_cars(&mut conn)).await {
        Ok(data) => {
            let data = data.unwrap();
            HttpResponse::Ok().json(json!(data))
        }
        Err(err) => HttpResponse::Ok().body(err.to_string()),
    }
}