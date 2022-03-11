import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    UpdateProductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
