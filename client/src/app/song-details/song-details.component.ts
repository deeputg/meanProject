import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import {Location} from '@angular/common'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {
  songData;
  constructor(
    private actiRoute:ActivatedRoute,
    private locVar:Location,
    private httpVar:HttpClient
  ) { }

  ngOnInit() {
    this.getDetails(this.actiRoute.snapshot.paramMap.get('songLink'));
    window.scrollTo(0, 0)
  }

  getDetails(songLink){
    this.httpVar.get('http://127.0.0.1:8000/song/detail/'+songLink).subscribe(data=>{
      this.songData=data[0];
      console.log(data[0])
    })
  }
}
