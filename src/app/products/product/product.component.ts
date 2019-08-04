import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/product-model';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.product.addedToCart = !this.product.addedToCart;
  }

}
