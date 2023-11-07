import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customers/customer.service';
import { CustomerComponent } from '../../customers/customer/customer.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnChanges, OnInit {
  private userLogged: boolean = false;
  private router: Router;
  public searchField: string;
  private flag: string = 'pt-br';
  public imgFlag: string = 'assets/img/brasil.png';

  constructor(
    private customerCompoment: CustomerComponent,
    private customerService: CustomerService,
    router: Router
  ) {
    this.router = router;
    this.searchField = '';
  }

  ngOnChanges() {
    console.log('Veio aqui!');
  }

  ngOnInit(): void {
    this.switchFlag();
  }


  switchFlag(){
    const tpFlag = localStorage.getItem('flag');
    console.log("Clicou!", tpFlag);
    switch (tpFlag) {
      case 'pt-br':
        this.flag = 'en-us';
        this.imgFlag = 'assets/img/usa.png';
        break;
        case 'en-us':
          this.flag = 'pt-br';
          this.imgFlag = 'assets/img/brasil.png';
        break;
    }
    localStorage.setItem('flag', this.flag);
  }

  logout() {
    sessionStorage.clear();
    sessionStorage.setItem('keysession', JSON.stringify(this.userLogged));
    this.router.navigate(['/', '']);
  }

  search() {
    if (!this.searchField) {
      this.customerService.searchFlag = true;
    } else {
      this.customerService.getCustomersList(true);
      const lenSearch: number = this.searchField.length;
      if (lenSearch > 0) {
        this.customerService.searchFlag = false;
        this.customerService.searchText = this.searchField;
        if (this.searchField[0] === '@') {
          this.customerService.searchType = '@';
        } else if (lenSearch > 0) {
          if (this.searchField[0] === '#') {
            this.customerService.searchType = '#';
            console.log('Pesquisa pela data de nascimento!');
          } else {
            this.customerService.searchType = '';
          }
        }
      }
    }
    this.customerService.getCustomersList(this.customerService.searchFlag);
    this.customerCompoment.ngOnInit();
  }
}
