package aprendiendoSpringBoot.service;

import aprendiendoSpringBoot.domain.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service("listResourceService")
public class ProductsServiceImpl implements ProductsService {

    List<Product> products = new ArrayList<>(Arrays.asList(
            new Product(1, "Manzana", 10, 2.0),
            new Product(2, "Plátano", 15, 1.5),
            new Product(3, "Naranja", 20, 1.8),
            new Product(4, "Pera", 12, 2.2)
    ));

    @Override
    public List<Product> getProducts() {
        return products;
    }
}
