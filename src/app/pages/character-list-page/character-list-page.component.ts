import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-character-list-page',
  templateUrl: './character-list-page.component.html',
  styleUrls: ['./character-list-page.component.scss']
})
export class CharacterListPageComponent implements OnInit {
  characters: any[] = [];
  page: number = 1;
  query: string = '';
  user: any;

  constructor(
    private rickMortyService: RickMortyService,
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.loadCharacters();
  }

  loadCharacters() {
    if (this.query) {
      this.rickMortyService.searchCharacters(this.query, this.page).subscribe(data => {
        console.log('API Response:', data);  

        this.characters = [...this.characters, ...data.results];
      });
    } else {
      this.rickMortyService.getCharacters(this.page).subscribe(data => {
        console.log('API Response:', data);  

        this.characters = [...this.characters, ...data.results];
      });
    }
  }

  onScroll() {
    this.page++;
    this.loadCharacters();
  }

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.characters = [];
    this.page = 1;
    this.query = inputElement.value;
    this.loadCharacters();
  }  

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
