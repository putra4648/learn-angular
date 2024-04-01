import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDirectiveComponent } from './customer-directive/customer-directive.component';
import CustomerDirectiveDirective from './customer-directive/customer-directive.directive';

@NgModule({
  declarations: [
    CustomerDirectiveComponent,
  ],
  imports: [
    CommonModule,
    CustomerDirectiveDirective
  ],
  exports: [CustomerDirectiveComponent]
})
export class CustomerDirectiveModule { }
