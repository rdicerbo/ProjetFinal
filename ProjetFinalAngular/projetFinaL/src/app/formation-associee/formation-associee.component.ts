import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../models/Role.model';
import { Formation } from '../models/Formation.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ListeFormationsService } from '../service/liste-formations.service';

@Component({
  selector: 'app-formation-associee',
  templateUrl: './formation-associee.component.html',
  styleUrls: ['./formation-associee.component.css']
})
export class FormationAssocieeComponent implements OnInit {

  formations!: Formation[]
  roles!: Role[]
  roleF !: number
  roleC !: number
  roleA !: number
  roleP !: number
  roleAdmin !: number

  constructor(private service: ListeFormationsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);
    this.FormationAssociee();
  }

  //Methode FormationAssociee
  FormationAssociee() {

    const id = +this.route.snapshot.params['id'];
    this.service.getByIdFormateur(id).subscribe(
      response => {
        this.formations = response
      }
    )
  }

  // Bouton retour
  retour() {
    this.router.navigateByUrl('afficherFormateur')
  }

}
