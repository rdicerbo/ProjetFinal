import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resultat } from '../models/Resultat.model';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {

  constructor(private http: HttpClient) { }

  //Methode getAll
  getAll() {
    return this.http.get<Resultat[]>('http://localhost:4222/resultats');
  }

  //Methode ajouterR
  ajouterR(r: Resultat) {
    return this.http.post<Resultat>('http://localhost:4222/resultats', r);
  }

  //Methode supprimer
  supprimer(id: number) {
    return this.http.delete('http://localhost:4222/resultats/' + id);

  }

  //Methode modifierR
  modifierR(r: Resultat) {
    return this.http.put<Resultat>('http://localhost:4222/resultats', r);
  }

  //Methode getById
  getById(id: number) {
    return this.http.get<Resultat>('http://localhost:4222/resultats/' + id);
  }
}
