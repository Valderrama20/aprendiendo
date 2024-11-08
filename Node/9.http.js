const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('peticion recibida')
  res.end('hola mundo')
})

server.listen(0, () => {
  // aqui recuperames el server ya que al poner 0 este pueder ser cualquiera que este libre
  console.log(`Server listen en port: http://localhost:${server.address().port}`)
})
