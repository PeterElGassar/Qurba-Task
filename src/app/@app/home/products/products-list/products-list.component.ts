import { ProductsService } from './../products.service';
import { Component, OnInit, Optional, Self } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  providers: [ProductsService]

})
export class ProductsListComponent implements OnInit {

  productList: any;
  pageNumber:number=1
  constructor(@Self() private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAll('products').subscribe((res: any) => {
      if (res) {


        this.productList = res.products;
        console.log(this.productList);
        
      }
    })
  }

}
