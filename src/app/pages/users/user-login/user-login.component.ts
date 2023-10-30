import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  showLogin:boolean = true;
  userLogged:boolean = false;

  constructor(){}


  handlerLoginRegister(value: string){
    switch (value){
      case 'siginup':
        this.showLogin = false;
        break;
      case 'cancel':
        this.showLogin = true;
        break;
    }
  }
}
