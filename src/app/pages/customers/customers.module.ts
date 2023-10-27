import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';



@NgModule({
  declarations: [
    CustomerComponent
  ],
  exports: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CustomersModule { }
