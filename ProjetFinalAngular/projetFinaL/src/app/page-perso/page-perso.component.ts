import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/Utilisateur.model';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-page-perso',
  templateUrl: './page-perso.component.html',
  styleUrls: ['./page-perso.component.css']
})
export class PagePersoComponent implements OnInit {

  utilisateur!: Utilisateur

  constructor(private service: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    console.log(this.utilisateur.nom)
  }

  modifierPassword() {
    this.router.navigateByUrl('modifPassword')
  }

}
