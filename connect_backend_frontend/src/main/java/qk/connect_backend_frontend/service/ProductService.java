package qk.connect_backend_frontend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qk.connect_backend_frontend.model.Product;
import qk.connect_backend_frontend.repository.IProductRepository;

import java.util.Optional;

@Service
public class ProductService implements IProductService {

    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public Iterable<Product> findAll() {
        return this.iProductRepository.findAll();
    }

    @Override
    public Optional<Product> findByID(String id) {
        return this.iProductRepository.findById(id);
    }

    @Override
    public Product save(Product product) {
        return this.iProductRepository.save(product);
    }

    @Override
    public void remove(String id) {
        this.iProductRepository.deleteById(id);
    }
}
