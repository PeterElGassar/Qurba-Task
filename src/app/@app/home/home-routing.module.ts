import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsSearchComponent } from './products/products-search/products-search.component';

//import all components of home module inside this array 
export const COMPONENTS = [
  ProductsSearchComponent,
  ProductsListComponent

];

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
