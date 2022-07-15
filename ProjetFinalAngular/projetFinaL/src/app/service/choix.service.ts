import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Choix } from '../models/Choix.model';

@Injectable({
  providedIn: 'root'
})
export class ChoixService {

  constructor(private http: HttpClient) { }

  //Methode getAll
  getAll() {
    return this.http.get<Choix[]>('http://localhost:4222/choix');
  }

  //Methode ajouterC
  ajouterC(c: Choix) {
    return this.http.post<Choix>('http://localhost:4222/choix', c);
  }

  //Methode supprimer
  supprimer(id: number) {
    return this.http.delete('http://localhost:4222/choix/' + id);

  }

  //Methode modifierC
  modifierC(c: Choix) {
    return this.http.put<Choix>('http://localhost:4222/choix', c);
  }

  //Methode getById
  getById(id: number) {
    return this.http.get<Choix>('http://localhost:4222/choix/' + id);
  }
  //Methode getByIdQuestion
  getByIdQuestion(id: number) {
    return this.http.get<Choix[]>('http://localhost:4222/choixByIdQuestion/' + id);
  }

}
