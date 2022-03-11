import { Injectable } from '@angular/core';
import {Category} from '../model/category';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // categories: Category[] = [
  //   {
  //     id: 1,
  //     name: 'IPhone'
  //   },
  //   {
  //     id: 2,
  //     name: 'Samsung'
  //   },
  //   {
  //     id: 3,
  //     name: 'LG'
  //   }
  // ];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/categories');
  }

  saveCategory(category): Observable<Category> {
    return this.http.post<Category>(API_URL + '/categories',category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(API_URL + '/categories/' + id);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(API_URL + '/categories/' + id,category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(API_URL + '/categories/' + id);
  }
}
