package qk.connect_backend_frontend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import qk.connect_backend_frontend.model.ProductType;
import qk.connect_backend_frontend.repository.IProductTypeRepository;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/productType")
public class ProductTypeController {

    @Autowired
    private IProductTypeRepository iProductTypeRepository;

    //all product types
    @GetMapping("")
    public ResponseEntity<Iterable<ProductType>> findAllProductTypes() {
        List<ProductType> productTypes = this.iProductTypeRepository.findAll();

        if (productTypes.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(productTypes,HttpStatus.OK);
    }

}
