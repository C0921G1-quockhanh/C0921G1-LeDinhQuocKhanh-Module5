import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductType} from "../model/product-type";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl('',
      Validators.compose([Validators.required,Validators.pattern("^LH-\\d{4}$")])),
    productType: new FormControl('',
      Validators.required),
    quantity: new FormControl('',
      Validators.compose([Validators.required,Validators.min(1)])),
    startDay: new FormControl('',
      Validators.compose([Validators.required])),
    createDay: new FormControl('',
      Validators.compose([Validators.required])),
    endDay: new FormControl('',
      Validators.compose([Validators.required]))
  })

  productTypes: ProductType[];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllProductTypes();
  }

  getAllProductTypes() {
    this.productService.getAllProductTypes().subscribe(value => {
      this.productTypes = value;
      console.log(value);
    })
  }

  addProduct() {
    const product = this.productForm.value;
    console.log(product);

    if (this.productForm.valid) {
      this.productService.saveProduct(product).subscribe(() => {
        console.log('add product success!');
        this.productForm.reset();

        this.router.navigateByUrl('').then(r => console.log('back to product list!'))
      }, error => {
        console.log(error);
      })
    }
  }

}
