import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  myTheme: string = 'dark';

  // onSwitch() {
  //   if (this.myTheme === 'light') this.myTheme = 'dark';
  //   else this.myTheme = 'light';
  // }
}
