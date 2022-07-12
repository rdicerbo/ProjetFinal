import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Relance } from '../models/Relance.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { RelanceService } from '../service/relance.service';

@Component({
  selector: 'app-relance-associe-participant',
  templateUrl: './relance-associe-participant.component.html',
  styleUrls: ['./relance-associe-participant.component.css']
})

export class RelanceAssocieParticipantComponent implements OnInit {
  @Input() utilisateur !: Utilisateur;

  relances!: Relance[];
  id!: number;
  roleF !: number
  roleC !: number
  roleA !: number
  roleP !: number
  roleAdmin !: number

  constructor(private router: Router,
    private service: RelanceService,
    private route: ActivatedRoute) { }

  //Methode ngOnInit
  ngOnInit(): void {
    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);
    this.afficher();
  }

  //Methode FormateurAssocie
  afficher() {
    this.id = +this.route.snapshot.params['id'];

    if (isNaN(this.id)) {

      this.service.relancesByIdParticipant(this.utilisateur.id).subscribe(
        response => {
          this.relances = response
        }
      )
    } else {

      this.service.relancesByIdParticipant(this.id).subscribe(
        response => {
          this.relances = response
        }
      )
    }
  }


  Retour() {
    this.router.navigateByUrl('afficherParticipants');
  }
}
