import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from '../models/Formateur.model';
import { Formation } from '../models/Formation.model';
import { Role } from '../models/Role.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { FormateurService } from '../service/formateur.service';
import { ListeFormationsService } from '../service/liste-formations.service';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-add-formations',
  templateUrl: './add-formations.component.html',
  styleUrls: ['./add-formations.component.css']
})
export class AddFormationsComponent implements OnInit {

  formation!: Formation;

  formateurs!: Formateur[];

  selectedId!: number;
  roles!: Role[]
  roleF !: number
  roleC !: number
  roleA !: number
  roleP !: number
  roleAdmin !: number


  constructor(private route: Router,
    private service: ListeFormationsService,
    private serviceF: FormateurService) { }

  //Methode ngOnInit
  ngOnInit(): void {
    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);
    this.formation = new Formation;
    this.chargerFormateur();
    this.selectedId = 0;

  }

  //AjouterFormation
  AjouterFormation() {
    this.service.ajouterF(this.selectedId, this.formation).subscribe(
      response => {
        this.route.navigateByUrl('afficherFormation');
      }
    )
  }

  //Methode chargerFormateur()
  chargerFormateur() {
    this.serviceF.getAll().subscribe(
      response => {
        this.formateurs = response;
      }
    )
  }

  //Methode afficherFormations
  afficherFormations() {
    this.route.navigateByUrl('afficherFormation');
  }


}
