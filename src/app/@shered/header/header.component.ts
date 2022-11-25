import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/@app/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: any = null;
  searchTerm: string = '';
  @Input() cartProducts:any[];
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser$;
    this.authService.loadCurrentUser();

  }
  currentUser$: Observable<any>;

  ngOnInit(): void {

    this.authService.currentUser$.subscribe(res => {
      this.currentUser = res;
    });
this.initalCart();
  }
  onSearchProduct() {
    this.onSearch.emit(this.searchTerm)
  }

  getCurrentLoggedInUser() {
    let user: any = localStorage.getItem("userInfo");
    if (user !== null || user !== undefined)
      this.currentUser = JSON.parse(user);
  }


  initalCart() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Cleared');
  }


}
