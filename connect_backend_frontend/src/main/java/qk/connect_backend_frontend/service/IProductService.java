package qk.connect_backend_frontend.service;

import qk.connect_backend_frontend.model.Product;

import java.util.Optional;

public interface IProductService {

    Iterable<Product> findAll();

    Optional<Product> findByID(String id);

    Product save(Product product);

    void remove(String id);

}
