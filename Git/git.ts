// git

// es una herramienta que te permite tener control de las versiones de un proyecto.
// Esta te registra cualquier cambio que hagas en el codigo

// gitHub

// Es un servicio el cual te permite guardar to codigo en la nube

// Paginas para encontrar proyectos para contribuir

// -- For good first inssue
// -- good first inssue

// --depth=1

// este comando al final de git clone url --depth=1 me permite clonar un repo sin traer todo el
// historial de commits del repo lo cual sirve para que pese menos y sea mas rapido el clone

// comando basicos

// ls: me permite ver todas las carpeta del directorio en el que estoy
// pwd: me muestra en que carpeta o directorio donde estoy
// cd -nombre de carpeta- : me permite moverme entre carpetas
// cd .. : me permite retroceder a la carpeta anterior
// mkdir -nombre de carpeta- : Con este comando puedo crear una nueva carpeta
// git init: Me permite inicializar el repo para subir a github

// code . : Me permite abrir el visual en la carpete que este
// git status : me muestra el estado actual de mi repo
// git add . : me agrega todos los archivos
// git add *.js : me agrega solo los archivos con la extension indicada
// git add prueba.js : me agrega solo el archivo que indique, se pueden agregar varios archivos
// git restore <archivo> : revierte los cambios hicimos a dicho archivo
// git restore --staged <archivo> : elimina este cambio del staged, es como
// - si hicieramos un git add <archivo> y luego revertimos ese git add
// git rm <nombre de archivo> : elimina una archivo y lo agrega a staged
// git mv <nombreDeArchivo> <nuevoNombre> : me cambia el nombre de un archivo
// git status -s : me muestra en que estado estan mis archivios per sin informacion redundante
// git log --oneline : me muetra todo el historial de commits

// trabajo en equipo

// git branch : me muestra todas la ramas existentes
// git checkout -b <nombreDeRama> : me crea y cambia a la rama creada directamente
// git checkout <nombreDeRama> : me cambia a la rama indicada
// cat <nombreDeArchivo> : me muestra el contenido de mi archivo
// git merge <ramaParaCombinar> : estando parado en mi rama principal puedo usar este
// - comando para combinar ramas
// git remote add origin <url dle repo> : esto me indica de donde voy a obtener los cambios
// - en mi repo y a donde voy a subir cambios
// git push -u origin <rama> : sube los cambios y crea la rama en mi repo en gitHub
