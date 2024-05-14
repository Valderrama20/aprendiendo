# numeros = [1,2,3]

# Feoo!   esta la forma poder sacar los elementos de una lista sin el *
# primero = numeros[0]
# segundo = numeros[1]
# tercero = numeros[2]

numeros = [1,2,3,4,5,6,7,8,9,10]

primero, segundo, *otros = numeros  # aqui estoy destructurando

# es lo mimos que los ... de js
# tambien puedo hacer esto
# primero, *otros, ultimos = numeros


print(primero,segundo,otros)