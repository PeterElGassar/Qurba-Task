import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  providers: [ProductsService,]

})
export class ProductsListComponent implements OnInit {

  productList: any;
  categories: any;
  pageNumber: number = 1
  filteredProducts: any[];
  returnUrl: string;
  cartProducts: any[] = [];
  listOfCheckBoxes: any;

  constructor(private productsService: ProductsService, private authService: AuthService,
    private activeRoute: ActivatedRoute) {
    this.authService.loadCurrentUser();

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllProductsCategories();
    this.getCurrentLoggedInUser();
    this.authService.currentUser$.subscribe(res => {

      ;
    })
  }


  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    if (value === '') {
      this.filteredProducts = this.productList;
    }
    // this.filteredAllCourses = this.filteredCourses(value);
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe((res: any) => {
      if (res) {
        this.productList = res.products;
        this.filteredProducts = res.products;
      }
    })
  }

  getAllProductsCategories() {
    this.productsService.getAllProductsCategories().subscribe((res: any) => {
      if (res) {
        this.categories = res;
      }
    })
  }


  getCurrentLoggedInUser() {
    this.authService.currentUserSubject.subscribe(
      (res: any) => {
        ;
        if (res) {


        }
      },
      (error) => {
      }
    );
  }


  filterByCategory() {
    this.listOfCheckBoxes = document.getElementsByClassName('cat-check');
    let allNotChecked = false;
    this.filteredProducts = []

    for (let i = 0; i < this.listOfCheckBoxes.length; i++) {
      if (this.listOfCheckBoxes[i].checked) {
        allNotChecked = true;
        let filter = this.productList.filter(
          (item: any) => item.category === this.listOfCheckBoxes[i].id
        );
        this.filteredProducts.push(...filter);
      }

    }
    //If All Checkboxes Not Checked getAll
    if (!allNotChecked)
      this.filteredProducts = this.productList;
    
  }


  onSearch(val: any) {
    this.filteredProducts = this.filteredArticalsList(val);
  }

  filteredArticalsList(searchString: string): any[] {
    return this.productList.filter(
      (product: any) =>
        product.title
          .toLocaleLowerCase()
          .indexOf(searchString.toLocaleLowerCase()) !== -1
    );
  }

//add to cart event fire by EventEmitter
  addToCart(item: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let isExist = this.isInCart(item, this.cartProducts)
      if (isExist) {
        this.alertMessage('this item already in the Cart..');
      } else {
        this.cartProducts.push(item);
        localStorage.setItem("cart", JSON.stringify(this.cartProducts));
        this.alertMessage('item added to the Cart..');
      }
    } else {
      this.cartProducts.push(item);
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
      this.alertMessage('item added to the Cart..');
    }
  }

  //check if Item is taken before or not
  private isInCart(
    itemToAdd: any,
    allCartitems: any[]
  ): boolean {
    return allCartitems.find((i) => i.id === itemToAdd.id);
  }

  alertMessage(message:string){
    alert(message);
  }
}
