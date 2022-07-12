import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from '../models/Formateur.model';
import { Role } from '../models/Role.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { FormateurService } from '../service/formateur.service';

@Component({
  selector: 'app-add-formateurs',
  templateUrl: './add-formateurs.component.html',
  styleUrls: ['./add-formateurs.component.css']
})
export class AddFormateursComponent implements OnInit {

  formateur!: Formateur
  roles!: Role[]
  roleF !: number
  roleC !: number
  roleA !: number
  roleP !: number
  roleAdmin !: number

  constructor(private service: FormateurService, private router: Router) { }

  ngOnInit(): void {
    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);
    this.formateur = new Formateur
  }

  //AjouterFormateur
  AjouterFormateur() {
    this.service.ajouterF(this.formateur).subscribe(
      response => {
        this.router.navigateByUrl('afficherFormateur');
      }
    )
  }

  //Methode afficherFormateurs
  afficherFormateurs() {
    this.router.navigateByUrl('afficherFormateur');
  }
}
