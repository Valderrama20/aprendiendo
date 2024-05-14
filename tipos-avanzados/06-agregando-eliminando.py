mascotas = ["Pelusa", "pepe" ,"nana","pepe"]

#inseta un elemento en un index y desplaza el resto
mascotas.insert(1,"josesito") 
print(mascotas)

#agrega un elememto al final de la lista
mascotas.append("Ultimo")
print(mascotas)

#remueve un elemento especifico de la lista (solo la primera aparicion)
mascotas.remove("nana")
print(mascotas)

#elimina el ultimo elemento de la lista si no tiene un index (le puedes pasar un index)
mascotas.pop()
print(mascotas)

# es lo mismo que pop
del mascotas[1]
print(mascotas)

#limpia la lista
mascotas.clear()
print(mascotas)




