import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit{
  customers: CustomerModel[] = [];
  public typeList: boolean = (localStorage.getItem('emxTypeList') == "true");

  constructor() {
   
    this.customers.push(
      {
        id: 1,
        name: 'Clóvis Garcia',
        birthdate: new Date('2012-10-13'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 2,
        name: 'Clóvis Garcia',
        birthdate: new Date('2004-7-12'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 3,
        name: 'Clóvis Garcia',
        birthdate: new Date('2009-8-27'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 4,
        name: 'Clóvis Garcia',
        birthdate: new Date('2013-12-13'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 5,
        name: 'Clóvis Garcia',
        birthdate: new Date('1979-11-1'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 6,
        name: 'Clóvis Garcia',
        birthdate: new Date('1998-4-10'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 7,
        name: 'Clóvis Garcia',
        birthdate: new Date('1993-2-23'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 8,
        name: 'Clóvis Garcia',
        birthdate: new Date('1981-7-23'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 9,
        name: 'Clóvis Garcia',
        birthdate: new Date('2015-6-4'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 10,
        name: 'Clóvis Garcia',
        birthdate: new Date('1995-2-23'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 11,
        name: 'Clóvis Garcia',
        birthdate: new Date('2001-6-23'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 12,
        name: 'Clóvis Garcia',
        birthdate: new Date('1997-11-18'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 13,
        name: 'Clóvis Garcia',
        birthdate: new Date('2019-8-15'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 14,
        name: 'Clóvis Garcia',
        birthdate: new Date('2006-4-3'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 15,
        name: 'Clóvis Garcia',
        birthdate: new Date('1993-6-20'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 16,
        name: 'Clóvis Garcia',
        birthdate: new Date('2006-4-9'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 17,
        name: 'Clóvis Garcia',
        birthdate: new Date('1983-3-23'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 18,
        name: 'Clóvis Garcia',
        birthdate: new Date('1977-4-11'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 19,
        name: 'Clóvis Garcia',
        birthdate: new Date('2004-2-8'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 20,
        name: 'Clóvis Garcia',
        birthdate: new Date('1977-3-5'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 21,
        name: 'Clóvis Garcia',
        birthdate: new Date('1999-1-28'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 22,
        name: 'Clóvis Garcia',
        birthdate: new Date('1992-7-6'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 23,
        name: 'Clóvis Garcia',
        birthdate: new Date('1981-1-15'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        },
        {
        id: 24,
        name: 'Clóvis Garcia',
        birthdate: new Date('2014-5-2'),
        email: 'asdasd@asd.asd',
        gender: 'Feminino',
        }                
    );
  }

  ngOnInit(){
    // const ls = JSON.parse(localStorage.getItem('typeList'));
    const validateDataLocalStorage:string | null = localStorage.getItem("emxCustomerList");
    if (validateDataLocalStorage) this.customers = JSON.parse(validateDataLocalStorage);
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
    localStorage.setItem('emxCustomerList', JSON.stringify(this.customers));

  }
}
