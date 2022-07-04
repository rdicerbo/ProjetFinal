import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/Admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http:HttpClient) { }

  
//Methode getAll
getAll()
{
  return this.http.get<Admin[]>('http://localhost:4222/admins');
}


//Methode ajouterA
ajouterA(admin:Admin)
{
  return this.http.post<Admin>('http://localhost:4222/admins',admin);
}

//Methode supprimer
supprimer(idAdmin:number)
{ 
  return this.http.delete('http://localhost:4222/admins/'+idAdmin);

}

//Methode modifierF
modifierA(admin:Admin)
{
  return this.http.put<Admin>('http://localhost:4222/admins',admin);
}

//Methode getById
getById(idAdmin:number)
{
  return this.http.get<Admin>('http://localhost:4222/admins/'+idAdmin);
}
}
