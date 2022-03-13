import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ServiceType} from "../model/service-type";

const JSON_URL = `${environment.jsonUrl}`;


@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  constructor(private http: HttpClient) { }

  getAllServiceTypes(): Observable<ServiceType[]> {
    return this.http.get<ServiceType[]>(JSON_URL + '/serviceTypes');
  }
}
