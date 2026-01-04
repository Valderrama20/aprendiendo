package aprendiendoSpringBoot.controllers;

import aprendiendoSpringBoot.domain.Product;
import aprendiendoSpringBoot.service.ProductsService;
import aprendiendoSpringBoot.service.ProductsServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private ProductsService productsService = new ProductsServiceImpl();

    @GetMapping
    public ResponseEntity<?> getProducts() {
        List<Product> products = productsService.getProducts();

        return ResponseEntity.ok(products);
    }

}
