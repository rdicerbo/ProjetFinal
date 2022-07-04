import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assistant } from '../models/Assistant.model';

@Injectable({
  providedIn: 'root'
})
export class ListeAssistantsService {

  constructor(private http:HttpClient) { }

//Methode getAll
getAll()
{
  return this.http.get<Assistant[]>('http://localhost:4222/assistants');
}

//Methode supprimer
supprimer(idAssistant:number)
{ 
  return this.http.delete('http://localhost:4222/assistants/'+idAssistant);

}

//Methode ajouterA
ajouterA(a:Assistant)
{
  return this.http.post<Assistant>('http://localhost:4222/assistants',a);
}

//Methode modifierA
modifierA(assistant:Assistant)
{
  return this.http.put<Assistant>('http://localhost:4222/assistants',assistant);
}

//Methode getById
getById(idAssistant:number)
{
  return this.http.get<Assistant>('http://localhost:4222/assistants/'+idAssistant);
}

//Methode getByName
getByName(nom:string)
{
  return this.http.get<Assistant>('http://localhost:4222/assistantsByName/'+nom);
}

}
