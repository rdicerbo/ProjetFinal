import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paiement } from '../models/Paiement.model';
import { Participant } from '../models/Participant.model';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(private http:HttpClient) { }

     //Methode recuperer formations associe participant
     paiementsByIdParticipant(idParticipant:number)
     {
       return this.http.get<Paiement[]>('http://localhost:4222/paiementsByIdParticipant/'+idParticipant);
     }


     //Methode paiementByIdFormation
     paiementByIdFormation(idFormation:number, p: Participant)
     {
      return this.http.put<Paiement>('http://localhost:4222/dernierPaiement/'+idFormation, p);
     }

      //Methode insererP
      insererP(p:Paiement)
      {
       return this.http.post<Paiement>('http://localhost:4222/paiements', p);
      }
}
