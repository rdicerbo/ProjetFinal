import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../models/Formation.model';
import { Participant } from '../models/Participant.model';
import { Role } from '../models/Role.model';
import { ListeFormationsService } from '../service/liste-formations.service';
import { ParticipantService } from '../service/participant.service';

@Component({
  selector: 'app-formation-associe-participant',
  templateUrl: './formation-associe-participant.component.html',
  styleUrls: ['./formation-associe-participant.component.css']
})
export class FormationAssocieParticipantComponent implements OnInit {

  formations!:Formation[];
  roleF !: number
  roleC !: number
  roleA !: number
  roleP !: number
  roleAdmin !: number

  constructor(private router:Router,
    private service:ListeFormationsService,
    private route: ActivatedRoute) { }

  //Methode ngOnInit
  ngOnInit(): void 
  {
    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);
    this.afficher();
  }

  //Methode FormateurAssocie
  afficher()
  {
    const id=+this.route.snapshot.params['id'];
    this.service.formationsByIdParticipant(id).subscribe(
      response =>
      {
        this.formations=response
      }
    )
  }
  

 Retour()
 {
   this.router.navigateByUrl('afficherParticipants');
 }


}
