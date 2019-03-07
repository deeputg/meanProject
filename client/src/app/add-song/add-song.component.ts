import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  songName=""
  songAlbum=""
  songArtist=""
  songYoutubeLink=""
  songDesc=""
  songGenure=""
  songImage:File
  songPrice:Number
  genreList;
  msgData:Object={data:false};

  baseUrl = window.location.origin;

  constructor(
    private httpVar:HttpClient
  ) { }

  ngOnInit() {
    let link ="http://127.0.0.1:8000/genure/"
    //let link ="genure"
    this.httpVar.get(link).subscribe(data=>{
      this.genreList = data;
      console.log(this.genreList)
    })
    this.httpVar.post("http://127.0.0.1:8000/song/test",{"name":"name"}).subscribe(data=>{
      
    })
  }
  onSubmit(){
    console.log(this.songGenure)
    // if(this.songName!=""&&this.songAlbum!=""&&this.songArtist!=""&&this.songYoutubeLink!=""&&this.songDesc!=""&&this.songGenure!=""){
      let newSong = {songName:this.songName,songAlbum:this.songAlbum,songArtist:this.songArtist,songYoutubeLink:this.songYoutubeLink,songDesc:this.songDesc,songGenure:this.songGenure,songImage:this.songImage,songPrice:this.songPrice}
      console.log(newSong)
      let url = "http://127.0.0.1:8000/song/add";
      this.httpVar.post(url,{songItem:newSong}).subscribe(data=>function(data){
        this.msgData=data;
        console.log(data)
      })
   // }
  }

}
