import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  // product: Product;
  productDeleteForm: FormGroup;
  id: number;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      // this.product = this.productService.findProductById(id);
      this.getProduct(this.id);
    });

    // this.productDeleteForm = new FormGroup({
    //   id: new FormControl(),
    //   name: new FormControl(),
    //   price: new FormControl(),
    //   description: new FormControl(),
    // });
    //
    // this.productDeleteForm.setValue({
    //   id: this.product.id,
    //   name: this.product.name,
    //   price: this.product.price,
    //   description: this.product.description
    // });
  }

  getProduct(id: number) {
    return this.productService.findProductById(id).subscribe(product => {
      this.productDeleteForm = new FormGroup({
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
    // this.productService.deleteProductById(this.product.id);
    // this.router.navigateByUrl('/product/list').then(r => console.log('back to list!'));

    this.productService.deleteProductById(this.id).subscribe(() => {
      console.log('delete success');
      this.router.navigateByUrl('/product/list').then(r => console.log('back to list!'));
    }, error => {
      console.log(error);
    })
  }

}
