import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit{
  user: UserModel[] = [];
  showLogin:boolean = true;
  userLogged:boolean = sessionStorage.getItem('keysession') == 'true';
  public logEmail: string = '';
  public logPass: string = '';
  router: Router;

  constructor(
    router: Router
  ){
    this.router = router;
    this.user.push({
      email: 'emx@emx.com',
      pass: '123'
    });
  }

  ngOnInit(): void{
    this.redirectToCustomers();
  }

  private redirectToCustomers(){
    console.log(this.userLogged);
    if (this.userLogged) {
      this.router.navigate(['/','customer']);
    }
  }

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

  signin(form: NgForm){
    console.log('teste');
    if ( this.user[0].email === form.value.siginInmail && this.user[0].pass === form.value.siginInPass ) {
      console.log(form.value.siginInmail);
      console.log(form.value.siginInPass);
      this.userLogged = true;
    }
    sessionStorage.setItem('keysession',JSON.stringify(this.userLogged));

  }
}
