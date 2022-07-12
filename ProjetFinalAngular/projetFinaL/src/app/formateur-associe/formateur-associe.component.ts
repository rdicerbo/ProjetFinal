import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from '../models/Formateur.model';
import { Role } from '../models/Role.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { FormateurService } from '../service/formateur.service';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-formateur-associe',
  templateUrl: './formateur-associe.component.html',
  styleUrls: ['./formateur-associe.component.css']
})
export class FormateurAssocieComponent implements OnInit {

  utilisateur!: Utilisateur;
  roles!: Role[]
  roleF !: number
  roleC !: number
  roleA !: number
  roleP !: number
  roleAdmin !: number

  constructor(private router: Router,
    private service: UtilisateurService,
    private route: ActivatedRoute) { }

  //Methode ngOnInit
  ngOnInit(): void {
    
    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);
    this.utilisateur = new Utilisateur;
    this.FormateurAssocie();
  }

  //Methode FormateurAssocie
  FormateurAssocie() {
    const id = +this.route.snapshot.params['id'];
    this.service.getById(id).subscribe(
      response => {
        this.utilisateur = response
      }
    )
  }


//Methode afficherFormations
afficherFormations()
{
  this.router.navigateByUrl('afficherFormation');
}

  // Bouton retour
  retour() {
    this.router.navigateByUrl('afficherFormation')
  }




}
