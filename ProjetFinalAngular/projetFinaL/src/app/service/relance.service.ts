import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Relance } from '../models/Relance.model';

@Injectable({
  providedIn: 'root'
})
export class RelanceService {

  constructor(private http:HttpClient) { }

     //Methode recuperer formations associé participant
     relancesByIdParticipant(idParticipant:number)
     {
       return this.http.get<Relance[]>('http://localhost:4222/relancesByIdParticipant/'+idParticipant);
     }
}
