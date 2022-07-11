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
  roleF !: number
  roleC !: number
  roleA !: number
  roleP !: number
  roleAdmin !: number

  constructor(private service: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);


  }

  modifierPassword() {
    this.router.navigateByUrl('modifPassword')
  }


  //Methode afficherFormations
  afficherFormations() {
    this.router.navigateByUrl('');
  }


}