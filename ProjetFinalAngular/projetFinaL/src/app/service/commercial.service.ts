import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commercial } from '../models/Commercial.model';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {

  constructor(private http: HttpClient) { }

  //Methode getAll
  getAll() {
    return this.http.get<Commercial[]>('http://localhost:4222/commerciales');
  }


  //Methode ajouterC
  ajouterC(c: Commercial) {
    return this.http.post<Commercial>('http://localhost:4222/commerciales', c);
  }

  //Methode supprimer
  supprimer(id: number) {
    return this.http.delete('http://localhost:4222/commerciales/' + id);

  }

  //Methode modifierF
  modifierC(c: Commercial) {
    return this.http.put<Commercial>('http://localhost:4222/commerciales', c);
  }

  //Methode getById
  getById(id: number) {
    return this.http.get<Commercial>('http://localhost:4222/commerciales/' + id);
  }

}
