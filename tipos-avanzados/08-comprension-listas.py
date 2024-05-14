usuarios = [
    ["pepe",20],
    ["luis",1],
    ["Josesito",10],
]


#forma de trasforma una lista sin la comprension de listas
# nombres = []
# for usuario in usuarios:
#     nombres.append(usuario[0])
# print(nombres)


# de esta forma nosotros podemos hacer los mismo con
# la comprension de listas
# nombres = [usuario[0] for usuario in usuarios]
# print(nombres)


#tambien podemos filtar

# nombres = [usuario[0] for usuario in usuarios if usuario[1] > 2]
# print(nombres)


# si bien tambien existe el filter y map es recomendado usar la
# comprension de litas

nombres = list(map(lambda usuario: usuario[0], usuarios))
print(nombres)

menosNombres = list(filter(lambda usuario: usuario[1] > 2,usuarios))
print(menosNombres)