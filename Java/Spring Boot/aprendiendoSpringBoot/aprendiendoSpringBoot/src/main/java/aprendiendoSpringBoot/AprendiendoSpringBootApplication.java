package aprendiendoSpringBoot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Con este decorador indicamos que estamos trabajando con una app de
// Spring Boot
@SpringBootApplication
public class AprendiendoSpringBootApplication {

    public static void main(String[] args) {
        SpringApplication.run(AprendiendoSpringBootApplication.class, args);
    }
    
}
