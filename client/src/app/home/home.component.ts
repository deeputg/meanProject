import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

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
  constructor(private httpVar:HttpClient) { }

  ngOnInit() {
    let homelink = "home";
    //let homelink = "http://127.0.0.1:8000/home";
    this.httpVar.get(homelink).subscribe(data=>{
      this.songData = data;
      this.getLocarStorageCart()
      this.getLocalStorageCartAmount();
      this.cart_count=this.cart.length
    })
    
  }
  addToCart(songLink,songName,songImage,songPrice){
    //console.log(songPrice)
    if(!this.isInCartUpdate(songLink,songPrice)){
     let cartItem = {songLink:songLink,songName:songName,songImage:songImage,count:1,songPrice:songPrice}
     this.cart.push(cartItem);
     this.cart_count = this.cart_count+1;
     this.cart_total = this.cart_total+songPrice;
    }
    this.setLocarStorageCart();
  }
  isInCartUpdate(songLink,songPrice){
    
    var hasMatch =false;

    for (var index = 0; index < this.cart.length; ++index) {
      var cartItem = this.cart[index];
      if(cartItem.songLink == songLink){
        hasMatch = true;
        cartItem.count = cartItem.count+1;
        this.cart_total = this.cart_total+songPrice;
        
        //console.log(this.cart)
        break;
      }
    }
    return hasMatch;
  }
  setLocarStorageCart(){
    localStorage.setItem("cart",JSON.stringify(this.cart))
    console.log(this.cart_total)
    localStorage.setItem("cart_total",String(this.cart_total))
  }
  getLocarStorageCart(){
    if(localStorage.getItem("cart"))
      this.cart = JSON.parse(localStorage.getItem("cart"))
  }
  getLocalStorageCartAmount(){
    if(localStorage.getItem("cart_total"))
    this.cart_total = parseInt(localStorage.getItem("cart_total"))
  }
}
