import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";
import {ProductType} from "../model/product-type";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[];
  product: Product;
  productTypes: ProductType[];
  p = 1;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getAllProductTypes().subscribe(value => {
      this.productTypes = value;
      // console.log(value);
      this.getAllProducts();
    },error => {
      console.log(error);
    })

  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(value => {
      this.products = value;
      console.log(value);
    },error => {
      console.log(error);
    })
  }

  showModal(id: string) {
    this.productService.findProductById(id).subscribe(value => {
      this.product = value;
      console.log(value);
    })
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(() => {
      console.log('delete product success!');
      this.ngOnInit();
    }, error => {
      console.log(error);
    })
  }

  searchProduct(productType: string,endDay: string) {
    console.log(productType);
    console.log(endDay);

    this.productService.searchProduct(productType,endDay).subscribe(value => {
      console.log(value);
      this.products = value;
      this.p = 0;
    })
  }

}
