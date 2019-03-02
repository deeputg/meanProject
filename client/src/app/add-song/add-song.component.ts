import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  songName
  songAlbum
  songArtist
  songYoutubeLink
  songDesc
  songGenure
  songImage
  songPrice
  constructor() { }

  ngOnInit() {
  }

}
