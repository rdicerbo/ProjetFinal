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

  //Methode ajouterC
  ajouterC(c: Contact) {
    return this.http.post<Contact>('http://localhost:4222/contacts', c);
  }

  //Methode supprimer
  supprimer(id: number) {
    return this.http.delete('http://localhost:4222/contacts/' + id);

  }

  //Methode modifierC
  modifierC(c: Contact) {
    return this.http.put<Contact>('http://localhost:4222/contacts', c);
  }

  //Methode getById
  getById(id: number) {
    return this.http.get<Contact>('http://localhost:4222/contacts/' + id);
  }

  //Methode getByIdProspect
  getByIdProspect(id: number) {
    return this.http.get<Contact>('http://localhost:4222/contactsIdProsptect/' + id);
  }
}
