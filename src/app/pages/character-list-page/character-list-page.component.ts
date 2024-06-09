import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
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
  noResults: boolean = false;

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
      this.rickMortyService.searchCharacters(this.query, this.page).subscribe({
        next: data => {
          this.characters = [...this.characters, ...data.results];
          this.noResults = this.characters.length === 0;
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.noResults = true;
          }
        }
      });
    } else {
      this.rickMortyService.getCharacters(this.page).subscribe({
        next: data => {
          this.characters = [...this.characters, ...data.results];
          this.noResults = this.characters.length === 0;
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.noResults = true;
          }
        }
      });
    }
  }
  onScroll() {
    this.page++;
    this.loadCharacters();
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      this.onScroll();
    }
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
