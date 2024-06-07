import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import { CharacterListPageComponent } from './pages/character-list-page/character-list-page.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'character/:id', component: CharacterDetailPageComponent },
  { path: 'characters', component: CharacterListPageComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
