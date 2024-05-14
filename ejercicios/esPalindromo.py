
def es_palindromo(text):
    reverse = ""
    text2 = ""

    for letra in text.lower():
        if letra != " ":
            reverse = letra + reverse
            text2 = text2 + letra

    return reverse == text2
    
result = es_palindromo("Amo la paloma")
print(result)
# print(result)
