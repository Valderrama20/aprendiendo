# Que es tokio y como se configura

Tokio es un runtime asincrono para rust el cual nos permite construir aplicaciones
de red de alto rendimiento sin sacrificar la seguiridad ni velocidad

para activar tokio solo necesitamos agregar su dependencia
y en el archivo archivo principal, arriba de fn main agregar:

- #[tokio::main]

Para prepar el entorno asincrono y permitir utilizar .await
en la funcion principal