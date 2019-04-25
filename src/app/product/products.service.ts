import { Injectable } from '@angular/core';

import { ProductModel } from './product.model';
import { Categories } from '../categories.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Array<ProductModel> {
    return [
      new ProductModel(1, 'Lamp', 'Simple lamp', 10, Categories.devices, true),
      new ProductModel(2, 'Phone', 'iPhone', 1000, Categories.toys, false),
      new ProductModel(3, 'Bear', 'Teddy bear', 20, Categories.toys, true),
      new ProductModel(4, 'ABC', 'Book', 5, Categories.books, true)
    ];
  }


}
