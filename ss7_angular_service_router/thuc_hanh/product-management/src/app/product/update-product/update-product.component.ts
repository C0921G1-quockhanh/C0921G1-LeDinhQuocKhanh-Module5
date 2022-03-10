import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Product;
  productUpdateForm: FormGroup;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.product = this.productService.findProductById(id);
    });

    this.productUpdateForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    });

    this.productUpdateForm.setValue({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      description: this.product.description
    });

    // this.productUpdateForm.controls.id.disable();

  }

  onSubmit() {
    const product = this.productUpdateForm.value;
    this.productService.updateProductById(this.product.id, product);
  }

}
