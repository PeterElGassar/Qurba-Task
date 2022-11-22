import { ProductsService } from './products/products.service';
import { SharedModule } from 'src/app/@shered/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COMPONENTS, HomeRoutingModule } from './home-routing.module';
import { ProductItemComponent } from './products/components/product-item/product-item.component';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [...COMPONENTS, ProductItemComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers:[ProductsService]
})
export class HomeModule { }
