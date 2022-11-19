import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COMPONENTS, HomeRoutingModule } from './home-routing.module';
import { ProductItemComponent } from './products/components/product-item/product-item.component';



@NgModule({
  declarations: [...COMPONENTS, ProductItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
