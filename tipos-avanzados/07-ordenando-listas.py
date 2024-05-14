numeros = [9,5,100,10,99,45]

# Al sort le podemos pasar el argumento true al parametro reverser
# y nos ordenara la lista descendentemente
# numeros.sort(reverse=True)

# la diferencia es que este no me modifica mi lista si no que me devuelve una nueva
numeros2 = sorted(numeros, reverse=True)
print(numeros)
print(numeros2)

#si mi id esta en el index 0 el sort lo ordenara correctamente
#caso contrario hay que hacer otros pasos para que quede ordenado
usuarios = [
    ["pepe",20],
    ["luis",5],
    ["Josesito",10],
]

# sin las funciones anonimas trediamos que hacer esto para que el sort funcione 
def ordena(e):
    return e[1]

# aqui tenemos una muestra de la funcion anonima dentro del sort la cual 
#tiene la misma funcionalidad de la funcion de arriba
usuarios.sort(key= lambda e:e[1])

print(usuarios)