animal = "chanCHito feliz"

print(animal.upper())  # es lo mismo que toUpperCase()
print(animal.lower())  # es lo mismo que toLowerCase()
print(animal.capitalize())  # toma la primera letra y la pasa a mayuscula
print(animal.title())  # toma la primera letra de todas las palabras y las pasa a mayusculas
print(animal.strip())  # elimina los espacios de los lados del string
print(animal.lstrip())  # elimina el espacio del lado izquierdo
print(animal.rstrip())  # elimina el espacio del lado derecho
print(animal.find("CH"))  # es lo mismo que el indexOf()
print(animal.replace("CH","pepe"))  # reemplaza un caracter o grupo de caracteres por otro
print("CH" in animal)  # es lo mismo que el includes
print("CH"not in animal)  # es lo mismo que el includes pero negandolo
