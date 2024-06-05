import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterListPageComponent } from './pages/character-list-page/character-list-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterListPageComponent,
    CharacterDetailComponent,
    CharacterDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
