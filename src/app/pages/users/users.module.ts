import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserLoginComponent
  ],
  exports: [
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UsersModule { }
