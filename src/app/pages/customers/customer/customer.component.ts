import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/models/customer-model';
import { CustomerService } from 'src/app/services/customers/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers: CustomerModel[] = [];
  public lId: number | null = 0;
  public typeList: boolean = localStorage.getItem('emxTypeList') == 'true';
  public lName: string | null = null;
  public lBirthdate: Date | null = null;
  public lEmail: string | null = null;
  public lGender: string | null = null;
  private userLogged:boolean = false;
  private router: Router;
  private handlerAddEdit: boolean = false; // False: Edit | True: Add

  constructor(
    router: Router,
    private customerService: CustomerService,
    ) {
      this.router = router;
    }

  ngOnInit(): void {
    this.userLogged = sessionStorage.getItem('keysession') == 'true';
    if (!this.userLogged)  this.router.navigate(['/','']);
    this.customers = this.customerService.getCustomersList();
  }

  deleteCustomer(id: number) {
    if (id > 0) this.customerService.deleteCustomer(id);
    this.ngOnInit();
  }

  editUser(id: number) {
    this.handlerAddEdit = true;
    const index = this.customers.findIndex((element) => element.id === id);
    this.lId = this.customers[index].id;
    this.lName = this.customers[index].name;
    this.lBirthdate = this.customers[index].birthdate;
    this.lEmail = this.customers[index].email;
    this.lGender = this.customers[index].gender;
    this.lId = this.customers[index].id;
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

  setModAdd(){
    this.handlerAddEdit = false
  }

  getDataForm(form: NgForm, id: number) {
    console.log(this.handlerAddEdit);
    debugger
    if (form.invalid) {
      console.log('Formulário inválido!');
    } else {
      if (this.handlerAddEdit) {
        this.customerService.setCustomersAdd(form);
      } else {
        this.handlerAddEdit = false;
        const index = this.customers.findIndex((element) => element.id === id);
        this.customers[index].name = form.value.name;
        this.customers[index].birthdate = form.value.birthdate;
        this.customers[index].email = form.value.email;
        this.customers[index].gender = form.value.gender;
        this.customerService.setCustomersEdit();
      }
      this.cleanFields();
    }
  }

  public cleanFields() {
    this.handlerAddEdit = true;
    this.lId = null;
    this.lName = null;
    this.lBirthdate = null;
    this.lEmail = null;
    this.lGender = null;
  }
}
