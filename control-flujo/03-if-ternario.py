edad = input("Que edad tienes")

edad = int(edad)

mensaje = "Es mayor" if edad > 17 else "Es menor"

# if edad > 17:
#     mensaje = "Es mayor"
# else:                        esta forma es el tradicional if y arriba tenemos
#     mensaje = "Es menor"     el ternario

print(mensaje)
