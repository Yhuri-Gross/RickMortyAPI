import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { AuthService } from 'src/app/services/auth.service';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss']
})
export class CharacterDetailPageComponent implements OnInit {
  character: Character | undefined;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private rickMortyService: RickMortyService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.rickMortyService.getCharacter(Number(id)).subscribe(data => {
      this.character = data;
    });
    this.user = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  goBack() {
    this.router.navigate(['characters']);
  }
}
