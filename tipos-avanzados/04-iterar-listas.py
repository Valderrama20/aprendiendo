
mascotas = ["Pelusa", "pepe" ,"nana"]


# con el for por si solo yo no puede obtener el index del elemente
# para esos tengo que usar el enumarate el cual me devuelve una tupla con el elemento
# y su index, dentro del mismo for podemos destructurarlo

for index, mascota in enumerate(mascotas):
    print(index,mascota)