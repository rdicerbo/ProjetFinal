import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from '../models/Formateur.model';
import { Role } from '../models/Role.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { FormateurService } from '../service/formateur.service';

@Component({
  selector: 'app-liste-formateurs',
  templateUrl: './liste-formateurs.component.html',
  styleUrls: ['./liste-formateurs.component.css']
})
export class ListeFormateursComponent implements OnInit {

  formateurs!: Formateur[];

  roles!: Role[]
  roleF !: number
  roleC !: number
  roleA !: number
  roleP !: number
  roleAdmin !: number

  constructor(private service: FormateurService, private router: Router) { }

  ngOnInit(): void {
    this.chargerFormateurs()
    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);
  }

  chargerFormateurs() {
    this.service.getAll().subscribe(
      response => {
        this.formateurs = response;
      }
    )
  }


  //Methode supprimer
  supprimer(idFormateur: number) {
    this.service.supprimer(idFormateur).subscribe(
      response => {

        this.chargerFormateurs();
      }
    )
    this.router.navigateByUrl('afficherFormateur');
  }


  //Methode modifier
  modifier(idFormateur: number) {
    this.router.navigateByUrl('modifierFormateur/' + idFormateur);
  }


  //Methode AjouterFormateur
  AjouterFormateur() {
    this.router.navigateByUrl('AjouterFormateur');
  }

  //Methode afficher
  afficher(id: number): void {
    this.router.navigateByUrl('afficherFormationAssociee/' + id)
  }



}
