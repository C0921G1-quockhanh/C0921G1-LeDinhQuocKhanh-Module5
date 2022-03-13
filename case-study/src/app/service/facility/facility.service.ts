import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../../model/service/facility";

const JSON_URL = `${environment.jsonUrl}`;


@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) { }

  getAllFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(JSON_URL + '/facilities');
  }
}
