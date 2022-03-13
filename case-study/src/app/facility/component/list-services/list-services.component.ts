import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  facilities: Facility[];

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit() {
    this.getAllFacilities();
  }

  getAllFacilities() {
    this.facilityService.getAllFacilities().subscribe(facilities => {
      this.facilities = facilities;
      console.log('list facilities success!');
    }, error => {
      console.log(error);
    })
  }

}
