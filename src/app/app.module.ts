import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckblattComponent } from './deckblatt/deckblatt.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VitaComponent } from './vita/vita.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckblattComponent,
    NavbarComponent,
    VitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
