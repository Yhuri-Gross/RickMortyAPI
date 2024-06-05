import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  @Input() characters: Character[] = [];
  @Output() selectCharacter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onCharacterClick(id: number) {
    this.selectCharacter.emit(id);
  }
}
