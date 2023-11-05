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
  public searchText: string = '';

  constructor() {
    this.loadCustomers(this.searchFlag);
  }

  private loadCustomers(flag: boolean): void {
    // debugger;
    const validateDataLocalStorage: string | null =
      localStorage.getItem('emxCustomerList');
    if (validateDataLocalStorage) {
      if (flag) {
        this.customers = JSON.parse(validateDataLocalStorage);
      } else {
        switch (this.searchType) {
          case '@':
            this.customers = this.customers.filter((element) => element.email.toLowerCase().includes(this.removeFistChar(this.searchText)));
            break;
          case '#':
            console.log('Pesquisa Data!');
             // this.customers = this.customers.filter((element) => 
            break;
          default:
             this.customers = this.customers.filter((element) => element.name.toLowerCase().includes(this.searchText.toLowerCase()));
        }
      }
    }
  }

  private removeFistChar(searchText: string): string {
    let newText:string = '';
    for (let i=1; i < searchText.length; i++){
      newText += searchText[i];
    } 
    return newText.toLowerCase();
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
