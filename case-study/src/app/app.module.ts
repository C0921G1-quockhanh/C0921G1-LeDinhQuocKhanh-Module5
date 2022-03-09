import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ListCustomersComponent } from './component/list-customers/list-customers.component';
import { EditCustomerComponent } from './component/edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './component/create-customer/create-customer.component';
import { ListServicesComponent } from './component/list-services/list-services.component';
import { CreateServiceComponent } from './component/create-service/create-service.component';
import { ListEmployeesComponent } from './component/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';
import { ListContractsComponent } from './component/list-contracts/list-contracts.component';
import { CreateContractComponent } from './component/create-contract/create-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListCustomersComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    ListServicesComponent,
    CreateServiceComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    ListContractsComponent,
    CreateContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
