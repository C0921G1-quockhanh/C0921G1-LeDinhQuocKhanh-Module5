import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      // id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),

      category: new FormGroup({
        name: new FormControl()
      })
    });
  }

  submit() {
    // const product = this.productForm.value;
    // this.productService.saveProduct(product);
    // this.productForm.reset();
    // console.log('create success!');

    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
      console.log('add success!');
      // console.log(product);
    }, error => {
      console.log(error);
    })
  }

}
