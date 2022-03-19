import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductType} from "../model/product-type";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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
  id: string;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.productService.getAllProductTypes().subscribe(value => {
      this.productTypes = value;
      console.log(value);

      this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.id = paramMap.get('id');
        console.log(this.id);
        this.getProduct(this.id);
      })
    })
  }

  getProduct(id: string) {
    this.productService.findProductById(id).subscribe(value => {
      this.productForm.setValue(value);
      console.log(value);
    }, error => {
      console.log(error);
    })
  }

  addProduct() {
    const product = this.productForm.value;
    console.log(product);

    if (this.productForm.valid) {
      this.productService.updateProduct(this.id,product).subscribe(() => {
        console.log('update success!');
        this.router.navigateByUrl('').then(r => console.log('back to product list!'))
      },error => {
        console.log(error);
      })
    }
  }

}
