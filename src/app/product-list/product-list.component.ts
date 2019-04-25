import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { ProductModel } from '../product/product.model';
import { ProductsService } from '../product/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Array<ProductModel>;


  constructor( public productsService: ProductsService ) { }

  ngOnInit() {
      this.products = this.productsService.getProducts();
    }

}
