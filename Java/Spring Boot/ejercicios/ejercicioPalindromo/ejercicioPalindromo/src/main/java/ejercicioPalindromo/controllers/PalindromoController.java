package ejercicioPalindromo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


/**
 * Controlador para verificar palindromos
 */
@RestController
public class PalindromoController {

    /**
     * Endpoint para verificar si una palabra es palindromo
     * @param word La palabra a verificar
     * @return un mensaje indicando si la palabra es palindromo o no
     */
    @GetMapping("/validar-palindromo/{word}")
    public String Palindromo(@PathVariable String word) {

        if(!isPalindromo(word)){
            return "La palabra " + word + " No es Palindromo";
        } else {
            return "La palabra " + word + " Si es Palindromo";
        }
    }

    /**
     * Metodo para verificar si una palabra es palindromo
     * @param word la palabra a verificar
     * @return true si la palabra es palindromo, false de lo contrario
     */
    public Boolean isPalindromo(String word){
        int length = word.length();
        for(int i = 0; i < length / 2; i++){
            if(word.charAt(i) != word.charAt(length - i - 1)){
                return false;
            }
        }

        return true;
    }
}
