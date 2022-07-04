import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prospect } from '../models/Prospect.model';

@Injectable({
  providedIn: 'root'
})
export class ProspectService {

  constructor(private http: HttpClient) { }

  //Methode getAll
  getAll() {
    return this.http.get<Prospect[]>('http://localhost:4222/prospects');
  }

  //Methode getAll sans contact associé
  getAllSansContact() {
    return this.http.get<Prospect[]>('http://localhost:4222/prospectsSansContact');
  }

  //Methode ajouterP
  ajouterP(p: Prospect) {
    return this.http.post<Prospect>('http://localhost:4222/prospects', p);
  }

  //Methode supprimer
  supprimer(id: number) {
    return this.http.delete('http://localhost:4222/prospects/' + id);

  }

  //Methode modifierP
  modifierP(p: Prospect) {
    return this.http.put<Prospect>('http://localhost:4222/prospects', p);
  }

  //Methode getById
  getById(id: number) {
    return this.http.get<Prospect>('http://localhost:4222/prospects/' + id);
  }
}
