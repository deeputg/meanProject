import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  songData;
  constructor(private httpVar:HttpClient) { }

  ngOnInit() {
    this.httpVar.get("http://127.0.0.1:8000/home").subscribe(data=>{
      this.songData = data;
    })
    
  }

}
