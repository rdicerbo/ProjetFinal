import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  //Methode Liste de contacts par idCommercial
  getByIdCommercial(id: number) {
    return this.http.get<Contact[]>('http://localhost:4222/contactsIdCommercial/' + id);

  }
}
