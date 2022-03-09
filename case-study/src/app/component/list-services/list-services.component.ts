import { Component, OnInit } from '@angular/core';
import {RentalType} from '../../model/rental-type';
import {ServiceType} from '../../model/service-type';
import {FacilityService} from '../../service/facility/FacilityService';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  facilities: Facility[];
  facilityService: FacilityService;

  constructor() {
    this.facilityService = new FacilityService();
    this.facilities = this.facilityService.getFacilities();
  }

  ngOnInit(): void {
  }

}
