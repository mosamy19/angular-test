import { Injectable } from '@angular/core';
import { Product } from '../shared/product-model';
import { ProductService } from '../products/product.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private productService: ProductService) { }

  cart: Product[] = [];

  getCart() {
    return this.cart
  }

  getItem(productId: number) {
    return this.productService.getProduct(productId);
  }

  addToCart(product: Product) {
    // let item: Product = this.getItem(product.id);
    this.cart.push(product);
    return this.cart;
  }

  removeFromCart(product: Product, index) {
    let item = this.getItem(product.id);
    item.addedToCart = false;
    item.cartQuantity = 1;
    this.cart.splice(index, 1);
    return this.cart;
  }

}
