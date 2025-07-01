use sqlx::PgPool;
use sqlx::postgres::PgPoolOptions;
use std::env;

pub async fn init_db() -> PgPool {
    // cargamos las variables de entorno del .env
    dotenvy::dotenv().ok();

    // Obtenemos la variable de entorno
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL debe estar configurada");

    // creamos el pool con un limite de conexiones
    PgPoolOptions::new()
        .max_connections(5)
        .connect(&database_url)
        .await
        .expect("Fallo al conectar con la base de datos")
}

// Aquí usamos PgPoolOptions::new().connect(&database_url).await para obtener un PgPool
// asíncrono que gestiona conexiones a Postgres. Este pool se compartirá en los handlers
// mediante Extension de Axum.
