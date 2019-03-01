import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart_count= 0;
  cart=[];
  constructor() { }

  ngOnInit() {
    this.getsetLocarStorageCart()
    this.cart_count=this.cart.length
  }
  addToCart(songLink,songName,songImage){
    if(!this.isInCartUpdate(songLink)){
     let cartItem = {songLink:songLink,songName:songName,songImage:songImage,count:1,price:10}
     this.cart.push(cartItem);
     this.cart_count = this.cart_count+1;
    }
    this.setLocarStorageCart();
  }
  minusFromCart(songLink){

    for (var index = 0; index < this.cart.length; ++index) {
      var cartItem = this.cart[index];
      if(cartItem.songLink == songLink){
        cartItem.count = cartItem.count-1;
        if(cartItem.count==0)
          this.removeFromCart(songLink);
      }
    }
    this.setLocarStorageCart();
  }
  removeFromCart(songLink){
    for (var index = 0; index < this.cart.length; ++index) {
      var cartItem = this.cart[index];
      if(cartItem.songLink == songLink){
        console.log(this.cart)
       this.cart.splice(index,1)
       console.log(this.cart)
      }
    }
    this.setLocarStorageCart()
  }
  isInCartUpdate(songLink){
    //console.log(this.cart)
    var hasMatch =false;

    for (var index = 0; index < this.cart.length; ++index) {
      var cartItem = this.cart[index];
      if(cartItem.songLink == songLink){
        hasMatch = true;
        cartItem.count = cartItem.count+1;
        
        break;
      }
    }
    return hasMatch;
  }
  setLocarStorageCart(){
    localStorage.setItem("cart",JSON.stringify(this.cart))
  }
  getsetLocarStorageCart(){
    if(localStorage.getItem("cart"))
      this.cart = JSON.parse(localStorage.getItem("cart"))
  }

}
