import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customers/customer.service';
import { CustomerComponent } from '../../customers/customer/customer.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnChanges{
  private userLogged: boolean = false;
  private router: Router;
  public searchField: string;

  constructor(
    private customerCompoment: CustomerComponent,
    private customerService: CustomerService,
    router: Router
    ) {
    this.router = router;
    this.searchField = '';
  }

  ngOnChanges(){
    console.log('Veio aqui!');
  }

  
  logout() {
    sessionStorage.clear();
    sessionStorage.setItem('keysession', JSON.stringify(this.userLogged));
    this.router.navigate(['/', '']);
  }

  search() {
    if (this.searchField) {
      // debugger;
      const lenSearch: number = this.searchField.length;
      if (lenSearch > 0) {
        this.customerService.searchFlag = false;
        this.customerService.searchText = this.searchField;
        if (this.searchField[0] === '@') {
          this.customerService.searchType = '@';
          console.log('Pesquisa pelo e-mail!');
        } else if (lenSearch > 0) {
          if (this.searchField[0] === '#') {
            this.customerService.searchType = '#';
            console.log('Pesquisa pela data de nascimento!');
          } else {
            this.customerService.searchType = '';
            console.log('Pesquisa pelo nome!');
          }
        }
        this.customerService.getCustomersList(this.customerService.searchFlag);
        this.customerCompoment.ngOnInit();
      }
    }
  }
}
