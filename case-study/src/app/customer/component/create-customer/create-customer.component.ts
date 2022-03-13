import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {CustomerType} from "../../model/customer-type";
import {CustomerTypeService} from "../../service/customer-type.service";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;
  customerTypes: CustomerType[];

  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService
  ) { }

  ngOnInit() {
    this.customerForm = new FormGroup({
      customerId: new FormControl(),
      customerName: new FormControl(),
      dateOfBirth: new FormControl(),
      sex: new FormControl(),
      identityNumber: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),

      customerType: new FormGroup({
        customerTypeId: new FormControl(),
        customerTypeName: new FormControl()
      })
    });

    this.getAllCustomerTypes();
  }

  getAllCustomerTypes() {
    this.customerTypeService.getAllCustomerTypes().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    })
  }

  addCustomer() {
    const customer = this.customerForm.value;
    this.customerTypeService.findCustomerTypeById(customer.customerType.customerTypeId).subscribe(customerType => {
      // customer.customerType.customerTypeName = customerType.customerTypeName;
      console.log(customerType);
      // console.log('set customer type name success!');
      // console.log(customer.customerType.customerTypeName);
    }, error => {
      console.log(error);
    }, () => {
      console.log(customer);
    })

    // this.customerService.saveCustomer(customer).subscribe(() => {
    //   this.customerForm.reset();
    //   console.log('add customer success!');
    // }, error => {
    //   console.log(error);
    // })
  }

}
