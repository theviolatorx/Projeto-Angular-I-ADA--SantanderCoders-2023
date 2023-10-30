import { Injectable } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: CustomerModel[] = [];

  constructor() {
    this.loadCustomers();
   }

  private loadCustomers(): void{
    const validateDataLocalStorage:string | null = localStorage.getItem("emxCustomerList");
    if (validateDataLocalStorage) this.customers = JSON.parse(validateDataLocalStorage);
  }

  getCustomersList(){
    this.loadCustomers();
    return this.customers;
  }

  deleteCustomer(id: number) {
    this.customers = this.customers.filter((element) => element.id != id);
    this.onSaveCustomers();
  }

  onSaveCustomers(){
    localStorage.setItem('emxCustomerList', JSON.stringify(this.customers));
    // window.location.reload(true);
  }
}
