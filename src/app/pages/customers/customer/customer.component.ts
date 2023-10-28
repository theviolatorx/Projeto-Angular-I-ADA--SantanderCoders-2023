import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit{
  customers: CustomerModel[] = [];
  typeList: boolean = (localStorage.getItem('typeList') == "true");

  constructor() {
   
    this.customers.push(
      {
        id: '1',
        name: 'Clóvis Garcia',
        birthdate: new Date('1975-06-18'),
        email: 'theviolatorx@gmail.com',
        gender: 'Masculino',
      },
      {
        id: '2',
        name: 'Heloísa Silva e Garcia',
        birthdate: new Date('2003-09-09'),
        email: 'heloisa@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'Feminino',
      },
      {
        id: '3',
        name: 'Patrícia Ap Silva',
        birthdate: new Date('1975-03-20'),
        email: 'patilolo@gmail.com',
        gender: 'F',
      }
    );
  }

  ngOnInit(){
    // const ls = JSON.parse(localStorage.getItem('typeList'));
  }

  onHandleTypeList(event: boolean): void {
    if (!event) { 
      this.typeList = true; // Tabela 
      localStorage.setItem('typeList', JSON.stringify(this.typeList));
    }
    if (event) {
      this.typeList = false; // Card
      localStorage.setItem('typeList', JSON.stringify(this.typeList));
    }
    const a = localStorage.getItem('typeList');
    console.log(a, typeof a);

  }
}
