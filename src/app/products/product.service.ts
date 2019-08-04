import { Injectable } from '@angular/core';
import { Product } from '../shared/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      "id": 1,
      "title": "Vincero Luxury Men's Kairos Wrist Watch",
      "price": 199,
      "description": "Top Grain Italian Leather Watch Band - 42mm Analog Watch - Japanese Quartz Movement",
      "imageUrl": "assets/images/_p1.jpg",
      "quantity": 12,
      "cartQuantity": 1,
      "addedToCart": false
    },
    {
      "id": 2,
      "title": "Casio Men's G Shock Stainless Steel Quartz Watch",
      "price": 132,
      "description": "Tough solar powered, shock resistant, 200-meter water resistance, neobrite, double led light, world time, 31 time zones, second stopwatch, countdown timer, 5 daily alarms",
      "imageUrl": "assets/images/_p2.jpg",
      "quantity": 0,
      "cartQuantity": 1,
      "addedToCart": false
    },
    {
      "id": 3,
      "title": "WWOOR Men's Watch Sport Chronograph Watch",
      "price": 149,
      "description": "Waterproof Analog Quartz Digit Stainless Steel Business Casual Gift Watch Wristwatch",
      "imageUrl": "assets/images/_p3.jpg",
      "quantity": 2,
      "cartQuantity": 1,
      "addedToCart": false
    }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    let product = this.products.find(p => p.id == id);
    return product;
  }
}
