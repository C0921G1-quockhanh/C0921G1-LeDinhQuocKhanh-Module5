import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListServicesComponent } from './facility/component/list-services/list-services.component';
import { CreateServiceComponent } from './facility/component/create-service/create-service.component';
import { ListContractsComponent } from './contract/component/list-contracts/list-contracts.component';
import { CreateContractComponent } from './contract/component/create-contract/create-contract.component';
import { EditServiceComponent } from './facility/component/edit-service/edit-service.component';
import {CustomerConfigModule} from "./customer/customer-config/customer-config.module";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListServicesComponent,
    CreateServiceComponent,
    ListContractsComponent,
    CreateContractComponent,
    EditServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerConfigModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
