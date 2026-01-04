package aprendiendoSpringBoot.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// Indicamos de esta clase sera un controlador rest
@RestController
public class HelloWorldRestConstroller {

    // Mapeamos el metodo helloWorld a la url /hello
    // tambien podemos tener multiples url para un mismo metodo,
    // ejemplo @GetMapping({"/hello", "/hola"})
    @GetMapping("/hello")
    public String helloWorld(){
        return "Hello World";
    }
}
