edad = input("Que edad tienes?")

edad = int(edad)


if edad > 65:
    print("Puedes ver la peliculas con un super descuento")
elif edad > 54:
    print("Puedes ver la peliculas con descuento")
elif edad > 17:                         # A diferencia de Js con Py no utiliza parentesis ni
    print("Puedes ver la peliculas")    # llaves para poner tu codigo y es muy inportante
else:                                   # siempre tener tu codigo identado para que funcione
    print("no puedes pasar")

print("listo")
