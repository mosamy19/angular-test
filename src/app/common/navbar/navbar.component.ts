import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private cartService: CartService) { }
  cart;

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

}
