import { SharedModule } from 'src/app/@shered/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COMPONENTS, HomeRoutingModule } from './home-routing.module';
import { ProductItemComponent } from './products/components/product-item/product-item.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [...COMPONENTS, ProductItemComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
