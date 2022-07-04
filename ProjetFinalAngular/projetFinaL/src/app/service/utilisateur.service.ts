import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../models/Formateur.model';
import { Utilisateur } from '../models/Utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

//Methode getById
getById(id:number)
{
  return this.http.get<Utilisateur>('http://localhost:4222/utilisateurs/'+id);
}


}
