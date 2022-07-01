import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../models/Formateur.model';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http:HttpClient) { }

//Methode getAll
getAll()
{
  return this.http.get<Formateur[]>('http://localhost:4222/formateurs');
}


//Methode ajouterF
ajouterF(f:Formateur)
{
  return this.http.post<Formateur>('http://localhost:4222/formateurs',f);
}

//Methode supprimer
supprimer(id:number)
{ 
  return this.http.delete('http://localhost:4222/formateurs/'+id);

}

//Methode modifierF
modifierF(formateur:Formateur)
{
  return this.http.put<Formateur>('http://localhost:4222/formateurs',formateur);
}

//Methode getById
getById(id:number)
{
  return this.http.get<Formateur>('http://localhost:4222/formateurs/'+id);
}

}
