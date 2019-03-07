import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service"
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart_count= 0;
  cart_total = 0;
  cart=[];
  constructor(
    private cartSr :CartService
  ) { }

  ngOnInit() {
    this.cartSr.getLocarStorageCart()
    this.cartSr.getLocalStorageCartAmount()
    this.setCart()
    window.scrollTo(0, 0)
  }

  setCart(){
    this.cart = this.cartSr.cart
    this.cart_count = this.cart.length
    this.cart_total = this.cartSr.cart_total
  }

  addToCart(songLink,songName,songImage,songPrice){
    this.cartSr.addToCart(songLink,songName,songImage,songPrice);
    this.setCart()
  }
  
  minusFromCart(songLink,songPrice){
    this.cartSr.minusFromCart(songLink,songPrice)
    this.setCart()
  }

  removeFromCart(songLink,songPrice){
    this.cartSr.removeFromCart(songLink,songPrice)
    this.setCart()
  }

}
