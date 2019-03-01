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
  cart=[];
  constructor(private httpVar:HttpClient) { }

  ngOnInit() {
    let homelink = "home";
    //let homelink = "http://127.0.0.1:8000/home";
    this.httpVar.get(homelink).subscribe(data=>{
      this.songData = data;
      this.getsetLocarStorageCart()
      this.cart_count=this.cart.length
    })
    
  }
  addToCart(songLink,songName,songImage){
    if(!this.isInCartUpdate(songLink)){
     let cartItem = {songLink:songLink,songName:songName,songImage:songImage,count:1,price:10}
     this.cart.push(cartItem);
     this.cart_count = this.cart_count+1;
    }
    this.setLocarStorageCart();
  }
  isInCartUpdate(songLink){
    //console.log(this.cart)
    var hasMatch =false;

    for (var index = 0; index < this.cart.length; ++index) {
      var cartItem = this.cart[index];
      if(cartItem.songLink == songLink){
        hasMatch = true;
        cartItem.count = cartItem.count+1;
        
        console.log(this.cart)
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
