import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckblattComponent } from './deckblatt/deckblatt.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VitaComponent } from './vita/vita.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FooterComponent } from './footer/footer.component';
import { FilmeComponent } from './filme/filme.component';
import { TexteComponent } from './texte/texte.component';
import { ModerationComponent } from './moderation/moderation.component';
import { PodcastComponent } from './podcast/podcast.component';
import { SkillComponent } from './skill/skill.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { BuchListeComponent } from './buch-liste/buch-liste.component';
import { BuchComponent } from './buch/buch.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckblattComponent,
    NavbarComponent,
    VitaComponent,
    KontaktComponent,
    FooterComponent,
    FilmeComponent,
    TexteComponent,
    ModerationComponent,
    PodcastComponent,
    SkillComponent,
    SkillListComponent,
    BuchListeComponent,
    BuchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
