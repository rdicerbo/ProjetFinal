import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../models/Question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  //Methode getAll
  getAll() {
    return this.http.get<Question[]>('http://localhost:4222/questions');
  }

  //Methode ajouterQ
  ajouterQ(q: Question) {
    return this.http.post<Question>('http://localhost:4222/questions', q);
  }

  //Methode supprimer
  supprimer(id: number) {
    return this.http.delete('http://localhost:4222/questions/' + id);

  }

  //Methode modifierQ
  modifierQ(q: Question) {
    return this.http.put<Question>('http://localhost:4222/questions', q);
  }

  //Methode getById
  getById(id: number) {
    return this.http.get<Question>('http://localhost:4222/questions/' + id);
  }

  //Methode getByIdQuiz
  getByIdQuiz(id: number) {
    return this.http.get<Question[]>('http://localhost:4222/questionsByIdQuiz/' + id);
  }



}
