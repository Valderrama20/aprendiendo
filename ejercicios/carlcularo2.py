print("Bienvenidos a la calculadora")
print("Para salir escribe salir")
print("Las operaciones son: suma, resta, multi y div")

result = False

while True:
    if not result:
        result = input("Ingrese un numero: ").lower()
        if result == "salir":
            break
        result = int(result)

    op = input("Ingrese operacion: ").lower()
    if op == "salir":
        break

    num2 = input("Ingrese siguiente numero: ").lower()
    if num2 == "salir":
        break
    num2 = int(num2)

    if op == "suma":
        result += num2
    elif op == "resta":
        result -= num2
    elif op == "multi":
        result *= num2
    elif op == "div":
        result /= num2
    else:
        print("Entrada invalidad")
        break
    print(f"El resultado es: {result}")
