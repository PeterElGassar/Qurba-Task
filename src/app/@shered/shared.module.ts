import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
 FooterComponent,
 HeaderComponent
];

@NgModule({
  declarations: [ ...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports:[...COMPONENTS]
})
export class SharedModule { }
