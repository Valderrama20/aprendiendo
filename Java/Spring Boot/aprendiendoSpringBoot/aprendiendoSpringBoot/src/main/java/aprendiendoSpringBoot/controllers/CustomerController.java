package aprendiendoSpringBoot.controllers;

import aprendiendoSpringBoot.domain.Customer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;

@RestController
@RequestMapping("/clientes")
public class CustomerController {

    private ArrayList<Customer> customers = new ArrayList<>(Arrays.asList(
            new Customer(1, "Gerarlo Lopez", "geraldol", "constrasena123"),
            new Customer(2, "Gerarlo ", "pepe", "constrasena123"),
            new Customer(2, "Gerarlo en nene", "luis", "constrasena123"),
            new Customer(2, "Gerarlo 3", "elGato", "constrasena123")
    ));

    // @RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public ResponseEntity<ArrayList<Customer>> getCustomers() {
        return ResponseEntity.ok(customers);
    }

    // @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    @GetMapping("/{username}")
    public ResponseEntity<?> getCustomerByUsername(@PathVariable String username) {
        for (Customer customer : customers) {
            if (customer.getUsername().equalsIgnoreCase(username)) {
                return ResponseEntity.ok(customer);
            }
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente no encontrado: " + username);
    }

    // @RequestMapping(method = RequestMethod.POST)
    @PostMapping
    public ResponseEntity<?> postCreateClient(@RequestBody Customer customer) {
        customers.add(customer);

        // Creaos la uri del recurso creado
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{username}")
                .buildAndExpand(customer.getUsername())
                .toUri();

        // return ResponseEntity.created(location).build();
        return ResponseEntity.created(location).body(customer);

    }

    // @RequestMapping(method = RequestMethod.PUT)
    @PutMapping
    public ResponseEntity<?> putUpdateClient(@RequestBody Customer customer) {
        for (Customer c : customers) {
            if (c.getID() == customer.getID()) {
                c.setName(customer.getName());
                c.setUsername(customer.getUsername());
                c.setPassword(customer.getPassword());

                return ResponseEntity.noContent().build();
            }
        }

        return ResponseEntity.notFound().build();
    }

    // @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteClienteById(@PathVariable int id) {
        for (Customer c : customers) {
            if (c.getID() == id) {
                customers.remove(c);

                return ResponseEntity.noContent().build();
            }
        }

        return ResponseEntity.notFound().build();
    }

    // @RequestMapping(method = RequestMethod.PATCH)
    @PatchMapping
    public ResponseEntity<?> patchClienteById(@RequestBody Customer customer) {
        for (Customer c : customers) {
            if (c.getID() == customer.getID()) {

                if (customer.getName() != null) {
                    c.setName(customer.getName());
                }
                if (customer.getUsername() != null) {
                    c.setUsername(customer.getUsername());
                }
                if (customer.getPassword() != null) {
                    c.setPassword(customer.getPassword());
                }

                return ResponseEntity.ok("Cliente modificado satisfactoriamente: " + customer.getID());
            }
        }

        return ResponseEntity.ok("Cliente no encontrado con el id: " + customer.getID());
    }
}