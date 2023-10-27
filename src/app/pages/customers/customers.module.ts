import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CustomerComponent
  ],
  exports: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomersModule { }
