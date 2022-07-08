import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from '../models/Participant.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  constructor(private http: HttpClient) { }


  //Methode getAll
  getAll() {
    return this.http.get<Participant[]>('http://localhost:4222/participants');
  }

  //Methode participantsByIdFormation
  participantsByIdFormation(id: number) {
    return this.http.get<Participant[]>('http://localhost:4222/participantsByIdFormation/' + id);
  }



  //Methode ajouterP
  ajouterP(id: number, participant: Participant) {
    return this.http.post<Participant>('http://localhost:4222/participants/' + id, participant);
  }

  //Methode supprimer
  supprimer(idParticipant: number) {
    return this.http.delete('http://localhost:4222/participants/' + idParticipant);

  }

  //Methode modifierP
  modifierP(id: number, participant: Participant) {
    return this.http.put<Participant>('http://localhost:4222/participants/' + id, participant);
  }

  //Methode getById
  getById(idParticipant: number) {
    return this.http.get<Participant>('http://localhost:4222/participants/' + idParticipant);
  }

  //Methode participantsAdd
  participantsAdd(id: number, participant: Participant) {
    return this.http.put<Participant>('http://localhost:4222/participantsAdd/' + id, participant);
  }


  // Methode recup diplome Pdf
  getPdf(id: number, p: Participant) {
    const httpOptions = {
      responseType: ('blob' as 'json')
    };

    return this.http.post<any>('http://localhost:4222/pdfreport/' + id, p, httpOptions);
  }

}
