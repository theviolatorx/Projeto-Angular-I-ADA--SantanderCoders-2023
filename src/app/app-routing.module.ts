import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './pages/users/user-login/user-login.component';
import { CustomerComponent } from './pages/customers/customer/customer.component';

const routes: Routes = [
  {path: '', component: UserLoginComponent },
  {path: 'customer', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
