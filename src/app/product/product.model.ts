import {Categories} from '../categories.enum';

interface ProductItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Categories;
  isAvailable: boolean;
}

export class ProductModel implements ProductItem {
  public id: number;
  public name: string;
  public description: string;
  public price: number;
  public category: Categories;
  public isAvailable: boolean;

  constructor(id: number, name: string, description: string, price: number, category: Categories, isAvailable: boolean) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.isAvailable = isAvailable;
  }
}
