import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../model/customer-type";

const JSON_URL = `${environment.jsonUrl}`;


@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private http: HttpClient) { }

  getAllCustomerTypes(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(JSON_URL + '/customerTypes');
  }

  //tai sao du lieu tra ve la 1 array???
  findCustomerTypeById(id: number): Observable<CustomerType> {
    return this.http.get<CustomerType>(JSON_URL + '/customerTypes?customerTypeId=' + id);
  }
}
