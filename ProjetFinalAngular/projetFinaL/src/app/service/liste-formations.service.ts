import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/Formation.model';

@Injectable({
  providedIn: 'root'
})
export class ListeFormationsService {

  constructor(private http: HttpClient) { }


  //Methode getAll
  getAll() {
    return this.http.get<Formation[]>('http://localhost:4222/formations');
  }


  //Methode ajouterF
  ajouterF(id: number, f: Formation) {
    return this.http.post<Formation>('http://localhost:4222/formations/' + id, f);
  }

  //Methode supprimer
  supprimer(idFormation: number) {
    return this.http.delete('http://localhost:4222/formations/' + idFormation);

  }

  //Methode modifierF
  modifierF(id: number, formation: Formation) {
    return this.http.put<Formation>('http://localhost:4222/formations/' + id, formation);
  }

  //Methode getById
  getById(idFormation: number) {
    return this.http.get<Formation>('http://localhost:4222/formations/' + idFormation);
  }

  //Methode getByIdFormateur
  getByIdFormateur(idFormateur: number) {
    return this.http.get<Formation>('http://localhost:4222/formationsParFormateur/' + idFormateur);
  }

   //Methode recuperer formations associé participant
   formationsByIdParticipant(idParticipant:number)
   {
     return this.http.get<Formation[]>('http://localhost:4222/formationsByIdParticipant/'+idParticipant);
   }

//Methode getByName
getByName(libForm:string)
{
  return this.http.get<Formation>('http://localhost:4222/formationsName/'+libForm);
}

//Methode getByPrice
getByPrice(prix:number)
{
  return this.http.get<Formation>('http://localhost:4222/formationsPrix/'+prix);
}


}
