import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paiement } from '../models/Paiement.model';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(private http:HttpClient) { }

     //Methode recuperer formations associé participant
     paiementsByIdParticipant(idParticipant:number)
     {
       return this.http.get<Paiement[]>('http://localhost:4222/paiementsByIdParticipant/'+idParticipant);
     }
}
