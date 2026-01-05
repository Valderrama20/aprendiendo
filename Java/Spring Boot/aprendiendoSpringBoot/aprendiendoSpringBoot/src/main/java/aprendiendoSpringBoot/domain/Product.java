package aprendiendoSpringBoot.domain;

public class Product {

    // Atributos
    private Integer id;
    private String name;
    private Double price;
    private Integer stock;

    // Constructor
    public Product() {

    }

    public Product(Integer id, String name, Integer stock, Double price) {
        this.id = id;
        this.name = name;
        this.stock = stock;
        this.price = price;
    }

    // Getters and setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }
}
