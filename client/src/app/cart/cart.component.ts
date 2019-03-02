import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart_count= 0;
  cart_total = 0;
  cart=[];
  constructor() { }

  ngOnInit() {
    this.getLocarStorageCart()
    this.getLocalStorageCartAmount();
    this.cart_count=this.cart.length
    window.scrollTo(0, 0)
  }
  addToCart(songLink,songName,songImage,songPrice){
    console.log(songPrice)
    if(!this.isInCartUpdate(songLink,songPrice)){
     let cartItem = {songLink:songLink,songName:songName,songImage:songImage,count:1,songPrice:songPrice}
     this.cart.push(cartItem);
     this.cart_count = this.cart_count+1;
     this.cart_total = this.cart_total+songPrice;
    }
    this.setLocarStorageCart();
  }
  minusFromCart(songLink,songPrice){

    for (var index = 0; index < this.cart.length; ++index) {
      var cartItem = this.cart[index];
      if(cartItem.songLink == songLink){
        cartItem.count = cartItem.count-1;
        this.cart_total = this.cart_total-songPrice;
        if(cartItem.count==0)
          this.removeFromCart(songLink,songPrice);
      }
    }
    this.setLocarStorageCart();
  }
  removeFromCart(songLink,songPrice){
    for (var index = 0; index < this.cart.length; ++index) {
      var cartItem = this.cart[index];
      if(cartItem.songLink == songLink){
        //console.log(this.cart)
        this.cart_total = this.cart_total-(cartItem.count*songPrice);
        this.cart.splice(index,1)
        //console.log(this.cart)
      }
    }
    this.setLocarStorageCart()
  }
  isInCartUpdate(songLink,songPrice){
    //console.log(this.cart)
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
