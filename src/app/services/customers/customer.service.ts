import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  setCustomers(form: NgForm){
    this.customers.push({
      id: this.customers.length+1,
      name: form.value.name,
      birthdate: form.value.birthdate,
      email: form.value.email,
      gender: form.value.gender
    });
    this.onSaveCustomers();
  }

  onSaveCustomers(){
    localStorage.setItem('emxCustomerList', JSON.stringify(this.customers));
    // window.location.reload(true);
  }
}
