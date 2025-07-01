use crate::models::user::User;
use axum::{Json, extract::Extension, http::StatusCode};
use sqlx::{PgPool, query_as};

/// devuelve todo los usuarios en la db
pub async fn getAll(Extension(pool): Extension<PgPool>) -> Result<Json<Vec<User>>, (StatusCode, String)> {
    let users = query_as::<_, User>("SELECT * FROM users")
        .fetch_all(&pool)
        .await
        .map_err(|e| (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;
    Ok(Json(users))
}

// Usamos sqlx::query_as::<_, User> para mapear filas a User.
// Devolvemos Result<Json<Vec<User>>, (StatusCode, String)>: en caso de éxito un JSON con la lista, en caso de error un código 500.
// Convertir el resultado en Json añade Content-Type: application/json y serializa automáticamente.
