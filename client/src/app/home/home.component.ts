import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {CartService} from "../cart.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  songData;
  cart_count= 0;
  cart_total=0;
  cart=[];
  constructor(
    private httpVar:HttpClient,
    private cartSr:CartService
  ) { }

  ngOnInit() {
    let homelink = "home";
    //let homelink = "http://127.0.0.1:8000/home";
    this.httpVar.get(homelink).subscribe(data=>{
      this.songData = data;
    })
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
