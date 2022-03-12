import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  // product: Product;
  productUpdateForm: FormGroup;
  id: number;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      this.getProduct(this.id);

    });

    // this.productUpdateForm = new FormGroup({
    //   // id: new FormControl(),
    //   name: new FormControl(),
    //   price: new FormControl(),
    //   description: new FormControl(),
    // });
    //
    // this.productUpdateForm.patchValue({
    //   // id: this.product.id,
    //   name: this.product.name,
    //   price: this.product.price,
    //   description: this.product.description
    // });

    // this.productUpdateForm.controls.id.disable();

  }

  getProduct(id: number) {
    return this.productService.findProductById(id).subscribe(product => {
      this.productUpdateForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),

        category: new FormGroup({
          name: new FormControl(product.category.name)
        })
      });
    });
  }

  onSubmit() {
    // const product = this.productUpdateForm.value;
    // product.id = this.product.id;
    // // console.log(product);
    // this.productService.updateProductById(this.product.id, product);
    // this.router.navigateByUrl('/product/list').then(r => console.log('back to list!'));

    const product = this.productUpdateForm.value;
    this.productService.updateProductById(this.id,product).subscribe(() => {
      console.log('update success!');
      this.router.navigateByUrl('/product/list').then(r => console.log('back to list!'));
    }, error => {
      console.log(error);
    })
  }

}
