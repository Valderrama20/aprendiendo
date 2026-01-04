use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use uuid::Uuid;

//Definimos el modelo de usuario

//- [derive(FromRow)] permite mapear automáticamente resultados SQL a esta struct.
//- Serialize y Deserialize habilitan convertir a/desde JSON en las respuestas/peticiones.
//  De esta forma podemos usar la misma estructura para leer de la base y enviar JSON al cliente
//  SQLx rellenará los campos desde la consulta, y Axum los serializará en la respuesta.

// Estructura que me devuelve la db
#[derive(Debug, FromRow, Serialize, Deserialize)]
pub struct User {
    pub id: Uuid,
    pub name: String,
    pub email: String,
}

// Estructura para la creacion de un usuario
#[derive(Deserialize)]
pub struct NewUser {
    pub name: String,
    pub email: String,
}

// Este struct se usará para deserializar el cuerpo JSON en las peticiones POST /users.