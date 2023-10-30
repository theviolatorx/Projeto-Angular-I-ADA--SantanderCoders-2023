import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerModel } from 'src/app/models/customer-model';
import { CustomerService } from 'src/app/services/customers/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers: CustomerModel[] = [];
  public typeList: boolean = localStorage.getItem('emxTypeList') == 'true';
  public lName: string | null = null;
  public lBirthdate: Date | null = null;
  public lEmail: string | null = null;
  public lGender: string | null = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomersList();
  }

  deleteCustomer(id: number) {
    if (id > 0) this.customerService.deleteCustomer(id);
  }

  editUser(id: number){
    console.log(id, this.customers[id]);
    this.lName = this.customers[id].name;
  }

  onHandleTypeList(event: boolean): void {
    if (!event) {
      this.typeList = true; // Tabela
      localStorage.setItem('emxTypeList', JSON.stringify(this.typeList));
    }
    if (event) {
      this.typeList = false; // Card
      localStorage.setItem('emxTypeList', JSON.stringify(this.typeList));
    }
  }

  getDataForm(form: NgForm, id: number) {
    if (form.invalid) {
      console.log('Formulário inválido!');
    } else {
      if (id === 0) {
        this.customerService.setCustomers(form);
        console.log('Add customer!', this.customers.length);
        console.log('Recebido', form.value);
        console.log(form.value.name, form.value.email);
        this.lName = null;
        this.lBirthdate = null;
        this.lEmail = null;
        this.lGender = null;
      }
    }
  }
}
