package aprendiendoSpringBoot.service;

import aprendiendoSpringBoot.domain.Product;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ProductsServiceImpl {

    List<Product> products = new ArrayList<>(Arrays.asList(
            new Product(1, "Manzana", 10, 2.0)
    ));

    public List<Product> getProducts() {
        return products;
    }
}
