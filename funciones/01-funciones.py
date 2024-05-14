def hola(nombre, apellido=""):  # parametros
    print("Hola mundo desde una funcion")
    print(f"Bienvenido: {nombre} {apellido} ")


hola("Jose","Garcia") # argumentos
hola("Jose") # argumentos

# para definir una funcion utlizamos siempre def seguido del nombre los () y :
# cuando estas dentro de una funcion esta recibe parametros
# y cuando invocas la funcion estos son anrgumentos
# la funcion puede tener parametros opcionales -apellido=""-


hola(apellido="Garcia", nombre="Pepe")

# si no sabemos en que posicion van los argumentos podemos asignarlos directamente
# a sus parametros
