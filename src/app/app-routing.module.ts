import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import { CharacterListPageComponent } from './pages/character-list-page/character-list-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterListPageComponent },
  { path: 'characters/:id', component: CharacterDetailPageComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
