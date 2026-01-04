# Que es Axum y como se integra con tokio

Axum es un framework web ergonomico y modular para rust, inspirado en la pila
Tower/Hyper. Lo cual nos facilita definir rutas (routes) y manejadores (handlers) de forma clara 

En Axum nosotros creamos un router y se asocian rutas http con funciones asincronas.
Cada handler es una funcion que puede recibir extractores (por ejemplo: prametros de ruta p json)
y devuelve un tipo convertible en respuesta.

Axun esta creada para funcionar sobre tokio eh hyper, por lo que su servidor HTTP
corre sobre el runtime de tokio