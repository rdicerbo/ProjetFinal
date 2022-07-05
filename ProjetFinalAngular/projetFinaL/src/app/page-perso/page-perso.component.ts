import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../models/Role.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-page-perso',
  templateUrl: './page-perso.component.html',
  styleUrls: ['./page-perso.component.css']
})
export class PagePersoComponent implements OnInit {

  utilisateur!: Utilisateur
  roles!: Role[]
  roleF = 0
  roleC = 0
  roleA = 0
  roleP = 0
  roleAdmin = 0

  constructor(private service: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    console.log(this.utilisateur.nom)

    this.recupererRoles();


  }

  modifierPassword() {
    this.router.navigateByUrl('modifPassword')
  }


//Methode afficherFormations
afficherFormations()
{
  this.router.navigateByUrl('afficherFormation');
}


  recupererRoles() {
    const id = this.utilisateur.id
    this.service.rolesByIdUser(id).subscribe(
      response => {
        this.roles = response
        //console.log(this.roles.length)
        for (let i = 0; i < 5; i++) {

          if (this.roles[i].idRole == 2) {
            this.roleC = 1
          }
          if (this.roles[i].idRole == 5) {
            this.roleF = 1
          }
          if (this.roles[i].idRole == 3) {
            this.roleA = 1
          }
          if (this.roles[i].idRole == 4) {
            this.roleP = 1
          }
          if (this.roles[i].idRole == 1) {
            this.roleAdmin = 1

          }
        }
      }
    )
  }


}
