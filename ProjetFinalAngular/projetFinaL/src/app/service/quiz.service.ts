import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/Quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  //Methode getAll
  getAll() {
    return this.http.get<Quiz[]>('http://localhost:4222/quizs');
  }

  //Methode ajouterQ
  ajouterQ(q: Quiz) {
    return this.http.post<Quiz>('http://localhost:4222/quizs', q);
  }

  //Methode supprimer
  supprimer(id: number) {
    return this.http.delete('http://localhost:4222/quizs/' + id);

  }

  //Methode modifierQ
  modifierQ(q: Quiz) {
    return this.http.put<Quiz>('http://localhost:4222/quizs', q);
  }

  //Methode getById
  getById(id: number) {
    return this.http.get<Quiz>('http://localhost:4222/quizs/' + id);
  }

   //Methode getById
   getByIdFormation(idFormation: number) {
    return this.http.get<Quiz[]>('http://localhost:4222/quizsByIdFormation/' + idFormation);
  }



}
