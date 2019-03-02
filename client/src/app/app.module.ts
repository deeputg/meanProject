import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import RouterMOdule and Routes for routong
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
//import hhtpClient Module for listenig from a server
import {HttpClientModule} from "@angular/common/http";
import { SongDetailsComponent } from './song-details/song-details.component';
import { CartComponent } from './cart/cart.component';
import { AddSongComponent } from './add-song/add-song.component'

const appRoutes:Routes = [
  {path:"",component:HomeComponent},
  {path:"songdetails/:songLink",component:SongDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"song/add",component:AddSongComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SongDetailsComponent,
    CartComponent,
    AddSongComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
