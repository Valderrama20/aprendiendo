
mascotas = ["Pelusa", "pepe" ,"nana","pepe"]


print(mascotas.count("pepe")) # me indica cunatas apariciones tiene un elemente un una lista

#Para nosotros saber el index de un elemento dentro de una lista podemos untilizar
# .index() el problema es que antes de utilizarlo tenemos que verificar si existe ese
#elemento porque si no rompe, aqui estamos buando con el "if "pepe" in mascotas:" para
#luego preguntar por su index

if "pepe" in mascotas:
    print(mascotas.index("pepe"))
