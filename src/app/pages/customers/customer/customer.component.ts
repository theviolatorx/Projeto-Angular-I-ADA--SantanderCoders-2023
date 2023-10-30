import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerModel } from 'src/app/models/customer-model';
import { CustomerService } from 'src/app/services/customers/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit{
  customers: CustomerModel[] = [];
  public typeList: boolean = (localStorage.getItem('emxTypeList') == "true");

  constructor(
    private customerService: CustomerService
  ) {
    
  }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomersList();
  }

  deleteCustomer(id: number){
    if (id > 0) this.customerService.deleteCustomer(id);
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

  getDataForm(form: NgForm){
    if (form.invalid) console.log("Formulário inválido")
    console.log("Recebido", form.value);
  }

}
