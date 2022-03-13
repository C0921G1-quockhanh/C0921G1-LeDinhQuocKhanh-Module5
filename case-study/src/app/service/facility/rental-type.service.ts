import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RentalType} from "../../model/service/rental-type";

const JSON_URL = `${environment.jsonUrl}`;

@Injectable({
  providedIn: 'root'
})
export class RentalTypeService {

  constructor(private http: HttpClient) { }

  getAllRentalTypes(): Observable<RentalType[]> {
    return this.http.get<RentalType[]>(JSON_URL + '/rentalTypes');
  }
}
