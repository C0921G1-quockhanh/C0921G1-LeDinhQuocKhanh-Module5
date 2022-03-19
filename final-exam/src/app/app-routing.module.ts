import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";

//chuyen doi giua cac components
const routes: Routes = [
  {
    path: 'product',
    component: ListComponent
  },
  {
    path: 'product/create',
    component: CreateComponent
  },
  {
    path: 'product/edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
