def get_product(**datos):
    print(datos["name"],datos["edad"],datos["pais"])


get_product(name="jose",edad=21,pais="españa")

# en pocas palabras me transforma en un objeto los argumentos que le pasemos y
# accedemos a ellos con notacion de corchetes
