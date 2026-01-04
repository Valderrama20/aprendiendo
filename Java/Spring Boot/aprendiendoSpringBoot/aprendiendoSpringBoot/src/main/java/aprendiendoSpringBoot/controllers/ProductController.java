package aprendiendoSpringBoot.controllers;

import aprendiendoSpringBoot.domain.Product;
import aprendiendoSpringBoot.service.ProductsService;
import aprendiendoSpringBoot.service.ProductsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductsService productsService;

    public ProductController(ProductsService productsService){
        this.productsService = productsService;
    }

    @GetMapping
    public ResponseEntity<?> getProducts() {
        List<Product> products = productsService.getProducts();

        return ResponseEntity.ok(products);
    }

}
