import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  jsonConnect = 'http://localhost:3000';

  // products: Product[] = [
  //   {
  //     id: 1,
  //     name: 'IPhone 12',
  //     price: 2400000,
  //     description: 'New'
  //   },
  //   {
  //     id: 2,
  //     name: 'IPhone 11',
  //     price: 1560000,
  //     description: 'Like new'
  //   },
  //   {
  //     id: 3,
  //     name: 'IPhone X',
  //     price: 968000,
  //     description: '97%'
  //   },
  //   {
  //     id: 4,
  //     name: 'IPhone 8',
  //     price: 7540000,
  //     description: '98%'
  //   },
  //   {
  //     id: 5,
  //     name: 'IPhone 11 Pro',
  //     price: 1895000,
  //     description: 'Like new'
  //   }
  // ];

  // productIndex: number;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonConnect + '/productList');
  }

  saveProduct(product): Observable<Product> {
    // this.products.push(product);
    return this.http.post<Product>(this.jsonConnect + '/productList',product);
  }

  findProductById(id: number): Observable<Product> {
    // return this.products.find(item => item.id === id);
    return this.http.get<Product>(this.jsonConnect + '/productList/' + id);
  }

  updateProductById(id: number, product): Observable<Product> {
    // this.productIndex = this.products.findIndex(item => item.id === id);
    // this.products[this.productIndex] = product;
    return this.http.put<Product>(this.jsonConnect + '/productList/' + id, product);
  }

  deleteProductById(id: number): Observable<Product> {
    // this.productIndex = this.products.findIndex(item => item.id === id);
    // this.products.splice(this.productIndex, 1);
    return this.http.delete<Product>(this.jsonConnect + '/productList/' + id);
  }

}
