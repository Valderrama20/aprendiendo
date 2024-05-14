def suma(*numeros):
    resultado = 0
    for num in numeros:
        resultado += num
    print(resultado)


suma(4,6,9)
suma(3,8)
suma(3,7,45,3,8)

#Es MUY IMPORTANTE la identacion en Py ya que hace la misma funcion que las {} en Js
#En esta funcion temos un ejemplo de * la cual hace exactamente lo mismo que los ... de js
