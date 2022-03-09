import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer/CustomerService';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  customers: Customer[];
  customerService: CustomerService;

  constructor() {
    this.customerService = new CustomerService();
    this.customers = this.customerService.getCustomers();
  }

  ngOnInit(): void {
  }

}
