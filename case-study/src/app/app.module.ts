import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ListCustomersComponent } from './component/customer/list-customers/list-customers.component';
import { EditCustomerComponent } from './component/customer/edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import { ListServicesComponent } from './component/service/list-services/list-services.component';
import { CreateServiceComponent } from './component/service/create-service/create-service.component';
import { ListContractsComponent } from './component/contract/list-contracts/list-contracts.component';
import { CreateContractComponent } from './component/contract/create-contract/create-contract.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { EditServiceComponent } from './component/service/edit-service/edit-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListCustomersComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    ListServicesComponent,
    CreateServiceComponent,
    ListContractsComponent,
    CreateContractComponent,
    EditServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
