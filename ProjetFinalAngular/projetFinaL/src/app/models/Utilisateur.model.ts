import { Role } from "./Role.model";

export class Utilisateur
{
  id!: number;
  nom!:string;
  prenom!:string;
  username!:string;
  password!:number;
  mail!: string;

  role!:Role[];


}
