saludo = "Hola desde global"

def saludar():
    saludo = "hola mundo"
                           # A diferencia de Js yo no puedo acceder a una varible global
                           # sin usar "global y nombre de variable" iugal es mala practica                    
def saludar_canchito():
    saludo = "Hola Chanchito Feliz"
    print(saludo)

print(saludo)
saludar()
print(saludo)
saludar_canchito()


