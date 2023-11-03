import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  private user: UserModel[] = [];
  showLogin: boolean = true;
  private userLogged: boolean = false;
  public logEmail: string = '';
  public logPass: string = '';
  private router: Router;
  public reEmail= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public reLowCase = /^(?=.*[a-z])/;
  public reUpperCase = /(?=.*[A-Z])/;
  public reNumberCaracter = /(?=.*[0-9])/;
  public reSpecialCaracter = /(?=.*[!@#$%^&*])/;
  public reLengthCaracter = /(?=.{8,})/;

  constructor(
    router: Router,
    private toastr: ToastrService,
    private userService: UserService,
    ) {
    this.router = router;
    // this.user.push({
    //   email: 'admin',
    //   pass: 'admin',
    // });
  }

  ngOnInit(): void {
    this.userLogged = sessionStorage.getItem('keysession') == 'true';
    this.redirectToCustomers();
  }

  private redirectToCustomers() {
    if (this.userLogged) this.router.navigate(['/', 'customer']);
  }

  handlerLoginRegister(value: string) {
    switch (value) {
      case 'siginup':
        this.showLogin = false;
        break;
      case 'cancel':
        this.showLogin = true;
        break;
    }
  }

  signinup(form: NgForm) {
    if (this.showLogin) { // Form Login
      
      if (this.userService.findUser(form)) {
        this.userLogged = true;
        this.redirectToCustomers();
      }
      sessionStorage.setItem('keysession', JSON.stringify(this.userLogged));
    } else { // Form Register
      if (this.userService.validateNewUser(form)){
        this.userLogged = true;
        this.redirectToCustomers();
      };
    }
  }
}

