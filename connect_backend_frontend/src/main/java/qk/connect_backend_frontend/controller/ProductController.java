package qk.connect_backend_frontend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import qk.connect_backend_frontend.model.Product;
import qk.connect_backend_frontend.service.IProductService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private IProductService iProductService;

    //all products
    @GetMapping("")
    public ResponseEntity<Iterable<Product>> findAllProducts() {
        List<Product> products = (List<Product>) this.iProductService.findAll();

        if (products.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(products,HttpStatus.OK);
    }

    //one product
    @GetMapping("/{id}")
    public ResponseEntity<Product> findProductById(@PathVariable String id) {
        Optional<Product> productOptional = this.iProductService.findByID(id);

        if (!productOptional.isPresent())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(productOptional.get(),HttpStatus.OK);
    }

    //add product
    @PostMapping
    public ResponseEntity<Product> saveProduct(@RequestBody Product product) {
        return new ResponseEntity<>(this.iProductService.save(product),HttpStatus.CREATED);
    }

    //update product
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable String id, @RequestBody Product product) {
        Optional<Product> productOptional = this.iProductService.findByID(id);

        if (!productOptional.isPresent())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        product.setId(productOptional.get().getId());
        return new ResponseEntity<>(this.iProductService.save(product),HttpStatus.OK);
    }

    //delete product
    @DeleteMapping("/{id}")
    public ResponseEntity<Product> deleteProduct(@PathVariable String id) {
        Optional<Product> productOptional = this.iProductService.findByID(id);

        if (!productOptional.isPresent())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        this.iProductService.remove(id);
        return new ResponseEntity<>(productOptional.get(),HttpStatus.OK);
    }

}
