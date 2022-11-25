import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/@core/data/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

export class ProductItemComponent implements OnInit {
  @Input() product: Product = {
    //initialize description only for use length in html template
    description: '',
    title: '',
  };

  @Output() onAddToCart: EventEmitter<any> = new EventEmitter<any>();;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(productItem: any) {
    this.onAddToCart.emit(productItem);
  }
}
