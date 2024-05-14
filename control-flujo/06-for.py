buscar = 10

for numero in range(5):         #podemos iterar todo aquello que sea iterable
    print(numero)               #es muy parecido el fonIn de Js
    if numero == buscar:
        print("Encontrado", buscar)
        break
else:
    print("No encontrado :(")

for letra in "Ultimate Python":
    print(letra)
