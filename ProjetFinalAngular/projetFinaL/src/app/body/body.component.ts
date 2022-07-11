import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../models/Formation.model';
import { Role } from '../models/Role.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ListeFormationsService } from '../service/liste-formations.service';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

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
    this.recupererRoles();

    if (this.roleAdmin = 1) {
      this.router.navigateByUrl('pageAdmin');

    }


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


  // Espace perso de l'utilisateur
  EspacePerso() {
    this.router.navigateByUrl('espacePerso');
  }
}
