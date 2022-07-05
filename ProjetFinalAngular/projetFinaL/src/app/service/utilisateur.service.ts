import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../models/Formateur.model';
import { Role } from '../models/Role.model';
import { Utilisateur } from '../models/Utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  //Methode getById
  getById(id: number) {
    return this.http.get<Utilisateur>('http://localhost:4222/utilisateurs/' + id);
  }


  //Methode getByUsername
  getByUsername(username: string) {
    return this.http.get<Utilisateur>('http://localhost:4222/utilisateursByUsername/' + username)

  }

  //Methode modifierU
  modifierU(u: Utilisateur) {
    return this.http.put<Utilisateur>('http://localhost:4222/utilisateurs', u);
  }

  //Methode recuperer formations associé participant
  rolesByIdUser(id: number) {
    return this.http.get<Role[]>('http://localhost:4222/rolesByIdUtilisateur/' + id);
  }
}
