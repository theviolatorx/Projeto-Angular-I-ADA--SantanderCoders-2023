import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/user-model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: UserModel[] = [];

  constructor(private toastr: ToastrService) {
    this.loadUsers();
  }

  validateNewUser(form: NgForm): boolean {
    const passUser = form.value.siginUpPass;
    let pass: boolean = false;
    let email: boolean = false;
    let existUser: boolean = false;

    pass = this.validatePassword(passUser);
    const emailUser = form.value.siginUpEmail.trim().toLowerCase();
    email = this.validateEmail(emailUser);
    existUser = this.existUser(form);
    if (pass && email && !existUser) {
      this.setUserAdd(form);
      return true;
    }
    return false;
  }

  private existUser(form: NgForm): boolean {
    const existUser = this.users.find(
      (element) => element.email == form.value.siginUpEmail
    );
    if (existUser) {
      this.toastr.error('E-mail already registered!');
      return true;
    } else {
      return false;
    }
  }

  private validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      this.toastr.error('Password must have at least one lowercase letter!');
      return false;
    }
    return true;
  }

  private validatePassword(pass: string): boolean {
    const lowCase = /^(?=.*[a-z])/;
    const upperCase = /(?=.*[A-Z])/;
    const numberCaracter = /(?=.*[0-9])/;
    const specialCaracter = /(?=.*[!@#$%^&*])/;
    const lengthCaracter = /(?=.{8,})/;
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
      this.toastr.error(
        'The password must have at least one special character!'
      );
      return false;
    }
    if (!lengthCaracter.test(pass)) {
      this.toastr.error('Password must be at least 8 characters long');
      return false;
    }
    return true;
  }

  private loadUsers(): void {
    const validateDataLocalStorage: string | null =
      localStorage.getItem('emxUserList');
    if (validateDataLocalStorage)
      this.users = JSON.parse(validateDataLocalStorage);
  }

  private setUserAdd(form: NgForm) {
    console.log(form.value);
    this.users.push({
      email: form.value.siginUpEmail,
      pass: form.value.siginUpPass,
    });
    this.onSaveCustomers();
  }

  private onSaveCustomers() {
    localStorage.setItem('emxUserList', JSON.stringify(this.users));
    this.toastr.success('User saved successfully!');
    this.loadUsers();
  }

  public findUser(form: NgForm): boolean {
    this.loadUsers();
    const result = this.users.find(
      (element) =>
        element.email === form.value.siginInmail &&
        element.pass === form.value.siginInPass
    );
    if (result) {
      return true;
    } else {
      this.toastr.info('Wrong email or password!');
      return false;
    }
  }
}
