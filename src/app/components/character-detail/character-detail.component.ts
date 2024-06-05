import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private rickMortyService: RickMortyService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.rickMortyService.getCharacter(+id).subscribe(character => {
        this.character = character;
      });
    }
  }
}
