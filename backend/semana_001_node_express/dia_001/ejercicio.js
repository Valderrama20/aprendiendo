
import http from "http"

// Crea un servidor simple que responda con un mensaje en la ruta /

// Para crear un servidor simple en Node.js, usaremos el módulo http
//  (uno de los módulos centrales de Node.js). El servidor responderá con
//   un mensaje de bienvenida cuando accedamos a la ruta principal (/).

// Crea un archivo llamado server.js.

// Escribe el siguiente código en server.js:


// Crear servidor
const server = http.createServer((req,res) => {
   
    if(req.url === "/") {
     res.writeHead(200, { "Content-Type": "text/plain" });
     res.end('¡Bienvenido a mi servidor en Node.js!');
    }else {
        res.writeHead(404, {"Content-Type": "text/plain"})
        res.end("pagina no encontrada")
    }
    

})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})