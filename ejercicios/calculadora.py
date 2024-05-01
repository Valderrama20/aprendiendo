

n1 = input("Ingrese primer numero") # el input me premite pedir informacion al usuario
n2 = input("Ingrese segundo numero")

print(n1,n2)

n1 = int(n1)  # int me permite trasformar string en numeros
n2 = int(n2)

suma = n1 + n2
resta = n1 - n2
multi = n1 * n2
divi = n1 / n2

# se coloca f ante de las comillas para poder trabajar con variables
result = f"""         
Para los numero {n1} y {n2}
el resultado de la suma es: {suma}
el resultado de la resta es: {resta}
el resultado de la multiplicacion es: {multi}
el resultado de la division es: {divi}
"""

print(result)
