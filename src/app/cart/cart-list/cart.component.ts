import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../shared/product-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  removeCartItem(product: Product, index) {
    this.cart = this.cartService.removeFromCart(product, index);
  }

  calculateTotal() {
    let total = 0;
    this.cart.map(cartItem => {
      let itemQuantityPrice = cartItem.price * cartItem.cartQuantity
      return total += itemQuantityPrice
    }
    );
    return total;
  }

}
