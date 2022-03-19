package qk.connect_backend_frontend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import qk.connect_backend_frontend.model.Product;

@Repository
public interface IProductRepository extends JpaRepository<Product,String> {
}
