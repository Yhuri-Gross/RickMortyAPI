import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss']
})
export class CharacterDetailPageComponent implements OnInit {
  character: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private rickMortyService: RickMortyService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.rickMortyService.getCharacter(Number(id)).subscribe(data => {
      this.character = data;
    });
  }
}
