import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private toastr: ToastrService
  ) { }

  validateNewUser(form: NgForm):void {
    const passUser = form.value.siginUpPass;
    let pass: boolean = false;
    if (!this.validatePassword(passUser)) {
      pass = true;
    }
    const emailUser = form.value.siginUpEmail.trim().toLowerCase();
    if (!this.validateEmail(emailUser)){
      this.toastr.error('The entered email is not valid! Example of a valid email: example@example.com');
    }
  }

  private validateEmail(email: string):boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  private validatePassword(pass: string):boolean {
    const lowCase = /^(?=.*[a-z])/;
    const upperCase = /(?=.*[A-Z])/;
    const numberCaracter = /(?=.*[0-9])/;
    const specialCaracter = /(?=.*[!@#$%^&*])/;
    const lengthCaracter = /(?=.{8,})/;
    debugger
    if (!lowCase.test(pass)) {
      this.toastr.error('Password must have at least one lowercase letter!');
      return false;
    }
    if (!upperCase.test(pass)) {
      this.toastr.error('The password must have at least one capital letter!');
      return false;
    }
    if (!numberCaracter.test(pass)) {
      this.toastr.error('The password must have at least one number!');
      return false;
    }
    if (!specialCaracter.test(pass)) {
      this.toastr.error('The password must have at least one special character!');
      return false;
    }
    if (!lengthCaracter.test(pass)) {
      this.toastr.error('Password must be at least 8 characters long');
      return false;
    }
    return true;
  }
}
