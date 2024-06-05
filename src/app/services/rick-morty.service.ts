import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(page: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/character?page=${page}`);
  }

  getCharacter(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/character/${id}`);
  }

  searchCharacters(query: string, page: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/character?name=${query}&page=${page}`);
  }
}
