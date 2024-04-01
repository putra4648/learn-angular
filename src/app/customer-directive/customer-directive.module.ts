import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDirectiveComponent } from './customer-directive/customer-directive.component';

@NgModule({
  declarations: [
    CustomerDirectiveComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [CustomerDirectiveComponent]
})
export class CustomerDirectiveModule { }
