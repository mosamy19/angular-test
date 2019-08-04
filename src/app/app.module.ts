import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { CartComponent } from './cart/cart-list/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { BackgroundColorDirective } from './shared/background-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    NavbarComponent,
    CartComponent,
    CartItemComponent,
    BackgroundColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
