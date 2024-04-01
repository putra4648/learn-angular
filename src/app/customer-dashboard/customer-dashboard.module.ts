import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerDashboardComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CustomerDashboardComponent]
})
export class CustomerDashboardModule { }
