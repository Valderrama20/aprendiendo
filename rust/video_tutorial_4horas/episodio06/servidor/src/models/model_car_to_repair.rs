// Primero importamos los modelos del schema
use super::super::schema::CarToRepair;
use super::super::schema::CarToRepair::dsl::*;
use chrono::{DateTime, NaiveDateTime, TimeZone, Utc};
use diesel::prelude::*;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

// Ahora los modelos

// Estos modelos son los que vamos a utilizar
// para intruducir informacion a la db

// Lo Utilizamos insertar el cual indica que sera el modelo utilizado
// para insertar en la db
#[derive(Insertable, Debug)]
// Aqui indicamos a que tabla se va a insertar
#[diesel(table_name = CarToRepair)]

// Definimos la structura a utilizar con custom life time
pub struct NewCarToRepair<'a> {
    pub id: &'a Uuid,
    pub modelo: &'a String,
    pub fecha_entrada: &'a DateTime<Utc>,
    pub fecha_salida: &'a DateTime<Utc>,
}

// Ahora el handler, esta va a ser la estructura de la informacion que me llega
// por la api
#[derive(Clone, Serialize, Deserialize, Debug)]
pub struct NewCarHandler {
    pub modelo: String,
    pub fecha_entrada: DateTime<Utc>,
    pub fecha_salida: DateTime<Utc>,
}

// Ahora los modelos de datos, lo cuales son la estructura
// con la que la db me va a responder al hacer una peticion

#[derive(Queryable, Serialize, Deserialize, Debug)]

pub struct CarToRepairModel {
    pub id: Uuid,
    pub modelo: String,
    pub fecha_entrada: DateTime<Utc>,
    pub fecha_salida: DateTime<Utc>,
}

//ahora las funciones

impl CarToRepairModel {
    pub fn get_cars(conn: &mut PgConnection) -> Result<Vec<CarToRepairModel>, diesel::result::Error> {
        // .load obtiene todos los registros 
        let cars = CarToRepair.load::<CarToRepairModel>(conn);
        cars
    }

    pub fn add_car_to_repair(
        conn: &mut PgConnection,
        car: &NewCarHandler,
    ) -> Result<CarToRepairModel, diesel::result::Error> {
        let new_car = NewCarToRepair {
            id: &Uuid::new_v4(),
            modelo: &car.modelo,
            fecha_entrada: &car.fecha_entrada,
            fecha_salida: &car.fecha_salida,
        };

        diesel::insert_into(CarToRepair::table)
            .values(new_car)
            .get_result::<CarToRepairModel>(conn)
    }
}
