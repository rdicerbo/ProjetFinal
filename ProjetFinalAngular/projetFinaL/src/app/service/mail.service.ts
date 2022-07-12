import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact.model';
import { Prospect } from '../models/Prospect.model';
import { Relance } from '../models/Relance.model';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }


  //Methode recuperer formations associe participant
  mailInfo(id: number) {
    return this.http.get('http://localhost:4222/sendEmailInfoProspect/' + id);
  }
  mailRdv(id: number, c: Contact) {
    return this.http.put('http://localhost:4222/sendEmailRdv/' + id, c);
  }
  mailRelance(id: number, r: Relance) {
    return this.http.put('http://localhost:4222/sendEmailRelance/' + id, r);
  }

}
