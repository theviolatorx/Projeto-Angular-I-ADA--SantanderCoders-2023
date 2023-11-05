import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerModel } from 'src/app/models/customer-model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customers: CustomerModel[] = [];
  public searchFlag: boolean = true;
  public searchType: string = '';

  constructor() {
    this.loadCustomers(this.searchFlag);
  }

  private loadCustomers(flag: boolean): void {
    const validateDataLocalStorage: string | null =
      localStorage.getItem('emxCustomerList');
    if (validateDataLocalStorage) {
      if (flag) {
        this.customers = JSON.parse(validateDataLocalStorage);
      } else {
        switch (this.searchType) {
          case '@':
            console.log('Pesquisa E-mail!');
            break;
          case '#':
            console.log('Pesquisa Data!');
            break;
          default:
            console.log('Pesquisa por nome!');
        }
      }
    }
  }

  getCustomersList(flag: boolean) {
    this.loadCustomers(flag);
    return this.customers;
  }

  deleteCustomer(id: number) {
    this.customers = this.customers.filter((element) => element.id != id);
    this.onSaveCustomers();
  }

  setCustomersAdd(form: NgForm) {
    let index = this.customers.at(-1)?.id;
    console.log('index', index);
    if (!index) index = 1;
    if (index) {
      this.customers.push({
        id: index + 1,
        name: form.value.name,
        birthdate: form.value.birthdate,
        email: form.value.email,
        gender: form.value.gender,
      });
      this.onSaveCustomers();
    }
  }

  setCustomersEdit() {
    this.onSaveCustomers();
  }

  private onSaveCustomers() {
    localStorage.setItem('emxCustomerList', JSON.stringify(this.customers));
    this.loadCustomers(true);
  }
}
