import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {ProductType} from "../model/product-type";

const JSON_URL = 'http://localhost:3000';
const SPRING_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(SPRING_URL + '/product');
  }

  getAllProductTypes(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(JSON_URL + '/productTypes');
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(JSON_URL + '/products', product);
  }

  findProductById(id: string): Observable<Product> {
    return this.http.get<Product>(JSON_URL + '/products/' + id);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(JSON_URL + '/products/' + id);
  }

  updateProduct(id: string,product: Product): Observable<Product> {
    return this.http.put<Product>(JSON_URL + '/products/' + id,product);
  }

  searchProduct(productType: string,endDay: string): Observable<Product[]> {
    return this.http.get<Product[]>(JSON_URL +
      '/products?productType.name_like=' + productType + '&endDay_like=' + endDay);
  }

}
