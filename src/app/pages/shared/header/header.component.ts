import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private userLogged: boolean = false;
  private router: Router;

  constructor(
    router: Router
  ){
    this.router = router;
  }
  logout(){
    sessionStorage.clear();
    sessionStorage.setItem('keysession',JSON.stringify(this.userLogged));
    this.router.navigate(['/','']);
  }

}
