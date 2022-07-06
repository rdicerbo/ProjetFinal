import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from '../models/Participant.model';
import { Relance } from '../models/Relance.model';

@Injectable({
  providedIn: 'root'
})
export class RelanceService {

  constructor(private http: HttpClient) { }

  //Methode recuperer formations associé participant
  relancesByIdParticipant(idParticipant: number) {
    return this.http.get<Relance[]>('http://localhost:4222/relancesByIdParticipant/' + idParticipant);
  }
  //Methode recuperer formations associé participant et formations
  relancesByIdFormation(idFormation: number, p: Participant) {
    return this.http.put<Relance[]>('http://localhost:4222/relancesByIdParticipantFormation/' + idFormation, p);
  }

}
