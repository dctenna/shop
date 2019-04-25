import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Categories } from '../categories.enum';
import { ProductModel } from './product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: ProductModel;
  @Output() buy: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  onBuy(event: any): void {
    this.buy.emit(this.product);
    console.log(`You've bought ${this.product.name}`);
  }
}
