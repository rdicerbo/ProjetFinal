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
  roleF !: number
  roleC !: number
  roleA !: number
  roleP !: number
  roleAdmin !: number


  constructor(private service: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);

  }

  // Espace perso de l'utilisateur
  EspacePerso() {
    this.router.navigateByUrl('espacePerso');
  }
}
